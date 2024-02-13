
#*static attribute and class attribute are same
#*static attribute

class Shopping:
    cart=[]#? class attribute || static attribute
    origin='china'#? class attribute || static attribute

    def __init__(self,name,location):
        self.name=name#?instance method 
        self.location=location#?instance method 

    #?this is normal class method which we usually use through instance but we also can use it directly through the class     
    #?but when we use it directly through the class we should give the self parameter to know about the class state in this case as well
    #?class method can access and modify the class state
    @classmethod    
    def purchase(self,item,price,amount):
        rem=amount-price
        print(f'buying: {item}, price: {price}, rermaining: {rem}')

        
    #?this is static method which we shouldnt use it through instance     
    #?static method can't access and modify the class state
    #?we can use it directly through the calss but as we cant access or modify class state through it so we dont need to give the self parameter to know about the state of class 
    @staticmethod    
    def mul(a,b):
        item=a*b
        print(item)


Shopping.purchase('basundhara','bag',45,7)
Shopping.mul(45,7)