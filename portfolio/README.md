# Aditya Raman — Developer Portfolio

A minimalist, high-contrast, developer portfolio crafted with **pure semantic HTML5 & modern CSS3** (zero runtime frameworks, zero dependencies).

Designed specifically for a first-year B.Tech Computer Science student with an authentic, honest aesthetic, Himalayan alpine greenery motifs, and a compounding 1% daily growth philosophy.

---

## 🌲 Design Highlights
- **Palette:** Pitch black (`#000000`) canvas, pure white typography, subtle slate borders, and alpine emerald accents (`#10b981`).
- **Nature Touch:** Integrated vector mountain ridge silhouette and topographic elevation lines.
- **Typography:** `Inter` for clean reading paired with `JetBrains Mono` for developer code tags and terminal-style metrics.
- **Fast & Lightweight:** 100% pure HTML & CSS. Loads instantly with 0 ms build step.
- **Honest Skill Representation:** Clearly separates active daily practice from foundational concepts.

---

## 🚀 How to View Locally

### Option 1: Direct File Open
Simply double-click `index.html` in Finder / File Explorer, or open it in Google Chrome, Safari, or Brave.

### Option 2: Via Terminal (Python Local Server)
Open your terminal in this folder and run:
```bash
python3 -m http.server 8000
```
Then visit: `http://localhost:8000` in your browser.

---

## 📝 How to Update Content

### 1. Adding a New Day to "My Journey"
Open `index.html`, locate `<!-- Entry 1 -->` under `<section id="journey">`, and copy-paste this block at the top of the timeline:

```html
<article class="timeline-item">
  <div class="timeline-dot" aria-hidden="true"></div>
  <div class="timeline-content">
    <div class="timeline-top">
      <span class="timeline-day">Day 29</span>
      <span class="timeline-date">November 2026</span>
    </div>
    <h4 class="timeline-title">Your Milestone Title Here</h4>
    <p class="timeline-summary">
      Brief 2-line explanation of what you practiced, built, or debugged today.
    </p>
    <div class="timeline-tags">
      <span class="timeline-tag">#python</span>
      <span class="timeline-tag">#algorithms</span>
    </div>
  </div>
</article>
```

### 2. Adding a New Project
Under `<section id="projects">`, duplicate a `<article class="project-card">` block and update the title, category, description, and GitHub repository URL.

### 3. Contact Links
Your verified LinkedIn profile is already wired in:
- `https://www.linkedin.com/in/iadityaraman`

To change your email or GitHub username, update the `href` in the `<section id="contact">` block.

---

## 🌐 How to Deploy to GitHub Pages for Free

1. Create a new public repository on [GitHub](https://github.com/new) named `portfolio` (or `<your-username>.github.io`).
2. In your terminal inside the `portfolio/` folder:
```bash
git init
git add .
git commit -m "feat: initial commit of minimal developer portfolio"
git branch -M main
git remote add origin https://github.com/iadityaraman/<your-repo-name>.git
git push -u origin main
```
3. In your GitHub repository:
   - Go to **Settings** > **Pages**.
   - Under **Build and deployment** > **Branch**, select `main` and `/ (root)`.
   - Click **Save**.
4. Your site will be live at `https://iadityaraman.github.io/<your-repo-name>` within seconds!

