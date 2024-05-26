import User from "../models/User.js";
import OverallStat from "../models/OverallStat.js";
import Transection from "../models/Transection.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import jwt from "jsonwebtoken"
import cookieParser from "cookie-parser";
const generateAccessAndRefreshTokens=async(userId)=>{
    try{
        const user=await User.findById(userId);
        const accessToken=user.generateAccessToken();
        const refreshToken=user.generateRefreshToken();
        user.refreshToken=refreshToken;
        await user.save({validateBeforeSave:false});
        return {accessToken,refreshToken};
    }catch(error){
        throw new Error("Something went wrong while generating access and refresh tokens");
    }
}

export const getUser=async(req,res)=>{
    try{
        res.status(200).json(req.user);
    }catch(error){
        res.status(404).json({message: error.message})
    }
}

//////REGISTER USER

export const registerUser=async(req,res)=>{
    try {
        // get user details fromm frontend
    const {username,email,password}=req.body;
    console.log(req.body);
    // console.log(name);
    if (
        !username || !email || !password
    ) {
        throw new Error("All fields are required");
    }

    const existedUser=await User.findOne({
        $or:[{email}]
    })
    if(existedUser){throw new Error("User exist");}

    const avatarLocalPath=req.files?.avatar[0]?.path;
    console.log(avatarLocalPath)
    if(!avatarLocalPath)throw new Error("Avatar file is req");

    // upload them to cloudinary
    const avatar=await uploadOnCloudinary(avatarLocalPath);
    console.log(avatar)
    const user=await User.create({
        username,
        avatar:avatar.url,
        email,
        password
     })

     const createdUser= await User.findById(user._id).select(
        "-password -refreshToken"
    );

    // check for user creation
    if(!createdUser){
        throw new Error("Something went wrong while creating user")
    }
    const OverallStatuser=await OverallStat.create({
        userId:createdUser._id,
        totalCustomers:0,
        yearlySalesTotal:0,
        yearlyTotalSoldUnits:0,
        year:2024,
        monthlyData:[],
        dailyData:[],
        salesByCategory:{
            shoes:0,
            clothing:0,
            accessories:0,
            misc:0,
        }
    })
    if(!OverallStatuser){
        throw new Error("Something went wrong while creating Overallstat of user");
    }
    res.status(200).json({
        message:"User created successfully",
        user:createdUser
    })

    } catch (error) {
        res.status(404).json({message: error.message})
    }
}


////LOGIN USER

export const loginUser=async(req,res)=>{
    try {

        //Take input
    const {email,username,password}=req.body
    console.log(email);
    if(!(username || email)){
        throw new Error("Username or email is required")
    }

    //Find the User
    const user = await User.findOne({
        email:email
    })

    if(!user){
        throw new Error("User does not exist")
    }

    //check Password
    const isPasswordValid=await user.isPasswordCorrect(password)
    if(!isPasswordValid){
        throw new Error("Incorrect Password");
    }

    //access token and refresh token
    const{accessToken,refreshToken}=await generateAccessAndRefreshTokens(user._id);
    if(!accessToken)throw new Error("token could not generated")
        // console.log(accessToken);
    const loggdinUser=await User.findById(user._id).select("-password -refreshToken");
    //send cookie
    const options={
        httpOnly:true,
        secure:true
    }
    return res
    .status(200)
    .cookie("accessToken",accessToken,options)
    .cookie("refreshToken",refreshToken,options)
    .json(
            {
                message:"User logged in Successfully",
                user: loggdinUser,
            }
        )

    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const logoutUser=async(req,res)=>{
    try {
        // console.log("sjdk");
        if(req.user==="")throw new Error("Invalid token access before logout controller")
        await User.findByIdAndUpdate(
            req.user._id,
            {
                $set:{
                    refreshToken:undefined
                }
            },
            {
                new:true
            }
        )
        const options={
            httpOnly:true,
            secure:true
        }
        return res
        .status(200)
        .clearCookie("accessToken",options)
        .clearCookie("refreshToken",options)
        .json({
            message:"Logout successful"
        })

    } catch (error) {
        console.log("sjdk");
        res.status(404).json({message: error.message})
    }
}

export const getDashboardStats=async(req,res)=>{
    try {
        const cmonth="November";
        const cyear=2024;
        const cday="2024-11-15"
        // if(req.user===""){
        //     throw new Error("login pls")
        // }
        const transactions=await Transection.find({user:req.user._id}).limit(50).sort({createdOn:-1});

        const overallStat=await OverallStat.find({userId:req.user._id})

        const {
            totalCustomers,
            yearlyTotalSoldUnits,
            yearlySalesTotal,
            monthlyData,
            salesByCategory
        }=overallStat[0]
        
        let thismonthstat=overallStat[0].monthlyData.find(({month})=>{
            return month===cmonth;
        })
        if(!thismonthstat){
            thismonthstat={
                month:cmonth,
                totalSales:0,
                totalUnits:0,
                }
        }
        let todaystat=overallStat[0].dailyData.find(({date})=>{
            return date===cday;
        })
        if(!todaystat){
            todaystat={
             date: cday, totalSales:0, totalUnits:0
            }
        }

        res.status(200).json({
            totalCustomers,
            yearlyTotalSoldUnits,
            yearlySalesTotal,
            monthlyData,
            salesByCategory,
            thismonthstat,
            todaystat,
            transactions,
            user:req.user
        })

    } catch (error) {
        res.status(404).json({message:"pta nhi",user:req.user})
    }
}