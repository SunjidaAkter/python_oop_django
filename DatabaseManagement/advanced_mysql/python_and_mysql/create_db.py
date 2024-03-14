import mysql.connector

mydb_connection=mysql.connector.connect(
    host="localhost",
    user="root",
    password="password"
)
print(mydb_connection)

db_name="python_test_db"

mycursor=mydb_connection.cursor()

sql_query="CREATE DATABASE "+db_name

mycursor.execute(sql_query)