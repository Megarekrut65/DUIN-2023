from django.urls import path

from . import views

urlpatterns = [
    path("", views.home, name="student"),
    path("subscriptions", views.StudentsView.as_view(), name="account_subscriptions")
]
