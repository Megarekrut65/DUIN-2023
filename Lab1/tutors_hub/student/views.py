from django.views import generic

from tutors.models import Subscription
from tutors_hub.decorators import StudentRequiredMixin


class StudentsView(StudentRequiredMixin, generic.ListView):
    paginate_by = 24
    template_name = "student/subscriptions.html"
    context_object_name = "subscriptions"

    def get_queryset(self):
        return Subscription.objects.filter(student=self.request.user).order_by("-active", "-subscribed")