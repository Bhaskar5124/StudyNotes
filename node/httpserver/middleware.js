// import express from 'express';
// const app  = express();

// middleware
// runs on every incoming request
// has access of all req,res and next

// app.use((req,res,next)=>{
//     console.log("middleware-1");
//     // res.send("mai middleware hu") //req-res cycle ended here
//     next();
// })

// app.use((req,res,next)=>{
//     console.log("middleware-2");
//     next();
// })

// // root route
// app.get('/' , (req,res)=>{
//     console.log("Home");
//     res.send('<h1>I AM ROOT ROUTE</h1>')
// }) 

// app.get('/about' , (req,res)=>{
//     console.log('About');
//     res.send('<h1>I AM ABOUT ROUTE</h1>')
// })

// const PORT = 5050;
// app.listen(PORT , ()=>{
//     console.log(`SERVER CONNECTED AT PORT: ${PORT}`);
// })



// // ---------------------------------------------------
// http://localhost:5050/sam?username=sam
import express from 'express';
const app  = express();

// app.use( (req,res,next)=>{
app.use('/sam' , (req,res,next)=>{
    console.log('Middleware');
    let username = req.query.username;
    if(username === "sam"){
        next()
    }
    else{
        return res.send("INVALID USER")
    }
})

app.get('/sam' , (req,res)=>{
    res.send('<h1>I AM SAM ROUTE</h1>')
})

app.get('/', (req,res)=>{
    res.send("I am Home");
})

const PORT = 5050;
app.listen(PORT , ()=>{
    console.log(`SERVER CONNECTED AT PORT: ${PORT}`);
})


// ---------------------------------------------------

// import express from 'express';
// const app  = express();

// app.use('/sam/:id' , (req,res,next)=>{
//     const {id} = req.params;
//     console.log(id ,"paramss");
//     if(id==5){
//         next();
//     }else{
//         res.send("Invalid Parameter");
//     }  
// })

// app.get('/sam/:id' , (req,res)=>{
//     // const paramss = req.params;
//     // console.log(paramss ,"paramss");
//     // res.send(paramss)
//     res.send('<h1>I AM SAM ROUTE</h1>')
// })

// const PORT = 5050;
// app.listen(PORT , ()=>{
//     console.log(`SERVER CONNECTED AT PORT: ${PORT}`);
// })