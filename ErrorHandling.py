#! 1 Write a program to handle division by zero error

# try:
#     a = int(input("Enter first number: "))
#     b = int(input("Enter second number: "))
#     print(a / b)
# except ZeroDivisionError:
#     print("Error: Division by zero is not allowed")


#! 2 Write a program to handle invalid integer input

# try:
#     num = int(input("Enter an integer: "))
#     print("You entered:", num)
# except ValueError:
#     print("Error: Invalid integer input")


#! 3 Write a program to open a file and handle the “file not found” error

# try:
#     file = open("data.txt", "r")
#     print(file.read())
#     file.close()
# except FileNotFoundError:
#     print("Error: File not found")


#! 4 Write a program to demonstrate multiple exception blocks

# try:
#     a = int(input("Enter number: "))
#     b = int(input("Enter number: "))
#     print(a / b)
# except ZeroDivisionError:
#     print("Cannot divide by zero")
# except ValueError:
#     print("Invalid input")
# except Exception:
#     print("Some other error occurred")


#! 5 Write a program to use finally for resource cleanup

# try:
#     file = open("sample.txt", "r")
#     print(file.read())
# except FileNotFoundError:
#     print("File not found")
# finally:
#     print("Execution completed")


#! 6 Write a program to create a custom exception for invalid age (<18)

# class InvalidAgeError(Exception):
#     pass
#
# try:
#     age = int(input("Enter age: "))
#     if age < 18:
#         raise InvalidAgeError("Age must be 18 or above")
#     print("Eligible")
# except InvalidAgeError as e:
#     print(e)


#! 7 Write a program to handle IndexError when accessing a list

# my_list = [10, 20, 30]
#
# try:
#     print(my_list[5])
# except IndexError:
#     print("Error: Index out of range")


#! 8 Write a program that takes two numbers and handles all possible errors

# try:
#     a = int(input("Enter first number: "))
#     b = int(input("Enter second number: "))
#     print(a / b)
# except ValueError:
#     print("Invalid input")
# except ZeroDivisionError:
#     print("Cannot divide by zero")
# except Exception:
#     print("Unexpected error occurred")


#! 9 Write a program to log errors to a file instead of printing them

# import logging
#
# logging.basicConfig(filename="error.log", level=logging.ERROR)
#
# try:
#     a = int(input("Enter number: "))
#     b = int(input("Enter number: "))
#     print(a / b)
# except Exception as e:
#     logging.error(e)


#! 10 Write a program that validates an email format and raises an exception for invalid ones

# class InvalidEmailError(Exception):
#     pass
#
# try:
#     email = input("Enter email: ")
#     if "@" not in email or "." not in email:
#         raise InvalidEmailError("Invalid email format")
#     print("Valid email")
# except InvalidEmailError as e:
#     print(e)