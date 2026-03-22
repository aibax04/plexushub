import React, { createContext, useCallback, useContext, useMemo, useState } from 'react'
import ConsultationModal from '../components/ConsultationModal'

const ConsultationBookingContext = createContext(null)

export function ConsultationBookingProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)

  const openConsultationModal = useCallback(() => setIsOpen(true), [])
  const closeConsultationModal = useCallback(() => setIsOpen(false), [])

  const value = useMemo(
    () => ({
      openConsultationModal,
      closeConsultationModal,
      isConsultationModalOpen: isOpen,
    }),
    [openConsultationModal, closeConsultationModal, isOpen]
  )

  return (
    <ConsultationBookingContext.Provider value={value}>
      {children}
      <ConsultationModal isOpen={isOpen} onClose={closeConsultationModal} />
    </ConsultationBookingContext.Provider>
  )
}

export function useConsultationBooking() {
  const ctx = useContext(ConsultationBookingContext)
  if (!ctx) {
    throw new Error('useConsultationBooking must be used within ConsultationBookingProvider')
  }
  return ctx
}
