import React, { useEffect, useId, useState } from 'react'
import { createPortal } from 'react-dom'
import { X, ChevronRight, Loader2 } from 'lucide-react'
import { submitConsultationToWebhook } from '../api/submitConsultationWebhook'
import { saveConsultationSubmission } from '../utils/consultationStorage'

const initialForm = {
  fullName: '',
  email: '',
  phone: '',
  preferredDateTime: '',
  message: '',
}

function ConsultationModal({ isOpen, onClose }) {
  const titleId = useId()
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [isOpen, onClose])

  useEffect(() => {
    if (!isOpen) {
      setForm(initialForm)
      setStatus('idle')
      setErrorMsg('')
    }
  }, [isOpen])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMsg('')
    if (!form.fullName.trim() || !form.email.trim() || !form.phone.trim()) {
      setErrorMsg('Please fill in your name, email, and phone.')
      return
    }
    setStatus('submitting')
    const payload = {
      fullName: form.fullName.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      preferredDateTime: form.preferredDateTime || null,
      message: form.message.trim() || null,
    }
    try {
      await submitConsultationToWebhook(payload)
      const saved = saveConsultationSubmission(payload)
      console.log('[Consultation] Webhook OK, backup saved:', saved)
      setStatus('success')
      setTimeout(() => {
        onClose()
      }, 2200)
    } catch (err) {
      console.error('[Consultation] Webhook error:', err)
      setStatus('error')
      setErrorMsg(
        'Could not send your request. Check your connection and try again, or call us directly.'
      )
    }
  }

  if (!isOpen) return null

  const modal = (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6"
      role="presentation"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/75 backdrop-blur-sm border-0 cursor-default"
        aria-label="Close modal"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative w-full max-w-md rounded-[1.5rem] border border-white/10 bg-dark-surface text-dark-text shadow-2xl shadow-black/50"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 p-6 sm:p-8 pb-4">
          <div>
            <h2 id={titleId} className="text-xl sm:text-2xl font-medium tracking-tight text-white">
              Book your free consultation
            </h2>
            <p className="text-dark-text-muted text-sm mt-2 leading-relaxed">
              Tell us how to reach you. We’ll confirm your slot shortly.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="shrink-0 rounded-full p-2 text-white/60 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>

        {status === 'success' ? (
          <div className="px-6 sm:px-8 pb-8 text-center">
            <p className="text-green-400 text-[15px] font-medium mb-2">Thank you!</p>
            <p className="text-dark-text-muted text-sm">
              Your request was sent. We’ll contact you soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-6 sm:px-8 pb-8 space-y-4">
            <div>
              <label htmlFor="consult-name" className="block text-xs font-medium text-white/70 mb-1.5">
                Full name <span className="text-red-400">*</span>
              </label>
              <input
                id="consult-name"
                name="fullName"
                type="text"
                autoComplete="name"
                value={form.fullName}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-dark-bg px-4 py-3 text-[15px] text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="consult-email" className="block text-xs font-medium text-white/70 mb-1.5">
                Email <span className="text-red-400">*</span>
              </label>
              <input
                id="consult-email"
                name="email"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-dark-bg px-4 py-3 text-[15px] text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="consult-phone" className="block text-xs font-medium text-white/70 mb-1.5">
                Phone <span className="text-red-400">*</span>
              </label>
              <input
                id="consult-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                value={form.phone}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-dark-bg px-4 py-3 text-[15px] text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="+91 …"
              />
            </div>
            <div>
              <label htmlFor="consult-when" className="block text-xs font-medium text-white/70 mb-1.5">
                Preferred date & time <span className="text-white/40 font-normal">(optional)</span>
              </label>
              <input
                id="consult-when"
                name="preferredDateTime"
                type="datetime-local"
                value={form.preferredDateTime}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-dark-bg px-4 py-3 text-[15px] text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-primary/50 [color-scheme:dark]"
              />
            </div>
            <div>
              <label htmlFor="consult-msg" className="block text-xs font-medium text-white/70 mb-1.5">
                Message <span className="text-white/40 font-normal">(optional)</span>
              </label>
              <textarea
                id="consult-msg"
                name="message"
                rows={3}
                value={form.message}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-dark-bg px-4 py-3 text-[15px] text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-y min-h-[88px]"
                placeholder="Anything we should know?"
              />
            </div>

            {(errorMsg || status === 'error') && (
              <p className="text-sm text-red-400">{errorMsg || 'Something went wrong.'}</p>
            )}

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="group w-full inline-flex items-center justify-center gap-2 px-6 py-4 font-medium text-white transition-all duration-300 bg-primary rounded-full hover:bg-primary-dark shadow-lg hover:shadow-primary/40 active:scale-[0.98] text-[15px] disabled:opacity-60 disabled:pointer-events-none"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending…
                </>
              ) : (
                <>
                  Submit request
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                </>
              )}
            </button>
            <p className="text-[11px] text-white/35 text-center leading-relaxed">
              Submissions are sent to our booking system (Make.com). A copy may be kept in this browser as backup.
            </p>
          </form>
        )}
      </div>
    </div>
  )

  return typeof document !== 'undefined' ? createPortal(modal, document.body) : null
}

export default ConsultationModal
