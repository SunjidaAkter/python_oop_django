from math import *

n=int(input())
a=list(map(int,input().split()))
g=0
cnt=0
for i in a:
    g=gcd(i,g)
while g%2==0:
    g/=2
    cnt+=1
print(cnt)

