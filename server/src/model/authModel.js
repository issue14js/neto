import mongoose from "mongoose"



const userSchema = new mongoose.Schema({
    name:{type:String},
    username:{type:String, required:true, unique:true},
    password:{type:String, required:true,select: false},
    avatar: {
    type: String,
    default: "https://i.pinimg.com/736x/b8/d4/9b/b8d49b88ebb79c9187d82cc8f0fe4e3a.jpg"
},
    timestamp:{type:Date, default:Date.now}
})

const userModel = mongoose.model("User", userSchema)

export default userModel