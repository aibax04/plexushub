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
                <h3 className="font-semibold text-text text-lg tracking-tight">Painless Treatments</h3>
              </div>
              <p className="text-text-muted text-sm leading-relaxed">State-of-the-art technology ensuring pain-free root canals, extractions, and implants.</p>
            </div>
            
            <div className="flex flex-col items-center md:items-start pt-8 md:pt-0 px-0 md:px-8">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-text" />
                <h3 className="font-semibold text-text text-lg tracking-tight">Expert Diagnosis</h3>
              </div>
              <p className="text-text-muted text-sm leading-relaxed">Advanced digital imaging and AI analysis for precise, transparent treatment planning.</p>
            </div>
            
            <div className="flex flex-col items-center md:items-start pt-8 md:pt-0 px-0 md:px-8 last:pr-0">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-5 h-5 text-text" />
                <h3 className="font-semibold text-text text-lg tracking-tight">Prime Location</h3>
              </div>
              <p className="text-text-muted text-sm leading-relaxed">Conveniently located in the heart of Ashiyana, Lucknow with flexible family scheduling.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Stats / Quote Section (Gray Bg) */}
      <section className="bg-bg-alt py-32 rounded-t-[3rem] -mt-8 relative z-10">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-text tracking-tight leading-tight max-w-4xl mx-auto mb-8">
            “Finally found a dentist in Ashiyana who actually listens. The painless root canal and transparent pricing completely transformed my view on dental visits.”
          </h2>
          
          <a href="#reviews" className="inline-flex items-center gap-2 text-sm font-medium text-text hover:text-primary transition-colors mb-16">
            Read patient stories <ArrowRight className="w-4 h-4" />
          </a>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Stat Card 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm text-left flex flex-col justify-between min-h-[160px]">
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-5xl font-light text-text tracking-tighter">10k</span>
                <span className="text-xl font-medium text-text">+</span>
              </div>
              <p className="text-text-muted text-sm leading-relaxed">
                Beautiful smiles <strong className="text-text font-medium">successfully restored</strong> across Lucknow and surrounding areas
              </p>
            </div>
            
            {/* Stat Card 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm text-left flex flex-col justify-between min-h-[160px]">
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-5xl font-light text-text tracking-tighter">15</span>
                <span className="text-xl font-medium text-text">+</span>
              </div>
              <p className="text-text-muted text-sm leading-relaxed">
                Years of <strong className="text-text font-medium">clinical experience</strong> performing advanced restorative dentistry
              </p>
            </div>

            {/* Stat Card 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm text-left flex flex-col justify-between min-h-[160px]">
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-5xl font-light text-text tracking-tighter">100</span>
                <span className="text-xl font-medium text-text">%</span>
              </div>
              <p className="text-text-muted text-sm leading-relaxed">
                Commitment to a <strong className="text-text font-medium">sterile, hygienic, and painless</strong> clinical environment
              </p>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  )
}

export default Services
