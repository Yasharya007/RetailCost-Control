import User from "../models/User.js";
import OverallStat from "../models/OverallStat.js";
import Transection from "../models/Transection.js";


export const getUser=async(req,res)=>{
    try{
        const {id}=req.params;
        const user=await User.findById(id);
        res.status(200).json(user);
    }catch(error){
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