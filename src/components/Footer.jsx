import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MapPin, Phone, Clock, Mail } from 'lucide-react'
import { CONTACT } from '../data/contact'

function NavAnchor({ to, className, children }) {
  const location = useLocation()
  const isHome = location.pathname === '/'
  
  if (isHome && to.startsWith('#')) {
    const handleClick = (e) => {
      e.preventDefault()
      const el = document.querySelector(to)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
    return <a href={to} className={className} onClick={handleClick}>{children}</a>
  }
  const target = to.startsWith('#') ? `/${to}` : to
  return <Link to={target} className={className}>{children}</Link>
}

function Footer() {
  return (
    <footer className="py-16 bg-dark-bg border-t border-white/5">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Contact strip */}
        <div id="contact" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 pb-16 border-b border-white/5">
          <a 
            href="https://www.google.com/maps/search/Plexus+Dental+Hub+Lucknow" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white/5 transition-all group"
          >
            <div className="p-2.5 bg-white/5 rounded-xl mt-0.5 group-hover:bg-primary/20 transition-colors">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-dark-text text-sm font-semibold mb-1 group-hover:text-primary transition-colors">Visit Our Clinic</p>
              <p className="text-dark-text-muted text-xs leading-relaxed">
                UGF-5, SJS Pratham Complex, Sector-F, Parag Road, Lucknow 226012
              </p>
            </div>
          </a>

          <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white/5 transition-all group">
            <div className="p-2.5 bg-white/5 rounded-xl mt-0.5 group-hover:bg-primary/20 transition-colors">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <div className="min-w-0">
              <p className="text-dark-text text-sm font-semibold mb-2 group-hover:text-primary transition-colors">Call / WhatsApp</p>
              <a href={`tel:${CONTACT.phoneTel}`} className="block text-dark-text-muted text-xs hover:text-primary transition-colors">
                {CONTACT.phoneDisplay}
              </a>
              {CONTACT.secondaryPhoneTel && CONTACT.secondaryPhoneDisplay ? (
                <a
                  href={`tel:${CONTACT.secondaryPhoneTel}`}
                  className="block text-dark-text-muted text-xs hover:text-primary transition-colors mt-1.5"
                >
                  {CONTACT.secondaryPhoneDisplay}
                </a>
              ) : null}
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-2xl">
            <div className="p-2.5 bg-white/5 rounded-xl mt-0.5">
              <Clock className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-dark-text text-sm font-semibold mb-1">Clinic Hours</p>
              <div className="space-y-3 mt-1">
                <div>
                  <p className="text-dark-text-muted text-[10px] uppercase tracking-wider font-semibold opacity-50 mb-1">Monday – Saturday</p>
                  <div className="flex flex-col gap-0.5 mt-0.5">
                    <span className="text-primary text-[11px] font-medium whitespace-nowrap">Morning: 10:00 AM – 02:30 PM</span>
                    <span className="text-primary text-[11px] font-medium whitespace-nowrap">Evening: 05:00 PM – 09:00 PM</span>
                  </div>
                </div>
                <div className="pt-2 border-t border-white/5">
                  <p className="text-dark-text-muted text-[10px] uppercase tracking-wider font-semibold opacity-50 mb-1">Sunday</p>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-amber-500/90 text-xs font-medium whitespace-nowrap">10:00 AM – 02:30 PM</span>
                    <span className="text-dark-text-muted text-[10px] whitespace-nowrap">or Special Appointment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a 
            href="mailto:plexusdentalhub@gmail.com"
            className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white/5 transition-all group"
          >
            <div className="p-2.5 bg-white/5 rounded-xl mt-0.5 group-hover:bg-primary/20 transition-colors">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-dark-text text-sm font-semibold mb-1 group-hover:text-primary transition-colors">Email Us</p>
              <span className="text-dark-text-muted text-xs">plexusdentalhub@gmail.com</span>
            </div>
          </a>
        </div>

        {/* Brand + Links */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div>
            <Link to="/" className="font-sans font-bold text-2xl text-dark-text tracking-tight hover:opacity-80 transition-opacity">
              plexus<span className="font-light">dental</span>
            </Link>
            <p className="text-dark-text-muted text-xs mt-3 max-w-xs leading-relaxed">
              The most trusted dental clinic in Ashiyana, Lucknow.
              <br />Painless treatments. Honest pricing. Beautiful smiles.
            </p>
          </div>
          <div className="flex flex-wrap justify-start md:justify-end gap-x-2 gap-y-2 -ml-4">
            <NavAnchor to="/why-choose-us" className="text-dark-text-muted hover:text-dark-text transition-colors text-sm font-medium px-4 py-2">Why Us</NavAnchor>
            <NavAnchor to="/treatments" className="text-dark-text-muted hover:text-dark-text transition-colors text-sm font-medium px-4 py-2">Treatments</NavAnchor>
            <NavAnchor to="#doctor" className="text-dark-text-muted hover:text-dark-text transition-colors text-sm font-medium px-4 py-2">Our Doctor</NavAnchor>
            <NavAnchor to="#reviews" className="text-dark-text-muted hover:text-dark-text transition-colors text-sm font-medium px-4 py-2">Reviews</NavAnchor>
            <NavAnchor to="#how-it-works" className="text-dark-text-muted hover:text-dark-text transition-colors text-sm font-medium px-4 py-2">Patient Journey</NavAnchor>
            <NavAnchor to="/visit" className="text-dark-text-muted hover:text-dark-text transition-colors text-sm font-medium px-4 py-2">Visit Clinic</NavAnchor>
            <NavAnchor to="/blog" className="text-dark-text-muted hover:text-dark-text transition-colors text-sm font-medium px-4 py-2">Blog</NavAnchor>
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
            <Link to="/privacy-policy" className="hover:text-dark-text transition-colors">Privacy Policy</Link>
            <a href="#" className="hover:text-dark-text transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
