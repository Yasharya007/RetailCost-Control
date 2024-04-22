import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import helmet from "helmet"
import morgan from "morgan"
import clientRoutes from "./routes/client.js"
import generalRoutes from "./routes/general.js"
import managementRoutes from "./routes/management.js"
import salesRoutes from "./routes/sales.js"

//Data imports
import User from "./models/User.js"
import Product from "./models/Product.js"
import ProductStat from "./models/ProductStat.js"
import Transection from "./models/Transection.js"
import { dataUser,dataProduct,dataProductStat,dataTransaction} from "./data/index.js"


// CONFIGURATION
dotenv.config();
const app=express();
app.use(express.json())
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}));
app.use(morgan("common"))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());

// ROUTES
app.use("/client",clientRoutes);
app.use("/general",generalRoutes);
app.use("/management",managementRoutes);
app.use("/sales",salesRoutes);

// MONGOOSE SETUP

//Connect database function
const connectDB=async()=>{
    try{
        const connectionInstance=await mongoose.connect(process.env.MONGO_URL)
        console.log(`MongoDB connected!, DB HOST : ${connectionInstance.connection.host}`)
    }catch(error){
        console.log("MONGODB connection error",error);
        process.exit(1);
    }
}

// starting server
const PORT=process.env.PORT || 8000
connectDB()
.then(()=>{
    app.listen(PORT,()=>console.log(`Server has started on Port: ${PORT}`))

    // User.insertMany(dataUser);
    // Product.insertMany(dataProduct);
    // ProductStat.insertMany(dataProductStat);
    // Transection.insertMany(dataTransaction);
}).catch((error)=>console.log(`${error} did not connect`))