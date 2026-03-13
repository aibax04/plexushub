import React from 'react'
import { ChevronRight } from 'lucide-react'

function CTAStrip() {
  return (
    <section id="how-it-works" className="py-32 bg-dark-bg text-dark-text relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-20 text-center md:text-left">
          Your journey to a perfect smile
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          <div className="flex flex-col">
            <div className="w-8 h-8 rounded-sm bg-primary text-white flex items-center justify-center font-bold mb-6 text-sm">1</div>
            <h3 className="text-xl font-medium mb-3">Book your consultation</h3>
            <p className="text-dark-text-muted text-sm leading-relaxed">Schedule a convenient time at our Ashiyana clinic. Our friendly front-desk team will ensure zero wait time upon your arrival.</p>
          </div>
          <div className="flex flex-col">
            <div className="w-8 h-8 rounded-sm bg-primary text-white flex items-center justify-center font-bold mb-6 text-sm">2</div>
            <h3 className="text-xl font-medium mb-3">Comprehensive diagnosis</h3>
            <p className="text-dark-text-muted text-sm leading-relaxed">We utilize advanced intraoral cameras and low-radiation digital X-rays to transparently show you exactly what needs attention.</p>
          </div>
          <div className="flex flex-col">
            <div className="w-8 h-8 rounded-sm bg-primary text-white flex items-center justify-center font-bold mb-6 text-sm">3</div>
            <h3 className="text-xl font-medium mb-3">Begin painless treatment</h3>
            <p className="text-dark-text-muted text-sm leading-relaxed">Relax in our ergonomic chairs while our highly experienced specialists execute your tailored treatment plan with zero discomfort.</p>
          </div>
        </div>

        <div className="bg-dark-surface border border-dark-border rounded-[2rem] p-12 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-medium mb-6 tracking-tight">Ready to transform your smile?</h3>
            <p className="text-dark-text-muted mb-10 max-w-lg mx-auto">Skip the dental anxiety and outdated clinics. Experience the highest standard of painless dentistry in Lucknow today.</p>
            <a href="#book" className="group inline-flex items-center justify-center px-8 py-4 font-medium text-white transition-all duration-300 bg-primary rounded-full hover:scale-105">
              Book an Appointment
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTAStrip
