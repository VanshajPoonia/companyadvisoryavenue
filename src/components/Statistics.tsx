import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface StatisticProps {
  value: number;
  label: string;
  suffix?: string;
  icon: React.ReactNode;
}

const Statistic: React.FC<StatisticProps> = ({ value, label, suffix = '', icon }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    let startTimestamp: number;
    let animationFrameId: number;
    const duration = 2000; // 2 seconds
    
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentCount = Math.floor(progress * value);
      
      setCount(currentCount);
      
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(value);
      }
    };
    
    if (inView) {
      animationFrameId = requestAnimationFrame(step);
    }
    
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [inView, value]);

  return (
    <div ref={ref} className="text-center p-8">
      <div className="flex justify-center mb-4">
        {icon}
      </div>
      <div className="text-4xl font-bold text-white mb-2">
        {count}{suffix}+
      </div>
      <div className="text-lg text-white/90">{label}</div>
    </div>
  );
};

const Statistics: React.FC = () => {
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
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="py-16 bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Statistic
            value={100}
            label="Businesses Incorporated"
            icon={
              <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
          />
          <Statistic
            value={15}
            label="Years of Experience"
            icon={
              <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
          />
          <Statistic
            value={1000}
            label="Positive Reviews"
            icon={
              <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" stroke="currentColor" strokeWidth="2" />
              </svg>
            }
          />
          <Statistic
            value={100}
            label="Business Set-up Services"
            suffix=""
            icon={
              <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Statistics;