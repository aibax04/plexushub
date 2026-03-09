import React from 'react'

function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-bg">
      {/* Background Decorative Element */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-[80px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary-dark text-xs font-bold tracking-widest uppercase mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Next-Gen Dental Care
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-serif text-text leading-[1.1] mb-8">
              Elevating your <br />
              <span className="text-primary italic">dental</span> experience
            </h1>
            
            <p className="text-lg md:text-xl text-text-muted mb-10 leading-relaxed max-w-lg">
              Experience dentistry redefined. We combine state-of-the-art technology with a human-centric approach to give you the smile you deserve.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#book" className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-primary rounded-xl overflow-hidden hover:bg-primary-dark">
                <span className="relative z-10">Start Your Journey</span>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-white/10 transition-transform duration-500" />
              </a>
              <a href="#services" className="inline-flex items-center justify-center px-8 py-4 font-bold text-text-muted border-2 border-border rounded-xl hover:bg-surface hover:text-primary hover:border-primary transition-all duration-300">
                Explore Services
              </a>
            </div>

            {/* Trust Element */}
            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-bg bg-primary/10 flex items-center justify-center text-[10px] font-bold text-primary">
                    U{i}
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <p className="font-bold text-text">Trusted by 2,000+ Patients</p>
                <div className="flex text-yellow-500 text-xs">★★★★★</div>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Main Hero Image with a unique mask or frame */}
            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl-custom border-[12px] border-white/50 backdrop-blur-sm">
              <img 
                src="/hero-dental.png" 
                alt="Modern Dentistry" 
                className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Floating "Cool" Element 1: Technology Card */}
            <div className="absolute -top-6 -right-6 z-20 bg-white/80 backdrop-blur-xl p-4 rounded-2xl shadow-lg border border-white/20 animate-bounce-subtle">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center text-primary">
                   ✨
                </div>
                <div>
                  <p className="text-[10px] font-bold text-primary-dark uppercase tracking-wider">Technology</p>
                  <p className="text-sm font-bold text-text">AI Diagnostics</p>
                </div>
              </div>
            </div>

            {/* Floating "Cool" Element 2: Appointment Mini-widget */}
            <div className="absolute -bottom-10 -left-10 z-20 bg-text text-white p-6 rounded-3xl shadow-2xl max-w-[200px] hidden md:block">
              <p className="text-xs opacity-70 mb-2 uppercase tracking-tighter">Available Today</p>
              <p className="text-xl font-serif mb-4">4pm - 6pm</p>
              <button className="w-full py-2 bg-primary text-xs font-bold rounded-lg hover:bg-primary-dark transition-colors">
                Quick Book
              </button>
            </div>
            
            {/* Background Accent Ring */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-primary/10 rounded-full animate-spin-slow pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
