import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToHash = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // Wait a bit for page load/animations
        setTimeout(() => {
          element.scrollIntoView({
            behavior: 'smooth'
          });
        }, 150);
      }
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToHash;
