import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    caption:{
      type : string ,
      required : true ,
      minLength: 5
    },
    image:{
      type: string,
      required : true
    },
    user:{
      type: mongoose.Schema.Types.ObjectId, // created a id which always belongs to a ref property
      ref: "User"
    }
  }
);

const post = mongoose.model("post",postSchema);
export default post;