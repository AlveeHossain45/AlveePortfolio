import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, BookOpen, Award } from 'lucide-react';
import profile from '../data/profile';

const AboutPage = () => {
  return (
    <main className="pt-20 min-h-screen">
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Learn more about my journey, education, and achievements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative">
                <div className="w-80 h-80 mx-auto rounded-full overflow-hidden border-4 border-primary shadow-2xl">
                  <img 
                    src={profile.photo} 
                    alt={profile.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -inset-4 rounded-full border border-primary/20 animate-pulse"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-6">Who I Am</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                {profile.about}
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Calendar className="w-6 h-6 text-primary" />
                  <span className="text-lg">{profile.age} years old</span>
                </div>
                
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-primary" />
                  <span className="text-lg">{profile.location}</span>
                </div>
                
                <div className="flex items-center gap-4">
                  <BookOpen className="w-6 h-6 text-primary" />
                  <span className="text-lg">
                    {profile.education.degree} at {profile.education.university}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Education Details */}
          <motion.div 
            className="mt-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-center mb-12">Education & Achievements</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-night-card p-6 rounded-xl shadow-lg text-center">
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">SSC</h3>
                <p className="text-gray-600 dark:text-gray-300">GPA: {profile.stats.ssc}</p>
              </div>
              
              <div className="bg-white dark:bg-night-card p-6 rounded-xl shadow-lg text-center">
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">HSC</h3>
                <p className="text-gray-600 dark:text-gray-300">GPA: {profile.stats.hsc}</p>
              </div>
              
              <div className="bg-white dark:bg-night-card p-6 rounded-xl shadow-lg text-center">
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">IELTS</h3>
                <p className="text-gray-600 dark:text-gray-300">Score: {profile.stats.ielts}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;