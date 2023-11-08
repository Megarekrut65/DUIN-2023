import datetime

from django.contrib.auth.decorators import login_required
from django.http import HttpResponseRedirect
from django.shortcuts import get_object_or_404, render
from django.urls import reverse
from django.views import generic
from django.db.models import Q

from tutors_hub.decorators import student_required
from users.models import User
from .models import Subject, Subscription


class SubjectsView(generic.ListView):
    paginate_by = 12
    template_name = "tutors/subjects.html"
    context_object_name = "subjects_list"

    def get_queryset(self):
        pattern = self.request.GET.get("pattern", None)
        pattern = "" if pattern is None else pattern

        return Subject.objects\
            .filter(visible=True)\
            .filter(Q(title__icontains=pattern) | Q(description__icontains=pattern))\
            .order_by("-published")


def get_active(request, subject):
    active = False
    if request.user:
        subscriptions = Subscription.objects.filter(subject=subject, student=request.user)

        for sub in subscriptions:
            if sub.active:
                active = True
                break

    return active


def subject_view(request, subject_id):
    subject = Subject.objects.get(pk=subject_id)
    if subject:
        active = get_active(request, subject)
        available = request.user and request.user.role == User.Types.Student

        return render(request, "tutors/subject.html", {"subject": subject, "active": active, "available": available})

    return "404.html"


@login_required
@student_required
def subscribe_on_subject(request, subject_id):
    if request.POST:
        subject = Subject.objects.get(pk=subject_id)
        if subject:
            subscription = Subscription(student=request.user, subject=subject, comment=request.POST["comment"],
                                        subscribed=datetime.datetime.now(), active=True, lesson_count=0)

            subscription.save()

        return HttpResponseRedirect("/subject/" + str(subject_id))

    return "404.html"


@login_required
@student_required
def unsubscribe_on_subject(request, subscription_id):
    if request.POST:
        subscription = Subscription.objects.get(pk=subscription_id)
        if subscription:
            subscription.active = False
            subscription.save()

        return HttpResponseRedirect("/account/subscriptions")

    return "404.html"


class SubscriptionView(generic.DetailView):
    model = Subscription
    template_name = "tutors/subscription.html"
