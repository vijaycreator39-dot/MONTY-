# Vijay Ramawat — Landing Page Deployment Guide

This is a React (CRA + Tailwind) single-page landing page. No backend required — form submissions open WhatsApp directly with the lead details, so it deploys cleanly as a static site on Netlify.

## ⚠️ Important: include `yarn.lock` when pushing to GitHub

The `frontend/yarn.lock` file is already present and **must be committed** to GitHub. The default `.gitignore` does NOT ignore it. Do not delete it.

## One-time setup (GitHub → Netlify auto-deploy)

1. **Create a new GitHub repo** and push this project to it:

   ```bash
   cd /app
   git init
   git add .
   git commit -m "Initial landing page"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```

   Verify `frontend/yarn.lock` was included:
   ```bash
   git ls-files frontend/yarn.lock
   ```

2. **Connect to Netlify**:
   - Go to https://app.netlify.com → *Add new site* → *Import an existing project*
   - Choose **GitHub** and pick the repo you just pushed.
   - Netlify will auto-detect `netlify.toml` at the project root — so build settings are pre-filled.
   - Click **Deploy site**. Done.

3. Every `git push` to `main` from now on triggers an **auto-deploy** on Netlify.

## Build settings (auto-detected from `netlify.toml`)

| Setting | Value |
|---|---|
| Base directory | `frontend` |
| Build command | `yarn install && yarn build` |
| Publish directory | `frontend/build` |
| Node version | `20` |
| Yarn version | `1.22.22` |

## Where to update content later

All user-facing data lives in **`frontend/src/mock.js`**:

- `whatsappNumber` — your WhatsApp number (no `+`, no spaces, country code included)
- `whatsappGreetings` — rotating professional English messages
- `instagramLink` — your Instagram profile URL
- `coachPhoto` — your photo URL
- `expertiseTags` — the 4 chips floating on the photo
- `achievements` — iPhone / MacBook milestone cards
- `testimonials` — student feedback videos. When you upload videos to YouTube, replace `videoUrl` with the YouTube embed URL, e.g. `https://www.youtube.com/embed/<VIDEO_ID>`
- `slotData` — mentorship slot tracker numbers

After editing → `git commit -am "update content" && git push` → Netlify rebuilds automatically.

## Custom domain (optional)

In Netlify → *Domain settings* → *Add custom domain* (e.g. `vijayramawat.in`). Netlify provides free HTTPS via Let's Encrypt.

## Local dev

```bash
cd frontend
yarn install
yarn start    # http://localhost:3000
```

## Troubleshooting

**Build fails with "install has been replaced with add"**
- Old netlify.toml had a problematic flag. The current `netlify.toml` uses the clean command `yarn install && yarn build`. Pull the latest changes and push again.

**Build fails because of missing `yarn.lock`**
- Run `cd frontend && yarn install` locally, then `git add frontend/yarn.lock && git commit -m "Add yarn.lock" && git push`.
