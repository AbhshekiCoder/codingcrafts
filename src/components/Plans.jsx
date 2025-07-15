import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaCrown, FaRocket, FaRegStar, FaRegLightbulb } from 'react-icons/fa';

const Plans = ({ darkMode }) => {
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
      color: 'from-blue-400 to-blue-600'
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
      color: 'from-purple-500 to-indigo-700'
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
      color: 'from-teal-500 to-green-600'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="plans" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}
          >
            Choose the Perfect Plan for Your Business
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`text-lg max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
          >
            Our plans are designed for businesses of all sizes. Whether you're a startup or an enterprise, we’ve got your automation and web development needs covered.
          </motion.p>
        </div>

        {/* Plan Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={item}
              className={`relative overflow-hidden rounded-2xl shadow-xl transform transition hover:scale-[1.02] ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-1 rounded-full font-bold text-xs shadow-lg">
                  MOST POPULAR
                </div>
              )}

              <div className={`p-6 bg-gradient-to-r ${plan.color} text-white`}>
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold">{plan.name} Plan</h3>
                  <div className="text-3xl">{plan.icon}</div>
                </div>
                <p className="mt-2 text-sm opacity-90">{plan.description}</p>
              </div>

              <div className="p-6">
                <div className="text-center my-6">
                  <span className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {plan.price}
                  </span>
                  <span className="text-sm text-gray-500 ml-1">/one-time</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <FaCheck className={`mt-1 mr-3 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
                      <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 rounded-lg font-semibold text-lg transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white'
                      : darkMode
                      ? 'bg-gray-700 text-white hover:bg-gray-600'
                      : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                  }`}
                >
                  Select Plan
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Custom Quote Box */}
        <div className={`mt-20 p-8 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-2xl max-w-5xl mx-auto`}>
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-6 md:mb-0 md:mr-8">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center text-white shadow-md">
                <FaRegStar className="text-2xl" />
              </div>
            </div>
            <div>
              <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Need a Tailored Solution?
              </h3>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                We understand every business is different. Get a custom solution designed around your unique requirements—whether it's enterprise-grade automation, performance-optimized websites, or custom tool integrations.
              </p>
              <button
                className={`mt-4 px-6 py-2 rounded-lg font-medium transition-all ${
                  darkMode ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                Request Custom Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;
