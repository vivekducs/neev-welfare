# Neev Welfare Foundation | Official Website

> **Grassroots Transformation | Education | Healthcare | Women Empowerment | Rural Development**  
> *A registered Section 8 Non-Profit Organization (80G & 12A Certified, Jhansi & Bundelkhand, Uttar Pradesh)*

---

## Overview

The **Neev Welfare Foundation** website is a high-performance, accessible, responsive, and interactive digital platform designed to showcase grassroots social transformation, facilitate tax-exempt contributions (Section 80G), onboard volunteers, and forge corporate CSR partnerships under Schedule VII of the Companies Act.

Built with **pure semantic HTML5, modern vanilla CSS3, and modular vanilla JavaScript (ES6+)** with zero external framework dependencies for maximum speed, security, and effortless deployment.

---

## Key Features

### 1. Modern Header & Navigation
- **Responsive Sticky Header** with blur backdrop and elevation shadow on scroll.
- **Active Section Indicator** matching design specifications with pill-shaped highlight.
- **Dynamic Mobile Drawer**: Smooth slide-in menu with backdrop-blur overlay, touch-friendly tap targets, and auto-dismiss on link selection.
- **Optimized for all viewports**: Seamlessly fits desktop (1440px+), laptops, tablets, and small smartphones down to 320px.

### 2. Rich Interactivity & Load Animations
- **Top Loading Progress Bar**: Smooth dynamic indicator from 0% to 100% on page load.
- **Staggered Hero Entrance Animations**: Smooth fade-down and slide-up keyframes for headlines, action buttons, and hero media.
- **Vibrant Color in Hover Effects**:
  - Pillar cards with dedicated color glows (Education Blue, Healthcare Emerald, Livelihood Teal).
  - Intervention cards with glowing emerald top accent borders and image zoom.
  - Health cards with tinted backgrounds and metric pops.
  - Social media icons featuring official platform colors on hover (Facebook, Twitter, Instagram, LinkedIn, YouTube).
  - High-contrast interactive buttons with glowing elevation shadows.

### 3. Interactive Focus Area Filter Chips
- Instant category filtering across **What We Do** interventions:
  - *All Focus Areas (8)*
  - *Education & Children*
  - *Youth & Women*
  - *Health & Rural*
  - *Ecology & Innovation*
- Smooth transitions when toggling categories.
- **Full-Card Clickability**: Clicking anywhere on a card triggers its comprehensive details modal.

### 4. Interactive Forms & Contribution Engine
- **Tax-Deductible Donation Calculator**: Instant calculation of Section 80G tax savings with preset tier buttons (INR 500 to INR 10,000) or custom amount input.
- **Payment Channel Selection**: Instant UPI / QR, Net Banking, and Cards.
- **Volunteer Onboarding Form**: Detailed applicant profile collection with immediate client-side validation.
- **Direct Contact Messaging**: Form with validation and prompt feedback notifications.
- **CSR Partnership Deck Request**: Modal dialog for corporate CSR executives to download Schedule VII impact reports.
- *Default testing applicant pre-filled with: **Vivek Kumar***.

### 5. Verified Section Coverage (16 Sections)
1. **Hero Section** with mission tag, primary CTAs, and registered compliance badge.
2. **Hero Trust Bar** (80G Certified, Transparency, Jhansi Field Office, Zero Admin Overhead).
3. **Core Mission & Three Pillars** (Educate, Empower, Transform).
4. **Key Interventions (What We Do)** - 8 focus areas with filter tabs & interactive modal popups.
5. **Detailed Showcase & Checklists** for Children's Welfare.
6. **Youth Development & Vocational Skills** with technical training highlights.
7. **Women Empowerment & Self-Help Collectives** with artisan livelihood metrics.
8. **Healthcare & Preventive Medical Camps** with 4 interactive initiative cards.
9. **Strategic Transformation Approach** (Identify, Engage, Implement, Sustain).
10. **Our Impact Numbers** (Animated counters: 4,200+ Children, 3,500+ Women, 15,000+ Screenings, 40+ Villages).
11. **Community Movement & Participation** cards.
12. **Tax-Deductible Contribution Engine** with live 80G exemption calculator.
13. **Events, Camps & Field Engagements** timeline.
14. **Leadership, Governance & Advisory Board** profiles.
15. **Recent Stories & Field Updates** (Interactive news modals).
16. **Volunteer Application, Direct Contact Form, CSR Partnership Banner, and Comprehensive 4-Column Footer**.

