import mysql.connector

db_name="python_test_db"

mydb_connection=mysql.connector.connect(
    host="localhost",
    user="root",
    password="password",
    database=db_name
)
print(mydb_connection)

mycursor=mydb_connection.cursor()

sql_query="""
insert into student(roll,name)
values('101','koushik')
"""

mycursor.execute(sql_query)
mydb_connection.commit()