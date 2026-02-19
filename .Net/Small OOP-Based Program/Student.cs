using System;

public class Student
{
    // private fields
    private int studentId;
    private string name;
    private string department;
    private int year;
    private int marks;

    // Constructor
    public Student(int studentId, string name, string department, int year, int marks)
    {
        this.studentId = studentId;
        this.name = name;
        this.department = department;
        this.year = year;
        this.marks = marks;
    }

    // Encapsulation (Properties)
    public int StudentId { get => studentId; set => studentId = value; }
    public string Name { get => name; set => name = value; }
    public string Department { get => department; set => department = value; }
    public int Year { get => year; set => year = value; }
    public int Marks { get => marks; set => marks = value; }

    // Display method
    public void Display()
    {
        Console.WriteLine($"{studentId} | {name} | {department} | Year:{year} | Marks:{marks}");
    }
}