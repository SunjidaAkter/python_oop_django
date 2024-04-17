from django import forms#form api

class contactForm(forms.Form):
    name=forms.CharField(label="User name")
    email=forms.EmailField()