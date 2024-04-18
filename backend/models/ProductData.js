import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true
  },
  rating: {
    type: Number,
    default: 0 
  },
  imageUrl: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  productId: {
    type: String,
    required: true,
    unique: true 
  },
  isAvailable: {
    type: Boolean, 
    required: true,
    default: true 
  }
});

export const Product = mongoose.model('Product', productSchema);
