# --- THE COMPLETE FILE HANDLING & EXCEPTIONS GUIDE ---

import os

# ==========================================
# PART 1: WRITING AND READING FILES
# ==========================================

# We use 'with' because it automatically CLOSES the file for us.
# 'w' = Write (Overwrites existing content)
# 'a' = Append (Adds to the end of the file)
# 'r' = Read

file_name = "example.txt"

# 1. Writing to a file
with open(file_name, "w") as file:
    file.write("Hello Student!\n")
    file.write("This is a line in your new file.\n")

# 2. Reading from a file
with open(file_name, "r") as file:
    content = file.read()
    print("--- File Content ---")
    print(content)


# ==========================================
# PART 2: EXCEPTION HANDLING (Try/Except)
# ==========================================
# This prevents the program from stopping if an error occurs.

print("\n--- Starting Exception Tests ---")

try:
    # Let's try to do something dangerous (Dividing by zero)
    number = int(input("Enter a number to divide 100 by: "))
    result = 100 / number
    print(f"Result: {result}")

except ValueError:
    # Runs if the user types a string instead of a number
    print("Error: You must enter a valid integer!")

except ZeroDivisionError:
    # Runs if the user types 0
    print("Error: You cannot divide by zero!")

except Exception as e:
    # The 'catch-all' for any other unexpected errors
    print(f"An unexpected error occurred: {e}")

else:
    # Runs ONLY if the 'try' block was successful (no errors)
    print("Calculation successful!")

finally:
    # ALWAYS runs, no matter what happens (great for cleanup)
    print("Cleaning up resources... done.")


# ==========================================
# PART 3: PRACTICAL COMBINATION
# ==========================================
# Using try/except to read a file that might not exist.

try:
    with open("ghost_file.txt", "r") as file:
        print(file.read())
except FileNotFoundError:
    print("Error: The file 'ghost_file.txt' does not exist.")

# Cleanup: Deleting the example file we created
if os.path.exists(file_name):
    os.remove(file_name)




# 1. The "With" Statement
# In the old days, you had to manually open and close files. If your code crashed before the close() line, the file could get corrupted. The with keyword is a Context Manager—it guarantees the file closes the moment the indented block ends.

# 2. The Logic of Try/Except
# Think of try/except like a safety net.

# try: "Run this code, but keep an eye out for trouble."

# except: "If trouble happens, do this instead of crashing."

# else: "Everything went perfectly, so let's celebrate with this extra step."

# finally: "I don't care if it worked or failed; this part must happen" (like turning off the lights before leaving).

# 3. Specific vs. General Exceptions
# Teach your student to be specific. Catching ZeroDivisionError is better than catching a general Exception. It’s like a doctor diagnosing a specific flu rather than just saying "you are sick"—it tells the programmer exactly what went wrong.