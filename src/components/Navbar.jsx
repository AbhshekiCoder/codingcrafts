
import React, { useState, useEffect } from 'react';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import { FaWhatsapp, FaRobot } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'} ${darkMode ? 'bg-gray-900' : 'bg-white'} shadow-md`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <FaRobot className={`text-3xl mr-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              <span className="text-xl font-bold">CodingCraft</span>
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#plans" className={`font-medium hover:${darkMode ? 'text-blue-400' : 'text-blue-600'} transition-colors`}>Plans</a>
            <a href="#services" className={`font-medium hover:${darkMode ? 'text-blue-400' : 'text-blue-600'} transition-colors`}>Services</a>
            <a href="#projects" className={`font-medium hover:${darkMode ? 'text-blue-400' : 'text-blue-600'} transition-colors`}>Projects</a>
            <a href="#testimonials" className={`font-medium hover:${darkMode ? 'text-blue-400' : 'text-blue-600'} transition-colors`}>Testimonials</a>
            <a href="#contact" className={`font-medium hover:${darkMode ? 'text-blue-400' : 'text-blue-600'} transition-colors`}>Contact</a>
            
            <button 
              onClick={() => setDarkMode(!darkMode)} 
              className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-700'}`}
            >
              {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center px-4 py-2 rounded-lg font-medium ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
            >
              <FaWhatsapp className="mr-2" />  <a href="https://wa.me/916266884504" target="_blank"> Get Started </a>
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setDarkMode(!darkMode)} 
              className={`p-2 rounded-full mr-4 ${darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-700'}`}
            >
              {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className={`md:hidden ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#plans" className={`block px-3 py-2 rounded-md font-medium ${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`}>Plans</a>
            <a href="#services" className={`block px-3 py-2 rounded-md font-medium ${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`}>Services</a>
            <a href="#projects" className={`block px-3 py-2 rounded-md font-medium ${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`}>Projects</a>
            <a href="#testimonials" className={`block px-3 py-2 rounded-md font-medium ${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`}>Testimonials</a>
            <a href="#contact" className={`block px-3 py-2 rounded-md font-medium ${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`}>Contact</a>
            <button className={`flex items-center w-full px-3 py-2 rounded-md font-medium mt-4 ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}>
              <FaWhatsapp className="mr-2" /> Get Started
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;