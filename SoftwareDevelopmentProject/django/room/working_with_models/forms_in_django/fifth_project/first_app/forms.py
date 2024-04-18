from django import forms#form api

class contactForm(forms.Form):
    name=forms.CharField(label="User name")
    file=forms.FileField()
    # email=forms.EmailField(label="User email")
    # age=forms.IntegerField()
    # weight=forms.FloatField()
    # balance=forms.DecimalField()
    # check=forms.BooleanField()
    # birthday=forms.DateField()
    # appointment=forms.DateTimeField()
    # CHOICES=[('S','Small'),('M','Medium'),('L','Large')]
    # size=forms.ChoiceField(choices=CHOICES)
    # MEAL=[('P','Peperoni'),('M','Mashroom'),('B','Beef')]
    # pizza=forms.MultipleChoiceField(choices=MEAL)