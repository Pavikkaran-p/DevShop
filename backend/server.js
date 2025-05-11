import express from "express";
import mongoose from "mongoose";
import Razorpay from 'razorpay'
import cors from "cors";
import productRouter from "./routes/productRoute.js";
import authRouter from "./routes/authRoute.js";
import paymentRouter from "./routes/paymentRoute.js";
import dotenv from 'dotenv'
dotenv.config()


const app = express();
app.use(express.json());
app.use(cors());
const port=process.env.PORT || 3001
app.use('/auth',authRouter)
app.use('/shop',productRouter)
app.use('/payment',paymentRouter)
app.get('/',(req,res)=>{
    console.log("Working good")
    res.sendStatus(200)
})



app.listen(port, () => {
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>console.log(`MongoDB connected to atlas`));
    console.log(`Server listining on port:${port}`);

});