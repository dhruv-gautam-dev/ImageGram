// Service layer contains the actual business logic, it contains function and classes which has all the logic required to complete the request 

import { countAllPosts, createPost, findAllPosts, updatePostById } from "../repositories/postRepositories.js";
import { deletePostById } from "../repositories/postRepositories.js";
import post from "../schema/post.js";

export const createPostService= async(createPostObject)=>{
  
  const caption = createPostObject.caption?.trim();
  const image = createPostObject.image;
  // const user = createPostObject.user do it later 

  const post = await createPost(caption,image);
  return post;
}

export const getAllPostsService = async(offset , limit)=>{
  const posts = await findAllPosts(offset,limit);

  // total no. of post || total no. of count
  const totalDocuments = await countAllPosts();
  const totalPages = Math.ceil(totalDocuments/limit);
  return {
    posts, totalPages, totalDocuments
  };
}

export const deletePostByIdService = async(id)=>{

  const response = await deletePostById(id);
  return response;
}

export const updatePostService = async(id,updateObject)=>{

  const response = await updatePostById(id,updateObject);
  return response;
}