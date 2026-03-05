//Implicit conversion : coersion

// let a = 1; //Number
// let b = '1'; //String
// console.log(a-b); //Number
// console.log(a+b);

// let a = 1;
// let b = "c"
// console.log(a+b);
// console.log(1+true);


//Explicit conversion

// let a = 1;
// let b = '1';
// // let c = parseInt(b); //converts string to number
// // let c = Number(b);
// let c = a.toString();
// console.log(a+c);


//Falsy Values: Any value converted into boolean will result false;

//false
//0
//-0
//""
//''
//null
//undefined
//NaN

// let b = 1;
// let c = 'v';
// let a = b-c;


// // let a = "";
// console.log(a);
// if(a){
//     console.log("a is true");
// }else{
//     console.log("a is false");
// }


//Truthy values: Any value converted into boolean will result true;

//true
//Nonzero value (42,-1)
//Non empty string ("hello")('hello')
//Objects including empty object {}, {name: "name1"}
//array including empty array []
//functions
//dates
//symbols

// let z = Symbol();

// let a = new Date();

function hello(){
    console.log("I am funciton");
}


if(hello){
    console.log("a is true");
}else{
    console.log("a is false");
}