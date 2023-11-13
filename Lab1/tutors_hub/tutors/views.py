import datetime

from django.contrib.auth.decorators import login_required
from django.core.paginator import Paginator
from django.db.models import Q
from django.http import HttpResponseRedirect
from django.shortcuts import render, get_object_or_404
from django.views import generic

from teacher.views import complete_schedule
from tutors_hub.decorators import student_required, teacher_required
from users.models import User
from .models import Subject, Subscription, Schedule


class SubjectsView(generic.ListView):
    paginate_by = 12
    template_name = "tutors/subjects.html"
    context_object_name = "subjects_list"

    def get_queryset(self):
        pattern = self.request.GET.get("pattern", None)
        pattern = "" if pattern is None else pattern

        return Subject.objects \
            .filter(visible=True) \
            .filter(Q(title__icontains=pattern) | Q(description__icontains=pattern)) \
            .order_by("title")


def get_active(request, subject):
    """
        Returns true if user have active subscription to this subject
    """
    active = False
    if request.user and hasattr(request.user, "role") and request.user.role == User.Types.Student:
        subscriptions = Subscription.objects.filter(subject=subject, student=request.user, active=True)

        active = len(subscriptions) > 0

    return active


def subject_view(request, subject_id):
    subject = get_object_or_404(Subject, pk=subject_id)
    if subject:
        active = get_active(request, subject)
        available = request.user and hasattr(request.user, "role") and request.user.role == User.Types.Student

        return render(request, "tutors/subject.html", {"subject": subject, "active": active, "available": available})

    return "404.html"


@login_required
@student_required
def subscribe_on_subject(request, subject_id):
    if request.POST:
        subject = get_object_or_404(Subject, pk=subject_id)
        if subject:
            subscription = Subscription(student=request.user, subject=subject, comment=request.POST["comment"],
                                        subscribed=datetime.datetime.now(), active=True, lesson_count=0)

            subscription.save()

        return HttpResponseRedirect("/subject/" + str(subject_id))

    return "404.html"


@login_required
def unsubscribe_on_subject(request, subscription_id):
    if request.POST:
        subscription = get_object_or_404(Subscription, pk=subscription_id)
        if subscription and (subscription.student == request.user or subscription.subject.teacher == request.user):
            subscription.active = False
            subscription.save()

        return HttpResponseRedirect("/subscription/" + str(subscription_id))

    return "404.html"


@teacher_required
@login_required
def complete_lesson(request, schedule_id):
    return complete_schedule(request, schedule_id, "/subscription/", add_id=True)


@login_required
def subscription_view(request, subscription_id):
    subscription = get_object_or_404(Subscription, pk=subscription_id)

    if subscription and (subscription.student == request.user or subscription.subject.teacher == request.user):
        schedules = Schedule.objects.filter(subscription=subscription).order_by("-date", "-start_time")
        paginator = Paginator(schedules, 12)

        page_number = request.GET.get("page")
        page_obj = paginator.get_page(page_number)

        return render(request, "tutors/subscription.html", {"subscription": subscription, "page_obj": page_obj})

    return "404.html"
