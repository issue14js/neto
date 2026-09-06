import express from "express";
import authRoute from "./route/authRoute.js"
import cookieParser from "cookie-parser";
import cors from "cors";





const app = express()
app.use(express.json())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use(cookieParser());
app.use("/api/auth",authRoute)
cors



export default app