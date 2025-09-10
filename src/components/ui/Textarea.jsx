import React from 'react';
import { forwardRef } from 'react';

const Textarea = forwardRef(({ 
  label, 
  error,
  className = '',
  ...props 
}, ref) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}
      <textarea
        ref={ref}
        className={`w-full px-4 py-3 border ${
          error ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
        } rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-transparent ${className}`}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
});

Textarea.displayName = 'Textarea';

export default Textarea;