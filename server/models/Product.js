import mongoose from "mongoose";


const ProductSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        userId:{
            type:mongoose.Types.ObjectId,
            ref:"User",
            required:true,
        },
        price:{
            type:Number,
            required:true,
        },
        description:{
            type:String,
            required:true,
        },
        category:{
            type:String,
        },
        supply:{
            type:Number,
        },
    },
    {timestamps:true}
)

const Product=mongoose.model("Product",ProductSchema);

export default Product