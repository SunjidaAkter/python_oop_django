from django.shortcuts import render,redirect
from . import forms,models
from django.urls import reverse_lazy
from django.views.generic import CreateView,DeleteView,UpdateView
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator
# Create your views here.

class AddAlbum(CreateView):
    model = models.Album
    form_class = forms.AlbumForm
    template_name = 'add_album.html'
    success_url = reverse_lazy('homepage')
    def form_valid(self, form):
        messages.success(self.request,'Album has been added successfully!')
        return super().form_valid(form)


@method_decorator(login_required,name='dispatch')
class EditAlbum(UpdateView):
    model = models.Album
    form_class = forms.AlbumForm
    template_name = 'add_album.html'
    success_url = reverse_lazy('homepage')
    def form_valid(self, form):
        messages.success(self.request,'Album has been updated successfully!')
        return super().form_valid(form)


@method_decorator(login_required,name='dispatch')
class DeleteAlbum(DeleteView):
    model = models.Album
    template_name='delete_album.html'
    success_url = reverse_lazy('homepage')
    def form_valid(self, form):
        messages.success(self.request,'Album has been deleted successfully!')
        return super().form_valid(form)

    