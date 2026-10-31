import React, { useState } from "react";
import { Scribble } from "./Scribble";
import { Navbar } from "./Navbar";

interface HeroProps {
  onScrollToCatalog?: () => void;
  onNavigateToLibrary?: () => void;
  onNavigateToSvgStudio?: () => void;
  onNavigateToHeadlineStudio?: () => void;
  onOpenGuide: () => void;
  onOpenEditor?: () => void;
  onScrollToStudio?: () => void;
  onDownloadAll?: () => void;
  assetCount: number;
}

export const Hero: React.FC<HeroProps> = ({
  onScrollToCatalog,
  onNavigateToLibrary,
  onNavigateToSvgStudio,
  onNavigateToHeadlineStudio,
  onOpenGuide,
  onOpenEditor,
  onScrollToStudio,
  onDownloadAll = () => {},
  assetCount,
}) => {
  const [activeColor, setActiveColor] = useState("#F7D046");

  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden border-b border-black/10 bg-gradient-to-b from-[#FAF4EC] via-scribble-paper to-[#F5ECE1]">
      {/* Top Navbar sharing the exact same Hero background */}
      <Navbar
        currentPage="library"
        onNavigateToLibrary={onNavigateToLibrary || onScrollToCatalog}
        onNavigateToSvgStudio={onNavigateToSvgStudio || onOpenEditor}
        onNavigateToHeadlineStudio={
          onNavigateToHeadlineStudio || onScrollToStudio
        }
        onOpenGuide={onOpenGuide}
        onDownloadAll={onDownloadAll}
        assetCount={assetCount}
      />

      {/* ========================================================= */}
      {/* DECORATIVE FLOATING FUNKY SCRIBBLLES (MATCHING SCREENSHOT) */}
      {/* ========================================================= */}

      {/* Mid-Left: Black Striped Carved Pebble */}
      <div className="absolute top-[52%] -translate-y-1/2 -left-6 sm:left-2 lg:left-8 opacity-95 pointer-events-none select-none animate-float-reverse hover:scale-105 transition-transform">
        <Scribble name="funky-black-pebble-stripes" size={140} />
      </div>

      {/* Upper-Left: Green Cactus Spotted Hand */}
      <div className="absolute top-[26%] left-6 sm:left-14 lg:left-24 opacity-95 pointer-events-none select-none animate-float-gentle hover:rotate-12 transition-transform">
        <Scribble name="funky-cactus-spotted" size={200} />
      </div>

      {/* Bottom-Left: Big Sky-Blue Wireframe Scribble Pebble */}
      <div className="absolute -bottom-4 sm:bottom-4 left-0 sm:left-6 lg:left-24 opacity-95 pointer-events-none select-none animate-wobble-slow hover:scale-105 transition-transform">
        <Scribble name="funky-blue-wire-scribble" size={215} />
      </div>

      {/* Mid-Right: Curly Telephone Spring Coil */}
      <div className="absolute top-[26%] right-2 sm:right-6 lg:right-14 opacity-95 pointer-events-none select-none animate-wobble-slow hover:scale-110 transition-transform">
        <Scribble name="funky-curly-spring-coil" size={175} />
      </div>

      {/* Bottom-Right: Soft Pink Watermelon Seed Pebble */}
      <div className="absolute -bottom-4 sm:bottom-4 right-0 sm:right-6 lg:right-12 opacity-95 pointer-events-none select-none animate-float-reverse hover:scale-105 transition-transform">
        <Scribble name="funky-pink-speckled-pebble" size={205} />
      </div>

      {/* Bottom-Right Edge: Pop Horizon Striped Ball */}
      <div className="absolute bottom-6 -right-8 opacity-80 pointer-events-none select-none hidden xl:block animate-spin-slow hover:scale-110 transition-transform">
        <Scribble name="funky-striped-globe-ball" size={120} />
      </div>

      {/* Upper-Right Accent: Atomic Orbit Star */}
      <div className="absolute top-20 sm:top-24 right-4 sm:right-16 lg:right-28 opacity-85 pointer-events-none select-none hidden lg:block animate-spin-reverse">
        <Scribble name="funky-atomic-orbit-star" size={110} />
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
          <div className="absolute -top-6 -right-6 sm:-top-8 sm:-right-8 md:-top-10 md:-right-10 lg:-top-11 lg:-right-12 rotate-12 pointer-events-none select-none drop-shadow-lg animate-wobble-slow">
            <Scribble name="funky-badge-starburst-new" size={96} />
          </div>
        </div>

        <p className="max-w-2xl sm:max-w-3xl mx-auto text-base sm:text-xl md:text-2xl text-black/75 mb-8 sm:mb-10 leading-relaxed font-sans font-medium">
          A collection of funky vectorized scribbbles to spice up your design
          projects.
        </p>

        {/* Aesthetic Download & Centered Composition (Direct Match to Reference Image) */}
        <div className="relative flex flex-col items-center">
          {/* Flanking Speed Slashes to the left of the button */}
          <div className="absolute -left-20 sm:-left-28 md:-left-36 top-1 sm:top-2 pointer-events-none select-none animate-float-gentle">
            <Scribble name="funky-triple-speed-slash" size={72} />
          </div>

          {/* Flanking 4-Point Diamond Sparkle Star to the right of the button */}
          <div className="absolute -right-16 sm:-right-24 md:-right-32 top-0 sm:top-1 pointer-events-none select-none animate-sparkle">
            <Scribble name="funky-star-diamond-sparkle" size={54} />
          </div>

          {/* Retro 3D Comic Lightning Bolt directly below yellow oval */}
          <div className="relative -mt-2 sm:-mt-3 pointer-events-none select-none hover:scale-110 transition-transform animate-bounce-subtle">
            <Scribble
              name="funky-bolt-comic-3d"
              size={160}
              color={activeColor}
            />
          </div>

          {/* Helper Tools: Palette & Quick Access Links */}
          <div className="flex flex-col flex-wrap items-center justify-center gap-3 mt-7 sm:mt-8">
            {/* Interactive Color Switcher */}
            <div className="inline-flex items-center gap-1.5 p-1.5 sm:p-2 bg-white/95 backdrop-blur-sm rounded-full border border-black/15 shadow-sm">
              {/* <span className="text-xs font-bold uppercase tracking-wider text-black/50 px-2">
                Palette:
              </span> */}
              {[
                { label: "Retro Orange", color: "#EA552B" },
                { label: "Sunny Yellow", color: "#F7D046" },
                { label: "Kelly Green", color: "#4CA96D" },
                { label: "Bubblegum Pink", color: "#EE8DB9" },
                { label: "Sky Blue", color: "#55BBDA" },
                { label: "Scribble Mint", color: "#0BDC85" },
              ].map((item) => (
                <button
                  key={item.color}
                  onClick={() => setActiveColor(item.color)}
                  title={item.label}
                  className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 transition-all ${
                    activeColor === item.color
                      ? "scale-110 border-black shadow-md"
                      : "border-transparent hover:scale-105"
                  }`}
                  style={{ backgroundColor: item.color }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
