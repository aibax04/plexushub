import React from 'react'

function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <a href="/" className="logo">
          Plexus <span>Dental</span>
        </a>
        <nav className="nav">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#book" className="btn btn-primary">Book Appointment</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
