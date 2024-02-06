def double_it(num):
    result=num*2
    print(result)
double_it(8)
def sum(a,b):
    result=a+b
    return result
print(sum(5,6))#11
print(double_it(5))#first it will print 10 then it will print none because first it will call double_it function and this function will print 10 but then as it wont return anything so the last line print function will print none