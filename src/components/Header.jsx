import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import treatments from '../data/treatments'
import { useConsultationBooking } from '../context/ConsultationBookingContext'

function Header() {
  const { openConsultationModal } = useConsultationBooking()
  const [isOpen, setIsOpen] = useState(false)
  const [isTreatmentsOpen, setIsTreatmentsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

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

  // Handle body scroll lock and broadcast menu state
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.dispatchEvent(new CustomEvent('mobileMenuToggle', { detail: { isOpen: true } }));
    } else {
      document.body.style.overflow = '';
      window.dispatchEvent(new CustomEvent('mobileMenuToggle', { detail: { isOpen: false } }));
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Helper: scroll-anchors work on home, link navigates otherwise
  const NavAnchor = ({ to, children, className, onClick }) => {
    if (isHome && to.startsWith('#')) {
      const handleClick = (e) => {
        e.preventDefault()
        const el = document.querySelector(to)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
        if (onClick) onClick(e)
      }
      return (
        <a href={to} className={className} onClick={handleClick}>
          {children}
        </a>
      )
    }
    // If not on home OR targeting a full page, use Link
    const target = to.startsWith('#') ? `/${to}` : to
    return (
      <Link to={target} className={className} onClick={onClick}>
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
              <Link to="/why-choose-us" className={`relative text-[14px] font-medium transition-all duration-300 group pb-1 ${
                location.pathname === '/why-choose-us' ? 'text-white' : 'text-white/70 hover:text-white'
              }`}>
                Why Us
                <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                  location.pathname === '/why-choose-us' ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
              <div className="relative group/dropdown py-1">
                <Link to="/treatments" className={`relative text-[14px] font-medium transition-all duration-300 flex items-center gap-1 pb-1 group ${
                  location.pathname === '/treatments' ? 'text-white' : 'text-white/70 hover:text-white'
                }`}>
                  Treatments
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 group-hover/dropdown:rotate-180`} />
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                    location.pathname === '/treatments' ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
                
                {/* Dropdown Menu */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 pointer-events-none translate-y-2 group-hover/dropdown:opacity-100 group-hover/dropdown:pointer-events-auto group-hover/dropdown:translate-y-0 transition-all duration-300 z-50">
                  <div className="bg-[#1a1a1a] border border-white/10 rounded-2xl p-4 shadow-2xl w-[480px] grid grid-cols-2 gap-x-6 gap-y-1 backdrop-blur-2xl">
                    {treatments.map((t) => (
                      <Link 
                        key={t.id} 
                        to={`/treatments?open=${t.id}`}
                        className="flex flex-col p-2.5 rounded-xl hover:bg-white/5 transition-colors group/item"
                      >
                        <span className="text-[13px] font-semibold text-white group-hover/item:text-primary transition-colors line-clamp-1">{t.title}</span>
                        <span className="text-[10px] text-white/40 line-clamp-1">{t.shortDesc}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <NavAnchor to="#doctor" className="relative text-[14px] font-medium text-white/70 hover:text-white transition-all duration-300 group pb-1">
                Our Doctor
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </NavAnchor>
              <NavAnchor to="#reviews" className="relative text-[14px] font-medium text-white/70 hover:text-white transition-all duration-300 group pb-1">
                Reviews
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </NavAnchor>
              <NavAnchor to="#how-it-works" className="relative text-[14px] font-medium text-white/70 hover:text-white transition-all duration-300 group pb-1">
                Patient Journey
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </NavAnchor>
              <Link to="/blog" className="relative text-[14px] font-medium text-white/70 hover:text-white transition-all duration-300 group pb-1">
                Blog
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>

            </nav>
            
            <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
              <Link to="/visit" className="px-5 py-2.5 bg-white/10 text-white text-[13px] font-semibold rounded-full hover:bg-white/20 transition-all duration-300 border border-white/10 active:scale-95">
                Visit Us Now →
              </Link>
              <button
                type="button"
                onClick={openConsultationModal}
                className="px-6 py-2.5 bg-primary text-white text-[14px] font-bold rounded-full hover:scale-105 hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-primary/40 active:scale-95"
              >
                Book Visit
              </button>
            </div>

            {/* Mobile Menu Button - Show only below lg */}
            <div className="flex lg:hidden items-center gap-3">
              <button
                type="button"
                onClick={openConsultationModal}
                className="px-5 py-2 whitespace-nowrap bg-primary text-white text-[13px] font-bold rounded-full hover:scale-105 hover:bg-primary-dark transition-all duration-300 active:scale-95"
              >
                Book Now
              </button>
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
          isOpen ? 'translate-y-0 opacity-100 visible pointer-events-auto' : '-translate-y-full opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="pt-32 pb-8 px-8 h-full flex flex-col justify-between">
          <nav className="flex flex-col gap-8 text-2xl font-medium">
            <Link to="/why-choose-us" onClick={closeMenu} className={`relative w-fit text-2xl font-medium transition-all duration-300 group ${
              location.pathname === '/why-choose-us' ? 'text-primary' : 'text-white hover:text-primary'
            }`}>
              Why Choose Us
              <span className={`absolute -bottom-1 left-0 h-1 bg-primary transition-all duration-300 ${
                location.pathname === '/why-choose-us' ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
            <div className="flex flex-col gap-4">
              <button 
                onClick={() => setIsTreatmentsOpen(!isTreatmentsOpen)}
                className={`relative w-fit flex items-center gap-2 text-2xl font-medium transition-all duration-300 group ${
                  location.pathname.startsWith('/treatments') ? 'text-primary' : 'text-white hover:text-primary'
                }`}
              >
                Our Treatments
                <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${isTreatmentsOpen ? 'rotate-180' : ''}`} />
                <span className={`absolute -bottom-1 left-0 h-1 bg-primary transition-all duration-300 ${
                  location.pathname.startsWith('/treatments') ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </button>
              
              <div className={`grid grid-cols-1 gap-4 pl-4 overflow-hidden transition-all duration-500 ${
                isTreatmentsOpen ? 'max-h-[60vh] opacity-100 mt-2' : 'max-h-0 opacity-0'
              }`}>
                {treatments.map((t) => (
                  <Link 
                    key={t.id} 
                    to={`/treatments?open=${t.id}`} 
                    onClick={closeMenu}
                    className="text-white/70 hover:text-white text-lg transition-colors py-1"
                  >
                    {t.title}
                  </Link>
                ))}
              </div>
            </div>
            <NavAnchor to="#doctor" onClick={closeMenu} className="relative w-fit text-white hover:text-primary transition-all duration-300 group">
              Our Doctor
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </NavAnchor>
            <NavAnchor to="#reviews" onClick={closeMenu} className="relative w-fit text-white hover:text-primary transition-all duration-300 group">
              Reviews
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </NavAnchor>
            <NavAnchor to="#how-it-works" onClick={closeMenu} className="relative w-fit text-white hover:text-primary transition-all duration-300 group">
              Patient Journey
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </NavAnchor>
            <Link to="/blog" onClick={closeMenu} className="relative w-fit text-white hover:text-primary transition-all duration-300 group">
              Blog
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>

          </nav>
          
          <div className="flex flex-col gap-3">
            <Link to="/visit" onClick={closeMenu} className="text-white text-center py-4 bg-white/10 rounded-full font-semibold transition-all duration-300 hover:bg-white/20 active:scale-95 border border-white/10">
              Visit Us Now →
            </Link>
            <button
              type="button"
              onClick={() => {
                openConsultationModal()
                closeMenu()
              }}
              className="text-white text-center py-4 bg-primary rounded-full font-bold transition-all duration-300 hover:bg-primary-dark hover:scale-[1.02] active:scale-95 shadow-xl w-full"
            >
              Book an Appointment
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
