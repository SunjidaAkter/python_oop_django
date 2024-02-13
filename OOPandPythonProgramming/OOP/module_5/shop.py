class Shop:
    cart=[]#*cart is a class attribute and also a class variable shared by all instaces
    def __init__(self,buyer):
        self.buyer=buyer

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