import React from 'react'
import { Header, Hero, Services, Doctor, Membership, Reviews, CTAStrip, Footer, ScrollToTop } from './components'

function App() {
  return (
    <>
      <Header />
      <main className="relative">
        <Hero />
        
        <div className="relative z-10 bg-bg shadow-2xl rounded-t-[3rem]">
          <Services />
          <Doctor />
          <Membership />
          <Reviews />
          <CTAStrip />
          <Footer />
        </div>
      </main>
      <ScrollToTop />
    </>
  )
}

export default App
