from django import forms#form api

# Widgets==field to html input
class Form(forms.Form):
    name=forms.CharField(label="Full Name : ", help_text="Enter your name",required=True,disabled=False,widget=forms.Textarea (attrs={'rows':1,'placeholder':'Enter your full name'}))
    file=forms.FileField(label="File : ", help_text="Upload your file",required=True,disabled=False)
    email=forms.EmailField(label="User Email : ", help_text="Enter your email",required=True,disabled=False,widget=forms.Textarea(attrs={'rows':1,'placeholder':'Enter your full email'}))
    comment=forms.EmailField(label="Comment : ", help_text="Enter your comment",required=True,disabled=False,widget=forms.Textarea (attrs={'rows':3,'placeholder':'Enter your full comment'}))
    age=forms.CharField(label="Age(Number) : ",widget=forms.NumberInput)
    age=forms.IntegerField(label="Age(Integer) : ",)
    weight=forms.FloatField(label="Weight(Float) : ",)
    balance=forms.DecimalField(label="Balance (Decimal) : ",)
    check=forms.BooleanField(label="Check : ")
    birthday=forms.DateField(widget=forms.DateInput(attrs={'type':'date'}))
    appointment=forms.CharField(widget=forms.DateInput(attrs={'type':'datetime-local'}))
    CHOICES=[('S','Small'),('M','Medium'),('L','Large')]
    size=forms.ChoiceField(label="Choose a size : ",choices=CHOICES,widget=forms.RadioSelect)
    COLOR=[('P','Purple'),('M','Maroon'),('B','Blue')]
    color=forms.MultipleChoiceField(label="Select Colors : ",choices=COLOR,widget=forms.CheckboxSelectMultiple)
    