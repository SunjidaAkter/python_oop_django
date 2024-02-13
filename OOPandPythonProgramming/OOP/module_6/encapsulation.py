
# * access modifiers  --->  public, private, protected
# * here balance is a private attribute which only can be accessed from the class
# * here holder is a public attribute which can be accessed from anywhere
# * here branch is a protected attribute which can be accessed from derived or child class
# * encapsulation  --->  dont share the implementation details
# * Encapsulation is one of the fundamental concepts in object-oriented programming (OOP). It describes the idea of wrapping data and the methods that work on data within one unit. This puts restrictions on accessing variables and methods directly and can prevent the accidental modification of data
class Bank:
    def __init__(self,holder,int_depo):
        self.holder=holder#?public attribute
        self._branch='banani'#?protected attribute
        self.__balance=int_depo#?private attribute

    def deposit(self,amount):
        self.__balance+=amount

    def get_balance(self):
        return self.__balance

    def withdraw(self,amount):
        if amount <self.__balance:
            self.__balance-=amount
            return amount
        else:
            return f'taka nai'


rafsan=Bank('choot bhai',1000)

rafsan.holder='boro vai'
print(rafsan.holder)

rafsan.deposit(5)
print(rafsan.get_balance())

# !special
print(rafsan._Bank__balance)