# FocusGroup Studio Website

This repository is the source of truth for `www.focusgroupstudio.com`.

## Important

Do not deploy this website from Google AI Studio. AI Studio can overwrite the web bundle and remove the SEO layer. All production changes must be made here, pushed to GitHub, and deployed through Vercel.

## Stack

- React
- Vite
- Tailwind CSS
- Vercel for hosting and automatic deploys

## SEO Files

The SEO layer is part of the source code and must stay in this repository:

- `index.html`: title, meta description, Open Graph, Twitter cards, canonical URL, JSON-LD, and crawlable fallback page content
- `public/robots.txt`
- `public/sitemap.xml`

## Local Development

```bash
npm install
npm run dev
```

## Build Check

```bash
npm run lint
npm run build
```

## Vercel Setup

Use these settings when importing the GitHub repository into Vercel:

- Framework Preset: Vite
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

After Vercel deploys successfully, connect `www.focusgroupstudio.com` in Vercel and update DNS to point to Vercel. Keep the old Cloud Run service until the Vercel version is stable.
