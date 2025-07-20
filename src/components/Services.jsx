import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaRobot, FaWhatsapp, FaCogs, FaComments, FaTools,
  FaLaptopCode, FaCheck, FaTimes, FaChartLine, FaArrowRight
} from 'react-icons/fa';
import { FiZap, FiTrendingUp } from 'react-icons/fi';

const Services = ({ darkMode }) => {
  const [selectedService, setSelectedService] = useState(null);
  const [showContactModal, setShowContactModal] = useState(false);
  
  const services = [
    {
      icon: <FaLaptopCode className="text-4xl text-blue-500" />,
      title: 'Website Development',
      highlight: true,
      description:
        'Get fast, modern, mobile-friendly websites that reflect your brand. We build business websites, automation platforms, landing pages, portfolios, and more — with full SEO & performance optimization.',
      details: [
        'Responsive design for all devices',
        'SEO optimization built-in',
        'E-commerce integration',
        'Content management system',
        'Performance optimization',
        'Custom animations and interactions'
      ],
      color: "blue"
    },
    {
      icon: <FaRobot className="text-3xl text-purple-500" />,
      title: 'AI Automation',
      description: 'Smart AI-powered systems to streamline decisions and reduce repetitive tasks.',
      details: [
        'Custom AI solutions',
        'Process automation',
        'Data analysis and insights',
        'Machine learning integration',
        'Natural language processing'
      ],
      color: "purple"
    },
    {
      icon: <FaWhatsapp className="text-3xl text-green-500" />,
      title: 'WhatsApp Automation',
      description: 'Automate support, updates, and messages on WhatsApp for instant engagement.',
      details: [
        'Automated responses',
        'Customer support flows',
        'Notification systems',
        'API integration',
        'Analytics dashboard'
      ],
      color: "green"
    },
    {
      icon: <FaCogs className="text-3xl text-yellow-500" />,
      title: 'Service Automation',
      description: 'End-to-end automation of your workflows, saving hours daily.',
      details: [
        'Workflow mapping',
        'Integration with existing tools',
        'Custom automation scripts',
        'Scheduled tasks',
        'Error handling systems'
      ],
      color: "yellow"
    },
    {
      icon: <FaComments className="text-3xl text-red-500" />,
      title: 'Chat Automation',
      description: '24/7 AI chatbots with contextual understanding and seamless handoffs.',
      details: [
        'Natural conversation flows',
        'Multi-channel support',
        'Sentiment analysis',
        'Human handoff capability',
        'Learning and improvement'
      ],
      color: "red"
    },
    {
      icon: <FaTools className="text-3xl text-teal-500" />,
      title: 'Bot Development',
      description: 'Build custom bots for web, apps, or internal operations.',
      details: [
        'Custom bot development',
        'API integration',
        'Deployment support',
        'Analytics dashboard',
        'Maintenance plans'
      ],
      color: "teal"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    },
    hover: { 
      y: -10,
      scale: 1.03,
      transition: { 
        duration: 0.3,
        ease: "easeOut"
      } 
    }
  };

  const handleServiceClick = (index) => {
    setSelectedService(index);
  };

  return (
    <section 
      id="services" 
      className={`relative py-24 overflow-hidden ${darkMode ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gradient-to-br from-blue-50 to-indigo-50'}`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full opacity-10 ${darkMode ? 'bg-white' : 'bg-blue-500'}`}
            style={{
              width: Math.random() * 120 + 30,
              height: Math.random() * 120 + 30,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mb-4"
          >
            <span className={`inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium ${
              darkMode ? 'bg-blue-900/30 text-blue-300' : 'bg-blue-100 text-blue-800'
            }`}>
              <FiZap className="mr-2 animate-pulse" /> Powerful Solutions
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r ${
              darkMode ? 'from-blue-300 to-purple-400' : 'from-blue-600 to-purple-600'
            }`}
          >
            Our Digital Services
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`text-xl max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
          >
            Transforming businesses with cutting-edge automation and web solutions tailored to your unique needs.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover="hover"
              className={`relative rounded-2xl overflow-hidden shadow-xl transition-all duration-300 ${
                service.highlight ? 'lg:col-span-2' : ''
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${
                service.highlight 
                  ? darkMode 
                    ? 'from-blue-900/30 to-purple-900/30' 
                    : 'from-blue-100 to-purple-100' 
                  : darkMode 
                    ? 'bg-gray-800/80' 
                    : 'bg-white/90'
              } backdrop-blur-sm border ${
                service.highlight 
                  ? `border-${service.color}-500/50` 
                  : `border-${service.color}-300/30`
              }`} />
              
              {service.highlight && (
                <motion.div 
                  className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full font-bold text-xs shadow-lg flex items-center"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    boxShadow: ['0 10px 15px -3px rgba(0,0,0,0.1)', '0 10px 25px -5px rgba(59,130,246,0.4)', '0 10px 15px -3px rgba(0,0,0,0.1)']
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <FiZap className="mr-2 animate-pulse" /> PRIMARY SERVICE
                </motion.div>
              )}
              
              <div className="relative p-8">
                <div className="flex items-start mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${
                    darkMode 
                      ? `from-${service.color}-900/30 to-${service.color}-700/30` 
                      : `from-${service.color}-100 to-${service.color}-50`
                  }`}>
                    {service.icon}
                  </div>
                  <h3 className={`text-2xl font-bold ml-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {service.title}
                  </h3>
                </div>
                
                <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {service.description}
                </p>
                
                <div className="flex justify-between items-center mt-8">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleServiceClick(index)}
                    className={`flex items-center font-medium ${
                      darkMode ? `text-${service.color}-400` : `text-${service.color}-600`
                    }`}
                  >
                    View Details <FaArrowRight className="ml-2 text-xs" />
                  </motion.button>
                  
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    darkMode ? 'bg-gray-700' : 'bg-gray-100'
                  }`}>
                    <div className={`w-3 h-3 rounded-full bg-${service.color}-500`} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`mt-20 rounded-3xl overflow-hidden shadow-2xl ${
            darkMode ? 'bg-gradient-to-br from-gray-800/50 to-gray-900/50' : 'bg-gradient-to-br from-white to-blue-50'
          } backdrop-blur-sm border ${darkMode ? 'border-gray-700' : 'border-blue-100'}`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Text Area */}
            <div className="p-10">
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`text-3xl font-bold mb-6 bg-gradient-to-r ${
                  darkMode ? 'from-blue-300 to-purple-400' : 'from-blue-600 to-purple-600'
                } bg-clip-text text-transparent`}
              >
                Why Our Solutions Stand Out
              </motion.h3>
              
              <ul className={`space-y-5 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {[
                  'Custom solutions tailored to your specific business needs',
                  'Seamless integration with your existing tools and workflows',
                  'Enterprise-grade quality at affordable pricing',
                  'Continuous support and feature upgrades',
                  'Trusted by startups, creators, and growing businesses worldwide'
                ].map((point, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <div className={`p-1.5 rounded-full mr-4 mt-1 ${
                      darkMode ? 'bg-blue-900/30' : 'bg-blue-100'
                    }`}>
                      <FaCheck className={`text-xs ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                    </div>
                    <span>{point}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowContactModal(true)}
                className={`mt-8 px-8 py-3.5 rounded-xl font-semibold flex items-center ${
                  darkMode 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white' 
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'
                }`}
              >
                <FaComments className="mr-3" /> Discuss Your Project
              </motion.button>
            </div>

            {/* Right: Benefits Chart */}
            <div className={`p-10 flex items-center justify-center ${
              darkMode ? 'bg-gray-800/30' : 'bg-blue-50/50'
            }`}>
              <div className="relative w-full max-w-lg">
                {/* Animated background elements */}
                <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full opacity-10 blur-2xl animate-pulse"></div>
                <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-400 rounded-full opacity-10 blur-2xl animate-pulse"></div>
                
                <div className={`relative rounded-2xl p-8 ${
                  darkMode ? 'bg-gray-800/50 backdrop-blur-sm' : 'bg-white/80 backdrop-blur-sm'
                } border ${darkMode ? 'border-gray-700' : 'border-blue-100'} shadow-lg`}>
                  <div className="flex items-center mb-6">
                    <FiTrendingUp className={`text-2xl mr-3 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                    <h4 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Business Impact Metrics
                    </h4>
                  </div>
                  
                  <div className="space-y-5">
                    {[
                      { label: 'Cost Reduction', value: 75, color: 'from-blue-500 to-blue-600' },
                      { label: 'Efficiency Gain', value: 85, color: 'from-green-500 to-green-600' },
                      { label: 'Error Reduction', value: 90, color: 'from-purple-500 to-purple-600' },
                      { label: 'Customer Satisfaction', value: 80, color: 'from-yellow-500 to-orange-500' },
                      { label: 'Lead Conversion', value: 65, color: 'from-red-500 to-pink-600' }
                    ].map((item, index) => (
                      <div key={index}>
                        <div className="flex justify-between text-sm mb-2">
                          <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{item.label}</span>
                          <span className={`font-bold ${darkMode ? 'text-gray-200' : 'text-gray-900'}`}>{item.value}%</span>
                        </div>
                        <div className={`h-3 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                          <motion.div
                            className={`h-full rounded-full bg-gradient-to-r ${item.color}`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.value}%` }}
                            transition={{ duration: 1.2, delay: index * 0.2, ease: "easeOut" }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 flex items-center">
                    <div className="mr-3 p-2 rounded-lg bg-blue-500/10">
                      <FaChartLine className="text-blue-500" />
                    </div>
                    <p className={darkMode ? 'text-gray-400 text-sm' : 'text-gray-600 text-sm'}>
                      Based on average results from clients after 6 months of implementation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedService(null)}
          >
            <motion.div 
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              className={`relative rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden ${
                darkMode ? 'bg-gray-900' : 'bg-white'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-4 right-4 p-2 rounded-full bg-black/20 text-white z-10"
                onClick={() => setSelectedService(null)}
              >
                <FaTimes />
              </button>
              
              <div className={`p-8 bg-gradient-to-r ${
                services[selectedService].color === 'blue' ? 'from-blue-500 to-blue-600' :
                services[selectedService].color === 'purple' ? 'from-purple-500 to-purple-600' :
                services[selectedService].color === 'green' ? 'from-green-500 to-green-600' :
                services[selectedService].color === 'yellow' ? 'from-yellow-500 to-yellow-600' :
                services[selectedService].color === 'red' ? 'from-red-500 to-red-600' :
                'from-teal-500 to-teal-600'
              } text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 opacity-20">
                  {React.cloneElement(services[selectedService].icon, { className: "text-8xl" })}
                </div>
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold">{services[selectedService].title}</h2>
                  <p className="mt-2 opacity-90 max-w-lg">{services[selectedService].description}</p>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className={`text-xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Service Details
                </h3>
                
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {services[selectedService].details.map((detail, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className={`flex items-start p-4 rounded-xl ${
                        darkMode ? 'bg-gray-800' : 'bg-gray-100'
                      }`}
                    >
                      <div className={`p-1.5 rounded-full mr-3 ${
                        darkMode ? 'bg-blue-900/30' : 'bg-blue-100'
                      }`}>
                        <FaCheck className={`text-xs ${
                          darkMode ? 'text-blue-400' : 'text-blue-600'
                        }`} />
                      </div>
                      <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{detail}</span>
                    </motion.li>
                  ))}
                </ul>
                
                <div className="flex justify-end">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className={`px-8 py-3 rounded-xl font-medium text-white ${
                      services[selectedService].color === 'blue' ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                      services[selectedService].color === 'purple' ? 'bg-gradient-to-r from-purple-500 to-purple-600' :
                      services[selectedService].color === 'green' ? 'bg-gradient-to-r from-green-500 to-green-600' :
                      services[selectedService].color === 'yellow' ? 'bg-gradient-to-r from-yellow-500 to-yellow-600' :
                      services[selectedService].color === 'red' ? 'bg-gradient-to-r from-red-500 to-red-600' :
                      'bg-gradient-to-r from-teal-500 to-teal-600'
                    }`}
                    onClick={() => setShowContactModal(true)}
                  >
                    Get Started
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Modal */}
      <AnimatePresence>
        {showContactModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowContactModal(false)}
          >
            <motion.div 
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              className={`relative rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden ${
                darkMode ? 'bg-gray-900' : 'bg-white'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-4 right-4 p-2 rounded-full bg-black/20 text-white z-10"
                onClick={() => setShowContactModal(false)}
              >
                <FaTimes />
              </button>
              
              <div className="p-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 opacity-20">
                  <FaComments className="text-8xl" />
                </div>
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold">Let's Discuss Your Project</h2>
                  <p className="mt-2 opacity-90">Share your requirements and we'll get back to you within 24 hours</p>
                </div>
              </div>
              
              <div className="p-8">
                <form className="space-y-5">
                  <div>
                    <label className={`block mb-2 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Your Name
                    </label>
                    <input 
                      type="text" 
                      className={`w-full px-4 py-3 rounded-xl ${
                        darkMode ? 'bg-gray-800 text-white border-gray-700' : 'bg-gray-100 text-gray-800 border-gray-200'
                      } border focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label className={`block mb-2 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      className={`w-full px-4 py-3 rounded-xl ${
                        darkMode ? 'bg-gray-800 text-white border-gray-700' : 'bg-gray-100 text-gray-800 border-gray-200'
                      } border focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      placeholder="john@company.com"
                    />
                  </div>
                  
                  <div>
                    <label className={`block mb-2 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Project Details
                    </label>
                    <textarea 
                      rows={4}
                      className={`w-full px-4 py-3 rounded-xl ${
                        darkMode ? 'bg-gray-800 text-white border-gray-700' : 'bg-gray-100 text-gray-800 border-gray-200'
                      } border focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      placeholder="Tell us about your project requirements..."
                    />
                  </div>
                  
                  <div>
                    <label className={`block mb-2 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Services Interested In
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {services.map((service, i) => (
                        <div key={i} className={`flex items-center p-3 rounded-lg ${
                          darkMode ? 'bg-gray-800' : 'bg-gray-100'
                        }`}>
                          <input 
                            type="checkbox" 
                            id={`service-${i}`}
                            className={`mr-3 h-4 w-4 ${
                              darkMode ? 'text-blue-500 bg-gray-700 border-gray-600' : 'text-blue-600 bg-white border-gray-300'
                            } rounded focus:ring-blue-500`}
                          />
                          <label htmlFor={`service-${i}`} className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                            {service.title}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-4 rounded-xl font-bold text-lg text-white bg-gradient-to-r from-blue-600 to-purple-600`}
                  >
                    Submit Request
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;