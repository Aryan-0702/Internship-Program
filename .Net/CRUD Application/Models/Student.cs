using System.ComponentModel.DataAnnotations;

namespace StudentCrudApp.Models;

public class Student
{
    public int Id { get; set; }

    [Required(ErrorMessage = "Name is required")]
    [StringLength(50)]
    public string Name { get; set; } = string.Empty;

    [Required]
    public string Department { get; set; } = string.Empty;

    [Range(1, 4)]
    public int Year { get; set; }

    [Range(0,100)]
    public int Marks { get; set; }
}