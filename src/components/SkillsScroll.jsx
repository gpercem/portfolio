import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import './SkillsScroll.css';
import { 
  ReactOriginal, 
  NodejsPlain, 
  JavascriptOriginal,
  Css3Original,
  PythonOriginal,
  GitPlain,
  PostgresqlPlain,
  UnityOriginal,
  GodotOriginal,
} from 'devicons-react';
import { RiReactjsLine } from 'react-icons/ri';

const SkillsScroll = ({ skills = [] }) => {
  const [isMobile, setIsMobile] = useState(false);

  // Check if the screen is mobile size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Helper function to get the appropriate icon for each skill
  const getSkillIcon = (skill) => {
    switch (skill.toLowerCase()) {
      case 'react':
        return <ReactOriginal className="skill-icon-svg" />;
      case 'node.js':
        return <NodejsPlain className="skill-icon-svg" />;
      case 'javascript':
        return <JavascriptOriginal className="skill-icon-svg" />;
      case 'css':
        return <Css3Original  className="skill-icon-svg" />;
      case 'python':
        return <PythonOriginal className="skill-icon-svg" />;
      case 'postgres':
        return <PostgresqlPlain className="skill-icon-svg" />;
      case 'git':
        return <GitPlain className="skill-icon-svg" />;
      case 'react native':
        return <RiReactjsLine className="skill-icon-svg" />;
      case 'unity':
        return <UnityOriginal className="skill-icon-svg" />;
      case 'godot':
        return <GodotOriginal className="skill-icon-svg" />;
      default:
        return null;
    }
  };

  // Render badges (used in both desktop and mobile views)
  const renderSkillBadge = (skill, index) => (
    <span key={`skill-${index}`} className="skill-badge">
      {getSkillIcon(skill)}
      <span>{skill}</span>
    </span>
  );

  // Duplicate skills for better looping
  const duplicatedSkills = [...skills, ...skills, ...skills];

  // Desktop view - static grid
  if (!isMobile) {
    return (
      <div className="skills-container">
        <div className="skills-grid">
          {skills.map((skill, index) => renderSkillBadge(skill, index))}
        </div>
      </div>
    );
  }

  // Mobile view - swiper carousel
  return (
    <div className="skills-container">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={10}
        slidesPerView={'auto'}
        loop={true}
        loopAdditionalSlides={duplicatedSkills.length}
        allowTouchMove={false} // Disable user swiping
        autoplay={{
          delay: 0, // Start immediately
          disableOnInteraction: false,
          pauseOnMouseEnter: false, // Don't pause on hover
          reverseDirection: false,
        }}
        speed={2000} // Much slower for smoother motion
        className="skills-swiper"
      >
        {duplicatedSkills.map((skill, index) => (
          <SwiperSlide key={`skill-slide-${index}`} className="skill-slide">
            {renderSkillBadge(skill, index)}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SkillsScroll;
