import Post from "../schema/post.js";
import user from "../schema/user.js";


export const createPost =async()=>{
  try {
    // const newPost = await Post.create({caption, Image,user});
    const newPost = new Post({caption, Image,user});
    await newPost.save();
    return newPost;
  } catch (error) {
    console.log(error);
  }
}

export const findPost = async ()=>{
  try{
    const posts = await Post.find();
    return posts;
  }catch(error){
    console.log(error);
  }
}

export const findPostById = async ()=>{
  try{
    const post = await Post.findById(id);
    return post;
  }catch(error){
    console.log(error);
  }
}
export const deletePostById = async ()=>{
  try{
    const post = await Post.findByIdAndDelete(id);
    return post;
  }catch(error){
    console.log(error);
  }
}