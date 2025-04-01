import random

def add_numbers(a, b):
    return a + b  # Correct function

# Syntax Error: Incorrect indentation and missing closing parenthesis
if True:
print("Hello, world!")

# Runtime Error: Division by zero with user input
num = nt(input("Enter a number: "))
result = 100 / (num - num)

# Logical Error: Incorrect calculation of factorial (infinite recursion for negative numbers)
def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n - 1)  # Should check for n < 0

# Name Error: Using an undefined variable
print(undeclared_var)

# Type Error: Mixing incompatible types in a list operation
mixed_list = [1, 2, "three"]
print(sum(mixed_list))

# Index Error: Incorrect random index selection
numbers = [1, 2, 3]
print(numbers[random.randint(0, 5)])

# KeyError: Accessing a missing key in a dictionary
data = {"name": "Alice", "age": 25}
print(data["height"])

# AttributeError: Calling a method that doesn't exist
num = 42
num.append(5)

# Fix the errors to make the code run successfully!
