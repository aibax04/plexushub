import React from 'react'
import { ChevronRight } from 'lucide-react'

function CTAStrip() {
  return (
    <section id="how-it-works" className="py-32 bg-dark-bg text-dark-text relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-20 text-center md:text-left">
          How it works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          <div className="flex flex-col">
            <div className="w-8 h-8 rounded-sm bg-primary text-white flex items-center justify-center font-bold mb-6 text-sm">1</div>
            <h3 className="text-xl font-medium mb-3">Scan your entire mouth</h3>
            <p className="text-dark-text-muted text-sm leading-relaxed">Visit our flagship studio for a comprehensive 3D digital scan, bite analysis, and AI-driven cavity detection in under 15 minutes.</p>
          </div>
          <div className="flex flex-col">
            <div className="w-8 h-8 rounded-sm bg-primary text-white flex items-center justify-center font-bold mb-6 text-sm">2</div>
            <h3 className="text-xl font-medium mb-3">Review your oral twin</h3>
            <p className="text-dark-text-muted text-sm leading-relaxed">Receive a detailed digital model of your teeth and gums, highlighting areas of excellence and potential future risk factors.</p>
          </div>
          <div className="flex flex-col">
            <div className="w-8 h-8 rounded-sm bg-primary text-white flex items-center justify-center font-bold mb-6 text-sm">3</div>
            <h3 className="text-xl font-medium mb-3">Take precision action</h3>
            <p className="text-dark-text-muted text-sm leading-relaxed">Work alongside our top-tier specialists to execute a tailored, proactive plan without unnecessary drills or guesswork.</p>
          </div>
        </div>

        <div className="bg-dark-surface border border-dark-border rounded-[2rem] p-12 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-medium mb-6 tracking-tight">Ready to upgrade your oral health?</h3>
            <p className="text-dark-text-muted mb-10 max-w-lg mx-auto">Skip the generic waiting rooms and vague diagnoses. Step into the future of data-driven dentistry today.</p>
            <a href="#book" className="group inline-flex items-center justify-center px-8 py-4 font-medium text-white transition-all duration-300 bg-primary rounded-full hover:bg-primary-dark">
              Join Plexus Today
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTAStrip
