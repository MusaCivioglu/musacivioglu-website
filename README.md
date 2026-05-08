# Musa Çivioğlu — CV / Portfolio (Next.js)

Premium, one-page, multilingual CV/portfolio website built with:
- Next.js App Router
- React + TypeScript
- Tailwind CSS
- Framer Motion
- Lucide icons

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Add your CV PDF

Place the PDF here:
- `public/Musa-Civioglu-CV.pdf`

The site links use:
- `href="/Musa-Civioglu-CV.pdf"` and `download`

## Add your profile photo

Place your photo here:
- `public/profile-photo.jpg`

The Hero card uses:
- `src="/profile-photo.jpg"`

## Edit Turkish text (single source)

All website text is authored in one place:
- `src/lib/content.ts` (`trContent`)

## Connect a real translation API

- Client translation calls your own server route: `src/app/api/translate/route.ts`
- Put your provider key in environment variables (server-side only):
  - copy `.env.local.example` → `.env.local`
  - set `TRANSLATION_API_KEY=...`

Important: do not expose API keys in client-side code.

## Deploy (Vercel)

- Push the project to GitHub
- Import the repo in Vercel
- Deploy (defaults work)

