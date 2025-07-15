import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';

const Testimonials = ({ darkMode }) => {
  const testimonials = [
    {
      id: 1,
      name: 'Ram Kumar',
      role: 'CEO, TechSolutions India',
      content:
        'CodingCraft transformed our customer service with their WhatsApp automation solution. Response times improved by 80% and customer satisfaction scores are at an all-time high.',
      rating: 5,
      image: '/avatars/avatar1.png'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      role: 'Operations Manager, EcomExpress',
      content:
        "The AI chatbot they developed for our e-commerce platform handles 70% of customer inquiries without human intervention. It's been a game-changer for our business.",
      rating: 5,
      image: '/avatars/avatar2.png'
    },
    {
      id: 3,
      name: 'Vikram Patel',
      role: 'CTO, FinTech Innovations',
      content:
        'Their custom automation solution streamlined our loan approval process, reducing processing time from 3 days to just 4 hours. The ROI was immediate and substantial.',
      rating: 4,
      image: '/avatars/avatar3.png'
    },
    {
      id: 4,
      name: 'Ananya Singh',
      role: 'Marketing Director, HealthPlus',
      content:
        "The appointment scheduling automation has saved our staff countless hours. We've been able to handle 40% more patients with the same team size.",
      rating: 5,
      image: '/avatars/avatar4.png'
    },
    {
      id: 5,
      name: 'Arjun Mehta',
      role: 'Founder, EduTech Solutions',
      content:
        "CodingCraft's AI-powered recommendation system increased our course enrollment by 35%. Their solution was perfectly tailored to our needs.",
      rating: 5,
      image: '/avatars/avatar5.png'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const nextTestimonial = () => {
    setDirection('right');
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection('left');
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const testimonialVariants = {
    hidden: (direction) => ({ x: direction === 'right' ? 200 : -200, opacity: 0 }),
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
    exit: (direction) => ({ x: direction === 'right' ? -200 : 200, opacity: 0, transition: { duration: 0.5 } })
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <FaStar key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-400'} />
    ));
  };

  return (
    <section id="testimonials" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`text-lg max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
          >
            Real stories from real clients who trusted CodingCraft for automation.
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={testimonialVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className={`p-8 rounded-2xl shadow-xl ${darkMode ? 'bg-gray-800' : 'bg-blue-50'} relative`}
            >
              <div className="flex items-start">
                <div className={`p-3 rounded-full ${darkMode ? 'bg-gray-700 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
                  <FaQuoteLeft className="text-xl" />
                </div>
                <p className={`ml-4 text-lg ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>"
                  {testimonials[currentIndex].content}"
                </p>
              </div>

              <div className="mt-8 flex items-center">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-blue-500 mr-4"
                />
                <div>
                  <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{testimonials[currentIndex].role}</p>
                  <div className="flex mt-1">{renderStars(testimonials[currentIndex].rating)}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-6 space-x-4">
            <button
              onClick={prevTestimonial}
              className={`p-3 rounded-full transition ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={nextTestimonial}
              className={`p-3 rounded-full transition ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-14">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              whileHover={{ scale: 1.05 }}
              className={`p-4 rounded-xl text-center transition cursor-pointer ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-50 text-gray-800'} ${currentIndex === i ? 'ring-2 ring-blue-500' : ''}`}
              onClick={() => {
                setDirection(i > currentIndex ? 'right' : 'left');
                setCurrentIndex(i);
              }}
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover mx-auto mb-2"
              />
              <h4 className="font-semibold text-sm">{t.name}</h4>
              <div className="flex justify-center mt-1">{renderStars(t.rating)}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
