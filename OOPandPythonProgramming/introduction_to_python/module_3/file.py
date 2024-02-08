
#*https://docs.python.org/3/library/filesys.html
# .csv comma separated value
# .txt text file

# with open('message.py','w') as file:
#     file.write('print(\'Hello World!\')')
# with open('message.py','a') as file:
#     file.write('print(\'Hello World!\')')
with open('message.py','r') as file:
    text=file.read()
    print(text)