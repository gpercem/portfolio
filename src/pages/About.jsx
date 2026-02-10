import './About.css'
import SkillsScroll from '../components/SkillsScroll'
import ProgramsCarousel from '../components/IconsCarousel'
import { SiGithub, SiInstagram, SiItchdotio, SiLinkedin } from 'react-icons/si'
import { SiReact, SiNextdotjs, SiTailwindcss } from 'react-icons/si'
import { HiEye, HiDocumentDownload } from 'react-icons/hi'
import { HiArrowUpRight } from 'react-icons/hi2'
import { Link } from 'react-router'
import GlassButton from '../components/GlassButton'

const About = () => {
  // Define skills for the animation
  const skills = ['C', 'C#', 'JavaScript', 'Python', 'React', 'React Native', 'Postgres', 'Unity', 'Godot'];
  
  // Define programs for the animation
  const programs = ['Photoshop', 'Illustrator', 'Unity', 'Blender', 'Godot', 'Fusion360'];

  // Define tech badges with their icons
  const techBadges = [
    { name: 'Next.JS', icon: <SiNextdotjs className="tech-icon-svg" style={{ color: '#000000' }} /> },
    { name: 'React', icon: <SiReact className="tech-icon-svg" style={{ color: '#61DAFB' }} /> },
    { name: 'Tailwind', icon: <SiTailwindcss className="tech-icon-svg" style={{ color: '#38B2AC' }} /> }
  ];

  return (
    <div className="about-page">
      <div className="about-container">
        <div className="grid">
          {/* Item 0: About Me */}
          <div className="item item-0 glass">
            <div className="profile-container">
              <div className="profile-photo-wrapper">
                <div className="profile-photo-border"></div>
                <img src="/images/about/profile-photo.jpg" alt="Gokhan Percem" className="profile-photo" />
              </div>
              <div className="profile-info">
                <h1 className="profile-name">Gokhan Percem</h1>
                <div className="profile-title">Full Stack & Game Developer</div>
                <p className="profile-about">
                  Creative developer that &lt;3's game design and web technologies. 
                </p>
                <div className="profile-actions">
                  <GlassButton to="/projects" variant="primary" className="profile-button">
                    <HiEye />
                    <span>View Work</span>
                  </GlassButton>
                  <GlassButton href="/files/cv-2026-02.pdf" download variant="secondary" className="profile-button">
                    <HiDocumentDownload />
                    <span>Download CV</span>
                  </GlassButton>
                </div>
              </div>
            </div>
          </div>

          {/* Item 1: My Skills */}
          <div className="item item-1 glass">
            <h2>Skills</h2>
            <div className="skills-container">
              <SkillsScroll skills={skills} />
            </div>
          </div>

          {/* Social Media Grid */}
          <div className="social-grid-wrapper">
            <a href="https://github.com/gpercem" target="_blank" rel="noopener noreferrer" className="item item-2 glass social-item">
              <SiGithub className="social-icon" />
            </a>

            <a href="https://linkedin.com/in/gokhanpercem" target="_blank" rel="noopener noreferrer" className="item item-3 glass social-item">
              <SiLinkedin className="social-icon" />
            </a>

            <a href="https://instagram.com/gokhanpercem" target="_blank" rel="noopener noreferrer" className="item item-4 glass social-item">
              <SiInstagram className="social-icon" />
            </a>

            <a href="https://gokomon.itch.io" target="_blank" rel="noopener noreferrer" className="item item-5 glass social-item">
              <SiItchdotio className="social-icon" />
            </a>
          </div>

          {/* Item 6: Education */}
          <div className="item item-6 glass">
            <h2>Education</h2>
            <div className="education-container">
              <div className="education-item">
                <div className="education-content">
                  <div className="education-header">
                    <h3>Kocaeli University</h3>
                    <span className="education-year">2024 - Present</span>
                  </div>
                  <h4 className="education-degree">Software Engineering</h4>
                  <p className="education-description">Studied software development, algorithms, and modern web technologies. Developing skills through projects.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Item 7: Programs */}
          <div className="item item-7 glass">
            <h2>Programs</h2>
            <ProgramsCarousel programs={programs} />
          </div>

          {/* Item 8: Projects */}
          <Link to="/projects" className="item item-8 glass contact-link">
            <h2>Projects</h2>
            <p>Highlights of projects I've worked on, including personal and professional work.</p>
            <div className="corner-link-circle">
              <HiArrowUpRight className="corner-link-icon" />
            </div>
          </Link>

          {/* Item 9: Tech */}
          <div className="item item-9 glass">
            <h2>Tech</h2>
            <ul className="tech-list">
              {techBadges.map((tech, index) => (
                <li key={`tech-${index}`} className="tech-item">
                  <span className="tech-icon">{tech.icon}</span>
                  <span className="tech-name">{tech.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Item 10: Contact Me Link */}
          <Link to="/contact" className="item item-10 glass contact-link">
            <h2>Contact Me</h2>
            <p>Want to work together?<br/>Feel free to reach out.</p>
            <div className="corner-link-circle">
              <HiArrowUpRight className="corner-link-icon" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
