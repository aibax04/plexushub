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

## Deploy on Vercel

1. Push the project to GitHub (or GitLab/Bitbucket).
2. Go to [vercel.com](https://vercel.com) and sign in.
3. **Add New Project** → Import your repo.
4. Vercel will detect Vite; keep **Build Command** `npm run build` and **Output Directory** `dist`.
5. Click **Deploy**.

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
