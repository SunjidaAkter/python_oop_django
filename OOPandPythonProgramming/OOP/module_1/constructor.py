
"""
In object-oriented programming, a method is a function associated with an object. It defines the behavior of an object and is called on an instance of the class.

A constructor is a special method used for initializing object attributes. In Python, it is named __init__. It is called automatically when an object is created.

An instance is an individual occurrence of an object created from a class.
"""

class Phone:
    manufactured='China'

    def __init__(self,owner,brand,price):
        self.owner=owner
        self.brand=brand
        self.price=price
    
    def send_sms(self,phone,sms):
        text=f'sending to: {phone} {sms}'
        return text

my_phone=Phone('kala','oppo',98000)
print(my_phone.owner,my_phone.brand,my_phone.price)
her_phone=Phone('dhala','poop',89000)
print(her_phone.owner,her_phone.brand,her_phone.price)

"""
Instance: 
?my_phone is an instance of the Phone class, representing a specific phone object.

Constructor: 
?The __init__ method is the constructor. It initializes the attributes (owner, brand, price) when a new Phone object is created.

Method: 
?send_sms is a method of the Phone class. It can be called on an instance (e.g., my_phone.send_sms('123456789', 'Hello')) to perform actions related to the phone, like sending an SMS.
"""