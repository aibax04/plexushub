import React from 'react'
import { ChevronRight } from 'lucide-react'

const features = [
  {
    title: "Painless Root Canal Treatment (RCT)",
    desc: "Single-sitting microscopic RCT designed to save your natural tooth with zero discomfort.",
  },
  {
    title: "Dental Implants & Prosthetics",
    desc: "Permanent, natural-looking tooth replacements to complete your smile and restore full chewing function.",
  },
  {
    title: "Orthodontics & Invisible Braces",
    desc: "Straighten your teeth seamlessly with clear aligners or traditional braces customized for adults and children.",
  },
  {
    title: "Aesthetic Smile Designing",
    desc: "Veneers, professional teeth whitening, and cosmetic procedures crafted to give you a flawless, radiant smile.",
  },
  {
    title: "Pediatric Dentistry (Kids Care)",
    desc: "Gentle, child-friendly care creating positive dental experiences and building life-long healthy habits.",
  },
  {
    title: "Periodontal (Gum) Therapy",
    desc: "Advanced laser treatments and deep scaling to treat bleeding gums, bad breath, and prevent tooth loss.",
  }
]

function Membership() {
  return (
    <section id="treatments" className="bg-bg py-24 sm:py-32 relative z-10 border-t border-border/50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative items-start">
          
          {/* Left Sticky Sidebar */}
          <div className="lg:w-[35%] lg:sticky lg:top-32 self-start">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 text-text">
              Comprehensive dental care, all under one roof
            </h2>
            <p className="text-lg font-medium text-text mb-2 tracking-tight">
              Your smile deserves the best.
            </p>
            <p className="text-text-muted mb-8 text-[15px] leading-relaxed">
              From routine cleanings to advanced dental implants, our Ashiyana clinic is equipped to handle your family's complete oral health needs with precision and care.
            </p>
            <a href="#book" className="inline-flex items-center justify-center px-6 py-3 font-medium text-white transition-all duration-300 bg-primary rounded-full hover:bg-primary-dark shadow-md hover:shadow-lg hover:scale-105">
              <span className="text-[15px]">Book a Consultation</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </div>

          {/* Right Scrolling Content */}
          <div className="lg:w-[65%]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-16">
              {features.map((feature, idx) => (
                <div key={idx} className="flex flex-col group">
                  {/* Image Placeholder mimicking physical product / UI */}
                  <div className="w-full aspect-[4/3] sm:aspect-square rounded-[2rem] bg-[#f8f8f9] mb-6 relative overflow-hidden transition-transform duration-500 group-hover:scale-[1.02] border border-border/60 shadow-sm flex items-center justify-center">
                    {/* Abstract design element */}
                    <div className="w-3/4 h-3/4 rounded-xl bg-white shadow-xl border border-white/50 flex flex-col justify-between p-6 opacity-90 transition-transform duration-700 group-hover:-translate-y-2">
                      <div className="w-1/3 h-2 bg-border rounded-full"></div>
                      <div className="flex justify-between items-end">
                        <div className="w-8 h-8 rounded-full bg-primary/10"></div>
                        <div className="w-1/2 h-20 bg-gradient-to-br from-bg-alt to-border/30 rounded-lg"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg font-medium text-text mb-2 tracking-tight">{feature.title}</h3>
                  <p className="text-text-muted text-[15px] leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Membership
