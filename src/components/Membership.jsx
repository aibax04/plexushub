import React from 'react'
import { ChevronRight } from 'lucide-react'

const treatments = [
  {
    title: "Painless Root Canal (RCT)",
    desc: "Single-sitting, microscope-assisted root canals. You won't feel a thing - we guarantee it. Save your natural tooth instead of pulling it.",
    tag: "Most Popular",
  },
  {
    title: "Dental Implants",
    desc: "Missing a tooth? Our titanium implants look, feel, and function exactly like real teeth. Permanent. No adhesives. No compromise.",
    tag: "Permanent Fix",
  },
  {
    title: "Clear Aligners & Braces",
    desc: "Straighten your teeth invisibly. Custom-moulded clear aligners for adults, or colour braces that kids actually love wearing.",
    tag: "Adults & Kids",
  },
  {
    title: "Smile Makeover",
    desc: "Veneers, bonding, whitening, and gum contouring - combined into one comprehensive plan that delivers a red-carpet smile.",
    tag: "Cosmetic",
  },
  {
    title: "Kids Dentistry",
    desc: "We turn scary dentist visits into fun adventures. Fluoride treatments, sealants, and cavity care designed for tiny humans.",
    tag: "Child-Friendly",
  },
  {
    title: "Gum Disease Treatment",
    desc: "Bleeding when you brush? Don't ignore it. Our laser-assisted deep cleaning halts gum disease before it causes tooth loss.",
    tag: "Preventive",
  },
  {
    title: "Teeth Whitening",
    desc: "Professional in-office whitening that's 8x stronger than strips. Visibly whiter teeth in a single 45-minute session.",
    tag: "Quick Results",
  },
  {
    title: "Wisdom Tooth Extraction",
    desc: "Impacted or painful wisdom teeth? We remove them with surgical precision under local anaesthesia. Minimal swelling, fast recovery.",
    tag: "Same-Day",
  }
]

function Membership() {
  return (
    <section id="treatments" className="bg-bg py-24 sm:py-32 relative z-10 border-t border-border/50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative items-start">
          
          {/* Left Sticky Sidebar */}
          <div className="lg:w-[35%] lg:sticky lg:top-32 self-start">
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6 border border-primary/20">
              Our Treatments
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight mb-6 text-text leading-[1.1]">
              Everything your smile needs. Under one roof.
            </h2>
            <p className="text-text-muted mb-4 text-[15px] leading-relaxed">
              From a simple cleaning to a complete smile transformation - our Ashiyana clinic handles it all. No referrals needed. No running between specialists.
            </p>
            <p className="text-text font-medium text-[15px] mb-8">
              Every treatment includes a free consultation and transparent pricing. No surprises.
            </p>
            <a href="#book" className="inline-flex items-center justify-center px-6 py-3 font-medium text-white transition-all duration-300 bg-primary rounded-full hover:scale-105 shadow-md">
              <span className="text-[15px]">Book a Free Consultation</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </div>

          {/* Right Scrolling Content */}
          <div className="lg:w-[65%]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {treatments.map((treatment, idx) => (
                <div key={idx} className="flex flex-col group bg-[#f8f8f9] rounded-2xl p-6 border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  {/* Tag */}
                  <span className="inline-block self-start px-3 py-1 rounded-full bg-primary/10 text-primary text-[11px] font-bold uppercase tracking-wide mb-4">
                    {treatment.tag}
                  </span>
                  
                  {/* Content */}
                  <h3 className="text-lg font-medium text-text mb-2 tracking-tight">{treatment.title}</h3>
                  <p className="text-text-muted text-[14px] leading-relaxed flex-1">{treatment.desc}</p>
                  
                  <a href="#book" className="inline-flex items-center gap-1 text-primary text-sm font-medium mt-4 group-hover:gap-2 transition-all">
                    Book this treatment <ChevronRight className="w-3.5 h-3.5" />
                  </a>
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
