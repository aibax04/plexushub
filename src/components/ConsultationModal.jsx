import React, { useCallback, useEffect, useId, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { X, ChevronRight, Loader2 } from 'lucide-react'
import { submitConsultationToWebhook } from '../api/submitConsultationWebhook'
import { saveConsultationSubmission } from '../utils/consultationStorage'
import { CONTACT } from '../data/contact'

const initialForm = {
  fullName: '',
  phone: '',
  treatment: '',
  preferredDateTime: '',
  message: '',
}

/** `datetime-local` expects local wall-clock time, not an ISO/UTC string. */
function toDateTimeLocalValue(date) {
  const pad = (n) => String(n).padStart(2, '0')
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(
    date.getHours()
  )}:${pad(date.getMinutes())}`
}

function validate(form) {
  if (form.fullName.trim().length < 2) {
    return 'Please enter your full name.'
  }
  const digits = form.phone.replace(/\D/g, '')
  if (digits.length < 7 || digits.length > 15) {
    return 'Please enter a valid phone number so we can call you back.'
  }
  if (!form.preferredDateTime) {
    return 'Please pick a preferred date & time.'
  }
  const when = new Date(form.preferredDateTime)
  if (Number.isNaN(when.getTime())) {
    return 'Please pick a valid date & time.'
  }
  // A minute of slack so "right now" doesn't fail while you're still typing.
  if (when.getTime() < Date.now() - 60000) {
    return 'Please pick a date & time in the future.'
  }
  if (!form.treatment) {
    return 'Please choose the treatment you are interested in.'
  }
  if (!form.message.trim()) {
    return 'Please tell us more about your treatment.'
  }
  return ''
}

function ConsultationModal({ isOpen, onClose }) {
  const titleId = useId()
  const dialogRef = useRef(null)
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const isSubmitting = status === 'submitting'

  // Escape / backdrop / close must not interrupt an in-flight request, or the
  // lead gets sent with the patient never seeing the confirmation.
  const requestClose = useCallback(() => {
    if (isSubmitting) return
    onClose()
  }, [isSubmitting, onClose])

  // Read through a ref inside the key handler, so the effect below doesn't
  // tear down and re-run (yanking focus) the moment submitting starts.
  const requestCloseRef = useRef(requestClose)
  requestCloseRef.current = requestClose

  const minDateTime = useMemo(() => (isOpen ? toDateTimeLocalValue(new Date()) : ''), [isOpen])

  useEffect(() => {
    if (!isOpen) return
    const node = dialogRef.current
    const previouslyFocused = document.activeElement
    // Focus the dialog itself, not the first field, so mobile keyboards don't
    // spring open over the form.
    node?.focus()

    const onKey = (e) => {
      if (e.key === 'Escape') {
        requestCloseRef.current()
        return
      }
      if (e.key !== 'Tab' || !node) return
      const focusable = node.querySelectorAll(
        'input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled])'
      )
      if (!focusable.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (e.shiftKey && (document.activeElement === first || document.activeElement === node)) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
      if (previouslyFocused && typeof previouslyFocused.focus === 'function') {
        previouslyFocused.focus()
      }
    }
  }, [isOpen])

  // If the app unmounts while open, don’t leave the page non-scrollable
  useEffect(() => {
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

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
    if (errorMsg) setErrorMsg('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (isSubmitting) return
    setErrorMsg('')

    const problem = validate(form)
    if (problem) {
      setErrorMsg(problem)
      setStatus('idle')
      return
    }

    setStatus('submitting')
    const payload = {
      fullName: form.fullName.trim(),
      phone: form.phone.trim(),
      treatment: form.treatment || 'Not specified',
      preferredDateTime: form.preferredDateTime || null,
      message: form.message.trim(),
    }
    try {
      await submitConsultationToWebhook(payload)
      // Best-effort backup: a storage failure must not tell the patient their
      // request failed, or they'll submit the whole thing again.
      saveConsultationSubmission(payload, true)
      setStatus('success')
      setTimeout(() => {
        onClose()
      }, 2600)
    } catch (err) {
      console.error('[Consultation] Webhook error:', err)
      // Keep the lead locally even though it never reached Make.
      saveConsultationSubmission(payload, false)
      setStatus('error')
      setErrorMsg(
        `Could not send your request. Please check your connection and try again, or call us on ${CONTACT.phoneDisplay}.`
      )
    }
  }

  if (!isOpen) return null

  const inputClass =
    'w-full min-w-0 rounded-xl border border-border bg-bg-alt px-4 py-3.5 sm:py-3 text-base sm:text-[15px] text-text placeholder:text-text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-60'

  const modal = (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-3 pt-[max(0.75rem,env(safe-area-inset-top,0px))] pb-[max(0.75rem,env(safe-area-inset-bottom,0px))] pl-[max(0.75rem,env(safe-area-inset-left,0px))] pr-[max(0.75rem,env(safe-area-inset-right,0px))] sm:p-6 sm:pt-[max(1.5rem,env(safe-area-inset-top,0px))] sm:pb-[max(1.5rem,env(safe-area-inset-bottom,0px))] sm:pl-[max(1.5rem,env(safe-area-inset-left,0px))] sm:pr-[max(1.5rem,env(safe-area-inset-right,0px))]"
      role="presentation"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/75 backdrop-blur-sm border-0 cursor-default"
        aria-label="Close modal"
        tabIndex={-1}
        onClick={requestClose}
      />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        className="relative flex max-h-[calc(100dvh-1.5rem)] w-full max-w-md min-h-0 flex-col overflow-hidden rounded-2xl border border-border bg-white text-text shadow-2xl shadow-black/20 focus:outline-none sm:max-h-[min(100dvh-3rem,720px)] sm:rounded-[1.5rem] lg:w-[min(1080px,calc(100vw-3rem))] lg:max-w-none lg:max-h-[min(100dvh-3rem,680px)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex shrink-0 items-start justify-between gap-3 border-b border-border px-4 pt-4 pb-3 sm:px-8 sm:pt-6 sm:pb-4 lg:px-10">
          <div className="min-w-0 pr-2">
            <h2 id={titleId} className="text-lg font-medium tracking-tight text-text sm:text-xl md:text-2xl">
              Book your consultation
            </h2>
            <p className="text-text-muted mt-1.5 text-sm leading-relaxed sm:mt-2">
              Detailed consultation & personalized treatment planning. Tell us how to reach you - we’ll follow up shortly.
            </p>
          </div>
          <button
            type="button"
            onClick={requestClose}
            disabled={isSubmitting}
            className="flex h-11 w-11 shrink-0 touch-manipulation items-center justify-center rounded-full text-text-muted transition-colors hover:bg-black/5 hover:text-text active:bg-black/10 disabled:opacity-40 sm:h-10 sm:w-10"
            aria-label="Close"
          >
            <X className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto overflow-x-hidden overscroll-y-contain px-4 py-4 sm:px-8 sm:py-6 lg:px-10">
          {status === 'success' ? (
            <div className="py-4 text-center sm:py-6" role="status">
              <p className="mb-2 text-base font-medium text-green-600 sm:text-[15px]">Thank you!</p>
              <p className="text-sm text-text-muted">Your request was sent. We’ll contact you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4 pb-2">
              <fieldset disabled={isSubmitting} className="grid min-w-0 grid-cols-1 gap-4 border-0 p-0 lg:grid-cols-2">
              <div className="min-w-0">
                <label htmlFor="consult-name" className="mb-1.5 block text-xs font-medium text-text-muted">
                  Full name <span className="text-red-600">*</span>
                </label>
                <input
                  id="consult-name"
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  enterKeyHint="next"
                  value={form.fullName}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Your name"
                />
              </div>
              <div className="min-w-0">
                <label htmlFor="consult-phone" className="mb-1.5 block text-xs font-medium text-text-muted">
                  Phone <span className="text-red-600">*</span>
                </label>
                <input
                  id="consult-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  enterKeyHint="next"
                  inputMode="tel"
                  value={form.phone}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="+91 …"
                />
              </div>
              <div className="min-w-0">
                <label htmlFor="consult-when" className="mb-1.5 block text-xs font-medium text-text-muted">
                  Preferred date & time <span className="text-red-600">*</span>
                </label>
                <input
                  id="consult-when"
                  name="preferredDateTime"
                  type="datetime-local"
                  min={minDateTime}
                  value={form.preferredDateTime}
                  onChange={handleChange}
                  className={`${inputClass} [color-scheme:light]`}
                />
              </div>
              <div className="min-w-0">
                <label htmlFor="consult-treatment" className="mb-1.5 block text-xs font-medium text-text-muted">
                  Treatment Interest <span className="text-red-600">*</span>
                </label>
                <select
                  id="consult-treatment"
                  name="treatment"
                  value={form.treatment}
                  onChange={handleChange}
                  className={`${inputClass} *:bg-white *:text-text`}
                >
                  <option value="">Select a treatment</option>
                  <option value="General Consultation">General Consultation</option>
                  <option value="Root Canal Treatment">Root Canal Treatment (RCT)</option>
                  <option value="Teeth Whitening">Teeth Whitening</option>
                  <option value="Braces / Orthodontics">Braces / Orthodontics</option>
                  <option value="Invisalign / Clear Aligners">Invisalign / Clear Aligners</option>
                  <option value="Dental Implants">Dental Implants</option>
                  <option value="Cosmetic Dentistry / Smile Makeover">Cosmetic Dentistry / Smile Makeover</option>
                  <option value="Dental Crowns">Dental Crowns</option>
                  <option value="Dental Bridges">Dental Bridges</option>
                  <option value="Dentures">Dentures</option>
                  <option value="Wisdom Teeth Removal">Wisdom Teeth Removal</option>
                  <option value="Dental Fillings">Dental Fillings</option>
                  <option value="Gum Disease Treatment">Gum Disease Treatment</option>
                  <option value="Kids Dentistry">Kids Dentistry</option>
                  <option value="Laser Dentistry">Laser Dentistry</option>
                  <option value="Routine Check-up & Cleaning">Routine Check-up & Cleaning</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="min-w-0 lg:col-span-2">
                <label htmlFor="consult-msg" className="mb-1.5 block text-xs font-medium text-text-muted">
                  Tell us more about your treatment <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="consult-msg"
                  name="message"
                  rows={3}
                  enterKeyHint="done"
                  value={form.message}
                  onChange={handleChange}
                  className={`${inputClass} min-h-[100px] resize-y sm:min-h-[88px]`}
                  placeholder="e.g. tooth pain, braces, whitening..."
                />
              </div>
              </fieldset>

              {(errorMsg || status === 'error') && (
                <p role="alert" className="text-sm leading-snug text-red-600">
                  {errorMsg || 'Something went wrong.'}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="group flex min-h-[48px] w-full touch-manipulation items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-base font-medium text-white shadow-lg transition-all duration-300 hover:bg-primary-dark hover:shadow-primary/40 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60 sm:py-4 sm:text-[15px]"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 shrink-0 animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    Submit request
                    <ChevronRight className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-0.5" />
                  </>
                )}
              </button>
              <p className="text-center text-[11px] leading-relaxed text-text-muted/70">
                Submissions are sent to our booking system (Make.com). A copy may be kept in this browser as backup.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  )

  return typeof document !== 'undefined' ? createPortal(modal, document.body) : null
}

export default ConsultationModal
