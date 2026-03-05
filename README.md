# 𓂀 Raunak Saha — Code is the New Civilization

> *"From ancient scrolls to modern programming languages."*

Welcome to the source code of my interactive portfolio! This project is a unique dual-world experience, blending the mystique of Ancient Egypt with the neon-drenched aesthetic of a Cyberpunk Future.

Check it out live: [Insert Live Link Here]

---

## 👨‍💻 About Me

I am an 18-year-old **Full-Stack Developer & Language Creator** based in Kolkata, India. With 2 years of experience, I love to build things that matter. I am currently pursuing a B.Tech in Artificial Intelligence and Data Science at Meghnad Saha Institute of Technology.

My deep interest in how computers understand us led me to create **`B#`**, a complete programming language built from the ground up, featuring its own interpreter, package manager, and VS Code extension.

**My primary interests include:**

- 🧠 Artificial Intelligence & Machine Learning
- 🌐 Full-Stack Web Development
- 🗣️ Programming Language Design & Compilers

---

## 🏛️ The Portfolio: Two Worlds

This portfolio isn't just a static page; it's a journey across time.

### 📜 Ancient World (The Default State)

A rich, immersive Egyptian-themed experience featuring:

- **Scroll Intro Animation:** A dynamic scroll unrolling effect using particles and GSAP-like custom animations.
- **Hieroglyphic UI:** Interactive elements modeled after ancient artifacts, obelisks, and pyramids.
- **Themed Sections:** `Oasis` (About), `Wisdom` (Skills), `Ruins` (Projects), `Temple` (Achievements).

### ⚡ Future World (The Portal)

At the bottom of the ancient world lies a **Portal**. Entering it transports you to a gritty, neon-lit Cyberpunk future featuring:

- **JARVIS Glass UI:** A frosted `.jarvis-glass` mobile navigation menu with animated scanlines and holographic hex grids.
- **Cyberpunk Aesthetics:** Laser line backgrounds, glitch text effects, and magenta/cyan neon glows.
- **Temporal Rift:** A spinning neon portal to travel back to the ancient timeline.

---

## 🛠️ Tech Stack & Where Things Live

This project was built without heavy UI libraries to maintain total control over the custom dual-theme aesthetics.

- **Framework:** React + Vite
- **Styling:** Vanilla CSS (`src/styles/global.css` handles the heavy lifting for both worlds)
- **State Management:** React Hooks (`useState`, `useEffect`) manage the world transitions and scroll observers.

**Key Files & Locations:**

- `src/App.jsx`: The heart of the app. Handles the `world` state, scroll observers, and the transition logic between Ancient and Future components.
- `src/sections/FutureWorld.jsx`: The entirely separate, standalone component that renders the Cyberpunk timeline and the `JARVIS` mobile menu.
- `src/components/Navbar.jsx`: The Ancient World navigation, featuring a custom responsive scroll-themed dropdown for mobile users.
- `src/data/index.js`: The central data store for all portfolio content (Bio, Skills, Projects) — meaning content only needs to be updated in one place for both worlds!
- **Icons & Assets:** Tech stack icons are primarily pulled dynamically from `skillicons.dev`, with custom local assets stored in the `public/` directory.

---

## 🚀 Running Locally

Want to run this timeline anomaly on your own machine?

1. **Clone the repository:**
   \`\`\`bash
   git clone <https://github.com/raunaksahahere/portfolio_v1>
   cd portfolio
   \`\`\`

2. **Install dependencies:**
   \`\`\`bash
   npm install
   \`\`\`

3. **Start the development server:**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Open your browser:**
   Navigate to \`<http://localhost:5173\`> and begin your journey.

---

<div align="center">
  <br/>
  <i>"ALL SYSTEMS OPERATIONAL // TRAVEL BACK TO THE ANCIENT WORLD"</i>
  <br/>
  <b>— Raunak Saha</b>
</div>