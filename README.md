# Vedansh Pachori — Portfolio

Personal portfolio site built with Next.js 14, Tailwind CSS, and Framer Motion.

**Live URL:** https://veduboy.github.io/resume

---

## Quick Start

```bash
npm install
npm run dev        # http://localhost:3000/resume
```

## Deploy

### Option 1 — Automatic (recommended)

Push to `main`. GitHub Actions builds and publishes to GitHub Pages automatically.

```bash
git add -A
git commit -m "update site"
git push origin main
```

CI workflow: [.github/workflows/deploy.yml](.github/workflows/deploy.yml)  
Status: https://github.com/veduboy/resume/actions

### Option 2 — One-command script

```bash
./deploy.sh "your commit message"
```

### Option 3 — First-time GitHub Pages setup

1. Go to **Settings → Pages** in the repo
2. Set **Source** to `Deploy from a branch`
3. Set **Branch** to `gh-pages` / `/ (root)`
4. Save — site appears at `https://veduboy.github.io/resume` within ~60 seconds

---

## Build

```bash
npm run build      # outputs to ./out/ (fully static, no server needed)
```

---

## Project Structure

```
app/
  layout.tsx        — root layout, fonts, metadata
  page.tsx          — page composition
components/
  Hero.tsx          — name, role rotator, terminal animation, CTAs
  Stats.tsx         — animated counters (8+ yrs, 50+ microservices …)
  Skills.tsx        — 6 skill cards with live SVG backgrounds
  Experience.tsx    — timeline: Nagarro · OpsTree · HCL
  Services.tsx      — contract service offerings
  Contact.tsx       — contact CTA + trust signals
  Navbar.tsx        — sticky top nav
  Footer.tsx
  Avatar.tsx
public/
  Vedansh-Pachori-Resume.html   — downloadable CV (linked from Hero)
.github/workflows/
  deploy.yml        — GitHub Actions: build → gh-pages on push to main
```

---

## Customisation Reference

| What to change | File |
|---|---|
| Name / bio / CTAs | `components/Hero.tsx` |
| Skill categories & tags | `components/Skills.tsx` → `skills` array |
| Work history & bullets | `components/Experience.tsx` → `experiences` array |
| Stat counters | `components/Stats.tsx` → `stats` array |
| Service cards | `components/Services.tsx` → `services` array |
| Contact email / links | `components/Contact.tsx` |
| Site base path | `next.config.mjs` → `basePath` |

---

## Tech Stack

- **Next.js 14** — static export (`output: "export"`)
- **Tailwind CSS 3** — utility-first styling
- **Framer Motion** — scroll animations + animated SVG card backgrounds
- **Lucide React** — icons
- **GitHub Actions + peaceiris/actions-gh-pages** — CI/CD to GitHub Pages
