// src/components/sections/Hero.jsx
import React from 'react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Award, Calendar, Star } from 'lucide-react';
import profile from '../../data/profile';
import Button from '../ui/Button.jsx';

const Hero = () => {
  const [scrollIndicatorVisible, setScrollIndicatorVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrollIndicatorVisible(false);
      } else {
        setScrollIndicatorVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 md:gap-16 lg:gap-24 py-20">
        <motion.div 
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
            Available for new projects
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            <span className="text-gray-800 dark:text-white">Hi, I'm </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
              {profile.name}
            </span>
          </h1>
          
          <motion.h2 
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 font-medium"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {profile.role}
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {profile.about}
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 mb-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <Button 
              variant="primary" 
              size="lg"
              className="rounded-xl py-3 px-6 text-base bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 transition-all shadow-lg hover:shadow-primary/30 group"
              onClick={scrollToPortfolio}
            >
              View My Work
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="rounded-xl py-3 px-6 text-base border-2 hover:border-primary/50 transition-all group"
            >
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Download CV
            </Button>
          </motion.div>

          <motion.div 
            className="grid grid-cols-3 gap-3 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <div className="flex flex-col items-center p-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="p-2 bg-primary/10 rounded-lg mb-2">
                <Award className="w-5 h-5 text-primary" />
              </div>
              <span className="font-bold text-xl text-gray-800 dark:text-white">50+</span>
              <span className="text-xs text-gray-600 dark:text-gray-400">Projects</span>
            </div>
            
            <div className="flex flex-col items-center p-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="p-2 bg-purple-500/10 rounded-lg mb-2">
                <Calendar className="w-5 h-5 text-purple-600" />
              </div>
              <span className="font-bold text-xl text-gray-800 dark:text-white">5+</span>
              <span className="text-xs text-gray-600 dark:text-gray-400">Years Exp</span>
            </div>
            
            <div className="flex flex-col items-center p-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="p-2 bg-yellow-500/10 rounded-lg mb-2">
                <Star className="w-5 h-5 text-yellow-600" />
              </div>
              <span className="font-bold text-xl text-gray-800 dark:text-white">100%</span>
              <span className="text-xs text-gray-600 dark:text-gray-400">Satisfaction</span>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="flex-1 flex justify-center mt-10 md:mt-0 relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <div className="relative">
            {/* Rounded profile picture */}
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl relative z-10">
              <img 
                src={profile.photo} 
                alt={profile.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-purple-600 opacity-20 blur-xl -z-10"></div>
            
            {/* Floating elements */}
            <motion.div 
              className="absolute -top-2 -right-2 bg-white dark:bg-gray-800 p-2 rounded-lg shadow-lg flex items-center gap-2"
              initial={{ opacity: 0, y: 20, x: 20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-medium">Available</span>
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-2 -left-2 bg-white dark:bg-gray-800 p-2 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: -20, x: -20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-xs font-medium">5/5 Rating</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-primary/5 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-purple-500/5 blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-52 h-52 rounded-full bg-blue-500/5 blur-3xl animate-pulse delay-500"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center ${scrollIndicatorVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-gray-400 dark:border-gray-600 flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-gray-400 dark:bg-gray-600 rounded-full"
          />
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Scroll down</p>
      </motion.div>
    </section>
  );
};

export default Hero;