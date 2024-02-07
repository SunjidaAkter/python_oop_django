
#* docs.python.org/3/tutorial/datastructures.html
numbers=[12,45,98,68]
numbers.append(56)#for pushing back
print(numbers)
numbers.insert(2,71)#for pushing in an index
print(numbers)
numbers.remove(98)#work as erase
print(numbers)
last=numbers.pop()#work as pop_back and back together
print(last,numbers)
idx=numbers.index(71)#work as pop_back and back together
print(idx)
numbers.sort()
print(numbers)
numbers.reverse()
print(numbers)
