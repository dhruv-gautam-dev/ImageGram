import { signupUserService } from "../services/userService.js";

export async function getProfile(req,res){
  // return unimplimented
  return  res.status(501).json({
    success:false,
    message:"Not implemented"
  });
}

export async function signupUser(req,res) {
  try {
    const user = await signupUserService(req.body);

    return res.status(201).json({
      success:true,
      message:"user created successfully",
      data: user
    });
  } catch (error) {
    console.log(error);
    if(error.status){
      return  res.status(error.status).json({
        success: false,
        message: error.message
      });
    }
    return res.status(500).json({
      success:false,
      message:"Internal server error"
    });
  }

}