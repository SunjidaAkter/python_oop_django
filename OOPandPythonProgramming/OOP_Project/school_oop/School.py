class School:
    def __init__(self,name,address):
        self.name=name
        self.address=address
        self.teachers={}
        # * composition: as school works with multiple classes means school composites multiple classes
        self.classrooms={}

    def add_classroom(self,classroom):
        self.classrooms[classroom.name]=classroom

    def add_teacher(self,subject,teacher):
        self.teachers[subject]=teacher

    def student_admission(self,student):
        className=student.classroom.name
        if className in self.classrooms:
            self.classrooms[className].add_student(student)
        else:
            print(f'No classroom as named {className}')     

    @staticmethod
    def calculate_grade(marks):
        if 80<=marks<=100:
            return "A+"
        elif 70<=marks<80:
            return "A"
        elif 60<=marks<70:
            return "A-"
        elif 50<=marks<60:
            return "B"
        elif 40<=marks<50:
            return "C"
        elif 33<=marks<40:
            return "D"
        else:
            return "F"
        
    @staticmethod
    def value_to_grade(value):
        if 4.5<=value<=5.00:
            return "A+"
        elif 3.5<=value<4.5:
            return "A"
        elif 3.00<=value<3.5:
            return "A-"
        elif 2.5<=value<3.00:
            return "B"
        elif 2.00<=value<2.5:
            return "C"
        elif 1.00<=value<2.00:
            return "D"
        else:
            return "F"

    @staticmethod
    def grade_to_value(grade):
        grade_map={
            "A+":5.00,
            "A":4.00,
            "A-":3.50,
            "B":3.00,
            "C":2.00,
            "D":1.00,
            "F":0.00,
        }
        return grade_map[grade]

    def __repr__(self) -> str:
        print()
        print("--------ALL CLASSROOMS--------")
        for key,value in self.classrooms.items():
            print(key)                
        print()
        print("--------ALL STUDENTS--------")
        eight=self.classrooms['eight']
        for student in eight.students:
            print(student.name)                
        print()
        print("--------ALL SUBJECTS--------")
        eight=self.classrooms['eight']
        for subject in eight.subjects:
            print(f'{subject.name} : {subject.teacher.name}')                    
        print()
        print("--------STUDENTS RESULTS--------")
        for student in eight.students:
            print(f'\n**** {student.name} ****\n')
            for key, value in student.marks.items():
                print(f'{key} : {value} ({student.subject_grade[key]})')                

        return ""

class ClassRoom:
    def __init__(self,name):
        self.name=name
        # * composition: as class works with multiple students means class composites multiple students
        self.students=[]
        self.subjects=[]

    def add_student(self,student):
        serial_id=f'{self.name}-{len(self.students)+1}'
        student.id=serial_id
        self.students.append(student)

    def add_subject(self,subject):
        self.subjects.append(subject)

    def take_semester_final(self):
        for subject in self.subjects:
            subject.exam(self.students)

    def __str__(self) -> str:
        return f'{self.name}-{len(self.students)}'
    
    # todo: sort students by grade
    def get_top_students(self):
        pass

class Subject:
    def __init__(self,name,teacher) -> None:
        self.name=name
        self.teacher=teacher
        self.max_marks=100   
        self.pass_marks=30   

    def exam(self,students):
        for student in students:
            mark=self.teacher.evaluate_exam()
            student.marks[self.name]=mark
            student.subject_grade[self.name]=School.calculate_grade(mark)