from django.shortcuts import render,redirect
from . import forms,models
from django.contrib import messages
from django.views.generic import CreateView,UpdateView
from django.utils.decorators import method_decorator
from django.contrib.auth.decorators import login_required
from django.urls import reverse_lazy
# Create your views here.
def add_musician(request):
    musician_form = forms.MusicianForm()
    if request.method == "POST":
        musician_form = forms.MusicianForm(request.POST)  
        print(musician_form.is_valid())  # Check if form is valid
        if musician_form.is_valid():
            musician_form.save()
            return redirect('add_album')
        else:
            print(musician_form.errors)  # Print form errors for debugging
    return render(request, 'add_musician.html', {'form': musician_form})


class AddMusician(CreateView):
    model = models.Musician
    form_class = forms.MusicianForm
    template_name = 'add_musician.html'
    success_url = reverse_lazy('homepage')
    def form_valid(self, form):
        messages.success(self.request,'Musician has been added successfully!')
        return super().form_valid(form)
def edit_musician(request,id):
    musician = models.Musician.objects.get(pk=id)
    musician_form = forms.MusicianForm(instance=musician)
    if request.method == "POST":
        musician_form = forms.MusicianForm(request.POST,instance=musician)  
        print(musician_form.is_valid())  # Check if form is valid
        if musician_form.is_valid():
            musician_form.save()
            return redirect('add_album')
        else:
            print(musician_form.errors)  # Print form errors for debugging
    return render(request, 'add_musician.html', {'form': musician_form})

@method_decorator(login_required, name='dispatch')
class EditMusician(UpdateView):
    model = models.Musician
    form_class = forms.MusicianForm
    template_name = 'add_musician.html'
    success_url = reverse_lazy('homepage')
    def form_valid(self, form):
        messages.success(self.request,'Musician has been updated successfully!')
        return super().form_valid(form)