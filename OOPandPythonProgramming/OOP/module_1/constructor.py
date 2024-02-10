class Phone:
    manufactured='China'

    def __init__(self,owner,brand,price):
        self.owner=owner
        self.brand=brand
        self.price=price
    
    def send_sms(self,phone,sms):
        text=f'sending to: {phone} {sms}'
        return text

my_phone=Phone('kala','oppo',98000)
print(my_phone.owner,my_phone.brand,my_phone.price)
her_phone=Phone('dhala','poop',89000)
print(her_phone.owner,her_phone.brand,her_phone.price)