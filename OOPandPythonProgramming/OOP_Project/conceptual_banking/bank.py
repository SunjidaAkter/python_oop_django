from abc import ABC,abstractmethod
class Account(ABC):
    accounts=[]

    def __init__(self,name,accNumber,password,type):
        self.name=name
        self.accNo=accNumber
        self.passw=password
        self.type=type

        self.balance=0

        Account.accounts.append(self)

    def deposit(self,amount):
        if amount>=0:
            self.balance+=amount
        else:
            print("\nInvalid Amount\n")    

    def withdraw(self,amount):
        if amount>=0:
            self.balance-=amount
        else:
            print("\nInvalid Amount\n")    

    def changeInfo(self,name):
        self.name=name

    # over loading of method changeInfo
    def changInfo(self,name,password): 
        self.name=name   
        self.password=password   

    @abstractmethod
    def showInfo(self):
        pass