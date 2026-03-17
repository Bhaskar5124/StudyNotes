// const http = require('http');
import http from 'http';

// const server = http.createServer((req,res)=>{
//     if(req.url == "/about" && req.method=='GET'){
//         res.end("This is about page")
//     }else{
//         res.end("<h1>This is home page from backend server</h1>")
//     }
// })

// const PORT = 8000;
// server.listen(PORT, ()=>{
//     console.log(`Server connected at port ${PORT}`)
// })
 


// Feature             http.createServer               express()
// Source              Built-in (No install needed)    Third-party (npm install express)
// Ease of Use         Hard (Lots of manual code)      Easy (Clean and readable)
// Routing             Manual if (req.url === ...)     Built-in app.get('/path', ...)
// Data Parsing        Manual (Handling Buffers)       Automatic (via Middleware)
// Usage               Great for learning the "guts"   Standard for production apps


//------------------------
//With express

import express from 'express';

const app = express();

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}`)
})

app.get('/', (req, res) => {
    res.send('Home page');
});

app.get('/about', (req, res) => {
    res.send('This is the about page');
});

app.post('/shinchan' , (req,res)=>{
    res.send("hi from shinchan POST")
})



//http methods

// Method,      Idempotent?*,       Has Request Body?,Main Purpose
// GET,         Yes,                No,Fetching data
// POST         No,                 Yes,Creating data
// PUT          Yes,                Yes,Replacing data
// PATCH        No,                 Yes,Modifying data
// DELETE       Yes,                No,Removing data





//URL parts

// When you send a request to a Node.js/Express server, you carry data in three main ways. Think of the **URL** as the envelope address and the **Body** as the letter inside.

// ---

// ## 1. URL Parameters (`params`)

// Parameters are **fixed parts** of the URL path, usually used to identify a specific resource (like an ID). In Express, these are defined with a colon `:`.

// * **URL:** `https://api.com/users/42`
// * **Code:** `app.get('/users/:id', ...)`
// * **Usage:** Identifying **which** specific item you want.
// * **Access in Express:** `req.params.id` (would be `"42"`)

// ## 2. Query Strings (`query`)

// Queries are **optional** key-value pairs that appear after a `?` in the URL. They are mostly used for filtering, sorting, or searching.

// * **URL:** `https://api.com/shop?category=shoes&color=blue`
// * **Code:** No special route setup needed.
// * **Usage:** Filtering or "querying" a list of data.
// * **Access in Express:** `req.query.category` (would be `"shoes"`)

// ## 3. Request Body (`body`)

// The body is **hidden** from the URL. It is used to send large amounts of data, like JSON objects, when creating or updating resources (POST/PUT/PATCH).

// * **URL:** `https://api.com/register` (The URL stays clean!)
// * **Data sent:** `{"username": "johndoe", "password": "123"}`
// * **Usage:** Sending sensitive data or complex objects.
// * **Access in Express:** `req.body.username` (requires `express.json()` middleware).

// ---

// ### Quick Comparison Table

// | Feature    | Location               | Example              | Best For... |
// | **Param**  | Inside the path        | `/users/101`         | Unique IDs / Specific resources. |
// | **Query**  | After the `?`          | `?sort=desc`         | Filters, search terms, pagination. |
// | **Body**   | URL Invisible (in request) | `{ "name": "Ali" }`  | Creating/Updating data (Secure). |

// ---