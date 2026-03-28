import React from 'react'
import { Hero, Services, Doctor, Membership, PatientSpeaks, Reviews, CTAStrip, Footer } from '../components'

function HomePage() {
  return (
    <main className="relative">
      <Hero />
      
      <div className="relative z-10 -mt-10 sm:-mt-14 bg-bg shadow-2xl rounded-t-[3rem]">
        <Services />
        <Doctor />
        <Membership />
        <PatientSpeaks />
        <Reviews />
        <CTAStrip />
        <Footer />
      </div>
    </main>
  )
}

export default HomePage
