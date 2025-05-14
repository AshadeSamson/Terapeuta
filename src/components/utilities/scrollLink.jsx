import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';

function ScrollLink ({ to, children, ...props }) {
  const linkRef = useRef();

  const handleClick = (e) => {
    e.preventDefault();
    const element = document.getElementById(to);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Link 
      to={`/#${to}`} 
      onClick={handleClick}
      ref={linkRef}
      {...props}
    >
      {children}
    </Link>
  );
};

export default ScrollLink;