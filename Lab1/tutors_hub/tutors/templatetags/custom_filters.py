from django import template

from tutors_hub.utilities import get_time_range

register = template.Library()


@register.filter
def truncate(value, length=20):
    """
        Truncate passed string
    """
    if len(value) > length:
        return value[:length] + "..."
    return value


@register.filter
def time_range(start, end):
    """
        Make time range from two times as 00:00-00:00
    """
    return get_time_range(start, end)
