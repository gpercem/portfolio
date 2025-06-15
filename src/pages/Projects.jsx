import { useState, useRef, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Keyboard, Mousewheel } from 'swiper/modules'
import { HiExternalLink, HiCode, HiChevronLeft, HiChevronRight, HiEye, HiPhotograph, HiPlay } from 'react-icons/hi'
import { motion, AnimatePresence } from 'framer-motion'
import GlassButton from '../components/GlassButton'
import ProjectImageModal from '../components/ProjectImageModal'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './Projects.css'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [imagesLoaded, setImagesLoaded] = useState({})
  const [activeIndex, setActiveIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)
  const swiperRef = useRef(null)
  
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkIfMobile()
    window.addEventListener('resize', checkIfMobile)
    return () => window.removeEventListener('resize', checkIfMobile)
  }, [])

  useEffect(() => {
    setCurrentPage(1)
  }, [activeFilter])

  useEffect(() => {
    if (isMobile) {
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isMobile])
  
  const projects = [
    {
      id: 1,
      title: "Personal Portfolio",
      description: "A modern, responsive, made-from-scratch portfolio site with a glassmorphism design.",
      thumbnail: "/images/projects/portfolio_mockup.jpg",
      images: [
        "/images/projects/portfolio.jpg"
      ],
      imageDescriptions: [
        "Full homepage view showcasing the glassmorphism design with an animated background and responsive layout."
      ],
      tags: ["react", "css", "framer-motion"],
      liveUrl: "https://gokhanpercem.com",
      liveText: "Visit Site",
      liveIcon: HiExternalLink,
      codeUrl: "https://github.com/gpercem/portfolio",
      codeText: "View Code",
      codeIcon: HiCode,
      type: "apps"
    },
    {
      id: 5,
      title: "Apeiron Rocketry Brand Design",
      description: "Visual identity, including logo, color palette, and typography, for a rocketry team.",
      thumbnail: "/images/projects/apeiron_logo_dark.jpg",
      images: [
        "/images/projects/apeiron_logo_dark.jpg",
        "/images/projects/apeiron_logo_light.jpg",
      ],
      imageDescriptions: [
        "Dark theme logo design featuring the Apeiron wordmark with a rocket and Turkish mythological dragon Bukrek-inspired typography and color scheme.",
        "Light theme variation of the logo, maintaining brand consistency across different backgrounds."
      ],
      tags: ["branding", "illustrator", "design"],
      liveUrl: "https://www.instagram.com/apeironrocketry/",
      liveText: "View Brand",
      liveIcon: HiPhotograph,
      type: "designs"
    },
    {
      id: 7,
      title: "Apeiron T-shirt & Hoodie Design",
      description: "A T-shirt and hoodie design for the Apeiron rocketry team, featuring the mascot 'BUKREK'.",
      thumbnail: "/images/projects/apeiron_tshirt.jpg",
      images: [
        "/images/projects/apeiron_tshirt.jpg",
        "/images/projects/apeiron_tshirt_zoomed.jpg",
        "/images/projects/apeiron_tshirt_zoomed_2.jpg"
      ],
      imageDescriptions: [
        "Showcase of both the T-shirt and hoodie designs featuring the bold BUKREK mascot.",
        "Close-up of the hoodie that highlights intricate design details of the BUKREK mascot.",
        "Close-up of the T-shirt design emphasizing a modern, graphic take on the APEIRON logo."
      ],
      tags: ["fashion", "illustrator", "design"],
      liveUrl: "https://www.instagram.com/stories/highlights/17978698895031935/",
      liveText: "View Gallery",
      liveIcon: HiPhotograph,
      type: "designs"
    },
  ]
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.type === activeFilter)
  
  const openModal = (project) => {
    setSelectedProject(project)
    setModalOpen(true)
  }
  
  const closeModal = () => {
    setModalOpen(false)
    setSelectedProject(null) // Remove setTimeout - clear immediately
  }
  
  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex)
  }

  const getProjectsPerPage = () => {
    if (window.innerWidth <= 768) return 1
    if (window.innerWidth <= 992) return 2
    return 3
  }

  const totalPages = Math.ceil(filteredProjects.length / getProjectsPerPage())
  
  const getCurrentPageProjects = () => {
    const projectsPerPage = getProjectsPerPage()
    const startIndex = (currentPage - 1) * projectsPerPage
    return filteredProjects.slice(startIndex, startIndex + projectsPerPage)
  }

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  }
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  }

  return (
    <div className="projects-page page">
      <motion.div 
        className={`projects-content glass ${isMobile ? 'mobile-view' : ''}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          My Projects
        </motion.h1>
        
        {/* Keep filter buttons without animations as requested */}
        <div className="projects-filters">
          <button 
            className={`filter-button ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All
          </button>
          <button 
            className={`filter-button ${activeFilter === 'designs' ? 'active' : ''}`}
            onClick={() => setActiveFilter('designs')}
          >
            Designs
          </button>
          <button 
            className={`filter-button ${activeFilter === 'apps' ? 'active' : ''}`}
            onClick={() => setActiveFilter('apps')}
          >
            Apps
          </button>
          <button 
            className={`filter-button ${activeFilter === 'games' ? 'active' : ''}`}
            onClick={() => setActiveFilter('games')}
          >
            Games
          </button>
        </div>
        
        {isMobile ? (
          // Revert to regular div for mobile view
          <div className="projects-container">
            <div className="story-progress-container fixed">
              {filteredProjects.map((_, i) => (
                <div 
                  key={i} 
                  className={`story-progress-dot ${i < activeIndex ? 'completed' : i === activeIndex ? 'active' : ''}`}
                  onClick={() => swiperRef.current?.swiper.slideTo(i)}
                ></div>
              ))}
            </div>
            
            <div className="swipe-indicator">
              <HiChevronLeft className="swipe-arrow left" />
              <span>Swipe</span>
              <HiChevronRight className="swipe-arrow right" />
            </div>
            
            <Swiper
              ref={swiperRef}
              modules={[Navigation, Pagination, Keyboard, Mousewheel]}
              spaceBetween={10}
              slidesPerView={1}
              navigation={false}
              pagination={{ clickable: true, type: 'bullets' }}
              keyboard={{ enabled: true }}
              className="projects-swiper story-swiper"
              onSlideChange={handleSlideChange}
              grabCursor={false}
              touchEventsTarget="container"
              threshold={5}
              touchRatio={1}
              resistanceRatio={0}
              speed={300}
              preloadImages={false}
            >
              {filteredProjects.map((project, index) => (
                <SwiperSlide key={project.id}>
                  {({ isActive }) => (
                    (isActive || Math.abs(activeIndex - index) <= 1) && (
                      <ProjectCard 
                        project={project} 
                        onImageLoad={(loaded) => {
                          setImagesLoaded(prev => ({...prev, [project.id]: loaded}))
                        }}
                        isLoaded={imagesLoaded[project.id]}
                        isMobile={isMobile}
                        openModal={() => openModal(project)}
                      />
                    )
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : (
          <div className="projects-grid-container">
            {filteredProjects.length > 0 ? (
              <>
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={activeFilter + currentPage}
                    className="projects-grid"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit={{ opacity: 0, y: 10 }}
                  >
                    {getCurrentPageProjects().map((project) => (
                      <motion.div 
                        className="project-grid-item" 
                        key={project.id}
                        variants={itemVariants}
                      >
                        <AnimatedProjectCard
                          project={project}
                          onImageLoad={(loaded) => {
                            setImagesLoaded(prev => ({...prev, [project.id]: loaded}))
                          }}
                          isLoaded={imagesLoaded[project.id]}
                          isMobile={false}
                          openModal={() => openModal(project)}
                        />
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
                
                {totalPages > 1 && (
                  <motion.div 
                    className="pagination-controls"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <motion.button 
                      className={`pagination-button prev ${currentPage === 1 ? 'disabled' : ''}`}
                      onClick={goToPrevPage}
                      disabled={currentPage === 1}
                      aria-label="Previous page"
                      whileHover={currentPage !== 1 ? { scale: 1.1 } : {}}
                      whileTap={currentPage !== 1 ? { scale: 0.9 } : {}}
                    >
                      <HiChevronLeft />
                    </motion.button>
                    
                    <div className="pagination-numbers">
                      {Array.from({ length: totalPages }).map((_, index) => (
                        <motion.button
                          key={index}
                          className={`pagination-number ${currentPage === index + 1 ? 'active' : ''}`}
                          onClick={() => goToPage(index + 1)}
                          aria-label={`Page ${index + 1}`}
                          whileHover={currentPage !== index + 1 ? { scale: 1.1 } : {}}
                          whileTap={{ scale: 0.9 }}
                          animate={currentPage === index + 1 ? { scale: 1.1 } : { scale: 1 }}
                          transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        >
                          {index + 1}
                        </motion.button>
                      ))}
                    </div>
                    
                    <motion.button 
                      className={`pagination-button next ${currentPage === totalPages ? 'disabled' : ''}`}
                      onClick={goToNextPage}
                      disabled={currentPage === totalPages}
                      aria-label="Next page"
                      whileHover={currentPage !== totalPages ? { scale: 1.1 } : {}}
                      whileTap={currentPage !== totalPages ? { scale: 0.9 } : {}}
                    >
                      <HiChevronRight />
                    </motion.button>
                  </motion.div>
                )}
              </>
            ) : (
              <motion.div 
                className="no-projects"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <p>No projects found for this filter.</p>
              </motion.div>
            )}
          </div>
        )}
      </motion.div>
      
      {/* Project Images Modal */}
      <AnimatePresence>
        {modalOpen && selectedProject && (
          <ProjectImageModal 
            project={selectedProject} 
            onClose={closeModal}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

// Animated version of the project card component - used for desktop only
const AnimatedProjectCard = ({ project, onImageLoad, isLoaded, isMobile, openModal }) => {
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
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={!isMobile ? { y: -5, boxShadow: "0 10px 30px var(--shadow)" } : {}}
      onClick={() => openModal && openModal(project)}
    >
      <div 
        className={`project-image-container ${!isLoaded ? 'image-loading' : ''}`}
      >
        {!isLoaded && !imageError && <div className="image-placeholder-loader"></div>}
        <motion.img 
          ref={imageRef}
          src={project.thumbnail || project.images[0]} 
          alt={project.title} 
          className={`project-image ${isLoaded ? 'image-loaded' : ''}`}
          onLoad={handleImageLoad}
          onError={handleImageError}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
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
              whileHover={{ scale: 1.1 }}
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
const ProjectCard = ({ project, onImageLoad, isLoaded, isMobile, openModal }) => {
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

export default Projects
