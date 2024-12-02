import mongoose from "mongoose";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import ApiError from "../utils/ApiError.js";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  picture: {
    type: String,
  }
},{timestamps: true})



UserSchema.pre("save",async function (next) {
  try {
    if(!this?.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password,10)
    next()
  } catch (error) {
    throw new ApiError(500,"error in pre save bcrypt function",error)
  }
  
})

UserSchema.methods.isPasswordCorrect = async function (password) {
  try {
    return await bcrypt.compare(password,this.password)
  } catch (error) {
    throw new ApiError(500,"error in isPasswordCorrect",error)
  }
}
  
UserSchema.methods.generateToken  = function () {
  try {
    return jwt.sign({
      _id: this._id,
      email: this.email
    },process.env.JWT_SECRET,{expiresIn: process.env.JWT_EXPIRE})
  } catch (error) {
    throw new ApiError(500,"token generation failed",error)
  }
}

export const User = mongoose.model("User",UserSchema);