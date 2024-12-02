import { User } from "../models/user.models.js";
import ApiError from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import * as common from '../utils/types.js';
import axios from 'axios'

const options = {
  httpOnly: true,
  Secure: process.env.NODE_ENV === 'production',
  sameSite: 'None',
  maxAge: 3600000
}


const Health = asyncHandler( async (req, res)=> {
  return res.status(200).json({"message": "health check successful 🟢"});
})

const Signup = asyncHandler(async (req, res) => {
    const { username, email, password } = req?.body || {};

    const schemaValidation = common.userSchema.safeParse({username,email,password})
    if(!schemaValidation.success)
      throw new ApiError(404,"schema validation error",JSON.parse(schemaValidation.error.message))
    

    const checkExisting = await User.findOne({email});
    if (checkExisting) throw new ApiError(404, "user already registered");

    const res1 = await User.create({
      username,
      email,
      password,
    });

    const createdUser = await User.findById(res1._id).select("-password");
    if (!createdUser) throw new ApiError(500, "failed to fetch createdUser ");

    const token = createdUser.generateToken();

    
    res
      .status(200)
      .cookie("token",token,options)
      .json(new ApiResponse(200, "user created successfully", createdUser));
});

// const Login = asyncHandler(async (req, res) => {
//   const { email, password } = req?.body;

//   const schemaValidation = common.loginSchema.safeParse({email,password})
//   if(!schemaValidation.success){
//     // console.log({email,password})
//     throw new ApiError(404,"schema validation failed",JSON.parse(schemaValidation.error.message))
//   }

//   const userFinding = await User.findOne({email});
//   if (!userFinding)
//     throw new ApiError(404, "user is not registered");
//   // console.log(userFinding)
//   const passwordChecking = await userFinding.isPasswordCorrect(password);
//   if (!passwordChecking)
//      throw new ApiError(404, "incorrect password ! ");

//   console.log(process.env.NODE_ENV)

//   //omitting password
//   // const {password:ps, ...newObjectForSendingToFrontEnd} = userFinding;
//   const userForFrontEnd = await User.findById(userFinding._id).select("-password")
  
//   const token = userFinding.generateToken();
//   return res
//     .cookie("token",token,options)
//     .status(200)
//     .json(new ApiResponse(200,"user logged IN successfully",{user: userForFrontEnd}))
// });

const Login = asyncHandler( async (req, res )=> {
  // destructuring will not attempt to destructure undefined
  const  { credentials } = req?.body || {};
  // console.log(credentials);

  const response = await axios.get(`https://oauth2.googleapis.com/tokeninfo?id_token=${credentials}`)
  // console.log(response)

  const { email, name:username, picture } = response.data;
  // console.log({email,username,picture})

  const checkExisting = await User.findOne({email})
  if(checkExisting) {
    const token = checkExisting.generateToken();
    // console.log("check",token)
    return res
      .cookie("token",token)
      .status(200)
      .json(new ApiResponse(200,"user logged in successfully",token))
  } else {
    const newUser = await User.create({
      email,username,picture
    })
    const token = newUser.generateToken();
    // console.log("new",token)
    return res
      .cookie("token",token)
      .status(200)
      .json(new ApiResponse(200,"user logged in successfully",token))
  }
})

const Logout = asyncHandler( async (req,res)=>{
  return res
  .cookie("token","",options)
  .status(200)
  .json(new ApiResponse(200,"use logged out successfully",))
})

const deleteUser = asyncHandler( async (req,res)=>{
  // destructuring will not attempt to destructure undefined
  const {email,password} = req?.body || {} 
  const schemaValidation = common.loginSchema.safeParse({email,password})
  if(!schemaValidation.success)
    throw new ApiError(404,"schema validation failed",JSON.stringify(schemaValidation.error.message)) 

  const checkUser = await User.findOne({email})
  if(!checkUser)
    throw new ApiError(404,"user is not registered")

  const deleteResponse = await User.deleteOne({email})
  if(!deleteResponse.acknowledged && deleteResponse.deletedCount != 1)
    throw new ApiError(500,"failed to delete user , try again")

  return  res
    .cookie("token","")
    .status(200)
    .json(new ApiResponse(200,"user deleted successfully",{deleteResponse,checkUser}))  
})

const getCurrentUser = asyncHandler( async (req, res)=>{

  res.status(200).
  json(new ApiResponse(
    200,
    "current user fetched successfully",
    req.user
  )
  )
})

export { 
  Signup,
  Login,
  Logout,
  deleteUser,
  getCurrentUser,
  Health
};
