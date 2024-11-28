import e from "express";
import {globalErr} from "./utils/globalErrorCatch.js";
import cookieParser from 'cookie-parser'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
const app = e()

app.use(e.json({
  limit: "16kb",
  strict: true
}))
app.use(e.urlencoded({extended: true}))
app.use(cookieParser())

const CLIENT_URI = process.env.CLIENT_URI;

console.log(CLIENT_URI)
const options = {
  origin: ['http://localhost:5173','http://localhost:4173',CLIENT_URI],
  credentials: true,
}
// app.options('*', cors(corsOptions));
app.use(cors(options))

import userRouter from './routes/user.routes.js'
import rmRouter from './routes/routemate.routes.js'

app.use('/user',userRouter)
app.use('/rm',rmRouter)



app.use(globalErr)

export default app