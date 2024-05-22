from django.contrib.auth.forms import UserCreationForm
from django import forms
from .constants import GENDER_TYPE,ACCOUNT_TYPE
from django.contrib.auth.models import User
from .models import UserAddress,UserBankAccount

class UserRegistrationForm(UserCreationForm):
    birth_date = forms.DateField(widget=forms.DateInput(attrs={'type': 'date'}))
    account_type=forms.CharField(max_length=10,choices=ACCOUNT_TYPE)
    gender = forms.CharField(max_length=10,choices=GENDER_TYPE)
    street_address = forms.CharField(max_length=100)
    city=forms.CharField(max_length=100)
    postal_code=forms.IntegerField()
    country=forms.CharField(max_length=100)
    class Meta:
        model=User
        fields=['username','password1','password2','first_name','last_name','email','account_type','birth_date','gender','postal_code','city','country','street_address']
    def save(self,commit=True):
        our_user=super().save(commit=False) 
        if commit==True:
            our_user.save()#user model e data save korlam 
            account_type=self.cleaned_data.get('account_type')  
            gender=self.cleaned_data.get('gender')  
            postal_code=self.cleaned_data.get('postal_code')  
            country=self.cleaned_data.get('country')  
            city=self.cleaned_data.get('city')  
            birth_date=self.cleaned_data.get('birth_date')  
            street_address=self.cleaned_data.get('street_address')
            UserAddress.objects.create(
                user=our_user,
                postal_code=postal_code,
                country=country,
                city=city,
                street_address=street_address
            )
            UserBankAccount.objects.create(
                user=our_user,
                account_type=account_type,
                gender=gender,
                birth_date=birth_date,
                account_no=100000+our_user.id
            )    
            return our_user