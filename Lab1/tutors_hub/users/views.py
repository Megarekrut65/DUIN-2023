import datetime

from django.contrib.auth import login
from django.contrib.auth.decorators import login_required
from django.http import HttpResponseRedirect
from django.shortcuts import render, redirect, get_object_or_404
from django.urls import reverse

from tutors.models import Subject
from users.decorators import teacher_required
from users.forms import RegisterForm, SubjectForm
from users.models import User


# Create your views here.
def register(response):
    if response.method == "POST":
        form = RegisterForm(response.POST)
        if form.is_valid():
            user = form.save()

            login(response, user)
            return redirect("/")
    else:
        form = RegisterForm()

    return render(response, "users/register.html", {"form": form})


@login_required
def account(request):
    if request.user.role == User.Types.Student:
        return render(request, "users/student.html")

    if request.user.role == User.Types.Teacher:
        return render(request, "users/teacher/teacher_home.html")

    return render(request, "registration/login.html")

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
            return render(request, "users/teacher/teacher_subject.html", {"form": form})
        return HttpResponseRedirect("/account/subjects")
    else:
        form = SubjectForm()

    return render(request, "users/teacher/teacher_subject.html", {"form": form})


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
        return render(request, "users/teacher/teacher_subject.html", {"form": form})
    else:
        form = SubjectForm(instance=subject)

    return render(request, "users/teacher/teacher_subject.html", {"form": form})


@login_required
def account_subjects(request):
    if request.user.role == User.Types.Student:
        return render(request, "users/student.html")

    if request.user.role == User.Types.Teacher:
        subjects = Subject.objects.filter(teacher=request.user)
        return render(request, "users/teacher/teacher_subjects.html", {"subjects": subjects})

    return render(request, "registration/login.html")