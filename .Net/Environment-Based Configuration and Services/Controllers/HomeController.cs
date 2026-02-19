using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Environment_Based_Configuration_and_Services.Models;
using Environment_Based_Configuration_and_Services.Services;

namespace Environment_Based_Configuration_and_Services.Controllers;

public class HomeController : Controller
{
    private readonly IConfiguration _config;
    private readonly IGreetingService _service;
    private readonly ILogger<HomeController> _logger;

    public HomeController(
        IConfiguration config,
        IGreetingService service,
        ILogger<HomeController> logger)
    {
        _config = config;
        _service = service;
        _logger = logger;
    }

    public IActionResult Index()
    {
        var appName = _config["AppSettings:AppName"];
        var msg = _service.Greet("Aryan");

        _logger.LogInformation("Home page visited");

        ViewBag.AppName = appName;
        ViewBag.Message = msg;

        return View();
    }

    public IActionResult Privacy()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel
        {
            RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier
        });
    }
}