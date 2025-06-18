import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Keyboard, Mousewheel } from 'swiper/modules'
import { ProjectCard } from './ProjectCards'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const SwiperComponents = ({ 
  swiperRef, 
  filteredProjects, 
  activeIndex, 
  handleSlideChange, 
  imagesLoaded, 
  setImagesLoaded, 
  openModal 
}) => {
  return (
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
                isMobile={true}
                openModal={() => openModal(project)}
              />
            )
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default SwiperComponents
