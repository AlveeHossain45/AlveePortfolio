import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Card from '../ui/Card';

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
    <section id="newsletter" className="section-padding">
      <div className="container mx-auto container-padding max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="p-8 md:p-12 text-center bg-primary/10 border-primary/20">
            <Mail className="w-12 h-12 text-primary mx-auto mb-6" />
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Subscribe to my newsletter to receive updates on new projects, articles, and insights about web development and technology.
            </p>
            
            {isSubscribed ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 p-4 rounded-lg"
              >
                <p className="font-medium">Thank you for subscribing!</p>
                <p>You'll receive updates soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1"
                />
                <Button type="submit" variant="primary">
                  Subscribe
                </Button>
              </form>
            )}
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;