from django import forms
from .models import Album

class AlbumForm(forms.ModelForm):
    class Meta:
        model = Album
        fields = '__all__'
        labels={
            'name':'Album Name : ',
            'release_date':'Release Date : ',
            'rating':'Rating : ',
            'Musician':'Musician Name : ',
        }
        widgets={
            'name':forms.TextInput(attrs={'placeholder':'Enter Album Name'}),
            'release_date':forms.DateInput(attrs={'placeholder':'Enter Release Date','type':'date'}),
            'musician':forms.TextInput(attrs={'placeholder':'Choose Musician'}),
        }
        
        