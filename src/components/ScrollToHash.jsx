import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToHash = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) return undefined
    const id = hash.replace('#', '')
    let cancelled = false
    const t = window.setTimeout(() => {
      if (cancelled) return
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'auto', block: 'start' })
      }
    }, 100)
    return () => {
      cancelled = true
      window.clearTimeout(t)
    }
  }, [pathname, hash])

  return null;
};

export default ScrollToHash;
