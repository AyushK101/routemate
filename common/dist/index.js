"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginSchema = exports.userSchema = exports.routeSchema = exports.findRouteSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const userSchema = zod_1.default.object({
    username: zod_1.default.string().min(4, { message: "minimum 4 character required" }),
    email: zod_1.default.string().email({ message: "invalid email format" }),
    password: zod_1.default.string().min(4, { message: "password must be at least 4 char" })
});
exports.userSchema = userSchema;
const loginSchema = zod_1.default.object({
    email: zod_1.default.string().email({ message: "invalid email format" }),
    password: zod_1.default.string().min(4, { message: "password must be at least 4 char" })
});
exports.loginSchema = loginSchema;
const routeSchema = zod_1.default.object({
    name: zod_1.default.string().min(4, { message: "name can't be less than 4 char" }),
    source: zod_1.default.string(),
    destination: zod_1.default.string(),
    gender: zod_1.default.enum(["male", "female"]),
    travelDate: zod_1.default.string().date(), //2024-12-01
    year: zod_1.default.enum(["1", "2", "3", "4"]),
    mode: zod_1.default.enum(["car", "bus", "train", "bike"])
});
exports.routeSchema = routeSchema;
const findRouteSchema = zod_1.default.object({
    source: zod_1.default.string(),
    destination: zod_1.default.string(),
    travelDate: zod_1.default.string().date(),
    gender: zod_1.default.enum(["male", "female", "all"]),
    mode: zod_1.default.enum(["car", "bus", "train", "bike", "all"]),
    year: zod_1.default.enum(["1", "2", "3", "4", "all"])
});
exports.findRouteSchema = findRouteSchema;
