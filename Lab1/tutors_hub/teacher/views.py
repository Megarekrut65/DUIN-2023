import datetime

from django.contrib.auth.decorators import login_required
from django.http import HttpResponseRedirect
from django.shortcuts import render
from django.views import generic

from tutors.models import Subject, Subscription, Schedule
from tutors.utilities import get_week_days
from tutors_hub.decorators import teacher_required, TeacherRequiredMixin
from .forms import SubjectForm, ScheduleForm


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
            print(subject)
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
            return HttpResponseRedirect("/account/subjects")
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
    format_ = "%Y-%m-%d"
    try:
        date = datetime.datetime.strptime(date, format_)
    except:
        date = datetime.datetime.now()

    days = get_week_days(date)
    days = [{"name": day.strftime("%A"), "date": day.strftime(format_), "selected": (date == day)} for day in days]

    schedules = Schedule.objects.filter(date=date.date(), subscription__subject__teacher=request.user)

    return render(request, "teacher/home.html",
                  {"schedules": schedules, "days": days, "current": date.strftime(format_)})


@teacher_required
@login_required
def create_schedule(request):
    if request.method == "POST":
        form = ScheduleForm(request.POST)
        if form.is_valid():
            schedule = form.save()
        else:
            return render(request, "teacher/schedule.html", {"form": form})

        date = schedule.date
        return HttpResponseRedirect("/teacher/schedule/" + date.strftime("%Y-%m-%d"))
    else:
        form = ScheduleForm()

    return render(request, "teacher/schedule.html", {"form": form})

