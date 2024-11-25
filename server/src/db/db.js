import mongoose from "mongoose";
import ApiError from "../utils/ApiError.js";


async function dbConnect() {
  const URI = process.env.MONGO_URI
  if(URI == undefined)
    throw new ApiError(500,"DB URI is invalid");
  try {
    const response = await mongoose.connect(URI)
    console.log("DB connected: ",response.connection.host)
  } catch (error) {
    if (error instanceof Error) {
      throw new ApiError(500, "Error while connecting to DB", error);
  } else {
      throw new ApiError(500, "Unknown error occurred while connecting to DB");
  }
}
}

export default dbConnect