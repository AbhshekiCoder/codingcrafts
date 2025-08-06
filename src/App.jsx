


import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Plans from './components/Plans';
import Services from './components/Services';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(true);
   const projects = [
    {
      id: 1,
      title: 'Will SKill',
      category: 'E-Learning Platform',
      description: 'An e-learning site with course search, lectures, chatbot, quizzes, admin panel, and payments.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      image: 'https://firebasestorage.googleapis.com/v0/b/portolioproject-85b16.appspot.com/o/projects%2FWillSkill%2FScreenshot%202025-07-12%20144431.png?alt=media&token=9671e333-fa7d-4b9a-b791-079f9d14a983',
      live: 'https://willskill.vercel.app',
      github: 'https://github.com/AbhshekiCoder/willskill.git'
    },
    {
      id: 2,
      title: 'QuickCart',
      category: 'E-Commerce Platform',
      description: 'E-commerce site with cart, payments, fast delivery, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      image: 'https://firebasestorage.googleapis.com/v0/b/portolioproject-85b16.appspot.com/o/projects%2Fe-commerce%2F1%20(1).png?alt=media&token=36eae99a-9bc4-41e1-9dd0-52591c4e3df4',
      live: 'https://e-commerce1322633.netlify.app/',
      github: 'https://github.com/AbhshekiCoder/e-commerce.git'
    },
    {
      id: 3,
      title: 'Foody',
      category: 'Food Delivery Platform',
      description: 'A full-stack food delivery app with Razorpay, Google Maps, and real-time cart.',
      technologies: ['React', 'Node.js', 'Google API', 'Razorpay'],
      image: 'https://firebasestorage.googleapis.com/v0/b/portolioproject-85b16.appspot.com/o/projects%2Ffoody%2FScreenshot%202025-06-30%20180325.png?alt=media&token=c77b70dc-f833-4958-bf19-685c0220d782',
      live: 'https://foodapp132366.netlify.app',
      github: 'https://github.com/AbhshekiCoder/e-commerce.git'
    },
    {
      id: 4,
      title: 'VyaparMitra',
      category: 'Service Automation',
      description: 'Salesmen & accountants dashboard with billing, chat & real-time transactions.',
      technologies: ['Next.js', 'Node.js', 'MongoDB', 'Socket.io'],
      image: 'https://firebasestorage.googleapis.com/v0/b/portolioproject-85b16.appspot.com/o/projects%2FVyaparMitra%2FScreenshot%202025-06-29%20132737.png?alt=media&token=1514f32a-3e38-417e-8b02-c2a821da0004',
      live: 'https://project-six-omega-66.vercel.app',
      github: 'https://github.com/AbhshekiCoder'
    },
    {
      id: 5,
      title: 'WhatsApp Bot',
      category: 'WhatsApp Automation',
      description: 'Customer support automation with Twilio and MongoDB.',
      technologies: ['Twilio', 'Node.js'],
      image: 'https://source.unsplash.com/featured/?whatsapp,chatbot',
      live: '#',
      github: '#'
    },
    {
      id: 6,
      title: 'Healthcare Appointment System',
      category: 'Service Automation',
      description: 'Appointment scheduling and SMS reminders.',
      technologies: ['Django', 'PostgreSQL'],
      image: 'https://source.unsplash.com/featured/?healthcare,automation',
      live: '#',
      github: '#'
    },
    {
      id: 7,
      title: 'AI HR Chatbot',
      category: 'Chat Bots',
      description: 'Automated HR support chatbot with Dialogflow.',
      technologies: ['Dialogflow', 'Firebase', 'React'],
      image: 'https://source.unsplash.com/featured/?ai,chatbot',
      live: '#',
      github: '#'
    },
    {
      id: 8,
      title: 'E-commerce AI Assistant',
      category: 'AI Automation',
      description: 'Smart product recommendation engine using AI.',
      technologies: ['React', 'Node.js', 'TensorFlow'],
      image: 'https://source.unsplash.com/featured/?ecommerce,ai',
      live: '#',
      github: '#'
    }
  ];
  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} transition-colors duration-300`}>
    
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero darkMode={darkMode} />
      <Plans darkMode={darkMode} />
      <Services darkMode={darkMode} />
      <Projects darkMode={darkMode} projects={projects} />
      <Testimonials darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;