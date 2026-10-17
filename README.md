# Neev Welfare Foundation | Next.js Multi-Page Web Platform

> **Grassroots Transformation | Education | Healthcare | Women Empowerment | Rural Development**  
> *A registered Section 8 Non-Profit Organization (80G & 12A Certified, Jhansi & Bundelkhand, Uttar Pradesh)*  
> *Official Domain: [www.neevwelfare.org](https://www.neevwelfare.org/)*

---

## 1. Project Overview

This repository contains the multi-page **Next.js** application for **Neev Welfare Foundation**, built as a mobile-first, static-site-generated (SSG) web platform hosted on **GitHub Pages**.

The website presents the foundation's grassroots initiatives across Bundelkhand, with dedicated routes for our programs, leadership, impact metrics, volunteer onboarding, and 80G tax-exempt donations.

---

## 2. Technology Stack

- **Framework**: Next.js 16 (App Router, Static HTML Export `output: "export"`)
- **Library**: React 19 & TypeScript 5
- **Styling**: Tailwind CSS v4 via `@tailwindcss/postcss` & PostCSS
- **Animations & Micro-interactions**: CSS Transforms & Transitions, Framer Motion
- **Icons**: Lucide React
- **Typography**: Google Fonts via `next/font/google` (Inter for body text, Montserrat for headings)
- **Deployment**: GitHub Pages via GitHub Actions
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
│   ├── globals.css               # Design tokens, Tailwind imports, accessibility rules
│   ├── not-found.tsx             # Custom 404 page
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
│   │   ├── DirectorCard.tsx      # Board of Directors executive profile card
│   │   ├── TeamLeadCard.tsx      # Core Leadership Team member card
│   │   ├── InterventionCard.tsx  # Focus area card with modal details trigger
│   │   ├── ImpactStatCard.tsx    # Animated KPI counter with IntersectionObserver
│   │   ├── NewsCard.tsx          # Field story card with category badge
│   │   ├── PillarCard.tsx        # Core organizational pillar card
│   │   └── EventCard.tsx         # Community drive card with volunteer RSVP
│   ├── layout/
│   │   ├── Header.tsx            # Sticky header with active page indicators
│   │   ├── MobileDrawer.tsx      # Accessible slide-out navigation drawer
│   │   ├── Footer.tsx            # Multi-column footer with statutory identifiers
│   │   └── BackToTop.tsx         # Circular scroll progress indicator
│   ├── modals/
│   │   ├── FocusAreaModal.tsx    # Detailed programmatic scope dialog
│   │   ├── NewsArticleModal.tsx  # Full story reader dialog
│   │   ├── DonationConfirmModal.tsx # Contribution confirmation and 80G receipt modal
│   │   └── CsrDeckModal.tsx      # Corporate CSR presentation download modal
│   ├── sections/                 # Modular page sections
│   └── ui/
│       └── Toast.tsx             # Toast notification system
├── lib/
│   ├── constants.ts              # Organization metadata, statutory identifiers, navigation config
│   ├── data.ts                   # Data models for interventions, leadership, news, events
│   └── utils.ts                  # Utility functions (cn class merge, formatCurrency)
├── public/
│   ├── CNAME                     # Custom domain binding (www.neevwelfare.org)
│   ├── favicon.ico               # Organization emblem favicon
│   ├── favicon.png               # High-resolution PNG favicon
│   ├── apple-touch-icon.png      # Apple mobile touch icon
│   └── images/                   # Visual assets and leadership portraits
├── next.config.ts                # Next.js static export config (output: "export", trailingSlash: true)
├── postcss.config.mjs            # PostCSS configuration with @tailwindcss/postcss
├── tsconfig.json                 # TypeScript strict configuration
└── package.json                  # Next.js scripts and dependencies
```

---

## 4. Multi-Page Architecture & Route Directory

| URL Route | Page Title | Purpose & Content |
| :--- | :--- | :--- |
| `/` | Home | Overview of mission, key interventions, verified impact numbers, and recent news |
| `/about/` | About Us | Foundation origin, core pillars, 80G & 12A tax certificates, governance FAQs |
| `/programs/` | Our Programs | 8 core focus areas with category filter tabs and execution methodology |
| `/team/` | Leadership & Team | Board of Directors, Core Leadership Team, and institutional governance framework |
| `/impact/` | Verified Impact | Animated KPI counters, milestone timeline, United Nations SDG alignment |
| `/get-involved/` | Get Involved | Volunteer application form, community drives RSVP, Corporate CSR partnerships |
| `/donate/` | 80G Donation | Preset contribution tiers, PAN verification, statutory 80G tax receipt |
| `/news/` | Field Updates | News articles with category filters, full reading modals, media inquiry desk |
| `/contact/` | Contact Us | Direct message form, Jhansi head office details, transit & Google Maps directions |
| `/not-found` | 404 Error | Custom 404 page with navigation links back to key sections |

---

## 5. Organizational Governance & Leadership Structure

The organization operates under a two-tier leadership model in accordance with Section 8 of the Companies Act, 2013:

1. **Board of Directors**:
   - Executive leadership responsible for fiduciary governance, statutory compliance, and strategic vision.
   - Profiles include founding changemakers with individual mandates across operations, maternal & child welfare, and strategic partnerships.

2. **Core Leadership Team**:
   - Functional leads driving day-to-day grassroots execution across project management, operations, technology, corporate relations, human resources, and community branding.

---

## 6. Key Features & User Experience

- **Intervention Cards**: Image zoom on hover, category pill badge, impact metric, and modal popup for detailed initiative specifications.
- **Impact KPI Counters**: Hardware-accelerated animated number count-up triggered when scrolled into view.
- **80G Donation Portal**: Preset contribution tiers, frequency selector (One-Time vs Monthly), and PAN input validation for official Section 80G tax exemption receipts.
- **Event Drives & RSVP**: Community drives with one-click synchronization to the volunteer registration form.
- **Responsive Mobile Navigation**: Touch-friendly slide-out drawer with backdrop blur and auto-dismiss upon navigation.
- **Accessibility (WCAG 2.2 AA)**:
  - Minimum 44×44px touch targets on all interactive elements.
  - Visible keyboard focus indicators and logical tab order.
  - Respects `@media (prefers-reduced-motion: reduce)` settings.

---

## 7. Local Development

### Prerequisites
- Node.js (v18.17.0 or higher)
- npm

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build Production Static Site
```bash
npm run build
```
This compiles the application into the `out/` directory with pre-rendered static HTML, CSS, JavaScript, and assets.

---

## 8. GitHub Pages Deployment

### Static Export
Configured in `next.config.ts`:
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
Each route is exported as `out/[route]/index.html` (e.g., `out/about/index.html`), allowing clean direct URL access and page refreshes on static hosts.

### Automated GitHub Actions Workflow
The workflow file at `.github/workflows/deploy.yml` triggers on pushes to `main`:
1. Checks out repository code.
2. Installs dependencies (`npm ci`).
3. Compiles the Next.js static export (`npm run build`).
4. Uploads the `out/` directory as an artifact.
5. Deploys to GitHub Pages via `actions/deploy-pages@v4`.

### Custom Domain
The `public/CNAME` file binds `www.neevwelfare.org` to the GitHub Pages environment.

---

## 9. Statutory Compliance & Contact

&copy; 2026 Neev Welfare Foundation. All Rights Reserved.  
- **Corporate Identity Number (CIN)**: U85300UP2022NPL168924  
- **NITI Aayog NGO Darpan**: UP/2022/0329184  
- **Income Tax 80G Approval**: AABCN7313DF20231  
- **Income Tax 12A Registration**: AABCN7313DE20231  
- **Registered Address**: Garautha, Jhansi District, Bundelkhand, Uttar Pradesh - 284202, India  
- **Email**: [info@neevwelfare.org](mailto:info@neevwelfare.org) | **Phone**: +91 96963 87400
