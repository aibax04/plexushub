import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  const toggleMenu = () => setIsOpen(!isOpen)

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Helper: scroll-anchors work on home, link navigates otherwise
  const NavAnchor = ({ to, children, className, onClick }) => {
    if (isHome) {
      return (
        <a href={to} className={className} onClick={onClick}>
          {children}
        </a>
      )
    }
    // If not on home, navigate to home with the hash
    return (
      <Link to={`/${to}`} className={className} onClick={onClick}>
        {children}
      </Link>
    )
  }

  return (
    <>
      <div className="fixed top-4 md:top-6 left-0 right-0 z-50 px-4 flex justify-center w-full">
        <header className={`w-full max-w-6xl backdrop-blur-md text-white rounded-full shadow-2xl border transition-all duration-500 ${
          isScrolled
            ? 'bg-[#2a2a2a]/98 border-white/15'
            : 'bg-[#4b4b4b]/95 border-white/10'
        }`}>
          <div className="px-6 md:px-8 h-[64px] flex items-center justify-between">
            
            <Link to="/" className="font-sans font-bold text-2xl tracking-tight transition-all duration-300 hover:scale-[1.02] active:scale-95 flex-shrink-0">
              plexus<span className="font-light">dental</span>
            </Link>
            
            <nav className="hidden lg:flex items-center justify-center gap-8 flex-1">
              <NavAnchor to="#features" className="relative text-[14px] font-medium text-white/70 hover:text-white transition-all duration-300 group pb-1">
                Why Us
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </NavAnchor>
              <Link to="/treatments" className={`relative text-[14px] font-medium transition-all duration-300 group pb-1 ${
                location.pathname === '/treatments' ? 'text-white' : 'text-white/70 hover:text-white'
              }`}>
                Treatments
                <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                  location.pathname === '/treatments' ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
              <NavAnchor to="#reviews" className="relative text-[14px] font-medium text-white/70 hover:text-white transition-all duration-300 group pb-1">
                Reviews
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </NavAnchor>
              <div className="w-px h-3 bg-white/10 mx-1"></div>
              <NavAnchor to="#how-it-works" className="relative text-[14px] font-medium text-white/70 hover:text-white transition-all duration-300 group pb-1">
                Patient Journey
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </NavAnchor>
              <Link to="/visit" className={`relative text-[14px] font-medium transition-all duration-300 group pb-1 ${
                location.pathname === '/visit' ? 'text-white' : 'text-white/70 hover:text-white'
              }`}>
                Visit Clinic
                <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                  location.pathname === '/visit' ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            </nav>
            
            <div className="hidden lg:flex items-center flex-shrink-0">
              <a href="#book" className="px-6 py-2.5 bg-primary text-white text-[14px] font-bold rounded-full hover:scale-105 hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-primary/40 active:scale-95">
                Book Visit
              </a>
            </div>

            {/* Mobile Menu Button - Show only below lg */}
            <div className="flex lg:hidden items-center gap-4">
              <a href="#book" className="px-5 py-2 bg-primary text-white text-[13px] font-bold rounded-full hover:scale-105 hover:bg-primary-dark transition-all duration-300 active:scale-95">
                Book
              </a>
              <button 
                onClick={toggleMenu} 
                className="text-white hover:text-primary transition-colors focus:outline-none p-1 transform transition-transform active:scale-90"
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </header>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-[#0a0a0a] z-40 transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-full opacity-0 invisible'
        }`}
      >
        <div className="pt-32 pb-8 px-8 h-full flex flex-col justify-between">
          <nav className="flex flex-col gap-8 text-2xl font-medium">
            <NavAnchor to="#features" onClick={toggleMenu} className="relative w-fit text-white hover:text-primary transition-all duration-300 group">
              Why Choose Us
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </NavAnchor>
            <Link to="/treatments" onClick={toggleMenu} className="relative w-fit text-white hover:text-primary transition-all duration-300 group">
              Our Treatments
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <NavAnchor to="#reviews" onClick={toggleMenu} className="relative w-fit text-white hover:text-primary transition-all duration-300 group">
              Patient Stories
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </NavAnchor>
            <NavAnchor to="#how-it-works" onClick={toggleMenu} className="relative w-fit text-white hover:text-primary transition-all duration-300 group">
              Patient Journey
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </NavAnchor>
            <Link to="/visit" onClick={toggleMenu} className="relative w-fit text-white hover:text-primary transition-all duration-300 group">
              Visit Clinic
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>
          
          <div className="flex flex-col gap-4">
            <a href="#book" onClick={toggleMenu} className="text-white text-center py-4 bg-primary rounded-full font-bold transition-all duration-300 hover:bg-primary-dark hover:scale-[1.02] active:scale-95 shadow-xl">
              Book an Appointment
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
