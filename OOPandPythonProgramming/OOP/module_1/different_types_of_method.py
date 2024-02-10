from datetime import date
from typing import Self

"""
There are three types of class :
1. class method : a class method is going to affect the actual class 
2. instance method : a instance method is going to affect the actual instance meaning that we can refer to self and the variables inside the instance
3. static method : a static method might or might not be related to the class, it can be used outside or inside and it doesnt have anything rely on from the class itself

"""

class Calculator:
    def __init__(self,version:int) -> None:
        self.version=version

    # *instance method
    def description(self):
        print(f'calculatir version : {self.version}')    

    # *static method
    def add(self,*numbers:int)->int:
        return sum(numbers)
calc=Calculator(10) #10 is its own local instance variables 
calc.description()       
print(calc.add(5,6,7))


#* though this doesnt work but it is called class method
class Person:
    def __init__(self,name:str,age:int) -> None:
        self.name=name
        self.age=age

    def description(self)->str:
        return f'{self.name} is {self.age} years old'

    def age_from_year(cls,name:str,year:int)->Self:
        current_year:int=date.today().year
        age:int=current_year-year 
        return cls(name,age)
    
if __name__ =='__main__':    
    sun=Person.age_from_year('sun',1996)
    print(sun.description())
