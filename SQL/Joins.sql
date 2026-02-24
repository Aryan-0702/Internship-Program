CREATE DATABASE company_db;
USE company_db;

-- Create Tables

CREATE TABLE employees(
    emp_id INT PRIMARY KEY,
    emp_name VARCHAR(50),
    dept_id INT,
    salary INT
);

CREATE TABLE departments(
    dept_id INT PRIMARY KEY,
    dept_name VARCHAR(50)
);

-- Insert Data

INSERT INTO departments VALUES
(1,'HR'),
(2,'IT'),
(3,'Finance');

INSERT INTO employees VALUES
(101,'Aryan',2,60000),
(102,'Rahul',1,45000),
(103,'Priya',2,75000),
(104,'Neha',3,52000),
(105,'Karan',NULL,40000),
(106,'Simran',2,90000);

-- 1. Display employee name with department name

SELECT e.emp_name, d.dept_name
FROM employees e
INNER JOIN departments d
ON e.dept_id = d.dept_id;

-- 2. Display employees earning more than 50,000

SELECT emp_name, salary
FROM employees
WHERE salary > 50000;

-- 3. Display department-wise total salary

SELECT d.dept_name, SUM(e.salary) AS Total_Salary
FROM employees e
INNER JOIN departments d
ON e.dept_id = d.dept_id
GROUP BY d.dept_name;

-- 4. Display departments with more than 2 employees

SELECT d.dept_name, COUNT(e.emp_id) AS Total_Employees
FROM employees e
INNER JOIN departments d
ON e.dept_id = d.dept_id
GROUP BY d.dept_name
HAVING COUNT(e.emp_id) > 2;

-- 5. Display employees without a department

SELECT emp_name
FROM employees
WHERE dept_id IS NULL;