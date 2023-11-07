from django.urls import path

from . import views

urlpatterns = [
    path("subscriptions", views.account_subscriptions, name="account_subscriptions")
]
