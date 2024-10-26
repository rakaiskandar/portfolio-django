from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def home(request):
    return render(request, 'index.html')

def about(request):   
    return render(request, 'about.html')

def education(request):   
    return render(request, 'education.html')

def projects(request):   
    return render(request, 'projects.html')

def experience(request):   
    return render(request, 'experience.html')

def achievements(request):   
    return render(request, 'achievements.html')
