from django.shortcuts import render
from .forms import SignupForm
# Create your views here.
def signup(request):
    form = SignupForm()
    print(request.method)
    if request.method == 'POST':
        form = SignupForm(request.POST)
        if form.is_valid():
            form.save()
    return render(request, 'register.html', {'form': form})