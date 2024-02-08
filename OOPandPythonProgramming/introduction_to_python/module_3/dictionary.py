numbers=[12,56,98,78,56,12,26,98]
#object, key value pair, dictionary, hash table, overlap with set, {key:value}
person={'name':'sabit','address':'kaliganj','age':3,'job':'stu'}
print(person)
print(person['job'])
print(person.keys())

for item in person:
    print(item)
for k,v in person.items():
    print(k,v)