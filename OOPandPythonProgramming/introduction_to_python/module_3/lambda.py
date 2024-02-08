# lambda
# def doubled(x):
    # return x*2
doubled=lambda num:num*2
print(doubled(5))
added=lambda x,y:x+y
print(added(5,8))
numbers=[12,56,98,78,56,12,6,98]
doubled_n=map(doubled,numbers)
squared_ns=map(lambda x:x*x,numbers)
print(list(doubled_n))
print(list(squared_ns))

actors=[
    {'name':'sabana','age':'23'},
    {'name':'sabnur','age':'63'},
    {'name':'sabila','age':'83'}
]
juniors=filter(lambda actor:int(actor['age'])<40,actors)
print(list(juniors))