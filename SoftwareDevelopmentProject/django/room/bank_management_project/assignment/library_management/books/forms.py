from django import forms
from .models import Review

class ReviewForm(forms.ModelForm):
    class Meta:
        model = Review
        fields =['body']
        widgets={
            'body':forms.Textarea(attrs={'row':3}),
            # 'is_completed':forms.BooleanInput()
        }