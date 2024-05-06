import User from "../models/User.js";
import Transection from "../models/Transection.js";
import Product from "../models/Product.js";

export const addTransaction=async(req,res)=>{
    try {

        const {customerName,customerPhone,customerCountry,customerEmail,customerOccupation,tnxId,cost}=req.body;
        if(!customerName || !customerPhone || !customerCountry || !customerEmail || !customerOccupation || !tnxId || !cost){
            throw new Error("please provide all the required fields")
        }
        // const user=await User.find({_id:req.user._id});
        const user=req.user._id;
        if(!user)throw new Error("user details cannot be fetched");
        const transaction=await Transection.create({
            user,
            cost,
            customerCountry,
            customerEmail,
            customerName,
            customerPhone,
            customerOccupation,
            tnxId
        })
        if(!transaction)throw new Error("transaction could not be created")
        res.status(200).json({
            status:'success',
            data:transaction
        })
    } catch (error) {
        res.status(400).json({
            status:'fail',
            message:error.message
        })
    }
}