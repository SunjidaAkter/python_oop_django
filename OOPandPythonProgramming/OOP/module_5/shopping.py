class Shopping:
    def __init__(self,name):
        self.name=name
        self.cart=[]
    def add_to_cart(self,item:str,price:int,quantity:int):
        product={'item':item,'price':price,'quantity':quantity}
        self.cart.append(product)
    def remove_item(self,item):
        for i in range(len(self.cart)):
            if self.cart[i]['item']==item:
                del self.cart[i]#*The del keyword is used to delete objects. In Python everything is an object, so the del keyword can also be used to delete variables, lists, or parts of a list etc.
                break    
    def checkout(self,amount):
        total=0
        for item in self.cart:
            total+=item['price']*item['quantity']
        if amount<total:
            print(f'provide {total-amount}')    
        elif amount>=total:
            print(f'extra {amount-total}')    

swapan=Shopping('shopon')
swapan.add_to_cart('alu',67,8)
swapan.add_to_cart('dim',12,5)
swapan.add_to_cart('tel',87,9)
swapan.remove_item('tel')
print(swapan.cart)
swapan.checkout(5066)