class Shop:
    shop_lst=[]

    def __init__(self,name) :
        self.name=name

    def add_product(self,item):
        self.shop_lst.append(item)

    def buy_product(self,name,quantity):
        for i in self.shop_lst:
            if i['name']==name:
                if i['quantity']<quantity:
                    print('not enough')
                else:
                    i['quantity']-=quantity
                    print('success',i['quantity'])    


class Product:

    def __init__(self,name,price,color,quantity) :
        self.name=name
        self.price=price
        self.color=color
        self.quantity=quantity

    def get_product(self):
        product={'name':self.name,'price':self.price,'color':self.color,'quantity':self.quantity}
        return product
bag=Product('bag',12,'red',5)
shoe=Product('shoe',23,'blue',8)

swapna=Shop('swapna')
swapna.add_product(bag.get_product())
swapna.add_product(shoe.get_product())
print(swapna.shop_lst)
swapna.buy_product('bag',1)