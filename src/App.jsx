import React from 'react'

function App() {
  return (
    <>
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

      <main>
        <section className="hero">
          <div className="container">
            <span className="hero-badge">Family & cosmetic dentistry</span>
            <h1>Care you can trust, smiles you’ll love</h1>
            <p>
              From routine checkups to cosmetic treatments, we’re here to keep
              your smile healthy and confident. Modern care in a comfortable setting.
            </p>
            <div className="hero-cta">
              <a href="#book" className="btn btn-primary">Book a visit</a>
              <a href="#services" className="btn btn-outline">Our services</a>
            </div>
          </div>
        </section>

        <section id="services" className="section">
          <div className="container">
            <div className="section-header">
              <h2>What we offer</h2>
              <p>Comprehensive dental care for the whole family.</p>
            </div>
            <div className="services-grid">
              <div className="service-card">
                <div className="icon" aria-hidden="true">🦷</div>
                <h3>Checkups & Cleanings</h3>
                <p>Regular exams and professional cleanings to prevent issues and keep your smile bright.</p>
              </div>
              <div className="service-card">
                <div className="icon" aria-hidden="true">✨</div>
                <h3>Cosmetic Dentistry</h3>
                <p>Whitening, veneers, and bonding to improve the look of your teeth and boost confidence.</p>
              </div>
              <div className="service-card">
                <div className="icon" aria-hidden="true">🩺</div>
                <h3>Restorative Care</h3>
                <p>Fillings, crowns, and repairs to restore function and comfort when you need it.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="cta-strip">
          <div className="container">
            <h2>Ready to schedule your visit?</h2>
            <p>Book online or give us a call. We’re happy to answer any questions.</p>
            <a href="#book" className="btn">Book an appointment</a>
          </div>
        </section>
      </main>

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
    </>
  )
}

export default App
