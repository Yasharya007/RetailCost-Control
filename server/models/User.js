import mongoose from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const UserSchema=new mongoose.Schema(
    {
        name:{
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
        transactions:{
            type:Array,
        },
        avatar:{
            type:String,
        },
        role:{
            type:String,
            enum:["user","admin","superadmin"],
            default:"admin"
        },
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
            fullname:this.fullname
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
            fullname:this.fullname
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn:process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}
const User=mongoose.model("User",UserSchema);

export default User