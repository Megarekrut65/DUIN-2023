from django.db import models

from users.models import User


class Subject(models.Model):
    teacher = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=5000)

    lesson_price = models.IntegerField(default=0)
    lesson_duration = models.IntegerField(default=60)
    work_schedule = models.CharField(max_length=1000)

    published = models.DateTimeField("date published")
    visible = models.BooleanField(default=True)


class Subscription(models.Model):
    student = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE)
    comment = models.CharField(max_length=1000)
    subscribed = models.DateTimeField()

    active = models.BooleanField(default=True)
    lesson_count = models.IntegerField(default=0)

    def __str__(self):
        return f"{self.subject.title[:30]} - {self.student.fullname[:30]} ({self.lesson_count})"


class Schedule(models.Model):
    subscription = models.ForeignKey(Subscription, on_delete=models.CASCADE)

    date = models.DateField()

    start_time = models.TimeField()
    end_time = models.TimeField()

    done = models.BooleanField(default=False)
