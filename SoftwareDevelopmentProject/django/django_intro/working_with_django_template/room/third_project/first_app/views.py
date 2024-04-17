from django.shortcuts import render
import datetime
# Create your views here.
def home(request):
    d={'author':'Rahim','age':20,'lst':['python','is','best'],
       'birthDate':datetime.datetime.now(),'value':'','val':5,'courses':[
        {
        'id':1,
        'name':'python',
        'fee':5000
        },
        {
        'id':2,
        'name':'django',
        'fee':10000
        },
        {
        'id':3,
        'name':'flask',
        'fee':20000
        }
    ]}
    return render(request, 'home.html',d)