// src/components/sections/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import profile from '../../data/profile';
import Button from '../ui/Button.jsx';

const Hero = () => {
  return (
    <section 
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <motion.div 
          className="flex-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-primary">{profile.name}</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-accent mb-6">
            {profile.role}
          </h2>
          <p className="text-lg mb-8 max-w-2xl">
            {profile.about}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/portfolio">
              <Button variant="primary" size="lg">
                View My Work
              </Button>
            </Link>
            
            {/* এই লিঙ্কটি এখন সঠিকভাবে কাজ করবে */}
            
             <a href="/Alvee_CV.pdf" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg">
                View CV
              </Button>
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          className="flex-1 flex justify-center mt-8 md:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary shadow-2xl">
              <img 
                src={profile.photo} 
                alt={profile.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -inset-4 rounded-full border border-primary/20 animate-pulse"></div>
          </div>
        </motion.div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-accent/10 blur-3xl animate-pulse delay-1000"></div>
      </div>
    </section>
  );
};

export default Hero;