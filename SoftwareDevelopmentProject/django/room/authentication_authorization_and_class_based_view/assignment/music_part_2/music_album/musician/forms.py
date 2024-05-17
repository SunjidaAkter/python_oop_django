from django import forms
from .models import Musician

class MusicianForm(forms.ModelForm):
    class Meta:
        model = Musician
        fields = '__all__'
        labels={
            'first_name':'First Name : ',
            'last_name':'Last Name : ',
            'email':'Email : ',
            'phone_no':'Phone Number : ',
            'instrument_type':'Types Of Instrument : ',
        }
        widgets={
            'first_name':forms.TextInput(attrs={'placeholder':'Enter First Name'}),
            'last_name':forms.TextInput(attrs={'placeholder':'Enter Last Name'}),
            'email':forms.EmailInput(attrs={'placeholder':'Enter Email'}),
            'phone_no':forms.TextInput(attrs={'placeholder':'Enter Phone Number'}),
            
        }
        
        error_messages={
            'first_name':{
                'required':"First Name is required",
            },
            'last_name':{
                'required':"Last Name is required",
            },
            'email':{
               'required':"Email is required",
            },
            'phone_no':{
               'required':"Phone Number is required",
            },
            'instrument_type':{
               'required':"Types Of Instrument is required",
            },       
        }