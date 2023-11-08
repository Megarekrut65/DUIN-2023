from functools import wraps
from django.http import HttpResponseForbidden

from users.models import User
from django.contrib.auth.decorators import login_required


def teacher_required(view_func):
    @wraps(view_func)
    def _wrapped_view(request, *args, **kwargs):
        # Check if the user has the role "TEACHER"
        if hasattr(request.user, "role") and request.user.role == User.Types.Teacher:
            return view_func(request, *args, **kwargs)
        else:
            return HttpResponseForbidden("You don't have permission to access this page.")

    return _wrapped_view


def student_required(view_func):
    @wraps(view_func)
    def _wrapped_view(request, *args, **kwargs):
        # Check if the user has the role "STUDENT"
        if hasattr(request.user, "role") and request.user.role == User.Types.Student:
            return view_func(request, *args, **kwargs)
        else:
            return HttpResponseForbidden("You don't have permission to access this page.")

    return _wrapped_view


class TeacherRequiredMixin:
    @classmethod
    def as_view(cls, **initkwargs):
        view = super().as_view(**initkwargs)
        return login_required(teacher_required(view))


class StudentRequiredMixin:
    @classmethod
    def as_view(cls, **initkwargs):
        view = super().as_view(**initkwargs)
        return login_required(student_required(view))
