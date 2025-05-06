import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BarChart3, ShieldCheck, Zap } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
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
          {/* Content */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            <motion.div
              variants={itemVariants}
              className="inline-block bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-medium px-4 py-1 rounded-lg mb-4"
            >
              Why Choose Us
            </motion.div>
            
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold mb-6 text-gray-800"
            >
              Make your business stand out with our personalized services
            </motion.h2>
            
            <motion.p variants={itemVariants} className="text-gray-600 mb-8 text-lg">
              Choose Us For Unparalleled Legal Expertise Tailored to Safeguard Your Rights and Interests.
            </motion.p>
            
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <BarChart3 className="w-6 h-6 text-primary-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Tailored Solution for Growth</h3>
                  <p className="text-gray-600">
                    Expert Chartered Accountants: Our team of experienced professionals ensures accurate and efficient services.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <ShieldCheck className="w-6 h-6 text-primary-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Comprehensive Services</h3>
                  <p className="text-gray-600">
                    From GST filing to company registration, we cover all your business needs.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <Zap className="w-6 h-6 text-primary-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Tech-Driven Efficiency</h3>
                  <p className="text-gray-600">
                    Real-time insights and streamlined processes for seamless financial management.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-primary-100 to-secondary-100 rounded-xl transform rotate-3"></div>
            <img
              src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Business professionals in a meeting"
              className="relative z-10 rounded-xl shadow-custom w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;