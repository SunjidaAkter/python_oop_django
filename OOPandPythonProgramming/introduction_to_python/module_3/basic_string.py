name1='sakib\'s khan'
name2="sakib"
name3="""
sakib
khan
"""
print(name3)
for char in name1:
    print(char)
#string also works as array of characters
# but we cant change a char of string like below that means string is immutable
# name2[0]='k'

# if exists
if 'khan' in name1:
    print("khan exists in name1")      