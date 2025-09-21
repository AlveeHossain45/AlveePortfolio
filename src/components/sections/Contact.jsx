import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, User, ArrowRight } from 'lucide-react';
import profile from '../../data/profile';
import Button from '../ui/Button.jsx';
import Input from '../ui/Input.jsx';
import Textarea from '../ui/Textarea.jsx';
import Card from '../ui/Card.jsx';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto container-padding">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-6">
            <MessageSquare className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3 variants={itemVariants} className="text-2xl font-bold mb-6">Contact Information</motion.h3>
            <motion.p variants={itemVariants} className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Feel free to reach out through any of these channels. I'm always open to discussing new projects and opportunities.
            </motion.p>

            <div className="space-y-6">
              <motion.div variants={itemVariants}>
                <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-br from-primary to-purple-600 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <a href={`mailto:${profile.contacts.email}`} className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
                        {profile.contacts.email}
                      </a>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-br from-primary to-purple-600 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Location</h4>
                      <p className="text-gray-600 dark:text-gray-300">{profile.location}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-br from-primary to-purple-600 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Phone</h4>
                      <p className="text-gray-600 dark:text-gray-300">Available upon request</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="p-8 border-0 shadow-xl bg-white dark:bg-gray-800">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-full">
                  <User className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Send Me a Message</h3>
              </div>
              
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      label="Your Name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      icon={<User className="w-4 h-4" />}
                    />
                    
                    <Input
                      label="Email Address"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      icon={<Mail className="w-4 h-4" />}
                    />
                  </div>
                  
                  <Input
                    label="Subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    icon={<MessageSquare className="w-4 h-4" />}
                  />
                
                  <Textarea
                    label="Message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    icon={<MessageSquare className="w-4 h-4" />}
                  />
                  
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button 
                      type="submit" 
                      variant="primary" 
                      className="w-full group"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Sending...
                        </div>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                          Send Message
                          <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-all" />
                        </>
                      )}
                    </Button>
                  </motion.div>
                </div>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;