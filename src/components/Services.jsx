import React from 'react'
import { Activity, Zap, MapPin, ArrowRight } from 'lucide-react'

function Services() {
  return (
    <div id="features" className="w-full">
      {/* Mini Features row (White Bg) */}
      <section className="bg-bg py-24 sm:py-32">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-border">
            
            <div className="flex flex-col items-center md:items-start pt-8 md:pt-0 px-0 md:px-8 first:pl-0">
              <div className="flex items-center gap-2 mb-3">
                <Activity className="w-5 h-5 text-text" />
                <h3 className="font-semibold text-text text-lg tracking-tight">Precision AI Scans</h3>
              </div>
              <p className="text-text-muted text-sm leading-relaxed">Less than 15 minute comprehensive digital visit.</p>
            </div>
            
            <div className="flex flex-col items-center md:items-start pt-8 md:pt-0 px-0 md:px-8">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-text" />
                <h3 className="font-semibold text-text text-lg tracking-tight">Instant Results</h3>
              </div>
              <p className="text-text-muted text-sm leading-relaxed">Review your 3D digital oral-twin immediately alongside expert guidance.</p>
            </div>
            
            <div className="flex flex-col items-center md:items-start pt-8 md:pt-0 px-0 md:px-8 last:pr-0">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-5 h-5 text-text" />
                <h3 className="font-semibold text-text text-lg tracking-tight">Simple & Convenient</h3>
              </div>
              <p className="text-text-muted text-sm leading-relaxed">Book seamlessly from your phone at our flagship studios.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Stats / Quote Section (Gray Bg) */}
      <section className="bg-bg-alt py-32 rounded-t-[3rem] -mt-8 relative z-10">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-text tracking-tight leading-tight max-w-4xl mx-auto mb-8">
            “Plexus gave me what no traditional dentist ever could: total clarity. If you're tired of subjective drilling decisions and want absolute precision, it's worth it.”
          </h2>
          
          <a href="#reviews" className="inline-flex items-center gap-2 text-sm font-medium text-text hover:text-primary transition-colors mb-16">
            Read reviews <ArrowRight className="w-4 h-4" />
          </a>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Stat Card 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm text-left flex flex-col justify-between min-h-[160px]">
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-5xl font-light text-text tracking-tighter">94</span>
                <span className="text-xl font-medium text-text">%</span>
              </div>
              <p className="text-text-muted text-sm leading-relaxed">
                of members detect <strong className="text-text font-medium">micro-cavities</strong> before requiring invasive drilling
              </p>
            </div>
            
            {/* Stat Card 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm text-left flex flex-col justify-between min-h-[160px]">
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-5xl font-light text-text tracking-tighter">100</span>
                <span className="text-xl font-medium text-text">%</span>
              </div>
              <p className="text-text-muted text-sm leading-relaxed">
                gain <strong className="text-text font-medium">peace of mind</strong> knowing exactly what’s happening beneath the enamel
              </p>
            </div>

            {/* Stat Card 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm text-left flex flex-col justify-between min-h-[160px]">
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-5xl font-light text-text tracking-tighter">85</span>
                <span className="text-xl font-medium text-text">%</span>
              </div>
              <p className="text-text-muted text-sm leading-relaxed">
                of members significantly <strong className="text-text font-medium">improve gum health</strong> within 3 months
              </p>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  )
}

export default Services
