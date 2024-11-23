import { Router} from "express";
import { deleteUser, Login, Logout, Signup } from "../controllers/user.controllers.js";

const router = Router()


router.route('/signup').post(Signup)
router.route('/login').post(Login)
router.route('/logout').post(Logout)
router.route('/delete').post(deleteUser)



export default router
