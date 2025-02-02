import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    caption:{
      type : String ,
      required : true ,
      minLength: 5
    },
    image:{
      type: String,
      required : true
    },
    userId:{
      type: mongoose.Schema.Types.ObjectId, // created a id which always belongs to a ref property
      ref: "User"
    }
  },{timestamp : true});

const post = mongoose.model("post",postSchema); // create a connection for user
export default post;