class Laptop:
    def __init__(self,brand,price,color,memory):
        self.brand=brand
        self.price=price
        self.color=color
        self.memory=memory
    def run(self):
        return f'running laptop: {self.brand}'
    def coding(self):
        return f'learning python and practicing'     
class Phone:
    def __init__(self, brand,price,color,sim):
        self.brand=brand    
        self.price=price    
        self.color=color    
        self.sim=sim    
    def run(self):
        return f'phone running'
    def phone_call(self,num,text):
        return f'sms to: {num} with: {text}'
class Camera:
    def __init__(self,brand,price,color,pixel):
        self.brand=brand
        self.price=price
        self.color=color
        self.pixel=pixel
    def run(self):
        return f'camera running'
    def snap(self,num,text):
        return f'camera call'
