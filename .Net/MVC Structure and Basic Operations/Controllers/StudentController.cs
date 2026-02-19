using Microsoft.AspNetCore.Mvc;
using MvcDemoApp.Models;

namespace MvcDemoApp.Controllers;

public class StudentController : Controller
{
    public IActionResult Index()
    {
        var students = new List<Student>
        {
            new Student{Id=1, Name="Aryan", Department="CSE", Marks=85},
            new Student{Id=2, Name="Neha", Department="IT", Marks=72},
            new Student{Id=3, Name="Rahul", Department="CSE", Marks=91},
            new Student{Id=4, Name="Priya", Department="ECE", Marks=67}
        };

        return View(students);
    }

    public IActionResult Topper()
    {
        var student = new Student
        {
            Id = 1,
            Name = "Rahul",
            Department = "CSE",
            Marks = 91
        };

        return View(student);
    }
}