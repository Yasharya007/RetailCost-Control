import User from "../models/User.js";
import OverallStat from "../models/OverallStat.js";
import Transection from "../models/Transection.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

export const getUser=async(req,res)=>{
    try{
        const {id}=req.params;
        const user=await User.findById(id);
        res.status(200).json(user);
    }catch(error){
        res.status(404).json({message: error.message})
    }
}

export const registerUser=async(req,res)=>{
    try {
        // get user details fromm frontend
    const {name,email,password}=req.body;
    console.log(req.body);
    // console.log(name);
    if (
        !name || !email || !password
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
        name,
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
    res.status(200).json({
        message:"User created successfully",
        user:createdUser
    })

    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const getDashboardStats=async(req,res)=>{
    try {
        const cmonth="November";
        const cyear=2021;
        const cday="2021-11-15"

        const transactions=await Transection.find().limit(50).sort({createdOn:-1});

        const overallStat=await OverallStat.find({year:cyear})

        const {
            totalCustomers,
            yearlyTotalSoldUnits,
            yearlySalesTotal,
            monthlyData,
            salesByCategory
        }=overallStat[0]

        const thismonthstat=overallStat[0].monthlyData.find(({month})=>{
            return month===cmonth;
        })

        const todaystat=overallStat[0].dailyData.find(({date})=>{
            return date===cday;
        })

        res.status(200).json({
            totalCustomers,
            yearlyTotalSoldUnits,
            yearlySalesTotal,
            monthlyData,
            salesByCategory,
            thismonthstat,
            todaystat,
            transactions
        })

    } catch (error) {
        res.status(404).json({message: error.message})
    }
}