from django import template

register = template.Library()


@register.filter
def truncate(value, length=20):
    if len(value) > length:
        return value[:length] + "..."
    return value


@register.filter
def time_range(start, end):
    start_time_str = start.strftime("%H:%M")
    end_time_str = end.strftime("%H:%M")

    return f"{start_time_str}-{end_time_str}"

