import React, { useEffect } from 'react'
import { Hero, Services, Doctor, Membership, PatientSpeaks, Reviews, CTAStrip, Footer } from '../components'
import { patientSpeaksPreloadUrls } from '../data/patientSpeaks'

function HomePage() {
  useEffect(() => {
    const links = patientSpeaksPreloadUrls.map((href) => {
      const l = document.createElement('link')
      l.rel = 'preload'
      l.as = 'image'
      l.href = href
      document.head.appendChild(l)
      return l
    })
    return () => {
      links.forEach((el) => el.remove())
    }
  }, [])

  return (
    <main className="relative">
      <Hero />
      
      <div className="relative z-10 bg-bg shadow-2xl rounded-t-[3rem]">
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
