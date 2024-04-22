import mongoose from "mongoose";


const TransectionSchema=new mongoose.Schema(
    {
        userId:{
            type:String,
            required:true,
        },
        cost:{
            type:String,
            required:true,
        },
        products:{
            type:[mongoose.Types.ObjectId],
            of:Number,
        },
    },
    {timestamps:true}
)

const Transection=mongoose.model("Transection",TransectionSchema);

export default Transection