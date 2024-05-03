from django.shortcuts import render,redirect
from . import forms
# Create your views here.
def add_author(request):
    author_form = forms.AuthorForm()
    if request.method == "POST":
        author_form = forms.AuthorForm(request.POST)  # Bind POST data to the form
        print(author_form.is_valid())  # Check if form is valid
        if author_form.is_valid():
            author_form.save()
            return redirect('add_author')
        else:
            print(author_form.errors)  # Print form errors for debugging
    return render(request, 'add_author.html', {'form': author_form})