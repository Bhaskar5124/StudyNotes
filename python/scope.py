# --- THE COMPLETE SCOPE AND MODULES GUIDE ---

# ==========================================
# PART 1: MODULES (Importing Code)
# ==========================================

# Method A: Import the whole module
import math 

# Method B: Import a specific part (cleaner to use)
from datetime import datetime

# Method C: Import with an Alias (nickname)
import random as rd

print(f"Pi from math: {math.pi}")
print(f"Current Year: {datetime.now().year}")
print(f"Random Number: {rd.randint(1, 10)}")


# ==========================================
# PART 2: SCOPE (Global vs. Local)
# ==========================================

# GLOBAL SCOPE: Defined outside any function. 
# Visible everywhere in this file.
player_name = "Pro_Gamer"

def play_game():
    # LOCAL SCOPE: Defined inside a function.
    # It ONLY exists while the function is running.
    score = 100 
    print(f"Inside function: {player_name} has score {score}")

play_game()

# This would cause an ERROR: print(score) 
# Because 'score' is local to the function and doesn't exist out here.


# ==========================================
# PART 3: THE 'global' KEYWORD
# ==========================================

gold = 50

def find_treasure():
    # To change a global variable inside a function, 
    # you must explicitly tell Python you mean the global one.
    global gold 
    gold += 100 

find_treasure()
print(f"Total Gold: {gold}") # Output: 150


# ==========================================
# PART 4: CUSTOM MODULES (Conceptual)
# ==========================================
"""
If you have another file named 'my_tools.py' in the same folder:

# my_tools.py
def say_hi():
    print("Hi from the other file!")

# index.py
import my_tools
my_tools.say_hi()
"""



# 1. Visualizing Scope: The "Glass House" Rule
# A helpful way to teach scope is the Glass House Analogy:

# Looking Out: People inside a house (a function) can look out the window and see the world (Global variables).

# Looking In: People standing outside (Global scope) cannot see into the house or know what’s inside (Local variables).

# 2. When to use global?
# Pro-Tip: Use the global keyword sparingly! If a function changes global variables too often, 
# the code becomes hard to debug because you don't know who changed the data. 
# It is usually better to return a value and update the variable outside the function.

# 3. Importing Best Practices

# import math: You must type math.sqrt(). This keeps your code organized so you know where sqrt came from.

# from math import sqrt: You can just type sqrt(). Fast, but if you have 20 imports, it gets messy.

# import pandas as pd: Standard for big libraries; it saves a lot of typing!