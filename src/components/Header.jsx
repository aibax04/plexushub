import React from 'react'

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-bg/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <a href="/" className="font-serif text-2xl text-text hover:text-primary transition-colors">
          Plexus <span className="text-primary">Dental</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-text-muted font-medium hover:text-primary transition-colors">Services</a>
          <a href="#about" className="text-text-muted font-medium hover:text-primary transition-colors">About</a>
          <a href="#contact" className="text-text-muted font-medium hover:text-primary transition-colors">Contact</a>
          <a href="#book" className="px-6 py-2.5 bg-primary text-white font-semibold rounded-xl shadow-custom hover:bg-primary-dark transition-all">
            Book Appointment
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
