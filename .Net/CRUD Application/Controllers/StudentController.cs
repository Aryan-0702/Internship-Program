using Microsoft.AspNetCore.Mvc;
using StudentCrudApp.Models;
using StudentCrudApp.Data;

namespace StudentCrudApp.Controllers;

public class StudentController : Controller
{
    // READ ALL
    public IActionResult Index()
    {
        return View(StudentRepository.Students);
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
        if (ModelState.IsValid)
        {
            student.Id = StudentRepository.Students.Count + 1;
            StudentRepository.Students.Add(student);
            return RedirectToAction("Index");
        }
        return View(student);
    }

    // EDIT FORM
    public IActionResult Edit(int id)
    {
        var student = StudentRepository.Students.FirstOrDefault(s => s.Id == id);
        return View(student);
    }

    // EDIT POST
    [HttpPost]
    public IActionResult Edit(Student student)
    {
        if (!ModelState.IsValid)
            return View(student);

        var existing = StudentRepository.Students.First(s => s.Id == student.Id);

        existing.Name = student.Name;
        existing.Department = student.Department;
        existing.Year = student.Year;
        existing.Marks = student.Marks;

        return RedirectToAction("Index");
    }

    // DELETE
    public IActionResult Delete(int id)
    {
        var student = StudentRepository.Students.First(s => s.Id == id);
        StudentRepository.Students.Remove(student);
        return RedirectToAction("Index");
    }

    // DETAILS
    public IActionResult Details(int id)
    {
        var student = StudentRepository.Students.First(s => s.Id == id);
        return View(student);
    }
}