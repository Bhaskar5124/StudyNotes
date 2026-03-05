// function Hello(){
//         //task
//         console.log("I am function");
// }

// Hello();
// Hello();
// Hello();
// Hello();

// function sum(a,b){ //a,b are parameter
//     return a+b;
// // console.log(a+b);
// }

// sum(5,6); // z = 11 //5 and 6 are arguements
// sum(5,6);
// let c = 9;
// console.log("c+z",c+z);
// console.log(z);
// sum(9,12); //9 and 12 are argument


// function greeting(name){ //name is parameter
//     console.log(`Hello ${name}`);
// }

// greeting("Afsar"); //"afsar" is argument


//2.Function Expression
// const add = function(a,b){
//     return a+b;
// }

// let z = add(5,3);
// console.log(z);


// const minus = function(c,d){
//     return c-d;
// }

// let x = minus(9,8);
// console.log(x);


// //3.Arrow function
// const multiply = (a,b) => a*b;
// //automatic return
// let z = multiply(6,5);
// console.log(z);

//4-5.Immediately Invoked Function and anonymous function
// (function(){
//     console.log("I run Immediately");
// })();




//Hoisting: Try to call/access a variable or function even before its declaration or initialization

// hello();

// function hello(){
//         console.log("hello");
// }
// console.log(a);
// console.log(b);
// console.log(c);

// var a = 1;
// let b = 2;
// const c = 3;

// hell();

// const hell = ()=>{
//         console.log("Hello from arrow");
// }






//Lexical scope and closures

//GEC
// console.log(a);
// bro();
// var a = 10;
// function bro(){
//     console.log("I am bro");
// }



//Scopes

// Q1: variable inside {} ?
//    => NO ->     VAR      =>  GLOBAL
//          -> LET / CONST  =>  SCRIPT

//    => YES -> Q2: is that {} becoz of fn ?
//                => YES ->     VAR      =>  FUNCTIONAL
//                       -> LET / CONST  =>  BLOCK

//                => NO  ->     VAR      =>  GLOBAL
//                       -> LET / CONST  =>  BLOCK


// var a = 10;   // GLOBAL
// let b = 20;   // SCRIPT
// const c = 30; // SCRIPT

// console.log(a);
// console.log(b);
// console.log(c);

// if(true){
//     var d = 100;   // GLOBAL
//     let e = 200;   // BLOCK
//     const f = 300; // BLOCK
// }
// console.log(d);
// console.log(e);
// console.log(f);

// function sam(){
//     var g = 1000;   // FUNCTIONAL
//     let h = 2000;   // BLOCK
//     const i = 3000; // BLOCK
// }

// console.log(g);
// console.log(h);
// console.log(i);


 
// function greet(){
//     let a = 1; //block scope
//     //var a = 1; //functional scope
//     console.log("I am greet");
// }

// greet();
// console.log(a);


// if(true){
//     var a = 1; //global scopes
//     let b = 2; //block scope
//     console.log("Inside IF");
// }

// console.log('a',a);
// console.log('b',b);

// window.alert("Hello, World!");
// // or simply
// alert("Hello, World!");

//Recursion

// function fact(n){
//         if(n==1 || n==0){
//                 return 1;
//         }
//         return n*fact(n-1);
// }

// let z = fact(5);
// console.log(z);


// function sum(n){
//         if(n==1 || n==0){
//                 return 1;
//         }
//         return n+sum(n-1);
// }

// let y = sum(5);
// console.log(y);


//Lexical scope

// let c = 10;
// function outer(){
//     let c = 40;
//     let d = 30;

//     function inner(){
//         // let c = 20;
//         console.log(c); //finds inside parent
//     }

//     inner();
// //     console.log(c); //finds inside local memory 
// }

// outer();


//Closures:

// function outer(){
//     var a = 10;
//     let b = 20;
//     function inner(){
//         b = b+1;
//         console.log(b);
//     }
//     return inner;
// }

// let returnedVal = outer();
// // // console.log(returnedVal);

// returnedVal();
// returnedVal();

// function greet(){
//     let a = 1;
//     return a;
// }

// let z = greet();
// console.log(z);


// Currying: Currying is a technique in functional programming where a function,
        //  that takes multiple arguments is transformed into a series of functions that each take one argument at a time.

// function curriedMultiply(a) {
//     return function(b) {
//         return a * b;
//     };
// }

// Usage
// const keshav = curriedMultiply(2); // 'a' is now locked as 2
// let c = keshav(5);       // 'b' is 5. 
// console.log(c);    //Result: 10

// const k = curriedMultiply(2)(5); 
// console.log(k);
// console.log(double(5));            
// console.log(double(10));   

// function sum(a){
//     return function(b){
//         return function(c){
//             return a+b+c;
//             }
//     }
// }
// let z = sum(3)(7)(9);
// console.log(z); //19

