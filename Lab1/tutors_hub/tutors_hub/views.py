from django.shortcuts import render
from django.template import RequestContext


def handler404(request, exception, template_name="templates/404.html"):
    response = render(request, template_name)
    response.status_code = 404
    return response


def csrf_failure(request, reason=""):
    context = RequestContext(request).__dict__
    response = render(request, "templates/403.html", context)
    response.status_code = 403
    return response


def privacy(request):
    return render(request, "templates/privacy.html")


def index(request):
    return render(request, "templates/index.html")


def report_details(request):
    return render(request, "templates/report_details.html")
