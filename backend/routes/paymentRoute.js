import express from "express"
import { razorpayPayment } from "../controller/razorpayController.js"
const paymentRouter=express.Router()

paymentRouter.post('/createorder',razorpayPayment)
export default paymentRouter
