import random

class Person:
    def __init__(self,name):
        self.name=name

class Teacher(Person):
    def __init__(self, name):
        super().__init__(name)
    def teach(self):
        pass
    def __repr__(self)->str:
        return f'{self.name}'
    def evaluate_exam(self)->int:
        marks=random.randint(0,100)
        return marks

class Student(Person):
    def __init__(self, name,classroom):
        super().__init__(name)
        self.__id=None
        self.classroom=classroom
        self.marks={}
        self.subject_grade={}
        self.grade=None
    @property
    def id(self):
        return self.__id
    @id.setter
    def id(self,value):
        self.__id=value