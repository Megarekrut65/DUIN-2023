from django.urls import path

from . import views

urlpatterns = [
    path("register/", views.register, name="register"),
    path("account/", views.account, name="account"),
    path("account/subjects", views.account_subjects, name="account_subjects")
]
