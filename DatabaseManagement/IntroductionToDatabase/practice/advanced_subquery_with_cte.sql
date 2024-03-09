WITH mx AS(
	SELECT MAX(salary) AS sal
    FROM employees
    -- WHERE employee_id=20 
),mxmx AS(
	SELECT MAX(salary) AS sal
    FROM employees
    WHERE salary<(SELECT sal FROM mx)
),mxmxmx AS(
	SELECT MAX(salary) AS sal
    FROM employees
    WHERE salary<(SELECT sal FROM mxmx)
)
SELECT first_name as employeess,salary 
FROM employees
WHERE salary=(select sal from mxmxmx );


