import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('auth-token');
    setIsAuthenticated(token);
  }, [isAuthenticated]);
  console.log(isAuthenticated,"isAuthenticated")
  const signOutHandler = () => {
    localStorage.removeItem('auth-token');
    setIsAuthenticated(false);
    navigate('/login');
  };

  return (
    <header className="flex justify-between items-center bg-blue-100 rounded-xl mx-2 mt-2 px-6 py-3 shadow-sm">
      {/* Nav Links */}
      <nav className="flex space-x-6 text-lg font-medium">
        <Link to="/" className="text-gray-800 hover:text-blue-600 transition-colors">Home</Link>
        <Link to="/about" className="text-gray-800 hover:text-blue-600 transition-colors">About Us</Link>
        <Link to="/cart" className="text-gray-800 hover:text-blue-600 transition-colors">Cart</Link>
      </nav>

      {/* Avatar & Dropdown */}
      {isAuthenticated && (
        <div className="relative">
          <img
            src="/image.png"
            alt="User"
            onClick={() => setShowDropdown(prev => !prev)}
            className="w-10 h-10 rounded-full border cursor-pointer object-cover hover:opacity-90 transition-opacity duration-200"
          />
          {showDropdown && (
            <div className="absolute right-0 mt-2 w-36 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
              <button
                onClick={signOutHandler}
                className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
