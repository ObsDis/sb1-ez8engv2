import React from 'react';
import { motion } from 'framer-motion';
import { Truck, BarChart2, Edit3, Search, ListChecks, Target, Calendar, Shield, MessageSquare, HeartHandshake, Scale, Globe, DollarSign, Video, Share2 } from 'lucide-react';

const ValueProposition = () => {
  const services = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Brand Control",
      description: "Maintain brand consistency and protect your image across all sales channels."
    },
    {
      icon: <ListChecks className="h-8 w-8" />,
      title: "Listing Optimization",
      description: "Ensure your product listings are compelling, accurate, and optimized for maximum conversions."
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Fulfillment & Logistics",
      description: "Efficient, nationwide fulfillment using Amazon FBA, ensuring 1-2 day delivery across the United States."
    },
    {
      icon: <HeartHandshake className="h-8 w-8" />,
      title: "Customer Satisfaction",
      description: "Dedicated support to ensure your customers have a positive experience at every touchpoint."
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Review Management",
      description: "Proactively manage customer reviews and feedback to build trust and loyalty."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Amazon Advertising",
      description: "Targeted advertising strategies to increase visibility and drive sales."
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "SEO Optimization",
      description: "Optimize your listings and website for better visibility and higher search rankings."
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Dynamic Pricing",
      description: "Flexible pricing strategies that respond to market changes in real-time."
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Promotional Strategy",
      description: "Comprehensive promotional planning to align with key sales events and maximize impact."
    },
    {
      icon: <Scale className="h-8 w-8" />,
      title: "Marketplace Compliance",
      description: "Expert guidance to ensure your brand stays compliant with marketplace regulations."
    },
    {
      icon: <BarChart2 className="h-8 w-8" />,
      title: "Market Analysis",
      description: "Data-driven insights to help you stay ahead of the competition and make informed decisions."
    },
    {
      icon: <Edit3 className="h-8 w-8" />,
      title: "Content Development",
      description: "High-quality, engaging content that resonates with your target audience and enhances your brand's presence."
    },
    {
      icon: <Video className="h-8 w-8" />,
      title: "Multimedia Production",
      description: "Professional video content creation to showcase your products and boost engagement."
    },
    {
      icon: <Share2 className="h-8 w-8" />,
      title: "Affiliate Marketing",
      description: "Leverage affiliate partnerships to expand your reach and drive new traffic."
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "International B2B Growth",
      description: "Expand globally with our network of international distributors, unlocking new markets worldwide."
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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div id="about" className="py-24 bg-gradient-to-b from-black/50 to-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#146EB4] to-[#2D8FD9] bg-clip-text text-transparent">
            Value Proposition
          </h2>
          <p className="text-xl text-gray-400">
            Comprehensive suite of services designed to elevate your brand
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative p-6 rounded-lg bg-gradient-to-b from-gray-800 to-gray-900 hover:from-[#146EB4]/20 hover:to-gray-900 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#146EB4]/0 to-[#146EB4]/0 group-hover:from-[#146EB4]/5 group-hover:to-[#146EB4]/10 rounded-lg transition-all duration-500" />
              <div className="relative">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-lg bg-[#146EB4]/10 group-hover:bg-[#146EB4]/20 transition-colors duration-500">
                    <div className="text-[#146EB4] group-hover:text-[#2D8FD9] transition-colors duration-500">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold ml-3 text-white group-hover:text-[#146EB4] transition-colors duration-500">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-500">
                  {service.description}
                </p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#146EB4]/0 via-[#146EB4] to-[#146EB4]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ValueProposition;