import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import TeamMember from '../components/TeamMember';
import CTA from '../components/CTA';

const About: React.FC = () => {
  const team = [
    {
      id: 1,
      name: 'Jane Smith',
      position: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Jane has over 15 years of experience in financial consulting and accounting services.',
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'Head of Tax Advisory',
      image: 'https://images.pexels.com/photos/3785104/pexels-photo-3785104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Michael specializes in tax planning and compliance for businesses of all sizes.',
    },
    {
      id: 3,
      name: 'Priya Sharma',
      position: 'Legal Counsel',
      image: 'https://images.pexels.com/photos/5669788/pexels-photo-5669788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Priya brings extensive experience in corporate law and trademark registration.',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <PageHeader
        title="About Us"
        subtitle="The team behind Company Avenue Advisory"
      />
      
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Story</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg leading-relaxed mb-4">
                Founded in 2010, Company Avenue Advisory has grown from a small accounting firm to a comprehensive business services provider trusted by hundreds of clients worldwide.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Our journey began with a simple mission: to simplify business compliance and financial management for entrepreneurs. Today, we're proud to offer a complete suite of services that help businesses of all sizes thrive.
              </p>
            </div>
            <div>
              <p className="text-lg leading-relaxed mb-4">
                What sets us apart is our combination of deep expertise and personalized service. We believe that every business deserves tailored solutions that address their unique challenges and opportunities.
              </p>
              <p className="text-lg leading-relaxed">
                Our team of seasoned professionals brings together expertise in accounting, tax, legal compliance, and business strategy to deliver holistic solutions that drive growth and ensure compliance.
              </p>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-3xl font-bold mb-10 text-gray-800">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {team.map((member) => (
              <TeamMember
                key={member.id}
                name={member.name}
                position={member.position}
                image={member.image}
                bio={member.bio}
              />
            ))}
          </div>
        </div>
      </section>
      
      <CTA />
    </motion.div>
  );
};

export default About;