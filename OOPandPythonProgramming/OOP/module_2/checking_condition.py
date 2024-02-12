class Book:
    def __init__(self,name):
        self.name=name
    def read(self):
        raise NotImplemented #todo: In user defined base classes, abstract methods should raise this exception when they require derived classes to override the method 

class Physics(Book):
    def __init__(self, name,lab):
        self.lab=lab
        super().__init__(name)        
    def read(self):
        print('reading this')

topon=Physics('topon',True)
print(issubclass(Physics,Book))        
print(isinstance(topon,Physics))        
print(isinstance(topon,Book))  

topon.read()