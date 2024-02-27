import random
class Bank():

    def __init__(self,name):
        self.name=name
        self.users=[]
        self.total_balance=0
        self.total_loan=0
        self.bankrupt=False
        self.loan_feature=True




class User():
    
    def __init__(self,name,email,password,address,account_type,bank):
        self.bank=bank
        self.name=name
        self.email=email
        self.password=password
        self.address=address
        self.account_type=account_type
        self.type="user"
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
            print()
            print(text)
            print()
        else:
            print("\nINVALID AMOUNT!!!\n")    
        

    def withdraw(self,amount):
        if self.bank.bankrupt==False:
            if amount>=0 and amount<=self.balance:
                self.balance-=amount
                self.bank.total_balance-=amount
                text=f'SUCCESSFULLY WITHDREW : ${amount} AND CURRENT BALANCE : ${self.balance}'
                self.trans_history.append(text)
                print()
                print(text)
                print()
            elif amount>self.balance:
                print("\nWITHDRAWAL AMOUNT EXCEEDED!!!\n")    
            else:
                print("\nINVALID AMOUNT!!!\n")    
        else:
            print("\nYOU CAN NOT WITHDRAW MONEY BECAUSE OF BANKRUPT!!!\n")        


    def take_loan(self,amount):
        if self.bank.bankrupt==False:
            if self.bank.loan_feature==True:
                if amount>=0 and self.loan_time<2:
                    self.balance-=amount
                    self.loan_time+=1
                    self.bank.total_balance-=amount
                    self.bank.total_loan+=amount
                    text=f'SUCCESSFULLY LOAN TAKEN : ${amount} AND CURRENT BALANCE : ${self.balance}'
                    self.trans_history.append(text)
                    print()
                    print(text)
                    print()
                elif self.loan_time>=2:
                    print("\nLOAN TAKING TIME EXCEEDED!!!\n")    
                else:
                    print("\nINVALID AMOUNT!!!\n")    
            else:
                print("\nLOAN TAKING FEATURE IS OFF!!!\n")        
        else:
            print("\nYOU CAN NOT TAKE LOAN BECAUSE OF BANKRUPT!!!\n")        


    def check_balance(self):
        print(f"\nCURRENT BALANCE : {self.balance}\n")


    def history(self):
        if len(self.trans_history)>0:
            print("\nTRANSACTION HISTORIES :")
            for trans in self.trans_history:
                print(trans)
            print()    
        else:
            print("\nNO TRANSACTION HISTORY AVAILABLE!!!\n")        


    def transfer(self,amount,account_number):
        if amount>=0 and self.balance>=amount and int(self.account_number)!=int(account_number):
            exist=False
            for user in self.bank.users:
                if int(user.account_number)==int(account_number):
                    exist=True
                    self.balance-=amount
                    user.balance+=amount
                    text=f'SUCCESSFULLY TRANSFERRED : ${amount} AND CURRENT BALANCE : ${self.balance}'
                    self.trans_history.append(text)
                    print()
                    print(text)
                    print()
                    break
            if exist==False:
                print(f"\n{account_number} ACCOUNT NUMBER DOES NOT EXIST!!!\n")
        elif amount>self.balance:
            print("\nYOU DON'T HAVE SUFFICIENT BALANCE TO TRANSFER!!!\n")
        elif int(self.account_number)==int(account_number):
            print("\nIT'S YOUR ACCOUNT NUMBER WHERE YOU CAN'T TRANSFER MONEY!!!\n")
        else:
            print("\nINVALID AMOUNT!!!\n")    





