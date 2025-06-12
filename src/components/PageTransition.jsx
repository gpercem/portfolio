import { motion } from 'framer-motion'
import { useLocation } from 'react-router'

const PageTransition = ({ children }) => {
  const location = useLocation()
  
  const variants = {
    enter: {
      opacity: 0,
    },
    center: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  }

  const transition = {
    opacity: { ease: "easeInOut", duration: 0.3 },
  }

  return (
    <motion.div
      key={location.pathname}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={transition}
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {children}
    </motion.div>
  )
}

export default PageTransition
