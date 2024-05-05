import mongoose from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import dotenv from "dotenv"
dotenv.config({
  path:'./.env'
})
const UserSchema=new mongoose.Schema(
    {
        username:{
            type:String,
            required:true,
            min:2,
            max:100,
        },
        email:{
            type:String,
            required:true,
            max:50,
            unique:true
        },
        password:{
            type:String,
            required:true,
        },
        city:{
            type:String,
        },
        state:{
            type:String,
        },
        country:{
            type:String,
        },
        occupation:{
            type:String,
        },
        phoneNumber:{
            type:String,
        },
        avatar:{
            type:String,
        },
        refreshToken:{
            type:String
        }
    },
    {timestamps:true}
)

UserSchema.pre("save",async function(next){
    if(!this.isModified("password"))return next;

    this.password=await bcrypt.hash(this.password,10)
    next()
})

UserSchema.methods.isPasswordCorrect=async function(password){
    return await bcrypt.compare(password,this.password)
}

UserSchema.methods.generateAccessToken=function(){
    return jwt.sign(
        {
            _id:this._id,
            email:this.email,
            username:this.username,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn:process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
UserSchema.methods.generateRefreshToken=function(){
    return jwt.sign(
        {
            _id:this._id,
            email:this.email,
            username:this.username,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn:process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}
const User=mongoose.model("User",UserSchema);

export default User