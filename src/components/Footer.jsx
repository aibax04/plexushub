import React from 'react'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <a href="/" className="logo">Plexus <span>Dental</span></a>
          <div className="footer-links">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div className="footer-bottom">
          © {new Date().getFullYear()} Plexus Dental. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
