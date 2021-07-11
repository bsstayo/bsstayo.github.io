from django.shortcuts import render

def index(request):
    return render(request, 'main/index.html')

def blog(request):
    return render(request, 'main/blog.html')
