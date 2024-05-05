import express from 'express'
// import { payment } from '../controller/razorpayController'
import {   addManyProducts, createProduct, getAllProducts, getProductById } from '../controller/productController.js';

const productRouter=express.Router()

// productRouter.post('/createOrder',payment);
productRouter.get('/allProduct',getAllProducts)
productRouter.get('/product/:productId',getProductById);

productRouter.post('/addProduct',createProduct)
productRouter.post('/addmany',addManyProducts)
export default productRouter