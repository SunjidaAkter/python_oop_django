from django.shortcuts import render
from album import models
# Create your views here.
def base(request):
    data=models.Album.objects.all()
    return render(request, 'home.html', {'data': data})