t=int(input())
while t>0:
    x, y = map(int, input().split())
    res=0
    if x>y:
        tmp=x
        x=y
        y=tmp
    for i in range(x+1,y,1):
        if i%2==1:
            res+=i
    print(res)        
    t-=1