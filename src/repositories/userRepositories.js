//repository layer is the one which has classes and function responsible for interacting with the DB.
//fetch the data of user based on some conditions

import User from "../schema/user.js";

export const findUserByEmail = async(email)=>{
  try{
    //ORM Queries
    const user = await User.findOne({email});
    return user;
  }catch(error){
    console.log(error);
  }
};

export const findAllUsers = async ()=>{
  try{
    //ORM Queries
    const users = await User.find();
    return users;
  }catch(error){
    console.log(error);
  }
}

export const createUser = async (user)=>{
  try{
    //ORM Queries
    const newUser = await User.create(user);
    return newUser;
  }catch(error){
    console.log(error);
    throw error;
  }
}