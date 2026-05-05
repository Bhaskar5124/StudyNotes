l = [1,2,3,1,4,5,6,7,8,9,11]

# print(l[2])
#mutable : we can update the list values

# l[2] = 30
# print(l)

#len(l) returns length of the list
# print(len(l))

# .append()	Adds an item to the end.	my_list.append("new_item")
# l.append(12)
# print(l)

# .extend()	Joins two lists together.	list1.extend(list2)
list1 = [1,2,3,4]
list2 = [5,6,7,8]
# list1.extend(list2)
# print(list1)
# print(list2)


print(list1+list2)
# .insert()	Adds an item at a specific index.	my_list.insert(0, "first")

# .pop()	Removes and returns an item.	item = my_list.pop()

# .remove()	Removes the first occurrence of a value.	my_list.remove("old_item")

#clear() Empties the whole list
# l.clear()
# print(l)

#del del list1

# .sort()	Sorts the list in place.	my_list.sort()

#sorted(l) returns a new sorted list without touching your original list

# .count()   counts particular item    
# print(l.count(1))

# index()
# print(l.index(2))

# in
# print(1 in l)

#reverse()
# l.reverse()
# print(l)

#copy()
# a = l
# l.append(5)
# print(a)

# a = l.copy()
# l.append(5)
# print(l, a)

# Slicing [start:stop:step]
# print(l[2:7])
# print(l[2:7:2])

#short way to reverse
# print(l[::-1])

#List comprehension
#old way
# squares = []
# for x in range(10):
#     squares.append(x**2)

# #new way
# squares = [x**2 for x in range(10)]