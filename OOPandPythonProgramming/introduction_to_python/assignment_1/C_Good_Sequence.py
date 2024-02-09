n=int(input())
arr=map(int,input().split())
a=list(arr)
dic={}
for i in a:
    if i in dic:
        dic[i]=dic[i]+1
    else:
        dic[i]=1
cnt=0        
for k,v in dic.items():
    if int(k)>v:
        cnt+=v
    elif v>int(k):
        cnt+=(v-int(k))
print(cnt)
