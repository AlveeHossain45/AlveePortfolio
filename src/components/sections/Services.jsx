import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Palette, Smartphone, Database, ArrowRight, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import Card from '../ui/Card.jsx';
import Button from '../ui/Button.jsx';
import servicesData from '../../data/services.js';

// আইকনগুলোকে একটি ম্যাপে রাখা হলো সহজে ব্যবহারের জন্য
const iconMap = {
  Code: <Code className="w-8 h-8" />,
  Smartphone: <Smartphone className="w-8 h-8" />,
  Palette: <Palette className="w-8 h-8" />,
  Database: <Database className="w-8 h-8" />,
};

const Services = () => {
  const [showAll, setShowAll] = useState(false);
  const services = servicesData;

  // প্রাথমিকভাবে ৩টি সার্ভিস দেখাবে, বাটনে ক্লিক করলে বাকিগুলো দেখাবে
  const displayedServices = showAll ? services : services.slice(0, 3);

  return (
    <section id="services" className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="absolute top-0 left-0 w-full h-72 bg-gradient-to-r from-primary/5 to-purple-600/5"></div>
      <div className="absolute top-20 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 -right-20 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl"></div>
      
      <div className="relative container mx-auto px-4 max-w-7xl">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="inline-flex items-center justify-center mb-6 px-4 py-2 bg-primary/10 dark:bg-primary/20 rounded-full">
            <Sparkles className="w-5 h-5 text-primary mr-2" />
            <span className="text-primary font-medium">MY SERVICES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            What I Can Do For You
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive digital solutions to bring your ideas to life and grow your business
          </p>
        </motion.div>

        <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
        >
          <AnimatePresence>
            {displayedServices.map((service, index) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="h-full p-8 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="absolute -top-16 -right-16 w-32 h-32 bg-primary rounded-full opacity-5 group-hover:opacity-10 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10 w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-primary">
                      {iconMap[service.icon]}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="flex items-center text-sm font-semibold text-primary group-hover:underline"
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </motion.button>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show More / Show Less Button */}
        {services.length > 3 && (
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-2 mx-auto"
            >
              {showAll ? (
                <>
                  Show Less <ChevronUp className="w-5 h-5" />
                </>
              ) : (
                <>
                  Show More <ChevronDown className="w-5 h-5" />
                </>
              )}
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Services;