import mongoose from "mongoose";


const userSchema = new  mongoose.Schema( // helps to create a schema | takes a objects to define the details about schema
  {
    username:{
      type : String,
      required : true,
      unique: true,
      minLength:5
    },
    email:{
      type : String,
      required : true,
      unique: true,
      minLength:5,
      validator: {
        validator: function (emailValue){
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue);
        },
        message: "invalid email"
      }
    },
    password:{
      type : String,
      required : true,
      minLength:5
    }
  },{timestamps : true}
);  

const user = mongoose.model("User",userSchema); // create a user connection

export default user; //export the functionality 