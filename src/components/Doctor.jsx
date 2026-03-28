import React from 'react'
import { Award, GraduationCap, Heart, CheckCircle2 } from 'lucide-react'
import { useConsultationBooking } from '../context/ConsultationBookingContext'

const doctors = [
  {
    name: "Dr. Ashish Kumar",
    role: "BDS, Implantologist, Specialized in Aesthetic Dentistry",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80",
    stats: "15+ Years · 10,000+ Procedures",
    specialties: ["Implantology", "Aesthetic Dentistry"]
  },
  {
    name: "Dr. Deepika Rajoria",
    role: "BDS, Specialized in Aesthetic Dentistry",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80",
    stats: "12+ Years · 8,000+ Procedures",
    specialties: ["Aesthetic Dentistry", "Smile Design"]
  }
]

function Doctor() {
  const { openConsultationModal } = useConsultationBooking()

  return (
    <section id="doctor" className="bg-white py-24 sm:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6 border border-primary/20">
            Meet Your Doctors
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-text tracking-tight leading-[1.1] max-w-2xl">
            The hands you trust <br className="hidden sm:block" />with your smile
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {doctors.map((doc, idx) => (
            <div key={idx} className="group relative flex flex-col">
              {/* Image Container */}
              <div className="relative aspect-[4/5] bg-[#f4f4f5] rounded-[2rem] overflow-hidden border border-border shadow-md mb-8">
                <img 
                  src={doc.image} 
                  alt={`${doc.name} - ${doc.role} at Plexus Dental`} 
                  className="w-full h-full object-cover filter grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-8 flex flex-col justify-end">
                  <h4 className="text-2xl font-medium text-white mb-1">{doc.name}</h4>
                  <p className="text-white/70 text-sm mb-1">{doc.role}</p>
                  <p className="text-white/50 text-xs font-light tracking-wide">{doc.stats}</p>
                </div>
              </div>

              {/* Specializations Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {doc.specialties.map((spec, sIdx) => (
                  <span key={sIdx} className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/5 text-primary text-[11px] font-medium border border-primary/10">
                    <CheckCircle2 className="w-3 h-3" />
                    {spec}
                  </span>
                ))}
              </div>

              <button
                type="button"
                onClick={openConsultationModal}
                className="inline-flex items-center justify-center px-6 py-3 bg-white border border-border text-text font-medium rounded-full hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm text-sm group-hover:scale-105 group-hover:shadow-primary/30 active:scale-95"
              >
                Book Consultation with {doc.name.split(' ')[1]} →
              </button>
            </div>
          ))}
        </div>

        {/* Philosophy Block */}
        <div className="mt-20 p-8 sm:p-12 bg-[#f8f8f9] rounded-[2.5rem] border border-border/50 text-center max-w-4xl mx-auto">
          <p className="text-lg sm:text-xl text-text-muted leading-relaxed font-light">
            &ldquo;We don&rsquo;t just fix teeth. We listen to your fears, understand your goals, and build a treatment plan that respects both. No upselling. No rush. Just honest, exceptional dentistry by experts who care.&rdquo;
          </p>
          <div className="flex items-center justify-center gap-8 mt-10 opacity-60">
            <div className="flex flex-col items-center gap-2">
              <GraduationCap className="w-6 h-6 text-primary" />
              <span className="text-[10px] uppercase font-bold tracking-widest">Post-Graduate MDs</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Award className="w-6 h-6 text-primary" />
              <span className="text-[10px] uppercase font-bold tracking-widest">Board Certified</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Heart className="w-6 h-6 text-primary" />
              <span className="text-[10px] uppercase font-bold tracking-widest">Paediatric Safe</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Doctor
