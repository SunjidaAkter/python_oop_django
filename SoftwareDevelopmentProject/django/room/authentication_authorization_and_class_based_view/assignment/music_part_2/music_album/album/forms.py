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
            'musician':'Musician : ',
        }
        widgets={
            'name':forms.TextInput(attrs={'placeholder':'Enter Album Name'}),
            'release_date':forms.DateInput(attrs={'placeholder':'Enter Release Date','type':'date'}),
            'rating':forms.Select(attrs={'placeholder':'Choose Rating'}),
            # 'musician':forms.Select(attrs={'placeholder':'Choose Musician'}),
        }
        
        