def call():
    print('calling someone')
    return 'call done'

class Phone:
    price=12000
    color='blue'
    brand='samsung'
    features=['camers','speaker','hammer']
    def call():
        print('calling one person')
    # def send_sms(self,phone,sms):
    #     text=f'sending SMS to: {phone} and message:{sms}'
    #     return text


my_phone=Phone()
my_phone.call()        
res=my_phone.send_sms(343,'forget') 
print(res)      
