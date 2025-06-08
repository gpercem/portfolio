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

const Projects = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="works-content"
    >
      <motion.h2 variants={itemVariants}>My Projects</motion.h2>
      <motion.p variants={itemVariants}>
        Web development projects, open source contributions, and technical implementations.
      </motion.p>
      
      <motion.div variants={itemVariants} className="works-grid">
        <div className="work-item">
          <h3>Portfolio Website</h3>
          <p>This responsive React website showcasing my work and skills.</p>
        </div>
        <div className="work-item">
          <h3>Web Applications</h3>
          <p>Full-stack web applications built with modern technologies.</p>
        </div>
        <div className="work-item">
          <h3>Open Source</h3>
          <p>Contributions to open source projects and personal repositories.</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
