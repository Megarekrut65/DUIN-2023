from django.urls import path

from . import views

urlpatterns = [
    path("tutors/", views.IndexView.as_view(), name="tutors"),
    path("subscription/<int:pk>/", views.SubscriptionView.as_view(), name="subscription"),
    path("subject/<int:subject_id>/", views.subject_view, name="subject"),
    path("subject/<int:subject_id>/subscribe", views.subscribe_on_subject, name="subject_subscribe"),
    path("subject/<int:subscription_id>/unsubscribe", views.unsubscribe_on_subject, name="subject_unsubscribe"),
    path("subjects/", views.SubjectsView.as_view(), name="subjects"),
    path("<int:pk>/", views.DetailView.as_view(), name="detail"),
    path("<int:pk>/results/", views.ResultsView.as_view(), name="results"),
    path("<int:question_id>/vote/", views.vote, name="vote")
]