# we can use another file's function like this
from function import triple_it as tt
from kargs_multiple import *
# from function import triple_it as tt
res=tt(4)
# res1=double_it(45)#as we havent imported this from that file so we cant use this function here  
print(res)
#if we grab a function from a different file then when we run this file the grabbed file will be also runned
print(a_lot(4,5))#we can use every functions of karg_multiple from this file as we imported this file with *