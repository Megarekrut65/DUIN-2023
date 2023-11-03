from django.contrib.auth import REDIRECT_FIELD_NAME
from django.contrib.auth.decorators import user_passes_test

from users.models import User


def for_students(function=None, redirect_field_name=REDIRECT_FIELD_NAME, login_url='login'):
    actual_decorator = user_passes_test(
        lambda u: u.role == User.Types.Student,
        login_url=login_url,
        redirect_field_name=redirect_field_name
    )
    if function:
        return actual_decorator(function)
    return actual_decorator


def for_teachers(function=None, redirect_field_name=REDIRECT_FIELD_NAME, login_url='login'):
    actual_decorator = user_passes_test(
        lambda u: u.role == User.Types.Teacher,
        login_url=login_url,
        redirect_field_name=redirect_field_name
    )
    if function:
        return actual_decorator(function)
    return actual_decorator
