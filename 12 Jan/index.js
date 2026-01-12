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

function outer(){
    var a = 10;
    let b = 20;
    function inner(){
        console.log(a);
    }
    return inner;
}

let returnedVal = outer();
// console.log(returnedVal);

// returnedVal();

// function greet(){
//     let a = 1;
//     return a;
// }

// let z = greet();
// console.log(z);



// var a = 10;

// function vohra(){
//     let c = 40;
//     let d = 30;
//     function sam(){
//         console.log(c);
//     }
//     sam();
//     console.log(c);
// }
// vohra()

// console.log(a);

// --------------------------------------------


// var a = 10;
// let b = 20;
// const c = 30;

// console.log(a); // 10 
// console.log(b); // 20
// console.log(c); // 30

// --------------------------------------------

// hoisting happening? ✅

// console.log(a); // undefined
// console.log(b); // tdz
// console.log(c); // tdz

// var a = 10;
// let b = 20;
// const c = 30;

// // --------------------------------------------

// var a = 10;
// let b = 20;
// const c = 30;

// if(true){
//     var d = 100; //global
//     let e = 200; //block
//     const f = 300; //block
// }

// console.log(d); // 100
// console.log(e); // err
// console.log(f); // 

// // --------------------------------------------

// var a = 10; //global
// let b = 20; //script
// const c = 30; //script

// if(true){
//     var a = 100; //global ✅
//     let b = 200;  // block ❌
//     const c = 300; // block ❌
// }

// console.log(a); // 100
// console.log(b); // 20
// console.log(c); // 30


// --------------------------------------------


// var a = 10; // global
// let b = 20; // script

// function sam(){
//     console.log(a);
//     var a = 200; // functional -> 200
//     let b = 500; // block -> 500
//     console.log(b);
// }

// console.log(a);
// sam()
// console.log(a);


// --------------------------------------------


// var a = 10; // global  200
// let b = 20; // script  20

// if(true){
//     console.log(a);
//     var a = 200; // global
//     let b = 500; // block  500
//     console.log(b);
// }

// console.log(a); // 
// console.log(b); // 

// 10
// 500
// 200
// 20

// --------------------------------------------


// abc()
// var abc = 10;
// function abc(){
//     console.log("hi guyz");
// }
// abc()


// -------------------------

// Q1: variable inside {} ?
//    => NO ->     VAR      =>  GLOBAL
//          -> LET / CONST  =>  SCRIPT

//    => YES -> Q2: is that {} becoz of fn ?
//                => YES ->     VAR      =>  FUNCTIONAL
//                       -> LET / CONST  =>  BLOCK

//                => NO  ->     VAR      =>  GLOBAL
//                       -> LET / CONST  =>  BLOCK


// LOCAL = FN + BLOCK

// -------------------

// var a = 10;   // GLOBAL
// let b = 20;   // SCRIPT
// const c = 30; // SCRIPT

// if(true){
//     var d = 100;   // GLOBAL
//     let e = 200;   // BLOCK
//     const f = 300; // BLOCK
// }

// function sam(){
//     var g = 1000;   // FUNCTIONAL
//     let h = 2000;   // BLOCK
//     const i = 3000; // BLOCK
// }

// sam()