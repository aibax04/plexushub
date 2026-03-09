import React from 'react'

function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-surface p-8 rounded-2xl border border-border shadow-custom hover:shadow-lg-custom hover:-translate-y-1.5 transition-all duration-300 group">
      <div className="w-14 h-14 bg-primary/10 text-primary flex items-center justify-center text-2xl rounded-xl mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300" aria-hidden="true">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-text mb-3">{title}</h3>
      <p className="text-text-muted leading-relaxed text-sm lg:text-base">{description}</p>
    </div>
  )
}

export default ServiceCard
