import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageWrapper = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Use 'auto' — 'instant' is not supported in all browsers and can throw / noop oddly
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])

  return (
    <div>
      {children}
    </div>
  );
};

export default PageWrapper;
