from django.db import models

from tutors.models import Subscription
from users.models import User


class Report(models.Model):
    """
        Model for report in database
    """
    teacher = models.ForeignKey(User, on_delete=models.CASCADE)
    subscription = models.ForeignKey(Subscription, on_delete=models.SET_NULL, null=True)

    header = models.CharField(max_length=200, default="$student in $subject")
    footer = models.CharField(max_length=200, default="")

    start_lesson = models.IntegerField(default=1)
    end_lesson = models.IntegerField(default=10)
    start_from_number_one = models.BooleanField(default=False)
    only_completed = models.BooleanField(default=True)

    lesson_title = models.CharField(max_length=100, default="Lesson #$number - $time $date")

    def __str__(self):
        return f"Report of {self.teacher.email}"
