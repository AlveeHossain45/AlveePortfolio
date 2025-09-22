import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, Heart, Sparkles } from 'lucide-react';
import profile from '../../data/profile';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialIcons = [
    { key: 'email', icon: Mail, href: `mailto:${profile.contacts.email}` },
    { key: 'github', icon: Github, href: profile.contacts.github },
    { key: 'linkedin', icon: Linkedin, href: profile.contacts.linkedin },
    { key: 'twitter', icon: Twitter, href: profile.contacts.twitter },
  ];

  return (
    <footer className="relative bg-white dark:bg-night-background py-16 border-t border-gray-200 dark:border-gray-700/50">
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <motion.div 
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600 mb-2">
              {profile.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg">{profile.role}</p>
          </motion.div>

          <motion.div 
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex gap-3 mb-6">
              {socialIcons.map((item) => {
                const IconComponent = item.icon;
                return (
                  <motion.a
                    key={item.key}
                    href={item.href}
                    target={item.key !== 'email' ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center bg-primary text-white rounded-xl shadow-lg hover:shadow-primary/40 transition-all duration-300"
                    aria-label={item.key}
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconComponent className="w-6 h-6" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="border-t border-gray-200 dark:border-gray-700 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center justify-center gap-1.5">
            © {currentYear} • Crafted with <Heart className="w-4 h-4 text-red-500" /> by {profile.name}
            <Sparkles className="w-4 h-4 text-yellow-500" />
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;