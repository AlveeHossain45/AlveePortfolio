// src/components/sections/Pricing.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { pricingPlans } from '../../data/pricing.js';
import Card from '../ui/Card.jsx';
import Button from '../ui/Button.jsx';

const Pricing = () => {
  return (
    <section id="pricing" className="section-padding bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
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
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`h-full ${plan.isFeatured ? 'transform lg:scale-110' : ''}`}
            >
              <Card 
                className={`h-full flex flex-col p-8 relative overflow-hidden ${plan.isFeatured ? 'border-2 border-primary shadow-primary/20' : ''}`}
              >
                {plan.isFeatured && (
                  <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-8 py-1 transform translate-x-8 translate-y-5 rotate-45">
                    Most Popular
                  </div>
                )}
                
                <div className="flex-grow">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <plan.icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-6">{plan.description}</p>
                  
                  <div className="mb-8">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-500 dark:text-gray-400">{plan.frequency}</span>
                  </div>

                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <div className="w-5 h-5 bg-green-500 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                          <Check className="w-3 h-3" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-10">
                  <Button 
                    variant={plan.isFeatured ? 'primary' : 'outline'} 
                    size="lg" 
                    className="w-full"
                  >
                    {plan.buttonText}
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;