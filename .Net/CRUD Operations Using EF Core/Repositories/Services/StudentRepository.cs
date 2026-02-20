using Microsoft.EntityFrameworkCore;
using StudentCrudApp.Data;
using StudentCrudApp.Models;
using StudentCrudApp.Repositories.Interfaces;

namespace StudentCrudApp.Repositories.Services
{
    public class StudentRepository : IStudentRepository
    {
        private readonly ApplicationDbContext _context;

        public StudentRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Student>> GetAllAsync()
        {
            return await _context.Students
                .OrderBy(s => s.Name)
                .ToListAsync();
        }

        public async Task<Student> GetByIdAsync(int id)
        {
            return await _context.Students.FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task AddAsync(Student student)
        {
            await _context.Students.AddAsync(student);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateAsync(Student student)
        {
            _context.Students.Update(student);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var student = await GetByIdAsync(id);
            if (student != null)
            {
                _context.Students.Remove(student);
                await _context.SaveChangesAsync();
            }
        }
    }
}