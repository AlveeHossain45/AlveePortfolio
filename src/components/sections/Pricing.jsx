import React from 'react';
import { motion } from 'framer-motion';
import { pricingPlans, featureIcons } from '../../data/pricing.js';
import Card from '../ui/Card.jsx';
import Button from '../ui/Button.jsx';

const Pricing = () => {
  return (
    <section id="pricing" className="section-padding bg-gray-50 dark:bg-night-background">
      <div className="container mx-auto container-padding">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Flexible Pricing Plans
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Choose a plan that fits your needs. All plans are customizable to match your project's requirements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`h-full ${plan.isFeatured ? 'transform lg:scale-110 z-10' : ''}`}
            >
              <Card 
                className={`p-8 h-full flex flex-col ${plan.isFeatured ? 'border-2 border-primary shadow-2xl' : 'shadow-lg'}`}
              >
                {plan.isFeatured && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-primary text-white text-sm font-semibold rounded-full">
                    Most Popular
                  </div>
                )}
                
                <div className="flex-grow">
                  <div className="text-center mb-6">
                    <plan.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                    <p className="text-4xl font-bold mb-2">
                      {plan.price}
                      <span className="text-lg font-normal text-gray-500 dark:text-gray-400">{plan.frequency}</span>
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => {
                      const Icon = featureIcons[feature] || featureIcons.default;
                      return (
                        <li key={idx} className="flex items-center">
                          <Icon className="w-5 h-5 text-green-500 mr-3" />
                          <span>{feature}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                
                <a href={plan.actionLink} className="mt-auto">
                    <Button 
                    variant={plan.isFeatured ? 'primary' : 'outline'} 
                    className="w-full"
                    >
                    {plan.buttonText}
                    </Button>
                </a>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;