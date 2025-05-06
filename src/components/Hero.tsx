import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  };

  return (
    <div className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-black/70 before:to-black/30 z-0"
        style={{ backgroundImage: 'url(https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1600)' }}
      ></div>
      
      {/* Hero Content */}
      <div className="relative h-full flex items-center z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center md:text-left">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="max-w-3xl text-white"
          >
            <motion.p variants={itemVariants} className="text-primary-300 font-semibold mb-2">
              Welcome to Company Avenue Advisory
            </motion.p>
            
            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Your Trusted Partner for Business Excellence
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-xl mb-8 text-gray-200">
              Simplify your business journey with expert chartered accountants and tech-driven solutions
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/contact"
                className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 text-center"
              >
                Get Started
              </Link>
              
              <Link
                to="/services"
                className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 text-center"
              >
                Explore Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
        >
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-3 bg-white rounded-full mt-2"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;