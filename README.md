# VaaniShiksha AI - Official Landing Page & Distribution Portal

[![Deploy to GitHub Pages](https://github.com/AdityaAlibade/VaaniShiksha-Web/actions/workflows/deploy.yml/badge.svg)](https://github.com/AdityaAlibade/VaaniShiksha-Web/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

> **Offline AI Teaching Assistant for Mother-Tongue Primary Education**  
> Cultural Connectivity Platform designed to bridge classroom learning and indigenous mother tongues without cloud dependency.

---

## 📖 Overview

**VaaniShiksha AI** is an offline Android teaching assistant designed to reduce language barriers for primary school children by bringing AI-powered voice, translation, and learning assistance directly to learners in their mother tongue.

- **Primary Focus**: Supporting mother-tongue primary education (Hindi, Santali in Ol Chiki script, with Ho and Mundari on the roadmap).
- **Core Technology**: Whisper ASR, IndicTrans2, and Indic Parler-TTS unified into an on-device Android pipeline.
- **Visual Identity**: Inspired by Indian tribal cultural heritage, community pedagogy, and clean modern AI aesthetics.

---

## 🚀 Key Features

- 🎙️ **Voice Learning**: Natural speech-first interaction for young students.
- 🌐 **Translation**: AI-powered Indic translation preserving pedagogical intent.
- 🔊 **Voice Response**: Natural spoken voice synthesis in mother-tongue languages.
- 📱 **Offline AI**: Engineered to run locally without cloud dependency or continuous internet connectivity.

---

## 📁 Repository Structure

```
├── .github/workflows/
│   └── deploy.yml             # Automated GitHub Actions deployment to GitHub Pages
├── downloads/
│   └── README.md              # Instructions for hosting the 580MB production APK
├── images/
│   ├── logo/
│   │   ├── official-logo.png  # Official VaaniShiksha AI logo
│   │   └── logo.svg           # Scalable vector branding
│   ├── screenshots/
│   │   ├── app-translation-hd.png # High-definition app voice translation screen
│   │   ├── app-dashboard.png      # Teacher welcome dashboard
│   │   └── app-toolkit.png        # Teaching toolkit screen
│   └── patterns/
│       ├── tribal-border.svg  # Geometric border accent motif
│       ├── tribal-bg.svg      # Subtle background geometry
│       └── offline-chip.svg   # Edge AI neural chip illustration
├── index.html                 # Main static landing page (SEO & OpenGraph ready)
├── styles.css                 # Modern responsive design & tribal visual theme
├── app.js                     # Clean vanilla JS interactivity & modal controller
├── vercel.json                # Vercel configuration with security headers & caching
├── netlify.toml               # Netlify build & security headers configuration
├── _headers                   # HTTP response headers for static hosts
├── robots.txt                 # Search engine crawler directives
├── sitemap.xml                # SEO sitemap
├── .nojekyll                  # GitHub Pages static bypass
├── package.json               # Local preview and development scripts
└── public/                    # Production mirrored assets
```

---

## 💻 Local Preview & Development

You can run the site locally using any static web server:

```bash
# Using Node / npx
npx serve .

# Or using npm scripts
npm run dev

# Or using Python
python -m http.server 8080
```

Open `http://localhost:8080` in your web browser.

---

## 🌐 Deployment Options

The website is 100% static, lightning-fast, and ready to deploy anywhere with zero build configuration.

### 1. GitHub Pages (Automated via GitHub Actions)
A GitHub Actions workflow is pre-configured in `.github/workflows/deploy.yml`.
1. Go to your repository on GitHub: **Settings** > **Pages**.
2. Under **Build and deployment** > **Source**, select **GitHub Actions**.
3. Every push to the `main` branch will automatically build and publish your site!

### 2. Vercel
1. Import this repository in [Vercel](https://vercel.com/new).
2. Framework Preset: **Other** / **Static**.
3. Root Directory: `./` (or leave default).
4. Click **Deploy**. (Pre-configured `vercel.json` provides security headers and asset caching).

### 3. Netlify
1. Connect this repository to [Netlify](https://app.netlify.com/start).
2. Publish directory: `.`
3. Build command: *(leave empty)*
4. Click **Deploy Site**. (Pre-configured `netlify.toml` and `_headers` are applied automatically).

### 4. Cloudflare Pages
1. In Cloudflare Dashboard, go to **Workers & Pages** > **Create application** > **Pages**.
2. Connect the `VaaniShiksha-Web` GitHub repo.
3. Build command: *(leave empty)*, Build output directory: `.`.
4. Deploy!

---

## 📦 Distributing the 580MB Android APK

Due to GitHub's repository file limit (100 MB per file), the ~580 MB `VaaniShiksha AI.apk` is distributed via **GitHub Releases** (which supports up to 2 GB per file with unlimited download bandwidth):

1. Go to the [Releases](https://github.com/AdityaAlibade/VaaniShiksha-Web/releases) page.
2. Click **Draft a new release** (e.g. tag `v1.0.0`).
3. Title it `VaaniShiksha AI v1.0.0 (Offline Models)`.
4. Drag & drop your built `VaaniShiksha AI.apk` into the release binaries section.
5. Click **Publish release**.

The website's **Download APK** modal and buttons are pre-configured to link directly to this official release!

---

## 📄 License & Attribution

© 2026 VaaniShiksha AI. All rights reserved.  
An initiative supporting indigenous & regional language pedagogy.
