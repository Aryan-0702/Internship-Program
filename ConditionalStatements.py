#! 1 Check if a person is eligible to vote (age ≥ 18)

# age = int(input("Enter age: "))

# if age >= 18:
#     print("Eligible to vote")
# else:
#     print("Not eligible to vote")


#! 2 Grade calculator based on marks: 90+ = A, 80+ = B, else C

# marks = int(input("Enter marks: "))

# if marks >= 90:
#     print("Grade A")
# elif marks >= 80:
#     print("Grade B")
# else:
#     print("Grade C")


#! 3 Simulate a traffic light: Red = Stop, Yellow = Wait, Green = Go

# color = input("Enter traffic light color: ").lower()

# if color == "red":
#     print("Stop")
# elif color == "yellow":
#     print("Wait")
# elif color == "green":
#     print("Go")
# else:
#     print("Invalid signal")


#! 4 ATM withdrawal check: sufficient balance or not

# balance = 5000
# amount = int(input("Enter withdrawal amount: "))

# if amount <= balance:
#     print("Withdrawal successful")
# else:
#     print("Insufficient balance")


#! 5 Check if a number is positive, negative, or zero

# num = int(input("Enter a number: "))

# if num > 0:
#     print("Positive")
# elif num < 0:
#     print("Negative")
# else:
#     print("Zero")


#! 6 Check if a number lies within a given range (10 to 50)

# num = int(input("Enter a number: "))

# if 10 <= num <= 50:
#     print("Number lies within the range")
# else:
#     print("Number is outside the range")


#! 7 Username & password verification

# username = input("Enter username: ")
# password = input("Enter password: ")

# if username == "admin" and password == "1234":
#     print("Login successful")
# else:
#     print("Invalid username or password")


#! 8 Electricity bill calculator based on units consumed
# First 100 units = ₹5/unit
# Above 100 units = ₹10/unit

# units = int(input("Enter units consumed: "))

# if units <= 100:
#     bill = units * 5
# else:
#     bill = (100 * 5) + (units - 100) * 10

# print("Electricity Bill:", bill)


#! 9 Simple calculator (add, subtract, multiply, divide)

# a = float(input("Enter first number: "))
# b = float(input("Enter second number: "))
# op = input("Enter operator (+, -, *, /): ")

# if op == "+":
#     print(a + b)
# elif op == "-":
#     print(a - b)
# elif op == "*":
#     print(a * b)
# elif op == "/":
#     if b != 0:
#         print(a / b)
#     else:
#         print("Division by zero not allowed")
# else:
#     print("Invalid operator")


#! 10 Check type of triangle (equilateral, isosceles, scalene)

# a = int(input("Enter side 1: "))
# b = int(input("Enter side 2: "))
# c = int(input("Enter side 3: "))

# if a == b == c:
#     print("Equilateral Triangle")
# elif a == b or b == c or a == c:
#     print("Isosceles Triangle")
# else:
#     print("Scalene Triangle")