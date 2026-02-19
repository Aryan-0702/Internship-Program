using StudentCrudApp.Models;

namespace StudentCrudApp.Data;

public static class StudentRepository
{
    public static List<Student> Students = new List<Student>()
    {
        new Student{ Id=1, Name="Aryan", Department="CSE", Year=3, Marks=85 },
        new Student{ Id=2, Name="Rahul", Department="IT", Year=2, Marks=72 }
    };
}   