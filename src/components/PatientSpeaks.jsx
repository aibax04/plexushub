import React from 'react'
import { Play, ChevronRight } from 'lucide-react'
import { patientSpeaksStories as testimonials } from '../data/patientSpeaks'

const TestimonialCard = ({ item, priority }) => (
  <div className="group relative flex flex-col transition-all duration-500 ease-out hover:-translate-y-2">
    {/* Vertical Terminal Card */}
    <div className="relative aspect-[3/4.5] rounded-[3rem] overflow-hidden bg-white border border-border/60 shadow-sm group-hover:shadow-2xl group-hover:border-primary/30 transition-all duration-500">
      
      {/* Terminal Header */}
      <div className="absolute top-0 left-0 right-0 h-14 flex items-center justify-between px-8 bg-black/10 backdrop-blur-md z-20 border-b border-white/5">
        <div className="flex gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-red-400/60 group-hover:bg-red-400/80 transition-colors" />
          <div className="w-1.5 h-1.5 rounded-full bg-yellow-400/60 group-hover:bg-yellow-400/80 transition-colors" />
          <div className="w-1.5 h-1.5 rounded-full bg-green-400/60 group-hover:bg-green-400/80 transition-colors" />
        </div>
        <div className="text-[9px] font-bold text-white/90 uppercase tracking-[0.25em] drop-shadow-sm">{item.treatment}</div>
      </div>

      {/* Image / Thumbnail */}
      <img
        src={item.thumbnail}
        alt={`${item.name} - patient story at Plexus Dental`}
        width={800}
        height={1200}
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        decoding="async"
        fetchPriority={priority ? 'high' : 'low'}
        loading={priority ? 'eager' : 'lazy'}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
      />
      
      {/* Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent opacity-100 z-10" />
      
      {/* Play Button */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
        <div className="w-16 h-16 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center border border-white/20 transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:border-primary/50 shadow-2xl pointer-events-auto">
          <Play className="w-7 h-7 text-white fill-current translate-x-0.5" />
        </div>
      </div>

      {/* Hero Name / Role */}
      <div className="absolute bottom-10 left-8 right-8 z-20">
        <h3 className="text-white text-3xl font-medium tracking-tight mb-1 uppercase leading-none">{item.nameInImage}</h3>
        <p className="text-white/50 text-[10px] font-black tracking-[0.3em] uppercase">{item.role}</p>
      </div>
    </div>

    {/* Info Box */}
    <div className="mt-8 px-6 flex justify-between items-center">
      <div className="flex flex-col gap-1.5">
        <span className="text-lg font-medium text-text tracking-tight leading-none group-hover:text-primary transition-colors">{item.name}</span>
        <span className="text-[10px] text-text-muted/70 font-bold uppercase tracking-widest">{item.location}</span>
      </div>
      <div className="text-right">
        <div className="px-3 py-1 rounded-full bg-primary/5 border border-primary/10">
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary">{item.treatment}</span>
        </div>
      </div>
    </div>
  </div>
)

function PatientSpeaks() {
  return (
    <section id="patient-speaks" className="bg-white py-16 sm:py-20 overflow-hidden border-t border-border/50 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[300px] bg-primary/[0.02] rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-widest mb-4 border border-primary/10">
            Success Stories
          </div>
          <h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-text mb-3">
            Patient Speaks
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            Real experiences from the Plexus Dental community.
          </p>
        </div>

        {/* Symmetric 3-column grid with reduced margin */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-10 lg:gap-x-14 mb-8">
          {testimonials.map((item, i) => (
            <TestimonialCard key={item.id} item={item} priority={i < 3} />
          ))}
        </div>

        <div className="flex justify-center mt-12 md:mt-16">
            <button className="group relative flex items-center gap-10 py-4 px-10 bg-white border border-border rounded-[2rem] overflow-hidden transition-all duration-500 hover:border-primary/40 active:scale-95 shadow-sm hover:shadow-2xl hover:shadow-primary/5">
                {/* Subtle Moving Portal effect */}
                <div className="absolute -right-8 top-1/2 -translate-y-1/2 w-24 h-24 bg-primary/[0.04] rounded-full scale-0 group-hover:scale-150 transition-transform duration-1000 ease-out" />
                
                <div className="relative z-10 flex items-center gap-8">
                    <span className="text-[11px] font-black tracking-[0.3em] uppercase text-text group-hover:text-primary transition-colors whitespace-nowrap leading-none">
                        View 50+ Stories
                    </span>
                    
                    <div className="relative flex items-center justify-center w-10 h-10">
                        {/* Interactive Rotating Outer Frame */}
                        <div className="absolute inset-0 rounded-full border border-border group-hover:border-primary group-hover:rotate-180 transition-all duration-1000 ease-in-out" />
                        
                        {/* Minimalist Arrow with dynamic slide */}
                        <div className="absolute w-5 h-[1px] bg-border group-hover:bg-primary group-hover:w-8 transition-all duration-500" />
                        <ChevronRight className="relative w-4 h-4 text-text group-hover:text-primary group-hover:translate-x-1 transition-all duration-500" />
                    </div>
                </div>
                
                {/* Vertical Scanner light effect */}
                <div className="absolute inset-0 w-1 h-full bg-primary/20 -translate-x-full group-hover:translate-x-[1500%] transition-transform duration-1000 ease-in-out" />
            </button>
        </div>
      </div>
    </section>
  )
}

export default PatientSpeaks
