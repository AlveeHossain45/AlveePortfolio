import React from 'react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const SectionIndicator = () => {
  const [activeSection, setActiveSection] = useState('home');
  
  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    // { id: 'testimonials', label: 'Testimonials' }, <-- এই লাইনটি মুছে ফেলা হয়েছে
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop - 100;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-30 hidden xl:block">
      <div className="flex flex-col items-center gap-4">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="flex items-center gap-3 group"
            aria-label={`Scroll to ${section.label} section`}
          >
            <div className="flex items-center justify-center w-4 h-4">
              <motion.div
                className={`w-2 h-2 rounded-full ${
                  activeSection === section.id 
                    ? 'bg-primary' 
                    : 'bg-gray-400 group-hover:bg-primary/60'
                }`}
                animate={{
                  scale: activeSection === section.id ? 1.5 : 1
                }}
                transition={{ duration: 0.2 }}
              />
            </div>
            
            <motion.span
              className={`text-sm font-medium ${
                activeSection === section.id
                  ? 'text-primary'
                  : 'text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-300'
              } opacity-0 group-hover:opacity-100 transition-opacity`}
              initial={{ opacity: 0, x: -10 }}
              whileHover={{ opacity: 1, x: 0 }}
            >
              {section.label}
            </motion.span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SectionIndicator;