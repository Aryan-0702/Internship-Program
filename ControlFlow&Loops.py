#! Check if a person is eligible to vote (age ≥ 18) 

# age = int(input("Enter your age: "))

# if age>=18:
#     print("You are eligible to vote")
# else:
#     print("You are not eligible to vote")

#! Grade calculator based on marks 90+ → A, 80+ → B, Else → C 

# marks = int(input("Enter Marks: "))

# if marks>90:
#     print("Your grade is A")
# elif marks>80:
#     print("Your grade is B")
# else:
#     print("Your grade is C")

#! Simulate a traffic light Red → Stop, Yellow → Wait, Green → Go

# light = str(input(("Enter traffic light color: ").lower()))

# if light == "red":
#     print("STOP")

# elif light == "green":
#     print("GO")

# elif light == "yellow":
#     print("WAIT")

# else:
#     print("Invalid color")

#! ATM withdrawal check (sufficient balance or not) 

# balance = 5000

# withdraw = int(input("Enter amount to withdrawal: "))

# if withdraw>balance:
#     print("Insufficent balance")

# else:
#     print("You can withdraw your amount")

#! Check if a number is positive, negative, or zero 

# a = float(input("Enter number: "))

# if a>0:
#     print("Entered number is positive")
# elif a<0:
#     print("Enetered number is negative")
# else:
#     print("Number is 0")

#! Check if a number lies within a given range

# number = int(input("Enter your number: "))

# if number>0 and number<51:
#     print("Number lies in given range")

# else:
#     print("Number does lies in given number")

#! Username & password verification

# username = input("Enter username: ") 
# password = input("Enter password: ")

# if username == "admin" and password == "123":
#     print("you have login sucessfully")
# else: 
#     print("Invalid username or password")

#! Electricity bill calculator based on units consumed
# First 100 units → ₹5/unit
# Above 100 units → ₹10/unit

# units = float(input("Enter number of units consumed: "))

# if units>100:
#     print("Your Electricity bill is ", (100*5) + (units-100)*10)
# else:
#     print("Your Electricity bill is ", units*5)

#! Simple calculator (add, subtract, multiply, divide) 

# num1 = float(input("Enter number: "))
# num2 = float(input("Enter number: "))

# op = input("Enter operation (+, -, *, /): ")

# if op == "+":
#     print(num1 + num2)
# elif op == "-":
#     print("Result:", num1 - num2)
# elif op == "*":
#     print("Result:", num1 * num2)
# elif op == "/":
#     if num2 != 0:
#         print("Result:", num1 / num2)
#     else:
#         print("Division by zero not allowed")
# else:
#     print("Invalid operator")

#! Check type of triangle All sides equal → Equilateral, Two sides equal → Isosceles, All sides different → Scalene

# `a = int(input("Enter side 1: "))
# b = int(input("Enter side 2: "))
# c = int(input("Enter side 3: "))

# if a == b and b == c:
#     print("Equilateral Triangle")
# elif a == b or b == c or a == c:
#     print("Isosceles Triangle")
# else:
#     print("Scalene Triangle")
