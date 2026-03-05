//What is Array
//contains which has a list of value over which we can iterate
//stored similar or dissimilar items in js
// 0 based index
// similar items in java

// let a = [1,2,3,"happy new year", true];
// console.log(a);

// //array methods

//array element manipulation
// let a = [1,2,3,4,5];
// // push
//time complexity less
// // adds element into your array(adds in last)
// a.push(6);
// console.log(a);

//pop
//delete element from array(deletes in last)
//time complexity less
// let b = a.pop();
// console.log(a);
// console.log(b);

//unshift
//adds a element inside array in front
//time complexity higher than push
// a.unshift(9);
// console.log(a);
//shift
//deletes a element inside array from front
//time complexity higher than pop
// let b = a.shift();
// console.log(a);
// console.log(b);

//splice
// let a = ["apple", "banana", "orange", "guava"];
// // a.splice(index,number of elements to delete, elements to add at index);
// a.splice(2,2,"cherry");
// console.log(a);

//splice method can delete specifically
//splice method can add element in array specifically


// //The big Three
//map
//gives new array
// const numbers = [1, 2, 3, 4];

// // // // // Task: Square every number
// const squared = numbers.map(zebra => zebra**2);
// // let newArray = numbers.map((mul)=>mul*2);
// console.log(numbers,squared);
// console.log(newArray);



//filter
// const prices = [10, 50, 80, 120, 5];

// // // Task: Keep only prices over 60
// const expensive = prices.filter(p => p > 60);

// console.log(expensive); // [80, 120]


//reduce
// const cart = [10, 20, 30];

// // // Task: Calculate the total sum
// // // acc (accumulator) starts at 0, curr is the current item
// const total = cart.reduce((acc, curr) => acc + curr, 60);
// const total = cart.reduce((acc,curr)=> acc+curr,0);

// console.log(total); // 60


// const numbers = [10, 20, 30, 40];

// // MAP: Double the numbers
// const doubled = numbers.map(n => n * 2); // [20, 40, 60, 80]

// // FILTER: Only numbers over 25
// const filtered = numbers.filter(n => n > 25); // [30, 40]

// // REDUCE: Get the total sum
// const total = numbers.reduce((sum, n) => sum + n, 0); // 100


//sort

// let a = [1,2,3,4,20,21,22,10,11,12];
// console.log(a);
// a.sort();
// a.sort((b,a)=>a-b);
// a.sort((a,b)=>a-b);
// a.sort((apple,banana)=>banana-apple);
// console.log(a);

// In your code, when you run a.sort(), it mutates (changes) the original array a. 
// It doesn't just return a sorted copy; it rearranges the actual memory where a is stored.
// If you ever want to sort without changing your original list, you can use the newer a.toSorted() method instead!
// let b = a.toSorted((a,b)=>a-b);
// console.log(a,b);

// By default, .sort() converts numbers to strings. Without that function, 11 would come before 2 because "1" comes before "2" alphabetically. To fix this, we provide a Compare Function.

// How (a, b) => a - b Works
// The .sort() method walks through your array and picks two values at a time (let's call them a and b) to compare them. It looks at the result of your subtraction to decide their order:

// If the result is negative (less than 0): It means a is smaller than b. It places a before b.

// If the result is positive (greater than 0): It means a is larger than b. It places b before a.

// If the result is 0: They are equal; their order doesn't change.

//ascending small to bigger
//descending larger to smaller

//reverse
// a.reverse();
// console.log(a);
// find
// const users = [
//   { id: 1, name: 'Alice' },
//   { id: 2, name: 'Bob' },
//   { id: 3, name: 'Charlie' },
//   { id:3, name:"Delta"}
// ];

// // // // Find the user with id 2
// const singleUser = users.find(u => u.id == 3);

// console.log(singleUser); 

// //findIndex
// const fruits = ["apple", "cherry", "grapes","cherry"];


// // // // // Find the index of 'cherry'
// const index = fruits.findIndex(fruit => fruit == 'cherry');
// console.log(index);
// console.log(fruits[2]);
// const fruits = "Helloworld";
// console.log(fruits[2]);

// console.log(index);

// //includes

// let a = ["a", "b", "c"];
// console.log(a.includes("d"));


// //every
// //some
// const ages = [19,19,21,24,29,29];

// const allAdults = ages.every(age => age >= 18); //AND
// console.log(allAdults);
// const hasMinor = ages.some(age => age <= 18); //OR
// console.log(hasMinor);

//join
// let ages = ['h','e','l','l','o'];
// let agesstr = ages.join(",");
// console.log(agesstr);


// //flat 
// const myArr = [[1,2],[3,[2,3],4],[5,6]];
// // const z = myArr.flat(2);
// // console.log(z);
// const newArr = myArr.flat(Infinity);
// // // console.log(myArr);
// console.log(newArr); 