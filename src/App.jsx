import React from 'react'
import { Header, Hero, Services, Membership, CTAStrip, Footer } from './components'

function App() {
  return (
    <>
      <Header />
      <main className="relative">
        {/* Full screen sticky hero */}
        <Hero />
        
        {/* The content that slides up and covers the hero */}
        <div className="relative z-10 bg-bg shadow-2xl rounded-t-[3rem]">
          <Services />
          <Membership />
          <CTAStrip />
          <Footer />
        </div>
      </main>
    </>
  )
}

export default App
