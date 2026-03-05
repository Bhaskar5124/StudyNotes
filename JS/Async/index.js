//Async Progamming

//Event Loop-----------------------------------------------------------


//HOF(Higher Order Function) & LOF(Lower Order Function)----------------------------

// function hof(name,callback){
//   console.log("HOF");
// //   let name = "bhaskar";
//   callback(name);
// }

// function lof(name){
//   console.log("hello ",name);
// }

// hof("bhaskar",lof);






// function sum(n){
//     console.log(n);
// }

// sum(6);

// function hof(callback,name){
//   console.log("HOF");
//   // let name = "bhaskar";
//   callback(name);
// }

// function greeting(name){
//   console.log("hello ",name);
// }

// hof(greeting,"bhaskar");



//Callback Hell/Pyamid of Doom
// function sum(a,b,callback){
//   console.log("sum: ",a+b);
//   // let name = "bhaskar";
//   callback(a,b);
// }

// function sub(a,b,callback){
//   console.log("sub: ",a-b);
//   callback(a,b);
// }

// function mul(a,b,callback){
//   console.log("mul: ",a*b);
//   callback(a,b);
// }
// function div(a,b,callback){
//   console.log("div: ",a/b);
// }

// sum(5,3,function(a,b){
//   sub(a,b,function(a,b){
//     mul(a,b,function(a,b){
//       div(a,b);
//     })
//   })
// });




// const sum = (a, b, callback) => {
//     console.log("sum:", a + b);
//     callback(a, b);
// };                     

// const sub = (a, b, callback) => {
//     console.log("sub:", a - b);
//     callback(a, b);
// };

// const mul = (a, b, callback) => {
//     console.log("mul:", a * b);
//     callback(a, b);
// };

// const div = (a, b) => {
//     console.log("div:", a / b);
// };

// sum(5, 10, (a, b) => {
//     sub(a, b, (a, b) => {
//         mul(a, b, (a, b) => {
//             div(a, b);
//         });
//     });
// });




//Promise-------------------------------------------------------------------

// A JavaScript Promise is an object representing the eventual result of an asynchronous operation. It acts as a placeholder for a value that is not available yet, 
// allowing asynchronous methods to return values similarly to synchronous methods. 


// Promise States
// A promise can be in one of three mutually exclusive states: 
// Pending: The initial state; the operation is still ongoing.
// Fulfilled (or Resolved): The operation completed successfully, and a resulting value is available.
// Rejected: The operation failed, and an error (reason) is available. 


// A promise is considered settled if it is either fulfilled or rejected (i.e., no longer pending). 

// Key Methods for Handling Promises
// You cannot directly access a promise's state and result properties; instead, you use methods to attach handlers that execute when the promise becomes settled. 
// .then(): Appends handlers for the fulfillment cases of the promise. It takes up to two arguments: a callback for success and another for failure.
// .catch(): Appends a rejection handler callback to the promise. This is functionally equivalent to calling .then(null, rejectionHandler) and is the preferred way to handle errors at the end of a chain.
// .finally(): Appends a handler that is called when the promise is settled (either fulfilled or rejected). This is useful for performing cleanup operations, such as hiding a loading spinner, regardless of the outcome. 


// Creating and Using Promises
// Promises are created using the Promise constructor, which takes an "executor" function as an argument. This function is called immediately with two functions: resolve and reject.

// const myPromise = new Promise((resolve, reject) => {
//     const success = true;

//     // Simulate an async task (like a database call)

//         if (success) {
//             resolve("Data retrieved successfully! ✅");
//         } else {
//             reject("Error: Could not find data. ❌");
//         }

// });

// console.log(myPromise);

// myPromise
//     .then((result) => {
//         console.log(result); // Runs if resolved
//     })
//     .catch((error) => {
//       console.log("When Error");
//         console.error(error); // Runs if rejected
//     })
//     .finally(() => {
//         console.log("Operation finished."); // Runs no matter what
//     });


// async function handleTask() {
//     try {
//         const result = await myPromise; // Execution pauses here until promise settles
//         console.log(result);
//     } catch (error) {
//         console.error(error);
//     } finally{
//         console.log("Promise Settled");
//     }
// }

// handleTask();


// function sum(a, b) {
//   return new Promise((resolve,rej) => {
//     console.log("sum: ", a + b);
//     resolve({ a, b });
//     rej("Sum error") // Handing over the numbers for the next step
//   });
// }

// function sub({ a, b }) {
//   return new Promise((resolve) => {
//     console.log("sub: ", a - b);
//     resolve({ a, b });
//   });
// }

// function multiply({ a, b }) {
//   return new Promise((resolve) => {
//     console.log("mul: ", a * b);
//     resolve({ a, b });
//   });
// }

// function div({ a, b }) {
//   return new Promise((resolve) => {
//     console.log("div: ", a / b);
//     resolve(); // Final step, nothing more to pass
//   });
// }


