# string s;cin>>s;
# ll l=0,r=0,cnt=0;
# string str="";
# vector<string>v;
# for(ll i=0;i<s.size();i++){
#     str+=s[i];
#     if(s[i]=='L')l++;
#     if(s[i]=='R')r++;
#     if((l==r)){
#         cnt++;
#         v.push_back(str);
#         str="";
#     }
# }
# // v.push_back(str);
# cout<<cnt<<nl;
# for(string val:v){
#     cout<<val<<nl;
# }
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
