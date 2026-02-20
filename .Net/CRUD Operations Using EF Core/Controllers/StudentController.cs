using Microsoft.AspNetCore.Mvc;
using StudentCrudApp.Models;
using StudentCrudApp.Repositories.Interfaces;

namespace StudentCrudApp.Controllers
{
    public class StudentController : Controller
    {
        private readonly IStudentRepository _repo;

        public StudentController(IStudentRepository repo)
        {
            _repo = repo;
        }

        public async Task<IActionResult> Index()
        {
            var students = await _repo.GetAllAsync();
            return View(students);
        }

        public IActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Create(Student student)
        {
            if (ModelState.IsValid)
            {
                await _repo.AddAsync(student);
                return RedirectToAction(nameof(Index));
            }
            return View(student);
        }

        public async Task<IActionResult> Edit(int id)
        {
            var student = await _repo.GetByIdAsync(id);
            return View(student);
        }

        [HttpPost]
        public async Task<IActionResult> Edit(Student student)
        {
            await _repo.UpdateAsync(student);
            return RedirectToAction(nameof(Index));
        }

        public async Task<IActionResult> Delete(int id)
        {
            var student = await _repo.GetByIdAsync(id);
            return View(student);
        }

        [HttpPost, ActionName("Delete")]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            await _repo.DeleteAsync(id);
            return RedirectToAction(nameof(Index));
        }
    }
}