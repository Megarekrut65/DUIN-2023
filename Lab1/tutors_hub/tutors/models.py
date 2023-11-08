
from django.db import models
from users.models import User


class Question(models.Model):
    question_text = models.CharField(max_length=200)
    pub_date = models.DateTimeField("date published")

    def __str__(self):
        return f"{self.question_text} - {self.pub_date}"


class Choice(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    choice_text = models.CharField(max_length=200)
    votes = models.IntegerField(default=0)


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
    student = models.ForeignKey(User, on_delete=models.CASCADE)
    subject = models.ForeignKey(Subject, on_delete=models.SET_NULL, null=True)
    comment = models.CharField(max_length=1000)
    subscribed = models.DateTimeField()

    active = models.BooleanField(default=True)
    lesson_count = models.IntegerField(default=0)


class Schedule(models.Model):
    subscription = models.ForeignKey(Subscription, on_delete=models.SET_NULL, null=True)
    datetime = models.DateTimeField()
    time_range = models.CharField(max_length=20)

    done = models.BooleanField(default=False)

