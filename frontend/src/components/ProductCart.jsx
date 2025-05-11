import React from 'react';
import { Link } from 'react-router-dom';

const ProductCart = ({ data }) => {
  const { productId, name, category, imageUrl, rating, price } = data;

  return (
    <div className="w-full max-w-xs bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-200">
      <Link to={`/product/${productId}`}>
        <div className="relative h-48 bg-gray-50 flex items-center justify-center">
          <img
            src={imageUrl}
            alt={name}
            className="h-full w-full object-contain p-2"
          />
          <span className="absolute top-2 left-2 bg-white/80 text-xs text-gray-700 px-2 py-0.5 rounded-full border border-gray-300">
            {category}
          </span>
        </div>

        <div className="p-4 flex flex-col gap-2">
          <h2 className="text-sm font-semibold text-gray-800">
            {name.length > 40 ? name.slice(0, 37) + '...' : name}
          </h2>

          <div className="flex items-center justify-between">
            <span className="text-base font-bold text-green-600">₹{price}</span>
            <span className="text-sm text-yellow-600 font-medium">
              {rating} ⭐
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCart;
