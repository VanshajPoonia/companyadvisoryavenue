import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ClientLogos: React.FC = () => {
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
        staggerChildren: 0.1,
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  };

  const logoVariants = {
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

  // These are placeholder logos that could be used by an accounting/advisory firm
  const clientLogos = [
    { name: 'Google Workspace', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Google_Workspace_2020_Logo.svg/1200px-Google_Workspace_2020_Logo.svg.png' },
    { name: 'YouTube', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1200px-YouTube_full-color_icon_%282017%29.svg.png' },
    { name: 'Startup India', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Startup_India_Logo.jpg/800px-Startup_India_Logo.jpg' },
    { name: 'Swiggy', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Swiggy_logo.svg/1200px-Swiggy_logo.svg.png' },
    { name: 'DMCA', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/DMCA_logo.png/220px-DMCA_logo.png' },
    { name: 'Xero', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Xero_Logo.svg/1200px-Xero_Logo.svg.png' },
    { name: 'OneDrive', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Microsoft_Office_OneDrive_%282019%E2%80%93present%29.svg/1200px-Microsoft_Office_OneDrive_%282019%E2%80%93present%29.svg.png' },
    { name: 'Slack', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/2048px-Slack_icon_2019.svg.png' },
    { name: 'Skype', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Skype_logo_%282019%E2%80%93present%29.svg/991px-Skype_logo_%282019%E2%80%93present%29.svg.png' },
    { name: 'Intuit', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Intuit_Logo.svg/1280px-Intuit_Logo.svg.png' },
    { name: 'Elementor', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Elementor_Logo.svg/2560px-Elementor_Logo.svg.png' },
    { name: 'Zoho', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Zoho-logo.png/1200px-Zoho-logo.png' },
  ];

  return (
    <section className="py-20 bg-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            Trusted by world-class brands and organizations of all sizes
          </h2>
        </div>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
        >
          {clientLogos.map((client, index) => (
            <motion.div
              key={index}
              variants={logoVariants}
              className="flex items-center justify-center bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className="max-h-12 w-auto object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientLogos;