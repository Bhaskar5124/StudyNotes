import express from 'express';
import cors from 'cors';
import cookieParser from "cookie-parser";
const app = express(); //instance of app -> poori application
import mongoose  from 'mongoose';
import {commentRoutes} from './routes/comment.routes.js'
import { userRoutes } from './routes/user.routes.js';


//Install Mongodb Compass

mongoose.connect('mongodb://127.0.0.1:27017/crud')// returns a promise
.then(()=>{
    console.log("DB CONNECTED");
})
.catch((err)=>{
    console.log("DB NOT CONNECTED" , err);
})

// middleware
app.use(cors());
app.use(express.json()); //body parsing middleware
app.use(cookieParser());

// root route
app.get('/' , (req,res)=>{
    res.send("WELCOME TO ROOT ROUTE")
})


commentRoutes(app);
userRoutes(app);


const PORT = 8000;
app.listen(PORT , ()=>{
    console.log(`SERVER CONNECTED AT PORT : ${PORT}`); 
})