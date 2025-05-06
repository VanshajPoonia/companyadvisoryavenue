import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import ServiceCard from '../components/ServiceCard';
import CTA from '../components/CTA';
import { FileSpreadsheet, Building2, FileCheck, Landmark, Bookmark, FileText } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'Business Registration',
      description: 'Register your business with ease. We handle all the paperwork and ensure compliance with regulatory requirements.',
      icon: <Building2 className="w-10 h-10 text-primary-500" />,
    },
    {
      id: 2,
      title: 'GST Registration & Filing',
      description: 'Let our experts handle your GST registration and filing to ensure you remain compliant with tax regulations.',
      icon: <FileCheck className="w-10 h-10 text-primary-500" />,
    },
    {
      id: 3,
      title: 'Income Tax Returns',
      description: 'We prepare and file your income tax returns accurately and timely, maximizing legitimate deductions.',
      icon: <FileSpreadsheet className="w-10 h-10 text-primary-500" />,
    },
    {
      id: 4,
      title: 'Trademark Registration',
      description: 'Protect your brand with our comprehensive trademark registration services.',
      icon: <Bookmark className="w-10 h-10 text-primary-500" />,
    },
    {
      id: 5,
      title: 'Accounting & Bookkeeping',
      description: 'Our expert team provides complete accounting and bookkeeping services tailored to your business needs.',
      icon: <FileSpreadsheet className="w-10 h-10 text-primary-500" />,
    },
    {
      id: 6,
      title: 'Legal Documentation',
      description: 'We prepare and review all legal documents required for your business operations.',
      icon: <FileText className="w-10 h-10 text-primary-500" />,
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <PageHeader
        title="Our Services"
        subtitle="Comprehensive business solutions tailored to your needs"
      />
      
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </section>
      
      <CTA />
    </motion.div>
  );
};

export default Services;