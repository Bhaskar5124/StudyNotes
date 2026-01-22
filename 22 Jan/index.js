// 1. Call: "The Individual Call"
// .call() runs the function immediately. You pass the new "owner" (the object) as the first argument, and then you pass the parameters one by one.

// Logic: function.call(owner, arg1, arg2)

// const student1 = {
//   name: "Aryan",
//   introduce: function(city, country) {
//     console.log(`Hi, I am ${this.name} from ${city}, ${country}.`);
//   }
// };

// const student2 = { name: "Sneha" }; 
// Sneha doesn't have an "introduce" function!

// Sneha borrows Aryan's method
// student1.introduce.call(student2, "Mumbai", "India");

// Output: "Hi, I am Sneha from Mumbai, India."




// 2. Apply: "The Array List"
// .apply() also runs the function immediately. The only difference is that you pass the parameters inside an Array.

// Logic: function.apply(owner, [arg1, arg2])

// Memory Trick: Apply uses an Array.

// student1.introduce.apply(student2, ["Delhi", "India"]);

// Output: "Hi, I am Sneha from Delhi, India."


// 3. Bind: "The Appointment"
// .bind() is different. It does not run the function immediately. 
// Instead, it creates a copy of the function with the this keyword "locked" to the new owner. You can save it and use it later.

// Logic: const newFunc = function.bind(owner)

// const introSneha = student1.introduce.bind(student2, "London", "UK");

// // Nothing happens yet... until you call the new function:
// introSneha();

// Output: "Hi, I am Sneha from London, UK."



// Real-world use case tip:
// Use call or apply when you want to "borrow" a method from another object right now.

// Use bind in React (especially class components) or event listeners where you want a function to "remember" which object it belongs to when it eventually runs.


let a = "string";
let b = a.split("").reverse().join("");
console.log(b);

function isPalindrome(str){
    let reverseStr = str.split("").reverse().join("");
    if(str === reverseStr){
        console.log("Yes Palindrome");
    }else{
        console.log("No, Palinfrome");
    }
}
isPalindrome("string");
isPalindrome("madam");
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Async Progamming



// console.log("open a shop");
// console.log("work there for 5 mins");
// console.log("close the shop");

// -------------------------------------

// wait/delay

// setTimeout
// setTimeout( function(){} , 5000 )

// console.log("open a shop");

// setTimeout( function(){
//     console.log("work there for 5 secs")
// } , 5000 )

// console.log("close the shop");


// ---------------
// setInterval
// setInterval( function(){} , 5000 )



// // -------------------------------------------------------



// console.log("hello from sam");

// setTimeout(function(){
//     console.log("hi from 6s");
// } , 6000)

// setTimeout(function(){
//     console.log("hi from 3s");
// } , 3000)

// console.log("hello from sam 2");


// // total time kitna ? 6
// // overall output

// // -------------------------------------------------------



// console.log("hello from sam");

// setTimeout(function(){
//     console.log("hi from 3s-1");
// } , 3000)

// setTimeout(function(){
//     console.log("hi from 3s-2");
// } , 3000)

// console.log("hello from sam 2");


// // total time kitna ? 
// // overall output



// -------------------------------------------------------



// console.log("welcome to amazon");

// setTimeout(function(){
//     console.log("hi from 0s");
// } , 0)

// console.log("good bye from amazon");


// total time kitna ? 
// overall output

// -------------------------------------------------------

// let id1 = setTimeout(function(){
//     console.log("hello");
// } , 4000)

// let id2 = setInterval(function(){
//     console.log("hi bhai");
// } , 3000)

// clearTimeout(id1)
// clearInterval(id2) //stops it

// console.log(id1);
// console.log(id2);


// -------------------------------------------------------

// let iddd = setInterval(function(){
//     console.log("hi bhai");
// } , 1000)


// setTimeout(function(){
//     clearInterval(iddd)
// } , 20000)

// ------------------


// let iddd = setInterval(function(){
//     console.log("hi bhai");
// } , 2000)


// console.log(iddd);

//--------------------------------------------------------------------------------------------------------------

//Callback Hell

// select image -> 4s
// apply filter -> 2s


// wrong approach ❌
// function step1(){
//     console.log("please wait i am selecting the picture...");
//     setTimeout( function(){
//         console.log("image selected");
//     } , 4000)
// }
// function step2(){
//     console.log("please wait i am applying filter to the picture...");
//     setTimeout( function(){
//         console.log("filter applied");
//     } , 2000)
// }

// step1();
// step2();

// ------------------------------------------------------------

// right approach ✅


// function step1( fn ){
//     console.log("Please wait selecting image...");
//     setTimeout( function(){
//         fn("Selected Image")
//     } , 4000 ) 
// }

// function step2(image , fn){
//     console.log(`Please wait applying filter to ${image}`);
//     setTimeout( function(){
//         fn("Filtered Image")
//     }, 2000 )
// }
// function step3(filter , fn){
//     console.log(`Please wait adding caption to ${filter}`);
//     setTimeout( function(){
//         fn("Captioned Image")
//     } , 5000 )
    
// }
// function step4(caption){
//     console.log(`Please wait uploading ${caption}`);
//     setTimeout(function(){
//         console.log("Image finally uploaded");
//     } , 3000)
    
// }

// // callback hell

// // step1(step2(step3(step4()))) ❌ MISTAKE ❌

// step1( function(image){
//     console.log(image);
//     step2(image , function(filter){
//         console.log(filter);
//         step3(filter , function(caption){
//             console.log(caption);
//             step4(caption)
//         } )
//     } )
// } );