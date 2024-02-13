class Person:
    def __init__(self,name,age,height,weight):
        self.name=name
        self.age=age
        self.height=height
        self.weight=weight
    def eat(self):
        print('rice')    

class Cricketer(Person):
    def __init__(self, name, age, height, weight,team):
        self.team=team
        super().__init__(name, age, height, weight)
    def eat(self):
        print('veg')
sakib=Cricketer('sakib',38,68,91,'BD')
sakib.eat()