import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Check, Sparkles } from 'lucide-react';
import Button from '../ui/Button.jsx';
import Input from '../ui/Input.jsx';
import Card from '../ui/Card.jsx';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the email to your newsletter service
    console.log('Newsletter subscription:', email);
    setIsSubscribed(true);
    setEmail('');
    
    // Reset after 3 seconds
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <section id="newsletter" className="section-padding relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto container-padding max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Card className="p-10 md:p-14 text-center bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 border-0 shadow-2xl relative overflow-hidden">
            {/* Premium decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 -mt-16 -mr-16 bg-primary/10 rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 -mb-12 -ml-12 bg-purple-500/10 rounded-full"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-primary to-purple-600 rounded-2xl mb-6 shadow-lg">
                <Mail className="w-8 h-8 text-white" />
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-5 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-300">
                Stay in the Loop
              </h2>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                Join my exclusive newsletter and be the first to receive updates on new projects, 
                in-depth articles, and expert insights about web development and emerging technologies.
              </p>
              
              {isSubscribed ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/20 border border-green-200 dark:border-green-800/50 p-6 rounded-2xl shadow-lg max-w-md mx-auto"
                >
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <div className="flex items-center justify-center w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-full">
                      <Check className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <Sparkles className="w-5 h-5 text-yellow-500" />
                  </div>
                  <h3 className="font-semibold text-green-800 dark:text-green-300 text-lg mb-1">Welcome aboard!</h3>
                  <p className="text-green-700 dark:text-green-400/80">You've been added to our exclusive newsletter list.</p>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
                    <div className="relative flex-1">
                      <Input
                        type="email"
                        placeholder="Enter your best email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="pl-12 py-4 h-14 text-lg rounded-xl border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    </div>
                    <Button 
                      type="submit" 
                      variant="primary" 
                      className="h-14 px-8 text-lg rounded-xl bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 transition-all shadow-lg hover:shadow-primary/30"
                    >
                      Subscribe Now
                    </Button>
                  </form>
                  
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                    No spam ever. Unsubscribe anytime with one click.
                  </p>
                </motion.div>
              )}
              
              <motion.div 
                className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-700/50"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <p className="text-gray-500 dark:text-gray-400 text-sm flex flex-col sm:flex-row items-center justify-center gap-2">
                  <span className="inline-flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    Join <span className="font-semibold text-gray-600 dark:text-gray-300">1,200+</span> developers
                  </span>
                  <span className="hidden sm:block">•</span>
                  <span>Latest articles delivered weekly</span>
                </p>
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;