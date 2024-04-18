import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://127.0.0.1:3001/shop/allProduct');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
    setLoading(false)
  }, []);
  if(loading) return <h1>Fetching data...</h1>
  else
  return (
    <>
      <div>Home</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <>
          {/* <h1>Hello</h1> */}
          <Link key={product.productId} to={`/product/${product.productId}`} className="no-underline">
            <div
              key={product.productId}
              className="rounded-lg shadow-md bg-gradient-to-b p-4 transition duration-300 transform hover:scale-105"
            >
              <img src={product.image} alt={product.name} className="w-full" />
              <h3 className="text-black text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-200">{product.description}</p>
              <p className="text-black font-bold">${product.price}</p>
              <p className="text-black">Rating: {product.rating}</p>
            </div>
          </Link>
          </>
        ))}
      </div>
    </>
  );
};

export default Home;