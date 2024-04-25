from django.shortcuts import render,redirect
from . import forms
# Create your views here.
def add_category(request):
    category_form = forms.CategoryForm()
    if request.method == "POST":
        category_form = forms.CategoryForm(request.POST)  # Bind POST data to the form
        print(category_form.is_valid())  # Check if form is valid
        if category_form.is_valid():
            category_form.save()
            return redirect('add_category')
        else:
            print(category_form.errors)  # Print form errors for debugging
    return render(request, 'add_category.html', {'form': category_form})