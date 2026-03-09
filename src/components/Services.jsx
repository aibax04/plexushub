import React from 'react'
import ServiceCard from './ServiceCard'
import { services } from '../data/services'

function Services() {
  return (
    <section id="services" className="py-24 bg-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-text mb-4 tracking-tight">What we offer</h2>
          <p className="text-text-muted text-lg max-w-lg mx-auto leading-relaxed">
            Comprehensive dental care tailored for the whole family, from prevention to aesthetics.
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
