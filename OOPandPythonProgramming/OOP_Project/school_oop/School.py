class School:
    def __init__(self,name,address):
        self.name=name
        self.address=address
        # * composition: as school works with multiple classes means school composites multiple classes
        self.classrooms={}

    def add_classroom(self,classroom):
        self.classrooms[classroom.name]=classroom

    def student_admission(self,student,classroom_name):
        if classroom_name in self.classroom:
            self.classrooms[classroom_name].add_student(student)
        else:
            print(f'No classroom as named{classroom_name}')     
            


class ClassRoom:
    def __inti__(self,name):
        self.name=name
        # * composition: as class works with multiple students means class composites multiple students
        self.students=[]

    def add_student(self,student):
        serial_id=f'{self.name}-{len(self.students)+1}'
        self.students.append(student)

    def __str__(self) -> str:
        return f'{self.name}-{len(self.students)}'
    
    # todo: sort students by grade
    def get_top_students(self):
        pass