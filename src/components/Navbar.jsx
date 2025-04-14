import React, { useEffect, useState } from 'react';
import { assets } from '../assets/assets';
import { motion } from "motion/react"

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showMobileMenu]);

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        <img src={assets.logo} alt="Logo" />
        
        <ul className="hidden md:flex gap-7 text-white">
          <a href="#Header" className="cursor-pointer hover:text-gray-400">Home</a>
          <a href="#About" className="cursor-pointer hover:text-gray-400">About</a>
          <a href="#Projects" className="cursor-pointer hover:text-gray-400">Projects</a>
          <a href="#Testimonials" className="cursor-pointer hover:text-gray-400">Testimonials</a>
        </ul>
        
        <button className="hidden md:block bg-white text-black px-8 py-2 rounded-full">Sign up</button>

        <img 
          onClick={() => setShowMobileMenu(true)} 
          src={assets.menu_icon} 
          className="md:hidden w-7 cursor-pointer" 
          alt="Menu Icon" 
        />
      </div>

      {/* Mobile menu */}
      <div 
        className={`fixed inset-0 bg-white transition-all duration-300 ease-in-out flex flex-col ${showMobileMenu ? 'translate-x-0' : 'translate-x-full'} md:hidden`}
      >
        <div className="flex justify-end p-6">
          <img 
            onClick={() => setShowMobileMenu(false)} 
            src={assets.cross_icon} 
            className="w-6 cursor-pointer" 
            alt="Close Menu" 
          />
        </div>

        <ul className="flex flex-col items-center gap-6 mt-10 text-lg font-medium">
          <a onClick={() => setShowMobileMenu(false)} href="#Header" className="px-4 py-2 rounded-full inline-block">Home</a>
          <a onClick={() => setShowMobileMenu(false)} href="#About" className="px-4 py-2 rounded-full inline-block">About</a>
          <a onClick={() => setShowMobileMenu(false)} href="#Projects" className="px-4 py-2 rounded-full inline-block">Projects</a>
          <a onClick={() => setShowMobileMenu(false)} href="#Testimonials" className="px-4 py-2 rounded-full inline-block">Testimonials</a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
