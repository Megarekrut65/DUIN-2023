from django.shortcuts import render


def not_found_404(request, exception):
    return render(request, "../templates/404.html", status=404)


def privacy(request):
    return render(request, "../templates/privacy.html")
