import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import GlassButton from './GlassButton'

// Animated version of the project card component - used for desktop
export const AnimatedProjectCard = ({ project, onImageLoad, isLoaded, isMobile, openModal }) => {
  const [imageError, setImageError] = useState(false)
  const imageRef = useRef(null)

  const handleImageLoad = () => {
    onImageLoad && onImageLoad(true)
  }

  const handleImageError = (e) => {
    setImageError(true)
    e.target.src = "/images/placeholder.jpg"
    onImageLoad && onImageLoad(true)
  }

  if (imageRef.current?.complete && !isLoaded) {
    handleImageLoad()
  }

  return (
    <motion.div 
      className={`project-card clickable glass ${isMobile ? 'story-card' : ''}`}
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
      onClick={() => openModal && openModal(project)}
    >
      <div 
        className={`project-image-container ${!isLoaded ? 'image-loading' : ''}`}
      >
        {!isLoaded && !imageError && <div className="image-placeholder-loader"></div>}
        <img 
          ref={imageRef}
          src={project.thumbnail || project.images[0]} 
          alt={project.title} 
          className={`project-image ${isLoaded ? 'image-loaded' : ''}`}
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
        {project.images && project.images.length > 1 && (
          <div className="multiple-images-indicator">
            <span>+{project.images.length - 1}</span>
          </div>
        )}
      </div>
      
      <motion.div 
        className="project-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.3 }}
      >
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        
        <motion.div 
          className="project-tags"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: { 
                staggerChildren: 0.05
              }
            }
          }}
        >
          {project.tags?.map((tag, index) => (
            <motion.span 
              key={index} 
              className="project-tag"
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 }
              }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
        
        <motion.div 
          className="project-links"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
        >
          {project.liveUrl && (
            <GlassButton href={project.liveUrl} className="project-link" variant="primary">
              <project.liveIcon />
              <span>{project.liveText}</span>
            </GlassButton>
          )}
          
          {project.codeUrl && (
            <GlassButton href={project.codeUrl} className="project-link" variant="secondary">
              <project.codeIcon />
              <span>{project.codeText}</span>
            </GlassButton>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

// Original ProjectCard - used for mobile view
export const ProjectCard = ({ project, onImageLoad, isLoaded, isMobile, openModal }) => {
  const [imageError, setImageError] = useState(false)
  const imageRef = useRef(null)

  const handleImageLoad = () => {
    onImageLoad && onImageLoad(true)
  }

  const handleImageError = (e) => {
    setImageError(true)
    e.target.src = "/images/placeholder.jpg"
    onImageLoad && onImageLoad(true)
  }

  if (imageRef.current?.complete && !isLoaded) {
    handleImageLoad()
  }

  return (
    <div 
      className={`project-card clickable glass ${isMobile ? 'story-card' : ''}`}
      onClick={() => openModal && openModal()}
    >
      <div className={`project-image-container ${!isLoaded ? 'image-loading' : ''}`}>
        {!isLoaded && !imageError && <div className="image-placeholder-loader"></div>}
        <img 
          ref={imageRef}
          src={project.thumbnail || project.images[0]} 
          alt={project.title} 
          className={`project-image ${isLoaded ? 'image-loaded' : ''}`}
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
        {project.images && project.images.length > 1 && (
          <div className="multiple-images-indicator">
            <span>+{project.images.length - 1}</span>
          </div>
        )}
      </div>
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        
        <div className="project-tags">
          {project.tags?.map((tag, index) => (
            <span key={index} className="project-tag">{tag}</span>
          ))}
        </div>
        
        <div 
          className="project-links"
          onClick={(e) => e.stopPropagation()}
        >
          {project.liveUrl && (
            <GlassButton href={project.liveUrl} className="project-link" variant="primary">
              <project.liveIcon />
              <span>{project.liveText}</span>
            </GlassButton>
          )}
          
          {project.codeUrl && (
            <GlassButton href={project.codeUrl} className="project-link" variant="secondary">
              <project.codeIcon />
              <span>{project.codeText}</span>
            </GlassButton>
          )}
        </div>
      </div>
    </div>
  )
}
