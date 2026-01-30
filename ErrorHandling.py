#! Write a program to handle division by zero error

# try:
#     a = int(input("Enter first number: "))
#     b = int(input("Enter second number: "))
#     result = a / b
#     print("Result:", result)
# except ZeroDivisionError:
#     print("Error: Cannot divide by zero")
 
#! Write a program to handle invalid integer input 

# try:
#     num = int(input("Enter an integer: "))
#     print("You entered:", num)
# except ValueError:
#     print("Error: Invalid integer input")

#! Write a program to open a file and handle “file not found” error

# try:
#     file = open("data.txt", "r")
#     print(file.read())
#     file.close()
# except FileNotFoundError:
#     print("Error: File not found")

#! Write a program to demonstrate multiple exception blocks

try:
    a = int(input("Enter number: "))
    b = int(input("Enter number: "))
    print(a / b)
except ZeroDivisionError:
    print("Error: Division by zero")
except ValueError:
    print("Error: Invalid input")

