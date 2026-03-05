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
  }

  // 2. Defining a method (behavior)
  startEngine() {
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
// class Student{ 
// // 1. The Constructor: Initializes properties when a new object is created constructor(name, grade) { 
//     constructor(name,grade){
//         this.name = name;
//         this.grade = grade; 
//     }
 
// // 2. Methods: Functions that belong to the object 
//     study(){
//      console.log(`${this.name} is studying for the exam.`);
//      } 
// }
//  // Creating an "instance" of the class 
// const student1 = new Student("Sarah", "A"); 
// student1.study();   // Output: "Sarah is studying for the exam."
// console.log(student1); 