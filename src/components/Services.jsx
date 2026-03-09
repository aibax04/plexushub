import React from 'react'
import ServiceCard from './ServiceCard'
import { services } from '../data/services'

function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-header">
          <h2>What we offer</h2>
          <p>Comprehensive dental care for the whole family.</p>
        </div>
        <div className="services-grid">
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
