using System.ComponentModel.DataAnnotations;

namespace StudentDbApp.Models;

public class Student
{
    public int Id { get; set; }

    [Required]
    public string Name { get; set; } = "";

    [Required]
    public string Department { get; set; } = "";

    [Range(1,4)]
    public int Year { get; set; }

    [Range(0,100)]
    public int Marks { get; set; }
}