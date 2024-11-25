import { Router } from "express";
import { contactEmail, createRoute, deleteRoute, findRoute, getAllRoute } from "../controllers/routemate.controllers.js";
import { authJwt } from "../middlewares/auth.middleware.js";

const router = Router()


router.route('/add').post(authJwt, createRoute)
router.route('/delete').post(authJwt, deleteRoute)
router.route('/find').get(authJwt, findRoute)
router.route('/all').get(authJwt, getAllRoute )
router.route('/contact').post(authJwt, contactEmail)

export default router