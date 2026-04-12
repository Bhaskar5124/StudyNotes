import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/keyConfig.js";

export const verifyTokenCookie = (req, res, next) => {
    // 1. Grab the token from req.cookies (made possible by cookie-parser)
    const token = req.cookies.token; 

    // 2. If no cookie exists, they aren't logged in
    if (!token) {
        return res.status(401).json({ message: "Access Denied: Log in required" });
    }

    try {
        // 3. Verify the token (No need to split "Bearer" anymore!)
        const verified = jwt.verify(token, JWT_SECRET);
        
        // 4. Attach user data to req
        req.user = verified;

        next();
    } catch (error) {
        res.status(403).json({ message: "Invalid or Expired Token" });
    }
};