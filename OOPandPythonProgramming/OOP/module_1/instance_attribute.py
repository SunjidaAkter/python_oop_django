class Shop:
    shopping_mall='jamuna'
    def __init__(self,buyer):
        self.buyer=buyer
        self.cart=[]#* cart is a instance attribute also an instance variable
    def add_to_cart(self,item):
       self.cart.append(item)     

mehzabeen = Shop('meh jabeen')
mehzabeen.add_to_cart('shoes')        
mehzabeen.add_to_cart('bags')
print(mehzabeen.cart)        

nisho = Shop('ni shu')
nisho.add_to_cart('cap')        
nisho.add_to_cart('watch')
print(nisho.cart)               