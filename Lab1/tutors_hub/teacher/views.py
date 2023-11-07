from django.contrib.auth.decorators import login_required
from django.http import HttpResponseRedirect
from django.shortcuts import render
from django.views import generic

from tutors.models import Subject, Subscription
from tutors_hub.decorators import teacher_required, TeacherRequiredMixin
from .forms import SubjectForm


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
        return HttpResponseRedirect("/account/subjects")
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
            return HttpResponseRedirect("/account/subjects")

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
        subjects = Subject.objects.filter(teacher= self.request.user)
        return Subscription.objects.filter(subject__in=subjects).order_by("-active", "-subscribed")

