// src/components/sections/Portfolio.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, ChevronRight, ChevronLeft } from 'lucide-react';
import Button from '../ui/Button.jsx';
import Modal from '../ui/Modal.jsx';

import portfolioItems from '../../data/portfolio';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  // নতুন state: 현재 ছবির index ট্র্যাক করার জন্য
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filters = ['all', 'web', 'mobile', 'design'];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.tags.includes(activeFilter));

  // যখন একটি নতুন প্রজেক্ট সিলেক্ট করা হবে, তখন ছবির index রিসেট হবে
  useEffect(() => {
    if (selectedProject) {
      setCurrentImageIndex(0);
    }
  }, [selectedProject]);

  // পরের ছবিতে যাওয়ার ফাংশন
  const handleNextImage = () => {
    if (!selectedProject) return;
    const nextIndex = (currentImageIndex + 1) % selectedProject.images.length;
    setCurrentImageIndex(nextIndex);
  };

  // আগের ছবিতে যাওয়ার ফাংশন
  const handlePrevImage = () => {
    if (!selectedProject) return;
    const prevIndex = (currentImageIndex - 1 + selectedProject.images.length) % selectedProject.images.length;
    setCurrentImageIndex(prevIndex);
  };

  return (
    <section id="portfolio" className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto container-padding">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            Featured Work
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A curated selection of projects that showcase my skills and experience in web development and design.
          </p>
        </motion.div>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {filters.map(filter => (
            <button
              key={filter}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter 
                  ? 'bg-primary text-white shadow-lg shadow-primary/30' 
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-primary/30 hover:shadow-md'
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(item)}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="h-60 overflow-hidden">
                    <img 
                      src={item.images[0]} // থাম্বনেইলের জন্য প্রথম ছবিটি ব্যবহার করা হচ্ছে
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                    <h3 className="text-white font-bold text-xl mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                      {item.category}
                    </p>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                      <Button variant="primary" size="sm" className="rounded-full">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700 dark:text-gray-200">
                      {item.tags[0]}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <motion.div 
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-xl font-medium text-gray-600 dark:text-gray-400 mb-2">No projects found</h3>
            <p className="text-gray-500 dark:text-gray-500">Try selecting a different category</p>
          </motion.div>
        )}
      </div>

      <Modal 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)}
      >
        {selectedProject && (
          <div className="bg-white dark:bg-gray-800">
            <div className="relative h-72 overflow-hidden">
              <AnimatePresence initial={false}>
                <motion.img
                  key={currentImageIndex}
                  src={selectedProject.images[currentImageIndex]}
                  alt={`${selectedProject.title} - view ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </AnimatePresence>

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-white/10 dark:bg-gray-800/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors z-10"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 text-white" />
              </button>
              
              {/* ছবি পরিবর্তনের জন্য বাটন (যদি একাধিক ছবি থাকে) */}
              {selectedProject.images.length > 1 && (
                <>
                  <button 
                    onClick={handlePrevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/10 dark:bg-gray-800/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors z-10"
                    aria-label="Previous project"
                  >
                    <ChevronLeft className="w-5 h-5 text-white" />
                  </button>
                  <button 
                    onClick={handleNextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/10 dark:bg-gray-800/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors z-10"
                    aria-label="Next project"
                  >
                    <ChevronRight className="w-5 h-5 text-white" />
                  </button>
                  {/* ছবির কাউন্টার */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/50 text-white text-sm rounded-full">
                    {currentImageIndex + 1} / {selectedProject.images.length}
                  </div>
                </>
              )}
            </div>
            
            <div className="p-8">
              <div className="flex flex-col sm:flex-row justify-between items-start mb-6 gap-4">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">{selectedProject.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 font-medium">{selectedProject.category}</p>
                </div>
                <div className="flex gap-2 flex-shrink-0">
                  {selectedProject.liveUrl && (
                    <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="primary" size="sm" className="rounded-full">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="rounded-full">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </Button>
                    </a>
                  )}
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {selectedProject.description}
              </p>
              
              <div className="mb-8">
                <h4 className="font-semibold mb-3 text-gray-800 dark:text-gray-200">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map(tech => (
                    <span 
                      key={tech}
                      className="px-3 py-1.5 bg-primary/10 text-primary dark:bg-primary/20 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Portfolio;