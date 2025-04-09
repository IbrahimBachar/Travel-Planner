// import React from 'react'
// import { Link } from 'react-router-dom'
// import About from '../pages/About'
// import Contact from '../pages/Contact'
// import LandingPage from '../pages/LandingPage'
// import HotelSearch from '../pages/HotelSearch'

// function Navbar() {
//   return (
//     <div className='bg-white shadow-md w-[100vw]'>
//         <div className='flex items-center justify-between h-[60px] p-4'>
//             <h1 className='text-2xl font-bold text-blue-600'>Travel<span className='text-red-500'>Planner</span></h1>
//             <div >
//                 <ul className='flex flex-row space-x-4'>
//                     <Link to="/" element={<LandingPage />}>Home</Link>
//                     <Link to="/about" element={<About />}>About Us</Link>
//                     <Link to="/contact" element={<Contact />}>Contact Us</Link>
//                     <Link to="/destinations" element={<LandingPage />}>Destinations</Link>
//                     <Link to="/hotel" element={<HotelSearch />}>Hotels</Link>
//                 </ul>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Navbar



import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Hamburger and Close icons

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md w-[100vw] mb-20">
      <div className="flex items-center justify-between h-[60px] px-4 md:px-8">
        <h1 className="text-2xl font-bold text-blue-600">
          Travel<span className="text-red-500">Planner</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex flex-row space-x-6 text-gray-700 font-medium">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/destinations">Destinations</Link></li>
          <li><Link to="/hotel">Hotels</Link></li>
        </ul>

        {/* Hamburger Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? <X className="w-6 h-6 text-blue-600" /> : <Menu className="w-6 h-6 text-blue-600" />}
        </button>
      </div>

      {/* Mobile Menu */}
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
