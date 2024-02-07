def sum(x,y,z=0):#last parameter is optional
    res=x+y+z
    return res
print(sum(1,2))
# args
def all_sum(*args):#this parameter is a tuple
    sum=0
    for number in args:
        sum+=number
    return sum


total=all_sum(45,23,56);
print(total)

def all(n,*args):#this * parameter is a tuple
    return args


ans=all(2,45,23,56);
print(ans)