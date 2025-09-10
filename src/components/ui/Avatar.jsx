import React from 'react';
import { motion } from 'framer-motion';

const Avatar = ({ 
  src, 
  alt, 
  size = 'md', 
  className = '',
  ...props 
}) => {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  };
  
  return (
    <motion.div
      className={`${sizes[size]} rounded-full overflow-hidden border-2 border-primary ${className}`}
      whileHover={{ scale: 1.05 }}
      {...props}
    >
      <img 
        src={src} 
        alt={alt}
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
};

export default Avatar;