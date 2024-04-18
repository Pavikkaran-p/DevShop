import { Product } from "../models/ProductData.js";
let fetchcount=1;
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    // console.log(products.length)
    res.json(products);
    console.log(`Data fetching count: ${fetchcount++}`)
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};


export const getProductById = async (req, res) => {
  try {
    const { productId } = req.params;
    const product = await Product.findOne({ productId });

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};


export const createProduct = async (req, res) => {
  try {
    const { name, description, price, rating, imageUrl, category, productId, isAvailable } = req.body;
    const newProduct = new Product({
      name,
      description,
      price,
      rating,
      imageUrl,
      category,
      productId,
      isAvailable
    });
    await newProduct.save();
    
    res.status(201).json({ message: 'Product created successfully', product: newProduct });
  } 
  
  catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

