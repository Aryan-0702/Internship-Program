USE company_db;

--1. Employees earning more than average salary

SELECT emp_name, salary
FROM employees
WHERE salary > (
    SELECT AVG(salary)
    FROM employees
);

USE company_db;

--2. Department with highest total salary

SELECT dept_name
FROM departments
WHERE dept_id = (
    SELECT TOP 1 dept_id
    FROM employees
    GROUP BY dept_id
    ORDER BY SUM(salary) DESC
);

USE company_db;

--3. Employee with second highest salary

SELECT emp_name, salary
FROM employees
WHERE salary = (
    SELECT MAX(salary)
    FROM employees
    WHERE salary < (
        SELECT MAX(salary)
        FROM employees
    )
);

USE company_db;

--4. Employees working in same department as Amit

SELECT emp_name
FROM employees
WHERE dept_id = (
    SELECT dept_id
    FROM employees
    WHERE emp_name = 'Amit'
);