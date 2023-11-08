from django.urls import path

from . import views

urlpatterns = [
    path("subscription/<int:pk>/", views.SubscriptionView.as_view(), name="subscription"),
    path("subject/<int:subject_id>/", views.subject_view, name="subject"),
    path("subject/<int:subject_id>/subscribe", views.subscribe_on_subject, name="subject_subscribe"),
    path("subject/<int:subscription_id>/unsubscribe", views.unsubscribe_on_subject, name="subject_unsubscribe"),
    path("subjects/", views.SubjectsView.as_view(), name="subjects")
]