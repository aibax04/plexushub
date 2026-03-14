import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, ArrowRight } from 'lucide-react'
import treatments from '../data/treatments'

function Membership() {
  // Show first 12 treatments on the homepage
  const displayTreatments = treatments.slice(0, 12)

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
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-2">
              <a
                href="#book"
                className="inline-flex items-center justify-center gap-1.5 whitespace-nowrap px-5 py-2.5 text-[13px] font-semibold text-white transition-all duration-300 bg-primary rounded-full hover:bg-primary-dark shadow-md hover:shadow-primary/30 active:scale-95"
              >
                Book Free Consultation
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
              <Link
                to="/treatments"
                className="inline-flex items-center justify-center whitespace-nowrap px-5 py-2.5 text-[13px] font-semibold text-text-muted transition-all duration-300 border border-border rounded-full hover:border-primary/30 hover:text-primary active:scale-95"
              >
                View All Treatments
              </Link>
            </div>
          </div>

          {/* Right Scrolling Content */}
          <div className="lg:w-[65%]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {displayTreatments.map((treatment) => (
                <div key={treatment.id} className="flex flex-col group bg-[#f8f8f9] rounded-2xl p-6 border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  {/* Icon & Tag */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white border border-border/50 flex items-center justify-center text-primary/80 shadow-sm group-hover:bg-primary/5 group-hover:border-primary/20 transition-colors">
                      <treatment.icon strokeWidth={1.2} className="w-5 h-5" />
                    </div>
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wide">
                      {treatment.tag}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg font-medium text-text mb-2 tracking-tight">{treatment.title}</h3>
                  <p className="text-text-muted text-[14px] leading-relaxed flex-1">{treatment.shortDesc}</p>
                  
                  <Link
                    to={`/treatments?open=${treatment.id}`}
                    className="inline-flex items-center gap-1.5 text-primary text-[13px] font-medium mt-4 group-hover:gap-2.5 transition-all hover:text-primary-dark"
                  >
                    Learn more <ArrowRight strokeWidth={1.5} className="w-3.5 h-3.5" />
                  </Link>
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
