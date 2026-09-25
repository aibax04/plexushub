/**
 * Sends consultation data to Make.com (or any) webhook.
 * Set VITE_MAKE_WEBHOOK_URL in .env / Vercel - falls back to the project webhook if unset.
 *
 * Payload shape matches common Make tutorials: name, email, message - plus phone & extras for automation.
 */
const DEFAULT_WEBHOOK_URL =
  'https://hook.eu2.make.com/ohwn1mbcqwx87k3phu7fybsvyqo6whig'

const REQUEST_TIMEOUT_MS = 15000

export function getConsultationWebhookUrl() {
  const fromEnv = import.meta.env.VITE_MAKE_WEBHOOK_URL
  if (typeof fromEnv === 'string' && fromEnv.trim()) {
    return fromEnv.trim()
  }
  return DEFAULT_WEBHOOK_URL
}

const READABLE_DATE_OPTIONS = {
  weekday: 'short',
  day: '2-digit',
  month: 'short',
  year: 'numeric',
  hour: 'numeric',
  minute: '2-digit',
  hour12: true,
}

/**
 * Turns the raw `datetime-local` value ("2026-09-24T14:30") into something
 * readable in the Gmail / WhatsApp message Make sends out.
 */
export function formatPreferredDateTime(value) {
  if (!value) return null
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return value
  try {
    return new Intl.DateTimeFormat('en-IN', READABLE_DATE_OPTIONS).format(date)
  } catch {
    return value
  }
}

/**
 * The raw `submittedAt` is a UTC ISO string, which reads as the wrong day in
 * the evening IST - send a clinic-local version for the email to print.
 */
export function formatSubmittedAt(date) {
  try {
    return new Intl.DateTimeFormat('en-IN', {
      ...READABLE_DATE_OPTIONS,
      timeZone: 'Asia/Kolkata',
    }).format(date)
  } catch {
    return date.toISOString()
  }
}

/**
 * @param {object} data
 * @param {string} data.fullName
 * @param {string} data.email
 * @param {string} data.phone
 * @param {string} data.treatment
 * @param {string|null} [data.preferredDateTime]
 * @param {string|null} [data.message]
 */
export async function submitConsultationToWebhook(data) {
  const url = getConsultationWebhookUrl() || ''
  if (!url) {
    throw new Error('Webhook URL is not configured.')
  }

  const fullName = data.fullName && data.fullName.trim() ? data.fullName.trim() : ''
  const email = data.email && data.email.trim() ? data.email.trim() : ''
  const phone = data.phone && data.phone.trim() ? data.phone.trim() : ''
  const treatment = data.treatment && data.treatment.trim() ? data.treatment.trim() : 'Not specified'
  const extraMessage = data.message && data.message.trim() ? data.message.trim() : ''
  const preferred =
    data.preferredDateTime && data.preferredDateTime.trim() ? data.preferredDateTime.trim() : null
  const preferredText = formatPreferredDateTime(preferred)
  const submittedAt = new Date()
  const body = {
    // Core fields (same names as typical Make / Zapier form tutorials)
    name: fullName,
    fullName,
    email,
    message: extraMessage || '-',
    // Extra fields for Gmail / WhatsApp / SMS in Make
    phone,
    treatment,
    treatmentInterest: treatment,
    treatment_interest: treatment,
    'Treatment Interest': treatment,
    preferredDateTime: preferred,
    preferredDateTimeText: preferredText,
    preferredSlot: preferred,
    preferredSlotText: preferredText,
    submittedAt: submittedAt.toISOString(),
    submittedAtText: formatSubmittedAt(submittedAt),
    source: 'plexus-dental-website',
  }

  // A ready-made subject and body, so the Gmail module in Make only has to map
  // two fields and can't silently drop the treatment by mapping a wrong key.
  body.subject = `New consultation request - ${fullName || 'Website enquiry'} (${treatment})`
  body.summary = [
    `Name: ${fullName || '-'}`,
    `Phone: ${phone || '-'}`,
    `Email: ${email || '-'}`,
    `Treatment Interest: ${treatment}`,
    `Preferred date & time: ${preferredText || '-'}`,
    `Message: ${extraMessage || '-'}`,
  ].join('\n')

  // Without a timeout a stalled network leaves the button spinning forever.
  const controller = typeof AbortController !== 'undefined' ? new AbortController() : null
  const timer = controller ? setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS) : null

  let res
  try {
    res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
      signal: controller ? controller.signal : undefined,
    })
  } catch (err) {
    if (err && err.name === 'AbortError') {
      throw new Error('The request timed out.')
    }
    throw err
  } finally {
    if (timer) clearTimeout(timer)
  }

  if (!res.ok) {
    const text = await res.text().catch(() => '')
    throw new Error(text || `Request failed (${res.status})`)
  }

  return body
}
