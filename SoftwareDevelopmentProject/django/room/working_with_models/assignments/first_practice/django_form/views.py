from django.shortcuts import render
from .forms import Form
# Create your views here.
def form(request):
    form=Form()
    if request.method == 'POST':
        form=Form(request.POST,request.FILES)
        if form.is_valid():
            print(form.cleaned_data)
    return render(request,'form.html',{'form':form}) 