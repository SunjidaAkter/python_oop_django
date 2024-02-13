# Ena poribohon
class Company:
    def __init__(self,name,address):
        self.name=name
        self.bus=[]
        self.routes=[]
        self.drivers=[]
        self.counters=[]
        self.managers=[]
        self.supervisors=[]
        self.fare=[]
class Driver:
    def __init__(self,name,age,license):
        self.license=license        
        self.name=name        
        self.age=age        
class Counter:
    def __init__(self) -> None:
        pass        
    def purchase_ticket(self,start,destination):
        pass        
class Passanger:
    pass
class Supervisor:
    pass

red_mia=Driver('a','123',23)