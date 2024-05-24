import mongoose from "mongoose";


const ProductStatSchema=new mongoose.Schema(
    {
        productId:{
            type:mongoose.Types.ObjectId,
            ref:"Product",
            required:true,
            //Reference of Product schema
        },
        yearlySalesTotal:{
            type:Number,
            required:true,
        },
        yearlyTotalSoldUnits:{
            type:Number,
            required:true,
        },
        year:{
            type:Number,
        },
        monthlyData:[
            {
                month:String,
                totalSales:Number,
                totalUnits:Number,
            }
        ],
        dailyData:[
            {
            date:String,
            totalSales:Number,
            totalUnits:Number,
            }
        ]
    },
    {timestamps:true}
)

const ProductStat=mongoose.model("ProductStat",ProductStatSchema);

export default ProductStat