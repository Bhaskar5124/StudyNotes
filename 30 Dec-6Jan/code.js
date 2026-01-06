// let a = "Helloworld ";

// let b = a.substring(0,4);
// console.log(b); //same as slice method

// let c = a.substring(0);
// console.log(c); //can't handle negative numbers

// let d = a.toUpperCase();
// console.log(d);

// let e = a.toLowerCase();
// console.log(e);

// console.log(a.startsWith("Hworld"));

// console.log(a.endsWith("Hworld"));

// console.log(a.includes("My is"));

// console.log(a.indexOf(" "));

// let f = a.replace("l","t");
// console.log(f);

// let g = a.replaceAll("l","t");
// console.log(g);

// let h = a.repeat(2);
// console.log(h);

//What is Array
//containe which has a list of value over which we can iterate
//stored similar or dissimilar items in js
// 0 based index
// similar items in java

// let a = [1,2,3,"happy new year", true];
// console.log(a);

// //array methods

//array element manipulation
// let a = [1,2,3,4,5]
//push
//adds element into your array(adds in last)
// a.push(6);
// console.log(a);

//pop
//delete element from array(deletes in last)
// a.pop();
// console.log(a);

//unshift
//adds a element inside array in front
// a.unshift(9);
// console.log(a);
//shift
//deletes a element inside array from front
// a.shift();
// console.log(a);

//splice
// let a = ["apple", "banana", "orange", "guava"];

// a.splice(2,1,"cherry");
// console.log(a);

//splice method can delete specifically
//splice method can add element in array specifically

// //The big Three
//map
// const numbers = [1, 2, 3, 4];

// // // Task: Square every number
// // const squared = numbers.map(num => 2 * num);
// let newArray = numbers.map((mul)=>mul*2);
// console.log(numbers);
// console.log(newArray);



//filter
// const prices = [10, 50, 80, 120, 5];

// // Task: Keep only prices over 60
// const expensive = prices.filter((p) => p > 60);

// console.log(expensive); // [80, 120]


//reduce
// const cart = [10, 20, 30];

// // Task: Calculate the total sum
// // acc (accumulator) starts at 0, curr is the current item
// const total = cart.reduce((acc, curr) => acc + curr, 40);
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
// a.sort((apple,banana)=>banana-apple);
// console.log(a);

//ascending small to bigger
//descending larger to smaller

//reverse
// let z = a.reverse();
// console.log(z);
//find
// const users = [
//   { id: 1, name: 'Alice' },
//   { id: 2, name: 'Bob' },
//   { id: 3, name: 'Charlie' }
// ];

// Find the user with id 2
// const singleUser = users.find(u => u.name == "Alice");

// console.log(singleUser); 

// //findIndex
// const fruits = ["apple", "cherry", "grapes"];


// // Find the index of 'cherry'
// const index = fruits.findIndex(fruit => fruit === 'cherry');
// const fruits = "Helloworld";
// console.log(fruits[2]);

// console.log(index);
// //includes
// //every
// //some
// const ages = ['h', 'e', 'l', 'l','o'];

// const allAdults = ages.every(age => age >= 18); //AND
// console.log(allAdults);
// const hasMinor = ages.some(age => age >= 18); //OR
// console.log(hasMinor);

//join
// let agesstr = ages.join("-");
// console.log(typeof(ages));
// //flat 
// const myArr = [[1,2],[3,[2,3],4],[5,6]];

// const newArr = myArr.flat(Infinity);
// console.log(myArr);
// console.log(newArr);