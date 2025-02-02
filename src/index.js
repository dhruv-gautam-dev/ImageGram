import express, { urlencoded } from 'express';
import connectDB from './config/dbConfig.js';
import { createPost } from './controllers/postControllers.js';
import { s3Uploader } from './config/multerConfig.js';

const PORT  = 3000;
const app = express(); // returns an server object

app.use(express.json()) // middleware to parse json data
app.use(express.text()) 
app.use(urlencoded()) 

//sending a request
app.get('/',(req,res)=>{
  return res.send('Home');
});

app.get('/ping',(req,res)=>{
  console.log(req.query);
  console.log(req.body);

  return res.json({message: 'pong'});
});

app.get('portNo',(req,res)=>{
  return res.send(PORT);

});



app.post('/posts', s3Uploader.single("image"),  createPost); // acting as a routing layer



// Starting of Server
app.listen(PORT, ()=>{
  console.log('this server is running at PORT:'+ PORT);
  connectDB() // call the function to connect with the server
});
