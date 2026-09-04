import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()


async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("connected to db")
    } catch(err){
        console.log("error in connecting to db",err)
    }
}

export default connectDB