
const fs = require('fs/promises') 
// const fs = require('fs') //node + extrernally installed
// const http = require('http') //node + extrernally installed
// console.log(fs);

// -------- create ---------
//writeFileSync
//Blocking
//Creates files if file do not exist
//Overwrites data to existing file
// const data = "Sam -> 8889999999"
// fs.writeFileSync('./test.txt' , data, 'utf8');


// const data2 = "\n Maverick -> 9999999999"
// fs.writeFileSync('./test.txt' , data2 )


// ----------------------------------------------
// -------- read ----------
// fs.readFileSync('./contact.txt' , "utf-8")
// let result = fs.readFileSync('./test.txt' , {encoding:"utf-8"})
// console.log(result);


// fs.readFile('./test.txt' , "utf-8" , (err,result)=>{
//     console.log(result);
//     // if(err){ throw new err}
//     // else {console.log(result);}
//     // else console.log(result.toString());
// })


// ----------------------------------------------
// -------- update ---------

//Blocking
//Creates files if file do not exist
//Adds data to existing file
// fs.appendFileSync('./test.txt' , `${new Date().getDate().toLocaleString()} is the date today \n`)

// ----------------------------------------------
// copy
//does not append changes from test.txt to sam.txt if sam.txt already exists
// fs.copyFileSync('to be copied(source)' , "destination copy")
// fs.copyFileSync('./test.txt' , "./sam.txt")

// ----------------------------------------------
// stats
// console.log( fs.statSync('./test.txt') );

// ----------------------------------------------
// delete
// fs.unlinkSync('./test.txt')
// fs.unlinkSync('./contact.txt')

// -------------------------------------------------------
// blocking     -> sync ❌
// console.log(10);
// const result = fs.readFileSync('./test.txt' , "utf-8") //blocking the thread here
// console.log(result);
// console.log(20);

// // non-blocking -> async ✅
// console.log(10);
// fs.readFile('./test.txt' , "utf-8" , (err , result)=>{ //non-blocking
//     console.log(result);
// })
// console.log(20);


// console.log(10);
// const res = fs.readFile('./test.txt' , "utf-8");
// console.log(res);
// console.log(20);



//best method
// async function hello(){
//     const result = await fs.readFile('./test.txt' , "utf-8");
//     console.log(result);
// }
// console.log(10);
// hello();
// console.log(20);

const os = require('os');
console.log( os.cpus());
console.log( os.cpus().length );


// ## Summary

// | Operation   | Sync (Blocking)   | Async (Promises) | Best For             |
// | ---         | ---               | ---              | ---                  |
// | **Read**    | `readFileSync`    | `readFile`       | Small files/Config   |
// | **Write**   | `writeFileSync`   | `writeFile`      | Small logs/settings  |
// | **Append**  | `appendFileSync`  | `appendFile`     | Adding to log files  |
// | **Delete**  | `unlinkSync`      | `unlink`         | Clean up             |
// | **Folder**  | `mkdirSync`       | `mkdir`          | Setup structure      |

// In the world of Node.js, managing how you read files is one of the first hurdles you'll face.
// The difference comes down to **blocking vs. non-blocking** behavior—or, in simpler terms, whether your app "freezes" while waiting for the hard drive.

// Here is the breakdown of the three methods:

// ---

// ### 1. `fs.readFileSync` (The "Stop Everything" Method)

// This is a **Synchronous** function. When you call it, Node.js pauses your entire program until the file is fully ready into memory.

// * **Behavior:** Blocking.
// * **Best for:** Short scripts or initial configuration files that must be loaded before the app starts.
// * **Risk:** If you use this in a web server with 100 users, and one user triggers a large file read, the other 99 users are stuck waiting until that file finishes.

// ```javascript
// const data = fs.readFileSync('/file.txt', 'utf8');
// console.log(data); // Runs ONLY after file is read

// ```

// ---

// ### 2. `fs.readFile` (The "Call Me Later" Method)

// This is the classic **Asynchronous** version using a **callback**. Node.js sends the request to the file system and immediately moves to the next line of code.

// * **Behavior:** Non-blocking.
// * **Best for:** Older Node.js codebases or simple one-off tasks.
// * **The Catch:** It leads to "Callback Hell" if you have to read multiple files in a specific order (nested functions inside functions).

// ```javascript
// fs.readFile('/file.txt', 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data); // Runs later
// });
// console.log("I run BEFORE the file is finished!"); 

// ```

// ---

// ### 3. `fs/promises` (The Modern Standard)

// This uses **Promises** (and usually `async/await`). It is also **Asynchronous** and non-blocking, but it uses modern JavaScript syntax to make the code look clean and readable, like synchronous code.

// * **Behavior:** Non-blocking.
// * **Best for:** 99% of modern applications.
// * **Why it's better:** It works perfectly with `try/catch` blocks and prevents the nesting issues of callbacks.

// ```javascript
// import fs from 'node:fs/promises';

// async function readFile() {
//   try {
//     const data = await fs.readFile('/file.txt', 'utf8');
//     console.log(data);
//   } catch (err) {
//     console.error(err);
//   }
// }

// ```

// ---

// ### Key Differences at a Glance

// | Feature            | `fs.readFileSync`        | `fs.readFile`               | `fs/promises`            |
// | ---                | ---                      | ---                         | ---                      |
// | **Execution**      | Synchronous              | Asynchronous                | Asynchronous             |
// | **Blocking?**      | **Yes** (Stops the loop) | No                          | No                       |
// | **Return Value**   | The file content         | `undefined` (uses callback) | A **Promise**            |
// | **Error Handling** | `try/catch`              | Error argument in callback  | `try/catch` (with await) |
// | **Modernity**      | Old school               | Traditional Node            | **Recommended**          |



