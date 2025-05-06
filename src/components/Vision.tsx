import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Vision: React.FC = () => {
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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Vision Image */}
          <div className="order-2 md:order-1">
            <img
              src="https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Business team discussing strategy"
              className="rounded-xl shadow-custom w-full h-auto object-cover"
            />
          </div>
          
          {/* Vision Content */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="order-1 md:order-2"
          >
            <motion.div
              variants={itemVariants}
              className="inline-block bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-medium px-4 py-1 rounded-lg mb-4"
            >
              Vision
            </motion.div>
            
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold mb-6 text-gray-800"
            >
              To craft innovative business solutions, empower brands, and deliver exceptional experiences
            </motion.h2>
            
            <motion.p variants={itemVariants} className="text-gray-600 mb-6 text-lg">
              Welcome to Company Avenue Advisory, your one-stop solution for business registration, GST compliance, ITR filing, and trademark registration. With 15+ years of experience and a team of expert Chartered Accountants, we simplify legal and financial processes for businesses of all sizes.
            </motion.p>
            
            <motion.p variants={itemVariants} className="text-gray-600 text-lg">
              Our commitment to personalized service, coupled with cutting-edge technology, ensures a unique and seamless experience, setting us apart in the industry.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Vision;