class Admin():
    def __init__(self,name,password,bank):
        self.name=name            
        self.password=password            
        self.bank=bank            
        self.type="admin"            


    def create_user(self,input_user):
        exist=False
        for user in self.bank.users:
            if (user.email)==(input_user.email):
                exist=True
                print("\nUSER ALREADY EXIST WITH THIS EMAIL!!!\n")
                break
        if exist==False:    
            self.bank.users.append(input_user)
            print(f"\nUESR WITH ACCOUNT NUMBER {input_user.account_number} HAS BEEN CREATED SUCCESSFULLY!!!\n")
        

    def delete_user(self,account_number):
        exist=False
        for i in range(len(self.bank.users)):
            if int(self.bank.users[i].account_number)==int(account_number):
                exist =True
                self.bank.users.pop(i)
                print(f"\nUSER WITH {account_number} ACCOUNT NUMBER HAS BEEN DELETED SUCCESSFULLY!!!\n")
        if exist ==False:
            print(f"\nUSER WITH {account_number} ACCOUNT NUMBER DOES NOT EXIST!!!\n")
    
    
    def users_list(self):
        if len(self.bank.users)>0:
            print("\nUSERS :")
            for user in self.bank.users:
                print(f"NAME : {user.name}, ACCOUNT NUMBER : {user.account_number}, EMAIL : {user.email}, ADDRESS : {user.address}, ACCOUNT TYPE : {user.account_type}")
            print()    
        else:
            print("\nNO USER AVAILABLE!!!\n")    


    def check_balance(self):
        print(f"\nTOTAL CURRENT BALANCE : {self.bank.total_balance}\n")


    def check_loan(self):
        print(f"\nTOTAL CURRENT LOAN : {self.bank.total_loan}\n")
    

    def changing_bankrupt_feature(self,feature):
        if feature=="true":
            self.bank.bankrupt=True
            print("\nBANKRUPTCY STATUS IS ON!!!\n")
        elif feature=="false":     
            self.bank.bankrupt=False
            print("\nBANKRUPTCY STATUS IS OFF!!!\n")
        else:
            if feature!="true" and feature!="false":
                while True:
                    print("INVALID STATUS!!!")
                    feature=input("INPUT BANKRUPTCY STATUS (true/false) : ")
                    if feature=="true" or feature=="false":
                        break    
                if feature=="true":
                    self.bank.bankrupt=True
                    print("\nBANKRUPTCY STATUS IS TRUE!!!\n")
                elif feature=="false":
                    self.bank.bankrupt=False
                    print("\nBANKRUPTCY STATUS IS FALSE!!!\n")


    def changing_loan_feature(self,feature):
        if feature=="on":
            self.bank.loan_feature=True
            print("\nLOAN TAKING FEATURE IS ON!!!\n")
        elif feature=="off":     
            self.bank.loan_feature=False
            print("\nLOAN TAKING FEATURE IS OFF!!!\n")
        else:
            if feature!="on" and feature!="off":
                while True:
                    print("\nINVALID COMMAND!!!\n")
                    feature=input("INPUT LOAN TAKING FEATURE (on/off) : ")
                    if feature=="on" or feature=="off":
                        break    
                if feature=="on":
                    self.bank.loan_feature=True
                    print("\nLOAN TAKING FEATURE IS ON!!!\n")
                elif feature=="off":
                    self.bank.loan_feature=False
                    print("\nLOAN TAKING FEATURE IS OFF!!!\n")




islami=Bank("ISLAMI")
current_user=None



