import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductDescription = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

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

  return (
    <>
      <div>ProductDescription</div>
      <h1>Product id is: {id}</h1>
      {product ? (
        <>
        <div>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <p>{product.rating}</p>
          <p>{product.isAvailable?"In stock":"Out of stock"}</p>
        </div>
        <Link to='/payment' ><button>Buy now</button></Link>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default ProductDescription;
