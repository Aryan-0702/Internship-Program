USE StudentDB;	

--1. Count total number of students

SELECT COUNT(*) AS Total_Students
FROM students;

--2. Find average marks of students

SELECT AVG(marks) AS Average_Marks
FROM students;

--3. Find highest and lowest marks

SELECT 
    MAX(marks) AS Highest_Marks,
    MIN(marks) AS Lowest_Marks
FROM students;

--4. Department-wise average marks

SELECT department, AVG(marks) AS Avg_Marks
FROM students
GROUP BY department;

--5. Departments where average marks > 70

SELECT department, AVG(marks) AS Avg_Marks
FROM students
GROUP BY department
HAVING AVG(marks) > 70;