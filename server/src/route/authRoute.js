import Router from "express";
import { registerUser,loginUser,updatedUser, profile, } from "../controller/authController.js";
import authMiddilare from "../middilware/authMiddilware.js";



const router = Router()

router.post("/register",registerUser)
router.post("/login", (req, res, next) => {
    console.log("ROUTE BODY:", req.body);
    next();
}, loginUser);
router.put("/update",updatedUser)
router.get("/profile",authMiddilare,profile)


export default router