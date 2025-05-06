import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Vision from '../components/Vision';
import Statistics from '../components/Statistics';
import ServicesOverview from '../components/ServicesOverview';
import WhyChooseUs from '../components/WhyChooseUs';
import ClientLogos from '../components/ClientLogos';
import CTA from '../components/CTA';

const Home: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Hero />
      <Vision />
      <Statistics />
      <ServicesOverview />
      <WhyChooseUs />
      <ClientLogos />
      <CTA />
    </motion.div>
  );
};

export default Home;