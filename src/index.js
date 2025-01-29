import express from 'express';
import connectDB from './config/dbConfig.js';

const PORT  = 3000;
const app = express(); // returns an server object

//sending a request
app.get('/',(req,res)=>{
  return res.send('Home');
});

app.get('/ping',(req,res)=>{
  return res.json({message: 'pong'});

});

app.get('portNo',(req,res)=>{
  return res.send(PORT);

});

// Starting of Server
app.listen(PORT, ()=>{
  console.log('this server is running at PORT:'+ PORT);
  connectDB() // call the function to connect with the server
});
