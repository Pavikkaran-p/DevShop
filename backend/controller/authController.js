import express from "express";
import jwt from 'jsonwebtoken';
import { FormDataModel } from "../models/FormData.js";
import dotenv from 'dotenv'
dotenv.config()

const SECRET_KEY = process.env.JWT_SECRET_KEY;
console.log(SECRET_KEY)
export const register = async (req, res) => {
  const { email, password } = req.body;
  
  try {
    FormDataModel.findOne({ email: email })
    .then(user => {
      if (user) {
        res.json("Already registered");
      } else {
        FormDataModel.create(req.body)
          .then(result => res.json(result))
          .catch(err => res.json(err));
      }
    });
  } catch (err) {
    console.log(err)
    return res.status(400)
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
    
  FormDataModel.findOne({ email: email })
    .then(user => {
      if (user) {
        if (user.password === password) {
          const token = jwt.sign({ email: user.email, id: user._id }, SECRET_KEY, { expiresIn: '30d' });
          res.json({ message: "Success", token: token });
        } else {
          res.status(401).json({ message: "Wrong password" });
        }
      } else {
        res.status(404).json({ message: "No records found!" });
      }
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({ message: "Internal server error" })
    });
};

export const verifyToken=(req,res)=>{
  try {
    const token=req.cookies;
    jwt.verify(token,SECRET_KEY);
    res.send({"isTokenValid":true});
  } catch (err) {
    res.end("Invalid token")
  }
}