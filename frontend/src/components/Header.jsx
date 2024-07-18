import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const signOutHandler=()=>{
    localStorage.removeItem('token')
    navigate('login')
  }
  return (
    <div className='flex justify-between items-center rounded-xl mx-1 mt-2 bg-blue-200 p-4 text-2xl font-sans'>
      <div className="flex space-x-4">
        <Link to='/' className='text-black mx-4 no-underline hover:text-green-300'>Home</Link>
        <Link to='/about' className='text-black mx-4 no-underline hover:text-green-300'>About Us</Link>
        <Link to='/cart' className='text-black mx-4 no-underline hover:text-green-300'>Cart</Link>
      </div>
      <div className="flex items-center space-x-4">
        <img src='/public/image.png' alt="User Logo" className="w-10 h-10 rounded-full" />
        <button
        onClick={signOutHandler}
         className='text-black mx-4 no-underline hover:text-green-300'>Sign Out</button>
      </div>
    </div>
  );
};

export default Header;
