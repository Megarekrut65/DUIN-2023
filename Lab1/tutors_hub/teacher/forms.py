import datetime

import django.forms as forms
from django.core.validators import MinValueValidator

from tutors.models import Subject


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
