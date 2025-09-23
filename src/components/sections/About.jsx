import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, BookOpen, GraduationCap, BookMarked, FileText } from 'lucide-react';
// সঠিক পাথ ব্যবহার করা হয়েছে
import profile from '../../data/profile.js'; 
import Card from '../ui/Card.jsx';

const About = () => {
  const educationData = [
    { 
      title: "B.Sc. in CSE", 
      university: "Uttara University", 
      gpa: "Expected 2027", 
      details: "I am studying in B.Sc in CSE in Uttara University. My expected graduation year is 2027.",
      icon: GraduationCap 
    },
    { 
      title: "HSC", 
      university: "Darunnazat Siddikia Kamil Madrasha", 
      gpa: "GPA: 4.88/5.00", 
      details: "I passed HSC from Darunnazat Siddikia Kamil Madrasha in 2021. My board was Dhaka. I got 4.88 out of 5 from Science.",
      icon: BookMarked
    },
    { 
      title: "SSC", 
      university: "Darunnazat Siddikia Kamil Madrasha", 
      gpa: "GPA: 4.78/5.00", 
      details: "I passed SSC from Darunnazat Siddikia Kamil Madrasha in 2019. My board was Dhaka. I got 4.78 out of 5 from Science.",
      icon: FileText
    }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-night-background">
      <div className="container mx-auto container-padding">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get to know more about my background, skills, and experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center group"
          >
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-2xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl relative z-10">
                <img 
                  src={profile.photo1} 
                  alt={profile.name}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-primary/20 to-purple-600/20 animate-pulse"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-bold mb-8 relative">
              Who I Am
              <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-primary rounded-full"></span>
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              {profile.about}
            </p>
            
            <div className="space-y-4">
              <motion.div 
                className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-gray-800/50 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700/50"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-primary shadow-lg shadow-primary/30 flex-shrink-0">
                    <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-lg font-semibold text-gray-800 dark:text-white">{profile.age} years old</span>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Experienced and passionate</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-gray-800/50 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700/50"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-primary shadow-lg shadow-primary/30 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-lg font-semibold text-gray-800 dark:text-white">{profile.location}</span>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Based and available for work</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-gray-800/50 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700/50"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-primary shadow-lg shadow-primary/30 flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-lg font-semibold text-gray-800 dark:text-white">
                    {profile.education.degree} at {profile.education.university}
                  </span>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Ongoing education with excellence</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center mb-4">
              <GraduationCap className="w-6 h-6 text-primary mr-3" />
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Education & Achievements</h3>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {educationData.map((edu, index) => {
              const IconComponent = edu.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <Card hoverable className="p-8 text-center h-full flex flex-col relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="mb-6 flex justify-center">
                      <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-primary shadow-lg shadow-primary/30">
                          <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{edu.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-3 font-medium">{edu.university}</p>
                    <div className="my-3">
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${edu.gpa.startsWith("GPA") ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' : 'bg-primary/10 text-primary'}`}>
                        {edu.gpa}
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 flex-grow">
                      {edu.details}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;