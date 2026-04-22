# --- THE COMPLETE SETS GUIDE ---

# Initializing two sets for comparison
group_a = {"Apple", "Banana", "Cherry"}
group_b = {"Cherry", "Dragonfruit", "Elderberry"}

# ---------------------------------------------------------
# 1. ADDING & REMOVING
# ---------------------------------------------------------

# .add() - Adds a single element
group_a.add("Fig")

# .update() - Adds multiple elements (can take a list or another set)
group_a.update(["Grape", "Honeydew"])

# .remove() - Removes an element. CRASHES if not found.
group_a.remove("Apple")

# .discard() - Removes an element. DOES NOT crash if not found. (The "Safer" way)
group_a.discard("Zucchini") 

# .pop() - Removes a random element (Sets are unordered!)
random_item = group_b.pop()

# .clear() - Empties the set
# group_b.clear()


# ---------------------------------------------------------
# 2. MATHEMATICAL OPERATIONS (The "Power" of Sets)
# ---------------------------------------------------------

set1 = {1, 2, 3, 4}
set2 = {3, 4, 5, 6}

# .union() - Everything from both sets
print(f"Union: {set1.union(set2)}") # {1, 2, 3, 4, 5, 6}

# .intersection() - Only items present in BOTH
print(f"Intersection: {set1.intersection(set2)}") # {3, 4}

# .difference() - Items in set1 but NOT in set2
print(f"Difference: {set1.difference(set2)}") # {1, 2}

# .symmetric_difference() - Everything EXCEPT items in both
print(f"Symmetric Diff: {set1.symmetric_difference(set2)}") # {1, 2, 5, 6}


# ---------------------------------------------------------
# 3. SET RELATIONSHIPS (Boolean / True-False)
# ---------------------------------------------------------

small_set = {1, 2}
big_set = {1, 2, 3, 4}

# .issubset() - Is every item of A inside B?
print(f"Is subset? {small_set.issubset(big_set)}") # True

# .issuperset() - Does B contain everything in A?
print(f"Is superset? {big_set.issuperset(small_set)}") # True

# .isdisjoint() - Do they have NO items in common?
print(f"Are disjoint? {small_set.isdisjoint({9, 10})}") # True


# ---------------------------------------------------------
# 4. UTILITY
# ---------------------------------------------------------

# .copy() - Creates a shallow copy
new_set = small_set.copy()