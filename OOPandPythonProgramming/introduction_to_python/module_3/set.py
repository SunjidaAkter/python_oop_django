
#!tuple -->() 
#!list -->[] 
#!set -->{} 
#*https://docs.python.org/3.10/library/stdtypes.html#set-types-set-frozenset
#?set: unique items collection
numbers=[12,56,98,78,56,12,6,98]
n_set=set(numbers)
n_set.add(55)#it doesnt maintain order
print(n_set)
# set is not totally immutable because we can add or remove members from set but we cant change any members from any index
n_set.remove(6)
print(n_set)
for items in n_set:
    print(items)
if 9 in n_set:
    print('9 exists')
elif 98 in n_set:
    print('98 exists')

A={1,3,5}            
B={1,2,3,5}            
print(A|B)
print(A&B)