// let a = [1,2,3,4];
// console.log(typeof(a));

let a = 1;
console.log(typeof(a));

let b = "abc";
console.log(typeof(b));

let c = true;
console.log(typeof(c));

let d;
console.log(typeof(d));

let e = Symbol();
console.log(typeof(e));

let f = Symbol();
console.log(e===f);

// In JavaScript, there is a very famous "quirk" (or bug) when it comes to checking the type of null. If you try to print it, you will get a surprising result.

// The Code
// JavaScript

// let value = null;
// console.log(typeof value); 
// The Result
// The output will be: "object"

// Why does it say "object"?
// This is actually a legacy bug from the very first version of JavaScript.

// In the original implementation of JS, values were stored in 32-bit units.

// The type of the value was determined by a "type tag" (a few bits at the beginning).

// The tag for an object was 000.

// The value null was represented as the NULL pointer (which was 0x00 on most platforms).

// Because null was all zeros, the engine saw the 000 at the start and incorrectly identified it as an object.

// let e = undefined;
// console.log(typeof(e));

// let f = Symbol();
// console.log(typeof(f));

// var a = 1;
// var a = 2; //Redeclaration
// console.log("a:",a);


// var b = 3;
// b=4;
// console.log('b:',b); //Reassignment

// let a = 1;
// let a = 2;
// console.log(a); //Redeclaretion not possible


// let a = 3;
// a = 4;
// console.log(a); //Reassignment

// const a = 1;
// const a = 2;
// console.log(a); //Redeclaretion not possible

// const b = 3;
// b = 4;
// console.log(b);