import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import * as common from '../utils/types.js'
import { RouteMate } from "../models/routemate.models.js";
import { User } from "../models/user.models.js";
import mongoose from "mongoose";

const createRoute = asyncHandler( async (req,res)=>{
  const schemaValidation = common.routeSchema.safeParse(req?.body)
  if(!schemaValidation.success)
    throw new ApiError(404,"route schema validation failed",JSON.parse(schemaValidation.error.message))

  const {name, source, destination, gender, mode, travelDate, year } = schemaValidation.data

  const validDateCheck = (new Date(schemaValidation.data.travelDate).getTime()) < (new Date().getTime())
  if(validDateCheck)
    throw new ApiError(404,"Date can't be in past.")

  const userId = (req?.user?._id)

  if (!mongoose.Types.ObjectId.isValid(userId))
    throw new ApiError(404,"Invalid userId");

  // const sameNameCheck = await User.findById(userId);

  // if(name !=sameNameCheck.username)
  //   throw new ApiError(404,`Name don't matched with username. Will create ambiguity in DB.`,
  // {correctUser: sameNameCheck.username})


  // if(!mongoose.Types.ObjectId.isValid(sameNameCheck._id))
  //   throw new ApiError(404,"sameNameCheck._id is not valid ObjectId() bson")

  // const travelDateConversionToNewDate = new Date(travelDate).toISOString().split('T')[0]

  const existingRouteCheck = await RouteMate.findOne({
    userId: req.user._id,
    source,
    destination,
    // travelDate: travelDateConversionToNewDate
    travelDate
  })
  if(existingRouteCheck)
    throw new ApiError(404,"route already exists",existingRouteCheck)

  const routeCreate = await RouteMate.create({
    userId: req.user._id,
    name,source,destination,gender,
    // travelDate: travelDateConversionToNewDate,
    travelDate,
    year,mode
  })
  if(!routeCreate)
    throw new ApiError(500,"failed to create route , try again")

  return res
    .status(200)
    .json(new ApiResponse(200,"route created successfully",routeCreate))
})

const deleteRoute = asyncHandler( async (req,res)=>{
  const {_id:routeId} = req.body
  // console.log(routeId)
  if(!routeId && !mongoose.Types.ObjectId(routeId))
    throw new ApiError(404,"testing")

  const routeExistingCheck = await RouteMate.findOne({
    userId: req?.user?._id,
    _id: routeId
  })
  if(!routeExistingCheck)
    throw new ApiError(404,"route don't exist",routeExistingCheck)

  const deleteRouteResponse = await RouteMate.deleteOne({
    _id: routeId
  })
  if(!deleteRouteResponse)
    throw new ApiError(500,"failed to delete route , try again",deleteRouteResponse)

  return res
    .status(200)
    .json(new ApiResponse(200,"route deleted successfully",deleteRouteResponse))
})

const findRoute = asyncHandler( async (req,res)=>{
  const queries = req.query;
  const schemaValidation = common.findRouteSchema.safeParse(queries)
  // console.log("inside find route")
  if(!schemaValidation.success)
    throw new ApiError(404,"schema validation failed",JSON.parse(schemaValidation.error.message))

  let { source,destination,gender,mode,travelDate,year } = schemaValidation.data
  

  
  //? find() will simply ignore undefined values
  const query = {
    destination,source,travelDate
  }

  if(gender != 'all')
    query.gender = gender

  if(year != 'all')
    query.year = year

  if(mode != 'all')
    query.mode = mode

  const findRoute = await RouteMate.find(query)

  // const omitSelfRoutes = findRoute.filter(route => route._id != req?.user?._id)

  return res
    .status(200)
    .json(new ApiResponse(200,"route(s) found successfully",findRoute))
})

const getAllRoute = asyncHandler( async (req,res) => {
  const userId = req?.user?._id;
  // console.log(req.user)
  if(!userId)
    throw new ApiError(404,"userId is invalid",userId);
  
  const userRoutes = await RouteMate.find({userId});
  

  res.status(200).json(new ApiResponse(200,"user post fetched successfully",userRoutes))
})

const contactEmail = asyncHandler ( async (req,res) => {
  // const senderEmail = req?.user?.email
  const {userId} = req?.body || {}
  // console.log(userId)
  if(!userId)
    throw new ApiError(404,"userId is invalid",userId);
  const receiverCheck = await User.findOne({_id: userId})
  if(!receiverCheck)
    throw new ApiError(404,"user with userId don't exist",receiverCheck)

  const email = receiverCheck.email;

  return res
    .status(200)
    .json(new ApiResponse(200,"valid email sending request",email));
})  

export {
  createRoute,
  deleteRoute,
  findRoute,
  getAllRoute,
  contactEmail
}
