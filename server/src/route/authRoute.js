import Router from "express";
import { registerUser,loginUser,updatedUser, profile, } from "../controller/authController.js";
import authMiddilare from "../middilware/authMiddilware.js";



const router = Router()

router.post("/register",registerUser)
router.post("/login",loginUser);
router.put("/update",updatedUser)
router.get("/profile",authMiddilare,profile)


export default router