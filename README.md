# Neev Welfare Foundation | Next.js Multi-Page Web Platform

> **Grassroots Transformation | Education | Healthcare | Women Empowerment | Rural Development**  
> *A registered Section 8 Non-Profit Organization (80G & 12A Certified, Jhansi & Bundelkhand, Uttar Pradesh)*  
> *Official Domain: [www.neevwelfare.org](https://www.neevwelfare.org/)*

---

## 1. Project Overview

This repository contains the production-grade, multi-page **Next.js** application for **Neev Welfare Foundation**, migrated from the original static single-page website into an accessible, mobile-first, static-site-generated (SSG) web platform hosted on **GitHub Pages**.

The website preserves all original content, branding, color schemes (Navy `#001c37`, Brand Green `#00873e`, Accent Red `#dc2626`), and exact recent leadership section changes, while establishing independent routing, rich interactive cards, accessible modals, and technical SEO.

---

## 2. Technology Stack

- **Framework**: Next.js 16 (App Router, Static HTML Export `output: "export"`)
- **Library**: React 19 & TypeScript 5
- **Styling**: Tailwind CSS v4 via `@tailwindcss/postcss` & PostCSS
- **Animations & Micro-interactions**: CSS Transforms & Transitions, Framer Motion
- **Icons**: Lucide React
- **Typography**: Google Fonts via `next/font/google` (Inter for body readability, Montserrat for headings)
- **Deployment**: GitHub Pages via GitHub Actions (`actions/deploy-pages@v4`)
- **Domain**: Custom root apex/subdomain via `CNAME` (`www.neevwelfare.org`)

---

## 3. Directory Structure

```text
Neevwelfare/
├── .github/
│   └── workflows/
│       └── deploy.yml            # Automated CI/CD GitHub Actions workflow for GitHub Pages
├── app/
│   ├── layout.tsx                # Global Root Layout (Header, Footer, ToastProvider, SEO Schema)
│   ├── page.tsx                  # Home Page (Comprehensive narrative overview)
│   ├── globals.css               # Design tokens, @import "tailwindcss", accessibility rules
│   ├── not-found.tsx             # Custom branded 404 page
│   ├── robots.ts                 # Dynamic robots.txt generation
│   ├── sitemap.ts                # Dynamic XML sitemap generation
│   ├── about/
│   │   └── page.tsx              # About Us (Mission, Story, Pillars, 80G status, FAQs)
│   ├── programs/
│   │   └── page.tsx              # Programs (8 focus areas, filter chips, modal deep-dive)
│   ├── team/
│   │   └── page.tsx              # Leadership & Team (Board of Directors, Core Team, Governance)
│   ├── impact/
│   │   └── page.tsx              # Impact (Quantified stats, milestone timeline, UN SDGs)
│   ├── get-involved/
│   │   └── page.tsx              # Volunteer & CSR (Drives RSVP, application form, CSR deck)
│   ├── donate/
│   │   └── page.tsx              # Donate (80G Tax-deductible portal, PAN verification, bank details)
│   ├── news/
│   │   └── page.tsx              # Field Updates (Stories of change, category filter, article reader)
│   └── contact/
│       └── page.tsx              # Contact Us (Jhansi HQ info, message form, map directions)
├── components/
│   ├── cards/
│   │   ├── DirectorCard.tsx      # Clean portrait frame, role, bullets, no bottom tags
│   │   ├── TeamLeadCard.tsx      # 130px circular avatar, 5 o'clock red star badge (Focalyt style)
│   │   ├── InterventionCard.tsx  # Interactive focus area card with hover zoom & modal trigger
│   │   ├── ImpactStatCard.tsx    # Animated count-up counter with IntersectionObserver
│   │   ├── NewsCard.tsx          # Card with zoom effect, category badge, and date
│   │   ├── PillarCard.tsx        # Mission pillar card with custom icon and metric pop
│   │   └── EventCard.tsx         # Community drive card with direct RSVP action
│   ├── layout/
│   │   ├── Header.tsx            # Sticky header, active link pill, mobile toggle
│   │   ├── MobileDrawer.tsx      # Accessible slide-out drawer with focus trapping
│   │   ├── Footer.tsx            # 4-column footer with 80G/12A trust badges and links
│   │   └── BackToTop.tsx         # Circular scroll progress ring and smooth scroll to top
│   ├── modals/
│   │   ├── FocusAreaModal.tsx    # Detailed programmatic scope & donation link
│   │   ├── NewsArticleModal.tsx  # Full story reader dialog
│   │   ├── DonationConfirmModal.tsx # UPI QR code, bank details, and payment confirmation
│   │   └── CsrDeckModal.tsx      # Corporate CSR Schedule VII deck download form
│   ├── sections/                 # Modular, reusable section components
│   └── ui/
│       └── Toast.tsx             # Accessible toast notification context & component
├── lib/
│   ├── constants.ts              # Organization metadata, bank accounts, navigation config
│   ├── data.ts                   # Fully typed data models for programs, leadership, news, events
│   └── utils.ts                  # Utility functions (cn class merge, formatCurrency)
├── public/
│   ├── CNAME                     # Custom domain (www.neevwelfare.org) for GitHub Pages
│   └── images/                   # All 28 optimized images and portraits
├── next.config.ts                # Next.js static export config (output: "export", trailingSlash: true)
├── postcss.config.mjs            # PostCSS configuration with @tailwindcss/postcss
├── tsconfig.json                 # TypeScript strict configuration
└── package.json                  # Next.js scripts and dependencies
```

---

## 4. Multi-Page Architecture & Route Directory

Each page has a unique canonical URL, descriptive metadata, semantic heading hierarchy, and responsive layout:

| URL Route | Page Title | Purpose & Content |
| :--- | :--- | :--- |
| `/` | Home | Comprehensive showcase of mission, interventions, impact, and calls to action |
| `/about/` | About Us | Foundation origin, core pillars, 80G & 12A tax certificates, governance FAQs |
| `/programs/` | Our Programs | 8 core focus areas with interactive filter tabs, execution methodology, modal dialogs |
| `/team/` | Leadership & Team | Board of Directors (clean portrait frame, no trustee tags), Core Team (Focalyt circular style + 5 o'clock red star badge), Governance standards |
| `/impact/` | Verified Impact | Animated KPI counters, 2023–2026 milestone timeline, United Nations SDG alignment |
| `/get-involved/` | Get Involved | Volunteer application form, community event RSVPs, Corporate CSR partnerships |
| `/donate/` | 80G Donation | Live tax calculator, preset tiers (₹500 to ₹5,000), PAN verification, UPI QR & Bank NEFT |
| `/news/` | Field Updates | News articles with category filters, full reading modals, media inquiry desk |
| `/contact/` | Contact Us | Direct message form, Jhansi head office details, transit & Google Maps directions |
| `/not-found` | 404 Error | Branded 404 page with navigation links back to Home, Programs, and Donate |

---

## 5. Leadership Section Formatting (Exact User Specifications)

1. **Board of Directors**:
   - Header: `BOARD OF DIRECTORS` (no "Founders & Trustee" label).
   - Clean card framing with high-resolution portraits.
   - Name and designation (e.g. `FOUNDER AND MANAGING DIRECTOR`).
   - Bulleted initiatives and responsibilities.
   - **No trustee labels, no symbols under photos, and no bottom trustee tags.**

2. **Core Leadership Team (Focalyt Reference Style)**:
   - Centered divider with pill badge: `CORE LEADERSHIP TEAM`.
   - **130px circular avatars** with clean border and elevation shadow.
   - **5 o'clock red star badge** overlay.
   - Bold Name and **uppercase designation** (e.g. `STATE PROJECT DIRECTOR`, `HEAD OF OPERATIONS`).
   - Responsive grid (3 columns desktop, 2 columns tablet, 1 column mobile).
   - **No bottom tags or symbols.**

---

## 6. Interactive Cards & UI/UX Features

- **Intervention Cards**: Image zoom on hover, category pill badge, impact metric, "Explore Details" trigger opening accessible dialog modal.
- **Impact Stat Cards**: Real-time animated number count-up using `IntersectionObserver` when scrolled into view.
- **Donation Calculator**: Interactive calculation of 50% Section 80G tax deductions with preset tiers, frequency selector (One-Time vs Monthly), and PAN input validation.
- **Event Cards**: Direct RSVP button that automatically selects the appropriate volunteer interest category and scrolls to the application form with toast feedback.
- **Mobile Navigation**: Slide-out drawer with backdrop blur, accessible ARIA attributes, keyboard escape handler, and auto-close upon navigation.
- **Back to Top**: Circular SVG progress ring tracking scroll depth, smoothly scrolling back to top on click.

---

## 7. Local Development Instructions

### Prerequisites
- Node.js (v18.17.0 or higher, tested on v20 and v24)
- npm or yarn

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Run Lint Check
```bash
npm run lint
```

### 4. Build Static Site Generation (SSG) Bundle
```bash
npm run build
```
This compiles the Next.js application into the `out/` directory with pre-rendered static HTML, CSS, JavaScript, and assets.

---

## 8. GitHub Pages Deployment

### Static Export Configuration
In `next.config.ts`, static HTML export is enabled:
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
```
With `trailingSlash: true`, Next.js exports each route as `out/[route]/index.html` (e.g., `out/about/index.html`), ensuring direct URL navigation and page refreshes work reliably on static web hosts.

### Automated GitHub Actions Workflow
The workflow file at `.github/workflows/deploy.yml` triggers automatically on pushes to the `main` branch:
1. Checks out the repository.
2. Installs dependencies (`npm ci`).
3. Runs ESLint verification (`npm run lint`).
4. Builds the static output (`npm run build`).
5. Uploads `out/` as a GitHub Pages artifact (`actions/upload-pages-artifact@v3`).
6. Deploys using the official action (`actions/deploy-pages@v4`).

### Custom Domain (CNAME)
The `public/CNAME` file contains:
```text
www.neevwelfare.org
```
When built, this file is automatically placed at the root of `out/CNAME`, instructing GitHub Pages to bind the custom domain `www.neevwelfare.org` with HTTPS enforcement.

---

## 9. SEO & Accessibility Standards

- **Metadata API**: Unique title and meta description tags across every page.
- **OpenGraph & Twitter Card**: Pre-configured sharing cards for social platforms.
- **JSON-LD Structured Data**: High-level `NGO` schema with CIN, NGO Darpan, 80G, and address metadata.
- **Sitemap & Robots**: Dynamically generated `sitemap.xml` and `robots.txt` based on canonical site URL.
- **Accessibility (WCAG 2.2 AA)**:
  - Minimum 44×44px touch targets on buttons and navigation items.
  - Clear keyboard focus indicators.
  - Accessible dialog modals with escape key handling and focus locking.
  - `@media (prefers-reduced-motion: reduce)` support to suppress animations for sensitive users.

---

## 10. License & Statutory Compliance

&copy; 2026 Neev Welfare Foundation. All Rights Reserved.  
- **Corporate Identity Number (CIN)**: U85300UP2022NPL169543  
- **NITI Aayog NGO Darpan**: UP/2023/0360721  
- **Income Tax 80G Approval**: AABCN7313DF20231  
- **Income Tax 12A Registration**: AABCN7313DE20231  
- **Registered Address**: HIG-44, Deen Dayal Nagar, Jhansi, Uttar Pradesh - 284003, India  
- **Email**: [info@neevwelfare.org](mailto:info@neevwelfare.org) | **Phone**: +91 96960 99499
