import { useState, useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Keyboard, Mousewheel } from 'swiper/modules'
import { HiChevronLeft, HiChevronRight, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'
import './ProjectImageModal.css'

const ProjectImageModal = ({ project, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [imagesLoaded, setImagesLoaded] = useState({})
  const [isClosing, setIsClosing] = useState(false)
  const swiperRef = useRef(null)
  
  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.activeIndex)
  }
  
  const handleImageLoad = (index) => {
    setImagesLoaded(prev => ({...prev, [index]: true}))
  }
  
  const handleBackdropClick = (e) => {
    if (e.target.classList.contains('project-modal-backdrop')) {
      handleClose()
    }
  }
  
  const handleClose = () => {
    setIsClosing(true)
    onClose() // Remove setTimeout - call immediately
  }
  
  const handlePrevClick = () => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slidePrev()
    }
  }
  
  const handleNextClick = () => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slideNext()
    }
  }
  
  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleClose()
      }
    }
    
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])
  
  return (
    <div className={`project-modal-backdrop-container ${isClosing ? 'closing' : ''}`}>
      <motion.div 
        className="project-modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ 
          duration: 0.2,
          ease: "easeOut"
        }}
        onClick={handleBackdropClick}
      >
        <motion.div 
          className="project-modal glass"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ 
            type: "spring", 
            damping: 25, 
            stiffness: 400,
            duration: 0.2
          }}
        >
          <button className="modal-close-btn" onClick={handleClose}>
            <HiX />
          </button>
          
          <div className="modal-header">
            <h3>{project.title}</h3>
            <div className="modal-pagination">
              {currentIndex + 1} / {project.images.length}
            </div>
          </div>
          
          <div className="modal-body">
            <Swiper
              ref={swiperRef}
              modules={[Navigation, Pagination, Keyboard, Mousewheel]}
              spaceBetween={20}
              slidesPerView={1}
              navigation={false}
              pagination={{ 
                clickable: true,
                el: '.modal-swiper-pagination',
                type: 'bullets',
                bulletClass: 'modal-bullet',
                bulletActiveClass: 'modal-bullet-active'
              }}
              keyboard={{ enabled: true }}
              mousewheel={false}
              className="modal-swiper"
              onSlideChange={handleSlideChange}
              grabCursor={false}
              centeredSlides={true}
              loop={false}
              allowTouchMove={true}
              speed={300}
            >
              {project.images.map((image, index) => (
                <SwiperSlide key={index} className="modal-slide">
                  <div className={`modal-image-container ${!imagesLoaded[index] ? 'image-loading' : ''}`}>
                    {!imagesLoaded[index] && <div className="image-placeholder-loader"></div>}
                    <img 
                      src={image} 
                      alt={`${project.title} - Image ${index + 1}`} 
                      className={`modal-image ${imagesLoaded[index] ? 'image-loaded' : ''}`}
                      onLoad={() => handleImageLoad(index)}
                      onError={() => handleImageLoad(index)}
                    />
                    {project.imageDescriptions && project.imageDescriptions[index] && (
                      <div className="modal-image-description-overlay">
                        <p>{project.imageDescriptions[index]}</p>
                      </div>
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            
            <div className="modal-swiper-navigation">
              <button 
                className="custom-nav-button nav-prev" 
                onClick={handlePrevClick}
                disabled={currentIndex === 0}
                aria-label="Previous image"
              >
                <HiChevronLeft />
              </button>
              
              <div className="modal-swiper-pagination"></div>
              
              <button 
                className="custom-nav-button nav-next" 
                onClick={handleNextClick}
                disabled={currentIndex === project.images.length - 1}
                aria-label="Next image"
              >
                <HiChevronRight />
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default ProjectImageModal
