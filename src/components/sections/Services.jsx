import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Palette, Smartphone, Database, ArrowRight, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import Card from '../ui/Card.jsx';
import Button from '../ui/Button.jsx';
import servicesData from '../../data/services.js';

// আইকন স্ট্রিংকে কম্পোনেন্টে ম্যাপ করার জন্য
const iconMap = {
  Code: Code,
  Smartphone: Smartphone,
  Palette: Palette,
  Database: Database
};

const Services = () => {
  const [showAll, setShowAll] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const services = servicesData;

  const displayedServices = showAll ? services : services.slice(0, 3);

  return (
    <section id="services" className="relative section-padding overflow-hidden bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-900 dark:to-night-background">
      {/* পরিবর্তন: অতিরিক্ত ব্যাকগ্রাউন্ড এলিমেন্ট (particles, grid) সরিয়ে দেওয়া হয়েছে */}
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
          <motion.div 
            className="inline-flex items-center justify-center mb-6 px-4 py-2 bg-primary/10 dark:bg-primary/20 rounded-full"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Sparkles className="w-5 h-5 text-primary mr-2" />
            <span className="text-primary font-medium">PREMIUM SERVICES</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            Tailored Digital Solutions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Expertly crafted digital experiences designed to elevate your brand and accelerate your business growth
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence mode="popLayout">
            {displayedServices.map((service, index) => {
              const IconComponent = iconMap[service.icon]; // <-- আইকন কম্পোনেন্ট পাওয়া
              return (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -30, scale: 0.95 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ y: -15, transition: { duration: 0.3 } }}
                  className="group"
                  onMouseEnter={() => setHoveredCard(service.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <Card className="h-full p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-white/20 dark:border-gray-700/30 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden relative">
                    <div className="relative z-10">
                      {/* পরিবর্তন: আইকন কন্টেইনারের জন্য নতুন প্রিমিয়াম স্টাইল */}
                      <motion.div 
                        className="w-20 h-20 rounded-2xl flex items-center justify-center mb-8 relative bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/30"
                      >
                        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-2xl"></div>
                        {IconComponent && <IconComponent className="w-10 h-10 text-white drop-shadow-lg" />}
                      </motion.div>
                      
                      <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <ul className="space-y-3 mb-8">
                        {service.features.map((feature, idx) => (
                          <motion.li 
                            key={idx} 
                            className="flex items-center"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-primary to-purple-600 rounded-full mr-3"></div>
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                      
                      <motion.div
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center text-sm font-semibold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent group-hover:underline cursor-pointer"
                      >
                        Discover more
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </motion.div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {services.length > 3 && (
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-2 mx-auto bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary"
            >
              {showAll ? (
                <>
                  Show Less <ChevronUp className="w-5 h-5" />
                </>
              ) : (
                <>
                  View All Services <ChevronDown className="w-5 h-5" />
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