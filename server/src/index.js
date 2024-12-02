import dotenv from 'dotenv'
dotenv.config()

import app from './app.js'
import dbConnect from './db/db.js'

await dbConnect().then( () => {
  const PORT = process.env.PORT || 6000

  app.listen(PORT,()=>{
    console.log(`server started listening on port: ${PORT}`)
  })
})

export {
  app
}

