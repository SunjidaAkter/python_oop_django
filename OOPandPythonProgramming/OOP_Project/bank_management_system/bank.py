
class Comment_views(DetailView):
    model = BookModel
    # pk_url_kwarg = 'id'
    template_name = 'comment.html'
 
    def post(self, request, *args, **kwargs):
        comment_form = CommentForm(data=self.request.POST)
        book = self.get_object()
        if comment_form.is_valid():
            new_comment = comment_form.save(commit=False)
            new_comment.book = book
            new_comment.user = request.user
          
            
            new_comment.save()
        return self.get(request, *args, **kwargs)
 
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        book = self.object
        comments = book.comments.all()
        comment_form = CommentForm()
        context['comments'] = comments
        context['comment_form'] = comment_form
        context['book'] = book
        return context
    import random
class Bank:
    def __init__(self) -> None:
        self.users={}
        self.total_balance=0
        self.total_loan=0
        self.loan_okay=True
    
    def create_account(self,first_name,last_name,email,address,acc_type):
        account_number = first_name.upper() + str(random.randint(100000,999999))
        if acc_type.lower() == "savings" or acc_type.lower()=="current":
            self.users[account_number] = User(first_name, last_name, email, address, acc_type)
            print(f"Account created successfully.\nAccount Holder Name : {first_name} {last_name} \n Account Number: {account_number}")
        else:
            print("Invalid account type. Please choose between Savings and Current.")
        
    def delete_account(self,account_number):
        if account_number in self.users:
            del self.users[account_number]
            print(f"The selected account was deleted successfully.")
        else:
            print("No account exists with this account number")

    def show_all_accounts(self):
        print(self.users)
        for key,value in self.users.items():
            print(self.users[key])
            #for item in user:
                
                #print(f"Name : {item.fname} {item.lname} \nE-mail : {item.email} \nAddress : {item.address} \nAccount Type: {item.acctype}\n")
        #print("---------------------------------")

    def total_bank_balance(self):
        print("Total Bank Balance:", self.total_balance)

    def total_loan_amount(self):
        print("Total Loan Amount:", self.total_loan)

    def find_loan_feature(self,status):
        
        if(status=="enabled"):
            self.loan_okay=True
        else:
            self.loan_okay=False
        print("Loan feature is now ",status)
        #return self.loan_okay


class User:
    #accounts=[]
    def __init__(self,fname,lname,email,address,acctype) -> None:
        self.first_name=fname
        self.last_name=lname
        self.email_add=email
        self.home_address=address
        self.account_type=acctype
        self.accno=fname.lower()+str(random.randint(100000,9999999))

        self.balance=0
        self.transaction_history=[]
        self.loan_taken=0
        self.loan_count=0

        def __str__(self):

            return f"Name: {self.first_name} {self.last_name}\nEmail: {self.email}\nAddress: {self.address}\nAccount Type: {self.account_type}\nBalance: {self.balance}\n"
 


    def deposit(self,amount):
        self.balance+=amount
        bank.total_balance+=amount
        self.transaction_history.append(f"Deposited Amount : {amount}tk")
        print(f"{amount} tk deposited successfully!")
    
    def withdraw(self,amount):
        if self.balance==amount and bank.total_balance-amount<=0:
            print("Bank is bankrupt. Unable to withdraw all deposited money!")
        elif(amount <=self.balance):
            self.balance-=amount
            bank.total_balance-=amount
            self.transaction_history.append(f"Withdrew Amount : {amount}tk")
            print(f"{amount}tk withdrawn successfully!")
        else:
            print("Withdrawal amount exceeded.")

    def check_balance(self):
        print("Available Balance : ",self.balance)

    def check_transaction_history(self):
        print("Transaction History:")
        for t in self.transaction_history:
            print(t)

    def take_loan(self,amount,bank):
        if(self.loan_count<2 and self.balance>0 and bank.loan_okay):
            self.balance+=amount
            self.loan_taken+=amount
            self.transaction_history.append(f"Loan Taken : {amount}tk")
            self.loan_count+=1
            print(f"{amount}tk loan taken successfully!")
        else:
            print("Sorry! You are not eligible for loan!")
    
    def transfer_money(self,amount,receipent_num,bank):
        t=False
        for receipent in bank.users.items():
            if(receipent[0]==receipent_num):
                t=True
                if self.balance>=amount:
                    receipent[1].balance+=amount
                    self.balance-=amount
                    self.transaction_history.append(f"Transferred to {receipent_num} : {amount} tk")
                    print(f"{amount}tk transferred to {receipent_num} successfully!")
                else:
                    print("Insuffiecient Balance!")
        if(t==False):
                print("The Receipant Account Number is not valid. Please try again!")

    
        

