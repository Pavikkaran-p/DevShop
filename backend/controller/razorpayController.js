import express from "express";
import mongoose from "mongoose";
import Razorpay from 'razorpay'
import dotenv from 'dotenv'
dotenv.config()

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});
  
export const razorpayPayment= async (req, res) => {
    const { amount, currency } = req.body;
    console.log("Payment initiated")
    try {
      const order = await razorpay.orders.create({
        amount: amount * 100,  
        currency: currency,
        receipt: 'order_rcptid_11'
      });
      res.json({ order });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
};