using System;
using System.Collections.Generic;
using System.Linq;

class Program
{
    static void Main()
    {
        // Create multiple student objects
        List<Student> students = new List<Student>()
        {
            new Student(1,"Aryan","CSE",3,85),
            new Student(2,"Neha","IT",2,72),
            new Student(3,"Rahul","CSE",4,91),
            new Student(4,"Priya","ECE",1,67),
            new Student(5,"Karan","CSE",3,78)
        };

        // Display all students
        Console.WriteLine("\nAll Students:");
        students.ForEach(s => s.Display());

        // Students with marks > 75
        Console.WriteLine("\nStudents with Marks > 75:");
        var highScorers = students.Where(s => s.Marks > 75);
        foreach (var s in highScorers)
            s.Display();

        // Sort by marks
        Console.WriteLine("\nSorted by Marks:");
        var sorted = students.OrderByDescending(s => s.Marks);
        foreach (var s in sorted)
            s.Display();

        // Top 3 scorers
        Console.WriteLine("\nTop 3 Scorers:");
        var top3 = students.OrderByDescending(s => s.Marks).Take(3);
        foreach (var s in top3)
            s.Display();
    }
}