class Admin():
    def __init__(self,bank) -> None:
        self.bank=bank
    def create_account(self,first_name,last_name,email,address,acc_type):
        self.bank.create_account(first_name, last_name, email, address, acc_type)
    def delete_account(self, account_number):
        self.bank.delete_account(account_number)
    def show_all_accounts(self):
        self.bank.show_all_accounts()
    def total_bank_balance(self):
        self.bank.total_bank_balance()
    def total_loan_amount(self):
        self.bank.total_loan_amount()
    def find_loan_feature(self,status):
        self.bank.find_loan_feature(status)

bank=Bank()
admin=Admin(bank)




while(True):
    #currentuser=()
    print("----- WELCOME TO OUR BANKING MANAGEMENT SYSTEM ------")
    print('Choose an option to proceed: \n 1.User \n 2.Admin \n 3.Exit\n **You need to ask admin to create account for you**\n')
    n=int(input())
    
    
    if(n==2):
        print("---- WELCOME TO ADMIN PROFILE ----")
        print("Please Enter Your Admin Id : (123)")
        id=input()
        print("Choose an option to proceed: \n 1. Create Account \n 2. Delete Account \n 3. Show Users \n 4. Check Total Balance \n 5. Check Total loan \n 6. Change Loan Status \n 7. Log Out\n")
        ch=int(input())

        if(ch==1):
            print("Please fill your details: \n")
            first_name=input(("First Name: "))
            last_name=input(("\nLast Name: "))
            email=input(("\nE-mail address: "))
            address=input(("\nAddress: "))
            acc_type=input(("\nAccount Types(savings/current): "))
            admin.create_account(first_name, last_name, email, address, acc_type)
        elif(ch==2):
            print("Enter the account number you want to delete")
            acc_num=input()
            admin.delete_account(acc_num)
        elif(ch==3):
            print("Details of all account holders:")
            admin.show_all_accounts()
        elif(ch==4):
            admin.total_bank_balance()
        elif(ch==5):
            admin.total_loan_amount()
        elif(ch==6):
            print("Enter the loan status: (enabled/disabled)")
            st=input()
            admin.find_loan_feature(st)

        else:
            break

        
    elif(n==1):
        print("---- WELCOME TO USER PROFILE ----")
        print("Please Enter Your Account Number: ")
        acc_num=input()
        t=False
        for acc in bank.users.items():
            if acc[0]==acc_num:
                use=acc[1]
                t=True

        if t is False:
            print("No User Found with this account number")
            continue

    
            
        #us=user[acc_num]
        us=bank.users[acc_num]
        #use=User(first_name, last_name, email, address, acc_type)
        
        print("Choose an option to proceed: \n 1. Deposite Money \n 2. Withdraw Money \n 3. Check Available Balance \n 4. Check Transaction History \n 5. Transfer Money \n 6.Take Loan \n 7.Log Out")
        ch=int(input())
        if(ch==1):
            print("Please Enter the amount you want to deposit:")
            amount=int(input())
            use.deposit(amount)

        elif(ch==2):
            print("Please Enter the amount you want to withdraw:")
            amount=int(input())
            use.withdraw(amount)
        elif(ch==3):
            use.check_balance()

        elif(ch==4):
            use.check_transaction_history()
        elif(ch==5):
            print("Enter the account number where you want to transfer money: ")
            other_num=input()
            print("Enter the transferred amount: ")
            amount=int(input())
            use.transfer_money(amount,other_num,bank)
        elif(ch==6):
            amount=int(input())
            use.take_loan(amount,bank)
        else:
            break
    else:
        break

        


                    
                    

            
            
            


        










    






    
