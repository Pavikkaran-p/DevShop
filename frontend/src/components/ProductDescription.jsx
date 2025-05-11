import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addQuantity, selectQuantityById, subQuantity } from '../features/cart/cartSlice';
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const ProductDescription = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const productq = useSelector(state => selectQuantityById(state, id));
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/shop/product/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product');
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  const addedToCart = () => {
    toast.success("Added to cart");
  };

  return (
    <div className="p-4">
      {product ? (
        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md p-6 grid md:grid-cols-2 gap-6">
          {/* Product Info */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="text-xl text-purple-700 font-semibold mb-2">Rs. {product.price}</p>
              <div className="flex items-center mb-3">
                <span className="text-yellow-500 font-medium mr-1">Rating:</span>
                <span>{product.rating}</span>
              </div>
              <p className={product.isAvailable ? "text-green-600 font-semibold" : "text-red-500 font-semibold"}>
                {product.isAvailable ? "In Stock" : "Out of Stock"}
              </p>
            </div>

            {/* Quantity & Add-to-cart */}
            <div className="mt-6 flex items-center space-x-4">
              <button
                onClick={() =>
                  dispatch(addQuantity({
                    id: product.productId,
                    name: product.name,
                    price: product.price,
                    description: product.description,
                    rating: product.rating,
                    imageUrl: product.imageUrl
                  }))
                }
                className="bg-green-500 hover:bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center"
              >
                +
              </button>

              <span className="text-lg font-semibold">{productq}</span>

              <button
                onClick={() => dispatch(subQuantity({ id: product.productId }))}
                className="bg-red-500 hover:bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center"
              >
                −
              </button>

              <button
                onClick={addedToCart}
                className="ml-4 bg-purple-700 hover:bg-purple-800 text-white px-5 py-2 rounded-lg shadow-sm transition"
              >
                Add to Cart
              </button>
            </div>
          </div>

          {/* Product Image */}
          <div className="flex items-center justify-center">
            <img
              className="max-w-full max-h-72 object-contain rounded-md border"
              src={product.imageUrl}
              alt={product.name}
            />
          </div>
        </div>
      ) : (
        <div className="text-center text-gray-500 text-lg mt-10">Loading product details...</div>
      )}
    </div>
  );
};

export default ProductDescription;
