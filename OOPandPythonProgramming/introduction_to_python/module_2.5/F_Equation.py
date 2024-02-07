x, n = map(int, input().split())
ans=0
for i in range(2,n+1,2):
    ans+=(x**i)
print(ans)
