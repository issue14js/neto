import Router from "express";
import { registerUser,loginUser,updatedUser, logoutUser} from "../controller/authController.js";
import authMiddilare from "../middilware/authMiddilware.js";



const router = Router()

router.post("/register",registerUser)
router.get("/login",loginUser)
router.put("/update",updatedUser)
router.post("/logout",authMiddilare,logoutUser)

export default router