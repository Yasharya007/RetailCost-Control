import Product from "../models/Product.js";
import ProductStat from "../models/ProductStat.js";
import User from "../models/User.js";
import Transection from "../models/Transection.js";
import getCountryIso3 from "country-iso-2-to-3";
export const getProducts=async(req,res)=>{
    try{
        const products=await Product.find();

        const productWithStats=await Promise.all(
            products.map(async(product)=>{
                const stats=await ProductStat.find({
                    productId:product._id
                })
                return {
                    ...product._doc,
                    stats,
                }
            })
        )

        res.status(200).json({productWithStats,user:req.user});
    }catch(error){
        res.status(404).json({message: error.message})
    }
}

export const getCustomers=async(req,res)=>{
    try {
          const customers=await User.find().select("-password")
          res.status(200).json({customers,user:req.user});
    } catch (error) {
        res.status(404).json({message: error.message})

    }
}

export const getTransactions=async(req,res)=>{
    try {
        //sort template :{ "field":"userId","sort":"desc"}
        const {page=1,pageSize=20,sort=null,search=""}=req.body;
        
        const generateSort=()=>{
            // const sortParsed=JSON.parse(sort);
            const sortParsed=sort
            const sortFormat={
                [sortParsed.field]:sortParsed.sort==="asc"?1:-1
            }
            return sortFormat
        }
        const sortFormat=sort?generateSort():{};
        const transactions=await Transection.find({
            $or:[
                {cost :{$regex:new RegExp(search,"i")}},
                // {userId:{$regex:new RegExp(search,"i")}}
            ]
        })
        .sort(sortFormat).skip(page*pageSize).limit(pageSize);
        const total=await Transection.countDocuments({
            name:{$regex:search,$options:"i"}
        });

        res.status(200).json({
            transactions,
            total,
            user:req.user
        });
        
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const getGeography=async(req,res)=>{
    try{
        const users=await User.find();
        const loactions=users.reduce((acc,{country})=>{
            const cntcode=getCountryIso3(country);
            if(!acc[cntcode]){
                acc[cntcode]=0;
            }
            acc[cntcode]++;
            return acc;
        },{})

        const finalLocations=Object.entries(loactions).map(
            ([country,count])=>{
                return {id:country,value:count};
            }
        );

        res.status(200).json({
            finalLocations,
            user:req.user
        });

    }catch(error){
        res.status(404).json({message: error.message})
    }
}