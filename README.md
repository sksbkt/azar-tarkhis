# Osuli Customs Services (شرکت بازرگانی اصولی شجاعی)

> A modern, high-precision Next.js web application built for **Osuli Customs Services (بازرگانی اصولی شجاعی)**, an Iranian international trade, customs clearance, and vehicle import firm. Faithfully crafted 1:1 against the official Figma design system.

---

## 🌟 Project Overview

This project implements the comprehensive homepage for **بازرگانی اصولی شجاعی**, featuring a modern RTL (Right-to-Left) Persian layout, responsive mobile-to-desktop grid systems, custom geometric clip-paths, live currency tickers, interactive vehicle pricing carousels, and design-token architecture.

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) with native CSS Custom Properties & Design Tokens
- **Typography:** Custom Persian **Peyda (پیدا)** font family (Thin to Black with Persian numerals)

---

## 🏛️ Component Architecture

The application is structured into modular, reusable section components under `src/components/sections/`:

| Component | Description |
| :--- | :--- |
| **`Header`** | Sticky frosted-glass navbar with brand identity, animated navigation links, quick call CTA button, and user authentication trigger. |
| **`StoriesBar` & `HeroSlider`** | Instagram-style story bubbles for service highlights paired with a responsive hero carousel showcasing customs clearance and vehicle imports. |
| **`ServicesGrid`** | A 3x2 responsive grid illustrating core business services with custom hover effects, icons, and micro-interactions. |
| **`VehicleCatalog`** (`DailyPrices`) | Live vehicle price showcase for imported passenger cars and commercial tractors/trucks with pinned category banners, custom cyan Toman (`تومان`) SVG vector icons, smooth horizontal scroll tracks, and 5-second auto-reset pagination. |
| **`CurrencyTicker`** | Full-bleed edge-to-edge tapered ribbon (`h-[88px]`) displaying live exchange rates (EUR, USD, AED, etc.) with infinite loop marquee, hover-pause interaction, thin slash dividers, and pinned right consultation button. |
| **`WeblogSection`** | 3-column articles showcase featuring parallel upward-slanted card masks (`#blog-body-slant-mask`), protruding parallelogram author/date badges, RTL navigation buttons, and responsive read-more links. |
| **`CtaBanner`** (`ConsultationCta`) | High-impact consultation banner combining a deep-teal parallelogram background (`#045D89`) with a protruding, edge-to-edge cropped handshake graphic using strict `-3.5deg` parallel skew geometry and interactive lead-generation modal. |
| **`Footer`** | Full-bleed dark surface (`#1F242D`) with a straight-slanted top edge (`#footer-top-slant-mask`), interlocking multi-color OCS emblem, newsletter subscription form, navigation pill bar, inline contact items, and a giant edge-to-edge SVG vector watermark (`OSULI CUSTOMS SERVICES`). |

---

## 🎨 Design Token System

Design tokens are centralized in [`src/styles/tokens.css`](src/styles/tokens.css) and exposed through CSS variables:

### Brand Primary & Teal Palette
```css
--color-brand-primary: #035B81; /* Primary brand teal */
--color-brand-ocean:   #026AA2; /* Ocean blue for OCS emblem & highlights */
--color-brand-deep:    #084B70; /* Tapered currency ribbon */
--color-brand-cta:     #045D89; /* Consultation CTA banner */
--color-brand-sky:     #0284C7; /* Action buttons & contact icons */
```

### Accents & Surfaces
```css
--color-accent-gold:          #F0A818; /* Gold badges, tags & OCS emblem */
--color-accent-amber:         #F5B027; /* Currency rate numbers */
--color-surface-footer:       #1F242D; /* Full-bleed dark footer */
--color-surface-footer-card:  #282E38; /* Footer newsletter input */
--color-surface-footer-pill:  #2C333E; /* Footer navigation pill bar */
--color-surface-badge:        #D8DEE6; /* Parallelogram blog date/author badge */
--color-surface-ice:          #E3F2FC; /* Arrow icon buttons */
```

### Typography & Geometry
- **Font Family:** `PeydaFaNum` (Persian numerals enabled by default across weights 100–900).
- **Parallel Skew Angle:** `-3.5deg` (`transform: skewX(-3.5deg)` with counter-skew for upright content).
- **Container Max Width:** `1380px` centered with responsive gutter padding (`px-6 sm:px-8`).

---

## 🛠️ Key Technical Implementations

1. **Parallel Slanted Geometry & Dynamic Clipping:**
   - Vector clip-paths (`clipPathUnits="objectBoundingBox"`) for responsive slanted vehicle photo masks and blog cards.
   - Exact mathematical CSS transforms (`skewX(-3.5deg)` and counter-rotation `skewX(3.5deg)`) for parallel vertical borders on banners with undistorted border radii.
2. **Horizontal Carousels with Auto-Reset Logic:**
   - Independent horizontal scroll tracks for both passenger cars and heavy trucks in the Daily Prices section.
   - Pinned category banner cards layered with `z-30` stacking so scrolling vehicle cards slide smoothly underneath.
   - 5-second automatic reset timer returning the scroll track to the initial card upon user idle.
3. **Full-Bleed Marquee with Pause-on-Hover:**
   - Edge-to-edge tapered ribbon with seamless continuous marquee animation that smoothly pauses when hovered by cursor or touched.
4. **Responsive & Overflow Safety:**
   - Root-level `overflow-x-hidden` guarantees that full-bleed ribbons, slanted overflows, and negative top protrusions never cause horizontal viewport jumping or scrollbar jitter on mobile devices.

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18.18 or higher recommended)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)

### Installation
```bash
# Clone the repository
git clone https://github.com/your-username/azar-tarkhis.git

# Navigate into the project directory
cd azar-tarkhis

# Install dependencies
npm install
```

### Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Production Build
```bash
npm run build
npm run start
```

---

## 📄 License
This project is proprietary and developed for **شرکت بازرگانی اصولی شجاعی**. All rights reserved © 2026.