// Start the chain
// sum(5, 2)
//   .then(function(data) {
//     console.log(data);
//     return sub(data); // We must 'return' the promise to the next .then
//   })
//   .then(function(data) {
//     return multiply(data);
//   })
//   .then(function(data) {
//     return div(data);
//   })
//   .catch(function(err) {
//     console.log("Error:", err);
//   });

// Start the chain
// sum(10, 5)
//   .then((data) => sub(data))      // After sum is done, do sub
//   .then((data) => multiply(data)) // After sub is done, do multiply
//   .then((data) => div(data))      // After multiply is done, do div
//   .catch((err) => console.log("Error:", err)); // One place to catch any errors


// wait/delay----------------------------------------------------------------
// console.log("open a shop");
// console.log("work there for 5 mins");
// console.log("close the shop");

// setTimeout
// setTimeout( function(){} , 5000 )

// console.log("open a shop");

// setTimeout( function(){
//     console.log("work there for 5 secs")
// } , 5000 );

// clearTimeout(timeout);

// let timer = setInterval( function(){
//     console.log("work there for 1 secs")
// } , 1000 )

// clearInterval(timer);

// let task = setInterval(()=>{
//     console.log("I run 10 times");
// },1000)

// let timeout = setTimeout(()=>{
//     clearInterval(task);
//     clearTimeout(timeout);
// },10000);

// clearTimeout(timeout);

//it takes input in miliseconds
//1000ms = 1seconds

// console.log("close the shop");


// function sum(a,b,callback){
//     setTimeout(function(){
//         console.log("sum: ",a+b);
//         callback(a,b);
//     },2000)
// }
  
//   // let name = "bhaskar";
  


// function sub(a,b,callback){
//     setTimeout(function(){
//         console.log("sub: ",a-b);
//         callback(a,b);
//     },1000)
//   }

// function mul(a,b,callback){
//     setTimeout(function(){
//         console.log("mul: ",a*b);
//         callback(a,b);
//     },5000)
//  }


// function div(a,b,callback){
//     setTimeout(function(){
//         console.log("div: ",a/b);
//     },3000)
// }

// sum(5,3,function(a,b){
//   sub(a,b,function(a,b){
//     mul(a,b,function(a,b){
//       div(a,b);
//     })
//   })
// });


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
// } , 1000)

// let id2 = setInterval(function(){
//     console.log("hi bhai");
// } , 1000)

// // clearTimeout(id1)
// clearInterval(id2) //stops it

// let timer = setInterval(()=>{
//     console.log("I run for 6 seconds")
// },1000);

// setTimeout(()=>{
//     clearInterval(timer);
//     console.log("Off");
// },6000);

// console.log(id1);
// console.log(id2);

// function Interval(){

//  let it = setInterval(function(){
//     console.log("hi bhai");
// } , 2000)
// console.log(it);
// clearInterval(it);
// }

// Interval();


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


//API Call

    // function handleCall() {
    //     fetch('https://dummyjson.com/quotes') //fetch returns you a promise
    //     .then((pdata) => {

    //     console.log("pdata",pdata);
    //     return pdata.json(); 
    //         // This returns a new promise
    //     })
    //     .then((fdata) => {
    //         // This is your actual data (fdata)
    //         if(fdata){
    //             console.log("fdata",fdata);
            
    //         }
    //     })
    //     .catch((error) => {
    //         // This catches any errors in the fetch or the json conversion
    //         console.error("There was an error fetching the data:", error);
    //     })
    //     .finally(()=>
    //     console.log("Promise Finished"));
    // }


    // async function handleCall(){
    //     let pdata = await fetch("https://dummyjson.com/quotes");
    //     let fdata = await pdata.json();
    //     //let ffdata = JSON.stringify(fdata);
    //     if(fdata){
    //         console.log("fdata",fdata.quotes);
        
    //     }

    //     let data = fdata.quotes;

    //     data.map((item)=>{
    //         console.log("This is Quote: " ,item.quote);
    //         console.log("This is Author: ", item.author);
    //     })

        
    //     // setData(ffdata.quotes);
    //     // console.log('fdata',fdata.quotes);
    // }


    const handleCall = async () => {
    // 1. Optional: Set a loading state to true here
    // setLoading(true); 

    try {
        // 2. Fetch the data from the API
        const response = await fetch('https://dummyjson.com/quotes');
        //console.log('response',response);

        // 3. Check if the response is successful (status 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // 4. Parse the JSON body
        const result = await response.json();

        if(result){
            console.log(result.quotes);
        }


    } catch (error) {
        // 6. Handle errors (Network issues, 404s, or JSON parsing errors)
        console.error("Failed to fetch data:", error.message);
    } finally {
        console.log("Data called success");
    }
};

handleCall();


// async function callApii(){
//     let resp = await axios.get("https://dummyjson.com/quotes");
//     console.log(resp.data);
// }
// callApii()


// A JSON example:
// json
// {
//   "firstName": "John",
//   "lastName": "Doe",
//   "age": 30,
//   "isStudent": false,
//   "powers": ["teleportation", "invisibility"],
//   "address": {
//     "street": "123 Main St",
//     "city": "Anytown"
//   }
// }

