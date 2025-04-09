import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="flex items-center justify-between px-6 py-4  bg-white">
    {/* Logo */}
    <h1 className="text-2xl font-bold text-gray-800">Logo</h1>
  
    {/* Navigation Links */}
    <div className="flex space-x-6">
      <Link
        className="text-lg text-orange-700 hover:text-orange-900 transition-colors duration-200"
        to="home"
      >
        Home
      </Link>
      <Link
        className="text-lg text-orange-700 hover:text-orange-900 transition-colors duration-200"
        to="about"
      >
        About
      </Link>
    </div>
  </div>
  
  )
}

export default Header;
