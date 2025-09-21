import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, BookOpen, Award, GraduationCap, Star, Target } from 'lucide-react';
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
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center justify-center mb-4">
            <div className="w-3 h-3 rounded-full bg-primary mr-3"></div>
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
              About Me
            </h2>
            <div className="w-3 h-3 rounded-full bg-purple-600 ml-3"></div>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-light">
            Get to know more about my background, skills, and experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-2xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl relative z-10">
                <img 
                  src={profile.photo1} 
                  alt={profile.name}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-primary/20 to-purple-600/20 animate-pulse"></div>
              <div className="absolute -inset-6 rounded-2xl border border-primary/10"></div>
              
              {/* Floating elements */}
              <motion.div 
                className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
              >
                <Target className="w-6 h-6 text-primary" />
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg"
                initial={{ scale: 0, rotate: 180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, type: "spring", stiffness: 100 }}
              >
                <Star className="w-6 h-6 text-primary" fill="currentColor" />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="flex items-center mb-6">
              <div className="w-8 h-0.5 bg-primary mr-4"></div>
              <h3 className="text-2xl font-bold relative inline-block">
                Who I Am
                <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-primary"></span>
              </h3>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed font-light">
              {profile.about}
            </p>
            
            <div className="space-y-6">
              <motion.div 
                className="flex items-center gap-6 p-5 rounded-2xl bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-100 dark:border-gray-700"
                whileHover={{ x: 10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Calendar className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <span className="text-lg font-semibold">{profile.age} years old</span>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Experienced and passionate</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-6 p-5 rounded-2xl bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-100 dark:border-gray-700"
                whileHover={{ x: 10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <MapPin className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <span className="text-lg font-semibold">{profile.location}</span>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Based and available for work</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-6 p-5 rounded-2xl bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-100 dark:border-gray-700"
                whileHover={{ x: 10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <BookOpen className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <span className="text-lg font-semibold">
                    {profile.education.degree} at {profile.education.university}
                  </span>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Ongoing education with excellence</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Education Details */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center mb-4">
              <GraduationCap className="w-6 h-6 text-primary mr-3" />
              <h3 className="text-2xl font-bold">Education & Achievements</h3>
              <GraduationCap className="w-6 h-6 text-purple-600 ml-3" />
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              My academic journey and accomplishments that shaped my career path
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <Card hoverable className="p-8 text-center h-full flex flex-col relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-purple-600"></div>
                <div className="mb-2 flex justify-center">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <Award className="w-10 h-10 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                      <span className="text-white text-xs font-bold">01</span>
                    </div>
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-2">B.Sc. in CSE</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-3 font-medium">Uttara University</p>
                <div className="mt-2 mb-5">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    Expected 2027
                  </div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-0">
                  I am studying in B.Sc in CSE in Uttara University. My expected graduation year is 2027.
                </p>
              </Card>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
            >
              <Card hoverable className="p-8 text-center h-full flex flex-col relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-purple-600"></div>
                <div className="mb-2 flex justify-center">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <Award className="w-10 h-10 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                      <span className="text-white text-xs font-bold">02</span>
                    </div>
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-2">HSC</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-2 font-medium">Darunnazat Siddikia Kamil Madrasha</p>
                <div className="my-3">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-medium">
                    GPA: 4.88/5.00
                  </div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-0">
                  I passed HSC from Darunnazat Siddikia Kamil Madrasha in 2021. My board was Dhaka. I got 4.88 out of 5 from Science.
                </p>
              </Card>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
            >
              <Card hoverable className="p-8 text-center h-full flex flex-col relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-purple-600"></div>
                <div className="mb-2 flex justify-center">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <Award className="w-10 h-10 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                      <span className="text-white text-xs font-bold">03</span>
                    </div>
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-2">SSC</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-2 font-medium">Darunnazat Siddikia Kamil Madrasha</p>
                <div className="my-3">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-medium">
                    GPA: 4.78/5.00
                  </div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-0">
                  I passed SSC from Darunnazat Siddikia Kamil Madrasha in 2019. My board was Dhaka. I got 4.78 out of 5 from Science.
                </p>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;