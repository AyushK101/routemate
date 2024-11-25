import { Router} from "express";
import { deleteUser, Login, Logout, Signup, getCurrentUser } from "../controllers/user.controllers.js";
import { authJwt } from "../middlewares/auth.middleware.js";

const router = Router()


router.route('/signup').post(Signup)
router.route('/login').post(Login)
router.route('/logout').post(Logout)
router.route('/delete').post(deleteUser)
router.route('/get').get( authJwt, getCurrentUser)




export default router
