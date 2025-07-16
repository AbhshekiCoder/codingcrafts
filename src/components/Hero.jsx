import React from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaWhatsapp, FaCode, FaLaptopCode, FaTools } from 'react-icons/fa';

const Hero = ({ darkMode }) => {
  return (
    <div className={`pt-28 pb-20 ${darkMode ? 'bg-gradient-to-b from-gray-900 to-gray-800' : 'bg-gradient-to-b from-blue-50 to-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Build Smart. Build Fast. <br />
              <span className="text-blue-600">Website & Automation Solutions</span>
            </h1>
            <p className={`text-lg mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              We specialize in building high-performing websites and integrating smart automation—from AI chatbots to WhatsApp and workflow automation—to take your business to the next level.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold text-lg shadow-lg hover:bg-blue-700 transition-colors"
              >
               <a href = "#contact"> Get a Free Demo </a>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-3 rounded-lg font-semibold text-lg border-2 ${darkMode ? 'border-blue-400 text-white' : 'border-blue-600 text-blue-600'} hover:bg-blue-100 transition-colors`}
              >
               <a href = "#plans">  View Plans </a>
              </motion.button>
            </div>

            {/* Features */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FeatureItem icon={<FaLaptopCode />} text="Website Development" darkMode={darkMode} />
              <FeatureItem icon={<FaRobot />} text="AI Automation" darkMode={darkMode} />
              <FeatureItem icon={<FaWhatsapp />} text="WhatsApp Bots" darkMode={darkMode} />
              <FeatureItem icon={<FaTools />} text="Service Automation" darkMode={darkMode} />
            </div>
          </motion.div>

          {/* Right Side Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative  "
          >
            {/* Gradient Card */}
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl border-8 border-white">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-90"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-6 sm:p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">We Offer:</h3>
                  <div className="space-y-3">
                    {['Modern Websites', 'AI Chatbots', 'WhatsApp Bots', 'Custom Workflows', '24/7 Support'].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                        className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg py-2 px-4 text-white font-medium"
                      >
                        {item}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Discount Badge */}
            <motion.div
              className="absolute -top-6 -left-6 bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center shadow-lg max-md:w-14 max-md:h-14 max-md:-left-3"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="font-bold text-gray-800 text-sm flex justify-center items-center  p-6">Save 40%</span>
            </motion.div>

            {/* Floating Support Badge */}
            <motion.div
              className="absolute -bottom-6 -right-6 bg-green-500 w-20 h-20 rounded-full flex items-center justify-center shadow-lg  max-md:-right-3"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="font-bold text-white text-center text-sm">24/7<br />Support</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const FeatureItem = ({ icon, text, darkMode }) => (
  <div className="flex items-center space-x-3">
    <div className="text-2xl text-blue-600">{icon}</div>
    <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>{text}</span>
  </div>
);

export default Hero;
