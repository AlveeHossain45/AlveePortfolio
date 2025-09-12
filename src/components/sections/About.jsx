import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, BookOpen, Award } from 'lucide-react';
import profile from '../../data/profile';
import Card from '../ui/Card.jsx';

const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto container-padding">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get to know more about my background, skills, and experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-72 h-72 mx-auto rounded-full overflow-hidden border-4 border-primary/80 shadow-2xl relative z-10">
                <img 
                  src={profile.photo1} 
                  alt={profile.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-4 rounded-full border border-primary/30 animate-pulse"></div>
              <div className="absolute -inset-6 rounded-full border border-primary/10"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 relative inline-block">
              Who I Am
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-primary"></span>
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              {profile.about}
            </p>
            
            <div className="space-y-6">
              <motion.div 
                className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow"
                whileHover={{ x: 5 }}
              >
                <div className="p-3 rounded-full bg-primary/10">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <span className="text-lg font-medium">{profile.age} years old</span>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow"
                whileHover={{ x: 5 }}
              >
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <span className="text-lg font-medium">{profile.location}</span>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow"
                whileHover={{ x: 5 }}
              >
                <div className="p-3 rounded-full bg-primary/10">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <span className="text-lg font-medium">
                  {profile.education.degree} at {profile.education.university}
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Education Details */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-4">Education & Achievements</h3>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto mb-12 rounded-full"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Card hoverable className="p-6 text-center relative overflow-hidden group h-full flex flex-col">
                <div className="absolute -right-6 -top-6 w-20 h-20 rounded-full bg-primary/10 group-hover:scale-110 transition-transform"></div>
                <div className="absolute -left-6 -bottom-6 w-16 h-16 rounded-full bg-purple-500/10 group-hover:scale-110 transition-transform"></div>
                
                <div className="relative z-10 flex-grow">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">B.Sc. in CSE</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">Uttara University</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    I am studying in B.Sc in CSE in Uttara University. My expected graduation year is 2027.
                  </p>
                </div>
              </Card>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Card hoverable className="p-6 text-center relative overflow-hidden group h-full flex flex-col">
                <div className="absolute -right-6 -top-6 w-20 h-20 rounded-full bg-primary/10 group-hover:scale-110 transition-transform"></div>
                <div className="absolute -left-6 -bottom-6 w-16 h-16 rounded-full bg-purple-500/10 group-hover:scale-110 transition-transform"></div>
                
                <div className="relative z-10 flex-grow">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">HSC</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">Darunnazat Siddikia Kamil Madrasha</p>
                  <p className="text-lg font-semibold text-primary mb-2">GPA: 4.88/5.00</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    I passed HSC from Darunnazat Siddikia Kamil Madrasha in 2021. My board was Dhaka. I got 4.88 out of 5 from Science.
                  </p>
                </div>
              </Card>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Card hoverable className="p-6 text-center relative overflow-hidden group h-full flex flex-col">
                <div className="absolute -right-6 -top-6 w-20 h-20 rounded-full bg-primary/10 group-hover:scale-110 transition-transform"></div>
                <div className="absolute -left-6 -bottom-6 w-16 h-16 rounded-full bg-purple-500/10 group-hover:scale-110 transition-transform"></div>
                
                <div className="relative z-10 flex-grow">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">SSC</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">Darunnazat Siddikia Kamil Madrasha</p>
                  <p className="text-lg font-semibold text-primary mb-2">GPA: 4.78/5.00</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    I passed SSC from Darunnazat Siddikia Kamil Madrasha in 2019. My board was Dhaka. I got 4.78 out of 5 from Science.
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;