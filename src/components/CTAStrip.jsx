import React from 'react'

function CTAStrip() {
  return (
    <section id="book" className="py-32 bg-primary relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-linear-to-br from-primary via-primary-dark to-primary/80 opacity-95" />
      <div className="absolute top-0 left-0 w-full h-1 bg-white/10" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-[80px]" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">Your Journey to <br />Perfection Starts <span className="italic opacity-80 underline underline-offset-8 decoration-white/30">Now</span></h2>
          <p className="text-white/80 text-xl md:text-2xl mb-12 font-light leading-relaxed">
            Ready to experience the gold standard of dental care? Join our exclusive patient list and redefine your smile with state-of-the-art clinical expertise.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="#book" className="px-12 py-5 bg-white text-primary font-bold rounded-2xl hover:bg-bg hover:scale-105 transition-all duration-300 text-lg shadow-xl">
              Reserve Your Experience
            </a>
            <div className="text-white/60 text-sm italic">
              *Limited availability for new patients this month
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTAStrip
