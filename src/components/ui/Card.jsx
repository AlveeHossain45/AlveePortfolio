import React from 'react';
import { motion } from 'framer-motion';
import { forwardRef } from 'react';

const Card = forwardRef(({ 
  children, 
  className = '', 
  hoverable = false,
  ...props 
}, ref) => {
  const baseClasses = 'bg-white dark:bg-night-card rounded-xl shadow-lg overflow-hidden';
  const hoverClasses = hoverable ? 'hover:shadow-xl transition-shadow duration-300' : '';
  const classes = `${baseClasses} ${hoverClasses} ${className}`;
  
  return (
    <motion.div
      ref={ref}
      className={classes}
      whileHover={hoverable ? { y: -5 } : {}}
      {...props}
    >
      {children}
    </motion.div>
  );
});

Card.displayName = 'Card';

export default Card;