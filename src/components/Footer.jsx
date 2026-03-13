import React from 'react'

function Footer() {
  return (
    <footer className="py-16 bg-dark-bg border-t border-white/5">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-16">
          <a href="/" className="font-sans font-bold text-2xl text-dark-text tracking-tight hover:opacity-80 transition-opacity">
            plexus<span className="font-light">dental</span>
          </a>
          <div className="flex flex-wrap justify-center md:justify-end gap-8">
            <a href="#features" className="text-dark-text-muted hover:text-dark-text transition-colors text-sm font-medium">Why Us</a>
            <a href="#treatments" className="text-dark-text-muted hover:text-dark-text transition-colors text-sm font-medium">Treatments</a>
            <a href="#how-it-works" className="text-dark-text-muted hover:text-dark-text transition-colors text-sm font-medium">Patient Journey</a>
            <a href="#contact" className="text-dark-text-muted hover:text-dark-text transition-colors text-sm font-medium">Contact</a>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-dark-text-muted text-xs">
          <div>© {new Date().getFullYear()} Plexus Dental. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-dark-text transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-dark-text transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
