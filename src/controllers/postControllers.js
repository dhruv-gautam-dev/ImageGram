// controller layer consist of functions which are capable of accepting a request and forwarding it to the service layer 

import { createPostService, deletePostByIdService, getAllPostsService, updatePostService } from "../services/postService.js";

export async function createPost(req,res){
  console.log("in controller",req.file);
  if(!req.file || !req.file.location){
    return res.status(400).json({
      success: false,
      message: "image is required",
    });
  }
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


// /api/v1/posts?limit=10&offset=0
export async function getAllPost(req,res){

  try {
    const limit = req.query.limit ||10;
    const offset = req.query.offset || 0;
  
    const paginatedPosts = await getAllPostsService(offset,limit);
  
    return res.status(200).json({
      success: true,
      message:"All post fetched successfully",
      data:paginatedPosts
    });

  } catch (error) {
    console.log(error)
    return res.status(500).json({
      success: false,
      message:"Internal server error",
    });
  }

}
export async function deletePost(req,res){
  try{
    const postId = req.params.id;
    const response = await deletePostByIdService(postId);
    if(!response){
      return res.status(404).json({
        success: false,
        message:"post not found",
      })
    }
    return res.status(200).json({
      success: true,
      message:"post deleted",
      data :response
    })
  }catch(error){
    console.log(error);
    return res.status(500).json({
      success: false,
      message:"Internal server error",
    })
  }
}

export async function updatePost(req,res){
  try{
    const updateObject = req.body;
    console.log(updateObject);
    if(req.file){
      updateObject.image = req.file.location;
    }
    const response = await updatePostService(req.params.id, updateObject);
    return res.status(200).json({
      success: true,
      message:"post updated successfully",
      data :response
    })
  }catch(error){
    console.log(error);
    return res.status(500).json({
      success: false,
      message:"Internal server error",
    })
  }
}
