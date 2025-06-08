import React from 'react';
import { motion } from 'framer-motion';
import '../PageStyles.css';

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
    transition: { duration: 0.5 }
  }
};

const Apps = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="works-content"
    >
      <motion.h2 variants={itemVariants}>My Apps</motion.h2>
      <motion.p variants={itemVariants}>
        Mobile and desktop applications, tools, and software solutions.
      </motion.p>
      
      <motion.div variants={itemVariants} className="works-grid">
        <div className="work-item">
          <h3>Desktop Applications</h3>
          <p>Native desktop apps built with modern frameworks.</p>
        </div>
        <div className="work-item">
          <h3>Mobile Apps</h3>
          <p>Cross-platform mobile applications for iOS and Android.</p>
        </div>
        <div className="work-item">
          <h3>Utility Tools</h3>
          <p>Productivity tools and utilities for developers and designers.</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Apps;
