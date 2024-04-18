import express from 'express'
// import { payment } from '../controller/razorpayController'
import {   createProduct, getAllProducts, getProductById } from '../controller/productController.js';

const productRouter=express.Router()

// productRouter.post('/createOrder',payment);
productRouter.get('/allProduct',getAllProducts)
productRouter.get('/product/:productId',getProductById);

productRouter.post('/addProduct',createProduct)
export default productRouter