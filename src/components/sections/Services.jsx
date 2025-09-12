import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Smartphone, Database, Shield, Search, ArrowRight, Sparkles } from 'lucide-react';
import Card from '../ui/Card.jsx';

const Services = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description: "Custom website development using modern technologies like React, Vue, and Node.js to create fast, responsive, and user-friendly web applications.",
      features: ["Responsive Design", "Modern Frameworks", "Performance Optimization"],
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile App Development",
      description: "Cross-platform mobile application development using React Native and Flutter to create native-like experiences on both iOS and Android.",
      features: ["Cross-Platform", "Native Performance", "UI/UX Focused"],
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "User-centered design approach creating intuitive interfaces that enhance user experience and drive engagement with your product.",
      features: ["User Research", "Wireframing", "Prototyping"],
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend Development",
      description: "Robust server-side development with Node.js, Python, and various databases to build scalable and efficient backend systems.",
      features: ["API Development", "Database Design", "Server Management"],
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity",
      description: "Security assessment and implementation to protect your applications from vulnerabilities and ensure data privacy.",
      features: ["Security Audit", "Vulnerability Testing", "Data Protection"],
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "SEO Optimization",
      description: "Search engine optimization services to improve your website's visibility and ranking on search engine results pages.",
      features: ["Keyword Research", "Technical SEO", "Content Strategy"],
    }
  ];

  return (
    <section id="services" className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Decorative elements */}
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="h-full p-8 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                {/* Background decorative element */}
                <div className="absolute -top-16 -right-16 w-32 h-32 bg-primary rounded-full opacity-5 group-hover:opacity-10 transition-opacity duration-300"></div>
                
                {/* Icon container */}
                <div className="relative z-10 w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-primary">
                    {service.icon}
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
        </div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="bg-gradient-to-r from-primary to-purple-600 rounded-2xl p-12 text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-black/10"></div>
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-white/10 rounded-full"></div>
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-white/10 rounded-full"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Ready to start your project?</h3>
              <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's work together to bring your ideas to life with cutting-edge solutions tailored to your needs.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-primary rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Get in touch
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;