---

## Tech Stack

- **Markup**: HTML5 (Semantic, Accessible ARIA, OpenGraph & Twitter Meta Tags, Schema-ready)
- **Styles**: Vanilla CSS3 (Custom design tokens, Flexbox, CSS Grid, Glassmorphism, CSS Animations, media queries for 320px to 1920px)
- **Scripting**: Vanilla JavaScript (ES6+, IntersectionObserver, DOM manipulation, custom event listeners, modular structure)
- **Typography**: Google Fonts (Montserrat for bold headers, Inter for crisp body readability)
- **Dependencies**: Zero (no npm, no Webpack/Vite build required, pure web standards)

---

## Project Structure

```
Neevwelfare/
├── .gitignore              # Git ignore rules for OS and editor files
├── README.md               # Documentation & deployment guide
├── index.html              # Complete 16-section HTML5 webpage
├── css/
│   └── main.css            # Complete design system, responsive layouts & animations
├── js/
│   └── main.js             # Sticky nav, drawer, donation engine, modals, filtering
└── images/                 # Optimized visual assets and icons (24 images)
```

---

## How to Run Locally

Because this project uses vanilla web standards, you can preview it instantly:

### Option 1: Direct File Opening
Simply double-click `index.html` to open it in Google Chrome, Microsoft Edge, Firefox, or Safari.

### Option 2: Local Python Server (Recommended)
Open your terminal in this directory and run:
```bash
python -m http.server 8080
```
Then visit `http://localhost:8080/` in your browser.

### Option 3: VS Code Live Server
Right-click `index.html` inside VS Code and choose **"Open with Live Server"**.

---

## How to Upload to GitHub (Step-by-Step)

The repository has already been initialized and committed with a clean Git history. Follow these quick steps to push it to your GitHub account:

### Step 1: Create a New Repository on GitHub
1. Log in to GitHub.
2. Click the plus icon in the top right corner and select **"New repository"**.
3. Name your repository (for example, `neev-welfare`).
4. Keep the repository **Public** (or Private).
5. **Do NOT check** "Initialize this repository with a README", ".gitignore", or "license" (we already created them for you).
6. Click **"Create repository"**.

### Step 2: Push Your Local Code to GitHub
Open your terminal (PowerShell or Bash) in this project folder and run:

```bash
# Link your local repo to your GitHub repository:
git remote add origin https://github.com/vivekducs/neev-welfare.git

# Ensure the branch is named main:
git branch -M main

# Push your files:
git push -u origin main
```

---

## How to Deploy to GitHub Pages (Free Live Website)

You can host this website completely free using **GitHub Pages** in less than 1 minute:

1. Go to your repository on GitHub: https://github.com/vivekducs/neev-welfare
2. Click **Settings** (top navigation tab).
3. In the left sidebar, click **Pages**.
4. Under **"Build and deployment" > "Branch"**:
   - Select **main** from the branch dropdown.
   - Leave the folder as **/(root)**.
5. Click **Save**.
6. Refresh after 30-60 seconds. You will see a banner with your live URL:
   https://vivekducs.github.io/neev-welfare/

---

## License & Compliance

(c) 2026 Neev Welfare Foundation. All Rights Reserved.  
Registered Section 8 Non-Profit Organization under the Indian Companies Act, 2013.  
Donations are eligible for tax exemption under Section 80G of the Income Tax Act, 1961.
