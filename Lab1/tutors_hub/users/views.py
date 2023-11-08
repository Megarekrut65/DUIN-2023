from django.contrib.auth import login
from django.contrib.auth.decorators import login_required
from django.http import HttpResponseRedirect
from django.shortcuts import render, redirect

from users.forms import RegisterForm
from users.models import User


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




