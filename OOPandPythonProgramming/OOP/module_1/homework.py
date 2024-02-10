class Pen:
    def __init__(self,owner,color,price):
        self.owner=owner
        self.color=color
        self.price=price
pen1=Pen('akib','blue',12)    
pen2=Pen('sakib','red',23)    
pen3=Pen('rakib','black',34)    
print("pen1",pen1.owner,pen1.color,pen1.price)
print("pen2",pen2.owner,pen2.color,pen2.price)
print("pen3",pen3.owner,pen3.color,pen3.price)

"""
In this example, pen1, pen2, and pen3 are three distinct instances of the Pen class, each with different values for the owner, color, and price attributes.
"""