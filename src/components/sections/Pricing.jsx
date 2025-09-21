// src/components/sections/Pricing.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { pricingPlans, featureIcons } from '../../data/pricing.js';
import Card from '../ui/Card.jsx';
import Button from '../ui/Button.jsx';

const Pricing = () => {
  return (
    <section id="pricing" className="section-padding bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-night-background">
      <div className="container mx-auto container-padding">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            Flexible Pricing Plans
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Choose a plan that fits your needs. All plans are designed to deliver value and quality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {pricingPlans.map((plan, index) => {
            const getFeatureIcon = (feature) => {
              const Icon = featureIcons[feature] || featureIcons["default"];
              return <Icon className="w-4 h-4" />;
            };

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`h-full ${plan.isFeatured ? 'transform lg:scale-110' : ''}`}
              >
                <Card 
                  className={`h-full flex flex-col p-8 relative overflow-hidden transition-all duration-300 group bg-white dark:bg-night-card/80 ${
                    plan.isFeatured 
                      ? 'border-2 border-primary shadow-2xl shadow-primary/20' 
                      : 'border border-gray-200 dark:border-gray-700'
                  }`}
                >
                  {plan.isFeatured && (
                    <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-8 py-1 transform translate-x-8 translate-y-5 rotate-45 z-20">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="flex-grow">
                    <motion.div 
                      className="w-20 h-20 rounded-2xl flex items-center justify-center mb-8 relative bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/30"
                    >
                      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-2xl"></div>
                      <plan.icon className="w-10 h-10 text-white drop-shadow-lg" />
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{plan.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 h-12">{plan.description}</p>
                    
                    <div className="mb-8">
                      <span className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">{plan.price}</span>
                      <span className="text-gray-500 dark:text-gray-400 text-lg ml-1">{plan.frequency}</span>
                    </div>

                    <ul className="space-y-4">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <div className="text-green-500">
                            {getFeatureIcon(feature)}
                          </div>
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-10">
                    <a href={plan.actionLink}>
                      {/* পরিবর্তন: বাটনের জন্য variant prop টি আবার যোগ করা হয়েছে */}
                      <Button 
                        variant={plan.isFeatured ? 'primary' : 'outline'}
                        size="lg" 
                        className={`w-full text-lg font-bold transition-all duration-300 transform hover:-translate-y-1 
                          ${plan.isFeatured 
                            ? 'bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg hover:shadow-purple-500/50'
                            : 'border-2' // <-- শুধুমাত্র বর্ডারের স্টাইল এখানে রাখা হয়েছে, বাকিটা variant prop থেকে আসবে
                          }`}
                      >
                        {plan.buttonText}
                      </Button>
                    </a>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;