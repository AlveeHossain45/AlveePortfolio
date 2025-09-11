import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Calendar } from 'lucide-react';
import Button from '../Button.jsx';
import Card from '../Card.jsx';

const CTA = () => {
  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScheduleClick = () => {
    // This would typically open a calendar scheduling modal
    window.open('https://calendly.com', '_blank');
  };

  return (
    <section id="cta" className="section-padding bg-primary">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="bg-white dark:bg-night-card p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's work together to bring your ideas to life. I'm available for new projects and would love to hear about your vision.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                size="lg"
                onClick={handleContactClick}
                className="flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Get In Touch
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={handleScheduleClick}
                className="flex items-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Schedule Call
              </Button>
            </div>

            <p className="text-sm text-gray-500 dark:text-gray-400 mt-6">
              Typically replies within 24 hours
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;