import React from 'react';
import { motion } from 'framer-motion';
import './PageStyles.css'; // Common styles for pages
import '../App.css'; // Ensure App.css is imported for glowing button styles
import GlowingButton from '../components/GlowingButton';
import AboutButtonsSection from '../components/AboutButtonsSection';
import PageTransition from '../components/PageTransition';

import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaItchIo } from 'react-icons/fa6';

// Animation variants for staggered children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
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

const HomePage = () => {
  return (
    <PageTransition>
      <motion.section 
        className="hero-section"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div className="hero-content">
          <motion.h1 
            className="hero-title"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Welcome
          </motion.h1>
          <motion.p 
            className="hero-subtitle"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            Grab a seat, feel like home.
          </motion.p>
        </div>
      </motion.section>

      <motion.section 
        className="two-column-section"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="column column-wider column-yellow"
          variants={itemVariants}
        >
          <h2>Hello! I am Gökhan.</h2>
          <p>Welcome to my site. I'm a software engineering student who likes working on computer technologies and creating digital art.</p>
          <div style={{ height: '10px' }}></div>
          <GlowingButton>CONTACT ME</GlowingButton>
        </motion.div>
        <motion.div 
          className="column column-narrower column-green"
          variants={itemVariants}
        >
        </motion.div>
      </motion.section>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <AboutButtonsSection />
      </motion.div>

      <motion.section 
        className="two-column-section"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1 }}
      >
        <motion.div 
          className="column column-narrower column-green"
          variants={itemVariants}
        >
          <h2>My Socials</h2>
          <a className="social" href="https://www.linkedin.com/in/gokhanpercem/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24}/> <p>gokhanpercem</p> 
          </a>
          <a className="social" href="https://www.github.com/gokhanpercem" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24}/> <p>gpercem</p>
          </a>
          <a className="social" href="https://gokomon.itch.io/" target="_blank" rel="noopener noreferrer">
            <FaItchIo size={24}/> <p>gokomon</p>
          </a>
          <a className="social" href="https://www.instagram.com/gokhanpercem/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24}/> <p>gokhanpercem</p>
          </a>
          <div style={{ height: '10px' }}></div>
        </motion.div>
        <motion.div 
          className="column column-wider column-yellow"
          variants={itemVariants}
        >
        </motion.div>
      </motion.section>
    </PageTransition>
  );
};

export default HomePage;
