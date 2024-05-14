from django.shortcuts import render
from datetime import datetime,timedelta
# Create your views here.
def home(request):
    response = render(request, 'home.html')
    response.set_cookie('name','rahim')
    # response.set_cookie('name','karim',max_age=10)#10 seconds
    response.set_cookie('name','karim',expires=datetime.utcnow()+timedelta(day=7))#10 seconds
    return response

def get_cookies(request):
    name=request.COOKIES.get('name')
    return render(request, 'get_cookies.html', {'name':name})

def delete_cookies(request):
    response = render(request, 'delete_cookies.html')
    response.delete_cookie('name')
    return response



def set_session(request):
    data={
        'name':'rahim',
        'age':20,
        'language':'Bangla'
    }
    request.session.update(data)
    return render(request,'home.html')    