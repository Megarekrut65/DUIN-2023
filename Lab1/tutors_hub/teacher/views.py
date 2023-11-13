import datetime

from django.contrib.auth.decorators import login_required
from django.http import HttpResponseRedirect
from django.shortcuts import render, get_object_or_404
from django.views import generic

from tutors.models import Subject, Subscription, Schedule
from tutors_hub.decorators import teacher_required, TeacherRequiredMixin
from tutors_hub.utilities import get_week_days, get_time_range
from .forms import SubjectForm, ScheduleForm, ScheduleFormUser, ReportForm, ReportFormUser
from .models import Report

date_format = "%Y-%m-%d"


@teacher_required
@login_required
def create_subject(request):
    """
        Creates subject for current teacher and saves it to database
    """
    if request.method == "POST":
        form = SubjectForm(request.POST)
        if form.is_valid():
            subject = form.save(commit=False)
            subject.teacher = request.user
            subject.save()
        else:
            return render(request, "teacher/subject.html", {"form": form})
        return HttpResponseRedirect("/teacher/subjects")
    else:
        form = SubjectForm()

    return render(request, "teacher/subject.html", {"form": form})


@teacher_required
@login_required
def delete_subject(request, subject_id):
    if request.method == "POST":
        subject = get_object_or_404(Subject, pk=subject_id)
        if subject and subject.teacher == request.user:
            subject.delete()
            return HttpResponseRedirect("/teacher/subjects")

    return HttpResponseRedirect("404.html")


@teacher_required
@login_required
def change_subject(request, subject_id):
    subject = get_object_or_404(Subject, pk=subject_id)
    if not subject or subject.teacher != request.user:
        return HttpResponseRedirect("404.html")

    if request.method == "POST":
        form = SubjectForm(request.POST, instance=subject)

        if form.is_valid():
            form.save()
            return HttpResponseRedirect("/teacher/subjects")
        return render(request, "teacher/subject.html", {"form": form})
    else:
        form = SubjectForm(instance=subject)

    return render(request, "teacher/subject.html", {"form": form})


class SubjectsView(TeacherRequiredMixin, generic.ListView):
    paginate_by = 12
    template_name = "teacher/subjects.html"
    context_object_name = "subjects"

    def get_queryset(self):
        return Subject.objects.filter(teacher=self.request.user)


class StudentsView(TeacherRequiredMixin, generic.ListView):
    paginate_by = 12
    template_name = "teacher/students.html"
    context_object_name = "subscriptions"

    def get_queryset(self):
        subjects = Subject.objects.filter(teacher=self.request.user)

        return Subscription.objects.filter(subject__in=subjects).order_by("-active", "-subscribed")


@teacher_required
@login_required
def account_schedule(request, date=None):
    """
        View for teacher schedule
    """
    try:
        date = datetime.datetime.strptime(date, date_format)
    except:
        date = datetime.datetime.now()

    days = get_week_days(date)
    days = [{"name": day.strftime("%A"), "date": day.strftime(date_format), "selected": (date == day)} for day in days]

    schedules = Schedule.objects \
        .filter(date=date.date(), subscription__subject__teacher=request.user) \
        .order_by("start_time")

    return render(request, "teacher/schedule_tab.html",
                  {"schedules": schedules, "days": days, "current": date.strftime(date_format)})


@teacher_required
@login_required
def create_schedule(request, date=None):
    if request.method == "POST":
        form = ScheduleForm(request.POST)
        if form.is_valid():
            schedule = form.save()
        else:
            request.method = "GET"
            return render(request, "teacher/schedule.html", {"form": form})

        date = schedule.date
        return HttpResponseRedirect("/teacher/schedule/" + date.strftime(date_format))
    else:
        try:
            date = datetime.datetime.strptime(date, date_format).date()
        except:
            date = datetime.datetime.now().date()

        form = ScheduleFormUser(request.user, initial={"date": date})

    return render(request, "teacher/schedule.html", {"form": form})


