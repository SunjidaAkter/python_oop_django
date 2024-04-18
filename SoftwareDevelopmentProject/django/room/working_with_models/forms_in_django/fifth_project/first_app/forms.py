from django import forms#form api

# Widgets==field to html input
class contactForm(forms.Form):
    name=forms.CharField(label="Full Name : ", initial="Sunjida",help_text="Enter your name",required=True,disabled=False,widget=forms.Textarea (attrs={'id':'text_area','class':'class1 class2','placeholder':'Enter your full name'}))
    file=forms.FileField()
    email=forms.EmailField(label="User email")
    age=forms.CharField(widget=forms.NumberInput)
    # age=forms.IntegerField()
    # weight=forms.FloatField()
    # balance=forms.DecimalField()
    check=forms.BooleanField()
    birthday=forms.DateField(widget=forms.DateInput(attrs={'type':'date'}))
    appointment=forms.CharField(widget=forms.DateInput(attrs={'type':'datetime-local'}))
    CHOICES=[('S','Small'),('M','Medium'),('L','Large')]
    size=forms.ChoiceField(choices=CHOICES,widget=forms.RadioSelect)
    MEAL=[('P','Peperoni'),('M','Mashroom'),('B','Beef')]
    pizza=forms.MultipleChoiceField(choices=MEAL,widget=forms.CheckboxSelectMultiple)