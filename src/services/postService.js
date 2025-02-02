// Service layer contains the actual business logic, it contains function and classes which has all the logic required to complete the request 

import { createPost } from "../repositories/postRepositories.js";


export const createPostService= async(createPostObject)=>{
  
  const caption = createPostObject.caption?.trim();
  const image = createPostObject.image;
  // const user = createPostObject.user do it later 

  const post = await createPost(caption,image);
  return post;
}