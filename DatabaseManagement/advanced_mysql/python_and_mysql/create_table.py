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
create table student(
roll varchar(4),
name varchar(50)
)
"""

mycursor.execute(sql_query)