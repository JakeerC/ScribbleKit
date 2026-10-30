import React, { useState } from 'react';
import { Sparkles, BookOpen, Pencil } from 'lucide-react';
import { Scribble } from './Scribble';
import { Navbar } from './Navbar';

interface HeroProps {
  onScrollToCatalog: () => void;
  onScrollToStudio: () => void;
  onOpenGuide: () => void;
  onOpenEditor: () => void;
  onDownloadAll?: () => void;
  assetCount: number;
}

export const Hero: React.FC<HeroProps> = ({
  onScrollToCatalog,
  onScrollToStudio,
  onOpenGuide,
  onOpenEditor,
  onDownloadAll = () => {},
  assetCount,
}) => {
  const [activeColor, setActiveColor] = useState('#EA552B');

  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden border-b border-black/10 bg-gradient-to-b from-[#FAF4EC] via-scribble-paper to-[#F5ECE1]">
      {/* Top Navbar sharing the exact same Hero background */}
      <Navbar
        onOpenGuide={onOpenGuide}
        onScrollToStudio={onScrollToStudio}
        onScrollToCatalog={onScrollToCatalog}
        onDownloadAll={onDownloadAll}
        onOpenEditor={onOpenEditor}
        assetCount={assetCount}
      />

      {/* ========================================================= */}
      {/* DECORATIVE FLOATING FUNKY SCRIBBLLES (MATCHING SCREENSHOT) */}
      {/* ========================================================= */}

      {/* Top-Left: Coral Polka-Dot Blob */}
      <div className="absolute top-20 sm:top-24 left-2 sm:left-6 lg:left-12 opacity-95 pointer-events-none select-none animate-float-slow">
        <Scribble name="funky-coral-polka-blob" size={145} />
      </div>

      {/* Mid-Left: Black Striped Carved Pebble */}
      <div className="absolute top-[52%] -translate-y-1/2 -left-6 sm:left-2 lg:left-8 opacity-95 pointer-events-none select-none">
        <Scribble name="funky-black-pebble-stripes" size={135} />
      </div>

      {/* Upper-Left: Green Cactus Spotted Hand */}
      <div className="absolute top-[26%] left-6 sm:left-14 lg:left-24 opacity-95 pointer-events-none select-none hover:rotate-6 transition-transform">
        <Scribble name="funky-cactus-spotted" size={135} />
      </div>

      {/* Bottom-Left: Big Sky-Blue Wireframe Scribble Pebble */}
      <div className="absolute -bottom-4 sm:bottom-4 left-0 sm:left-6 lg:left-12 opacity-95 pointer-events-none select-none">
        <Scribble name="funky-blue-wire-scribble" size={215} />
      </div>

      {/* Mid-Right: Curly Telephone Spring Coil */}
      <div className="absolute top-[26%] right-2 sm:right-6 lg:right-14 opacity-95 pointer-events-none select-none">
        <Scribble name="funky-curly-spring-coil" size={175} />
      </div>

      {/* Bottom-Right: Soft Pink Watermelon Seed Pebble */}
      <div className="absolute -bottom-4 sm:bottom-4 right-0 sm:right-6 lg:right-12 opacity-95 pointer-events-none select-none">
        <Scribble name="funky-pink-speckled-pebble" size={205} />
      </div>

      {/* Bottom-Right Edge: Pop Horizon Striped Ball */}
      <div className="absolute bottom-6 -right-8 opacity-80 pointer-events-none select-none hidden xl:block">
        <Scribble name="funky-striped-globe-ball" size={120} />
      </div>

      {/* Center Hero Content (Vertically Balanced in Full Screen) */}
      <div className="flex-1 flex flex-col justify-center items-center py-6 my-auto max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full">
        {/* Badge Banner */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-sm border border-black/15 shadow-sm mb-6 hover:scale-105 transition-transform cursor-pointer"
          onClick={onOpenGuide}
        >
          <span className="w-2.5 h-2.5 rounded-full bg-scribble-orange animate-ping" />
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-scribble-yellow/30 text-scribble-dark border border-scribble-yellow/60">
              ScribbleKit
            </span>
            <span className="hidden sm:inline-block text-xs font-mono font-medium text-black/50">
              v1.0.0 ({assetCount} assets)
            </span>
          </div>
        </div>

        {/* Hero Headline with Retro 'New' Starburst Stamp */}
        <div className="relative inline-block mb-4 sm:mb-5">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.75rem] font-black tracking-tight text-scribble-dark font-display leading-[0.98] select-none">
            Funky Scribbbles
          </h1>

          {/* Stamped 'New' Starburst Badge */}
          <div className="absolute -top-6 -right-6 sm:-top-8 sm:-right-8 md:-top-10 md:-right-10 lg:-top-11 lg:-right-12 rotate-12 pointer-events-none select-none drop-shadow-lg">
            <Scribble name="funky-badge-starburst-new" size={96} />
          </div>
        </div>

        <p className="max-w-2xl sm:max-w-3xl mx-auto text-base sm:text-xl md:text-2xl text-black/75 mb-8 sm:mb-10 leading-relaxed font-sans font-medium">
          A collection of funky vectorized scribbbles to spice up your design projects.
        </p>

        {/* Aesthetic Download & Centered Composition (Direct Match to Reference Image) */}
        <div className="relative flex flex-col items-center">
          {/* Flanking Speed Slashes to the left of the button */}
          <div className="absolute -left-20 sm:-left-28 md:-left-36 top-1 sm:top-2 pointer-events-none select-none">
            <Scribble name="funky-triple-speed-slash" size={72} />
          </div>

          {/* Flanking 4-Point Diamond Sparkle Star to the right of the button */}
          <div className="absolute -right-16 sm:-right-24 md:-right-32 top-0 sm:top-1 pointer-events-none select-none animate-pulse">
            <Scribble name="funky-star-diamond-sparkle" size={54} />
          </div>

          {/* The Button & Tucked Yellow Oval Stack */}
          <div className="relative flex flex-col items-center">
            {/* Clean, Aesthetic Black Download Button */}
           

            {/* Sunny Spring Oval tucked underneath button - curves extend downward cleanly */}
            <div className="relative -mt-6 sm:-mt-7 pointer-events-none select-none z-10 hover:scale-105 transition-transform">
              <Scribble name="funky-yellow-spring-oval" width={290} height={104} />
            </div>
          </div>

          {/* Retro 3D Comic Lightning Bolt directly below yellow oval */}
          <div className="relative -mt-2 sm:-mt-3 pointer-events-none select-none hover:scale-110 transition-transform">
            <Scribble name="funky-bolt-comic-3d" size={74} color={activeColor} />
          </div>

          {/* Helper Tools: Palette & Quick Access Links */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-7 sm:mt-8">
            {/* Interactive Color Switcher */}
            <div className="inline-flex items-center gap-1.5 p-1.5 sm:p-2 bg-white/95 backdrop-blur-sm rounded-full border border-black/15 shadow-sm">
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
                  className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 transition-all ${
                    activeColor === item.color ? 'scale-110 border-black shadow-md' : 'border-transparent hover:scale-105'
                  }`}
                  style={{ backgroundColor: item.color }}
                />
              ))}
            </div>

            {/* Secondary Quick Action Pill Links */}
            <button
              onClick={onOpenEditor}
              className="px-4 py-2 rounded-xl bg-black hover:bg-scribble-orange text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5 hover:-translate-y-0.5"
            >
              <Pencil className="w-3.5 h-3.5 text-scribble-yellow" />
              <span>SVG Editor Studio</span>
            </button>

            <button
              onClick={onScrollToStudio}
              className="px-4 py-2 rounded-xl bg-white hover:bg-black/5 text-black font-semibold text-xs border border-black/15 shadow-sm transition-all flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-scribble-orange" />
              <span>Headline Studio</span>
            </button>

            <button
              onClick={onOpenGuide}
              className="px-4 py-2 rounded-xl bg-scribble-yellow/30 hover:bg-scribble-yellow/50 text-black font-semibold text-xs border border-scribble-yellow/60 shadow-sm transition-all flex items-center gap-1.5"
            >
              <BookOpen className="w-3.5 h-3.5 text-scribble-orange" />
              <span>Design Guide</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
