# ScribbleKit 🎨
> **140+ Hand-Drawn Vector Assets, Funky Scribbles & Interactive Studio**

[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vector Quality](https://img.shields.io/badge/Vectors-100%25%20SVG-EA552B)](https://github.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-0BDC85.svg)](LICENSE)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FJakeerC%2FScribbleKit)

---

## ⚡ Features

* **140 Clean Vector SVGs**: 100% resolution-independent, hand-crafted vector graphics organized across 9 categories.
* **Funky & Colorful Multi-Layer Collection (24 items)**:
  * **Cactus Spotted Hand**: Green 3-pronged organic shape with black freckle thorns.
  * **Blue Wireframe Scribble Blob**: Asymmetric sky-blue pebble with chaotic, energetic loopy wire scribbles.
  * **Sunny Spring Oval**: Tilted yellow oval pill with continuous black coil loops.
  * **Bubblegum Seed Pebble**: Soft pink pebble with dark berry-pink watermelon seed droplets.
  * **Retro Comic 3D Lightning**: Warm coral bolt with bold solid black 3D block extrusion shadow.
  * **Curly Telephone Spring**: Cascading vertical spiral doodle with expanding overlapping rings.
  * **Carved Striped Pebble**: Deep ink black pebble with carved negative space contour stripes.
  * **Retro 'New' Starburst Stamp**: Terracotta 24-point sticker seal with bold 'New' typography.
  * **Groovy Retro Daisy, Wavy Rainbow Arch, Confetti Blast, Warped Checkers**, and more!
* **React Component System**: Includes `<Scribble name="..." />` and `<ScribbleHighlight styleType="..." />` for effortless inline headline wrapping.
* **Live Interactive Studio**:
  * **Headline & CTA Studio**: Test hand-drawn highlights and funky spring oval backdrops over live copy.
  * **Color Switcher**: Toggle between "Original" authentic multi-colors or live re-theming with any palette.
  * **Animated Draw-On Effect**: Built-in SVG path stroke-dasharray animation mimicking live hand-drawing.
  * **1-Click Copy & Download**: Copy raw SVG, copy React JSX, or download standalone `.svg` files instantly.
* **Zero Runtime Overhead**: SVGs adapt dynamically to CSS `currentColor` and require no heavy external graphics libraries.

---

## 🚀 Quick Start

### 1. Install & Run the Studio
```bash
# Install dependencies
npm install

# Start local interactive studio
npm run dev

# Build for production
npm run build
```

Open [http://localhost:5173](http://localhost:5173) to launch the **ScribbleKit Studio**.

---

## 🚢 Deployment

### Deploy to Vercel

ScribbleKit is pre-configured for instant zero-configuration deployment on [Vercel](https://vercel.com):

#### Option 1: 1-Click Deploy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FJakeerC%2FScribbleKit)

#### Option 2: Via Vercel Web Dashboard
1. Go to [vercel.com/new](https://vercel.com/new).
2. Connect and import your GitHub repository (`ScribbleKit`).
3. Vercel automatically detects the **Vite** framework:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **Deploy**.

#### Option 3: Via Vercel CLI
```bash
# Preview deployment (runs build & deploys preview environment)
npx vercel

# Production deployment
npx vercel --prod
```

The repository includes a ready-to-use [`vercel.json`](./vercel.json) configured with:
* **SPA Routing Fallback**: All client-side routes rewrite to `/index.html` preventing 404s on page refresh or deep linking.
* **Security Headers**: HSTS-ready headers including `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, and `Permissions-Policy`.
* **Optimized Caching**: Cache-Control headers tuned for hashed Vite assets (`max-age=31536000, immutable`) and static SVG scribble assets.

---

## 📁 Asset Directory Structure

All raw vector SVGs are accessible in `public/assets/scribbles/`:

```
public/assets/scribbles/
├── funky-complex/       # 24 items (cactus spotted hand, blue wire blob, spring oval, 3D bolt, rainbow)
├── underlines/          # 16 items (waves, calligraphic swooshes, rough marker, swash drop)
├── circles/             # 15 items (double loop, oval capsule, rough single, halos, cloud)
├── arrows/              # 18 items (hero CTA pointers, loop-the-loop, U-turn, zigzags)
├── stars-sparkles/      # 15 items (4-point modern sparkle, 5-point organic, bursts, retro)
├── badges-frames/       # 12 items (32-point starburst, stamp, polaroid, brackets)
├── abstract-doodles/    # 16 items (lightning bolt, spiral coil, heart, smiley, waves)
├── accents-emphasis/    # 14 items (double exclamation, quotes, checkmark, crown, strike)
└── signature-shapes/    # 10 items (signature starburst badge, contour circles, fluid curves)
```

---

## 💻 React Component Usage

### 1. Basic `<Scribble />` Component
Render any vector asset by its identifier:

```tsx
import { Scribble } from './components/Scribble';

export function Example() {
  return (
    <div className="flex items-center gap-4">
      {/* Basic render */}
      <Scribble name="arrow-curved-down-right" color="#EA552B" size={48} />

      {/* Animated draw-on path */}
      <Scribble name="underline-wave-single" color="#F7D046" animate={true} />

      {/* Inherits currentColor from Tailwind text class */}
      <div className="text-emerald-500 hover:text-emerald-600">
        <Scribble name="star-4-point-sparkle" size={32} />
      </div>
    </div>
  );
}
```

### 2. Highlighting Headlines with `<ScribbleHighlight />`
Wrap any word or phrase with a hand-drawn circle, underline, or capsule with **zero layout shift**:

```tsx
import { ScribbleHighlight } from './components/ScribbleHighlight';

export function Hero() {
  return (
    <h1 className="text-5xl font-extrabold text-black font-display">
      Build software people{' '}
      <ScribbleHighlight styleType="circle-double" color="#EA552B">
        actually love
      </ScribbleHighlight>{' '}
      without the fluff.
    </h1>
  );
}
```

#### Available Highlight Styles:
* `underline-wave`: Loose wavy underline
* `underline-swoosh`: Broad calligraphic brush sweep
* `underline-swash`: Signature underline swash with accent drop
* `underline-rough`: Natural straight marker stroke
* `circle-double`: Classic double-loop emphasis circle
* `circle-capsule`: Elongated pill enclosure for multiple words
* `box-rough`: Loose hand-drawn rectangle
* `arrow-curved`: Curving pointer pointing down onto the word
* `star-sparkle`: Corner sparkle accent

---

## 🎨 Design System & Palette

| Swatch | Name | Hex | Usage |
| :--- | :--- | :--- | :--- |
| 🟠 | **Persimmon Orange** | `#EA552B` | Hero badges, primary CTA emphasis |
| 🟡 | **Sunny Goldenrod** | `#F7D046` | Highlighters, sparkles, sunny accents |
| 🟢 | **Kelly Green** | `#4CA96D` | Growth arrows, affirmative checks |
| 🌸 | **Bubblegum Pink** | `#EE8DB9` | Playful stickers, heart doodles |
| 🔵 | **Sky Blue** | `#55BBDA` | Editorial accent clouds, tech callouts |
| 🌿 | **ScribbleKit Mint** | `#0BDC85` | Primary kit brand accent |
| 📜 | **Warm Parchment** | `#FBE8DE` | Warm paper contrast fills |
| 🖤 | **Ink Black** | `#141416` | Deep contrast calligraphic ink |

---

## 🛠️ CLI Asset Generator

If you ever wish to modify or regenerate the SVGs or add new paths:
```bash
python3 scripts/build_scribbles.py
```
This regenerates all 116 SVGs into `public/assets/scribbles/` and synchronizes `src/lib/scribbles-data.ts`.

---

## 📖 Architectural & Design System Guide

For the complete architectural, visual, and technical design system guide, see [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md).

---

## 📄 License
MIT License. Free for commercial and personal design projects.
Created for ScribbleKit.
