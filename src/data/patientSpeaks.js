/**
 * Remote thumbnails (Unsplash) - avoids 404s from missing /public/assets files.
 * Replace with your own /public/... assets when ready.
 */
const U = 'https://images.unsplash.com'

export const patientSpeaksStories = [
  {
    id: 1,
    name: 'Avantika',
    role: 'PATIENT',
    treatment: 'Invisalign',
    location: 'Indiranagar',
    thumbnail: `${U}/photo-1606811841689-3c3dc3df8f8c?auto=format&fit=crop&w=800&q=80`,
    nameInImage: 'AVANTIKA',
  },
  {
    id: 2,
    name: 'Rohan',
    role: 'PATIENT',
    treatment: 'Root Canal',
    location: 'Gomti Nagar',
    thumbnail: `${U}/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80`,
    nameInImage: 'ROHAN',
  },
  {
    id: 3,
    name: 'Pulak',
    role: 'PATIENT',
    treatment: 'Dental Implants',
    location: 'Aliganj',
    thumbnail: `${U}/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80`,
    nameInImage: 'PULAK',
  },
  {
    id: 4,
    name: 'Priya',
    role: 'PATIENT',
    treatment: 'Clear Aligners',
    location: 'Jankipuram',
    thumbnail: `${U}/photo-1560570653-7284adc2cce7?auto=format&fit=crop&w=800&q=80`,
    nameInImage: 'PRIYA',
  },
  {
    id: 5,
    name: 'Ayushi',
    role: 'PATIENT',
    treatment: 'Smile Makeover',
    location: 'Hazratganj',
    thumbnail: `${U}/photo-1559591937-abc5604f4d42?auto=format&fit=crop&w=800&q=80`,
    nameInImage: 'AYUSHI',
  },
  {
    id: 6,
    name: 'Gurkiran',
    role: 'PATIENT',
    treatment: 'Laser Dentistry',
    location: 'Ashiyana',
    thumbnail: `${U}/photo-1588776814546-1ffcf4722a71?auto=format&fit=crop&w=800&q=80`,
    nameInImage: 'GURKIRAN',
  },
]

/** Unique image URLs for <link rel="preload"> on the home page */
export const patientSpeaksPreloadUrls = [
  ...new Set(patientSpeaksStories.map((s) => s.thumbnail)),
]
