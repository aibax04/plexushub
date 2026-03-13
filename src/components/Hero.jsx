import React, { useState, useEffect } from 'react'
import { CheckCircle, ChevronRight, ChevronDown } from 'lucide-react'

function Hero() {
  const [scrollOpacity, setScrollOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const newOpacity = Math.max(0, 1 - scrollPos / 300);
      setScrollOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden bg-dark-bg text-center -z-10">
      {/* Innovative Pre-loader / Transition */}
      <div className="fixed inset-0 z-50 flex pointer-events-none overflow-hidden">
        <div className="w-1/2 h-full bg-[#030303] animate-shutter-left"></div>
        <div className="w-1/2 h-full bg-[#030303] animate-shutter-right"></div>
        
        {/* Laser Line Center */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] -ml-[1px] pointer-events-none origin-top animate-laser-drop">
           <div className="absolute inset-0 bg-primary/80 animate-laser-fade origin-center"></div>
        </div>
      </div>

      {/* Background Image with Premium Blending */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-dark-bg">
        <img 
          src="/hero-model-teeth.jpg" 
          alt="Precision Dental Care" 
          className="w-full h-full object-cover opacity-50 animate-slow-zoom"
        />
        
        {/* Advanced Gradient Overlays for Perfect Blending */}
        <div className="absolute inset-0 bg-dark-bg/30 mix-blend-multiply pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/40 to-dark-bg/10 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/30 via-transparent to-transparent pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-dark-bg/50 via-transparent to-dark-bg/50 pointer-events-none"></div>
        
        {/* Dynamic Light Blobs for Depth (Premium glassmorphism touch) */}
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/30 rounded-full blur-[140px] pointer-events-none animate-pulse-slow"></div>
        <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto flex flex-col items-center animate-reveal">
          
          {/* Micro-badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-white/80 text-xs font-medium tracking-wide mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            Now Accepting New Patients
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-sans font-medium text-dark-text leading-[1.05] tracking-tight mb-6">
            Your smile deserves <br className="hidden md:block" />
            nothing but the best
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-dark-text-muted mb-10 leading-relaxed max-w-2xl font-light px-4">
            Ashiyana's most trusted dental clinic. Painless root canals, invisible braces, implants, and smile makeovers - all backed by 15+ years of expertise and the latest technology.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
            <a href="#book" className="group relative inline-flex items-center justify-center px-8 py-4 font-medium text-white transition-all duration-300 bg-primary rounded-full hover:scale-105 hover:bg-primary-dark shadow-lg hover:shadow-primary/40 active:scale-95">
              <span className="flex items-center gap-2 text-[15px] sm:text-[17px]">
                Book Your Free Consultation
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a href="tel:+916307114437" className="text-dark-text-muted text-sm font-medium hover:text-white transition-all duration-300 hover:translate-x-1">
              or call us directly →
            </a>
          </div>
          
          {/* Trust strip */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-dark-text-muted text-xs sm:text-sm font-medium mb-12">
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>10,000+ Happy Patients</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>Painless Guarantee</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>Same-Day Appointments</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-dark-text-muted/30 transition-opacity duration-300"
        style={{ opacity: scrollOpacity }}
      >
        <span className="text-[9px] uppercase tracking-[0.3em] font-medium">Scroll</span>
        <ChevronDown className="w-4 h-4" />
      </div>
    </section>
  )
}

export default Hero
