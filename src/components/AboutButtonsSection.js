import React from 'react';
import WorksButton from './WorksButton';
import './AboutButtonsSection.css';

const AboutButtonsSection = () => {
  return (
    <section className="about-buttons-section">
      <WorksButton type="design">MY DESIGNS</WorksButton>
      <WorksButton type="image">MY GAMES</WorksButton>
      <WorksButton>MY PROJECTS</WorksButton>
      <WorksButton>MY APPS</WorksButton>
    </section>
  );
};

export default AboutButtonsSection;