// const sum = a => b => c => a + b + c;
// console.log(sum(3)(7)(9)); // 19

// function square(x){
//     return function(y){
//         return y**x;
//     }
// }
// let sqr = square(2);
// console.log(sqr(5));
// console.log(sqr(19));


// alert("Hello, I am alert");
// window.alert("Hello, I am alert");
// console.log(window);
// console.log(this);
//---------------------------------------------------------------

//'this' keyword and usage with function
// 1. Global Context (Standalone Functions)
// When a regular function is called in the global scope, this refers to the global object.

// In Browsers: window

// In Node.js: global

// console.log(this);
// console.log(window);
// console.log(this);
 // Prints: window (in browser)

//  2. Method Invocation (Inside Objects)
// When a function is called as a method of an object, this refers to the object that owns the method.

// const a = {
//     name: "Bhaskar",
//     age: 10,
//     id: 2
// }
// console.log(a);

// const user = {
//     name: "user",
//     age: 10,
//     greet: function() {
//         console.log(`Hello, my name is ${this.name} & my age is ${this.age}`);
//         console.log(this);
//     },

// };


// const user2 = {
//     name: "user2",
//     age: 11,
//     people: function() {
//         console.log(`Hello, my name is ${this.name} & my age is ${this.age}`);
//         console.log(this);
//     },

// };

// user2.people();




// user.greet(); // Prints: "Hello, my nam"
// // Here, 'this' is the 'user' object.


// function hello(){
//         console.log(this.alert("Hello"));
// }
// hello();

// 3. Arrow Functions
// This is the most important rule for React developers. 
// Arrow functions do not have their own this. They inherit this from the surrounding (lexical) scope where they were defined.
// const user = {
//     name: "user",
//     regularFn: function() {
//         console.log("Regular:", this.name);
//     },
//     arrowFn: () => {
//         console.log("Arrow:", this.name);
//     }
// };

// user.regularFn(); // "Regular: 
// user.arrowFn();   // "Arrow: undefined" (It looks at the global scope, not the user object)

//Questions:
// const car = {
//   brand: "Tesla",
//   getBrand: function() {
//     const print = () => console.log(this.brand);
//     print();
//   }
// };
// car.getBrand();

// Feature	            Regular Function	          Arrow Function
// this binding	        Dynamic (depends on caller)	  Lexical (inherited from parent)
// new (Constructor)	✅ Yes	                    ❌ No
// arguments object	    ✅ Yes	                    ❌ No (Use ...args) //H.W
// Implicit Return	    ❌ No	                    ✅ Yes (for one-liners)
// Hoisting	            ✅ Yes (if declared)	        ❌ No (treated as variables)

// function showArgs() {
//   console.log(arguments.0); // ✅ Works
// }
// showArgs("Hello", "World"); // Output: "Hello"

// const showArgsArrow = () => {
//   console.log(arguments[0]); // ❌ ReferenceError: arguments is not defined
// };

// The modern fix for Arrow Functions (Rest Parameters):
// const showArgsFixed = (...args) => {
//   console.log(args[0]); // ✅ Works! Output: "Hello"
// };

// showArgsFixed("Hello", "World");

// named();

// const named = ()=>{
//   console.log("Hello");
// }

// function named(){
//   console.log("Hello");
// }

// 4. Constructor Functions & Classes
// When you use the new keyword, this refers to the brand new instance being created.
// function Person(name) {
//     this.nam = name; // 'this' is the new object being built
// }

// const person1 = new Person("Alice");
// //person1 = {
// // nam : name}
// console.log(person1.nam);

// let b = [];
// let a = new Array();
// console.log(a);
// let c = new Date();
// console.log(c);
// console.log(person1.name); // "Alice"

// Construction Function: Starts with capital letter, Starts with new keyword, this keyword,
// Example:
// function Student(name, age, grade) {
//  // "this" refers to the new object being created
// this.nam = name;
// this.ag = age; 
// this.grad = grade; 
// this.sayHello = function() { 
// console.log(`Hi, my name is ${this.nam}!`);
//  };
// } 
// // // // Creating "instances" of Student 
// const student1 = new Student("Alice", 20, "A"); 
// console.log("student1",student1);
// const student1 = {
//     nam : "Alice",
//     ag: 20,
//     grad: "A"
// }
// const student2 = new Student("Bob", 22, "B"); 
// student1.sayHello(); // "Alice" 
// student2.sayHello(); // "Hi, my name is Bob!"

// What happens when you use new?
// When you call a function with the new keyword, four things happen behind the scenes:
// A new empty object {} is created.
// The this keyword is pointed to that new object.
// The function executes, adding properties (like name and age) to this.
// The object is automatically returned (unless you manually return another object).

// Constructor(old way,function look) vs Class(new way, OOP look) : 
// Class does the same thing which constructor function does but in cleaner way, 
// Classes are syntactical sugar of constructor function.