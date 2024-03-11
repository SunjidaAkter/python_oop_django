USE practice;
CREATE TABLE student(
roll char(4) unique primary key,
name varchar(50)
);
CREATE TABLE course(
courseno char(4) unique primary key,
coursename varchar(50)
);
CREATE TABLE enroll(
date datetime,
roll char(4),
courseid char(4),
foreign key(roll)references student(roll) on delete cascade,
foreign key(courseid)references course(courseno)on delete set null
);