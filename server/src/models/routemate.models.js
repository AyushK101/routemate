import mongoose from "mongoose";

const routemateSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  name: {
    type: String,
    required: true
  },
  source: {
    type: String,
    required: true
  },
  destination: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  travelDate: {
    type: Date,
    required: true
  },
  year: {
    type: String,
    enum: [1,2,3,4],
    default: 1
  },
  mode: {
    type: String,
    enum: ["car","bus","train","bike"],
  }
},{timestamps: true})

export const RouteMate = mongoose.model("RouteMate",routemateSchema)

