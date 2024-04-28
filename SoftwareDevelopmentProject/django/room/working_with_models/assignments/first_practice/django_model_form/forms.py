from django import forms
from . import models
class ModelForm(forms.ModelForm):
    class Meta:
        model=models.ModelingForm
        fields='__all__'
        labels={
            'name':'Student Name',
            'roll':'Student Roll',
        }
        widgets={
            'roll':forms.NumberInput(attrs={'placeholder':'Enter Roll Number'}),
        }
        help_texts={
            'name':'Enter Student Name',
            'roll':'Enter Student Roll Number',
        }
        error_messages={
            'name':{
                'required':"name required",
            },
        }