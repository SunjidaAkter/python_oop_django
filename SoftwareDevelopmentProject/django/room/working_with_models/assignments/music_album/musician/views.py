from django.shortcuts import render,redirect
from . import forms,models

# Create your views here.
def add_musician(request):
    musician_form = forms.MusicianForm()
    if request.method == "POST":
        musician_form = forms.MusicianForm(request.POST)  
        print(musician_form.is_valid())  # Check if form is valid
        if musician_form.is_valid():
            musician_form.save()
            return redirect('add_album')
        else:
            print(musician_form.errors)  # Print form errors for debugging
    return render(request, 'add_musician.html', {'form': musician_form})
def edit_musician(request,id):
    musician = models.Musician.objects.get(pk=id)
    musician_form = forms.MusicianForm(instance=musician)
    if request.method == "POST":
        musician_form = forms.MusicianForm(request.POST,instance=musician)  
        print(musician_form.is_valid())  # Check if form is valid
        if musician_form.is_valid():
            musician_form.save()
            return redirect('homepage')
        else:
            print(musician_form.errors)  # Print form errors for debugging
    return render(request, 'add_musician.html', {'form': musician_form})