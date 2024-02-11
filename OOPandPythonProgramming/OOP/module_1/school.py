class Student:
    def __init__(self, name,cllss, id) :
        self.name=name
        self.id=id
        self.cllss=cllss
    def __repr__(self) -> str:
        return f'name: {self.name}, id: {self.id}, class: {self.cllss}'    
    
class Teacher:
    def __init__(self,name,id,sub) :
        self.id=id
        self.name=name    
        self.sub=sub    
    def __repr__(self) -> str:
        return f'name: {self.name}, id: {self.id}, sub: {self.sub}'    
class School:
    def __init__(self,name) :
        self.name=name   
        self.teachers=[]  
        self.students=[] 
    def add_teacher(self,name,sub):
        id=len(self.teachers)+101
        teacher=Teacher(name,id,sub)
        self.teachers.append(teacher)
    def enroll(self,name,fee):
        if fee<6500:
            return 'not enough'
        else:
            id=len(self.students)+1
            student=Student(name,5,id)
            self.students.append(student)
            return f'{name} is enrolled with id {id}'
#     def __repr__(self) -> str:
#         output = f"""
# Welcome to 
# ----Our teachers----
# """
#         for teacher in self.teachers:
#             output += str(teacher) + '\n'

#         output += f"""
# Welcome to {self.name}
# ----Our students----
# """
#         for stu in self.students:
#             output += str(stu) + '\n'

#         return output + 'Thank you'
        
    def __repr__(self) -> str:
        print("""
welcome to {}
----Our students----""".format(self.name))
        for teacher in self.teachers:
            print(teacher)
        print("""
welcome to {}
----Our students----""".format(self.name))
        for stu in self.students:
            print(stu)
        return f'thank you'

alia=Student('alia vat',9,1)
ranbeer=Teacher('ranbeer kapoor',9,'act')
print(alia)    
print(ranbeer)    
phitron=School('phitron')
phitron.enroll('akib',4557)
phitron.enroll('sakib',5465)
phitron.enroll('rakib',5678)
phitron.enroll('nakib',4545)

phitron.add_teacher('tom','ds')
phitron.add_teacher('decap','algo')
phitron.add_teacher('pit','js')

print(phitron)