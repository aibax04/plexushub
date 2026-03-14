import React from 'react'
import { Play, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: "Avantika",
    role: "PATIENT",
    treatment: "Invisalign",
    location: "Indiranagar",
    thumbnail: "/assets/testimonial-1.png",
    nameInImage: "AVANTIKA"
  },
  {
    id: 2,
    name: "Rohan",
    role: "PATIENT",
    treatment: "Root Canal",
    location: "Gomti Nagar",
    thumbnail: "/assets/testimonial-2.png",
    nameInImage: "ROHAN"
  },
  {
    id: 3,
    name: "Pulak",
    role: "PATIENT",
    treatment: "Dental Implants",
    location: "Aliganj",
    thumbnail: "/assets/testimonial-3.png",
    nameInImage: "PULAK"
  },
  {
    id: 4,
    name: "Priya",
    role: "PATIENT",
    treatment: "Clear Aligners",
    location: "Jankipuram",
    thumbnail: "/assets/testimonial-2.png",
    nameInImage: "PRIYA"
  },
  {
    id: 5,
    name: "Ayushi",
    role: "PATIENT",
    treatment: "Smile Makeover",
    location: "Hazratganj",
    thumbnail: "/assets/testimonial-1.png",
    nameInImage: "AYUSHI"
  },
  {
    id: 6,
    name: "Gurkiran",
    role: "PATIENT",
    treatment: "Laser Dentistry",
    location: "Ashiyana",
    thumbnail: "/assets/testimonial-3.png",
    nameInImage: "GURKIRAN"
  }
]

const TestimonialCard = ({ item }) => (
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
        alt={item.name}
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
    <section id="patient-speaks" className="bg-white py-20 sm:py-24 overflow-hidden border-t border-border/50 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[400px] bg-primary/[0.02] rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-widest mb-6 border border-primary/10">
            Success Stories
          </div>
          <h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-text mb-4">
            Patient Speaks
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            Hear from our community about how we're redefining <br className="hidden sm:block" /> dental excellence in Lucknow.
          </p>
        </div>

        {/* Vertical alignment - 3 per row on monitor, symmetric grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-10 lg:gap-x-14 mb-4">
          {testimonials.map((item) => (
            <TestimonialCard key={item.id} item={item} />
          ))}
        </div>

        <div className="flex justify-center">
            <button className="group relative flex items-center gap-6 py-4 px-8 transition-all duration-300 hover:scale-105 active:scale-95">
                <span className="text-[11px] font-black tracking-[0.3em] uppercase text-text group-hover:text-primary transition-colors">
                    View more Transformations
                </span>
                
                <div className="relative flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white border border-border group-hover:border-primary group-hover:bg-primary transition-all duration-500 ease-out" />
                    <ChevronRight className="absolute w-4 h-4 text-text group-hover:text-white group-hover:translate-x-1 transition-all duration-300 z-10" />
                </div>
                
                {/* Underline decoration */}
                <div className="absolute bottom-2 left-8 right-24 h-0.5 bg-primary/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </button>
        </div>
      </div>
    </section>
  )
}

export default PatientSpeaks
