# --- THE COMPLETE TUPLE GUIDE ---

# 1. Defining a Tuple
# Tuples are defined with parentheses ()
my_tuple = (10, 20, 30, 20, 40, 20, 50)

# ---------------------------------------------------------
# OFFICIAL TUPLE METHODS
# ---------------------------------------------------------

# Method 1: .count()
# Returns the number of times a specified value occurs in a tuple.
occurences = my_tuple.count(20)
print(f"The number 20 appears {occurences} times.") # Output: 3

# Method 2: .index()
# Searches the tuple for a specified value and returns the position of where it was found.
# Note: It only returns the FIRST index found.
position = my_tuple.index(30)
print(f"The number 30 is at index: {position}") # Output: 2


# ---------------------------------------------------------
# COMMON BUILT-IN FUNCTIONS USED WITH TUPLES
# ---------------------------------------------------------

# len() - Get the total number of items
print(f"Total items: {len(my_tuple)}")

# min() and max() - Find the smallest and largest values
print(f"Smallest: {min(my_tuple)}, Largest: {max(my_tuple)}")

# sum() - Add all numbers together
print(f"Sum of all items: {sum(my_tuple)}")

# sorted() - Returns a NEW sorted LIST (the original tuple remains unchanged)
sorted_version = sorted(my_tuple)
print(f"Sorted list from tuple: {sorted_version}")

# ---------------------------------------------------------
# TUPLE UNPACKING (A very important "Tuple-only" skill)
# ---------------------------------------------------------
point = (4, 9)
x, y = point
print(f"Unpacked values: x={x}, y={y}")