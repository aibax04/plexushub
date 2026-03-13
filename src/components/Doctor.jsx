import React from 'react'
import { Award, GraduationCap, Heart } from 'lucide-react'

function Doctor() {
  return (
    <section id="doctor" className="bg-white py-24 sm:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Imagery */}
          <div className="relative group order-2 lg:order-1">
            <div className="absolute inset-0 bg-primary/10 rounded-[2rem] transform rotate-3 transition-transform duration-500 group-hover:rotate-1"></div>
            <div className="relative aspect-[4/5] bg-[#f4f4f5] rounded-[2rem] overflow-hidden border border-border shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80" 
                alt="Chief Dental Surgeon at Plexus Dental Ashiyana Lucknow" 
                className="w-full h-full object-cover filter grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
              />
              {/* Credentials overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8">
                <h4 className="text-2xl font-medium text-white mb-1">Dr. [Your Name]</h4>
                <p className="text-white/70 text-sm">BDS, MDS - Chief Dental Surgeon</p>
                <p className="text-white/50 text-xs mt-1">15+ Years · 10,000+ Procedures</p>
              </div>
            </div>
          </div>

          {/* Typography & Copy */}
          <div className="flex flex-col items-start text-left order-1 lg:order-2">
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6 border border-primary/20">
              Meet Your Doctor
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-text tracking-tight leading-[1.1] mb-8">
              The hands you trust <br className="hidden sm:block" />with your smile
            </h2>
            
            <p className="text-[17px] text-text-muted mb-4 leading-relaxed italic">
              &ldquo;I don&rsquo;t just fix teeth. I listen to your fears, understand your goals, and build a treatment plan that respects both. No upselling. No rush. Just honest, exceptional dentistry.&rdquo;
            </p>
            
            <div className="h-px w-full bg-border my-8"></div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full mb-10">
              <div className="flex flex-col items-start gap-2">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <p className="text-sm font-medium text-text">Fellowship in Implantology</p>
                <p className="text-xs text-text-muted">Advanced surgical implant training</p>
              </div>
              <div className="flex flex-col items-start gap-2">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <p className="text-sm font-medium text-text">Smile Design Certified</p>
                <p className="text-xs text-text-muted">International aesthetic certification</p>
              </div>
              <div className="flex flex-col items-start gap-2">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Heart className="w-5 h-5 text-primary" />
                </div>
                <p className="text-sm font-medium text-text">Paediatric Specialist</p>
                <p className="text-xs text-text-muted">Gentle care for anxious kids</p>
              </div>
            </div>

            <a href="#book" className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-full hover:scale-105 transition-all shadow-md text-sm">
              Book with Dr. [Your Name] →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Doctor
