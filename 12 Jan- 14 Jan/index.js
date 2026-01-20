//Lexical scope and closures

//GEC
// console.log(a);
// bro();
// var a = 10;
// function bro(){
//     console.log("I am bro");
// }

//Scopes
 
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


//Lexical scope

// let c = 10;
// function outer(){
//     // let c = 40;
//     // let d = 30;

//     function inner(){
//         console.log(c); //finds inside parent
//     }

//     inner();
//     console.log(c); //finds inside local memory 
// }

// outer();


//Closures:

// function outer(){
//     var a = 10;
//     let b = 20;
//     function inner(){
//         console.log(a);
//     }
//     return inner;
// }

// let returnedVal = outer();
// console.log(returnedVal);

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


//alert("Hello, I am alert");
// console.log(window);
//---------------------------------------------------------------

//'this' keyword and usage with function
// 1. Global Context (Standalone Functions)
// When a regular function is called in the global scope, this refers to the global object.

// In Browsers: window

// In Node.js: global

//console.log(this);
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
//     }
// };

//user.greet(); // Prints: "Hello, my nam"
// // Here, 'this' is the 'user' object.

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

// name();

// const name = ()=>{
//   console.log("Hello");
// }

// function name(){
//   console.log("Hello");
// }

// 4. Constructor Functions & Classes
// When you use the new keyword, this refers to the brand new instance being created.
// function Person(name) {
//     this.name = name; // 'this' is the new object being built
// }

// const person1 = new Person("Alice");
// console.log(person1.name);

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
// // Creating "instances" of Student 
// const student1 = new Student("Alice", 20, "A"); 
// const s = {
//     nam : "Alice",
//     ag: 20,
//     grad: "A"
// }
// const student2 = new Student("Bob", 22, "B"); 
// console.log(student1.sayHello()); // "Alice" 
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

// Formal Definition
// A Class is a template for objects. 
// It defines what variables an object will contain (properties) and what actions it can 
// perform (methods). When you create an object from a class, that object is called an Instance.

// The Core Components
// Every class typically consists of three parts:

// The class Keyword: Used to declare the class.

// The constructor: A special method that runs automatically when a new object is created. It initializes the properties.

// Methods: Functions defined inside the class that represent the object's abilities.

class Car {
  // 1. Initializing the object's properties
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
    this.isEngineOn = false;
  }

  // 2. Defining a method (behavior)
  startEngine() {
    this.isEngineOn = true;
    console.log(`The ${this.color} ${this.brand}'s engine is now roaring!`);
  }
}

// // 3. Creating an "Instance" (Object)
const myCar = new Car("Toyota", "Red");
myCar.startEngine(); // Output: The Red Toyota's engine is now roaring!


// Important Rules for your Index
// Hoisting: Unlike regular functions, classes are not hoisted. You cannot create an object before you define the class in your code.
// It is a good practice to define class with capital letter, it runs using small letter also
// The new Keyword: You must use the new keyword to create an instance. If you call a class like a regular function, it will throw an error.




// Class Student:
class Student{ 
// 1. The Constructor: Initializes properties when a new object is created constructor(name, grade) { 
    constructor(name,grade){
        this.name = name;
        this.grade = grade; 
    }
 
// 2. Methods: Functions that belong to the object 
    study(){
     console.log(`${this.name} is studying for the exam.`);
     } 
}
 // Creating an "instance" of the class 
const student1 = new Student("Sarah", "A"); 
student1.study();   // Output: "Sarah is studying for the exam."
console.log(student1); 




// -------------------------

// Q1: variable inside {} ?
//    => NO ->     VAR      =>  GLOBAL
//          -> LET / CONST  =>  SCRIPT

//    => YES -> Q2: is that {} becoz of fn ?
//                => YES ->     VAR      =>  FUNCTIONAL
//                       -> LET / CONST  =>  BLOCK

//                => NO  ->     VAR      =>  GLOBAL
//                       -> LET / CONST  =>  BLOCK


