from math import *
from time import *
# one way 
def timer():
    def inner():
        print('time started')
        print('time ended')
    return inner()
timer()
# other way
def timer():
    def inner():
        print('time started')
        print('time ended')
    return inner
timer()()

def timer1(func):
    def inner(*args,**kwargs):
        print('time started')
        start=time()
        func(*args,**kwargs)
        print('time ended')
        end=time()
        print('total time : ',end-start)
    return inner
# this is a decorator which works for nested function
@timer1
def get_factorial(n):
    res=factorial(n);
    print(res)
# timer1(get_factorial) is a little bit complicated way, so we use decorator function @main_function_name right before the whole parameter function and the we call the parameter function in the following way
get_factorial(n=1000)