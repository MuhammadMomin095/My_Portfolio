"use client"; // Client component banane ke liye

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle the menu open/close
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="w-full bg-gradient-to-r from-gray-900 via-teal-800 to-blue-900 absolute py-12 px-4 z-50 top-0 left-0 right-0 shadow-md transition-transform duration-500 ease-in-out hover:scale-105">
  <div className="container mx-auto flex justify-between items-center">
    <h1 className="text-5xl font-bold text-white animate-pulse transition-all duration-500" style={{ textShadow: '5px 5px 10px rgba(0, 0, 0, 0.9)' }}>
      My Portfolio
    </h1>
    <div className="lg:hidden flex items-center">
      <button 
        onClick={toggleMenu} 
        className="text-white p-2 rounded-md focus:outline-none"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
    <ul className={`lg:flex space-x-8 text-white ${menuOpen ? 'flex' : 'hidden'} lg:block`}>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/about">About</Link></li>
      <li><Link href="/skills">Skills</Link></li>
      <li><Link href="/projects">Projects</Link></li>
      <li><Link href="/CV-template">Template</Link></li>
      <li><Link href="/contact">Contact</Link></li>
    </ul>
  </div>
</nav>

  );
}

export default Navbar;