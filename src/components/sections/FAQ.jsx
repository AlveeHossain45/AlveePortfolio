import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ChevronDown, HelpCircle, MessageCircle, Mail } from 'lucide-react';

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
    <section id="faq" className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-72 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
      <div className="absolute top-20 -left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 -right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative container mx-auto px-4 max-w-6xl">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="inline-flex items-center justify-center mb-6 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-full">
            <HelpCircle className="w-5 h-5 text-blue-600 mr-2" />
            <span className="text-blue-600 font-medium">COMMON QUESTIONS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Everything you need to know about the process. Can't find an answer? 
            <a href="#contact" className="ml-2 text-blue-600 hover:underline font-medium">Contact me directly</a>.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {faqItems.slice(0, 3).map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className={`relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 ${activeIndex === index ? 'ring-2 ring-blue-500/30' : ''}`}>
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full p-6 text-left flex items-start justify-between gap-6 group"
                    aria-expanded={activeIndex === index}
                  >
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 transition-colors">
                        {item.question}
                      </h3>
                    </div>
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors">
                      <motion.div
                        animate={{ rotate: activeIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-5 h-5 text-blue-600" />
                      </motion.div>
                    </div>
                  </button>

                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      >
                        <div className="px-6 pb-6 pt-2 border-t border-gray-100 dark:border-gray-700">
                          <p className="text-gray-600 dark:text-gray-300">{item.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            {faqItems.slice(3).map((item, index) => (
              <motion.div
                key={index + 3}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: (index + 3) * 0.1, duration: 0.5 }}
              >
                <div className={`relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 ${activeIndex === index + 3 ? 'ring-2 ring-blue-500/30' : ''}`}>
                  <button
                    onClick={() => toggleFAQ(index + 3)}
                    className="w-full p-6 text-left flex items-start justify-between gap-6 group"
                    aria-expanded={activeIndex === index + 3}
                  >
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 transition-colors">
                        {item.question}
                      </h3>
                    </div>
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors">
                      <motion.div
                        animate={{ rotate: activeIndex === index + 3 ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-5 h-5 text-blue-600" />
                      </motion.div>
                    </div>
                  </button>

                  <AnimatePresence>
                    {activeIndex === index + 3 && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      >
                        <div className="px-6 pb-6 pt-2 border-t border-gray-100 dark:border-gray-700">
                          <p className="text-gray-600 dark:text-gray-300">{item.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
            
            {/* Contact card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white shadow-lg"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="relative z-10">
                <MessageCircle className="w-12 h-12 mb-4 text-white/80" />
                <h3 className="text-xl font-bold mb-2">Still have questions?</h3>
                <p className="mb-6 text-blue-100">Can't find the answer you're looking for? Please chat with our friendly team.</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-2 w-full md:w-auto px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold shadow-lg"
                >
                  <Mail className="w-5 h-5" />
                  Get in touch
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;