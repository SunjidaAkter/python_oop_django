import random
class Bank():

    def __init__(self,name):
        self.name=name
        self.users=[]
        self.total_balance=0
        self.total_loan=0
        self.bankrupt=False



class User():
    
    def __init__(self,name,email,password,address,account_type,bank):
        self.bank=bank
        self.name=name
        self.email=email
        self.password=password
        self.address=address
        self.account_type=account_type
        self.balance=0
        self.loan=0
        self.loan_time=0
        self.trans_history=[]
        self.account_number=random.randint(1000,9999)
        

    def deposit(self,amount):
        if amount>=0:
            self.balance+=amount
            self.bank.total_balance+=amount
            text=f'SUCCESSFULLY DEPOSITED : ${amount} AND CURRENT BALANCE : ${self.balance}'
            self.trans_history.append(text)
            print(text)
        else:
            print("\nINVALID AMOUNT!!!\n")    
        

    def withdraw(self,amount):
        if self.bank.bankrupt==False:
            if amount>=0 and amount<=self.balance:
                self.balance-=amount
                self.bank.total_balance-=amount
                text=f'SUCCESSFULLY WITHDREW : ${amount} AND CURRENT BALANCE : ${self.balance}'
                self.trans_history.append(text)
                print(text)
            elif amount>self.balance:
                print("WITHDRAWAL AMOUNT EXCEEDED!!!\n")    
            else:
                print("INVALID AMOUNT!!!\n")    
        else:
            print("YOU CAN NOT WITHDRAW MONEY BECAUSE OF BANKRUPT!!!\n")        


    def loan(self,amount):
        if self.bank.bankrupt==False:
            if amount>=0 and self.loan_time<=2:
                self.balance-=amount
                self.loan_time+=1
                self.bank.total_balance-=amount
                self.bank.total_loan+=amount
                text=f'SUCCESSFULLY LOAN TAKEN : ${amount} AND CURRENT BALANCE : ${self.balance}'
                self.trans_history.append(text)
                print(text)
            elif self.loan_time>2:
                print("LOAN TAKING TIME EXCEEDED!!!\n")    
            else:
                print("INVALID AMOUNT!!!\n")    
        else:
            print("YOU CAN NOT WITHDRAW MONEY BECAUSE OF BANKRUPT!!!\n")        

    

    def check_balance(self):
        print(f"CURRENT BALANCE : {self.balance}\n")


    def check_balance(self):
        if len(self.trans_history)>0:
            print("TRANSACTION HISTORIES :")
            for trans in self.trans_history:
                print(trans)
        else:
            print("NO TRANSACTION HISTORY AVAILABLE!!!")        


    def transfer(self,amount,account_number):
        if amount>=0:
            exist=False
            for user in self.bank.users:
                if user.account_number==account_number:
                    exist=True
                    self.balance-=amount
                    user.balance+=amount
                    text=f'SUCCESSFULLY TRANSFERRED : ${amount} AND CURRENT BALANCE : ${self.balance}'
                    self.trans_history.append(text)
                    print(text)
                    break
            if exist==False:
                print(f"{account_number} ACCOUNT NUMBER DOES NOT EXIST!!!\n")
        else:
            print("INVALID AMOUNT!!!\n")    





class Admin():
    def __init__(self,name,password,bank):
        self.name=name            
        self.password=password            
        self.bank=bank            

    def create_user(self,input_user):
        exist=False
        for user in self.bank.users:
            if user.email==input_user.email:
                exist=True
                print("USER ALREADY EXIST WITH THIS EMAIL!!!")
                break
        if exist==False:    
            self.bank.users.append(input_user)
            print(f"UESR WITH ACCOUNT NUMBER {input_user.account_number} HAS BEEN CREATED SUCCESSFULLY!!!\n")
        
    def delete_user(self,account_number):
        exist=False
        for user in self.bank.users:
            if user.account_number==account_number:
                exist =True
                del user
                print(f"USER WITH {account_number} ACCOUNT NUMBER HAS BEEN DELETED SUCCESSFULLY!!!\n")
        if exist ==False:
            print(f"USER WITH {account_number} ACCOUNT NUMBER DOES NOT EXIST!!!\n")
    
    
    def users_list(self):
        if len(self.bank.users)>0:
            print("USERS :")
            for user in self.bank.users:
                print(f"NAME : {user.name}, ACCOUNT NUMBER : {user.account_number}, EMAIL : {user.email}, ADDRESS : {user.address}, ACCOUNT TYPE : {user.account_type}")

    def check_balance(self):
        print(f"TOTAL CURRENT BALANCE : {self.bank.total_balance}\n")

    def check_loan(self):
        print(f"TOTAL CURRENT LOAN : {self.bank.total_loan}\n")
    

    def changing_bankrupt_feature(self,feature):
        if feature=="True":
            self.bank.bankrupt=True
        else:     
            self.bank.bankrupt=False




islami=Bank("ISLAMI BANK")

current_user=None


while True:
    if current_user==None:
        print("------WELCOME TO BANK MANAGEMENT SYSTEM-------")
        print("1. ADMIN")
        print("2. USER")
        print("3. EXIT")
        op=int(input("CHOOSE OPTIONS TO PROCEED :"))
    
        if op==1:
            name=input("ENTER NAME (admin):")
            password=input("ENTER PASSWORD (1234):")
            
            if name=="admin" and password=="1234":
                current_user=Admin(name,password,islami)
                print("SUCCESSFULLY LOGGED IN AS AN ADMIN!!!")
                print(f"------WELCOME {current_user.name}-----")
                print("1. CREATE AN USER")
                print("2. DELETE AN USER")
                print("3. USER'S ACCOUNT LISTS")
                print("4. CHECK TOTAL BALANCE")
                print("5. CHECK TOTAL LOAN")
                print("6. CHANGE BANK'S BANKRUPTCY STATUS")
                print("7. LOGOUT")
                
                ch=int(input("CHOOSE AN OPTION : "))

                if ch==1:
                    na=input("INPUT NAME :")
                    em=input("INPUT EMAIL :")
                    pa=input("INPUT PASSWORD :")
                    ad=input("INPUT ADDRESS :")
                    ac_ty=input("INPUT ACCOUNT TYPE :")
                    user=User(na,em,pa,ad,ac_ty,islami)
                    current_user.create_user(user)
                    continue
                elif ch==2:
                    ac_nu=input("INPUT THE USER'S ACCOUNT NUMBER YOU WANT TO DELETE!")
                    current_user.delete_user(ac_nu)    
                    continue
                elif ch==3:
                    current_user.users_list()    
                    continue
                elif ch==4:
                    current_user.check_balance()    
                    continue
                elif ch==5:
                    current_user.check_loan()    
                    continue
                elif ch==6:
                    bs=input("ENTER BANKRUPTCY STATUS: (True/False)")
                    current_user.check_loan(bs)    
                    continue
                elif ch==7:
                    current_user=None    
                    continue
            else:
                print("INVALID LOIGN NAME OR PASSWORD FOR ADMIN!!!")    
                continue