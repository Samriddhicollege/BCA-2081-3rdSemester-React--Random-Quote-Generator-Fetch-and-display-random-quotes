import React from 'react';

const Button = ({ children, onClick, variant = 'primary', className = '', type = 'button' }) => {
  return (
    <button 
      type={type}
      className={`custom-btn btn-${variant} ${className}`} 
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
