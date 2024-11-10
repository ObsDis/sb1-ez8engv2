import React from 'react';
import { ShieldCheck, Building2, Handshake, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
  const BarChartCustom = () => (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      className="w-16 h-16"
    >
      <path d="M1 20h3c0.5 0 1-0.5 1-1v-4c0-0.5-0.5-1-1-1H1c-0.5 0-1 0.5-1 1v4c0 0.5 0.5 1 1 1zM7 20h3c0.5 0 1-0.5 1-1v-8c0-0.5-0.5-1-1-1H7c-0.5 0-1 0.5-1 1v8c0 0.5 0.5 1 1 1zM13 20h3c0.5 0 1-0.5 1-1v-12c0-0.5-0.5-1-1-1h-3c-0.5 0-1 0.5-1 1v12c0 0.5 0.5 1 1 1zM19 20h3c0.5 0 1-0.5 1-1v-16c0-0.5-0.5-1-1-1h-3c-0.5 0-1 0.5-1 1v16c0 0.5 0.5 1 1 1z" />
    </svg>
  );

  const approaches = [
    {
      title: <span className="text-4xl"><strong className="text-[#146EB4]">WE</strong> Invest</span>,
      description: "Our partnership begins with an investment in your vision, carefully selecting products we know will captivate and resonate with customers. Drawing on deep market insights, we craft a bespoke strategy that showcases your brand's strengths, driving engagement and demand.",
      subdescription: "This isn't just about buying inventory—it's about investing in a shared journey towards growth and success.",
      icon: (
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="relative w-24 h-24 flex items-center justify-center group"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg group-hover:from-[#146EB4]/20 group-hover:to-gray-900 transition-all duration-500"></div>
          <Handshake className="w-16 h-16 text-[#146EB4] relative z-10 group-hover:text-[#2D8FD9] transition-colors duration-300" strokeWidth={1.5} />
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-[#146EB4]/20 rounded-full filter blur-sm"></div>
        </motion.div>
      )
    },
    {
      title: <span className="text-4xl"><strong className="text-[#146EB4]">WE</strong> Elevate</span>,
      description: "With a seamless blend of marketing expertise and operational efficiency, we propel your brand to new heights across global marketplaces.",
      subdescription: "Your story becomes our mission, communicated consistently and authentically to reach and engage diverse audiences. It's more than just driving sales; it's about creating impact, converting interest into action, and fostering lasting customer loyalty.",
      icon: (
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="relative w-24 h-24 flex items-center justify-center group"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg group-hover:from-[#146EB4]/20 group-hover:to-gray-900 transition-all duration-500"></div>
          <Rocket className="w-16 h-16 text-[#146EB4] relative z-10 transform -rotate-45 group-hover:text-[#2D8FD9] transition-colors duration-300" strokeWidth={1.5} />
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-[#146EB4]/20 rounded-full filter blur-sm"></div>
        </motion.div>
      )
    },
    {
      title: <span className="text-4xl"><strong className="text-[#146EB4]">YOU</strong> Succeed</span>,
      description: "Your success is our success, measured in growth metrics and the joy of exceeding expectations.",
      subdescription: "With every strategic refinement, your brand shines brighter, drawing in customers and building a dedicated following. Together, we celebrate the milestones of a brand that's not only sold but beloved, achieving a legacy of excellence.",
      icon: (
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="relative w-24 h-24 flex items-center justify-center group"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg group-hover:from-[#146EB4]/20 group-hover:to-gray-900 transition-all duration-500"></div>
          <div className="text-[#146EB4] relative z-10 group-hover:text-[#2D8FD9] transition-colors duration-300">
            <BarChartCustom />
          </div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-[#146EB4]/20 rounded-full filter blur-sm"></div>
        </motion.div>
      )
    }
  ];

  const features = [
    {
      title: "No Hidden Fees, Just Results",
      description: "At Obsidian Distribution, we believe in transparent partnerships with no surprises. Unlike other distributors, we don't charge management fees or tack on hidden costs. Instead, we focus on driving results and growing your brand through a value-based approach. Our success is tied directly to your success, which means we're fully invested in helping you achieve your goals.",
      icon: <ShieldCheck className="w-16 h-16 text-[#146EB4] group-hover:text-[#2D8FD9] transition-colors duration-300" />
    },
    {
      title: "Customized Strategy, Not One-Size-Fits-All",
      description: "We tailor our approach to meet your unique needs, leveraging deep industry expertise, market insights, and cutting-edge tools. Whether it's optimizing listings, enhancing brand visibility, or expanding into international markets, we create bespoke strategies designed to maximize your profitability and long-term growth.",
      icon: <Building2 className="w-16 h-16 text-[#146EB4] group-hover:text-[#2D8FD9] transition-colors duration-300" />
    },
    {
      title: "Commitment to Brand Integrity",
      description: "We treat your brand as if it were our own, maintaining the highest standards of quality and consistency across every channel. From content creation to fulfillment, our hands-on approach ensures your brand's story is communicated effectively, your reputation is protected, and your customers are satisfied every step of the way.",
      icon: <ShieldCheck className="w-16 h-16 text-[#146EB4] group-hover:text-[#2D8FD9] transition-colors duration-300" />
    }
  ];

  return (
    <div id="services" className="py-24 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#146EB4] to-[#2D8FD9] bg-clip-text text-transparent">
            Our Approach
          </h2>
        </div>
        
        <div className="space-y-24">
          {approaches.map((approach, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-8">{approach.icon}</div>
              <h3 className="mb-4">{approach.title}</h3>
              <p className="text-xl text-gray-300 mb-4 max-w-3xl">{approach.description}</p>
              <p className="text-lg text-gray-400 max-w-2xl">{approach.subdescription}</p>
            </div>
          ))}
        </div>

        <div className="mt-32">
          <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-[#146EB4] to-[#2D8FD9] bg-clip-text text-transparent">
            What Sets Us Apart
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                whileHover={{ scale: 1.05 }}
                className="group relative p-8 rounded-lg bg-gradient-to-b from-gray-800 to-gray-900 hover:from-[#146EB4]/20 hover:to-gray-900 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#146EB4]/0 to-[#146EB4]/0 group-hover:from-[#146EB4]/5 group-hover:to-[#146EB4]/10 rounded-lg transition-all duration-500" />
                <div className="relative">
                  <div className="flex justify-center mb-6">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-4 text-center text-white group-hover:text-[#146EB4] transition-colors duration-300">{feature.title}</h3>
                  <p className="text-gray-400 text-center group-hover:text-gray-300 transition-colors duration-300">{feature.description}</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#146EB4]/0 via-[#146EB4] to-[#146EB4]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;