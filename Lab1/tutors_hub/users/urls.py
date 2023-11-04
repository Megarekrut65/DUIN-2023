from django.urls import path

from . import views

urlpatterns = [
    path("register/", views.register, name="register"),
    path("account/", views.account, name="account"),
    path("account/subjects", views.account_subjects, name="account_subjects"),
    path("account/subject/<int:subject_id>", views.change_subject, name="change_subject"),
    path("account/subject/", views.create_subject, name="create_subject"),
    path("account/subject/delete/<int:subject_id>", views.delete_subject, name="delete_subject")
]
