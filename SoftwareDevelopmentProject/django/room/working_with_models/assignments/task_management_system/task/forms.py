from django import forms
from .models import Task

class TaskForm(forms.ModelForm):
    class Meta:
        model = Task
        fields = '__all__'
        labels={
            'titile':'Task Title : ',
            'description':'Task Description : ',
            'is_completed':'Is Task Completed : ',
            'assign_date':'Task Assign Date : ',
            'category':'Category : ',
        }
        widgets={
            'title':forms.TextInput(attrs={'placeholder':'Enter Task Title'}),
            'assign_date':forms.DateInput(attrs={'placeholder':'Enter Assign Date','type':'date'}),
            'description':forms.Textarea(attrs={'row':3,'placeholder':'Enter Task Description'}),
            # 'is_completed':forms.BooleanInput()
        }
        
        