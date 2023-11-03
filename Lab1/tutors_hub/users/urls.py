from django.urls import path

from . import views

urlpatterns = [
    path("register/", views.register, name="register"),
    path("account/", views.student_account, name="account")
]
