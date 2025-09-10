import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, Heart } from 'lucide-react';
import profile from '../../data/profile';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <motion.div 
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-primary mb-2">{profile.name}</h3>
            <p className="text-gray-600 dark:text-gray-300">{profile.role}</p>
          </motion.div>

          <motion.div 
            className="flex flex-col items-center md:items-end"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex gap-4 mb-4">
              <a 
                href={`mailto:${profile.contacts.email}`}
                className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-shadow"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </a>
              <a 
                href={profile.contacts.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-shadow"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </a>
              <a 
                href={profile.contacts.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-shadow"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </a>
              <a 
                href={profile.contacts.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-shadow"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </a>
            </div>
            
            <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
              Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> by {profile.name}
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © {currentYear} {profile.name}. All rights reserved.
          </p>
          <div className="flex justify-center gap-6 mt-2">
            <a href="/privacy" className="text-gray-500 dark:text-gray-400 text-sm hover:text-primary transition-colors">
              Privacy Policy
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;