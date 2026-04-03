import { initializeApp } from 'firebase/app'
import { getAnalytics, isSupported } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyApYracrcRojXNjNjnNbU0rqBMtnXUNw2s",
  authDomain: "plexusdental-hub.firebaseapp.com",
  projectId: "plexusdental-hub",
  storageBucket: "plexusdental-hub.firebasestorage.app",
  messagingSenderId: "611244160429",
  appId: "1:611244160429:web:14fbb89809e4a099955d24",
  measurementId: "G-BSFNCQ2NLJ"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

// Analytics can fail in some environments, don't let it block the app
let analytics = null
isSupported().then((supported) => {
  if (supported) analytics = getAnalytics(app)
}).catch(() => {})

export { app, analytics, db }
