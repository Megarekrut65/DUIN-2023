from django.urls import path

from . import views

urlpatterns = [
    path("", views.account_schedule, name="teacher"),
    path("schedule/<int:schedule_id>/edit", views.change_schedule, name="change_schedule"),
    path("schedule/<int:schedule_id>/delete", views.delete_schedule, name="delete_schedule"),
    path("schedule/create", views.create_schedule, name="create_schedule"),
    path("schedule/create/<str:date>", views.create_schedule, name="create_schedule"),

    path("schedule/", views.account_schedule, name="teacher"),
    path("schedule/<str:date>", views.account_schedule, name="schedule"),

    path("students/", views.StudentsView.as_view(), name="account_students"),

    path("subjects/", views.SubjectsView.as_view(), name="account_subjects"),

    path("subject/<int:subject_id>", views.change_subject, name="change_subject"),
    path("subject/", views.create_subject, name="create_subject"),
    path("subject/<int:subject_id>/delete", views.delete_subject, name="delete_subject")
]
