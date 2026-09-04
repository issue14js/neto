import Router from "express";
import { registerUser,loginUser,updatedUser} from "../controller/authController.js";



const router = Router()

router.post("/register",registerUser)
router.get("/login",loginUser)
router.post("/update",updatedUser)

export default router