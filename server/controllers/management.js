import User from "../models/User.js";
import Transection from "../models/Transection.js";
import Product from "../models/Product.js";
import ProductStat from "../models/ProductStat.js";
export const addTransaction=async(req,res)=>{
    try {

        const {customerName,customerPhone,customerCountry,customerEmail,customerOccupation,tnxId,cost,products=["663bcd0a6f1312be58e67b07"],date}=req.body;
        if(!customerName || !customerPhone || !customerCountry || !customerEmail || !customerOccupation || !tnxId || !cost){
            throw new Error("please provide all the required fields")
        }
        // const user=await User.find({_id:req.user._id});
        const user=req.user._id;
        if(!user)throw new Error("user details cannot be fetched");
        const transaction=await Transection.create({
            user,
            cost,
            products,
            customerCountry,
            customerEmail,
            customerName,
            customerPhone,
            customerOccupation,
            tnxId
        })
        if(!transaction)throw new Error("transaction could not be created")
            products.forEach(async(id)=>{
                const product=await Product.findOne({_id:id});
                if(!product)throw new Error("Product not found");
                let price=product.price;
                console.log(product.price);
                const productStat=await ProductStat.findOne({productId:id});
                if(!productStat)throw new Error("Productstat not found")
                productStat.yearlySalesTotal+=price;
                productStat.yearlyTotalSoldUnits+=1;
                const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                let monthpres=false;
                productStat.monthlyData.forEach((obj)=>{
                    if(obj.month===months[new Date(date).getMonth()]){
                        obj.totalSales+=price;
                        obj.totalUnits+=1;
                        monthpres=true;
                    }
                })
                if(!monthpres){
                    productStat.monthlyData.push({
                        month:months[new Date(date).getMonth()],
                        totalSales:price,
                        totalUnits:1
                    })
                }
                let datepres=false;
                productStat.dailyData.forEach((obj)=>{
                    if(obj.date===date){
                        obj.totalSales+=price;
                        obj.totalUnits+=1;
                        datepres=true;
                    }
                })
                if(!datepres){
                    productStat.dailyData.push({
                        date:date,
                        totalSales:price,
                        totalUnits:1
                    })
                } 
                await productStat.save({validateBeforeSave:false});

        });
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

export const addProduct=async(req,res)=>{
    try {
        console.log("Hi")
        const {name,price,description,category}=req.body;
        if(!name || !price || !description || !category){
            throw new Error("Al details are required of product");
        }

        const userId=req.user._id;
        if(!userId)throw new Error("user details cannot be fetched");
        const product=await Product.create({
            name,
            price,
            description,
            category,
            userId
        });
        const productStat=await ProductStat.create({
            productId:product._id,
            yearlySalesTotal:0,
            yearlyTotalSoldUnits:0,
            year:2024,
            monthlyData:[],
            dailyData:[]
        })
        res.status(200).json({
            status:'success',
            product,
            productStat
        })
        
    } catch (error) {
        res.status(400).json({
            status:'fail',
            message:error.message
        })
    }
}