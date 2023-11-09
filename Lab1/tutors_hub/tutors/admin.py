from django.contrib import admin

from teacher.models import Report
from users.models import User
from .models import Subject, Subscription, Schedule

admin.site.register(Subject)
admin.site.register(Subscription)
admin.site.register(Schedule)
admin.site.register(User)
admin.site.register(Report)
