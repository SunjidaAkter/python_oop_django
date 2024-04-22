from django import forms
from first_app.models import StudentModel
class StudentForm(forms.ModelForm):
    class Meta:
        model=StudentModel
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