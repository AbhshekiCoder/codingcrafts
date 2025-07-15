// src/components/Footer.js
import React from 'react';
import { FaRobot, FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt, FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={`pt-16 pb-8 ${darkMode ? 'bg-gray-900 text-gray-300' : 'bg-gray-900 text-gray-300'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center mb-6">
              <FaRobot className="text-3xl text-blue-400 mr-2" />
              <span className="text-xl font-bold text-white">CodingCraft</span>
            </div>
            <p className="mb-6">
              We build intelligent automation solutions that transform businesses, reduce costs, and improve efficiency.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaGithub size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Services</h3>
            <ul className="space-y-3">
              {['AI Automation', 'WhatsApp Automation', 'Chat Bots', 'Service Automation', 'Custom Solutions', 'Process Optimization'].map((service, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-blue-400 transition-colors">{service}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#plans" className="hover:text-blue-400 transition-colors">Plans & Pricing</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Services</a></li>
              <li><a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a></li>
              <li><a href="#testimonials" className="hover:text-blue-400 transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaPhone className="text-blue-400 mt-1 mr-3" />
                <a href="tel:6266884504" className="hover:text-blue-400 transition-colors">+91 6266884504</a>
              </li>
              <li className="flex items-start">
                <FaEnvelope className="text-blue-400 mt-1 mr-3" />
                <a href="mailto:codingcraft25@gmail.com" className="hover:text-blue-400 transition-colors">codingcraft25@gmail.com</a>
              </li>
              <li className="flex items-start">
                <FaWhatsapp className="text-green-400 mt-1 mr-3" />
                <a href="https://wa.me/916266884504" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Chat on WhatsApp</a>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-blue-400 mt-1 mr-3" />
                <span>India</span>
              </li>
            </ul>
            
            <div className="mt-6">
              <h4 className="text-lg font-semibold text-white mb-4">Subscribe to Newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-2 w-full rounded-l-lg text-gray-800 focus:outline-none"
                />
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-lg font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0">
            &copy; {currentYear} CodingCraft. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;