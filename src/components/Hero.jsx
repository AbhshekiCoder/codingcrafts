import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaWhatsapp, FaCode, FaLaptopCode, FaTools, FaRocket, FaChartLine, FaShieldAlt, FaLightbulb } from 'react-icons/fa';

const Hero = ({ darkMode }) => {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  return (
    <div className={`relative pt-28 pb-32 overflow-hidden ${darkMode ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gradient-to-br from-blue-50 to-indigo-50'}`}>
      {/* Subtle animated background elements */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-300 blur-3xl opacity-20"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-purple-300 blur-3xl opacity-20"
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={isMounted ? { opacity: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="mb-6 inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium"
            >
              <span className="flex items-center gap-2">
                <FaRocket className="text-yellow-300" /> Next-Gen Solutions
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isMounted ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.5 }}
              className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}
            >
              Transform Your Business <br />
              <motion.span 
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%'] 
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "linear"
                }}
              >
                With AI & Automation
              </motion.span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isMounted ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.5 }}
              className={`text-xl mb-10 max-w-2xl ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
            >
              We build cutting-edge websites and intelligent automation systems that enhance customer engagement, streamline operations, and drive growth.
            </motion.p>

            {/* Buttons */}
            <motion.div 
              className="flex flex-wrap gap-4 mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={isMounted ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-xl font-bold text-lg shadow-lg"
              >
                <a href="#contact" className="flex items-center gap-2">
                  <FaRocket /> Get a Free Demo
                </a>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className={`px-8 py-4 rounded-xl font-bold text-lg border-2 ${
                  darkMode 
                    ? 'border-indigo-500 text-white bg-gray-800/50' 
                    : 'border-indigo-600 text-indigo-700 bg-white'
                }`}
              >
                <a href="#plans" className="flex items-center gap-2">
                  <FaChartLine /> View Pricing Plans
                </a>
              </motion.button>
            </motion.div>

            {/* Features Grid */}
            <motion.div 
              className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4"
              initial={{ opacity: 0 }}
              animate={isMounted ? { opacity: 1 } : {}}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <FeatureItem 
                icon={<FaLaptopCode className="text-blue-500" />} 
                text="Web Development"
                darkMode={darkMode} 
              />
              <FeatureItem 
                icon={<FaRobot className="text-purple-500" />} 
                text="AI Chatbots" 
                darkMode={darkMode}
              />
              <FeatureItem 
                icon={<FaWhatsapp className="text-green-500" />} 
                text="WhatsApp Automation" 
                darkMode={darkMode}
              />
              <FeatureItem 
                icon={<FaTools className="text-yellow-500" />} 
                text="Workflow Automation" 
                darkMode={darkMode}
              />
              <FeatureItem 
                icon={<FaShieldAlt className="text-red-500" />} 
                text="Security Solutions" 
                darkMode={darkMode}
              />
              <FeatureItem 
                icon={<FaLightbulb className="text-cyan-500" />} 
                text="Consulting" 
                darkMode={darkMode}
              />
            </motion.div>
          </motion.div>

          {/* Right Side Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isMounted ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Animated Card */}
            <motion.div
              className="relative rounded-3xl overflow-hidden shadow-2xl"
              animate={{ 
                y: [0, -5, 0],
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 opacity-90"></div>
              
              {/* Inner Glow Effect */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0%,_transparent_70%)]"></div>
              
              {/* Card Content */}
              <div className="relative z-10 py-10 px-8">
                <motion.h3 
                  className="text-3xl font-bold text-white mb-8 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  Our <span className="text-yellow-300">Solutions</span>
                </motion.h3>
                
                <div className="space-y-5">
                  {[
                    { icon: <FaCode className="text-yellow-300" />, text: 'Custom Web Development' },
                    { icon: <FaRobot className="text-blue-300" />, text: 'AI-Powered Chatbots' },
                    { icon: <FaWhatsapp className="text-green-300" />, text: 'WhatsApp Business Automation' },
                    { icon: <FaTools className="text-purple-300" />, text: 'Workflow Optimization' },
                    { icon: <FaLaptopCode className="text-pink-300" />, text: 'E-commerce Solutions' },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      animate={isMounted ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
                      className="flex items-center bg-white/10 backdrop-blur-sm rounded-xl py-4 px-6 border border-white/20"
                      whileHover={{ 
                        scale: 1.02,
                        backgroundColor: "rgba(255, 255, 255, 0.15)"
                      }}
                    >
                      <div className="mr-4 text-2xl">{item.icon}</div>
                      <span className="font-medium text-white">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div 
                  className="mt-10 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4 }}
                >
                  <button className="px-6 py-3 bg-white text-indigo-700 rounded-lg font-bold hover:bg-indigo-50 transition-colors">
                    Explore All Features
                  </button>
                </motion.div>
              </div>
            </motion.div>

            {/* Floating Discount Badge */}
            <motion.div
              className="absolute -top-5 -left-5 z-20"
              animate={{ 
                y: [0, -8, 0],
                rotate: [0, -3, 0, 3, 0]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-xl">
                  <span className="font-bold text-gray-900 text-xs text-center px-2">Launch Discount</span>
                </div>
                <div className="absolute inset-0 rounded-full border-4 border-yellow-300 animate-ping opacity-20"></div>
              </div>
            </motion.div>

            {/* Floating Support Badge */}
            <motion.div
              className="absolute -bottom-5 -right-5 z-20"
              animate={{ 
                y: [0, 8, 0],
                rotate: [0, 3, 0, -3, 0]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex flex-col items-center justify-center shadow-xl">
                <span className="font-bold text-white text-xs text-center">24/7 Support</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const FeatureItem = ({ icon, text, darkMode }) => {
  return (
    <motion.div 
      className={`flex flex-col items-center p-4 rounded-xl backdrop-blur-sm border ${
        darkMode 
          ? 'border-gray-700 bg-gray-900/30 text-white' 
          : 'border-indigo-200 bg-white/70 text-gray-800'
      }`}
      whileHover={{ 
        y: -3,
      }}
      transition={{ duration: 0.2 }}
    >
      <div className="text-3xl mb-2">{icon}</div>
      <span className="font-medium text-center text-sm">{text}</span>
    </motion.div>
  );
};

export default Hero;