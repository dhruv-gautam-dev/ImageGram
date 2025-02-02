// controller layer consist of functions which are capable of accepting a request and forwarding it to the service layer 

import { createPostService } from "../services/postService.js";

export async function createPost(req,res){
  console.log(req.file);

  // call the service layer functions
  const post =await createPostService({
    caption: req.body.caption,
    image: req.file.location
  });


  return res.json({
    success: true,
    message: "post created successfully",
    data: post
  });
}