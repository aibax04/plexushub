import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <>
      <div className="fixed top-4 md:top-6 left-0 right-0 z-50 px-4 flex justify-center w-full">
        <header className="w-full max-w-6xl bg-[#4b4b4b]/95 backdrop-blur-md text-white rounded-full shadow-2xl border border-white/10 transition-all">
          <div className="px-6 md:px-8 h-[64px] flex items-center justify-between">
            
            <a href="/" className="font-sans font-bold text-2xl tracking-tight hover:opacity-80 transition-opacity flex-shrink-0">
              plexus<span className="font-light">dental</span>
            </a>
            
            <nav className="hidden lg:flex items-center justify-center space-x-7 flex-1">
              <a href="#features" className="text-[14px] font-medium text-white/90 hover:text-white transition-colors">Why Us</a>
              <a href="#treatments" className="text-[14px] font-medium text-white/90 hover:text-white transition-colors">Treatments</a>
              <a href="#reviews" className="text-[14px] font-medium text-white/90 hover:text-white transition-colors">Reviews</a>
              <div className="w-px h-4 bg-white/20 mx-1"></div>
              <a href="#how-it-works" className="text-[14px] font-medium text-white/90 hover:text-white transition-colors">Patient Journey</a>
            </nav>
            
            <div className="hidden lg:flex items-center gap-6 flex-shrink-0">
              <a href="#book" className="px-6 py-2.5 bg-primary text-white text-[14px] font-bold rounded-full hover:scale-105 transition-all shadow-md">
                Book Visit
              </a>
            </div>

            {/* Mobile Menu Button - Show only below lg */}
            <div className="flex lg:hidden items-center gap-4">
              <a href="#book" className="px-4 py-2 bg-primary text-white text-[13px] font-bold rounded-full hover:scale-105 transition-all">
                Book
              </a>
              <button onClick={toggleMenu} className="text-white focus:outline-hidden p-1">
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
            <a href="#features" onClick={toggleMenu} className="text-white hover:text-primary transition-colors">Why Choose Us</a>
            <a href="#treatments" onClick={toggleMenu} className="text-white hover:text-primary transition-colors">Our Treatments</a>
            <a href="#reviews" onClick={toggleMenu} className="text-white hover:text-primary transition-colors">Patient Stories</a>
            <a href="#how-it-works" onClick={toggleMenu} className="text-white hover:text-primary transition-colors">Patient Journey</a>
          </nav>
          
          <div className="flex flex-col gap-4">
            <a href="#book" onClick={toggleMenu} className="text-white text-center py-4 bg-primary rounded-full font-bold">Book an Appointment</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
