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
        print(f"{book.name} Added Successfully!\n")
    def addUser(self,id,name,password):
        user=User(id,name,password)
        self.users.append(user)    
        return user
        
bsk=Library("Bishwa Shahitja Kendra")
admin=bsk.addUser(1000,"admin","admin")
ratin=bsk.addUser(17,"ratin","123")
cpBook=bsk.addBook(11,"CP Book",5)

currentUser=None

while True:
    if currentUser==None:
        print("No logged in user\n")

        option=input("Login or Register (L/R): ")

        if option=="L":
            id=int(input("Enter ID: "))
            password=input("Enter Password: ")

            match=False
            for user in bsk.users:
                if user.id==id and user.password==password:
                    currentUser=user      
                    match=True
                    break
            if match==False:
                print("No User FoundQ\n")
        
        elif option=="R":
            id=int(input("Enter ID: "))
            name=input("Enter Name: ")
            password=input("Enter Password: ")

            for use in bsk.users:
                if user.id==id:
                    print("User Already Exists!\n")

            user=bsk.addUser(id,name,password)  
            currentUser=user
    else:
        print(f"----- Welcome {currentUser.name}! -----")
        if currentUser.name=="admin":

            print("Options: ")
            print("1: Add Book")    
            print("2: Add User")    
            print("3: Show All Books")    
            print("4: Logout")    

            ch=int(input("Enter Option: "))

            if ch==1:
                id=int(input("Enter ID: "))
                name=input("Enter Name: ")
                quantity=int(input("Enter Number of Books:"))                

                bsk.addBook(id,name,quantity)

            elif ch==3:
                for book in bsk.books:
                    print(f"{book.id}\t{book.name}\t{book.quantity}")
                print("\n")
                
            elif ch==4:
                currentUser=None
        else:
            print("Options: ")
            print("1: Borrow Book")    
            print("2: Return User")    
            print("3: Show Borrowed Books")    
            print("3: Show History")    
            print("4: Logout")    

            ch=int(input("Enter Option: "))
