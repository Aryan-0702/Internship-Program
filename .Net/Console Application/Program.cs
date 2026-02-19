using System;
using System.Collections.Generic;
using System.Linq;

class Student
{
    public int student_id;
    public string name;
    public string department;
    public int marks;
}

class Program
{
    static void Main()
    {
        List<Student> students = new List<Student>();

        Console.Write("Enter number of students: ");
        int n = Convert.ToInt32(Console.ReadLine());

        // 1. Accept student details
        for (int i = 0; i < n; i++)
        {
            Student s = new Student();

            Console.WriteLine($"\nEnter details of Student {i + 1}");

            Console.Write("ID: ");
            s.student_id = Convert.ToInt32(Console.ReadLine());

            Console.Write("Name: ");
            s.name = Console.ReadLine();

            Console.Write("Department: ");
            s.department = Console.ReadLine();

            Console.Write("Marks: ");
            s.marks = Convert.ToInt32(Console.ReadLine());

            students.Add(s);
        }

        // 2. Display all records
        Console.WriteLine("\n--- All Students ---");
        foreach (var s in students)
        {
            Console.WriteLine($"{s.student_id} | {s.name} | {s.department} | {s.marks}");
        }

        // 3. Display name + department
        Console.WriteLine("\n--- Name & Department ---");
        foreach (var s in students)
        {
            Console.WriteLine($"{s.name} - {s.department}");
        }

        // 4. Marks > 75
        Console.WriteLine("\n--- Students with marks > 75 ---");
        var highMarks = students.Where(s => s.marks > 75);
        foreach (var s in highMarks)
        {
            Console.WriteLine($"{s.name} - {s.marks}");
        }

        // 5. Specific department
        Console.Write("\nEnter department to filter: ");
        string dept = Console.ReadLine();

        var deptStudents = students.Where(s => s.department.Equals(dept, StringComparison.OrdinalIgnoreCase));

        Console.WriteLine($"\n--- Students in {dept} ---");
        foreach (var s in deptStudents)
        {
            Console.WriteLine($"{s.name} - {s.department}");
        }

        // 6. Sort descending marks
        Console.WriteLine("\n--- Sorted by Marks (Descending) ---");
        var sorted = students.OrderByDescending(s => s.marks);
        foreach (var s in sorted)
        {
            Console.WriteLine($"{s.name} - {s.marks}");
        }

        // 7. Top scorer
        var top = students.OrderByDescending(s => s.marks).First();
        Console.WriteLine($"\nTopper: {top.name} with {top.marks} marks");
    }
}