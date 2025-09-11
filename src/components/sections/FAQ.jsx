import React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import Card from '../ui/Card.jsx';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqItems = [
    {
      question: "How long does it take to complete a project?",
      answer: "The timeline depends on the project complexity. A simple website typically takes 2-4 weeks, while more complex applications can take 2-6 months."
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer: "Yes, I offer ongoing maintenance and support packages to ensure your project continues to perform optimally."
    },
    {
      question: "What technologies do you work with?",
      answer: "I work with modern technologies including React, Vue.js, Node.js, Python, MongoDB, PostgreSQL, and various cloud platforms."
    },
    {
      question: "Can you work with existing designs or codebases?",
      answer: "Absolutely! I can work with your existing designs or help improve and maintain your current codebase."
    },
    {
      question: "What is your pricing structure?",
      answer: "I offer both fixed-price projects and hourly rates, depending on the project requirements. Let's discuss your needs for a detailed quote."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding">
      <div className="container mx-auto container-padding max-w-4xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Find answers to common questions about my services and process
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4"
                  aria-expanded={activeIndex === index}
                >
                  <h3 className="text-lg font-semibold flex-1">{item.question}</h3>
                  {activeIndex === index ? (
                    <Minus className="w-5 h-5 text-primary flex-shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-primary flex-shrink-0" />
                  )}
                </button>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-gray-200 dark:border-gray-700">
                        <p className="text-gray-600 dark:text-gray-300">{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;