import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Header, ScrollToTop, Footer } from './components'
import HomePage from './pages/HomePage'
import TreatmentsPage from './pages/TreatmentsPage'
import VisitClinicPage from './pages/VisitClinicPage'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/treatments" element={
          <>
            <TreatmentsPage />
            <Footer />
          </>
        } />
        <Route path="/visit" element={
          <>
            <VisitClinicPage />
            <Footer />
          </>
        } />
      </Routes>
      <ScrollToTop />
    </>
  )
}

export default App
