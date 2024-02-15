
# *read only --> we can not set the value, value can not be changed, as getter is a read only attribute so we can not change/set any value through it
# *Getters: These are the methods used in Object-Oriented Programming (OOPS) which helps to access the private attributes from a class. 
# *Setters: These are the methods used in OOPS feature which helps to set the value to private attributes in a class.
class User:
    def __init__(self,name,age,money):
        self._name=name
        self._age=age
        self.__money=money
    
     
    #* this is getter, we just can get the value of money through this but we cant set the value of money through this    
    #* getter without setter is a read only property
    #* getter
    @property    
    def salary(self):
        return self.__money;

    #* we can set the new value of money through the setter
    #* setter
    @salary.setter
    def salary(self,value):
        if value<0:
            return 'salary can not be negative'
        self.__money+=value


samsu=User('kopa',21,12000)
#* using the setter method
samsu.salary=12000
#* using the getter method
print(samsu.salary)