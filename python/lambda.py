# --- THE PYTHONIC SHORTHAND GUIDE ---

# ==========================================
# PART 1: LIST COMPREHENSIONS
# Syntax: [expression for item in iterable if condition]
# ==========================================

# Example A: The Basic Transformation
# Standard Way:
numbers = [1, 2, 3, 4, 5]
squares = []
for n in numbers:
    squares.append(n * n)

# Shorthand Way:
squares_short = [n * n for n in numbers]
print(f"Squares: {squares_short}")


# Example B: Filtering with 'if'
# Task: Only keep even numbers
# Standard Way:
evens = []
for n in numbers:
    if n % 2 == 0:
        evens.append(n)

# Shorthand Way:
evens_short = [n for n in numbers if n % 2 == 0]
print(f"Evens: {evens_short}")


# Example C: If-Else in Comprehension
# Task: Label numbers as 'Even' or 'Odd'
labels = ["Even" if n % 2 == 0 else "Odd" for n in numbers]
print(f"Labels: {labels}")


# ==========================================
# PART 2: LAMBDA FUNCTIONS
# Syntax: lambda arguments: expression
# These are "anonymous" functions (they have no name).
# ==========================================

# Example A: Basic Lambda
# Regular function:
def add(x, y):
    return x + y

# Lambda equivalent:
add_lambda = lambda x, y: x + y
print(f"Lambda Sum: {add_lambda(10, 5)}")


# Example B: Using Lambda with Sort
# This is the most common real-world use for Lambdas.
points = [(1, 2), (4, 1), (5, -1), (2, 10)]

# Task: Sort the list based on the SECOND number in each tuple
points.sort(key=lambda point: point[1])
print(f"Sorted by second value: {points}")


# Example C: Lambda with Map
# Map applies a function to every item in a list.
nums = [1, 2, 3, 4]
doubled = list(map(lambda x: x * 2, nums))
print(f"Doubled via Map: {doubled}")




# 1. List Comprehensions
# The biggest hurdle for students is the "reading order." In a normal for loop, you read top-to-bottom. In a comprehension, the action (what you want to do) comes first, and the loop (the source of data) comes second.

# Questions: "What do you want to do to the item? Put that Questions
# Questions: "Where are the items coming from? Put that iQuestions
# Questions: "Do you want to filter any out? Put the 'if' at the end."

# 2. When to use Lambdas
# A common question is: "Why use a Lambda if I can just write a normal function?"
# The answer is convenience. Lambdas are "throwaway" functions. If you only need a specific piece of logic for one single line of code (like sorting a complex list), it’s cleaner to use a Lambda than to define a full def function that you’ll never use again.