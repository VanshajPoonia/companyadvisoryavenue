import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const CTA: React.FC = () => {
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
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1],
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
    <section className="relative py-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-gray-900/80 before:to-gray-800/70 z-0"
        style={{ backgroundImage: 'url(https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1600)' }}
      ></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white"
          >
            Make your business stand out with our personalized accounting services.
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto"
          >
            Elevate your business with our tailored accounting solutions, uniquely designed to make your financial management stand out. Experience personalized services that go beyond numbers to drive your success.
          </motion.p>
          
          <motion.div variants={itemVariants}>
            <Link
              to="/contact"
              className="inline-flex items-center bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 uppercase tracking-wide"
            >
              Get Expert Guidance
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;