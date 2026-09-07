import express from "express";
import authRoute from "./route/authRoute.js"
import noteRoute from "./route/noteRoute.js"
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
app.use("/api/note",noteRoute)
cors



export default app