import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Github, 
  Linkedin, 
  Twitter, 
  Heart, 
  ArrowUp,
  Sun,
  Moon,
  Sparkles
} from 'lucide-react';
import profile from '../../data/profile';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState(null);

  // Scroll to top functionality
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Show scroll-to-top button when user scrolls down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Check system preference for dark mode
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // You might want to implement a proper dark mode context here
    document.documentElement.classList.toggle('dark');
  };

  const socialIcons = [
    { key: 'email', icon: Mail, href: `mailto:${profile.contacts.email}` },
    { key: 'github', icon: Github, href: profile.contacts.github },
    { key: 'linkedin', icon: Linkedin, href: profile.contacts.linkedin },
    { key: 'twitter', icon: Twitter, href: profile.contacts.twitter },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 py-16 border-t border-gray-200 dark:border-gray-700">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-secondary"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        {/* Main content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <motion.div 
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mb-2">
              {profile.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg">{profile.role}</p>
            <p className="text-gray-500 dark:text-gray-400 mt-2 max-w-md">
              Let's create something amazing together. Feel free to reach out!
            </p>
          </motion.div>

          <motion.div 
            className="flex flex-col items-center md:items-end"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex gap-4 mb-6">
              {socialIcons.map((item) => {
                const IconComponent = item.icon;
                return (
                  <motion.a
                    key={item.key}
                    href={item.href}
                    target={item.key !== 'email' ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className={`p-3 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group ${
                      hoveredIcon === item.key ? 'ring-2 ring-primary' : ''
                    }`}
                    aria-label={item.key}
                    onMouseEnter={() => setHoveredIcon(item.key)}
                    onMouseLeave={() => setHoveredIcon(null)}
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconComponent className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-primary transition-colors" />
                    
                    {/* Hover effect */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={false}
                    />
                  </motion.a>
                );
              })}
              
              {/* Dark mode toggle */}
              <motion.button
                onClick={toggleDarkMode}
                className="p-3 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                aria-label="Toggle dark mode"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                {isDarkMode ? (
                  <Sun className="w-6 h-6 text-yellow-500" />
                ) : (
                  <Moon className="w-6 h-6 text-gray-700" />
                )}
              </motion.button>
            </div>
            
            <motion.p 
              className="text-gray-600 dark:text-gray-300 flex items-center text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Crafted with <Heart className="w-5 h-5 mx-1.5 text-red-500 animate-pulse" /> by {profile.name}
              <Sparkles className="w-4 h-4 ml-1.5 text-yellow-500" />
            </motion.p>
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div 
          className="border-t border-gray-300 dark:border-gray-700 pt-8 text-center relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
            © {currentYear} {profile.name}. All rights reserved.
          </p>
          
          <div className="flex justify-center gap-6 mb-4">
            <a 
              href="/privacy" 
              className="text-gray-600 dark:text-gray-400 text-sm hover:text-primary transition-colors duration-300 relative group"
            >
              Privacy Policy
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="/terms" 
              className="text-gray-600 dark:text-gray-400 text-sm hover:text-primary transition-colors duration-300 relative group"
            >
              Terms of Service
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
          
          <p className="text-xs text-gray-500 dark:text-gray-500">
            Made with modern technologies and a passion for great design.
          </p>
        </motion.div>
      </div>

      {/* Scroll to top button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            className="fixed bottom-6 right-6 p-3 bg-primary text-white rounded-full shadow-lg hover:shadow-xl z-50"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;