import React from 'react';
import { motion } from 'framer-motion';
import './PageStyles.css';
import AboutButtonsSection from '../components/AboutButtonsSection';
import PageTransition from '../components/PageTransition';
import ItchIoEmbed from '../components/ItchIoEmbed';

const WorksPage = () => {
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
        <ItchIoEmbed 
          gameId="1121814"
          width={206}
          height={165}
          borderWidth={0}
          bgColor="FFF8F0"
          fgColor="FFF8F0"
          linkColor="294932"
          borderColor="000000"
          gameUrl="https://eneskp3441.itch.io/imlec"
          gameTitle="İmleç by Enes Kaplan, vcagrokrome, Gökhan Perçem"
        />
      </motion.div>
    </PageTransition>
  );
};

export default WorksPage;
