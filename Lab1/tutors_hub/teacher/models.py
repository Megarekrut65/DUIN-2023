from django.db import models

from tutors.models import Subscription
from users.models import User


class Report(models.Model):
    """
        Model for report in database
    """
    teacher = models.ForeignKey(User, on_delete=models.CASCADE)
    subscription = models.ForeignKey(Subscription, on_delete=models.SET_NULL, null=True)

    header = models.CharField(max_length=100, default="$student in $subject")
    footer = models.CharField(max_length=100, default="")

    start_lesson = models.IntegerField(default=1)
    end_lesson = models.IntegerField(default=10)
    start_from_one = models.BooleanField(default=False)

    lesson_prefix = models.CharField(max_length=100, default="Lesson #")
    lesson_suffix = models.CharField(max_length=100, default=".")
