import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, BookOpen, Award } from 'lucide-react';
import profile from '../../data/profile';
import Card from '../ui/Card';

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto container-padding">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get to know more about my background, skills, and experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div className="w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-primary shadow-2xl">
                <img 
                  src={profile.photo1} 
                  alt={profile.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-4 rounded-full border border-primary/20 animate-pulse"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-2xl font-bold mb-6">Who I Am</h3>
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-center mb-12">Education & Achievements</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card hoverable className="p-6 text-center">
              <Award className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">SSC</h4>
              <p className="text-gray-600 dark:text-gray-300">GPA: {profile.stats.ssc}</p>
            </Card>
            
            <Card hoverable className="p-6 text-center">
              <Award className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">HSC</h4>
              <p className="text-gray-600 dark:text-gray-300">GPA: {profile.stats.hsc}</p>
            </Card>
            
            <Card hoverable className="p-6 text-center">
              <Award className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">IELTS</h4>
              <p className="text-gray-600 dark:text-gray-300">Score: {profile.stats.ielts}</p>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;