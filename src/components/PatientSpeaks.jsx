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
    nameInImage: "AVANTIKA",
    offset: "lg:translate-y-4"
  },
  {
    id: 2,
    name: "Rohan",
    role: "PATIENT",
    treatment: "Root Canal",
    location: "Gomti Nagar",
    thumbnail: "/assets/testimonial-2.png",
    nameInImage: "ROHAN",
    offset: "lg:-translate-y-4"
  },
  {
    id: 3,
    name: "Pulak",
    role: "PATIENT",
    treatment: "Dental Implants",
    location: "Aliganj",
    thumbnail: "/assets/testimonial-3.png",
    nameInImage: "PULAK",
    offset: "lg:translate-y-4"
  },
  {
    id: 4,
    name: "Priya",
    role: "PATIENT",
    treatment: "Clear Aligners",
    location: "Jankipuram",
    thumbnail: "/assets/testimonial-2.png",
    nameInImage: "PRIYA",
    offset: "lg:-translate-y-4"
  },
  {
    id: 5,
    name: "Ayushi",
    role: "PATIENT",
    treatment: "Smile Makeover",
    location: "Hazratganj",
    thumbnail: "/assets/testimonial-1.png",
    nameInImage: "AYUSHI",
    offset: "lg:translate-y-4"
  },
  {
    id: 6,
    name: "Gurkiran",
    role: "PATIENT",
    treatment: "Laser Dentistry",
    location: "Ashiyana",
    thumbnail: "/assets/testimonial-3.png",
    nameInImage: "GURKIRAN",
    offset: "lg:-translate-y-4"
  }
]

const TestimonialCard = ({ item }) => (
  <div className={`flex-1 min-w-[200px] h-full group relative flex flex-col transition-all duration-700 ease-out hover:-translate-y-3 ${item.offset}`}>
    {/* Terminal-style Card */}
    <div className="relative aspect-[3/5] rounded-[2.5rem] overflow-hidden bg-white border border-border/60 shadow-sm group-hover:shadow-2xl group-hover:border-primary/30 transition-all duration-500">
      
      {/* Terminal Header */}
      <div className="absolute top-0 left-0 right-0 h-14 flex items-center justify-between px-6 bg-white/5 backdrop-blur-md z-20 border-b border-white/5">
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-red-400/30 group-hover:bg-red-400/60 transition-colors" />
          <div className="w-2 h-2 rounded-full bg-yellow-400/30 group-hover:bg-yellow-400/60 transition-colors" />
          <div className="w-2 h-2 rounded-full bg-green-400/30 group-hover:bg-green-400/60 transition-colors" />
        </div>
        <div className="text-[9px] font-bold text-white/40 uppercase tracking-[0.2em]">{item.treatment}</div>
      </div>

      {/* Image / Thumbnail */}
      <img 
        src={item.thumbnail} 
        alt={item.name}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" 
      />
      
      {/* Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent" />
      
      {/* Play Button - Centered */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-16 h-16 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center border border-white/20 transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:border-primary/50 shadow-2xl">
          <Play className="w-7 h-7 text-white fill-current translate-x-0.5" />
        </div>
      </div>

      {/* Bottom Text Overlays */}
      <div className="absolute bottom-10 left-8 right-8 z-10">
        <h3 className="text-white text-3xl font-medium tracking-tight mb-1 uppercase leading-none">{item.nameInImage}</h3>
        <p className="text-white/50 text-[10px] font-black tracking-[0.3em] uppercase">{item.role}</p>
      </div>
    </div>

    {/* Metadata below card */}
    <div className="mt-8 px-5 flex justify-between items-start">
      <div className="flex flex-col gap-1">
        <span className="text-base font-medium text-text tracking-tight leading-none group-hover:text-primary transition-colors">{item.name}</span>
        <span className="text-[11px] text-text-muted/70 font-medium uppercase tracking-wider">{item.location}</span>
      </div>
      <div className="text-right">
        <div className="px-2 py-0.5 rounded-full bg-primary/5 border border-primary/10">
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary">{item.treatment}</span>
        </div>
      </div>
    </div>
  </div>
)

function PatientSpeaks() {
  return (
    <section id="patient-speaks" className="bg-white py-32 sm:py-40 overflow-hidden border-t border-border/50 relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-primary/[0.02] rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-[1500px] relative z-10">
        
        <div className="text-center mb-24">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest mb-8 border border-primary/20">
            Real Patient Experiences
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-text mb-8">
            Patient Speaks
          </h2>
          <p className="text-text-muted text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Hear what our happy patients have to say about their <br className="hidden sm:block" /> treatments with Plexus Dental
          </p>
        </div>

        {/* Clean Balanced Row Layout */}
        <div className="flex flex-wrap lg:flex-nowrap gap-6 lg:gap-10 pb-20 items-center justify-center">
          {testimonials.map((item) => (
            <TestimonialCard key={item.id} item={item} />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button className="inline-flex items-center gap-4 py-4 px-10 rounded-full border border-border group transition-all duration-300 hover:border-primary hover:bg-primary/5 active:scale-95 shadow-sm">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-text group-hover:text-primary transition-colors">
              View More Success Stories
            </span>
            <div className="flex items-center">
                <div className="w-8 h-[1px] bg-border group-hover:bg-primary transition-all duration-300 group-hover:w-12" />
                <ChevronRight className="w-4 h-4 text-border group-hover:text-primary transition-colors -ml-1" />
            </div>
          </button>
        </div>
      </div>
    </section>
  )
}

export default PatientSpeaks
