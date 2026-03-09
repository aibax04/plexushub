import React from 'react'

function Footer() {
  return (
    <footer className="py-12 bg-surface border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-10">
          <a href="/" className="font-serif text-xl text-text">
            Plexus <span className="text-primary font-bold">Dental</span>
          </a>
          <div className="flex gap-8">
            <a href="#services" className="text-text-muted hover:text-primary transition-colors text-sm font-medium">Services</a>
            <a href="#about" className="text-text-muted hover:text-primary transition-colors text-sm font-medium">About</a>
            <a href="#contact" className="text-text-muted hover:text-primary transition-colors text-sm font-medium">Contact</a>
          </div>
        </div>
        <div className="pt-8 border-t border-border text-center text-text-muted text-sm">
          © {new Date().getFullYear()} Plexus Dental. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
