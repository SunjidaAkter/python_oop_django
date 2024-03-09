--* union
SELECT *
FROM employees
WHERE salary>10000
UNION
SELECT *
FROM employees
WHERE department_id=100;

--* union all
SELECT *
FROM employees
WHERE salary>10000
UNION ALL
SELECT *
FROM employees
WHERE department_id=100;

--* intersection
SELECT *
FROM employees
WHERE salary>10000
INTERSECT
SELECT *
FROM employees
WHERE department_id=100;

--* minus
SELECT *
FROM employees
WHERE salary>10000 AND department_id!=100
