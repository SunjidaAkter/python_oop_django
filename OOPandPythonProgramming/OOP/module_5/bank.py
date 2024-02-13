class Bank:
    def __init__(self,balance):
        self.balance=balance
        self.min_withdraw=100
        self.max_withdraw=100000
    def get_balance(self):
        return self.balance    
    def deposit(self,amount):
        if amount>0:
            self.balance+=amount   
    def withdraw(self,amount):
        if amount<self.min_withdraw:
            return f'fokira' 
        elif amount>self.max_withdraw:
            return f'besi borolox'
        else:
            self.balance-=amount
            return f'take {amount}'
        
brac=Bank(15000)
print(brac.withdraw(25))
print(brac.withdraw(2500000000))
print(brac.withdraw(2500))