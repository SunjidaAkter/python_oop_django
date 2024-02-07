def full_name(s,l):
    name=f'{s} {l}'
    return name
print(full_name(l='alu',s='kodu'))

def fam_name(title,*args,**kargs):#args work as a tuple and kargs work as a dictionary(object) which has key and value 
    name=f'{title} {args} {kargs}'
    for key,value in kargs.items():
        print(key,value)
    return name
print(fam_name('hero','sakib','dev',first='alom',last='salman'))

# return multiple things from a function
def a_lot(x,y):
    sum=x+y
    mul=x*y
    rem=x%y
    # return sum,mul,rem#it will return all of this as a tuple
    return [sum,mul,rem]#it will return all of this as a list
print(a_lot(5,2))