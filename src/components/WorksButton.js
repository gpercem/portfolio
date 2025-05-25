import React, { useState, useEffect } from 'react';
import './WorksButton.css';

// Assuming PNG images, adjust extension if different (e.g., .jpg, .gif)
import gameButtonFrame1 from '../assets/images/game-button-1.png';
import gameButtonFrame2 from '../assets/images/game-button-2.png';
import gameButtonFrame3 from '../assets/images/game-button-3.png';

const imageAnimationFrames = [gameButtonFrame1, gameButtonFrame2, gameButtonFrame3];

const WorksButton = ({ children, onClick, type = 'text' }) => {
  const [currentFrame, setCurrentFrame] = useState(0);

  useEffect(() => {
    let intervalId;
    if (type === 'image') {
      intervalId = setInterval(() => {
        setCurrentFrame(prevFrame => (prevFrame + 1) % imageAnimationFrames.length);
      }, 500);
    }
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [type]); // Effect depends on type

  return (
    <div className={`works-button-wrapper ${type === 'image' ? 'image-type-wrapper' : ''}`}>
      {type === 'image' ? (
        <div
          className="works-button-image-inner" // Moved from img to this div
          onClick={onClick} // Moved from img to this div
        >
          <img
            src={imageAnimationFrames[currentFrame]}
            alt="Animated Game Button"
            className="works-button-image-content" // New class for the img itself
          />
        </div>
      ) : (
        <button className="works-button-inner" onClick={onClick}>
          {children}
        </button>
      )}
    </div>
  );
};

export default WorksButton;
