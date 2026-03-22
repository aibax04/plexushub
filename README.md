# Plexus Dental — Landing Page

A simple static landing page for a dentist website, built with **React** and **JavaScript** (no TypeScript), ready to deploy on **Vercel**.

## Project structure

```
plexushub/
├── public/                 # Static assets (optional)
├── src/
│   ├── components/         # React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── ServiceCard.jsx
│   │   ├── CTAStrip.jsx
│   │   ├── Footer.jsx
│   │   └── index.js        # Barrel exports
│   ├── data/
│   │   └── services.js     # Services content
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css           # Global styles
├── index.html
├── vite.config.js
├── vercel.json             # Vercel deployment config
└── package.json
```

## Run locally

```bash
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173).

## Consultation form → Make.com (Gmail, WhatsApp, etc.)

The “Book consultation” modal **POSTs JSON** to your **Make.com** custom webhook (`src/api/submitConsultationWebhook.js`).

**Payload fields** (map them in your scenario):

| Field | Description |
|--------|-------------|
| `name` | Full name |
| `email` | Email |
| `message` | Optional message (or `—` if empty) |
| `phone` | Phone (for WhatsApp / SMS modules) |
| `preferredDateTime` | Optional preferred slot |
| `submittedAt` | ISO timestamp |
| `source` | `plexus-dental-website` |

1. In Make: add **Webhooks → Custom webhook**, click **Run once**, submit the form once from your site so Make learns the data structure.
2. Add **Gmail** (send email) and/or **WhatsApp** / **Twilio** modules using `phone`, `name`, `email`, etc.

**Optional env override** (recommended on Vercel if you rotate the URL):

- `VITE_MAKE_WEBHOOK_URL` — defaults to the project webhook if unset. Copy `.env.example` to `.env.local` for local overrides.

## Deploy on Vercel

1. Push the project to GitHub (or GitLab/Bitbucket).
2. Go to [vercel.com](https://vercel.com) and sign in.
3. **Add New Project** → Import your repo.
4. Vercel will detect Vite; keep **Build Command** `npm run build` and **Output Directory** `dist`.
5. (Optional) Add environment variable `VITE_MAKE_WEBHOOK_URL` if you use a different webhook URL.
6. Click **Deploy**.

Or use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Build for production

```bash
npm run build
```

Output is in the `dist/` folder.

## Tech stack

- React 18
- Vite 5
- Plain JavaScript (JSX)
