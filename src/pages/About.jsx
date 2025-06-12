import './About.css'
import SkillsScroll from '../components/SkillsScroll'
import { HiOutlineGlobeAlt, HiMail, HiOutlineDocumentText, HiCode } from 'react-icons/hi'

const About = () => {
  // Define skills for the animation
  const skills = ['React', 'Node.js', 'TypeScript', 'CSS', 'Python', 'MongoDB', 'Git', 'AWS', 'Docker', 'React Native', 'GraphQL', 'Redux'];

  return (
    <div className="about-page">
      <div className="about-container">
        <div className="grid">
          {/* Item 0: About Me */}
          <div className="item item-0 glass">
            <h2>About Me</h2>
            <p>
              I am a full-stack developer passionate about building beautiful, functional, and user-friendly applications. I thrive on learning modern web technologies and creatively solving problems. My journey in software development is driven by a desire to create impactful digital experiences.
            </p>
          </div>

          {/* Item 1: My Skills */}
          <div className="item item-1 glass">
            <h2>My Skills</h2>
            <div className="skills-container">
              <SkillsScroll skills={skills} />
            </div>
          </div>

          {/* Social Media Grid (Items 2-5) */}
          <div className="social-grid-wrapper">
            {/* Item 2: GitHub */}
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="item item-2 glass social-item">
              <HiCode className="social-icon" />
              <span className="social-label">GitHub</span>
            </a>

            {/* Item 3: Portfolio/Website */}
            <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer" className="item item-3 glass social-item">
              <HiOutlineGlobeAlt className="social-icon" />
              <span className="social-label">Website</span>
            </a>

            {/* Item 4: Email */}
            <a href="mailto:your.email@example.com" className="item item-4 glass social-item">
              <HiMail className="social-icon" />
              <span className="social-label">Email</span>
            </a>

            {/* Item 5: Resume/CV */}
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="item item-5 glass social-item">
              <HiOutlineDocumentText className="social-icon" />
              <span className="social-label">Resume</span>
            </a>
          </div>

          {/* Item 6: Education */}
          <div className="item item-6 glass">
            <h2>Education</h2>
            <div className="education-container">
              <div className="education-item">
                <div className="education-header">
                  <h3>Computer Science Degree</h3>
                  <span className="education-year">2018-2022</span>
                </div>
                <p>University of Technology</p>
                <p className="education-description">Studied advanced algorithms, software design patterns, and modern web development.</p>
              </div>
            </div>
          </div>

          {/* Item 7: Sample */}
          <div className="item item-7 glass">
            <h2>Experience</h2>
            <p>Details about my professional experience and work history.</p>
          </div>

          {/* Item 8: Sample */}
          <div className="item item-8 glass">
            <h2>Projects</h2>
            <p>Highlights of key projects I've worked on, including personal and professional work.</p>
          </div>

          {/* Item 9: Sample */}
          <div className="item item-9 glass">
            <h2>Technologies</h2>
            <p>Specialized technologies and tools I work with on a regular basis.</p>
          </div>

          {/* Item 10: Sample */}
          <div className="item item-10 glass">
            <h2>Interests</h2>
            <p>My personal interests and hobbies outside of development.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
