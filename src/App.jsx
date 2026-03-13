import React from 'react'
import { Header, Hero, Services, CTAStrip, Footer } from './components'

function App() {
  return (
    <>
      <Header />
      <main className="relative">
        {/* Full screen sticky hero */}
        <Hero />
        
        {/* The content that slides up and covers the hero */}
        <div className="relative z-10 bg-bg shadow-2xl overflow-hidden rounded-t-[3rem]">
          <Services />
          <CTAStrip />
          <Footer />
        </div>
      </main>
    </>
  )
}

export default App
