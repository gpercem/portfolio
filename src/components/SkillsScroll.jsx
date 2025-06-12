import './SkillsScroll.css';

const SkillsScroll = ({ skills = [] }) => {
  // Create three copies of the skills array to ensure enough content for scrolling
  const displaySkills = [...skills, ...skills, ...skills];
  
  return (
    <div className="skills-scroll-wrapper">
      <div className="skills-scroll-container">
        <div className="skills-track">
          {displaySkills.map((skill, index) => (
            <span key={`skill-${index}`} className="skill-item">{skill}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsScroll;
