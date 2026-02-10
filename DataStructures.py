#! 1 Create a tuple with 5 numbers

# t = (10, 20, 30, 40, 50)
# print(t)


#! 2 Access the third element in a tuple

# t = (10, 20, 30, 40, 50)
# print(t[2])


#! 3 Unpack a tuple into separate variables

# t = (1, 2, 3)
# a, b, c = t
# print(a, b, c)


#! 4 Create a set of 5 fruits

# fruits = {"apple", "banana", "mango", "orange", "grapes"}
# print(fruits)


#! 5 Add a new fruit to the set

# fruits = {"apple", "banana", "mango"}
# fruits.add("orange")
# print(fruits)


#! 6 Remove an element from a set

# fruits = {"apple", "banana", "mango"}
# fruits.remove("banana")
# print(fruits)


#! 7 Find union of two sets

set1 = {1, 2, 3}
set2 = {3, 4, 5}
print(set1 | set2)


#! 8 Find intersection of two sets

# set1 = {1, 2, 3}
# set2 = {2, 3, 4}
# print(set1 & set2)


#! 9 Check if one set is subset of another

# set1 = {1, 2}
# set2 = {1, 2, 3, 4}
# print(set1.issubset(set2))


#! 10 Convert a list with duplicate values into a set to remove duplicates

# numbers = [1, 2, 2, 3, 4, 4, 5]
# unique_numbers = set(numbers)
# print(unique_numbers)


#! 11 Create a dictionary storing student names and marks

# students = {"Aryan": 85, "Rahul": 90, "Neha": 78}
# print(students)


#! 12 Add a new key-value pair to an existing dictionary

# students = {"Aryan": 85, "Rahul": 90}
# students["Neha"] = 88
# print(students)


#! 13 Delete a key-value pair from a dictionary

# students = {"Aryan": 85, "Rahul": 90}
# del students["Rahul"]
# print(students)


#! 14 Merge two dictionaries into one

# d1 = {"a": 1, "b": 2}
# d2 = {"c": 3, "d": 4}
# merged = d1 | d2
# print(merged)


#! 15 Check if a key exists in a dictionary

# students = {"Aryan": 85, "Rahul": 90}
# print("Aryan" in students)


#! 16 Count word frequency in a given string using a dictionary

# text = "python is easy and python is powerful"
# words = text.split()
# freq = {}

# for word in words:
#     freq[word] = freq.get(word, 0) + 1

# print(freq)


#! 17 Find the key with the maximum value in a dictionary

# marks = {"Aryan": 85, "Rahul": 92, "Neha": 88}
# print(max(marks, key=marks.get))


#! 18 Reverse keys and values in a dictionary

# d = {"a": 1, "b": 2, "c": 3}
# reversed_dict = {v: k for k, v in d.items()}
# print(reversed_dict)


#! 19 Update the value for a specific key

# students = {"Aryan": 85, "Rahul": 90}
# students["Aryan"] = 95
# print(students)


#! 20 Convert a list of tuples into a dictionary

# data = [("a", 1), ("b", 2), ("c", 3)]
# result = dict(data)
# print(result)
