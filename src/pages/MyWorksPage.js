import React from 'react';
import { motion } from 'framer-motion';
import './PageStyles.css';
import AboutButtonsSection from '../components/AboutButtonsSection';
import PageTransition from '../components/PageTransition';

const MyWorksPage = () => {
  return (
    <PageTransition>
      <motion.div 
        className="page-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <AboutButtonsSection />
        {/* Add more content specific to My Works page */}
      </motion.div>
<iframe frameborder="0" src="https://itch.io/embed/1121814?border_width=0" width="206" height="165"><a href="https://eneskp3441.itch.io/imlec">İmleç by Enes Kaplan, vcagrokrome, Gökhan Perçem</a></iframe>    </PageTransition>
  );
};

export default MyWorksPage;
