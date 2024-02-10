class Shopping:
    def __init__(self,name):
        self.name=name
        self.cart=[]
    def add_to_cart(self,item:str,price:int,quantity:int):
        product={'item':item,'price':price,'quantity':quantity}
        self.cart.append(product)
swapan=Shopping('alan shopon')
swapan.add_to_cart('alu',67,8)
swapan.add_to_cart('dim',12,5)
swapan.add_to_cart('tel',87,9)
print(swapan.cart)