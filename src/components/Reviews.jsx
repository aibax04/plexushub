import React from 'react'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: "Ravi Kumar",
    role: "Local Resident, ALiganj",
    text: "Plexus Dental transformed my smile exactly how I always dreamt. I used to be terrified of the dentist—they did a full root canal and I literally felt zero pain. Insane precision.",
  },
  {
    name: "Sneha Singh",
    role: "IT Professional, Gomti Nagar",
    text: "The technology here is unlike any other clinic in Lucknow. They showed me my 3D scan on an iPad and explained every step of my clear aligner treatment. Highly recommended.",
  },
  {
    name: "Dr. Ananya V.",
    role: "Medical Practitioner",
    text: "As a doctor myself, I am very critical of hygiene protocols. The sterilization here is absolutely impeccable. A world-class dental facility right here in Ashiyana.",
  }
]

function Reviews() {
  return (
    <section id="reviews" className="bg-[#f4f4f5] py-24 sm:py-32 border-t border-border/50">
      <div className="container mx-auto px-6 max-w-6xl text-center">
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-16 text-text max-w-2xl mx-auto">
          Don't just take our word for it
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((review, idx) => (
            <div key={idx} className="bg-white p-8 rounded-[2rem] shadow-sm text-left flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300 border border-border/50">
              <div className="flex mb-6">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-text leading-relaxed font-medium text-[16px] mb-8">
                “{review.text}”
              </p>
              <div className="flex items-center gap-4 border-t border-border pt-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-border/30 flex items-center justify-center font-bold text-primary">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-text text-sm tracking-tight">{review.name}</h4>
                  <p className="text-xs text-text-muted">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews
