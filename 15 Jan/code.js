// OOPS: Object Oriented Programming
// Encapsulation: 
// Encapsulation is the practice of bundling data and methods into a single unit (a class) and hiding the internal state of the object from the outside world.
// Keyword: # (Private fields) – JavaScript uses the hash symbol to make properties private.
// Keyword: this – Refers to the current instance of the class.
// JavaScript
// class BankAccount { 
// #balance = 0; // Private property 
// constructor(owner) { this.owner = owner; } 
// deposit(amount) { if (amount > 0) this.#balance += amount; } 
// get getBalance() { return `Balance: $${this.#balance}`; } 
// } 
// const myAcc = new BankAccount("Alice"); 
// myAcc.deposit(100); 
// console.log(myAcc.getBalance); // "Balance: $100" // console.log(myAcc.#balance); // Error: Private field
// The Blueprint: Class and Object

// class Car {
//   constructor(brand, color) {
//     this.brand = brand;
//     this.color = color;
//   }

//   drive() {
//     console.log(`${this.brand} is driving!`);
//   }
// }

// const myCar = new Car("Tesla", "Red");
// myCar.drive(); 

// // Output: Tesla is driving!

// 1. Encapsulation : Encapsulation means keeping the data inside the object and only showing what is necessary.
//  In JS, we use # to make properties private so they can't be changed from outside.

// class BankAccount {
//   #balance = 0; // Private property

//   deposit(amount) {
//     this.#balance += amount;
//     console.log(`Deposited: ${amount}. Total: ${this.#balance}`);
//   }
// }

// const account = new BankAccount();
// account.deposit(100);
// // console.log(account.#balance); // Error! It's private.

// // Output: Deposited: 100. Total: 100

// 2. Inheritance: Inheritance allows one class to "standardize" or "copy" features from another class. Use the extends keyword.
// class Animal {
//   eat() { console.log("Eating..."); }
// }

// class Dog extends Animal {
//   bark() { console.log("Woof!"); }
// }

// const myDog = new Dog();
// myDog.eat(); // Inherited from Animal
// myDog.bark(); // Its own method

// // Output: 
// // Eating...
// // Woof!

// 3.Abstraction: Abstraction means showing only the essential features and hiding the "how it works" logic. 
// You just press a button; you don't need to know how the engine starts.

// class CoffeeMachine {
//   start() {
//     this.#boilWater();
//     this.#brewCoffee();
//     console.log("Coffee is ready!");
//   }

//   #boilWater() { /* complex logic */ }
//   #brewCoffee() { /* complex logic */ }
// }

// const myCoffee = new CoffeeMachine();
// myCoffee.start(); 

// // Output: Coffee is ready!

// 4.Polymorphism: Polymorphism allows different classes to have the same method name but perform different actions.

// class Shape {
//   draw() { console.log("Drawing a shape"); }
// }

// class Circle extends Shape {
//   draw() { console.log("Drawing a circle ⭕"); }
// }

// class Square extends Shape {
//   draw() { console.log("Drawing a square 🟦"); }
// }

// const shapes = [new Circle(), new Square()];
// shapes.forEach(s => s.draw());

// Output: 
// Drawing a circle ⭕
// Drawing a square 🟦
