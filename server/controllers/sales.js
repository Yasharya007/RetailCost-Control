import OverallStat from "../models/OverallStat.js";

export const getSales=async(req,res)=>{
    try {
        const OverallStates=await OverallStat.find({userId:req.user._id});
        res.status(200).json({stat:OverallStates[0],user:req.user});
    } catch (error) {
        res.status(404).json({message:error.message});
    }
}