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
class Phone:
    def __init__(self,sim):
        self.sim=sim    
    def phone_call(self,num,text):
        return f'sms to: {num} with: {text}'
class Camera:
    def __init__(self,pixel):
        self.pixel=pixel
    def snap(self,num,text):
        return f'camera call'
