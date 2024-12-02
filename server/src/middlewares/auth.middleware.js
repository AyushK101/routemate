import { User } from "../models/user.models.js";
import ApiError from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from 'jsonwebtoken'

const authJwt = asyncHandler(async (req,res,next)=>{
  try {
    const token =  req?.cookies?.appToken;
    if(!token)
      throw new ApiError(404,"token extraction failed")
    
    let  decode = jwt.verify(token,process.env.JWT_SECRET)
  
    const res = await User.findById(decode._id).select("-password")
  
    req.user = res;
    next()  
  } catch (error) {
    if(error?.['name'] == 'TokenExpiredError')
    throw new ApiError(404,error?.['message'],error)

    next(error)
  }
})

export {
  authJwt
}
