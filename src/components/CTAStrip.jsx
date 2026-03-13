import { ChevronRight, Phone, CalendarClock, Stethoscope, Smile } from 'lucide-react'

function CTAStrip() {
  return (
    <section id="how-it-works" className="py-32 bg-dark-bg text-dark-text relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl">
        
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-white/80 text-xs font-bold uppercase tracking-widest mb-6">
            Patient Journey
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight max-w-3xl mx-auto leading-[1.1]">
            From booking to <br className="hidden sm:block" />beautiful - in 3 simple steps
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
          <div className="flex flex-col text-center md:text-left">
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 text-primary flex items-center justify-center mb-8 mx-auto md:mx-0 shadow-inner">
              <CalendarClock strokeWidth={1.2} className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-medium mb-3">Book in 30 seconds</h3>
            <p className="text-dark-text-muted text-sm leading-relaxed">Call, WhatsApp, or book online. Pick a slot that works for you - evenings and weekends available. Zero paperwork on arrival.</p>
          </div>
          <div className="flex flex-col text-center md:text-left">
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 text-primary flex items-center justify-center mb-8 mx-auto md:mx-0 shadow-inner">
              <Stethoscope strokeWidth={1.2} className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-medium mb-3">Free consultation & diagnosis</h3>
            <p className="text-dark-text-muted text-sm leading-relaxed">We take digital X-rays, show them to you on-screen, explain everything in plain Hindi or English, and give you an honest opinion. No pressure. No upselling.</p>
          </div>
          <div className="flex flex-col text-center md:text-left">
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 text-primary flex items-center justify-center mb-8 mx-auto md:mx-0 shadow-inner">
              <Smile strokeWidth={1.2} className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-medium mb-3">Walk out smiling</h3>
            <p className="text-dark-text-muted text-sm leading-relaxed">Whether it's a same-day cleaning or a multi-visit smile makeover, every step is painless, transparent, and designed around your comfort.</p>
          </div>
        </div>

        {/* Final CTA Block */}
        <div className="bg-dark-surface border border-dark-border rounded-[2rem] p-8 sm:p-12 md:p-16 text-center relative overflow-hidden">
          {/* Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-6 tracking-tight leading-[1.1]">
              Stop putting it off. <br className="hidden sm:block" />Your smile is worth it.
            </h3>
            <p className="text-dark-text-muted mb-10 max-w-xl mx-auto text-[15px] leading-relaxed">
              The longer you wait, the more complex (and expensive) dental problems become. Book your free consultation today and get peace of mind - it takes less than 30 seconds.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#book" className="group inline-flex items-center justify-center px-8 py-4 font-medium text-white transition-all duration-300 bg-primary rounded-full hover:scale-105 shadow-lg">
                Book Free Consultation
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="tel:+916307114437" className="inline-flex items-center gap-2 px-6 py-4 border border-white/10 rounded-full text-white/80 hover:text-white hover:border-white/30 transition-all text-sm font-medium">
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTAStrip
