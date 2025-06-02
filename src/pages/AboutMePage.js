import React from 'react';
import { motion } from 'framer-motion';
import './PageStyles.css';
import PageTransition from '../components/PageTransition';

const AboutMePage = () => {
  return (
    <PageTransition>
      <motion.div 
        className="page-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.h1
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          About Me
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Learn more about my background, skills, and passions.
        </motion.p>
        {/* Add more content specific to About Me page */}
      </motion.div>
    </PageTransition>
  );
};

export default AboutMePage;