while True:
    if current_user==None:
        print(f"\n------WELCOME TO {islami.name} BANK MANAGEMENT SYSTEM-------")
        print("1. ADMIN")
        print("2. USER")
        print("3. EXIT")
        print("\n**ASK ADMIN TO CREATE YOUR ACCOUNT**\n")
        op=(input("\nCHOOSE OPTIONS TO PROCEED : "))
    
        if op=="1":
            name=input("\nENTER NAME (admin) : ")
            password=input("ENTER PASSWORD (1234) : ")
            if name=="admin" and password=="1234":
                current_user=Admin(name,password,islami)
                print("\nSUCCESSFULLY LOGGED IN AS AN ADMIN!!!\n")
                continue
            else:
                print("\nINVALID LOIGN NAME OR PASSWORD FOR ADMIN!!!\n")    
                print("\n**NAME MUST BE 'admin' AND PASSWORD MUST BE '1234'**\n")    
                continue

        elif op=="2":
            ac_no=input("\nENTER ACCOUNT NUMBER : ")
            pas=input("ENTER PASSWORD : ")
            exist=False
            for user in islami.users:
                # print(user.account_number,ac_no , user.password==pas)
                if int(user.account_number)==int(ac_no) and user.password==pas:
                    exist=True
                    current_user=user
                    break
            if exist==False:
                print("\nINVALID LOIGN ACCOUNT NUMBER OR PASSWORD FOR USER!!!\n")
            continue

        elif op=="3":
            break

        else :
            print("\nINVALID OPTION\n")
            continue

    else:
        if current_user.type=="admin":
            print(f"\n------WELCOME {current_user.name}-----")
            print("1. CREATE AN USER")
            print("2. DELETE AN USER")
            print("3. USER'S ACCOUNT LISTS")
            print("4. CHECK TOTAL BALANCE")
            print("5. CHECK TOTAL LOAN")
            print("6. CHANGE BANK'S BANKRUPTCY STATUS")
            print("7. CHANGE BANK'S LOAN TAKING FEATURE")
            print("8. LOGOUT")
            
            ch=(input("\nCHOOSE AN OPTION : "))

            if ch=="1":
                na=input("\nINPUT NAME : ")
                em=input("INPUT EMAIL : ")
                pa=input("INPUT PASSWORD : ")
                ad=input("INPUT ADDRESS : ")
                ac_ty=input("INPUT ACCOUNT TYPE (savings/current) : ")
                if ac_ty!="savings" and ac_ty!="current":
                    while True:
                        print("INVALID TYPE!!!")
                        ac_ty=input("INPUT ACCOUNT TYPE (savings/current) : ")
                        if ac_ty=="savings" or ac_ty=="current":
                            break
                user=User(na,em,pa,ad,ac_ty,islami)
                current_user.create_user(user)
                continue                
            elif ch=="2":
                ac_nu=input("\nINPUT THE USER'S ACCOUNT NUMBER YOU WANT TO DELETE : ")
                current_user.delete_user(ac_nu)    
                continue

            elif ch=="3":
                current_user.users_list()    
                continue
                
            elif ch=="4":
                current_user.check_balance()    
                continue
                
            elif ch=="5":
                current_user.check_loan()    
                continue
                
            elif ch=="6":
                bs=input("\nINPUT BANKRUPTCY STATUS (true/false) : ")
                current_user.changing_bankrupt_feature(bs)    
                continue
                
            elif ch=="7":
                bs=input("\nINPUT LOAN TAKING FEATURE STATUS (on/off) : ")
                current_user.changing_loan_feature(bs)    
                continue

            elif ch=="8":
                current_user=None    
                continue

            else:
                print("\nINVALID OPTION!!!\n")
                continue

        elif current_user.type=="user":
            print(f"\n------WELCOME {current_user.name}-----")
            print("1. DEPOSITE MONEY")
            print("2. WITHDRAW MONEY")
            print("3. CHECK AVAILABLE BALANCE")
            print("4. CHECK TRANSACTION HISTORY")
            print("5. TAKE LOAN")
            print("6. TRANSFER MONEY")
            print("7. LOGOUT")
            
            ch=(input("\nCHOOSE AN OPTION : "))

            if ch=="1":
                am=int(input("\nAMOUNT :"))
                current_user.deposit(am)
                continue                

            elif ch=="2":
                am=int(input("\nAMOUNT : "))
                current_user.withdraw(am)
                continue                

            elif ch=="3":
                current_user.check_balance()    
                continue
                
            elif ch=="4":
                current_user.history()    
                continue
                
            elif ch=="5":
                am=int(input("\nAMOUNT : "))
                current_user.take_loan(am)    
                continue
                
            elif ch=="6":
                am=int(input("\nAMOUNT : "))
                num=(input("ACCOUNT NUMBER WHERE YOU WANT TO TRANSFER THE MONEY : "))
                current_user.transfer(am,num)    
                continue
                
            elif ch=="7":
                current_user=None    
                continue
                
            else:
                print("\nINVALID OPTION!!!\n")
                continue





















