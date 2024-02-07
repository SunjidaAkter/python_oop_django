n=int(input())
ans=[]
ans.append(0)
ans.append(1)
if n==1:
    print(0)
elif n==2:
    print("0 1")
else:
    for i in range(2,n):
        ans.append(ans[i-1]+ans[i-2])
    for i in ans:
        print(i,end=" ")
