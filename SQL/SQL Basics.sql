/*Select Database*/
USE StudentDB;

--Create Database

--CREATE DATABASE StudentDB;

--Create Table

--CREATE TABLE students(
--    student_id INT PRIMARY KEY,
--    name VARCHAR(50),
--    department VARCHAR(30),
--    year INT,
--    marks INT
--);

--Insert Sample Data

--INSERT INTO students VALUES
--(1,'Aryan','CSE',3,82),
--(2,'Rahul','IT',2,67),
--(3,'Priya','CSE',4,91),
--(4,'Neha','ECE',1,74),
--(5,'Karan','CSE',2,88),
--(6,'Simran','IT',3,79);

--1. Display all student records

SELECT * FROM students;

--2. Display only name and department

SELECT name, department FROM students;

--3. Students with marks > 75

SELECT * 
FROM students
WHERE marks > 75;

--4. Students from CSE department

SELECT *
FROM students
WHERE department = 'CSE';

--5. Sort students by marks (descending)

SELECT *
FROM students
ORDER BY marks DESC;

--6. Display Top 3 scorers

SELECT TOP 3 *
FROM students
ORDER BY marks DESC;