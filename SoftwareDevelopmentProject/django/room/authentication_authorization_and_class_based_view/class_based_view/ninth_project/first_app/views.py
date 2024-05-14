from django.shortcuts import render
from datetime import datetime,timedelta
from django.http import HttpResponse
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


def get_session(request):
    if 'name' in request.session and 'age' in request.session and 'language' in request.session:
        name=request.session.get('name','Guest')
        age=request.session.get('age','Guest Age')
        language=request.session.get('language','Guest Language')
        request.session.modified = True#expire time er modhhe get_session page ta load korle ei function er jonno session expire na hoe poroborti session er expire time nie punorai set hoe jai
        return render(request,'get_session.html',{'name':name,'age':age,'language':language})    
    else :
        return HttpResponse("your session has been expired. login again")    

def delete_session(request):
    # del request.session['name']#akta attribute delete 
    request.session.flush()#all attribute delete
    request.session.clear_expired()#all attribute delete
    return render(request,'delete_cookies.html')
