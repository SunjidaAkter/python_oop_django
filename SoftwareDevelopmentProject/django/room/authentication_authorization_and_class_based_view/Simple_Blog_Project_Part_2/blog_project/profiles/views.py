from django.shortcuts import render,redirect
from . import forms
# Create your views here.
def add_profile(request):
    profile_form = forms.ProfileForm()
    if request.method == "POST":
        profile_form = forms.ProfileForm(request.POST)  # Bind POST data to the form
        print(profile_form.is_valid())  # Check if form is valid
        if profile_form.is_valid():
            profile_form.save()
            return redirect('add_profile')
        else:
            print(profile_form.errors)  # Print form errors for debugging
    return render(request, 'add_profile.html', {'form': profile_form})