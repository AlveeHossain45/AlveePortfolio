import React from 'react';
import { motion } from 'framer-motion';

const IconButton = ({ 
  icon: Icon, 
  onClick, 
  ariaLabel,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props 
}) => {
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary/90',
    outline: 'border border-primary text-primary hover:bg-primary hover:text-white',
    ghost: 'text-primary hover:bg-primary/10'
  };
  
  const sizes = {
    sm: 'p-1.5',
    md: 'p-2',
    lg: 'p-3'
  };
  
  const classes = `rounded-full transition-colors ${variants[variant]} ${sizes[size]} ${className}`;
  
  return (
    <motion.button
      className={classes}
      onClick={onClick}
      whileTap={{ scale: 0.95 }}
      aria-label={ariaLabel}
      {...props}
    >
      <Icon className="w-4 h-4" />
    </motion.button>
  );
};

export default IconButton;