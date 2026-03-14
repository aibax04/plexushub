import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { 
  ShieldCheck, 
  Cpu, 
  Users, 
  Clock, 
  Heart, 
  Sparkles, 
  ChevronRight, 
  ArrowLeft,
  Microscope,
  Stethoscope,
  Smile,
  Zap
} from 'lucide-react'

const features = [
  {
    icon: Microscope,
    title: 'Microscopic Root Canals',
    desc: 'We are Lucknow\'s first choice for microscopic dentistry. Working under 20x magnification means we find canals others miss and save teeth others would extract. Precision is our baseline.',
    tag: 'Gold Standard'
  },
  {
    icon: ShieldCheck,
    title: 'Zero Hidden Costs',
    desc: 'No "extra" charges for trays, sterilization, or standard materials. You get a typed, final treatment plan with a 100% price lock before we even begin.',
    tag: 'Transparency'
  },
  {
    icon: Zap,
    title: 'AI-Enhanced Diagnostics',
    desc: 'Our AI software analyzes your 3D scans with superhuman accuracy, detecting hidden decay or bone loss months before it becomes a painful emergency.',
    tag: 'Future-Proof'
  },
  {
    icon: Heart,
    title: 'Patient-First Ethics',
    desc: "We follow a 'Conservative First' approach. We never recommend a crown if a filling will suffice, and we never compromise on safety or material quality.",
    tag: 'Integrity'
  },
  {
    icon: Smile,
    title: 'Truly Painless Dentistry',
    desc: 'From advanced localized anesthesia to gentle-touch manual techniques, we are obsessed with patient comfort. Dental anxiety ends exactly here.',
    tag: 'Comfort'
  },
  {
    icon: Sparkles,
    title: 'Lifetime Guarantee',
    desc: 'Our implants and high-end restorations come with extended warranties. We stand by our work because we know the precision we put into it.',
    tag: 'Confidence'
  }
]

const stats = [
  { label: 'Clinical Experience', value: '15+ Years' },
  { label: 'Successful Smiles', value: '10,000+' },
  { label: 'Modern Technology', value: '100%' },
  { label: 'Patient Retention', value: '98%' }
]

const TerminalWindow = ({ title, tag, className = "" }) => (
  <div className={`group relative overflow-hidden rounded-[2.5rem] bg-white border border-border/80 shadow-sm flex flex-col ${className}`}>
    {/* Terminal Header */}
    <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-bg-alt/30">
      <div className="flex gap-2">
        <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/30" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/30" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/30" />
      </div>
      <div className="text-[10px] font-bold text-text-muted/50 uppercase tracking-widest">{tag}</div>
    </div>
    
    {/* Terminal Content Space */}
    <div className="flex-1 p-10 flex flex-col justify-end relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/[0.04] rounded-full blur-[60px] pointer-events-none group-hover:bg-primary/[0.08] transition-all duration-700" />
      <div className="relative z-10">
        <div className="w-10 h-0.5 bg-primary/30 mb-5 group-hover:w-16 transition-all duration-500" />
        <h4 className="text-text font-medium text-2xl tracking-tight group-hover:text-primary transition-colors duration-500">{title}</h4>
      </div>
    </div>
  </div>
)

