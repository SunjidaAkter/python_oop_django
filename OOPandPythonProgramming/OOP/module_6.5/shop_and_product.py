class Shop:
    shop_lst=[]

    def __init__(self,name) :
        self.name=name

    def add_product(self,item):
        self.shop_lst.append(item)    

class Product:

    def __init__(self,brand,price,color,quantity) :
        self.brand=brand
        self.price=price
        self.color=color
        self.quantity=quantity

    def get_product(self):
        product={'brand':self.brand,'price':self.price,'color':self.color,'quantity':self.quantity}
        return product
bag=Product('gucci',12,'red',5)
shoe=Product('apex',23,'blue',8)

swapna=Shop('swapna')
swapna.add_product(bag.get_product())
swapna.add_product(shoe.get_product())
print(swapna.shop_lst)