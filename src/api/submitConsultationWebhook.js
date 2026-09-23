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

/**
 * Turns the raw `datetime-local` value ("2026-09-24T14:30") into something
 * readable in the Gmail / WhatsApp message Make sends out.
 */
export function formatPreferredDateTime(value) {
  if (!value) return null
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return value
  try {
    return new Intl.DateTimeFormat('en-IN', {
      weekday: 'short',
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    }).format(date)
  } catch {
    return value
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

  const extraMessage = data.message && data.message.trim() ? data.message.trim() : ''
  const preferred =
    data.preferredDateTime && data.preferredDateTime.trim() ? data.preferredDateTime.trim() : null
  const body = {
    // Core fields (same names as typical Make / Zapier form tutorials)
    name: data.fullName,
    email: data.email,
    message: extraMessage || '-',
    // Extra fields for Gmail / WhatsApp / SMS in Make
    phone: data.phone,
    treatment: data.treatment || 'Not specified',
    preferredDateTime: preferred,
    preferredDateTimeText: formatPreferredDateTime(preferred),
    submittedAt: new Date().toISOString(),
    source: 'plexus-dental-website',
  }

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
