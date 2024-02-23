from School import *
from Persons import *
def main():
    # initializing school
    school=School("phitron","uttara")

    # adding classrooms in school
    eight=ClassRoom("eight")
    school.add_classroom(eight)
    nine=ClassRoom("nine")
    school.add_classroom(nine)
    ten=ClassRoom("ten")
    school.add_classroom(ten)

    # adding students
    abul=Student('Abul khan',eight)
    school.student_admission(abul)
    kabul=Student('Kabul khan',eight)
    school.student_admission(kabul)
    babul=Student('Babul khan',eight)
    school.student_admission(babul)

    # adding subjects
    physics_teacher=Teacher("shahjahan topon rana")
    physics=Subject("physics",physics_teacher)
    eight.add_subject(physics)
    chemistry_teacher=Teacher("haradhon nag")
    chemistry=Subject("chemistry",chemistry_teacher)
    eight.add_subject(chemistry)
    biology_teacher=Teacher("azmal")
    biology=Subject("biology",biology_teacher)
    eight.add_subject(biology)

    print(school)

if __name__=="__main__":
    main()    