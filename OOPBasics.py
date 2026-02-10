#! 1 Create a Car class with attributes like brand, model, and speed, and methods to accelerate/brake

# class Car:
#     def __init__(self, brand, model, speed=0):
#         self.brand = brand
#         self.model = model
#         self.speed = speed
#
#     def accelerate(self):
#         self.speed += 10
#         print("Speed after accelerating:", self.speed)
#
#     def brake(self):
#         self.speed -= 10
#         print("Speed after braking:", self.speed)
#
# car = Car("Toyota", "Fortuner")
# car.accelerate()
# car.brake()


#! 2 Create a BankAccount class with deposit and withdraw methods

# class BankAccount:
#     def __init__(self, balance=0):
#         self.balance = balance
#
#     def deposit(self, amount):
#         self.balance += amount
#         print("Balance after deposit:", self.balance)
#
#     def withdraw(self, amount):
#         if amount <= self.balance:
#             self.balance -= amount
#             print("Balance after withdrawal:", self.balance)
#         else:
#             print("Insufficient balance")
#
# acc = BankAccount(5000)
# acc.deposit(1000)
# acc.withdraw(2000)


#! 3 Create a Student class with a method to calculate average marks

# class Student:
#     def __init__(self, marks):
#         self.marks = marks
#
#     def average(self):
#         return sum(self.marks) / len(self.marks)
#
# s = Student([80, 85, 90])
# print("Average marks:", s.average())


#! 4 Create a Rectangle class with methods to find area and perimeter

# class Rectangle:
#     def __init__(self, length, width):
#         self.length = length
#         self.width = width
#
#     def area(self):
#         return self.length * self.width
#
#     def perimeter(self):
#         return 2 * (self.length + self.width)
#
# r = Rectangle(5, 4)
# print("Area:", r.area())
# print("Perimeter:", r.perimeter())


#! 5 Create an Employee class that displays salary details

# class Employee:
#     def __init__(self, name, salary):
#         self.name = name
#         self.salary = salary
#
#     def display(self):
#         print("Name:", self.name)
#         print("Salary:", self.salary)
#
# e = Employee("Aryan", 50000)
# e.display()


#! 6 Create a Book class to store title, author, and price, and display details

# class Book:
#     def __init__(self, title, author, price):
#         self.title = title
#         self.author = author
#         self.price = price
#
#     def display(self):
#         print(self.title, self.author, self.price)
#
# b = Book("Python", "Guido", 450)
# b.display()


#! 7 Create a Circle class to find area and circumference

# class Circle:
#     def __init__(self, radius):
#         self.radius = radius
#
#     def area(self):
#         return 3.14 * self.radius * self.radius
#
#     def circumference(self):
#         return 2 * 3.14 * self.radius
#
# c = Circle(7)
# print("Area:", c.area())
# print("Circumference:", c.circumference())


#! 8 Create a Laptop class with a method to apply discounts on price

# class Laptop:
#     def __init__(self, brand, price):
#         self.brand = brand
#         self.price = price
#
#     def apply_discount(self, percent):
#         self.price -= self.price * percent / 100
#         print("Price after discount:", self.price)
#
# l = Laptop("Lenovo", 60000)
# l.apply_discount(10)


#! 9 Create a Flight class with seat booking functionality

# class Flight:
#     def __init__(self, seats):
#         self.seats = seats
#
#     def book_seat(self):
#         if self.seats > 0:
#             self.seats -= 1
#             print("Seat booked. Remaining seats:", self.seats)
#         else:
#             print("No seats available")
#
# f = Flight(3)
# f.book_seat()
# f.book_seat()


#! 10 Create a Shop class with a method to add and list products

# class Shop:
#     def __init__(self):
#         self.products = []
#
#     def add_product(self, product):
#         self.products.append(product)
#
#     def list_products(self):
#         print("Products:", self.products)
#
# shop = Shop()
# shop.add_product("Laptop")
# shop.add_product("Mobile")
# shop.list_products()