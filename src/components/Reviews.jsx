import React from 'react'
import { Star, ArrowRight } from 'lucide-react'

const testimonials = [
  {
    name: "Ravi Kumar",
    role: "Business Owner, Aliganj",
    text: "I had been avoiding a root canal for 2 years out of fear. Plexus did it in one sitting and I genuinely felt zero pain. Genuinely shocked. I've sent my entire family here since.",
    rating: 5,
  },
  {
    name: "Sneha Agarwal",
    role: "IT Professional, Gomti Nagar",
    text: "The clear aligners changed my life. They showed me a 3D simulation of my final smile before I even started. 8 months later - exactly as promised. Worth every rupee.",
    rating: 5,
  },
  {
    name: "Dr. Ananya Verma",
    role: "Medical Practitioner, Lucknow",
    text: "As a doctor, I judge clinics on hygiene and ethics. Plexus is genuinely world-class on both. No unnecessary treatments, no scare tactics. Just honest, excellent dentistry.",
    rating: 5,
  },
  {
    name: "Mohd. Arif",
    role: "College Student, Ashiyana",
    text: "Got my wisdom tooth removed here. Was terrified. The doctor was so calm and gentle, it was done before I even realised. The aftercare instructions were super detailed too.",
    rating: 5,
  },
  {
    name: "Neha Srivastava",
    role: "Homemaker, Indira Nagar",
    text: "My 5-year-old daughter actually asks to go to the dentist now. The kids' area, the gentle handling, the stickers afterwards - they've thought of everything. Can't recommend enough.",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    role: "Retired Officer, Ashiyana",
    text: "Got dental implants for two missing teeth. The whole process was explained step by step. After 3 months, I can eat everything again. Feels completely natural. Life-changing.",
    rating: 5,
  }
]

function Reviews() {
  return (
    <section id="reviews" className="bg-[#f4f4f5] py-24 sm:py-32 border-t border-border/50">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6 border border-primary/20">
              Patient Stories
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-text leading-[1.1]">
              Real patients. <br className="hidden sm:block" />Real transformations.
            </h2>
          </div>
          <a href="https://g.co/kgs/yourlink" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline whitespace-nowrap">
            See all reviews on Google <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((review, idx) => (
            <div key={idx} className="bg-white p-7 rounded-2xl shadow-sm text-left flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300 border border-border/50">
              <div>
                <div className="flex mb-4">
                  {Array.from({ length: review.rating }).map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-text leading-relaxed text-[15px] mb-6">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-3 border-t border-border pt-5">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-border/30 flex items-center justify-center font-bold text-primary text-sm">
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
