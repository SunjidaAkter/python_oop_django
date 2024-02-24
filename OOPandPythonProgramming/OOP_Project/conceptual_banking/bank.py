from abc import ABC,abstractmethod

#* parent class Account
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
        if amount>=0 and amount<=self.balance:
            self.balance-=amount
        else:
            print("\nInvalid Amount\n")    

    def changeInfo(self,name):
        self.name=name

    #* over loading of method changeInfo
    def changeInfo(self,name,password): 
        self.name=name   
        self.password=password   

    @abstractmethod
    def showInfo(self):
        pass




#* derived class of Account
class SavingsAccount(Account):
    def __init__(self, name, accNumber, password, interestRate):
        super().__init__(name, accNumber, password,"savings") 
        self.iRate=interestRate

    def showInfo(self):
        print(f'\nInfo of account {self.name}\n')
        print(f'\nAccount Number : {self.accNo}')    
        print(f'\nAccount Type : {self.type}')    
        print(f'\nBalance : {self.balance}')    

    def applyInterest(self):
        interest=self.balance*(self.iRate/100)
        print(f'Applied interest of {interest}')
        self.deposit(interest)



class SpecialAccount(Account):
    def __init__(self, name, accNumber, password,limit):
        super().__init__(name, accNumber, password, "special")
        self.limit=limit

    # over riding withdraw method
    def withdraw(self, amount):
        if amount>=0 and amount<=self.limit:
            self.balance-=amount
        else :
            print("\nInvalid Ammount")

    def showInfo(self):
        print(f'\nInfo of {self.type} account {self.name}\n')
        print(f'\nAccount Number : {self.accNo}')    
        print(f'\nBalance : {self.balance}')            



currentUser=None
while(True):
    if currentUser==None:
        print("\nNo User Logged In!")
        ch=input("\nLogin or Register? (L/R)")
        if ch=='R':
            name=input("Name :")
            nu=input("Account Number :")
            pa=input("Password :")
            a=input("Savings or Special? (sv/sp)")
            if a=="sv":
                irate=int(input("Interest Rate :"))
                currentUser=SavingsAccount(name,nu,pa,irate)
            elif a=="sp":
                lim=int(input("Overdraft Limit :"))
                currentUser=SpecialAccount(name,nu,pa,lim)
            else:
                print("Invalid choice!\n")    
        else:
            nu=input("Account Number :") 

            for account in Account.accounts:
                if nu==account.accNo:
                    currentUser=account
                    break       
    else:
        print(f"\nWelcome {currentUser.name}!\n")

        if currentUser.type=="savings":
            
            print("1. Show Info ")                
            print("2. Deposit ")                
            print("3. Withdraw ")                
            print("4. Apply Interest ")                
            print("5. Change Info ")                
            print("6. Logout ")                

            op=int(input("Choose Option :"))

            if op==1:
                currentUser.showInfo()
            elif op==2:
                am=int(input("Amount :"))
                currentUser.deposit(am)
            elif op==3:
                am=int(input("Amount :"))
                currentUser.withdraw(am)
            elif op==4:
                currentUser.applyInterest()
            elif op==5:                
                na2=input("Name :")
                pa2=input("Password :")
                currentUser.changeInfo(na2,pa2)
            elif op==6:
                currentUser=None
        else:        
            print("1. Show Info ")                
            print("2. Deposit ")                
            print("3. Withdraw ")                
            print("4. Change Info ")                
            print("5. Logout ")                

            op=int(input("Choose Option :"))

            if op==1:
                currentUser.showInfo()
            elif op==2:
                am=int(input("Amount :"))
                currentUser.deposit(am)
            elif op==3:
                am=int(input("Amount :"))
                currentUser.withdraw(am)
            elif op==4:                
                na2=input("Name :")
                pa2=input("Password :")
                currentUser.changeInfo(na2,pa2)
            elif op==5:
                currentUser=None
