import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md w-[100vw] mb-20">
      <div className="flex items-center justify-between h-[60px] px-4 md:px-8">
        <h1 className="text-2xl font-bold text-blue-600">
          Travel<span className="text-red-500">Planner</span>
        </h1>

        <ul className="hidden md:flex flex-row space-x-6 text-gray-700 font-medium">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/destinations">Destinations</Link></li>
          <li><Link to="/hotel">Hotels</Link></li>
        </ul>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? <X className="w-6 h-6 text-blue-600" /> : <Menu className="w-6 h-6 text-blue-600" />}
        </button>
      </div>

      {isOpen && (
        <ul className="flex flex-col items-start px-4 py-4 space-y-3 md:hidden bg-white text-gray-700 font-medium border-t">
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link></li>
          <li><Link to="/destinations" onClick={() => setIsOpen(false)}>Destinations</Link></li>
          <li><Link to="/hotel" onClick={() => setIsOpen(false)}>Hotels</Link></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
