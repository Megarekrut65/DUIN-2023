import datetime

from django.contrib.auth.decorators import login_required
from django.http import HttpResponseRedirect
from django.shortcuts import render
from django.views import generic

from tutors.models import Subject, Subscription, Schedule
from tutors.utilities import get_week_days
from tutors_hub.decorators import teacher_required, TeacherRequiredMixin
from .forms import SubjectForm, ScheduleForm, ScheduleFormUser

date_format = "%Y-%m-%d"

@teacher_required
@login_required
def create_subject(request):
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
        subject = Subject.objects.get(pk=subject_id)
        if subject:
            subject.delete()
            return HttpResponseRedirect("/teacher/subjects")

    return "404.html"


@teacher_required
@login_required
def change_subject(request, subject_id):
    subject = Subject.objects.get(pk=subject_id)

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
    paginate_by = 24
    template_name = "teacher/subjects.html"
    context_object_name = "subjects"

    def get_queryset(self):
        return Subject.objects.filter(teacher=self.request.user)


class StudentsView(TeacherRequiredMixin, generic.ListView):
    paginate_by = 24
    template_name = "teacher/students.html"
    context_object_name = "subscriptions"

    def get_queryset(self):
        subjects = Subject.objects.filter(teacher=self.request.user)
        return Subscription.objects.filter(subject__in=subjects).order_by("-active", "-subscribed")


@teacher_required
@login_required
def account_schedule(request, date=None):
    try:
        date = datetime.datetime.strptime(date, date_format)
    except:
        date = datetime.datetime.now()

    days = get_week_days(date)
    days = [{"name": day.strftime("%A"), "date": day.strftime(date_format), "selected": (date == day)} for day in days]

    schedules = Schedule.objects\
        .filter(date=date.date(), subscription__subject__teacher=request.user)\
        .order_by("start_time")

    return render(request, "teacher/home.html",
                  {"schedules": schedules, "days": days, "current": date.strftime(date_format)})


@teacher_required
@login_required
def create_schedule(request, date=None):
    if request.method == "POST":
        form = ScheduleForm(request.POST)
        if form.is_valid():
            schedule = form.save()
        else:
            return render(request, "teacher/schedule.html", {"form": form})

        date = schedule.date
        return HttpResponseRedirect("/teacher/schedule/" + date.strftime(date_format))
    else:
        date = datetime.datetime.strptime(date, date_format).date() if date else datetime.datetime.now().date()
        form = ScheduleFormUser(request.user, initial={"date": date})

    return render(request, "teacher/schedule.html", {"form": form})


@teacher_required
@login_required
def change_schedule(request, schedule_id):
    schedule = Schedule.objects.get(pk=schedule_id)

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
        schedule = Schedule.objects.get(pk=schedule_id)
        if schedule and not schedule.done:
            schedule.delete()
            return HttpResponseRedirect("/teacher/schedule")

    return "404.html"

