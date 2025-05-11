import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCart from '../components/ProductCart';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`/api/shop/allProduct`);
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <h1 className="text-center text-xl font-medium mt-10">Fetching data...</h1>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCart key={product.name} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
