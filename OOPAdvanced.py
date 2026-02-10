#! 1 Create a base class Animal and subclasses Dog and Cat

# class Animal:
#     def speak(self):
#         print("Animal makes a sound")
#
# class Dog(Animal):
#     def speak(self):
#         print("Dog barks")
#
# class Cat(Animal):
#     def speak(self):
#         print("Cat meows")
#
# d = Dog()
# c = Cat()
# d.speak()
# c.speak()


#! 2 Create a class hierarchy for Vehicle → Car → ElectricCar

# class Vehicle:
#     def start(self):
#         print("Vehicle started")
#
# class Car(Vehicle):
#     def drive(self):
#         print("Car is driving")
#
# class ElectricCar(Car):
#     def charge(self):
#         print("Electric car charging")
#
# e = ElectricCar()
# e.start()
# e.drive()
# e.charge()


#! 3 Implement method overriding in a base and derived class

# class Shape:
#     def area(self):
#         print("Area not defined")
#
# class Square(Shape):
#     def area(self):
#         print("Area of square:", 5 * 5)
#
# s = Square()
# s.area()


#! 4 Demonstrate multiple inheritance with two parent classes

# class Father:
#     def skills(self):
#         print("Driving")
#
# class Mother:
#     def skills(self):
#         print("Cooking")
#
# class Child(Father, Mother):
#     pass
#
# c = Child()
# c.skills()


#! 5 Create a polymorphic function that works with different shapes

# class Circle:
#     def area(self):
#         return 3.14 * 5 * 5
#
# class Rectangle:
#     def area(self):
#         return 4 * 6
#
# def calculate_area(shape):
#     print("Area:", shape.area())
#
# calculate_area(Circle())
# calculate_area(Rectangle())


#! 6 Create a Bank system with SavingsAccount and CurrentAccount classes

# class BankAccount:
#     def __init__(self, balance):
#         self.balance = balance
#
# class SavingsAccount(BankAccount):
#     def interest(self):
#         print("Savings interest added")
#
# class CurrentAccount(BankAccount):
#     def overdraft(self):
#         print("Overdraft facility")
#
# s = SavingsAccount(5000)
# c = CurrentAccount(8000)
# s.interest()
# c.overdraft()


#! 7 Create a class with private attributes and getter/setter methods

# class Person:
#     def __init__(self):
#         self.__age = 0
#
#     def set_age(self, age):
#         self.__age = age
#
#     def get_age(self):
#         return self.__age
#
# p = Person()
# p.set_age(25)
# print(p.get_age())


#! 8 Create a Teacher and Student class to show inheritance

# class Teacher:
#     def teach(self):
#         print("Teaching")
#
# class Student(Teacher):
#     def study(self):
#         print("Studying")
#
# s = Student()
# s.teach()
# s.study()


#! 9 Create a MusicPlayer class and subclass Spotify to override play method

# class MusicPlayer:
#     def play(self):
#         print("Playing music")
#
# class Spotify(MusicPlayer):
#     def play(self):
#         print("Playing music on Spotify")
#
# sp = Spotify()
# sp.play()


#! 10 Demonstrate the use of super() in inheritance

# class Parent:
#     def __init__(self):
#         print("Parent constructor")
#
# class Child(Parent):
#     def __init__(self):
#         super().__init__()
#         print("Child constructor")
#
# c = Child()