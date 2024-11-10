import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            transition: {
              duration: 2,
              ease: "easeOut"
            }
          }}
          whileHover={{ 
            scale: 1.05,
            transition: { duration: 8, ease: "linear" }
          }}
          className="w-full h-full bg-cover bg-center bg-fixed transform-gpu"
          style={{
            backgroundImage: `
              linear-gradient(
                to right,
                rgba(0, 0, 0, 0.9) 0%,
                rgba(0, 0, 0, 0.7) 50%,
                rgba(0, 0, 0, 0.4) 100%
              ),
              url('https://i.imgur.com/iaD1Q8Z.png')
            `
          }}
          role="img"
          aria-label="Modern office workspace with computers and business analytics"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute inset-0 bg-gradient-to-r from-[#146EB4]/20 to-transparent mix-blend-overlay"
        />
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32"
      >
        <div className="lg:w-2/3">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 1,
              delay: 0.2,
              type: "spring",
              stiffness: 100
            }}
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#146EB4] to-[#2D8FD9] bg-clip-text text-transparent"
          >
            Full Service Ecommerce Solutions, Tailored for Your Brand's Success.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 1,
              delay: 0.4,
              type: "spring",
              stiffness: 50
            }}
            className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
          >
            Driving sustainable growth and optimizing your Ecommerce presence through data-driven strategies
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 1,
              delay: 0.6,
              type: "spring",
              stiffness: 50
            }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.a
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-[#146EB4] hover:bg-[#0F5A96] transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group"
            >
              <motion.span
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              />
              <span className="relative">Get Started</span>
              <ArrowRight className="ml-2 h-5 w-5 relative group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>
            
            <motion.a
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              href="#services"
              className="inline-flex items-center px-8 py-4 border-2 border-[#146EB4] text-base font-medium rounded-md text-[#146EB4] hover:bg-[#146EB4] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group"
            >
              <motion.span
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-[#146EB4]/20 to-transparent"
              />
              <span className="relative">Learn More</span>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"
      />
    </div>
  );
};

export default Hero;