function WhyChooseUsPage() {
  const facilityRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const scrollToFacility = (e) => {
    e.preventDefault()
    facilityRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-bg text-[#1D1D1F]">
      {/* Hero & Background Elements */}
      <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-24 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/[0.03] rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="mb-10 lg:mb-12 text-center lg:text-left">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-text-muted text-sm font-medium hover:text-primary transition-colors group"
            >
              <ArrowLeft strokeWidth={1.5} className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center text-center lg:text-left">
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest mb-6 border border-primary/20">
                Plexus Dental Advantage
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-text leading-[1.05] mb-8">
                The new standard <br className="hidden sm:block" /> 
                of dental care in 
                <br className="hidden sm:block" /> Ashiyana, Lucknow.
              </h1>
              <p className="text-text-muted text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
                Why settle for traditional guesswork? We combine world-class 
                microscopic technology with absolute price transparency to give you 
                the safest dental experience in the city.
              </p>
              <a 
                href="#facility" 
                onClick={scrollToFacility}
                className="inline-flex items-center gap-2 text-primary font-bold text-sm tracking-wide group"
              >
                Explore our facility
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="bg-white border border-border/80 rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-2xl sm:text-3xl font-bold text-primary mb-1">{stat.value}</span>
                  <span className="text-text-muted text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-center">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Facility Gallery Section */}
      <section ref={facilityRef} id="facility" className="py-16 sm:py-24 scroll-mt-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Main Feature - Top Left */}
            <TerminalWindow 
              title="Ashiyana Main Suite" 
              tag="Facility" 
              className="lg:col-span-2 lg:row-span-2 min-h-[400px] lg:min-h-[600px]" 
            />
            
            {/* Tech - Top Right */}
            <TerminalWindow 
              title="Zeiss Micro-Endodontics" 
              tag="Technology" 
              className="min-h-[280px]" 
            />

            {/* Safety - Mid Right */}
            <TerminalWindow 
              title="B-Class Sterilization" 
              tag="Safety" 
              className="min-h-[280px]" 
            />

            {/* Row 2 - Full Span Items */}
            <TerminalWindow 
              title="AI Diagnostic Center" 
              tag="Technology" 
              className="min-h-[320px]" 
            />
            <TerminalWindow 
              title="Consultation Hub" 
              tag="Facility" 
              className="min-h-[320px]" 
            />
            <TerminalWindow 
              title="Patient Comfort Lounge" 
              tag="Comfort" 
              className="min-h-[320px]" 
            />

            {/* Row 3 - Extended Feature */}
            <TerminalWindow 
              title="Digital Scanning Bay" 
              tag="Precision" 
              className="lg:col-span-3 min-h-[300px] lg:min-h-[400px]" 
            />
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-[#fafafa] border-y border-border/50">
        <div className="container mx-auto px-6 max-w-6xl text-center">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-primary/60 mb-12">The Plexus Promises</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
                <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-border/50 flex items-center justify-center text-primary mb-6 transition-transform hover:scale-110">
                        <Microscope strokeWidth={1.2} className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 tracking-tight">Microscopic Focus</h3>
                    <p className="text-text-muted text-sm leading-relaxed px-4">Treating what cannot be seen. 20x magnification for surgical-grade precision in every root canal.</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-border/50 flex items-center justify-center text-primary mb-6 transition-transform hover:scale-110">
                        <ShieldCheck strokeWidth={1.2} className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 tracking-tight">Honest Consultation</h3>
                    <p className="text-text-muted text-sm leading-relaxed px-4">No sales pitches. Just honest medical guidance and the most conservative treatment plans.</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-border/50 flex items-center justify-center text-primary mb-6 transition-transform hover:scale-110">
                        <Zap strokeWidth={1.2} className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 tracking-tight">Zero Pain Guarantee</h3>
                    <p className="text-text-muted text-sm leading-relaxed px-4">Utilizing the latest sedation and numbing protocols to ensure your visit is completely stress-free.</p>
                </div>
            </div>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="py-24 sm:py-32">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 sm:mb-20">
            <div className="max-w-xl">
              <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-text leading-[1.1] mb-4">
                Reasons why 10,000+ patients <br className="hidden sm:block" /> trust Plexus Dental.
              </h2>
              <p className="text-text-muted text-[15px]">
                We have built Lucknow's most advanced dental facility to ensure 
                you never have to choose between clinical excellence and physical comfort.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, i) => (
              <div key={i} className="group p-8 sm:p-10 rounded-[2.5rem] bg-white border border-border/60 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/[0.02] transition-all duration-500 hover:-translate-y-1">
                <div className="flex items-start justify-between mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-bg-alt flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors">
                        <feature.icon strokeWidth={1.2} className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-text-muted/60">{feature.tag}</span>
                </div>
                <h3 className="text-xl font-semibold text-text mb-4 tracking-tight">{feature.title}</h3>
                <p className="text-text-muted text-[14px] leading-relaxed line-clamp-4 group-hover:line-clamp-none transition-all duration-300">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section (Innovation) */}
      <section className="py-24 bg-dark-bg text-dark-text overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
            <div className="text-center mb-16 sm:mb-20">
                <h2 className="text-3xl sm:text-4xl font-medium mb-6 tracking-tight">The Plexus Difference</h2>
                <p className="text-dark-text-muted max-w-xl mx-auto">See how we compare to traditional neighborhood clinics in Lucknow.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <div className="bg-white/[0.02] p-8 sm:p-12">
                    <h4 className="text-primary font-bold uppercase tracking-widest text-xs mb-8">Traditional Clinics</h4>
                    <ul className="space-y-6">
                        {[
                            'Guess-work based diagnostics',
                            'No specialized microscopic view',
                            'Variable pricing and hidden "material" costs',
                            'Long wait times and crowded lounges',
                            'One-size-fits-all treatment approach'
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-4 text-dark-text-muted text-sm line-through decoration-red-500/50">
                                <ChevronRight className="w-4 h-4 text-red-500/50 flex-shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="bg-white/[0.05] p-8 sm:p-12 shadow-[inset_0_0_80px_rgba(1,72,128,0.15)] relative">
                    <div className="absolute top-8 right-8 hidden sm:block">
                        <div className="px-3 py-1 rounded-full bg-primary/20 text-primary text-[10px] font-bold border border-primary/30 uppercase tracking-widest">Selected Standard</div>
                    </div>
                    <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Plexus Dental Standard</h4>
                    <ul className="space-y-6">
                        {[
                            'AI-calculated, ultra-precise 3D diagnostics',
                            '20x Microscopic RCs & precision restoration',
                            '100% Fixed & Transparent upfront pricing',
                            'Guaranteed <15 minute waiting time',
                            'Bespoke care plans tailored to your timeline'
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-4 text-white text-sm">
                                <ShieldCheck className="w-4 h-4 text-primary flex-shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 sm:py-32">
        <div className="container mx-auto px-6 max-w-4xl text-center">
             <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-8">
                <Sparkles strokeWidth={1.2} className="w-10 h-10" />
             </div>
             <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight mb-8 tracking-tight">Ready to experience <br className="hidden sm:block" /> Lucknow's #1 dental care?</h2>
             <p className="text-text-muted text-lg mb-12 max-w-xl mx-auto">Stop worrying about your dental health and start your journey with a free comprehensive scan. Your first examination is on us.</p>
             <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#book"
                  className="px-8 py-4 bg-primary text-white font-bold rounded-full hover:scale-105 hover:bg-primary-dark transition-all duration-300 shadow-xl hover:shadow-primary/40 active:scale-95"
                >
                  Schedule Your Visit Now
                </a>
                <Link to="/visit" className="px-8 py-4 bg-white text-text font-semibold border border-border rounded-full hover:bg-bg-alt transition-all duration-300 active:scale-95">
                  Explore Clinic Location
                </Link>
             </div>
        </div>
      </section>
    </div>
  )
}

export default WhyChooseUsPage
