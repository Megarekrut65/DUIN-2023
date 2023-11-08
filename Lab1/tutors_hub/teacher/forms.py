import datetime

import django.forms as forms
from django.core.exceptions import ValidationError
from django.core.validators import MinValueValidator

from tutors.models import Subject, Schedule, Subscription
from tutors.utilities import get_time_range


class SubjectForm(forms.ModelForm):
    class Meta:
        model = Subject
        fields = "__all__"
        exclude = ["teacher", "published"]

    def save(self, commit=True):
        instance = super(SubjectForm, self).save(commit=False)
        # instance.teacher = User.objects.get(pk=instance.teacher)

        instance.published = datetime.datetime.now()

        if commit:
            instance.save()
        return instance

    description = forms.CharField(widget=forms.Textarea(attrs={"rows": 4}))
    work_schedule = forms.CharField(widget=forms.Textarea(attrs={"rows": 4}))

    lesson_price = forms.IntegerField(
        validators=[MinValueValidator(0)]
    )

    lesson_duration = forms.IntegerField(
        validators=[MinValueValidator(0)]
    )

    def clean_description(self):
        return self.cleaned_data.get("description").strip()

    def clean_work_schedule(self):
        return self.cleaned_data.get("work_schedule").strip()

    def clean_title(self):
        return self.cleaned_data.get("title").strip()


class ScheduleForm(forms.ModelForm):
    class Meta:
        model = Schedule
        fields = "__all__"
        exclude = ["time_range"]

    def save(self, commit=True):
        instance = super(ScheduleForm, self).save(commit=False)

        date = datetime.datetime.combine(datetime.date(1, 1, 1), instance.start_time)
        instance.time_range = get_time_range(date, instance.subscription.subject.lesson_duration)

        if commit:
            if instance.done:
                instance.subscription.lesson_count += 1
                instance.subscription.save()
            instance.save()
        return instance

    subscription = forms.Select()
    date = forms.DateField(widget=forms.DateInput(format="%Y-%m-%d",
                                                  attrs={"placeholder": "2023-01-01", "value": "2023-01-01"}))
    start_time = forms.TimeField(widget=forms.TimeInput(format="%H:%M",
                                                        attrs={"placeholder": "00:00", "value": "00:00"}))
    end_time = forms.TimeField(widget=forms.TimeInput(format="%H:%M",
                                                      attrs={"placeholder": "00:00", "value": "00:00"}))

    def clean(self):
        cleaned_data = super().clean()
        teacher = cleaned_data.get("subscription").subject.teacher
        date = cleaned_data.get("date")
        items = Schedule.objects.filter(subscription__subject__teacher=teacher, date=date).order_by("start_time")
        start_time = cleaned_data.get("start_time")
        end_time = cleaned_data.get("end_time")

        if start_time >= end_time:
            raise ValidationError("There is incorrect time range!")

        id_ = self.instance.id

        for item in items:
            if item.id == id_:
                continue

            if item.start_time <= start_time <= item.end_time \
                    or item.start_time <= end_time <= item.end_time:
                raise ValidationError("In this time you already have lesson!")


class ScheduleFormUser(ScheduleForm):
    def __init__(self, user=None, **kwargs):
        super(ScheduleForm, self).__init__(**kwargs)
        if user:
            self.fields["subscription"].queryset = Subscription.objects.filter(subject__teacher=user, active=True)
