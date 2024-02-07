test=int(input())
for t in range(test):
    a=str(input())
    b=[]
    for i in a:
        b.append(i)
    b.reverse()
    for i in b:
        print(i,end=" ")    
    print()