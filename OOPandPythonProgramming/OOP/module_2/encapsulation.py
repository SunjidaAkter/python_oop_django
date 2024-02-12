
# * here balance is a private attribute which only can be accessed from the class
# * here holder is a public attribute which can be accessed from anywhere
# * here branch is a protected attribute which can be accessed from derived or child class
class Bank:
    def __init__(self,holder,int_depo):
        self.holder=holder#?public attribute
        self._branch='banani'#?protected attribute
        self.__balance=int_depo#?private attribute

    def deposit(self,amount):
        self.__balance+=amount

    def get_balance(self):
        return self.__balance

rafsan=Bank('choot bhai',1000)

rafsan.holder='boro vai'
print(rafsan.holder)

rafsan.deposit(5)
print(rafsan.get_balance())