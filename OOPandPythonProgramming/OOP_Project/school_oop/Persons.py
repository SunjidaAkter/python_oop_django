import random

class Person:
    def __init__(self,name):
        self.name=name

class Teacher(Person):
    def __init__(self, name,subject):
        super().__init__(name)
        self.subject=subject
    def teach(self):
        pass
    def take_xm(self,subject,students):
        for student in students:
            marks=random.randint(0,100)
            # todo: set mark for the subject for each student

class Student(Person):
    def __init__(self, name,classroom):
        super().__init__(name)
        self.__id=None
        self.classroom=classroom
        self.marks={}
        self.grade=None
    @property
    def id(self):
        return self.__id
    @id.setter
    def id(self,value):
        self.__id=value