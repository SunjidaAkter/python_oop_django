
#* +=,-=,*=,/=,+.-,*,(/)float quotient,(%)modulo,(//)integer quotient,(**)power
#! ++,-- are not used in python  
num1=5
num2=2
print(num1+num2)
print(num1-num2)
print(num1*num2)
print(num1/num2)
print(num1//num2)
print(num1%num2)
print(num1**num2)
#* membership operators are in , not in. They are used to check if an element is a member of a list or dict or anything like this.
cnt = {}
i = 1
if i not in cnt:
    cnt[i] = 1
else:
    cnt[i] += 1

print(cnt)
cnt1 = {1:1}
i = 1
if i in cnt1:
    cnt1[i] += 1
else:
    cnt1[i] = 1

print(cnt1)
#* on which the operator is applied are called operands