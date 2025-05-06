import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Information */}
          <div>
            <Link to="/" className="flex items-center mb-6">
              <span className="font-bold text-2xl">
                Company<span className="text-primary-400">Avenue</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-6">
              Your trusted partner for business registration, accounting, and legal compliance services.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gray-800 hover:bg-primary-500 text-white p-2 rounded-full transition duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-primary-500 text-white p-2 rounded-full transition duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-primary-500 text-white p-2 rounded-full transition duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-primary-500 text-white p-2 rounded-full transition duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary-400 transition duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-primary-400 transition duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-primary-400 transition duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-primary-400 transition duration-200">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-400 transition duration-200">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-400 transition duration-200">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-400 transition duration-200">
                  Business Registration
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-400 transition duration-200">
                  GST Registration & Filing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-400 transition duration-200">
                  Income Tax Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-400 transition duration-200">
                  Trademark Registration
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-400 transition duration-200">
                  Accounting & Bookkeeping
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-400 transition duration-200">
                  Legal Documentation
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-primary-400 mr-3 mt-1" />
                <p className="text-gray-400">
                  123 Business Avenue<br />
                  Financial District<br />
                  New York, NY 10004
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-primary-400 mr-3" />
                <a href="tel:+15551234567" className="text-gray-400 hover:text-primary-400 transition duration-200">
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-primary-400 mr-3" />
                <a href="mailto:info@companyavenue.com" className="text-gray-400 hover:text-primary-400 transition duration-200">
                  info@companyavenue.com
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <hr className="my-12 border-gray-800" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 mb-4 md:mb-0">
            &copy; {currentYear} Company Avenue Advisory. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-primary-400 transition duration-200">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-primary-400 transition duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-primary-400 transition duration-200">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;