

// function sum(a,b){ //a,b are parameter
//     return a+b;
// }

// let z = sum(5,6); // z = 11
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


const minus = function(c,d){
    return c-d;
}

let x = minus(9,8);
console.log(x);


//3.Arrow function
const multiply = (a,b) => a*b;

let z = multiply(6,5);
console.log(z);

//4-5.Immediately Invoked Function
(function(){
    console.log("I run Immediately");
})();


//Hoisting: Try to call/access a variable or function even before its declaration or initialization

