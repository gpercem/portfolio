import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import './SkillsScroll.css';
import { 
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiCss3,
  SiPython,
  SiGit,
  SiUnity,
  SiPostgresql,
  SiGodotengine,
} from 'react-icons/si';

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
        return <SiReact className="skill-icon-svg" style={{ color: '#61DAFB' }} />;
      case 'node.js':
        return <SiNodedotjs className="skill-icon-svg" style={{ color: '#339933' }} />;
      case 'javascript':
        return <SiJavascript className="skill-icon-svg" style={{ color: '#F7DF1E' }} />;
      case 'css':
        return <SiCss3 className="skill-icon-svg" style={{ color: '#1572B6' }} />;
      case 'python':
        return <SiPython className="skill-icon-svg" style={{ color: '#3776AB' }} />;
      case 'postgres':
        return <SiPostgresql className="skill-icon-svg" style={{ color: '#336791' }} />;
      case 'git':
        return <SiGit className="skill-icon-svg" style={{ color: '#F05032' }} />;
      case 'react native':
        return <SiReact className="skill-icon-svg" style={{ color: '#61DAFB' }} />;
      case 'unity':
        return <SiUnity className="skill-icon-svg" style={{ color: '#ffffff' }} />;
      case 'godot':
        return <SiGodotengine className="skill-icon-svg" style={{ color: '#478CBF' }} />;
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
