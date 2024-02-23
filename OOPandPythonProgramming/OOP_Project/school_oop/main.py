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

    print(school)

if __name__=="__main__":
    main()    