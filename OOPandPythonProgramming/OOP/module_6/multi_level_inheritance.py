class Vehicle:
    def __init__(self,name,price):
        self.name=name
        self.price=price
    def move(self):
        pass
    def __repr__(self) -> str:
        return f"""name : {self.name}
price : {self.price}"""    



#* inherited from vehicle
class Bus(Vehicle):
    def __init__(self, name, price,seat):
        self.seat=seat
        super().__init__(name, price)        
    def __repr__(self) -> str:
        print('seat :',self.seat)
        return super().__repr__()


class Truck(Vehicle):
    def __init__(self, name, price,weight):
        self.weight=weight
        super().__init__(name, price)


#* inherited from truck which was also inherited from vehicle        
class PickupTruck(Truck):
    def __init__(self, name, price,weight):
        super().__init__(name, price,weight)


#* inherited from bus which was also inherited from vehicle        
class ACBus(Bus):
    def __init__(self, name, price, seat,temp):
        self.temp=temp
        super().__init__(name, price, seat)
    def __repr__(self) -> str:
        print('temp :',self.temp)
        return super().__repr__()


# *instance
green_line=ACBus('green',50000,22,16)        
print(green_line)