@teacher_required
@login_required
def change_schedule(request, schedule_id):
    schedule = get_object_or_404(Schedule, pk=schedule_id)

    if not schedule or schedule.subscription.subject.teacher != request.user:
        return HttpResponseRedirect("404.html")

    if request.method == "POST":
        form = ScheduleForm(request.POST, instance=schedule)

        if form.is_valid():
            schedule = form.save()
            return HttpResponseRedirect("/teacher/schedule/" + schedule.date.strftime(date_format))

        return render(request, "teacher/schedule.html", {"form": form})
    else:
        form = ScheduleFormUser(user=request.user, instance=schedule)

    return render(request, "teacher/schedule.html", {"form": form})


@teacher_required
@login_required
def delete_schedule(request, schedule_id):
    if request.method == "POST":
        schedule = get_object_or_404(Schedule, pk=schedule_id)
        if schedule and not schedule.done and schedule.subscription.subject.teacher == request.user:
            schedule.delete()
            return HttpResponseRedirect("/teacher/schedule")

    return HttpResponseRedirect("404.html")


def complete_schedule(request, schedule_id, redirect_path, add_id=False):
    """
        Marks current lesson as completed
    """
    if request.POST:
        schedule = get_object_or_404(Schedule, pk=schedule_id)

        if schedule and schedule.subscription.subject.teacher == request.user:
            schedule.done = True
            schedule.save()
            schedule.subscription.lesson_count += 1
            schedule.subscription.save()

        if add_id:
            redirect_path += str(schedule.subscription.id)
        return HttpResponseRedirect(redirect_path)

    return HttpResponseRedirect("404.html")


@teacher_required
@login_required
def complete_lesson(request, schedule_id, date=None):
    try:
        date = datetime.datetime.strptime(date, date_format)
    except:
        date = datetime.datetime.now()

    return complete_schedule(request, schedule_id, "/teacher/schedule/" + date.strftime(date_format))


def get_report_doc(report):
    """
        Returns dic for report doc page
    """
    start = report.start_lesson
    if start <= 0:
        start = 1

    end = report.end_lesson

    lessons = Schedule.objects.filter(subscription=report.subscription)
    lessons = lessons[start-1:end]

    begin = 1 if report.start_from_number_one else start

    lessons = [{"number": begin + i,
                "date": lesson.date.strftime(date_format),
                "time_range": get_time_range(lesson.start_time, lesson.end_time)}
               for i, lesson in enumerate(lessons)]

    student_name = report.subscription.student.fullname
    subject_name = report.subscription.subject.title

    report.header = report.header.replace("$student", student_name).replace("$subject", subject_name)
    report.footer = report.footer.replace("$student", student_name).replace("$subject", subject_name)

    lessons = [report.lesson_title
               .replace("$student", student_name)
               .replace("$subject", subject_name)
               .replace("$number", str(lesson["number"]))
               .replace("$time", lesson["time_range"])
               .replace("$date", lesson["date"])
               for lesson in lessons]

    return {"report": report, "lessons": lessons}


@teacher_required
@login_required
def report_doc(request, report_id):
    report = get_object_or_404(Report, pk=report_id)
    if report and report.teacher == request.user:
        return render(request, "teacher/report_doc.html", get_report_doc(report))

    return HttpResponseRedirect("404.html")


@teacher_required
@login_required
def create_report(request):
    reports = Report.objects.filter(teacher=request.user)

    if len(reports) == 0:
        report = Report()
        report.teacher = request.user
        report.save()
    else:
        report = reports[0]

    if request.method == "POST":
        form = ReportForm(request.POST, instance=report)
        if form.is_valid():
            form.save()
        else:
            return render(request, "teacher/report.html", {"form": form})

        return HttpResponseRedirect(f"/teacher/report/{report.id}/doc")
    else:
        form = ReportFormUser(request.user, instance=report)

    return render(request, "teacher/report.html", {"form": form})
