import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-xl font-bold text-[#146EB4] mb-4">
              Obsidian Distribution
            </h3>
            <p className="text-[#146EB4]">
              Full Service Ecommerce Solutions, Tailored for Your Brand's Success.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-[#146EB4] mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-white hover:text-[#2D8FD9]">Home</a></li>
              <li><a href="#services" className="text-white hover:text-[#2D8FD9]">Our Approach</a></li>
              <li><a href="#about" className="text-white hover:text-[#2D8FD9]">Value Proposition</a></li>
              <li><a href="#contact" className="text-white hover:text-[#2D8FD9]">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-[#146EB4] mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white hover:text-[#2D8FD9]">Fulfillment & Logistics</a></li>
              <li><a href="#" className="text-white hover:text-[#2D8FD9]">Market Analysis</a></li>
              <li><a href="#" className="text-white hover:text-[#2D8FD9]">Content Development</a></li>
              <li><a href="#" className="text-white hover:text-[#2D8FD9]">Brand Control</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-[#146EB4] mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white hover:text-[#2D8FD9]">LinkedIn</a></li>
              <li><a href="#" className="text-white hover:text-[#2D8FD9]">Twitter</a></li>
              <li><a href="#" className="text-white hover:text-[#2D8FD9]">Facebook</a></li>
              <li><a href="#" className="text-white hover:text-[#2D8FD9]">Instagram</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-[#146EB4]">
          <p>&copy; {new Date().getFullYear()} Obsidian Distribution. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;