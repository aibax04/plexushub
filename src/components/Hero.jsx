import React from 'react'

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <span className="hero-badge">Family & cosmetic dentistry</span>
        <h1>Care you can trust, smiles you'll love</h1>
        <p>
          From routine checkups to cosmetic treatments, we're here to keep
          your smile healthy and confident. Modern care in a comfortable setting.
        </p>
        <div className="hero-cta">
          <a href="#book" className="btn btn-primary">Book a visit</a>
          <a href="#services" className="btn btn-outline">Our services</a>
        </div>
      </div>
    </section>
  )
}

export default Hero
