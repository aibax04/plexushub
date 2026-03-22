/**
 * Sends consultation data to Make.com (or any) webhook.
 * Set VITE_MAKE_WEBHOOK_URL in .env / Vercel — falls back to the project webhook if unset.
 *
 * Payload shape matches common Make tutorials: name, email, message — plus phone & extras for automation.
 */
const DEFAULT_WEBHOOK_URL =
  'https://hook.eu2.make.com/ohwn1mbcqwx87k3phu7fybsvyqo6whig'

export function getConsultationWebhookUrl() {
  const fromEnv = import.meta.env.VITE_MAKE_WEBHOOK_URL
  if (typeof fromEnv === 'string' && fromEnv.trim()) {
    return fromEnv.trim()
  }
  return DEFAULT_WEBHOOK_URL
}

/**
 * @param {object} data
 * @param {string} data.fullName
 * @param {string} data.email
 * @param {string} data.phone
 * @param {string|null} [data.preferredDateTime]
 * @param {string|null} [data.message]
 */
export async function submitConsultationToWebhook(data) {
  const url = getConsultationWebhookUrl() || ''
  if (!url) {
    throw new Error('Webhook URL is not configured.')
  }

  const extraMessage = data.message && data.message.trim() ? data.message.trim() : ''
  const body = {
    // Core fields (same names as typical Make / Zapier form tutorials)
    name: data.fullName,
    email: data.email,
    message: extraMessage || '—',
    // Extra fields for Gmail / WhatsApp / SMS in Make
    phone: data.phone,
    preferredDateTime:
      data.preferredDateTime && data.preferredDateTime.trim() ? data.preferredDateTime.trim() : null,
    submittedAt: new Date().toISOString(),
    source: 'plexus-dental-website',
  }

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })

  if (!res.ok) {
    const text = await res.text().catch(() => '')
    throw new Error(text || `Request failed (${res.status})`)
  }

  return body
}
