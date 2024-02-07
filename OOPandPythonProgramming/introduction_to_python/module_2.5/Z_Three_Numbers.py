k,s=map(int,input().split())
cnt=0
for i in range(0,k+1,1):
    for j in range(0,k+1,1):
            if (s-(i+j))>=0 and (s-(i+j))<=k:
                cnt+=1
print(cnt)