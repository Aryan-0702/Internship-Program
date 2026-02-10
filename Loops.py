#! 1 Print numbers from 1 to 10

# for i in range(1, 11):
#     print(i)


#! 2 Display multiplication table for a given number

# num = int(input("Enter a number: "))

# for i in range(1, 11):
#     print(num, "x", i, "=", num * i)


#! 3 Find factorial of a number

# num = int(input("Enter a number: "))

# fact = 1
# for i in range(1, num + 1):
#     fact *= i

# print("Factorial:", fact)


#! 4 Generate the first N Fibonacci numbers

# n = int(input("Enter N: "))

# a, b = 0, 1
# for i in range(n):
#     print(a, end=" ")
#     a, b = b, a + b


#! 5 Check if a number is prime

# num = int(input("Enter a number: "))

# if num <= 1:
#     print("Not Prime")
# else:
#     is_prime = True
#     for i in range(2, num):
#         if num % i == 0:
#             is_prime = False
#             break
#     if is_prime:
#         print("Prime")
#     else:
#         print("Not Prime")


#! 6 Reverse a number (e.g., 123 → 321)

# num = int(input("Enter number: "))

# rev = 0
# while num > 0:
#     rev = rev * 10 + num % 10
#     num //= 10

# print("Reversed:", rev)


#! 7 Count digits in a number

# num = int(input("Enter number: "))

# count = 0
# while num > 0:
#     count += 1
#     num //= 10

# print("Digits:", count)


#! 8 Find sum of even numbers between 1–100

# sum_even = 0
# for i in range(1, 101):
#     if i % 2 == 0:
#         sum_even += i

# print("Sum of even numbers:", sum_even)


#! 9 Print a pyramid pattern

# rows = int(input("Enter number of rows: "))

# for i in range(1, rows + 1):
#     print("*" * i)


#! 10 Find all divisors of a number

# num = int(input("Enter a number: "))

# for i in range(1, num + 1):
#     if num % i == 0:
#         print(i)