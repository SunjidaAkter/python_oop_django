from . import forms
from . import models
from django.urls import reverse_lazy
from django.views.generic import CreateView,UpdateView,DeleteView,DetailView
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator
# Create your views here.

@method_decorator(login_required,name='dispatch')
class DetailsCarView(DetailView):
    model = models.Car
    template_name='car_details.html'

    def post(self, request, *args, **kwargs):
        comment_form=forms.CommentForm(data=self.request.POST)
        car=self.get_object()
        if comment_form.is_valid():
            new_comment=comment_form.save()
            new_comment.car=car
            new_comment.save()
        return self.get(request, *args, **kwargs)    

    def get_context_data(self,**kwargs) :
        context=super().get_context_data(**kwargs)
        car=self.object
        comments=car.comments.all()
        comment_form=forms.CommentForm()
        context['comments']=comments
        context['comment_form']=comment_form        
        return context

