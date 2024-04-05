from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def about(request):
    return HttpResponse("This is first app about page")
def courses(request):
    return HttpResponse("This is first app courses page")
def home(request):
    return HttpResponse("This is first app home page")