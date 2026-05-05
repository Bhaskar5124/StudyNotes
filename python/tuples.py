# --- THE COMPLETE TUPLE GUIDE ---

# 1. Defining a Tuple
# Tuples are defined with parentheses (). They are "Immutable" (unchangeable).
my_tuple = (10, 20, 30, 20, 40, 20, 50)

# ---------------------------------------------------------
# THE "GOLDEN RULE": IMMUTABILITY
# ---------------------------------------------------------
# Unlike lists, you cannot change, add, or remove items once defined.
# my_tuple[0] = 100  --> This would throw a TypeError.

# ---------------------------------------------------------
# THE "SINGLE ITEM" TRAP
# ---------------------------------------------------------
# To create a tuple with one item, you MUST include a trailing comma.
not_a_tuple = (5)     # This is just an integer
is_a_tuple = (5,)      # This is a tuple
print(f"Type with comma: {type(is_a_tuple)}") # <class 'tuple'>

# ---------------------------------------------------------
# OFFICIAL TUPLE METHODS (Only 2 exist!)
# ---------------------------------------------------------

# Method 1: .count()
# Returns the number of times a specified value occurs.
occurences = my_tuple.count(20)
print(f"The number 20 appears {occurences} times.") # Output: 3

# Method 2: .index()
# Returns the FIRST position where the value is found.
position = my_tuple.index(30)
print(f"The number 30 is at index: {position}") # Output: 2


# ---------------------------------------------------------
# COMMON BUILT-IN FUNCTIONS
# ---------------------------------------------------------

# len() - Total number of items
print(f"Total items: {len(my_tuple)}")

# min() and max() - Smallest and largest values
print(f"Smallest: {min(my_tuple)}, Largest: {max(my_tuple)}")

# sum() - Total of all numbers
print(f"Sum: {sum(my_tuple)}")

# sorted() - Returns a NEW sorted LIST (Original tuple stays same)
sorted_version = sorted(my_tuple)
print(f"Sorted list: {sorted_version}")


# ---------------------------------------------------------
# ADVANCED UNPACKING
# ---------------------------------------------------------

# Basic Unpacking
point = (4, 9)
x, y = point

# Extended Unpacking (Using the asterisk *)
# This captures multiple items into a list.
numbers = (1, 2, 3, 4, 5, 6)
first, *middle, last = numbers

print(f"First: {first}")   # 1
print(f"Middle: {middle}") # [2, 3, 4, 5] (Captured as a list)
print(f"Last: {last}")     # 6


# ---------------------------------------------------------
# WHY USE A TUPLE? (Developer Notes)
# ---------------------------------------------------------
# 1. Performance: Tuples are faster and use less memory than lists.
# 2. Safety: Use them for data that should never change (Coordinates, Configs).
# 3. Dictionaries: Tuples can be used as keys in a dictionary; lists cannot.