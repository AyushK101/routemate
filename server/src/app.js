import e from "express";
import {globalErr} from "./utils/globalErrorCatch.js";
import cookieParser from 'cookie-parser'
import cors from 'cors'

const app = e()

app.use(e.json({
  limit: "16kb",
  strict: true
}))
app.use(e.urlencoded({extended: true}))
app.use(cookieParser())

const options = {
  origin: ['http://localhost:5173','http://localhost:4173'],
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