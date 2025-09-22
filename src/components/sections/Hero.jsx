// src/components/sections/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Briefcase } from 'lucide-react';
import profile from '../../data/profile';
import Button from '../ui/Button.jsx';

const Hero = () => {
  return (
    <section 
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 text-left">
        
        {/* Left Content: Text and Buttons */}
        <motion.div 
          className="flex-1 md:order-1 flex flex-col items-start"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-primary">{profile.name}</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6">
            {profile.role}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
            {profile.about}
          </p>

          <motion.div 
            className="flex flex-row items-center justify-start gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link to="/portfolio">
              <Button variant="primary" size="lg">
                View My Work
              </Button>
            </Link>
            
            <a href="/Alvee_CV.pdf" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg">
                Download CV
              </Button>
            </a>
          </motion.div>

          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a 
              href="https://onexero.netlify.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-primary transition-colors group"
            >
              <Briefcase className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
              <span className="font-medium">
                I also run a software company: <strong className="font-bold text-gray-700 dark:text-gray-200 group-hover:text-primary">OneZero</strong>
              </span>
            </a>
          </motion.div>
        </motion.div>
        
        {/* Right Content: Profile Picture */}
        <motion.div 
          className="flex-1 flex justify-center mt-12 md:mt-0 md:order-2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative group">
            {/* ======================= পরিবর্তন এখানে করা হয়েছে ======================= */}
            {/* ছবির কন্টেইনারের সাইজ ছোট স্ক্রিনের জন্য w-56 h-56 থেকে w-64 h-64 করা হয়েছে */}
            <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary shadow-2xl">
              <img 
                src={profile.photo} 
                alt={profile.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            {/* ========================================================================= */}
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