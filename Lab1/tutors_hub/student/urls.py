from django.urls import path

from . import views

urlpatterns = [
    path("", views.account_schedule, name="account_schedule"),
    path("schedule/", views.account_schedule, name="account_schedule"),
    path("schedule/<str:date>", views.account_schedule, name="account_schedule"),
    path("subscriptions/", views.StudentsView.as_view(), name="account_subscriptions")
]
