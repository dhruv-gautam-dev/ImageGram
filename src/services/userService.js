import { createUser, findUserByEmail } from "../repositories/userRepositories.js"
import { generateJwtToken } from "../utils/jwt.js";
import bcrypt from 'bcrypt';


export const signupUserService = async (user)=>{
  try {
    const newUser = await createUser(user);
  
    return newUser;
  } catch (error) {
    if(error.name === "MongoServerError"  && error.code === 11000){
      throw {
        status:400,
        message: "User with the same email or username already exist"
      }
    }
    throw error;
  }
  
}

export const signinUserService = async (userDetails)=>{
  try {
    console.log(userDetails.email);
    // check if there is valid registered email with the email
    const user = await findUserByEmail(userDetails.email);
 
    if(!user){
      throw{
        status :404,
        message: "user not found"
      }
    }
  
    //compare the password 
    const isPasswordValid = bcrypt.compareSync(userDetails.password , user.password);
    if(!isPasswordValid){
      throw{
        status :401,
        message: "Invalid Password"
      }
    }
    const token = generateJwtToken({email:user.email, _id: user._id , username: user.username});
    return token
  } catch (error) {
    throw error;
  }
  
}