from django import forms#form api

class contactForm(forms.Form):
    name=forms.CharField()
    email=forms.EmailField()