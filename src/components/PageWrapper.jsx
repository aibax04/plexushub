import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageWrapper = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top instantly on navigation
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  }, [pathname]);

  return (
    <div>
      {children}
    </div>
  );
};

export default PageWrapper;
