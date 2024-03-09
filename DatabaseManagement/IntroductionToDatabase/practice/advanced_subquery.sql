SELECT first_name as name,salary
FROM employees
WHERE salary=(
	SELECT MAX(salary) AS salary 
	FROM employees
	WHERE salary<(
		SELECT MAX(salary)
		FROM employees
		WHERE salary<(
			SELECT MAX(salary)
			FROM employees
		) 
	)
)    