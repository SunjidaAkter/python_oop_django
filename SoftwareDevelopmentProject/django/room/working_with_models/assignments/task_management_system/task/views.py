from django.shortcuts import render,redirect
from . import forms,models
# Create your views here.
def add_task(request):
    task_form = forms.TaskForm()
    if request.method == "POST":
        task_form = forms.TaskForm(request.POST)  
        print(task_form.is_valid())  # Check if form is valid
        if task_form.is_valid():
            task_form.save()
            return redirect('homepage')
        else:
            print(task_form.errors)  # Print form errors for debugging
    return render(request, 'add_task.html', {'form': task_form})


def edit_task(request,id):
    task = models.Task.objects.get(pk=id)
    task_form = forms.TaskForm(instance=task)
    if request.method == "POST":
        task_form = forms.TaskForm(request.POST,instance=task)  
        if task_form.is_valid():
            print(task_form.is_valid())  # Check if form is valid
            task_form.save()
            return redirect('homepage')
        else:
            print(task_form.errors)  # Print form errors for debugging
    return render(request, 'add_task.html', {'form': task_form})

def delete_task(request,id):
    task = models.Task.objects.get(pk=id)
    task.delete()
    return redirect('homepage')