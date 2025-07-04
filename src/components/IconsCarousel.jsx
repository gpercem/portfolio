import './IconsCarousel.css';
import { SiBlender, SiAdobephotoshop, SiAdobeillustrator, SiUnity, SiGodotengine, SiAutodesk, SiFigma } from 'react-icons/si';

const ProgramsCarousel = ({ programs = [] }) => {
  // Create three copies of the programs array to ensure enough content for seamless scrolling
  const displayPrograms = [...programs, ...programs, ...programs];

  // Map programs to their corresponding icons
  const getProgram = (program) => {
    switch (program.toLowerCase()) {
      case 'photoshop':
        return <SiAdobephotoshop className="program-icon-svg" style={{ color: '#31A8FF' }} />;
      case 'illustrator':
        return <SiAdobeillustrator className="program-icon-svg" style={{ color: '#FF9A00' }} />;
      case 'figma':
        return <SiFigma className="program-icon-svg" style={{ color: '#F24E1E' }} />;
      case 'unity':
        return <SiUnity className="program-icon-svg" style={{ color: '#FFFFFF' }} />;
      case 'blender':
        return <SiBlender className="program-icon-svg" style={{ color: '#F5792A' }} />;
      case 'godot':
        return <SiGodotengine className="program-icon-svg" style={{ color: '#478CBF' }} />;
      case 'fusion360':
        return <SiAutodesk className="program-icon-svg" style={{ color: '#0696D7' }} />;
    }
  };

  return (
    <div className="programs-carousel">
      <div className="carousel-container">
        <div className="carousel-track">
          {displayPrograms.map((program, index) => (
            <div key={`program-${index}`} className="carousel-item">
              <span className="program-icon">{getProgram(program)}</span>
              <span className="program-name">{program}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgramsCarousel;
