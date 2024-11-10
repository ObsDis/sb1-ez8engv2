import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Plus } from 'lucide-react';

const Stats = () => {
  const currentMarketplaces = [
    {
      name: "Amazon.com",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      region: "United States"
    },
    {
      name: "Amazon.ca",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      region: "Canada"
    },
    {
      name: "Amazon.mx",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      region: "Mexico"
    },
    {
      name: "Walmart",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Walmart_logo.svg",
      region: "United States"
    },
    {
      name: "TikTok Shop",
      logo: "https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg",
      region: "Global"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div id="marketplaces" className="py-24 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#146EB4] to-[#2D8FD9] bg-clip-text text-transparent">
            Marketplaces We Serve
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg p-8 shadow-2xl"
        >
          <h3 className="text-2xl font-bold mb-6 text-white flex items-center">
            <ShoppingCart className="h-6 w-6 text-[#146EB4] mr-3" />
            Current Marketplaces
          </h3>
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 gap-6"
          >
            {currentMarketplaces.map((marketplace, index) => (
              <motion.div 
                key={index}
                variants={item}
                whileHover={{ scale: 1.05 }}
                className="group relative p-6 rounded-lg bg-gradient-to-b from-gray-800 to-gray-900 hover:from-[#146EB4]/20 hover:to-gray-900 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#146EB4]/0 to-[#146EB4]/0 group-hover:from-[#146EB4]/5 group-hover:to-[#146EB4]/10 rounded-lg transition-all duration-500" />
                <div className="relative">
                  <div className="h-12 flex items-center justify-center">
                    <img 
                      src={marketplace.logo} 
                      alt={marketplace.name}
                      className="h-8 w-auto object-contain filter brightness-0 invert group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <span className="text-gray-400 text-sm mt-2 block text-center group-hover:text-[#146EB4] transition-colors duration-300">
                    {marketplace.region}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#146EB4]/0 via-[#146EB4] to-[#146EB4]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
            <motion.div 
              variants={item}
              whileHover={{ scale: 1.05 }}
              className="group relative p-6 rounded-lg bg-gradient-to-b from-gray-800 to-gray-900 hover:from-[#146EB4]/20 hover:to-gray-900 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#146EB4]/0 to-[#146EB4]/0 group-hover:from-[#146EB4]/5 group-hover:to-[#146EB4]/10 rounded-lg transition-all duration-500" />
              <div className="relative">
                <Plus className="h-8 w-8 text-[#146EB4] mb-2 mx-auto group-hover:text-[#2D8FD9] group-hover:rotate-180 transition-all duration-500" />
                <span className="text-gray-400 text-sm text-center block group-hover:text-[#146EB4] transition-colors duration-300">
                  More Coming Soon
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#146EB4]/0 via-[#146EB4] to-[#146EB4]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Stats;