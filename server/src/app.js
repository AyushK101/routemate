import e from "express";
import {globalErr} from "./utils/globalErrorCatch.js";
import cookieParser from 'cookie-parser'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()

const app = e()

// app.use( (req,res,next)=>{
//   res.setHeader('Cross-Origin-Opener-Policy', 'unsafe-none');
//   res.setHeader('Cross-Origin-Embedder-Policy', 'unsafe-none');
//   next()
// })

app.use(e.json({
  limit: "16kb",
  strict: true
}))
app.use(e.urlencoded({extended: true}))
app.use(cookieParser())

const CLIENT_URI = process.env.CLIENT_URI;
console.log(CLIENT_URI)

// app.use((req, res, next) => {
//   // Set Cross-Origin-Opener-Policy (COOP)
//   res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');

//   // Set Cross-Origin-Embedder-Policy (COEP)
//   res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');

//   // Other necessary headers like CORS
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
//   res.setHeader('Access-Control-Allow-Credentials', 'true');
//   next(); 
// });

const options = {
  origin: CLIENT_URI,
  methods: ["GET","PUT","POST","DELETE"],
  // allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}
// app.options('*', cors(corsOptions));
app.use(cors(options))

import userRouter from './routes/user.routes.js'
import rmRouter from './routes/routemate.routes.js'

// app.get('/',(req,res)=>{
//   res.status(200).json({"message": "user checked"});
// })

app.use('/user',userRouter)
app.use('/rm',rmRouter)



app.use(globalErr)

export default app
