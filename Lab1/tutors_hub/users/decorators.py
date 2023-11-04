from functools import wraps
from django.http import HttpResponseForbidden

from users.models import User


def teacher_required(view_func):
    @wraps(view_func)
    def _wrapped_view(request, *args, **kwargs):
        # Check if the user has the role "TEACHER"
        if request.user.role == User.Types.Teacher:
            return view_func(request, *args, **kwargs)
        else:
            return HttpResponseForbidden("You don't have permission to access this page.")

    return _wrapped_view
