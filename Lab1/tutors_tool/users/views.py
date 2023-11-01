from django.contrib.auth import login
from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect

from users.forms import RegisterForm
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
def student_account(request):
    if request.user.role == User.Types.Student:
        return render(request, "users/student.html")

    if request.user.role == User.Types.Teacher:
        return render(request, "users/teacher.html")

    return render(request, "registration/login.html")


