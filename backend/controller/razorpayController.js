import express from "express";
import mongoose from "mongoose";
import Razorpay from 'razorpay'
import dotenv from 'dotenv'
dotenv.config()


  
export const razorpayPayment= async (req, res) => {
    const { amount, currency } = req.body;
    console.log("Payment initiated")
    try {
      // const order = await razorpay.orders.create({
      //   amount: amount * 100,  
      //   currency: currency,
      //   receipt: 'order_rcptid_11'
      // });
      // res.json({ order });
      res.json({"msg":"Done"})
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
};