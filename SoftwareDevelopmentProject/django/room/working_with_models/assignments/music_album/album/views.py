from django.shortcuts import render,redirect
from . import forms
# Create your views here.
def add_album(request):
    album_form = forms.AlbumForm()
    if request.method == "POST":
        album_form = forms.AlbumForm(request.POST)  
        print(album_form.is_valid())  # Check if form is valid
        if album_form.is_valid():
            album_form.save()
            return redirect('add_album')
        else:
            print(album_form.errors)  # Print form errors for debugging
    return render(request, 'add_album.html', {'form': album_form})