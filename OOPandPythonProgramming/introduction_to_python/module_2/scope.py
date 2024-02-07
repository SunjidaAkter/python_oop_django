balance=3000
def using_global():
    # balance+=89// we cant modify global variable locally without using global keyword
    print(balance)
using_global()

def using_local():
    # print(balance)//as i have declared balance locally so now i cant use global variable value in here
    balance=67
    print(balance)
using_local()
print(balance)#it will give the global value


#we can acces global variable without using global keyword but we cant modify it without using global keyword
def using_local_global():
    global balance
    print(balance)
    balance=45 
    print(balance)