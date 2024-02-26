import random
class Bank():

    def __init__(self,name):
        self.name=name
        self.users=[]
        self.total_balance=0
        self.total_loan=0
        self.bankrupt=False



class User():
    
    def __init__(self,name,email,address,account_type,password,bank):
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

    def create_user():
        pass
        
    def delete_user():
        pass

    def users_list():
        pass

    def check_balance():
        pass

    def check_loan():
        pass

    def changing_bankrupt_feature():
        pass