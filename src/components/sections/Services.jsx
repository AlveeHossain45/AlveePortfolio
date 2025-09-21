import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Palette, Smartphone, Database, ArrowRight, Sparkles, ChevronDown, ChevronUp, Zap, Shield, Globe } from 'lucide-react';
import Card from '../ui/Card.jsx';
import Button from '../ui/Button.jsx';
import servicesData from '../../data/services.js';

// Premium icon mapping with enhanced styling
const iconMap = {
  Code: <Code className="w-10 h-10 text-blue-500" />,
  Smartphone: <Smartphone className="w-10 h-10 text-purple-500" />,
  Palette: <Palette className="w-10 h-10 text-amber-500" />,
  Database: <Database className="w-10 h-10 text-emerald-500" />,
  Zap: <Zap className="w-10 h-10 text-yellow-500" />,
  Shield: <Shield className="w-10 h-10 text-indigo-500" />,
  Globe: <Globe className="w-10 h-10 text-cyan-500" />
};

// Floating particles component for background
const FloatingParticles = () => {
  return (
    <>
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-r from-primary/20 to-purple-600/20"
          style={{
            width: Math.random() * 30 + 10,
            height: Math.random() * 30 + 10,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, Math.random() * 40 - 20],
            x: [0, Math.random() * 40 - 20],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
};

const Services = () => {
  const [showAll, setShowAll] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const services = servicesData;

  const displayedServices = showAll ? services : services.slice(0, 3);

  return (
    <section id="services" className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-72 bg-gradient-to-r from-primary/5 to-purple-600/5"></div>
      <div className="absolute top-20 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 -right-20 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingParticles />
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHBhdGggZD0iTTAgMEg2MFY2MEgwVjBaIiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTAgMEw2MCA2ME02MCAwTDAgNjAiIHN0cm9rZT0icmdiYSgwLDAsMCwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')] opacity-10 mix-blend-overlay"></div>

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
            {displayedServices.map((service, index) => (
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
                  {/* Gradient border effect on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${hoveredCard === service.id ? 'opacity-100' : ''}`}></div>
                  
                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-y-full group-hover:animate-shine ${hoveredCard === service.id ? 'animate-shine' : ''}`}></div>
                  </div>
                  
                  <div className="relative z-10">
                    <motion.div 
                      className="w-16 h-16 bg-gradient-to-br from-primary/10 to-purple-600/10 dark:from-primary/20 dark:to-purple-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md"
                      whileHover={{ rotate: 5 }}
                    >
                      {iconMap[service.icon]}
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
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
                    
                    <motion.button
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center text-sm font-semibold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent group-hover:underline"
                    >
                      Discover more
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </motion.button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show More / Show Less Button */}
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

      <style jsx>{`
        @keyframes shine {
          0% { transform: translateX(-100%) translateY(-100%) rotate(30deg); }
          80% { transform: translateX(100%) translateY(-100%) rotate(30deg); }
          100% { transform: translateX(100%) translateY(-100%) rotate(30deg); }
        }
        .animate-shine {
          animation: shine 1s forwards;
        }
      `}</style>
    </section>
  );
};

export default Services;