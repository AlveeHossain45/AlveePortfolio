import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Smartphone, Database, Shield, Search } from 'lucide-react';
import Card from '../Card.jsx';

const Services = () => {
  const services = [
    {
      icon: <Code className="w-12 h-12" />,
      title: "Web Development",
      description: "Custom website development using modern technologies like React, Vue, and Node.js to create fast, responsive, and user-friendly web applications.",
      features: ["Responsive Design", "Modern Frameworks", "Performance Optimization"]
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Mobile App Development",
      description: "Cross-platform mobile application development using React Native and Flutter to create native-like experiences on both iOS and Android.",
      features: ["Cross-Platform", "Native Performance", "UI/UX Focused"]
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "UI/UX Design",
      description: "User-centered design approach creating intuitive interfaces that enhance user experience and drive engagement with your product.",
      features: ["User Research", "Wireframing", "Prototyping"]
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: "Backend Development",
      description: "Robust server-side development with Node.js, Python, and various databases to build scalable and efficient backend systems.",
      features: ["API Development", "Database Design", "Server Management"]
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Cybersecurity",
      description: "Security assessment and implementation to protect your applications from vulnerabilities and ensure data privacy.",
      features: ["Security Audit", "Vulnerability Testing", "Data Protection"]
    },
    {
      icon: <Search className="w-12 h-12" />,
      title: "SEO Optimization",
      description: "Search engine optimization services to improve your website's visibility and ranking on search engine results pages.",
      features: ["Keyword Research", "Technical SEO", "Content Strategy"]
    }
  ];

  return (
    <section id="services" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto container-padding">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Services</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I offer a wide range of services to help you build and grow your digital presence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card hoverable className="p-8 h-full">
                <div className="text-primary mb-6">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;