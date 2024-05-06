import mongoose from "mongoose";


const TransectionSchema=new mongoose.Schema(
    {
        userId:{
            type:mongoose.Types.ObjectId,
            ref:"User",
            required:true,
        },
        cost:{
            type:String,
            required:true,
        },
        products:[
            {
                type:mongoose.Types.ObjectId,
                ref:"Product"
            }
        ]
    },
    {timestamps:true}
)

const Transection=mongoose.model("Transection",TransectionSchema);

export default Transection