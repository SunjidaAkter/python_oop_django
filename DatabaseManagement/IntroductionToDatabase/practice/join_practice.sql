USE dummydb;
SELECT * FROM employees;
SELECT m.first_name,e.first_name
FROM employees AS e
JOIN employees AS m
ON e.employee_id=m.manager_id;
SELECT employees.first_name,jobs.job_title
FROM employees 
JOIN jobs
ON employees.job_id=jobs.job_id;
SELECT first_name,(SELECT job_title FROM jobs WHERE employees.job_id=jobs.job_id) AS job_title  
FROM employees
WHERE salary=(SELECT MAX(salary) AS salary FROM employees);