import React from 'react'
import { CheckCircle, ShieldCheck, Sparkles, Calendar } from 'lucide-react'

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-bg py-20 lg:py-0">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-primary/5 to-transparent pointer-events-none" />
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
      
      {/* Ornamental Background Text */}
      <div className="absolute top-20 left-10 text-[12rem] font-serif text-primary/5 select-none pointer-events-none leading-none opacity-20 hidden xl:block">
        EST. 2024
      </div>

      <div className="container mx-auto px-6 relative z-10 mt-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Copywriting & Content */}
          <div className="max-w-3xl animate-reveal">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass border border-primary/20 text-primary-dark text-[10px] md:text-xs font-bold tracking-widest uppercase mb-8 shadow-sm">
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span>Experience The Future of Dentistry</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-9xl font-serif text-text leading-[0.95] mb-8 tracking-tight">
              Mastering the <br />
              <span className="text-primary italic relative">
                Art
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span> <br />
              of the Smile.
            </h1>
            
            <p className="text-xl md:text-2xl text-text-muted mb-12 leading-relaxed max-w-xl font-light">
              Stop settling for traditional dentistry. Step into a world where <span className="font-medium text-text">clinical precision</span> meets <span className="font-medium text-text text-primary italic">boutique luxury</span>, designed for those who demand nothing but perfection.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-16">
              <a href="#book" className="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-white transition-all duration-500 bg-primary rounded-2xl overflow-hidden hover:scale-105 active:scale-95 shadow-lg hover:shadow-primary/30">
                <span className="relative z-10 flex items-center gap-2 text-lg">
                  Secure Your Appointment
                  <Calendar className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-linear-to-r from-primary-dark to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a href="#services" className="inline-flex items-center justify-center px-10 py-5 font-bold text-text-muted border-2 border-border/50 rounded-2xl hover:bg-surface hover:text-primary hover:border-primary transition-all duration-300 text-lg glass">
                Explore The Studio
              </a>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-border/50">
              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 bg-primary/10 rounded-lg text-primary">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-text mb-0.5">DSD Certified Center</p>
                  <p className="text-sm text-text-muted">Digital Smile Design certified experts.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 bg-primary/10 rounded-lg text-primary">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-text mb-0.5">Zero-Pain Guarantee</p>
                  <p className="text-sm text-text-muted">Using the world's least invasive techniques.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Excellence */}
          <div className="relative group lg:block">
            {/* The Main Image Container */}
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl-custom border-[1px] border-white/50 animate-float">
              <img 
                src="/hero-luxury.png" 
                alt="Boutique Dental Studio" 
                className="w-full aspect-[4/5] object-cover transition-transform duration-[2000ms] group-hover:scale-110"
              />
              
              {/* Glass Overlays on image */}
              <div className="absolute bottom-8 left-8 right-8 glass p-6 rounded-2xl animate-reveal animate-delay-300 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-xl font-serif text-text">The Grand Suite</h4>
                    <p className="text-sm text-text-muted italic leading-none">Voted #1 Dental Experience 2024</p>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors cursor-pointer">
                    →
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Accents */}
            <div className="absolute -top-12 -right-12 z-20 glass-dark text-white p-8 rounded-3xl shadow-2xl max-w-[220px] animate-bounce-subtle">
              <div className="flex flex-col gap-2">
                <div className="text-primary-dark bg-white w-fit p-2 rounded-lg font-bold text-[10px] uppercase tracking-tighter">Limited Slots</div>
                <p className="text-xl font-serif leading-tight">Accepting 5 New Clients Weekly</p>
                <div className="w-full h-1 bg-white/20 rounded-full mt-2 overflow-hidden">
                  <div className="w-3/4 h-full bg-primary animate-shimmer" style={{ backgroundSize: '200% 100%' }} />
                </div>
              </div>
            </div>

            <div className="absolute top-1/2 -left-20 -translate-y-1/2 z-20 glass p-5 rounded-2xl shadow-xl border-l-[6px] border-primary animate-float animate-delay-200 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-primary-dark/20 flex items-center justify-center overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?u=${i}`} alt="user" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-bold text-text">Loved by 2k+ Patients</p>
                  <p className="text-[10px] uppercase font-bold text-primary tracking-widest">★★★★★ Elite Rating</p>
                </div>
              </div>
            </div>

            {/* Background Kinetic Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border-2 border-primary/5 rounded-[4rem] animate-spin-slow pointer-events-none -z-10" />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
