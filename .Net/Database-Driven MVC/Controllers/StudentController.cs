using Microsoft.AspNetCore.Mvc;
using StudentDbApp.Data;
using StudentDbApp.Models;

namespace StudentDbApp.Controllers;

public class StudentController : Controller
{
    private readonly AppDbContext _context;

    public StudentController(AppDbContext context)
    {
        _context = context;
    }

    // READ (LINQ Query)
    public IActionResult Index()
    {
        var students = _context.Students
                               .OrderByDescending(s => s.Marks)
                               .ToList();

        return View(students);
    }

    // CREATE FORM
    public IActionResult Create()
    {
        return View();
    }

    // CREATE POST
    [HttpPost]
    public IActionResult Create(Student student)
    {
        if (!ModelState.IsValid)
            return View(student);

        _context.Students.Add(student);
        _context.SaveChanges();

        return RedirectToAction("Index");
    }
}