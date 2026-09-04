import mongoose from "mongoose"



const userSchema = new mongoose.Schema({
    name:{type:String},
    username:{type:String, required:true, unique:true},
    password:{type:String, required:true,select: false},
    avatar:{type:String},
    timestamp:{type:Date, default:Date.now}
})

const userModel = mongoose.model("User", userSchema)

export default userModel