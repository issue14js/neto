import userModel from "../model/authModel.js"
import jwt from 'jsonwebtoken'
 async function authMiddilare(req,res,next) {
   try{
    const {token}=req.cookies
    if(!token){
        return res.status(204).json({message:"Token not found"})
    }
    const decoded = jwt.verify(token,process.env.JWT_SECRET)
    const user = await userModel.findById(decoded.userId)
    req.user=user
    next()
    
   } catch(err){
    return res.status(500).json({message:"Error in authMiddilwaare",err})
   } 
 }

 export default authMiddilare