import React from 'react';
import { motion } from 'framer-motion';
import ItchIoEmbed from '../../components/ItchIoEmbed';
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

const Games = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="works-content"
    >
      <motion.h2 variants={itemVariants}>My Games</motion.h2>
      <motion.p variants={itemVariants}>
        Game development projects including indie games, game jams, and experimental interactive experiences.
      </motion.p>
      
      <motion.div variants={itemVariants} className="games-showcase">
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
    </motion.div>
  );
};

export default Games;
