"""
?Abstract method:
A method that hides the internal objects and shows the external objects to the user is called Abstraction.

todo:Abstraction is useful when you want to define methods for generic classes. For example if there are multiple classes, and they are using the same method. In this case you can use Abstraction method.
"""


from abc import ABC,abstractmethod
# abstract base class
class Animal(ABC):
    @abstractmethod #* enforce all derived class to have a eat method
    def eat(self):
        print('i need food')
    @abstractmethod #* enforce all derived class to have a eat method
    def move(self):
        print('branches')

class Monkey(Animal):
    def __init__(self,name) -> None:
        self.name=name
        self.category='monkey'
        super().__init__()
    def eat(self):
        print('i need food')
    def move(self):
        print('branches')

layka=Monkey('lucky')
layka.eat()