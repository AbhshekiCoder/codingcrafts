// src/components/Contact.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiSend } from 'react-icons/fi';
import {getDatabase, ref, get, set, push} from 'firebase/database'
import { app } from '../misc/firebase.js';
const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try{
      const db = getDatabase(app);
      const dataRef = ref(db, 'Contacts/');
      const newRef = push(dataRef)
     set(newRef,{
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message
     }).then(()=>{
      setIsSubmitting(true);
      setSubmitError(false);
     })


    }catch(err){
       setIsSubmitting(false);
      setSubmitError(true);
      console.log(err.message)

    }
   

    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  

  return (
    <section id="contact" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}
          >
            Get In Touch
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`text-lg max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
          >
            Have questions about our services? Want to discuss a custom automation project? Reach out to us!
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className={`rounded-2xl p-8 shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className={`p-3 rounded-full ${darkMode ? 'bg-gray-600 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
                    <FiPhone className="text-xl" />
                  </div>
                  <div className="ml-4">
                    <h4 className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Phone</h4>
                    <a href="tel:6266884504" className={`text-lg font-semibold ${darkMode ? 'text-white hover:text-blue-400' : 'text-gray-900 hover:text-blue-600'}`}>
                      +91 6266884504
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className={`p-3 rounded-full ${darkMode ? 'bg-gray-600 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
                    <FiMail className="text-xl" />
                  </div>
                  <div className="ml-4">
                    <h4 className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Email</h4>
                    <a href="mailto:codingcraft25@gmail.com" className={`text-lg font-semibold ${darkMode ? 'text-white hover:text-blue-400' : 'text-gray-900 hover:text-blue-600'}`}>
                      codingcraft25@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className={`p-3 rounded-full ${darkMode ? 'bg-gray-600 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
                    <FiMapPin className="text-xl" />
                  </div>
                  <div className="ml-4">
                    <h4 className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Location</h4>
                    <p className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      India
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Business Hours
                </h4>
                <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className={`rounded-2xl p-8 shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Send Us a Message
              </h3>
              
              {submitSuccess ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                  <p>Thank you! Your message has been sent successfully.</p>
                </div>
              ) : null}
              
              {submitError ? (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                  <p>There was an error sending your message. Please try again.</p>
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className={`block mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg ${darkMode ? 'bg-gray-600 text-white border-gray-500' : 'bg-gray-50 text-gray-900 border-gray-300'} border focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={`block mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg ${darkMode ? 'bg-gray-600 text-white border-gray-500' : 'bg-gray-50 text-gray-900 border-gray-300'} border focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className={`block mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg ${darkMode ? 'bg-gray-600 text-white border-gray-500' : 'bg-gray-50 text-gray-900 border-gray-300'} border focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    placeholder="How can we help you?"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className={`block mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className={`w-full px-4 py-3 rounded-lg ${darkMode ? 'bg-gray-600 text-white border-gray-500' : 'bg-gray-50 text-gray-900 border-gray-300'} border focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 rounded-lg font-semibold flex items-center justify-center ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : darkMode 
                        ? 'bg-blue-600 hover:bg-blue-700' 
                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <FiSend className="mr-2" /> Send Message
                    </span>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

