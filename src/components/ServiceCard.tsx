import React from 'react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-8 rounded-xl shadow-custom hover:shadow-custom-hover transition duration-300 flex flex-col h-full"
    >
      <div className="bg-primary-50 p-3 rounded-lg w-fit mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-6 flex-grow">{description}</p>
      <button className="text-primary-500 font-medium hover:text-primary-600 transition-colors duration-200 inline-flex items-center mt-auto">
        Learn More
        <svg
          className="w-4 h-4 ml-1"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.66667 12.6667L12 7.33333L6.66667 2"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </motion.div>
  );
};

export default ServiceCard;