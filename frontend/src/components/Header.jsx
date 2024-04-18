// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    // <header className="bg-gray-800 text-white p-4">
      <nav className="flex justify-between items-center">
        <Link  className="text-lg font-bold">Home</Link>
        <div className="flex space-x-4 ">
          <Link >Orders</Link>
          <Link to='/about' >About Us</Link>
          <Link to='/login' >Login</Link>
          <Link to='/signup'>Signup</Link>
        </div>
      </nav>
    // </header>
  );
};

export default Header;
