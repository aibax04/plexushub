import React from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Phone, Clock, Mail } from 'lucide-react'

function Footer() {
  return (
    <footer className="py-16 bg-dark-bg border-t border-white/5">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Contact strip */}
        <div id="contact" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 pb-16 border-b border-white/5">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-white/5 rounded-lg mt-0.5">
              <MapPin className="w-4 h-4 text-primary" />
            </div>
            <div>
              <p className="text-dark-text text-sm font-medium mb-1">Visit Us</p>
              <p className="text-dark-text-muted text-xs leading-relaxed">
                Shop no 9, SJS Pratham Complex,<br />
                Chungi-Parag Rd, Opp. Shivalik School, Ashiyana, Lucknow 226012<br />
                
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="p-2 bg-white/5 rounded-lg mt-0.5">
              <Phone className="w-4 h-4 text-primary" />
            </div>
            <div>
              <p className="text-dark-text text-sm font-medium mb-1">Call / WhatsApp</p>
              <a href="tel:+916307114437" className="text-dark-text-muted text-xs hover:text-primary transition-colors">+91 63071 14437</a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="p-2 bg-white/5 rounded-lg mt-0.5">
              <Clock className="w-4 h-4 text-primary" />
            </div>
            <div>
              <p className="text-dark-text text-sm font-medium mb-1">Clinic Hours</p>
              <p className="text-dark-text-muted text-xs leading-relaxed">Mon–Sat: 10am – 8pm<br />Sun: By Appointment</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="p-2 bg-white/5 rounded-lg mt-0.5">
              <Mail className="w-4 h-4 text-primary" />
            </div>
            <div>
              <p className="text-dark-text text-sm font-medium mb-1">Email</p>
              <a href="mailto:plexusdentalhub@gmail.com" className="text-dark-text-muted text-xs hover:text-primary transition-colors">plexusdentalhub@gmail.com</a>
            </div>
          </div>
        </div>

        {/* Brand + Links */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-16">
          <div>
            <Link to="/" className="font-sans font-bold text-2xl text-dark-text tracking-tight hover:opacity-80 transition-opacity">
              plexus<span className="font-light">dental</span>
            </Link>
            <p className="text-dark-text-muted text-xs mt-2 max-w-xs">The most trusted dental clinic in Ashiyana, Lucknow. 
              <br />Painless treatments. Honest pricing. Beautiful smiles.</p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end gap-8">
            <a href="#features" className="text-dark-text-muted hover:text-dark-text transition-colors text-sm font-medium">Why Us</a>
            <Link to="/treatments" className="text-dark-text-muted hover:text-dark-text transition-colors text-sm font-medium">Treatments</Link>
            <a href="#doctor" className="text-dark-text-muted hover:text-dark-text transition-colors text-sm font-medium">Our Doctor</a>
            <a href="#reviews" className="text-dark-text-muted hover:text-dark-text transition-colors text-sm font-medium">Reviews</a>
            <a href="#how-it-works" className="text-dark-text-muted hover:text-dark-text transition-colors text-sm font-medium">Patient Journey</a>
            <Link to="/visit" className="text-dark-text-muted hover:text-dark-text transition-colors text-sm font-medium">Visit Clinic</Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-dark-text-muted text-[11px]">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left">
            <span>© {new Date().getFullYear()} Plexus Dental Hub, Ashiyana Lucknow. All rights reserved.</span>
            <span className="hidden md:block w-px h-3 bg-white/10"></span>
            <span>Developed by human hands at <a href="https://www.uptrail.io" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">uptrail.io</a></span>
          </div>
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
