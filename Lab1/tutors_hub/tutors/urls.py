from django.urls import path

from . import views

urlpatterns = [
    path("schedule/<int:schedule_id>/complete", views.complete_lesson, name="complete_lesson"),
    path("subscription/<int:subscription_id>/", views.subscription_view, name="subscription"),
    path("subject/<int:subject_id>/", views.subject_view, name="subject"),
    path("subject/<int:subject_id>/subscribe", views.subscribe_on_subject, name="subject_subscribe"),
    path("subject/<int:subscription_id>/unsubscribe", views.unsubscribe_on_subject, name="subject_unsubscribe"),
    path("subjects/", views.SubjectsView.as_view(), name="subjects")
]