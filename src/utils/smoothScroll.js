// Smooth scrolling for mouse wheel
export const initSmoothScroll = () => {
  // Current scroll position
  let currentY = window.scrollY;
  // Target scroll position
  let targetY = window.scrollY;
  // Speed factor (lower = smoother but slower)
  const ease = 0.1;
  
  // Animation active flag
  let animating = false;
  // Previous timestamp for throttling
  let previousTime = Date.now();

  // Function to update scroll position with easing
  const updateScroll = () => {
    // Calculate difference between current and target
    const diff = targetY - currentY;
    // Apply easing
    currentY += diff * ease;
    
    // Update scroll position
    window.scrollTo(0, currentY);
    
    // Continue animation if not close enough to target
    if (Math.abs(diff) > 0.5) {
      requestAnimationFrame(updateScroll);
    } else {
      animating = false;
      currentY = targetY;
    }
  };

  // Wheel event handler
  const wheelHandler = (e) => {
    // Throttle events
    const now = Date.now();
    if (now - previousTime < 16) return; // ~60fps
    previousTime = now;
    
    // Calculate new target position
    targetY = Math.max(0, Math.min(
      document.body.scrollHeight - window.innerHeight,
      targetY + e.deltaY
    ));
    
    // Prevent default scroll
    e.preventDefault();
    
    // Start animation if not already running
    if (!animating) {
      animating = true;
      requestAnimationFrame(updateScroll);
    }
  };

  // Add event listener with passive: false to allow preventDefault
  window.addEventListener('wheel', wheelHandler, { passive: false });
  
  // Return cleanup function
  return () => {
    window.removeEventListener('wheel', wheelHandler);
  };
};
