import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <main className="pt-20 min-h-screen">
      <section className="section-padding">
        <div className="container mx-auto container-padding max-w-4xl">
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Last updated: October 28, 2023
            </p>
          </motion.div>

          <motion.div 
            className="prose prose-lg dark:prose-invert max-w-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2>1. Information We Collect</h2>
            <p>
              We collect information you provide directly to us, such as when you fill out a contact form, 
              subscribe to our newsletter, or communicate with us. The types of information we may collect 
              include your name, email address, and any other information you choose to provide.
            </p>

            <h2>2. How We Use Your Information</h2>
            <p>
              We use the information we collect to:
            </p>
            <ul>
              <li>Respond to your comments, questions, and requests</li>
              <li>Provide customer service and support</li>
              <li>Send you technical notices, updates, and security alerts</li>
              <li>Communicate with you about products, services, and events</li>
              <li>Monitor and analyze trends, usage, and activities</li>
            </ul>

            <h2>3. Sharing of Information</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personally identifiable information to 
              outside parties unless we provide users with advance notice. This does not include website 
              hosting partners and other parties who assist us in operating our website, conducting our 
              business, or serving our users, so long as those parties agree to keep this information 
              confidential.
            </p>

            <h2>4. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information from 
              unauthorized access, alteration, disclosure, or destruction. However, no method of 
              transmission over the Internet or electronic storage is 100% secure, and we cannot 
              guarantee absolute security.
            </p>

            <h2>5. Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal information. You can 
              also object to the processing of your personal information, ask us to restrict processing 
              of your personal information, or request portability of your personal information.
            </p>

            <h2>6. Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will notify you of any changes 
              by posting the new privacy policy on this page and updating the "Last updated" date.
            </p>

            <h2>7. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
              <br />
              <a href="mailto:replace-with-email@example.com" className="text-primary hover:underline">
                replace-with-email@example.com
              </a>
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;