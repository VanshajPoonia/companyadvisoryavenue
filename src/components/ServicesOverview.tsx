import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { Building2, FileCheck, Landmark, Bookmark, FileSpreadsheet, FileText } from 'lucide-react';

const ServicesOverview: React.FC = () => {
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
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  };

  const services = [
    {
      id: 1,
      title: 'Business Registration',
      icon: <Building2 className="w-10 h-10 text-primary-500" />,
      description: 'Streamline your business registration process with our expert guidance.',
    },
    {
      id: 2,
      title: 'GST Registration & Filing',
      icon: <FileCheck className="w-10 h-10 text-primary-500" />,
      description: 'Ensure GST compliance with our comprehensive registration and filing services.',
    },
    {
      id: 3,
      title: 'Income Tax Returns',
      icon: <Landmark className="w-10 h-10 text-primary-500" />,
      description: 'Maximize deductions and ensure compliance with our ITR filing expertise.',
    },
    {
      id: 4,
      title: 'Trademark Registration',
      icon: <Bookmark className="w-10 h-10 text-primary-500" />,
      description: 'Protect your brand identity with our trademark registration services.',
    },
    {
      id: 5,
      title: 'Accounting & Bookkeeping',
      icon: <FileSpreadsheet className="w-10 h-10 text-primary-500" />,
      description: 'Maintain accurate financial records with our professional bookkeeping services.',
    },
    {
      id: 6,
      title: 'Legal Documentation',
      icon: <FileText className="w-10 h-10 text-primary-500" />,
      description: 'Get expert assistance with all your legal document preparation needs.',
    },
  ];

  return (
    <section className="py-20 bg-gray-50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-primary-100 text-primary-700 font-medium px-4 py-1 rounded-lg mb-4">
            OUR SERVICES
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Empowering clients with top-tier legal solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover a comprehensive suite of financial services designed to meet your business needs. From meticulous bookkeeping to strategic tax planning, our expert services pave the way for your financial success.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="bg-white p-8 rounded-xl shadow-custom hover:shadow-custom-hover transition duration-300 flex flex-col"
            >
              <div className="bg-primary-50 p-3 rounded-lg w-fit mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
              <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
              <Link
                to="/services"
                className="text-primary-500 font-medium hover:text-primary-600 transition-colors duration-200 inline-flex items-center"
              >
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
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
          >
            View All Services
            <svg
              className="w-4 h-4 ml-2"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.33333 8H12.6667M12.6667 8L8 3.33333M12.6667 8L8 12.6667"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;