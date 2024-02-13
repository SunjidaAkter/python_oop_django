
#* over ride 

class Person:
    def __init__(self,name,age,height,weight):
        self.name=name
        self.age=age
        self.height=height
        self.weight=weight
    def eat(self):
        print('rice')  
    def exercise(self):
        print('walk')
        raise NotImplementedError # derived class must override this method     

class Cricketer(Person):
    def __init__(self, name, age, height, weight,team):
        self.team=team
        super().__init__(name, age, height, weight)
    #todo: overriding  
    def eat(self):#* this derived class's instance's method will overrride it's parent's eat method
        print('veg')
    def exercise(self):
        print('gym')
        
    #todo: overloading
    #? (+) operator overloadding      
    def __add__(self,other):
        return self.age+other.age    
    #? (*) operator overloadding      
    def __mul__(self,other):
        return self.weight*other.weight    
    #? (len) operator overloadding      
    def __len__(self):
        return self.height    
    def __gt__(self,other):
        return self.weight>other.weight        
sakib=Cricketer('sakib',38,68,45,'BD')
mushi=Cricketer('mushi',35,68,91,'BD')
sakib.exercise()
mushi.exercise()

# *over load
print(5+7)
print('sakib'+'mushi')
print([5,8]+[8,4])
# *overloading normal operators for this instances
print(sakib+mushi)
print(sakib*mushi)
print(len(sakib))
print(sakib>mushi)