import React, { useState } from 'react';
import { Sparkles, ArrowDown, BookOpen } from 'lucide-react';
import { Scribble } from './Scribble';

interface HeroProps {
  onScrollToCatalog: () => void;
  onScrollToStudio: () => void;
  onOpenGuide: () => void;
  assetCount: number;
}

export const Hero: React.FC<HeroProps> = ({
  onScrollToCatalog,
  onScrollToStudio,
  onOpenGuide,
  assetCount,
}) => {
  const [activeColor, setActiveColor] = useState('#EA552B');

  return (
    <section className="relative overflow-hidden pt-12 pb-24 border-b border-black/10 bg-gradient-to-b from-[#FAF4EC] via-scribble-paper to-[#F5ECE1]">
      {/* ========================================================= */}
      {/* DECORATIVE FLOATING FUNKY SCRIBBLLES (MATCHING SCREENSHOT) */}
      {/* ========================================================= */}

      {/* Top-Left: Coral Polka-Dot Blob */}
      <div className="absolute top-2 left-2 sm:left-4 md:left-8 opacity-95 pointer-events-none select-none animate-float-slow">
        <Scribble name="funky-coral-polka-blob" size={130} />
      </div>

      {/* Mid-Left: Black Striped Carved Pebble */}
      <div className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 md:left-6 lg:left-8 opacity-95 pointer-events-none select-none hidden sm:block">
        <Scribble name="funky-black-pebble-stripes" size={125} />
      </div>

      {/* Upper-Left: Green Cactus Spotted Hand */}
      <div className="absolute top-28 left-4 sm:left-10 md:left-14 lg:left-20 opacity-95 pointer-events-none select-none hover:rotate-6 transition-transform">
        <Scribble name="funky-cactus-spotted" size={115} />
      </div>

      {/* Center-Left: Triple Speed Slashes */}
      <div className="absolute top-[52%] left-24 sm:left-36 md:left-48 lg:left-64 opacity-85 pointer-events-none select-none hidden md:block">
        <Scribble name="funky-triple-speed-slash" size={70} />
      </div>

      {/* Bottom-Left: Big Sky-Blue Wireframe Scribble Pebble */}
      <div className="absolute -bottom-6 left-0 sm:left-4 md:left-10 lg:left-16 opacity-95 pointer-events-none select-none">
        <Scribble name="funky-blue-wire-scribble" size={190} />
      </div>

      {/* Top-Right: 4-Point Diamond Sparkle Star */}
      <div className="absolute top-16 right-20 sm:right-32 md:right-40 lg:right-48 opacity-90 pointer-events-none select-none animate-pulse">
        <Scribble name="funky-star-diamond-sparkle" size={50} />
      </div>

      {/* Mid-Right: Curly Telephone Spring Coil */}
      <div className="absolute top-20 right-2 sm:right-4 md:right-8 lg:right-12 opacity-95 pointer-events-none select-none">
        <Scribble name="funky-curly-spring-coil" size={150} />
      </div>

      {/* Bottom-Right: Soft Pink Watermelon Seed Pebble */}
      <div className="absolute -bottom-6 right-2 sm:right-8 md:right-16 lg:right-24 opacity-95 pointer-events-none select-none">
        <Scribble name="funky-pink-speckled-pebble" size={175} />
      </div>

      {/* Bottom-Right Edge: Pop Horizon Striped Ball */}
      <div className="absolute -bottom-8 -right-8 opacity-85 pointer-events-none select-none hidden xl:block">
        <Scribble name="funky-striped-globe-ball" size={110} />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Badge Banner */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-black/15 shadow-sm mb-8 hover:scale-105 transition-transform cursor-pointer"
          onClick={onOpenGuide}
        >
          <span className="w-2.5 h-2.5 rounded-full bg-scribble-orange animate-ping" />
          <span className="text-xs font-bold uppercase tracking-wider text-black">
            Funky Scribbbles Vector Kit
          </span>
          <span className="text-xs bg-scribble-yellow/40 text-black px-2 py-0.5 rounded-full font-bold">
            {assetCount} Colorful Vectors
          </span>
        </div>

        {/* Hero Headline with Retro 'New' Starburst Stamp */}
        <div className="relative inline-block mb-6">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-scribble-dark font-display leading-[1.05]">
            Funky Scribbbles
          </h1>

          {/* Stamped 'New' Starburst Badge */}
          <div className="absolute -top-8 -right-8 sm:-top-10 sm:-right-14 rotate-12 pointer-events-none select-none drop-shadow-md">
            <Scribble name="funky-badge-starburst-new" size={78} />
          </div>
        </div>

        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-black/75 mb-8 leading-relaxed font-sans font-medium">
          A collection of funky vectorized scribbbles, organic spotted blobs, telephone coils, 3D comic bolts, and wireframe loops to spice up your design projects.
        </p>

        {/* Interactive Color Switcher for Hero Preview */}
        <div className="inline-flex items-center gap-2 p-2 bg-white/95 backdrop-blur-sm rounded-full border border-black/15 shadow-sm mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-black/50 px-2">Palette:</span>
          {[
            { label: 'Retro Orange', color: '#EA552B' },
            { label: 'Sunny Yellow', color: '#F7D046' },
            { label: 'Kelly Green', color: '#4CA96D' },
            { label: 'Bubblegum Pink', color: '#EE8DB9' },
            { label: 'Sky Blue', color: '#55BBDA' },
            { label: 'Scribble Mint', color: '#0BDC85' },
          ].map((item) => (
            <button
              key={item.color}
              onClick={() => setActiveColor(item.color)}
              title={item.label}
              className={`w-7 h-7 rounded-full border-2 transition-all ${
                activeColor === item.color ? 'scale-110 border-black shadow-md' : 'border-transparent hover:scale-105'
              }`}
              style={{ backgroundColor: item.color }}
            />
          ))}
        </div>

        {/* Primary Call-to-actions with Yellow Oval Scribble Underneath */}
        <div className="flex flex-col items-center justify-center gap-6 mb-16">
          <div className="relative inline-flex items-center justify-center">
            {/* Sunny Spring Oval under Download Button */}
            <div className="absolute -inset-x-8 -inset-y-4 pointer-events-none select-none flex items-center justify-center">
              <Scribble name="funky-yellow-spring-oval" width={290} height={110} />
            </div>

            <button
              onClick={onScrollToCatalog}
              className="relative z-10 px-10 py-4.5 rounded-2xl bg-black hover:bg-neutral-900 text-white font-black text-base shadow-xl hover:shadow-2xl transition-all hover:scale-105 flex items-center justify-center gap-2.5 group cursor-pointer"
            >
              <span>Download now</span>
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>

          {/* Retro 3D Comic Lightning Bolt centered under button */}
          <div className="relative pointer-events-none select-none mt-1 hover:scale-110 transition-transform">
            <Scribble name="funky-bolt-comic-3d" size={80} color={activeColor} />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-4">
            <button
              onClick={onScrollToStudio}
              className="px-6 py-3 rounded-xl bg-white hover:bg-black/5 text-black font-bold text-sm border-2 border-black/20 hover:border-black shadow-sm transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-scribble-orange" />
              <span>Interactive Headline Studio</span>
            </button>

            <button
              onClick={onOpenGuide}
              className="px-5 py-3 rounded-xl bg-scribble-yellow/30 hover:bg-scribble-yellow/50 text-black font-bold text-sm border border-scribble-yellow/80 shadow-sm transition-all flex items-center justify-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-scribble-orange" />
              <span>Vector Design Guide</span>
            </button>
          </div>
        </div>

        {/* 4 Feature Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
          <div className="p-5 rounded-2xl bg-white/90 backdrop-blur-sm border border-black/10 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-scribble-orange/15 text-scribble-orange flex items-center justify-center font-bold mb-3">
              <Scribble name="badge-starburst-16" size={24} color="#EA552B" />
            </div>
            <h3 className="font-bold text-base text-black mb-1">100% Vector</h3>
            <p className="text-xs text-black/60 leading-normal">
              Infinitely scalable SVG geometry without pixelation or quality loss.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/90 backdrop-blur-sm border border-black/10 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-scribble-yellow/20 text-scribble-yellow flex items-center justify-center font-bold mb-3">
              <Scribble name="funky-yellow-spring-oval" size={28} />
            </div>
            <h3 className="font-bold text-base text-black mb-1">Complex & Funky</h3>
            <p className="text-xs text-black/60 leading-normal">
              Multi-colored organic blobs, wire scribbles, comic 3D shadows, and telephone coils.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/90 backdrop-blur-sm border border-black/10 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-scribble-green/15 text-scribble-green flex items-center justify-center font-bold mb-3">
              <Scribble name="funky-cactus-spotted" size={28} />
            </div>
            <h3 className="font-bold text-base text-black mb-1">Custom Palettes</h3>
            <p className="text-xs text-black/60 leading-normal">
              Supports CSS <code className="text-[11px] font-mono bg-black/5 px-1 py-0.5 rounded">currentColor</code> or hex palettes seamlessly.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/90 backdrop-blur-sm border border-black/10 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-scribble-pink/20 text-scribble-pink flex items-center justify-center font-bold mb-3">
              <Scribble name="funky-pink-speckled-pebble" size={26} />
            </div>
            <h3 className="font-bold text-base text-black mb-1">React + Raw SVG</h3>
            <p className="text-xs text-black/60 leading-normal">
              Use as React component, raw SVG files, or Figma vector imports.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
