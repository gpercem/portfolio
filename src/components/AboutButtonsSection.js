import React from 'react';
import { useNavigate } from 'react-router';
import WorksButton from './WorksButton';
import './AboutButtonsSection.css';

const AboutButtonsSection = () => {
  const navigate = useNavigate();

  const handleNavigation = (category) => {
    if (category === 'designs') {
      navigate('/works');
    } else {
      navigate(`/works/${category}`);
    }
  };

  return (
    <section className="about-buttons-section">
      <WorksButton onClick={() => handleNavigation('designs')}>
        MY DESIGNS
      </WorksButton>
      <WorksButton
        type="image"
        onClick={() => handleNavigation('games')}
      >
        MY GAMES
      </WorksButton>
      <WorksButton onClick={() => handleNavigation('projects')}>
        MY PROJECTS
      </WorksButton>
      <WorksButton onClick={() => handleNavigation('apps')}>
        MY APPS
      </WorksButton>
    </section>
  );
};

export default AboutButtonsSection;
