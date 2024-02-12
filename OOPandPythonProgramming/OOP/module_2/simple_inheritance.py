# base class,parent class, commonn attribute+functionality class
# derived class,child class, uncommonn attribute+functionality class
class Device:
    def __init__(self,brand,price,color,origin):
        self.brand=brand
        self.price=price
        self.color=color
        self.origin=origin
    def run(self):
        return f'running laptop: {self.brand}'


class Laptop:
    def __init__(self,memory):
        self.memory=memory
    def coding(self):
        return f'learning python and practicing'     
class Phone(Device):#*processing of inherit from device
    def __init__(self,sim,brand,price,color,origin):
        self.sim=sim 
        super().__init__(brand,price,color,origin)   
    def phone_call(self,num,text):
        return f'sms to: {num} with: {text}'
    def __repr__(self) -> str:
        return f'phone : {self.sim}'
class Camera:
    def __init__(self,pixel):
        self.pixel=pixel
    def snap(self,num,text):
        return f'camera call'
    

#* inheritance
my_phone=Phone('dual_sim','iphone',10000,'silver','china')    
print(my_phone.brand)
print(my_phone)