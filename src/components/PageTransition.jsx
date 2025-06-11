import { motion } from 'framer-motion'
import { useLocation } from 'react-router'

const PageTransition = ({ children }) => {
  const location = useLocation()
  // The direction for animations is no longer needed for fade.
  
  const variants = {
    enter: { // Removed globalDir parameter
      opacity: 0,
      // Removed x property
    },
    center: {
      opacity: 1,
      // Removed x property
    },
    exit: { // Removed globalDir parameter
      opacity: 0,
      // Removed x property
    },
  }

  const transition = {
    opacity: { ease: "easeInOut", duration: 0.3 }, // Simplified: only opacity transition
  }

  return (
    <motion.div
      key={location.pathname} // Crucial for AnimatePresence to identify components
      // Removed 'custom' prop here; variants will use AnimatePresence's 'custom' prop value.
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={transition}
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
      }}
    >
      {children}
    </motion.div>
  )
}

export default PageTransition
