import express, { urlencoded } from 'express';
import connectDB from './config/dbConfig.js';
import apiRouter from "./routers/apiRouter.js";
import multer from 'multer';
import { isAuthenticated } from './Middlewares/authMiddleware.js';

const PORT  = 3000;
const app = express(); // returns an server object
const upload=multer();

app.use(express.json()); // middleware to parse json data
app.use(express.text()); 
app.use(urlencoded()) ;
// app.use(upload.single());

app.use("/api",apiRouter);


//sending a request
app.get('/ping',isAuthenticated,(req,res)=>{
  console.log(req.query);
  console.log(req.body);
  console.log(req.user);
  return res.json({message: 'pong'});
});


// Starting of Server
app.listen(PORT, ()=>{
  console.log('this server is running at PORT:'+ PORT);
  connectDB() // call the function to connect with the server
});
