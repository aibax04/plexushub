import React from 'react'

function Doctor() {
  return (
    <section id="doctor" className="bg-white py-24 sm:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Imagery */}
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/10 rounded-[2rem] transform rotate-3 transition-transform duration-500 group-hover:rotate-6"></div>
            <div className="relative aspect-[4/5] bg-[#f4f4f5] rounded-[2rem] overflow-hidden border border-border shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80" 
                alt="Chief Dental Surgeon" 
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-6 left-6 right-6 glass-dark p-6 rounded-2xl flex items-center justify-between">
                <div>
                  <h4 className="text-xl font-medium text-white">Chief Dental Surgeon</h4>
                  <p className="text-sm text-white/70">15+ Years Clinical Excellence</p>
                </div>
              </div>
            </div>
          </div>

          {/* Typography & Copy */}
          <div className="flex flex-col items-start text-left">
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6 border border-primary/20">
              Clinical Leadership
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-text tracking-tight leading-[1.1] mb-8">
              Redefining the standard of oral care in Lucknow.
            </h2>
            
            <p className="text-lg text-text-muted mb-6 leading-relaxed">
              "My philosophy has always been simple: treat the patient, not just the tooth. We built this clinic to eliminate dental anxiety by merging world-class microscopic technology with genuine, empathetic care."
            </p>
            
            <div className="h-px w-full bg-border my-8"></div>
            
            <ul className="space-y-4 mb-10 text-text-muted text-[15px]">
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                Specialist in Microscopic Endodontics (Painless RCT)
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                Master Certified in Aesthetic Smile Designing & Veneers
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                Advanced training in minimally invasive completely painless implantology
              </li>
            </ul>

            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Signature_of_John_Hancock.svg" 
              alt="Signature" 
              className="h-12 opacity-40 hover:opacity-80 transition-opacity filter invert mb-8" 
            />
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Doctor
