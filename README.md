# Sokpanha Prak Portfolio
[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

A modern, responsive developer portfolio built with **React**, **TypeScript**, and **TailwindCSS**, showcasing projects, skills, and contact information.  
Optimized for recruiters to view work online.

---

## 🌐 Live Demo

[View Portfolio on GitHub Pages](https://jackas5.github.io/sokpanha.dev)

---

## 🚀 Features

- Fully responsive homepage with hero section and call-to-action buttons
- Projects showcase with interactive hover cards, live demo, and GitHub links
- About section with skills, experience, education, and certifications
- Contact form with email and social media links
- Dark mode toggle
- Smooth scroll navigation with scroll spy
- Clean and modern UI design
- Optimized for desktop, tablet, and mobile

---

## 🛠 Tech Stack

- **Frontend:** React 19 + TypeScript  
- **Styling:** TailwindCSS, Framer Motion  
- **Routing:** React Router DOM  
- **Icons:** Heroicons, Tabler Icons, React Icons  
- **Bundler:** Vite  
- **Deployment:** GitHub Pages

---

## ⚡ Installation & Development

```bash
# Clone the repository
git clone https://github.com/yourusername/sokpanha-portfolio.git
cd sokpanha-portfolio

# Install dependencies
npm install

# Start dev server
npm run dev

---

## 📦 Build & Deploy

```bash
# Build the project
npm run build

# Preview the production build
npm run preview
```

# Deploy to GitHub Pages
1. Install ```gh-pages```:
```bash
npm install --save-dev gh-pages
```

2. Add deployment scripts in ```package.json```:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```
3. Deploy:
```bash
npm run deploy
```
