from django import forms#form api
from django.core import validators

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


# class StudentData(forms.Form):
#     name=forms.CharField(widget=forms.TextInput)
#     email=forms.CharField(widget=forms.EmailInput)
#     # def clean_name(self):
#     #     valname = self.cleaned_data['name']
#     #     if len(valname)<10:
#     #         raise forms.ValidationError("Enter a name with at least 10 characters")
#     #     return valname
#     # def clean_email(self):
#     #     valemail = self.cleaned_data['email']
#     #     if '.com' not in valemail:
#     #         raise forms.ValidationError("Your email address must contain .com")
#     #     return valemail
#     def clean (self):
#         cleaned_data = super().clean()
#         valname = self.cleaned_data['name']
#         valemail = self.cleaned_data['email']
#         if len(valname)<10:
#             raise forms.ValidationError("Enter a name with at least 10 characters")
#         if '.com' not in valemail:
#             raise forms.ValidationError("Your email address must contain .com")
        

def len_check(value):
    if len(value)<10 :
        raise forms.ValidationError("Enter a value with at least 10 characters")
class StudentData(forms.Form):
    # name=forms.CharField(widget=forms.TextInput,validators=[validators.MaxLengthValidator(10,message='Enter a name with maximum 10 characters')])
    name=forms.CharField(widget=forms.TextInput,validators=[validators.MinLengthValidator(10,message='Enter a name with at least 10 characters')])
    text=forms.CharField(widget=forms.TextInput,validators=[len_check])
    email=forms.CharField(widget=forms.EmailInput,validators=[validators.EmailValidator(message="Enter a valid email address")])
    age=forms.CharField(widget=forms.NumberInput,validators=[validators.MaxValueValidator(34,message="age must be maximum 34"),validators.MinValueValidator(24,message="age must be at least 24")])
    file=forms.FileField(validators=[validators.FileExtensionValidator(allowed_extensions=['pdf','png'],message="file extension must be ended with .pdf or .png")])