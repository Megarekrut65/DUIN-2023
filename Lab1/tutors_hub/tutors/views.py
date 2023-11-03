from django.http import HttpResponseRedirect
from django.shortcuts import get_object_or_404, render
from django.urls import reverse
from django.views import generic
from django.db.models import Q

from .models import Choice, Question, Subject


class SubjectsView(generic.ListView):
    paginate_by = 1
    template_name = "tutors/subjects.html"
    context_object_name = "subjects_list"

    def get_queryset(self):
        pattern = self.request.GET.get("pattern", None)
        pattern = "" if pattern is None else pattern

        return Subject.objects\
            .filter(Q(title__icontains=pattern) | Q(description__icontains=pattern))\
            .order_by("-published")


class SubjectView(generic.DetailView):
    model = Subject
    template_name = "tutors/subject.html"


class IndexView(generic.ListView):
    template_name = "tutors/index.html"
    context_object_name = "latest_question_list"

    def get_queryset(self):
        """Return the last five published questions."""
        return Question.objects.order_by("-pub_date")[:5]


class DetailView(generic.DetailView):
    model = Question
    template_name = "tutors/detail.html"


class ResultsView(generic.DetailView):
    model = Question
    template_name = "tutors/results.html"


def vote(request, question_id):
    question = get_object_or_404(Question, pk=question_id)
    try:
        selected_choice = question.choice_set.get(pk=request.POST["choice"])
    except (KeyError, Choice.DoesNotExist):
        # Redisplay the question voting form.
        return render(
            request,
            "tutors/detail.html",
            {
                "question": question,
                "error_message": "You didn't select a choice.",
            },
        )
    else:
        selected_choice.votes += 1
        selected_choice.save()

        return HttpResponseRedirect(reverse("tutors:results", args=(question.id,)))
