import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="text-primary-500 mr-2">
              <FileText className="w-8 h-8" />
            </div>
            <div>
              <span className={`font-bold text-xl ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
                Company
              </span>
              <span className={`font-bold text-xl ${isScrolled ? 'text-primary-500' : 'text-primary-300'}`}>
                Avenue
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors duration-200 ${
                  location.pathname === link.path
                    ? isScrolled
                      ? 'text-primary-500'
                      : 'text-white opacity-100'
                    : isScrolled
                      ? 'text-gray-600 hover:text-primary-500'
                      : 'text-white opacity-80 hover:opacity-100'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2 px-5 rounded-lg transition duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-5 space-y-5">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block font-medium ${
                    location.pathname === link.path
                      ? 'text-primary-500'
                      : 'text-gray-600 hover:text-primary-500'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="block bg-primary-500 hover:bg-primary-600 text-white font-medium py-2 px-5 text-center rounded-lg transition duration-300"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;