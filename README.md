# ScribbleKit 🎨
> **150+ Hand-Drawn Vector Assets, Funky Scribbles, Animated Highlights & Interactive Studio**

[![npm version](https://img.shields.io/npm/v/scribblekit.svg?color=EA552B)](https://www.npmjs.com/package/scribblekit)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18%20%7C%2019-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vector Quality](https://img.shields.io/badge/Vectors-100%25%20SVG-0BDC85)](https://github.com/JakeerC/ScribbleKit)
[![License: MIT](https://img.shields.io/badge/License-MIT-0BDC85.svg)](LICENSE)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FJakeerC%2FScribbleKit)

---

## ⚡ Features

* **150+ Clean Vector SVGs**: 100% resolution-independent, hand-crafted vector graphics organized across 9 categories.
* **Production-Grade NPM Package**: Dual ESM + CommonJS bundles, complete TypeScript types, zero runtime overhead.
* **React Component System**: Includes `<Scribble name="..." />` and `<ScribbleHighlight styleType="..." />` for effortless inline headline wrapping with zero layout shift.
* **Embedded Vector Editor**: Exported `<SvgEditor />` component for full in-browser SVG manipulation and stamp drawing.
* **Funky Multi-Layer Collection (24 items)**:
  * **Cactus Spotted Hand**: Green 3-pronged organic shape with black freckle thorns.
  * **Blue Wireframe Scribble Blob**: Asymmetric sky-blue pebble with chaotic, energetic loopy wire scribbles.
  * **Sunny Spring Oval**: Tilted yellow oval pill with continuous black coil loops.
  * **Retro Comic 3D Lightning**: Warm coral bolt with bold solid black 3D block extrusion shadow.
  * **Carved Striped Pebble, Groovy Daisy, Wavy Rainbow Arch, Confetti Blast, Warped Checkers**, and more!
* **Built-in Animations**: Path stroke draw-on, wobble, sparkle, rotate, float, pulse, and bounce.
* **Live Interactive Studio**: Local and deployed web app to test, style, and copy SVGs or React JSX on the fly.

---

## 📦 Installation

Install `scribblekit` using your preferred package manager:

```bash
# npm
npm install scribblekit

# pnpm
pnpm add scribblekit

# yarn
yarn add scribblekit

# bun
bun add scribblekit
```

### Peer Dependencies
`scribblekit` requires React 18 or 19:
```bash
npm install react react-dom
```

---

## 🚀 Quick Usage

### 1. Import Styles
Import the keyframe animations in your app's root (e.g. `main.tsx`, `App.tsx`, or `_app.tsx`):

```tsx
import 'scribblekit/style.css';
```

*(Note: Structural positioning works out of the box even without CSS, but `style.css` enables the hand-drawn draw, wobble, sparkle, bounce, and spin animations!)*

---

### 2. Basic `<Scribble />` Component
Render any vector scribble by its ID:

```tsx
import { Scribble } from 'scribblekit';

export function Example() {
  return (
    <div className="flex items-center gap-6">
      {/* Basic colored scribble */}
      <Scribble name="arrow-curved-down-right" color="#EA552B" size={48} />

      {/* Animated hand-drawn stroke draw-on */}
      <Scribble name="underline-wave-single" color="#F7D046" animate="draw" />

      {/* Wobble animation */}
      <Scribble name="funky-yellow-spring-oval" size={64} animate="wobble" />

      {/* Inherits currentColor from parent typography */}
      <div className="text-emerald-500 hover:text-emerald-600">
        <Scribble name="star-4-point-sparkle" size={32} animate="sparkle" />
      </div>
    </div>
  );
}
```

#### Animation Presets:
* `'draw'` — Hand-drawn SVG stroke dash animation
* `'wobble'` — Organic jitter/wobble
* `'sparkle'` — Pulsing sparkle rotation
* `'rotate'` / `'spin'` — Continuous smooth rotation
* `'float'` — Floating elevation loop
* `'bounce'` — Gentle vertical bounce
* `'pop'` — Spring pop scale-in
* `'original'` / `true` — Uses the asset's recommended default animation

---

### 3. Headline Emphasis with `<ScribbleHighlight />`
Wrap any word or phrase with a hand-drawn circle, underline, or funky shape with **zero layout shift**:

```tsx
import { ScribbleHighlight } from 'scribblekit';

export function Hero() {
  return (
    <h1 className="text-5xl font-extrabold text-black">
      Build software people{' '}
      <ScribbleHighlight styleType="circle-double" color="#EA552B">
        actually love
      </ScribbleHighlight>{' '}
      without the{' '}
      <ScribbleHighlight styleType="underline-swash" color="#0BDC85">
        fluff
      </ScribbleHighlight>.
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
* `circle-rough`: Single loose marker loop
* `circle-capsule`: Elongated pill enclosure for multiple words
* `box-rough`: Loose hand-drawn rectangle
* `arrow-curved`: Curving pointer pointing down onto the word
* `star-sparkle`: Corner sparkle accent
* `funky-yellow-oval`: Retro yellow spring oval background pill
* `funky-comic-bolt`: 3D comic bolt accent
* `funky-hologram-seal`: Starburst seal stamp
* `funky-comic-boom`: Comic exclamation bubble backdrop
* `funky-ribbon-banner`: Hand-drawn banner backdrop

---

### 4. Raw SVG Assets & Utilities
Access the underlying SVG data and helper functions directly:

```ts
import {
  SCRIBBLES_ASSETS,
  CATEGORIES,
  COLOR_PRESETS,
  getScribbleById,
  getScribblesByCategory,
} from 'scribblekit';

// Find a scribble by ID
const arrow = getScribbleById('arrow-curved-down-right');

// Get all scribbles in a category
const underlines = getScribblesByCategory('underlines');

// List of all 9 categories
console.log(CATEGORIES);
```

---

### 5. Interactive SVG Vector Studio Component
Embed the complete in-browser SVG design editor:

```tsx
import { SvgEditor } from 'scribblekit';

export function EditorPage() {
  return (
    <div className="w-full h-screen">
      <SvgEditor />
    </div>
  );
}
```

---

## 🛠️ Local Development & Scripts

### Run the Interactive Studio Locally
```bash
npm install
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) to explore the full library and studio.

### Package & Library Build Scripts
```bash
# Build TypeScript declarations (.d.ts)
npm run build:types

# Build npm package (ESM + CommonJS + CSS + Types)
npm run build:lib

# Build web application studio (for Vercel deployment)
npm run build:app

# Build both web app and npm library
npm run build

# Run consumer integration tests
npm test

# Dry-run npm packaging tarball
npm pack --dry-run
```

---

## 🎨 Design System Palette

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

## 📄 License
MIT License. Free for commercial and personal design projects.
Created with ❤️ by ScribbleKit.
