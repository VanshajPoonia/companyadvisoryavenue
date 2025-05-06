import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  position: string;
  image: string;
  bio: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, position, image, bio }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-custom overflow-hidden group"
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
          <div className="flex space-x-3">
            <a
              href="#"
              className="bg-white/20 backdrop-blur-sm hover:bg-primary-500 text-white p-2 rounded-full transition duration-300"
              aria-label={`${name}'s LinkedIn profile`}
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="bg-white/20 backdrop-blur-sm hover:bg-primary-500 text-white p-2 rounded-full transition duration-300"
              aria-label={`${name}'s Twitter profile`}
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${name.toLowerCase().replace(' ', '.')}@companyavenue.com`}
              className="bg-white/20 backdrop-blur-sm hover:bg-primary-500 text-white p-2 rounded-full transition duration-300"
              aria-label={`Email ${name}`}
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-1">{name}</h3>
        <p className="text-primary-500 font-medium mb-4">{position}</p>
        <p className="text-gray-600">{bio}</p>
      </div>
    </motion.div>
  );
};

export default TeamMember;