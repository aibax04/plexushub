const STORAGE_KEY = 'plexus_consultation_submissions'
const MAX_ENTRIES = 50

function newId() {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID()
  }
  return `sub_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`
}

/**
 * Persist a consultation form submission in the browser (localStorage) as a backup.
 * This is best-effort only - private browsing or a full quota must never break a
 * submission that the webhook already accepted, so it returns null instead of throwing.
 *
 * @param {object} payload
 * @param {boolean} [delivered] whether the webhook accepted it
 */
export function saveConsultationSubmission(payload, delivered = true) {
  const entry = {
    id: newId(),
    createdAt: new Date().toISOString(),
    delivered,
    ...payload,
  }
  try {
    const next = [...getConsultationSubmissions(), entry].slice(-MAX_ENTRIES)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
    return entry
  } catch (e) {
    console.error('Could not save consultation submission backup', e)
    return null
  }
}

export function getConsultationSubmissions() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}
