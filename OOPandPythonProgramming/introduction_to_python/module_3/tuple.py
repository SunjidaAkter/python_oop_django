
# *https://docs.python.org/3/tutorial/datastructures.html#tuples-and-sequences
def mul():
    return 2,3
print(mul())#(2,3) this is tuple
things1=('pen','book','pencil','eraser')
things2='pen','book','pencil','eraser'
print(type(things1))
print(type(things2))
print(things1[0])
print(things2[-1])
print(things2[1:4])

#existence check
if 'book' in things1:
    print("exists")
for i in things1:
    print(i,end=" ")

# tuple is immutable
print(len(things1))
mega=([2,3,4],[4,7,8])    
mega[0][0]=777
print(mega)
