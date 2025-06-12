import { Link } from 'react-router';
import './GlassButton.css';

const GlassButton = ({ 
  children, 
  to, 
  href, 
  onClick, 
  className = '', 
  variant = 'primary',
  type = 'button',
  ...props 
}) => {
  const buttonClass = `glass-button glass-button-${variant} ${className}`;
  
  // Determine if it's an internal link, external link, or regular button
  if (to) {
    return (
      <Link to={to} className={buttonClass} {...props}>
        {children}
      </Link>
    );
  } else if (href) {
    return (
      <a 
        href={href}
        className={buttonClass}
        target="_blank" 
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    );
  }
  
  return (
    <button 
      type={type}
      className={buttonClass}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default GlassButton;
