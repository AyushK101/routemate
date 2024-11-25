import z from 'zod';
declare const userSchema: z.ZodObject<{
    username: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    username: string;
    email: string;
    password: string;
}, {
    username: string;
    email: string;
    password: string;
}>;
declare const loginSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
type loginSchemaType = z.infer<typeof loginSchema>;
declare const routeSchema: z.ZodObject<{
    name: z.ZodString;
    source: z.ZodString;
    destination: z.ZodString;
    gender: z.ZodEnum<["male", "female"]>;
    travelDate: z.ZodString;
    year: z.ZodEnum<["1", "2", "3", "4"]>;
    mode: z.ZodEnum<["car", "bus", "train", "bike"]>;
}, "strip", z.ZodTypeAny, {
    name: string;
    source: string;
    destination: string;
    gender: "male" | "female";
    travelDate: string;
    year: "1" | "2" | "3" | "4";
    mode: "car" | "bus" | "train" | "bike";
}, {
    name: string;
    source: string;
    destination: string;
    gender: "male" | "female";
    travelDate: string;
    year: "1" | "2" | "3" | "4";
    mode: "car" | "bus" | "train" | "bike";
}>;
type routeSchemaType = z.infer<typeof routeSchema>;
declare const findRouteSchema: z.ZodObject<{
    source: z.ZodString;
    destination: z.ZodString;
    travelDate: z.ZodString;
    gender: z.ZodEnum<["male", "female", "all"]>;
    mode: z.ZodEnum<["car", "bus", "train", "bike", "all"]>;
    year: z.ZodEnum<["1", "2", "3", "4", "all"]>;
}, "strip", z.ZodTypeAny, {
    source: string;
    destination: string;
    gender: "male" | "female" | "all";
    travelDate: string;
    year: "1" | "2" | "3" | "4" | "all";
    mode: "car" | "bus" | "train" | "bike" | "all";
}, {
    source: string;
    destination: string;
    gender: "male" | "female" | "all";
    travelDate: string;
    year: "1" | "2" | "3" | "4" | "all";
    mode: "car" | "bus" | "train" | "bike" | "all";
}>;
type findRouteSchemaType = z.infer<typeof findRouteSchema>;
export { findRouteSchema, routeSchema, userSchema, loginSchema, findRouteSchemaType, loginSchemaType, routeSchemaType };
