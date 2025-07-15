import React from 'react';
import { motion } from 'framer-motion';
import {
  FaRobot, FaWhatsapp, FaCogs, FaComments, FaTools,
  FaLaptopCode, FaCheck
} from 'react-icons/fa';

const Services = ({ darkMode }) => {
  const services = [
    {
      icon: <FaLaptopCode className="text-4xl text-blue-600" />,
      title: 'Website Development',
      highlight: true,
      description:
        'Get fast, modern, mobile-friendly websites that reflect your brand. We build business websites, automation platforms, landing pages, portfolios, and more — with full SEO & performance optimization.'
    },
    {
      icon: <FaRobot className="text-3xl text-blue-500" />,
      title: 'AI Automation',
      description: 'Smart AI-powered systems to streamline decisions and reduce repetitive tasks.'
    },
    {
      icon: <FaWhatsapp className="text-3xl text-green-500" />,
      title: 'WhatsApp Automation',
      description: 'Automate support, updates, and messages on WhatsApp for instant engagement.'
    },
    {
      icon: <FaCogs className="text-3xl text-purple-500" />,
      title: 'Service Automation',
      description: 'End-to-end automation of your workflows, saving hours daily.'
    },
    {
      icon: <FaComments className="text-3xl text-yellow-500" />,
      title: 'Chat Automation',
      description: '24/7 AI chatbots with contextual understanding and seamless handoffs.'
    },
    {
      icon: <FaTools className="text-3xl text-red-500" />,
      title: 'Bot Development',
      description: 'Build custom bots for web, apps, or internal operations.'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="services" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`text-lg max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
          >
            We specialize in Website Development and intelligent automation solutions that transform how you run your business.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              className={`relative rounded-2xl p-8 shadow-lg transition-transform duration-300 hover:-translate-y-2 ${
                darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-50 hover:bg-white'
              } ${service.highlight ? 'lg:col-span-2 border-2 border-blue-600' : ''}`}
            >
              {service.highlight && (
                <span className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  PRIMARY SERVICE
                </span>
              )}
              <div className="flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className={`text-xl font-bold text-center mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {service.title}
              </h3>
              <p className={`text-center ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits Section */}
        <div className={`mt-20 rounded-2xl overflow-hidden shadow-2xl ${darkMode ? 'bg-gray-800' : 'bg-blue-50'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Text Area */}
            <div className="p-10">
              <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Why Choose Us?
              </h3>
              <ul className={`space-y-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {[
                  'Custom websites and automation tailored to your goals',
                  'Seamless integrations with your existing tools',
                  'Affordable pricing with enterprise-grade quality',
                  'Ongoing support and feature upgrades',
                  'Trusted by startups, creators & growing businesses'
                ].map((point, i) => (
                  <li key={i} className="flex items-start">
                    <div className="bg-blue-500 rounded-full p-1 mr-3 mt-1">
                      <FaCheck className="text-white text-xs" />
                    </div>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`mt-8 px-6 py-3 rounded-lg font-semibold ${
                  darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                Discuss Your Project
              </motion.button>
            </div>

            {/* Right: Benefits Chart */}
            <div className={`${darkMode ? 'bg-gray-700' : 'bg-blue-100'} p-10 flex items-center justify-center`}>
              <div className="relative w-full max-w-md">
                <div className="absolute top-0 left-0 w-28 h-28 bg-blue-400 rounded-full opacity-20 blur-xl"></div>
                <div className="absolute bottom-0 right-0 w-28 h-28 bg-purple-400 rounded-full opacity-20 blur-xl"></div>

                <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
                  <h4 className='text-xl font-bold mb-4 text-white' >
                    Automation Impact
                  </h4>
                  <div className="space-y-4">
                    {[
                      { label: 'Cost Reduction', value: 70, color: 'from-blue-500 to-blue-600' },
                      { label: 'Efficiency Gain', value: 85, color: 'from-green-500 to-green-600' },
                      { label: 'Error Reduction', value: 90, color: 'from-purple-500 to-purple-600' },
                      { label: 'Customer Satisfaction', value: 80, color: 'from-yellow-500 to-orange-500' }
                    ].map((item, index) => (
                      <div key={index}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className='text-gray-300' >{item.label}</span>
                          <span className="font-bold text-gray-300">{item.value}%</span>
                        </div>
                        <div className={`h-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                          <motion.div
                            className={`h-full rounded-full bg-gradient-to-r ${item.color}`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.value}%` }}
                            transition={{ duration: 1, delay: index * 0.15 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
