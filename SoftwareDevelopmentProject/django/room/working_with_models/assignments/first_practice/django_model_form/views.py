from django.shortcuts import render
from .forms import ModelForm
# Create your views here.
def model_form(request):
    form=ModelForm()
    if request.method == 'POST':
        form=ModelForm(request.POST,request.FILES)
        if form.is_valid():
            print(form.cleaned_data)
    return render(request,'model_form.html',{'form':form}) 