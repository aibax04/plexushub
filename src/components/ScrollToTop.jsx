import React, { useState, useEffect } from 'react'
import { ChevronUp } from 'lucide-react'

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    let ticking = false;

    const toggleVisibility = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsVisible(window.scrollY > 500);
          ticking = false;
        });
        ticking = true;
      }
    };

    const handleMenuToggle = (e) => {
      setIsMenuOpen(e.detail.isOpen);
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    window.addEventListener('mobileMenuToggle', handleMenuToggle);
    // Run once on load
    toggleVisibility();

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      window.removeEventListener('mobileMenuToggle', handleMenuToggle);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-[1001]">
      <button
        type="button"
        onClick={scrollToTop}
        className={`p-2.5 sm:p-3 rounded-full bg-primary text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-primary/25 active:scale-95 ${
          isVisible && !isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
    </div>
  )
}

export default ScrollToTop
