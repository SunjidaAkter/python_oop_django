from django.shortcuts import render,redirect
from . import forms
# Create your views here.
def add_musician(request):
    musician_form = forms.MusicianForm()
    if request.method == "POST":
        musician_form = forms.MusicianForm(request.POST)  
        print(musician_form.is_valid())  # Check if form is valid
        if musician_form.is_valid():
            musician_form.save()
            return redirect('add_musician')
        else:
            print(musician_form.errors)  # Print form errors for debugging
    return render(request, 'add_musician.html', {'form': musician_form})