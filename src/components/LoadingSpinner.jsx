import { motion } from 'framer-motion'
import './LoadingSpinner.css'

const LoadingSpinner = () => {
  return (
    <div className="loading-container">
      <motion.div
        className="spinner-circle"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="spinner-inner"></div>
      </motion.div>
    </div>
  )
}

export default LoadingSpinner
