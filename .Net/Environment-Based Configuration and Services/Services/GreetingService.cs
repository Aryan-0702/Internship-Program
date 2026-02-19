namespace Environment_Based_Configuration_and_Services.Services;

public interface IGreetingService
{
    string Greet(string name);
}

public class GreetingService : IGreetingService
{
    public string Greet(string name)
    {
        return $"Hello {name}, welcome to ASP.NET Core!";
    }
}