import { useState, useRef, useEffect, lazy, Suspense } from 'react'
import { HiExternalLink, HiCode, HiChevronLeft, HiChevronRight, HiPhotograph, HiOutlineDocument } from 'react-icons/hi'
import { motion, AnimatePresence } from 'framer-motion'
import GlassButton from '../components/GlassButton'
import ProjectImageModal from '../components/ProjectImageModal'
import { AnimatedProjectCard } from '../components/ProjectCards'
import LoadingSpinner from '../components/LoadingSpinner'
import './Projects.css'

// Lazy load Swiper components
const SwiperComponents = lazy(() => import('../components/SwiperComponents'))

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
      id: 4,
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
      id: 2,
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
      id: 3,
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
    {
      id: 1,
      title: "Teknofest 2nd Place Project",
      description: "2nd place awarded project. An education material for chemistry class used to teach atoms and molecules.",
      thumbnail: "/images/projects/teknofest_project_thumbnail.jpg",
      images: [
        "/images/projects/teknofest_0.jpg",
        "/images/projects/teknofest_1.jpg",
        "/images/projects/teknofest_2.jpg",
        "/images/projects/teknofest_3.jpg",
      ],
      tags: ["arduino", "unity", "c#"],
      liveUrl: "https://www.teknofest.org/tr/yarismalar/competition_report_detail/3590",
      liveText: "Teknofest Page",
      liveIcon: HiExternalLink,
      codeUrl: "https://drive.google.com/file/d/1FRYPgXweHX6kAWjOBXmEKA9tXk1a-6l3/view?usp=sharing",
      codeText: "Information",
      codeIcon: HiOutlineDocument,
      type: "apps"
    },
    {
      id: 5,
      title: "Peynir Faresi Game",
      description: "1st place award winner game for Hacettepe University Game Jam. A 2D puzzle game made with Godot.",
      thumbnail: "/images/projects/peynir_faresi_0.jpg",
      images: [
        "/images/projects/peynir_faresi_1.jpg",
        "/images/projects/peynir_faresi_2.jpg",
      ],
      imageDescriptions: [
        "First level of the game, you control a mouse to collect cheese while trying to come up with the best evolution pattern.",
        
      ],
      tags: ["godot", "gamejam", "gscript"],
      liveUrl: "https://eneskp3441.itch.io/peynir-faresi",
      liveText: "Play Game",
      liveIcon: HiExternalLink,
      type: "games"
    },
    {
      id: 6,
      title: "Swarmageddon Game",
      description: "1st place award winner game for Aydın University Game Jam. A 3D strategy and thriller game made with Unity.",
      thumbnail: "/images/projects/swarmageddon_0.jpg",
      images: [
        "/images/projects/swarmageddon_1.jpg",
        "/images/projects/swarmageddon_2.jpg",
        "/images/projects/swarmageddon_3.jpg"
      ],
      imageDescriptions: [
      ],
      tags: ["unity", "gamejam", "c#"],
      liveUrl: "https://gokomon.itch.io/swarmageddon",
      liveText: "Play Game",
      liveIcon: HiExternalLink,
      type: "games"

    }

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
    if (window.innerWidth <= 992) return 1
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
            
            <Suspense fallback={<LoadingSpinner />}>
              <SwiperComponents
                swiperRef={swiperRef}
                filteredProjects={filteredProjects}
                activeIndex={activeIndex}
                handleSlideChange={handleSlideChange}
                imagesLoaded={imagesLoaded}
                setImagesLoaded={setImagesLoaded}
                openModal={openModal}
              />
            </Suspense>
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

export default Projects
