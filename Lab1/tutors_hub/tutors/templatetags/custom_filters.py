from django import template

from tutors_hub.utilities import get_time_range

register = template.Library()


@register.filter
def truncate(value, length=20):
    if len(value) > length:
        return value[:length] + "..."
    return value


@register.filter
def time_range(start, end):
    return get_time_range(start, end)

