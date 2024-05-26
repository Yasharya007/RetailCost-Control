import mongoose from "mongoose";


const TransectionSchema=new mongoose.Schema(
    {
        user:{
            type:mongoose.Types.ObjectId,
            ref:"User",
            required:true,
        },
        tnxId:{
            type:String,
            required:true,
        },
        cost:{
            type:Number,
            required:true,
        },
        products:[
            {
                type:mongoose.Types.ObjectId,
                ref:"Product"
            }
        ],
        customerName:{
            type:String,
            required:true,
        },
        customerPhone:{
            type:String,
            required:true,
        },
        customerCountry:{
            type:String,
            required:true,
        },
        customerEmail:{
            type:String,
            required:true,
        },
        customerOccupation:{
            type:String,
            required:true,
        }
    },
    {timestamps:true}
)

const Transection=mongoose.model("Transection",TransectionSchema);

export default Transection