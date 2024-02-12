
#* poly --> many(multiple)
#* morph --> shape
#* Polymorphism is a concept where class or function is used in different places i different ways with the same name.
#* this is an example of polymorphism, same making_sound function working differently for different animals
class Animal:
    def __init__(self,name):
        self.name=name

    def make_sound(self):
        print('animal making sound')

class Cat(Animal):
    def __init__(self, name):
        super().__init__(name)

    def make_sound(self):
        print('meow meow')

class Dog(Animal):
    def __init__(self, name):
        super().__init__(name)

    def make_sound(self):
        print('gheow gheow')


class Goat(Animal):
    def __init__(self, name):
        super().__init__(name)

    def make_sound(self):
        print('beh beh')

        
don=Cat('real don')                    
don.make_sound()

shepard=Dog('local shephered')
shepard.make_sound()

messy=Goat('legend potu')
messy.make_sound()

# less=Goat('latest gouri')
# less.make_sound()

animals=[don,shepard,messy]
for animal in animals:
    animal.make_sound()
