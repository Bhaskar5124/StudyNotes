# --- THE COMPLETE DICTIONARY GUIDE ---

# Initializing a dictionary
student = {
    "name": "Alice",
    "age": 20,
    "course": "Python",
    "grade": "A"
}

# ---------------------------------------------------------
# 1. ACCESSING DATA
# ---------------------------------------------------------

# .get() - Safely gets a value. If the key doesn't exist, it returns None (instead of crashing!)
print(f"Name: {student.get('name')}")
print(f"Phone: {student.get('phone', 'Not Found')}") # Returns 'Not Found'

# .keys() - Returns a list of all keys
print(f"Keys: {list(student.keys())}")

# .values() - Returns a list of all values
print(f"Values: {list(student.values())}")

# .items() - Returns a list of Key-Value tuples (Best for loops!)
print(f"Items: {list(student.items())}")


# ---------------------------------------------------------
# 2. ADDING & UPDATING
# ---------------------------------------------------------

# .update() - Updates multiple items or adds new ones
student.update({"age": 21, "email": "alice@example.com"})

# .setdefault() - Returns value of key; if key doesn't exist, inserts key with a value
status = student.setdefault("status", "Active")


# ---------------------------------------------------------
# 3. REMOVING DATA
# ---------------------------------------------------------

# .pop() - Removes a specific key and returns its value
removed_course = student.pop("course")
print(f"Removed: {removed_course}")

# .popitem() - Removes and returns the LAST inserted key-value pair
last_item = student.popitem()

# .clear() - Empties the entire dictionary
# student.clear() 


# ---------------------------------------------------------
# 4. UTILITY & COPYING
# ---------------------------------------------------------

# .copy() - Creates a shallow copy (so changing the copy doesn't break the original)
student_backup = student.copy()

# .fromkeys() - Creates a new dictionary with specified keys and one value
new_dict = dict.fromkeys(['math', 'science', 'history'], 0)