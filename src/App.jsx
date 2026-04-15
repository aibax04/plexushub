import React, { lazy, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Header, ScrollToTop, Footer, PageWrapper, WhatsAppButton, ScrollToHash } from './components'

const HomePage = lazy(() => import('./pages/HomePage'))
const TreatmentsPage = lazy(() => import('./pages/TreatmentsPage'))
const VisitClinicPage = lazy(() => import('./pages/VisitClinicPage'))
const WhyChooseUsPage = lazy(() => import('./pages/WhyChooseUsPage'))
const BlogPage = lazy(() => import('./pages/BlogPage'))
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'))

function App() {
  const location = useLocation()
  return (
    <>
      <Header />
      <PageWrapper>
        <ScrollToHash />
        <Suspense fallback={<div className="min-h-screen" />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/treatments" element={<TreatmentsPage />} />
            <Route path="/visit" element={<VisitClinicPage />} />
            <Route path="/why-choose-us" element={<WhyChooseUsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          </Routes>
        </Suspense>
        
        {/* Global Footer for all pages EXCEPT Home (which handles its own for the shadow effect) */}
        {location.pathname !== '/' && <Footer />}
      </PageWrapper>
      <WhatsAppButton />
      <ScrollToTop />
    </>
  )
}

export default App
