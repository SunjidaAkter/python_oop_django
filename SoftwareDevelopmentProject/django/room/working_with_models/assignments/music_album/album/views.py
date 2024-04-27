from django.shortcuts import render,redirect
from . import forms,models
# Create your views here.
def add_album(request):
    album_form = forms.AlbumForm()
    if request.method == "POST":
        album_form = forms.AlbumForm(request.POST)  
        print(album_form.is_valid())  # Check if form is valid
        if album_form.is_valid():
            album_form.save()
            return redirect('homepage')
        else:
            print(album_form.errors)  # Print form errors for debugging
    return render(request, 'add_album.html', {'form': album_form})


def edit_album(request,id):
    album = models.Album.objects.get(pk=id)
    album_form = forms.AlbumForm(instance=album)
    if request.method == "POST":
        album_form = forms.AlbumForm(request.POST,instance=album)  
        if album_form.is_valid():
            print(album_form.is_valid())  # Check if form is valid
            album_form.save()
            return redirect('homepage')
        else:
            print(album_form.errors)  # Print form errors for debugging
    return render(request, 'add_album.html', {'form': album_form})

def delete_album(request,id):
    album = models.Album.objects.get(pk=id)
    album.delete()
    return redirect('homepage')