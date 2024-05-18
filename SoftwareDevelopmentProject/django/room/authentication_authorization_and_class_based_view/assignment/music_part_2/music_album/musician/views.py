from . import forms,models
from django.contrib import messages
from django.views.generic import CreateView,UpdateView
from django.utils.decorators import method_decorator
from django.contrib.auth.decorators import login_required
from django.urls import reverse_lazy
# Create your views here.


class AddMusician(CreateView):
    model = models.Musician
    form_class = forms.MusicianForm
    template_name = 'add_musician.html'
    success_url = reverse_lazy('homepage')
    def form_valid(self, form):
        messages.success(self.request,'Musician has been added successfully!')
        return super().form_valid(form)

@method_decorator(login_required, name='dispatch')
class EditMusician(UpdateView):
    model = models.Musician
    form_class = forms.MusicianForm
    template_name = 'add_musician.html'
    success_url = reverse_lazy('homepage')
    def form_valid(self, form):
        messages.success(self.request,'Musician has been updated successfully!')
        return super().form_valid(form)