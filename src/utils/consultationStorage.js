const STORAGE_KEY = 'plexus_consultation_submissions'

function newId() {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID()
  }
  return `sub_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`
}

/**
 * Persist a consultation form submission in the browser (localStorage).
 * For production, you can POST the same payload to your API or Formspree.
 */
export function saveConsultationSubmission(payload) {
  const entry = {
    id: newId(),
    createdAt: new Date().toISOString(),
    ...payload,
  }
  const prev = getConsultationSubmissions()
  const next = [...prev, entry]
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
  } catch (e) {
    console.error('Could not save consultation submission', e)
    throw e
  }
  return entry
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
