import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Header, ScrollToTop, Footer, PageWrapper, WhatsAppButton, ScrollToHash } from './components'
import HomePage from './pages/HomePage'
import TreatmentsPage from './pages/TreatmentsPage'
import VisitClinicPage from './pages/VisitClinicPage'
import WhyChooseUsPage from './pages/WhyChooseUsPage'

function App() {
  const location = useLocation()
  return (
    <>
      <Header />
      <PageWrapper>
        <ScrollToHash />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/treatments" element={<TreatmentsPage />} />
          <Route path="/visit" element={<VisitClinicPage />} />
          <Route path="/why-choose-us" element={<WhyChooseUsPage />} />
        </Routes>
        
        {/* Global Footer for all pages EXCEPT Home (which handles its own for the shadow effect) */}
        {location.pathname !== '/' && <Footer />}
      </PageWrapper>
      <WhatsAppButton />
      <ScrollToTop />
    </>
  )
}

export default App
