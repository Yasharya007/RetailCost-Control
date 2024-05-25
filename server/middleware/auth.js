import User from "../models/User.js";
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config({
  path:'./.env'
})

export const verifyJWT=async(req,res,next)=>{
    try {
        const token=req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ","");
        // console.log("cookie is ",req.cookies);
        
        if(!token){
            throw new Error("Unauthorized request");
        }
    
        const decodedToken=jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)
    
        const user=await User.findById(decodedToken?._id).select("-password -refreshToken")
        if(!user){
            throw new Error("User not found");
        }
    
        req.user=user;
        next();
    } catch (error) {
        req.user="";
        next();
    }
}