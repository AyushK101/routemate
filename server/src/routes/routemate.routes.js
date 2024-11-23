import { Router } from "express";
import { createRoute, deleteRoute, findRoute } from "../controllers/routemate.controllers.js";
import { authJwt } from "../middlewares/auth.middleware.js";

const router = Router()


router.route('/add').post(authJwt, createRoute)
router.route('/delete').post(authJwt, deleteRoute)
router.route('/find').get(authJwt, findRoute)

export default router