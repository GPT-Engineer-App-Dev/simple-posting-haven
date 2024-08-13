import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-gray-900">My Blog</Link>
          <nav>
            <ul className="flex space-x-4">
              <li><Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-gray-900">About</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;