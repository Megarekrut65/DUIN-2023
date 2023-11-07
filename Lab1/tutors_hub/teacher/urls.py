from django.urls import path

from . import views

urlpatterns = [
    path("students", views.StudentsView.as_view(), name="account_students"),
    path("subjects", views.SubjectsView.as_view(), name="account_subjects"),
    path("subject/<int:subject_id>", views.change_subject, name="change_subject"),
    path("subject/", views.create_subject, name="create_subject"),
    path("subject/<int:subject_id>/delete", views.delete_subject, name="delete_subject")
]
