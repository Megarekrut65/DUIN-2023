from django.urls import path

from . import views

urlpatterns = [
    path("tutors/", views.IndexView.as_view(), name="tutors"),
    path("subject/<int:pk>/", views.SubjectView.as_view(), name="subject"),
    path("subjects/", views.SubjectsView.as_view(), name="subjects"),
    path("<int:pk>/", views.DetailView.as_view(), name="detail"),
    path("<int:pk>/results/", views.ResultsView.as_view(), name="results"),
    path("<int:question_id>/vote/", views.vote, name="vote")
]