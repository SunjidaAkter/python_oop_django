
#* function is a first class object

# *we can call a function inside a function
# todo:we can write like this
def double_decker():
    print('starting the double decker')
    def inner_func():
        print('inside the inner')
    return inner_func()
double_decker()
# todo:also we can write like this
def double_decker2():
    print('starting the double decker')
    def inner_func2():
        print('inside the inner')
    return inner_func2
double_decker2()()


#*we can pass a function parameter into a function
def do_something(work):
    print('work started')
    print(work)
    print('work ended')
def coding():
    return f'coding'
do_something(coding())
