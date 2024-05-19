from django.http.response import HttpResponse as HttpResponse
from django.shortcuts import redirect
from .models import Order
from car.models import Car
from django.contrib import messages
from django.contrib.auth.decorators import login_required

@login_required
def buy_car(request, id):
    if request.method == 'POST':
        car = Car.objects.get(pk=id)
        Order.objects.create(buyer=request.user, car=car)
        Car.objects.filter(pk=id).update(quantity=car.quantity - 1)
        messages.success(request, f"{car.title} buy successfully")
        return redirect('car_details')
    else:
        return redirect('home')