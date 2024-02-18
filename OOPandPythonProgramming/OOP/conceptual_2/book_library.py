class Book:
    def __init__(self,id,name,quantity):
        self.id=id
        self.name=name
        self.quantity=quantity
class User:
    def __init__(self,id,name,password):
        self.id=id
        self.name=name
        self.password=password
        self.borrowedBooks=[]
        self.returnedBooks=[]
class Library:
    def __init__(self,name):
        self.name=name
        self.users=[]
        self.books=[]
    def addBook(self,id,name,quantity):
        book=Book(id,name,quantity)
        self.books.append(book)    
        
