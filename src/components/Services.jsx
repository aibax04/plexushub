import React from 'react'
import ServiceCard from './ServiceCard'
import { services } from '../data/services'

function Services() {
  return (
    <section id="services" className="py-32 bg-surface relative overflow-hidden">
      {/* Decorative accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-primary/20 blur-sm rounded-full" />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-24 max-w-2xl mx-auto">
          <div className="text-primary font-bold text-xs uppercase tracking-widest mb-4">The Portfolio</div>
          <h2 className="text-4xl md:text-6xl font-serif text-text mb-6 tracking-tight">Bespoke Dental <span className="italic text-primary">Artistry</span></h2>
          <p className="text-text-muted text-xl leading-relaxed">
            From subtle refinements to complete transformations. Experience the intersection of advanced technology and master clinical skill.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
