// src/components/sections/Portfolio.jsx
import React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';
import Button from '../ui/Button';
import Modal from '../ui/Modal';
import portfolioItems from '../../data/portfolio';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = ['all', 'web', 'mobile', 'design', 'other'];
  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.tags.includes(activeFilter));

  return (
    <section id="portfolio" className="section-padding">
      <div className="container mx-auto container-padding">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          My Portfolio
        </motion.h2>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {filters.map(filter => (
            <Button
              key={filter}
              variant={activeFilter === filter ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setActiveFilter(filter)}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </Button>
          ))}
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(item)}
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Button variant="primary">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project
                    </Button>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-accent">{item.category}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <Modal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)}>
        {selectedProject && (
          <div className="p-6">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
              <button 
                onClick={() => setSelectedProject(null)}
                className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <img 
              src={selectedProject.image} 
              alt={selectedProject.title}
              className="w-full h-48 object-cover rounded-lg mb-6"
            />
            
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {selectedProject.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedProject.techStack.map(tech => (
                <span 
                  key={tech}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex gap-4">
              <Button variant="primary">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </Button>
              <Button variant="outline">
                <Github className="w-4 h-4 mr-2" />
                View Code
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Portfolio;