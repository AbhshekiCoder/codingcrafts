import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Projects = ({ darkMode, projects }) => {
  const [activeFilter, setActiveFilter] = useState('all');
 
  const projectCategories = [
    'all',
    'AI Automation',
    'WhatsApp Automation',
    'Chat Bots',
    'Service Automation',
    
    'E-Learning Platform',
    'E-Commerce Platform',
    'Food Delivery Platform'
  ];

  
 const [filteredProjects, setFilteredProjects] = useState(projects);

 

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  };
 useEffect(() => {
  if (activeFilter === 'all') {
    setFilteredProjects(projects);
    
  }
  else{
  const data = projects.filter(
    (item) =>
      item.category.trim().toLowerCase() === activeFilter.trim().toLowerCase()
  );
  setFilteredProjects(data);
}
}, [activeFilter]);

console.log(filteredProjects)
  return (
    <section id="projects" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Our Some Projects
          </h2>
          <p className={`mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Explore real-world solutions we've built to automate business workflows.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeFilter === category
                  ? 'bg-blue-600 text-white'
                  : darkMode
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  : 'bg-white text-gray-700 shadow hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects?filteredProjects.map(Element => (
            
            <div
            
              variants={item}
              className={`rounded-xl overflow-hidden shadow-lg transition hover:-translate-y-1 ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              }`}
            >
              <img
                src={Element.image?.split(',')[0]} // if multiple images, pick first
                alt={Element.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-5">
                <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {Element.title}
                </h3>
                <p className={`text-sm mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {Element.description.slice(0, 120)}...
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {Element.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className={`text-xs px-2 py-1 rounded-full ${
                        darkMode ? 'bg-gray-700 text-blue-400' : 'bg-blue-100 text-blue-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span
                    className={`text-xs px-3 py-1 rounded-full font-semibold ${
                      darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-yellow-100 text-yellow-700'
                    }`}
                  >
                    {Element.category}
                  </span>
                  <div className="flex space-x-2">
                    <a
                      href={Element.live}
                      target="_blank"
                      className="text-blue-600 hover:underline"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt />
                    </a>
                    <a
                      href={Element.github}
                      target="_blank"
                      className="text-gray-600 hover:underline"
                      rel="noopener noreferrer"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
          )):'load'}
        </motion.div>
      </div>
     
    </section>
    
  );
};

export default Projects;
