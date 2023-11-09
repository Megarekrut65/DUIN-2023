from django.contrib.auth import login
from django.shortcuts import render, redirect

from users.forms import RegisterForm


def register(request):
    if request.method == "POST":
        form = RegisterForm(request.POST)
        if form.is_valid():
            user = form.save()

            login(request, user)
            return redirect("/")
    else:
        form = RegisterForm()

    return render(request, "users/register.html", {"form": form})
