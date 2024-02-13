class Calculator:
    brand='casio'
    def add(self,n1,n2):
        return n1+n2
    def deduct(self,n1,n2):
        return n1-n2
    def mul(self,n1,n2):
        return n1*n2
    
my_cal=Calculator()
print(my_cal.add(2,5)) 
print(my_cal.deduct(2,5)) 
print(my_cal.mul(2,5)) 