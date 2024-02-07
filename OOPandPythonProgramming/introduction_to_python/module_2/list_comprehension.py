
# ! list comprehension is not recommended because its not readable
#* List comprehension in Python is a concise way of creating lists from the ones that already exist
numbers=[45,87,96,65,43,90,85,14,26,61,70]
# normal for loop
odds=[]
for num in numbers:
    if num%2==1 and num%5==0:
        odds.append(num)
print(odds)
# comprehension for loop
odds_num=[num for num in numbers if num%2==1 if num%5==0]
print(odds_num)

# normal nested for loop
players=['sakib','musfik','tamim']
ages=[2,3,4]
comb_list=[]
comb_tuple=[]
for player in players:
    for age in ages:
        comb_tuple.append((player,age))
        comb_list.append([player,age])
print(comb_list)
print(comb_tuple)
tuple_comb=[(player,age) for player in players for age in ages]
list_comb=[[player,age] for player in players for age in ages]
print(list_comb)
print(tuple_comb)