import React from 'react'

function ServiceCard({ icon, title, description }) {
  return (
    <div className="group relative bg-white p-10 rounded-3xl border border-border shadow-custom hover:shadow-2xl-custom hover:-translate-y-2 transition-all duration-500 overflow-hidden">
      {/* Decorative background element on hover */}
      <div className="absolute top-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      
      <div className="w-16 h-16 bg-primary/5 text-primary flex items-center justify-center text-3xl rounded-[20px] mb-8 group-hover:bg-primary group-hover:text-white group-hover:rotate-6 transition-all duration-500" aria-hidden="true">
        {icon}
      </div>
      <h3 className="text-2xl font-serif text-text mb-4 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-text-muted leading-relaxed text-sm lg:text-base font-light">{description}</p>
    </div>
  )
}

export default ServiceCard
