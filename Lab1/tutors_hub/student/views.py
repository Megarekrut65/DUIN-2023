from django.contrib.auth.decorators import login_required
from django.shortcuts import render
from django.views import generic

from tutors.models import Subscription
from tutors_hub.decorators import StudentRequiredMixin, student_required


class StudentsView(StudentRequiredMixin, generic.ListView):
    paginate_by = 24
    template_name = "student/subscriptions.html"
    context_object_name = "subscriptions"

    def get_queryset(self):
        return Subscription.objects.filter(student=self.request.user).order_by("-active", "-subscribed")


@student_required
@login_required
def home(request):
    return render(request, "student/home.html")
