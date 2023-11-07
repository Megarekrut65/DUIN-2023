from django.contrib.auth.decorators import login_required
from django.shortcuts import render

from tutors.models import Subscription
from tutors_hub.decorators import student_required


@student_required
@login_required
def account_subscriptions(request):
    subs = Subscription.objects.filter(student=request.user).order_by("-subscribed", "active")

    return render(request, "student/student_subscriptions.html", {"subscriptions": subs})

