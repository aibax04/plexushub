import React from 'react'
import { Activity, Zap, MapPin, ArrowRight } from 'lucide-react'

function Services() {
  return (
    <div id="features" className="w-full relative z-10">
      {/* Mini Features row (White Bg) */}
      <section className="py-24 sm:py-32">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-border">
            
            <div className="flex flex-col items-center md:items-start pt-8 md:pt-0 px-0 md:px-8 first:pl-0">
              <div className="flex items-center gap-2 mb-3">
                <Activity className="w-5 h-5 text-text" />
                <h3 className="font-semibold text-text text-lg tracking-tight">Zero Pain, Zero Anxiety</h3>
              </div>
              <p className="text-text-muted text-sm leading-relaxed">Modern anaesthesia and microscopic precision mean you feel nothing. Even during root canals.</p>
            </div>
            
            <div className="flex flex-col items-center md:items-start pt-8 md:pt-0 px-0 md:px-8">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-text" />
                <h3 className="font-semibold text-text text-lg tracking-tight">See Before You Decide</h3>
              </div>
              <p className="text-text-muted text-sm leading-relaxed">Digital X-rays on your screen. We show you exactly what we see, so you make informed choices.</p>
            </div>
            
            <div className="flex flex-col items-center md:items-start pt-8 md:pt-0 px-0 md:px-8 last:pr-0">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-5 h-5 text-text" />
                <h3 className="font-semibold text-text text-lg tracking-tight">Your Neighbourhood Clinic</h3>
              </div>
              <p className="text-text-muted text-sm leading-relaxed">5 minutes from Ashiyana crossing. Ample parking. Evening &amp; weekend slots for working professionals.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Stats / Quote Section (Gray Bg) */}
      <section className="bg-bg-alt py-32 rounded-t-[3rem] -mt-8 relative z-10">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-text tracking-tight leading-tight max-w-4xl mx-auto mb-4">
            &ldquo;I walked in terrified of dentists. I walked out wondering why I ever waited. The most comfortable medical experience of my life - and my teeth look incredible.&rdquo;
          </h2>
          <p className="text-text-muted text-sm mb-6">- Priya M., Gomti Nagar</p>
          
          <a href="https://share.google/eUKP8hBjjV8z5QCV7" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-text hover:text-primary transition-colors mb-16">
            See 200+ reviews on Google <ArrowRight className="w-4 h-4" />
          </a>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Stat Card 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm text-left flex flex-col justify-between min-h-[160px]">
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-5xl font-light text-text tracking-tighter">10k</span>
                <span className="text-xl font-medium text-text">+</span>
              </div>
              <p className="text-text-muted text-sm leading-relaxed">
                patients who left with a <strong className="text-text font-medium">healthier, more confident smile</strong>
              </p>
            </div>
            
            {/* Stat Card 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm text-left flex flex-col justify-between min-h-[160px]">
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-5xl font-light text-text tracking-tighter">10+</span>
                <span className="text-xl font-medium text-text">yrs</span>
              </div>
              <p className="text-text-muted text-sm leading-relaxed">
                of <strong className="text-text font-medium">hands-on surgical expertise</strong> across every dental specialisation
              </p>
            </div>

            {/* Stat Card 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm text-left flex flex-col justify-between min-h-[160px]">
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-5xl font-light text-text tracking-tighter">4.9</span>
                <span className="text-xl font-medium text-text">★</span>
              </div>
              <p className="text-text-muted text-sm leading-relaxed">
                average <strong className="text-text font-medium">Google rating</strong> from 200+ verified patient reviews
              </p>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  )
}

export default Services
