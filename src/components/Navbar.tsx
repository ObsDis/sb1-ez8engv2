import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-[#146EB4]">
              Obsidian Distribution
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-8">
              <a href="#home" className="text-[#146EB4] hover:text-[#2D8FD9] px-3 py-2 text-sm font-medium">Home</a>
              <a href="#services" className="text-[#146EB4] hover:text-[#2D8FD9] px-3 py-2 text-sm font-medium">Our Approach</a>
              <a href="#about" className="text-[#146EB4] hover:text-[#2D8FD9] px-3 py-2 text-sm font-medium">Value Proposition</a>
              <a href="#marketplaces" className="text-[#146EB4] hover:text-[#2D8FD9] px-3 py-2 text-sm font-medium">Marketplaces</a>
              <a href="#contact" className="text-[#146EB4] hover:text-[#2D8FD9] px-3 py-2 text-sm font-medium">Contact</a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#146EB4] hover:text-[#2D8FD9] hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block text-[#146EB4] hover:text-[#2D8FD9] px-3 py-2 text-base font-medium">Home</a>
            <a href="#services" className="block text-[#146EB4] hover:text-[#2D8FD9] px-3 py-2 text-base font-medium">Our Approach</a>
            <a href="#about" className="block text-[#146EB4] hover:text-[#2D8FD9] px-3 py-2 text-base font-medium">Value Proposition</a>
            <a href="#marketplaces" className="block text-[#146EB4] hover:text-[#2D8FD9] px-3 py-2 text-base font-medium">Marketplaces</a>
            <a href="#contact" className="block text-[#146EB4] hover:text-[#2D8FD9] px-3 py-2 text-base font-medium">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;