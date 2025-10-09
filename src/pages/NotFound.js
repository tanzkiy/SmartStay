import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center justify-center min-h-[calc(100vh-120px)] bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white p-4"
    >
      <h1 className="text-6xl font-bold text-mountain-green mb-4">404</h1>
      <p className="text-2xl mb-4">Page Not Found</p>
      <p className="text-lg text-center mb-8">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
      <Link 
        to="/"
        className="btn-primary"
      >
        Go to Homepage
      </Link>
    </motion.div>
  );
};

export default NotFound;