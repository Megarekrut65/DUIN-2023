from django import template

register = template.Library()


@register.filter
def truncate(value, length=20):
    if len(value) > length:
        return value[:length] + "..."
    return value
