s=input()
l=0
r=0
cnt=0
str=""
v=[]
for i in range(len(s)):
    str+=s[i]
    if s[i]=='L':
        l+=1
    if s[i]=='R':
        r+=1
    if l==r:
        cnt+=1
        v.append(str)
        str=""    
print(cnt)
for i in v:
    print(i)
