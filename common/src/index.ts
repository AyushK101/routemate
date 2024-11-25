import z from 'zod'


const userSchema = z.object({
  username: z.string().min(4,{message: "minimum 4 character required"}),
  email: z.string().email({message: "invalid email format"}),
  password: z.string().min(4,{message: "password must be at least 4 char"})
})

type userSchemaType = z.infer<typeof userSchema>

const loginSchema = z.object({
  email: z.string().email({message: "invalid email format"}),
  password: z.string().min(4,{message: "password must be at least 4 char"})
})

type loginSchemaType = z.infer<typeof loginSchema>

const routeSchema = z.object({
  name: z.string().min(4, {message: "name can't be less than 4 char"}),
  source: z.string().min(1,{message: 'source is required'}),
  destination: z.string().min(1,{message: 'destination is required'}),
  gender: z.enum(["male","female"]),
  travelDate: z.string().date(), //2024-12-01
  year: z.enum(["1","2","3","4"]),
  mode: z.enum(["car","bus","train","bike"])
})

type routeSchemaType = z.infer<typeof routeSchema>

const findRouteSchema = z.object({
  source: z.string().min(1,{message: 'source is required'}),
  destination: z.string().min(1,{message: 'destination is required'}),
  travelDate: z.string().date(),
  gender: z.enum(["male","female","all"]),
  mode: z.enum(["car","bus","train","bike","all"]),
  year: z.enum(["1","2","3","4","all"])
})

type findRouteSchemaType = z.infer<typeof findRouteSchema>

export {
  findRouteSchema,
  routeSchema,
  userSchema,
  loginSchema,
} 

export type {
  userSchemaType,
  findRouteSchemaType,
  loginSchemaType,
  routeSchemaType
}

