// Project: Suraj Mahale - Salesforce Developer Portfolio
// Single-file project bundle shown below. Follow README steps at the top to create the project locally.

/* README.md

Suraj Mahale — Salesforce Developer Portfolio (React + Tailwind)

Overview
- Professional portfolio built with React + Tailwind CSS (modern corporate style)
- Responsive, accessible, animations (subtle), light theme (no dark mode)
- Sections: Hero, About, Skills, Experience, Certifications, Projects, Socials (GitHub/LinkedIn), Resume download, Contact Form
- Hosting target: GitHub Pages (instructions included)

Quick start (recommended: Node 18+)
1. Create project folder and initialize with Vite (recommended):
   npm create vite@latest suraj-portfolio -- --template react
   cd suraj-portfolio
2. Install deps:
   npm install
3. Install Tailwind and supporting packages:
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
4. Copy files from this bundle into your project (src/App.jsx, src/main.jsx, index.html, tailwind.config.cjs, postcss.config.cjs, package.json scripts)
5. Add your content (name, photo path, resume.pdf etc.)
6. Run locally:
   npm run dev
7. Build & deploy to GitHub Pages (instructions below)

GitHub Pages deployment (simple using gh-pages):
1. npm install --save-dev gh-pages
2. In package.json add:
   "homepage": "https://<your-github-username>.github.io/suraj-portfolio",
   scripts:
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
3. git init; commit & push to GitHub repo named `suraj-portfolio`
4. npm run deploy

Notes
- Contact form uses Formspree (free tier) — update FORM_ENDPOINT in the contact component.
- Resume: place `resume.pdf` in `public` and update the link.
- Images: place in `public/images` and update paths.

*/