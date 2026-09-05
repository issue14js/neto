import mongoose from "mongoose"
import userModel from "../model/authModel.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"


async function registerUser(req,res){
    try{
        const {username,password,name} = req.body
        const user = await userModel.findOne({username}).select("+password")
        if(user){
            return res.status(400).json({message:"user already exists with this username"})
        }
        const haspass = await bcrypt.hash(password,10)
        const newUser = await userModel.create({username,password:haspass,name})
        const token = jwt.sign({id:newUser._id}, process.env.JWT_SECRET,{expiresIn:"5h"})
        res.cookie("token",token,{httpOnly:true})
        res.status(201).json({message:"user created successfully",newUser})
    } catch(err){
        console.log("error in register controller",err)
    }
}

async function loginUser(req,res){
    try{
        const {username,password}=req.body
        const user = await userModel.findOne({username}).select("+password")
        if(!user){
            return res.status(400).json({message:"user not Avelable with this username or password"})
        }
        const comparePass = await bcrypt.compare(password,user.password)
        if(!comparePass){
            return res.status(400).json({message:"user not Avelable with this username or password"})
        }
        const token = jwt.sign({id:user._id}, process.env.JWT_SECRET,{expiresIn:"5h"})
        res.cookie("token",token,{httpOnly:true})
        res.status(201).json({
            message:"user login succssfully",
            user
        })
    } catch(err){
        console.log("Error in login controller",err)
    }
}

async function updatedUser(req,res){
    try{
        const {username,password,name,avatar}= req.body
        const user = await userModel.findOne({username}).select("+password")
        if(!user){
            return res.status(404).json({message:"user not found"})
        }
        const updatedUser = await userModel.findByIdAndUpdate(
            user._id,
            {
                password,
                name,
                avatar
            },{new:true}
        )
        return res.status(200).json({
            message:"user updated succsessfully",
            user: updatedUser
        })

    } catch(err){
       return res.status(500).json({
            message:"Error in user update controller", err
        })
    }
}
async function logoutUser(req,res) {
    try{
        res.clearCookie("token");
       return res.status(200).json({message:"User Logout succsefully"})
    }catch(err){
        return res.status(500).json({message:"Error in logout Controller",error:err.message})
    }
    
}
export {registerUser,loginUser,updatedUser,logoutUser}