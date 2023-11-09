import datetime

from django.contrib.auth.decorators import login_required
from django.shortcuts import render
from django.views import generic

from tutors.models import Subscription, Schedule
from tutors_hub.decorators import StudentRequiredMixin, student_required
from tutors_hub.utilities import get_week_days

date_format = "%Y-%m-%d"


class StudentsView(StudentRequiredMixin, generic.ListView):
    paginate_by = 24
    template_name = "student/subscriptions.html"
    context_object_name = "subscriptions"

    def get_queryset(self):
        return Subscription.objects.filter(student=self.request.user).order_by("-active", "-subscribed")


@student_required
@login_required
def account_schedule(request, date=None):
    try:
        date = datetime.datetime.strptime(date, date_format)
    except:
        date = datetime.datetime.now()

    days = get_week_days(date)
    days = [{"name": day.strftime("%A"), "date": day.strftime(date_format), "selected": (date == day)} for day in days]

    schedules = Schedule.objects \
        .filter(date=date.date(), subscription__student=request.user) \
        .order_by("start_time")

    return render(request, "student/schedule_tab.html",
                  {"schedules": schedules, "days": days, "current": date.strftime(date_format)})
