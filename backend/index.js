import express from "express";
import mongoose from "mongoose";
import Razorpay from 'razorpay'
import cors from "cors";
import dotenv from 'dotenv'
import productRouter from "./routes/productRoute.js";
import authRouter from "./routes/authRoute.js";
import paymentRouter from "./routes/paymentRoute.js";
dotenv.config()



const app = express();
app.use(express.json());
app.use(cors());

app.use('/auth',authRouter)
app.use('/shop',productRouter)
app.use('/payment',paymentRouter)
app.get('/',(req,res)=>{
    console.log("Working good")
    res.send(200)
})



app.listen(3001, () => {
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>console.log(`MongoDB connected to atlas`));
    console.log("Server listining on http://127.0.0.1:3001");

});