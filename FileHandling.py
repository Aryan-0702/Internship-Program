#! 1 Write a program to read a file and display its contents

# with open("sample.txt", "r") as file:
#     print(file.read())


#! 2 Write a program to count the number of lines in a file

# with open("sample.txt", "r") as file:
#     lines = file.readlines()
#     print("Number of lines:", len(lines))


#! 3 Write a program to count how many times each word appears in a file

# word_count = {}
# with open("sample.txt", "r") as file:
#     for line in file:
#         words = line.split()
#         for word in words:
#             word = word.lower()
#             word_count[word] = word_count.get(word, 0) + 1
#
# print(word_count)


#! 4 Write a program to write 5 user-entered sentences to a file

# with open("output.txt", "w") as file:
#     for i in range(5):
#         sentence = input("Enter sentence: ")
#         file.write(sentence + "\n")


#! 5 Write a program to append a list of strings to an existing file

# data = ["Python\n", "Java\n", "C++\n"]
#
# with open("output.txt", "a") as file:
#     file.writelines(data)


#! 6 Write a program to read a file and print only lines containing a specific word

# keyword = input("Enter word to search: ")
#
# with open("sample.txt", "r") as file:
#     for line in file:
#         if keyword in line:
#             print(line.strip())


#! 7 Write a program to replace a specific word in a file and save changes

# with open("sample.txt", "r") as file:
#     content = file.read()
#
# content = content.replace("oldword", "newword")
#
# with open("sample.txt", "w") as file:
#     file.write(content)


#! 8 Write a program to merge the contents of two text files into a third file

# with open("file1.txt", "r") as f1, open("file2.txt", "r") as f2:
#     data = f1.read() + "\n" + f2.read()
#
# with open("merged.txt", "w") as f3:
#     f3.write(data)


#! 9 Write a program to read a CSV file and display its content in a formatted way

# import csv
#
# with open("data.csv", "r") as file:
#     reader = csv.reader(file)
#     for row in reader:
#         print(" | ".join(row))


#! 10 Write a program to back up a file by copying its contents into another file

# with open("sample.txt", "r") as original:
#     data = original.read()
#
# with open("backup.txt", "w") as backup:
#     backup.write(data)