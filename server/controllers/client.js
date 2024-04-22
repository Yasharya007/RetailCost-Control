import Product from "../models/Product.js";
import ProductStat from "../models/ProductStat.js";
import User from "../models/User.js";
import Transection from "../models/Transection.js";

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

        res.status(200).json(productWithStats);
    }catch(error){
        res.status(404).json({message: error.message})
    }
}

export const getCustomers=async(req,res)=>{
    try {
          const customers=await User.find({
            role:"user"
          }).select("-password")
          res.status(200).json(customers);
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
                [sortParsed.field]:sortParsed.sort="asc"?1:-1
            }
            return sortFormat
        }
        const sortFormat=sort?generateSort():{};
        const transactions=await Transection.find({
            $or:[
                {cost :{$regex:new RegExp(search,"i")}},
                {userId:{$regex:new RegExp(search,"i")}}
            ]
        })
        .sort(sortFormat).skip(page*pageSize).limit(pageSize);

        const total=await Transection.countDocuments({
            name:{$regex:search,$options:"i"}
        });

        res.status(200).json({
            transactions,
            total,
        });
        
    } catch (error) {
        res.status(404).json({message: error.message})

    }
}