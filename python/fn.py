# --- THE COMPLETE FUNCTIONS GUIDE ---

# 1. Basic Function with Return Value
# A function is a "machine" that takes an input and gives an output.
def add_numbers(a, b):
    """Returns the sum of two numbers."""
    return a + b

result = add_numbers(5, 10)
print(f"Basic Add: {result}")


# 2. Default Arguments
# You can set a fallback value if the user doesn't provide one.
def greet(name, message="Welcome to Python"):
    return f"Hello {name}, {message}!"

print(greet("Alice"))             # Uses default
print(greet("Bob", "Good morning")) # Overrides default


# 3. *args (Arbitrary Positional Arguments)
# Use *args when you don't know how many items will be passed.
# It treats the inputs as a TUPLE.
def sum_all_numbers(*args):
    total = sum(args)
    return f"Sum of {len(args)} numbers: {total}"

print(sum_all_numbers(1, 2, 3, 4, 5))


# 4. **kwargs (Arbitrary Keyword Arguments)
# Use **kwargs when you want to pass named arguments.
# It treats the inputs as a DICTIONARY.
def build_profile(name, **kwargs):
    profile = {"user": name}
    profile.update(kwargs) # Merges the kwargs dictionary
    return profile

user_data = build_profile("Charlie", age=25, city="New York", role="Developer")
print(f"User Profile: {user_data}")


# 5. Putting it all together
# The order MUST be: Standard args, *args, **kwargs
def master_function(fixed_arg, *args, **kwargs):
    print(f"Fixed: {fixed_arg}")
    print(f"Args (tuple): {args}")
    print(f"Kwargs (dict): {kwargs}")

master_function("Start", 1, 2, 3, color="Blue", speed="Fast")