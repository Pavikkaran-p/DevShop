import React from 'react'
import { Link } from 'react-router-dom';

const ProductCart = ({data}) => {
  const {productId,name,category,imageUrl,rating,price,description}=data;
  return (
    <>
      <div className="mt-5 cursor-pointer w-80 h-60 rounded-lg relative border">
      <Link to={`/product/${productId}`} >
        <figure
          className="relative mb-2 w-full h-4/5"
        >
          {/* <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5 flex justify-center items-center">
            {category}
          </span> */}
          <img
            src={imageUrl}
            alt={`image ${name}`}
            className="w-full h-full object-contain rounded-lg"
          />
        </figure>
        </Link>
      <p className="flex justify-between px-1">
        <span className="text-black no-underline font-bold">
          {name.length > 25 ? name.substring(0, 24) + "..." : name}
        </span>
        <span className="text-lg font-medium no-underline">Rs.{price}</span>
        <p className="text-lg font-medium no-underline ">
            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path  strokeLinecap="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
          </svg> */}
        {rating} ⭐ 

        </p>
      </p>
      
    </div>
    </>
  )
}

export default ProductCart