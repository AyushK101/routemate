import z, { string, ZodString } from 'zod'


const userSchema = z.object({
  username: z.string().min(4,{message: "minimum 4 character required"}),
  email: z.string().email({message: "invalid email format"}),
  password: z.string().min(4,{message: "password must be at least 4 char"})
})

const loginSchema = z.object({
  email: z.string().email({message: "invalid email format"}),
  password: z.string().min(4,{message: "password must be at least 4 char"})
})


const routeSchema = z.object({
  name: z.string().min(4, {message: "name can't be less than 4 char"}),
  source: z.string(),
  destination: z.string(),
  gender: z.enum(["male","female"]),
  travelDate: z.string().date(), //2024-12-01
  year: z.enum(["1","2","3","4"]),
  mode: z.enum(["car","bus","train","bike"])
})


const findRouteSchema = z.object({
  source: z.string(),
  destination: z.string(),
  travelDate: z.string().date(),
  gender: z.enum(["male","female","all"]),
  mode: z.enum(["car","bus","train","bike","all"]),
  year: z.enum(["1","2","3","4","all"])
})

export {
  findRouteSchema,
  routeSchema,
  userSchema,
  loginSchema
} 

