# Vijay Ramawat — Landing Page Deployment Guide

This is a React (CRA + Tailwind) single-page landing page. No backend required — form submissions open WhatsApp directly with the lead details, so it deploys cleanly as a static site on Netlify.

## One-time setup (GitHub → Netlify auto-deploy)

1. **Create a new GitHub repo** (e.g. `vijay-landing`) and push this project to it:

   ```bash
   git init
   git add .
   git commit -m "Initial landing page"
   git branch -M main
   git remote add origin https://github.com/<your-username>/vijay-landing.git
   git push -u origin main
   ```

2. **Connect to Netlify**:
   - Go to https://app.netlify.com → *Add new site* → *Import an existing project*
   - Choose **GitHub** and pick the repo you just pushed.
   - Netlify will auto-detect `netlify.toml` at the project root — so build settings are pre-filled.
   - Click **Deploy**. Done.

3. Every `git push` to `main` from now on triggers an **auto-deploy** on Netlify.

## Build settings (auto-detected from `netlify.toml`)

| Setting | Value |
|---|---|
| Base directory | `frontend` |
| Build command | `yarn install --frozen-lockfile=false && yarn build` |
| Publish directory | `frontend/build` |
| Node version | `20` |

## Where to update content later

All user-facing data lives in **`frontend/src/mock.js`**:

- `whatsappNumber` — your WhatsApp number (no `+`, no spaces)
- `whatsappGreetings` — rotating professional English messages
- `instagramLink` — your Instagram profile URL
- `coachPhoto` — your photo URL
- `expertiseTags` — the 4 chips floating on the photo
- `achievements` — iPhone / MacBook milestone cards
- `testimonials` — student feedback videos (add YouTube embed URL to `videoUrl` when ready, e.g. `https://www.youtube.com/embed/<VIDEO_ID>`)
- `slotData` — mentorship slot tracker numbers

Push the change to GitHub → Netlify rebuilds automatically.

## Custom domain (optional)

In Netlify → *Domain settings* → *Add custom domain* (e.g. `vijayramawat.in`). Netlify provides free HTTPS via Let's Encrypt.

## Local dev

```bash
cd frontend
yarn install
yarn start    # http://localhost:3000
```
