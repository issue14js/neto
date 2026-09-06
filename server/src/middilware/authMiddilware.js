import userModel from "../model/authModel.js";
import jwt from "jsonwebtoken";

async function authMiddilare(req, res, next) {
    try {
        const { token } = req.cookies;

        if (!token) {
            return res.status(401).json({
                message: "Token not found"
            });
        }

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        const user = await userModel.findById(decoded.id);

        if (!user) {
            return res.status(401).json({
                message: "User not found"
            });
        }

        req.user = user;

        next();

    } catch (err) {
        return res.status(401).json({
            message: "Invalid or expired token"
        });
    }
}

export default authMiddilare;