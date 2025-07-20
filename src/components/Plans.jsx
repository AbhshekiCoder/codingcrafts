import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheck, FaCrown, FaRocket, FaRegStar, FaRegLightbulb, FaArrowRight, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { FiZap } from 'react-icons/fi';

const Plans = ({ darkMode }) => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [customQuoteVisible, setCustomQuoteVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const plans = [
    {
      name: 'Basic',
      price: '₹ 12,000',
      description: 'Perfect for startups and small businesses',
      features: [
        '100 GB Storage',
        'Free Hosting',
        '5 Web Pages',
        '24/7 Support',
        'Free Domain for 1 Year',
        '6 Month Maintenance Free',
        'Basic AI Chatbot'
      ],
      popular: false,
      icon: <FaRegLightbulb className="text-yellow-400" />,
      color: 'from-blue-400 to-blue-600',
      accentColor: 'blue'
    },
    {
      name: 'Standard',
      price: '₹ 20,000',
      description: 'Ideal for growing businesses',
      features: [
        '100 GB Storage',
        'Free Hosting',
        '5 - 8 Web Pages',
        'Free Domain for 1 Year',
        '24/7 Support',
        '1 Year Maintenance Free',
        'WhatsApp Automation',
        'Custom AI Chatbot'
      ],
      popular: true,
      icon: <FaRocket className="text-orange-400" />,
      color: 'from-purple-500 to-indigo-700',
      accentColor: 'purple'
    },
    {
      name: 'Premium',
      price: '₹ 35,000',
      description: 'For enterprises and high-traffic sites',
      features: [
        '100 GB Storage',
        'Up to 10 Web Pages',
        'Free Website Hosting',
        'Custom Domain for 1 Year',
        '24/7 Priority Support',
        '25,000 Monthly Users Visits',
        'Maintenance Free',
        'Advanced AI Automation',
        'WhatsApp + Chat Automation',
        'Custom Service Automation'
      ],
      popular: false,
      icon: <FaCrown className="text-yellow-300" />,
      color: 'from-teal-500 to-green-600',
      accentColor: 'teal'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
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
        damping: 24
      }
    },
    hover: { 
      y: -15,
      transition: { 
        duration: 0.3,
        ease: "easeOut"
      } 
    }
  };

  const featureItem = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  const handlePlanClick = (index) => {
    setSelectedPlan(index);
    setCurrentSlide(0);
  };

  const handlePrevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? plans[selectedPlan].features.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide(prev => (prev === plans[selectedPlan].features.length - 1 ? 0 : prev + 1));
  };

  return (
    <section 
      id="plans" 
      className={`py-20 relative overflow-hidden ${darkMode ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gradient-to-br from-blue-50 to-indigo-50'}`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full opacity-10 ${darkMode ? 'bg-white' : 'bg-blue-500'}`}
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 15, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 10,
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
            <span className={`inline-flex items-center px-4 py-1 rounded-full text-sm font-medium ${
              darkMode ? 'bg-blue-900/30 text-blue-300' : 'bg-blue-100 text-blue-800'
            }`}>
              <FiZap className="mr-2 animate-pulse" /> Flexible Plans
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r ${
              darkMode ? 'from-blue-300 to-purple-400' : 'from-blue-600 to-purple-600'
            }`}
          >
            Choose the Perfect Plan
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`text-lg max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
          >
            Our plans are designed for businesses of all sizes. Get the right features for your growth journey.
          </motion.p>
        </div>

        {/* Plan Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover="hover"
              className={`relative overflow-hidden rounded-3xl shadow-2xl transform transition-all duration-300 ${
                darkMode ? 'bg-gray-800/80 backdrop-blur-sm' : 'bg-white/90 backdrop-blur-sm'
              } border ${plan.popular ? 'border-2 border-yellow-400' : 'border-transparent'}`}
            >
              {plan.popular && (
                <motion.div 
                  className="absolute top-3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-1.5 rounded-full font-bold text-xs shadow-lg flex items-center"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    boxShadow: ['0 10px 15px -3px rgba(0,0,0,0.1)', '0 10px 25px -5px rgba(245,158,11,0.3)', '0 10px 15px -3px rgba(0,0,0,0.1)']
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <FaCrown className="mr-2" /> MOST POPULAR
                </motion.div>
              )}

              <div className={`p-8 bg-gradient-to-r ${plan.color} text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 opacity-20">
                  {React.cloneElement(plan.icon, { className: "text-7xl" })}
                </div>
                <div className="flex items-center justify-between relative z-10">
                  <h3 className="text-2xl font-bold">{plan.name} Plan</h3>
                  <div className="text-3xl">
                    {plan.icon}
                  </div>
                </div>
                <p className="mt-2 text-sm opacity-90">{plan.description}</p>
              </div>

              <div className="p-8">
                <div className="text-center my-6">
                  <span className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {plan.price}
                  </span>
                  <span className="text-sm text-gray-500 ml-1">/one-time</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <motion.li 
                      key={i}
                      custom={i}
                      initial="hidden"
                      animate="visible"
                      variants={featureItem}
                      className="flex items-start"
                    >
                      <div className={`p-1 rounded-full mr-3 ${darkMode ? 'bg-green-900/30' : 'bg-green-100'}`}>
                        <FaCheck className={`${darkMode ? 'text-green-400' : 'text-green-600'}`} />
                      </div>
                      <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex-1 py-3 rounded-lg font-semibold text-lg transition-all ${
                      plan.popular
                        ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white'
                        : darkMode
                        ? 'bg-gray-700 text-white hover:bg-gray-600'
                        : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                    }`}
                  >
                    Select Plan
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handlePlanClick(index)}
                    className={`p-3 rounded-lg ${
                      darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    <FaArrowRight />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Custom Quote Box */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`mt-16 p-1 rounded-3xl ${darkMode ? 'bg-gradient-to-r from-purple-900/30 to-pink-900/30' : 'bg-gradient-to-r from-purple-100 to-pink-100'} shadow-xl max-w-5xl mx-auto`}
        >
          <div className={`p-7 rounded-3xl ${darkMode ? 'bg-gray-900/80 backdrop-blur-sm' : 'bg-white/90 backdrop-blur-sm'} flex flex-col md:flex-row items-center`}>
            <div className="mb-6 md:mb-0 md:mr-8 relative">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center text-white shadow-lg">
                <FaRegStar className="text-2xl" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center text-xs font-bold text-gray-900">
                !
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className={`text-2xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Need a Custom Solution?
              </h3>
              <p className={`mb-5 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                We specialize in creating tailored solutions for unique business needs. Get a personalized quote with exactly what you need.
              </p>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setCustomQuoteVisible(true)}
                className={`px-8 py-3 rounded-full font-medium transition-all flex items-center justify-center mx-auto md:mx-0 ${
                  darkMode ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white' : 
                  'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white'
                }`}
              >
                Request Custom Quote
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Plan Detail Modal */}
      <AnimatePresence>
        {selectedPlan !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedPlan(null)}
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
                onClick={() => setSelectedPlan(null)}
              >
                <FaTimes />
              </button>
              
              <div className={`p-8 bg-gradient-to-r ${plans[selectedPlan].color} text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 opacity-20">
                  {React.cloneElement(plans[selectedPlan].icon, { className: "text-8xl" })}
                </div>
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold">{plans[selectedPlan].name} Plan</h2>
                  <p className="mt-2 opacity-90">{plans[selectedPlan].description}</p>
                  <div className="mt-4 text-4xl font-bold">{plans[selectedPlan].price}</div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Key Features
                    </h3>
                    <div className="flex gap-2">
                      <button 
                        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
                        onClick={handlePrevSlide}
                      >
                        <FaChevronLeft />
                      </button>
                      <button 
                        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
                        onClick={handleNextSlide}
                      >
                        <FaChevronRight />
                      </button>
                    </div>
                  </div>
                  
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.3 }}
                      className={`p-6 rounded-xl ${
                        darkMode ? 'bg-gray-800' : 'bg-gray-100'
                      }`}
                    >
                      <div className="flex items-start">
                        <div className={`p-2 rounded-full mr-4 ${
                          darkMode ? 'bg-blue-900/30' : 'bg-blue-100'
                        }`}>
                          <FaCheck className={`text-lg ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                        </div>
                        <div>
                          <h4 className={`font-bold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                            {plans[selectedPlan].features[currentSlide]}
                          </h4>
                          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            This feature is designed to help your business grow efficiently
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                  
                  <div className="flex justify-center mt-4">
                    {plans[selectedPlan].features.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full mx-1 ${
                          currentSlide === index 
                            ? `bg-${plans[selectedPlan].accentColor}-500` 
                            : darkMode 
                              ? 'bg-gray-700' 
                              : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className={`px-8 py-3 rounded-full font-medium ${
                      darkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-800'
                    }`}
                    onClick={() => setSelectedPlan(null)}
                  >
                    Back to Plans
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className={`px-8 py-3 rounded-full font-medium text-white ${
                      `bg-gradient-to-r ${plans[selectedPlan].color}`
                    }`}
                  >
                    Get Started
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom Quote Modal */}
      <AnimatePresence>
        {customQuoteVisible && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setCustomQuoteVisible(false)}
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
                onClick={() => setCustomQuoteVisible(false)}
              >
                <FaTimes />
              </button>
              
              <div className="p-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 opacity-20">
                  <FaRegStar className="text-8xl" />
                </div>
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold">Custom Solution Request</h2>
                  <p className="mt-2 opacity-90">Tell us about your project and we'll create a tailored solution</p>
                </div>
              </div>
              
              <div className="p-8">
                <form className="space-y-6">
                  <div>
                    <label className={`block mb-2 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Your Name
                    </label>
                    <input 
                      type="text" 
                      className={`w-full px-4 py-3 rounded-xl ${
                        darkMode ? 'bg-gray-800 text-white border-gray-700' : 'bg-gray-100 text-gray-800 border-gray-300'
                      } border focus:outline-none focus:ring-2 focus:ring-purple-500`}
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
                        darkMode ? 'bg-gray-800 text-white border-gray-700' : 'bg-gray-100 text-gray-800 border-gray-300'
                      } border focus:outline-none focus:ring-2 focus:ring-purple-500`}
                      placeholder="john@company.com"
                    />
                  </div>
                  
                  <div>
                    <label className={`block mb-2 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Project Description
                    </label>
                    <textarea 
                      rows={4}
                      className={`w-full px-4 py-3 rounded-xl ${
                        darkMode ? 'bg-gray-800 text-white border-gray-700' : 'bg-gray-100 text-gray-800 border-gray-300'
                      } border focus:outline-none focus:ring-2 focus:ring-purple-500`}
                      placeholder="Describe your project requirements..."
                    />
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-4 rounded-xl font-bold text-lg text-white bg-gradient-to-r from-purple-600 to-pink-600`}
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

export default Plans;