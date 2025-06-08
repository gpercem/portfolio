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

const Designs = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="works-content"
    >
      <motion.h2 variants={itemVariants}>My Designs</motion.h2>
      <motion.p variants={itemVariants}>
        Here you'll find my graphic design work, UI/UX designs, logos, and visual art projects.
      </motion.p>
      
      <motion.div variants={itemVariants} className="works-grid">
        <div className="work-item">
          <h3>Logo Design</h3>
          <p>Brand identity and logo designs for various clients.</p>
        </div>
        <div className="work-item">
          <h3>UI/UX Design</h3>
          <p>User interface and experience design for web and mobile applications.</p>
        </div>
        <div className="work-item">
          <h3>Digital Art</h3>
          <p>Digital illustrations and artistic compositions.</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Designs;
