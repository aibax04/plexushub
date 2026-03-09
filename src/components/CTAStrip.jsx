import React from 'react'

function CTAStrip() {
  return (
    <section id="contact" className="py-20 bg-primary text-white text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-serif mb-6">Ready to schedule your visit?</h2>
        <p className="text-white/90 text-lg md:text-xl max-w-xl mx-auto mb-10">
          Book online or give us a call. We're here to make your dental experience seamless and comfortable.
        </p>
        <a href="#book" className="inline-block px-10 py-4 bg-white text-primary font-bold rounded-xl hover:bg-bg hover:-translate-y-1 transition-all duration-300">
          Book an appointment
        </a>
      </div>
    </section>
  )
}

export default CTAStrip
