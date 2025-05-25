import React, { useEffect, useRef } from 'react';
import './GlowingButton.css';

const GlowingButton = ({ 
  children, 
  borderRadius = 0, 
  primaryColor = '#294932', // Border/glow color
  secondaryColor = 'var(--color-accent-yellow)', // Between-border-button color
  buttonColor = 'var(--color-primary-green)' // Button fill color
}) => {
  const wrapperRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const button = buttonRef.current;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = window.innerWidth / 2;
    let currentY = window.innerHeight / 2;
    let currentOpacity = 0;
    let targetOpacity = 0;
    const lerpFactor = 0.08;

    const handleMouseMove = (event) => {
      targetX = event.clientX;
      targetY = event.clientY;
      targetOpacity = 1;
    };

    document.addEventListener('mousemove', handleMouseMove);

    function lerp(start, end, factor) {
      return start + (end - start) * factor;
    }

    function animateGlow() {
      currentX = lerp(currentX, targetX, lerpFactor);
      currentY = lerp(currentY, targetY, lerpFactor);
      currentOpacity = lerp(currentOpacity, targetOpacity, lerpFactor);

      if (wrapper && button) {
        const wrapperRect = wrapper.getBoundingClientRect();
        const buttonRect = button.getBoundingClientRect();

        const wrapperX = currentX - wrapperRect.left;
        const wrapperY = currentY - wrapperRect.top;
        const btnX = currentX - buttonRect.left;
        const btnY = currentY - buttonRect.top;

        wrapper.style.setProperty('--mouse-x', `${wrapperX}px`);
        wrapper.style.setProperty('--mouse-y', `${wrapperY}px`);
        wrapper.style.setProperty('--opacity', `${currentOpacity}`);

        button.style.setProperty('--btn-mouse-x', `${btnX}px`);
        button.style.setProperty('--btn-mouse-y', `${btnY}px`);
      }

      requestAnimationFrame(animateGlow);
    }

    // Set initial state
    if (wrapper && button) {
      const initialWrapperRect = wrapper.getBoundingClientRect();
      const initialButtonRect = button.getBoundingClientRect();
      wrapper.style.setProperty('--mouse-x', `${initialWrapperRect.width / 2}px`);
      wrapper.style.setProperty('--mouse-y', `${initialWrapperRect.height / 2}px`);
      wrapper.style.setProperty('--opacity', `0`);
      button.style.setProperty('--btn-mouse-x', `${initialButtonRect.width / 2}px`);
      button.style.setProperty('--btn-mouse-y', `${initialButtonRect.height / 2}px`);
    }

    animateGlow();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Convert primaryColor to RGB for the gradient
  const getRgbValues = (hex) => {
    // Remove # if present
    hex = hex.replace('#', '');
    
    // Convert 3-digit hex to 6-digit
    if (hex.length === 3) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    
    return `${r}, ${g}, ${b}`;
  };

  // Prepare CSS variables
  const cssVars = {
    '--border-radius': typeof borderRadius === 'number' ? `${borderRadius}px` : borderRadius,
    '--primary-color': primaryColor,
    '--primary-color-rgb': getRgbValues(primaryColor),
    '--secondary-color': secondaryColor,
    '--button-color': buttonColor
  };

  return (
    <div
      className="glow-button-wrapper"
      ref={wrapperRef}
      style={{ ...cssVars, backgroundColor: 'transparent' }}
    >
      <div className="glow-gap-filler">
        <button ref={buttonRef}>{children}</button>
      </div>
    </div>
  );
};

export default GlowingButton;
