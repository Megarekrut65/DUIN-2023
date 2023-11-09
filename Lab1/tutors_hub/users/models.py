from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    """User model."""

    username = None
    email = models.EmailField("email address", unique=True, max_length=100)
    fullname = models.CharField(max_length=100)

    class Types(models.TextChoices):
        Teacher = "TEACHER", "Teacher"
        Student = "STUDENT", "Student"

    role = models.CharField(
        max_length=20, choices=Types.choices, default=Types.Student
    )
    password = models.CharField(max_length=1000)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

