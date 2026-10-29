import React, { useState } from 'react';
import { Sparkles, ArrowDown, BookOpen } from 'lucide-react';
import { Scribble } from './Scribble';
import { ScribbleHighlight } from './ScribbleHighlight';

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
    <section className="relative overflow-hidden pt-12 pb-20 border-b border-black/10 bg-gradient-to-b from-scribble-cream/30 via-scribble-paper to-scribble-paper">
      {/* Decorative Floating Scribbles in Background */}
      <div className="absolute top-10 left-8 md:left-20 opacity-70 pointer-events-none select-none animate-wiggle">
        <Scribble name="star-4-point-sparkle" color="#F7D046" size={48} />
      </div>
      <div className="absolute top-16 right-12 md:right-28 opacity-75 pointer-events-none select-none">
        <Scribble name="arrow-loop-the-loop" color="#4CA96D" size={90} animate={true} />
      </div>
      <div className="absolute bottom-12 left-10 md:left-24 opacity-60 pointer-events-none select-none">
        <Scribble name="doodle-lightning-bolt" color="#F7D046" size={60} />
      </div>
      <div className="absolute bottom-8 right-8 md:right-20 opacity-70 pointer-events-none select-none">
        <Scribble name="star-burst-8-ray" color="#EE8DB9" size={70} />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Badge Banner */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-black/15 shadow-sm mb-8 hover:scale-105 transition-transform cursor-pointer"
          onClick={onOpenGuide}
        >
          <span className="w-2.5 h-2.5 rounded-full bg-scribble-orange animate-ping" />
          <span className="text-xs font-bold uppercase tracking-wider text-black">
            ScribbleKit Vector Collection
          </span>
          <span className="text-xs bg-scribble-yellow/40 text-black px-2 py-0.5 rounded-full font-bold">
            {assetCount}+ Vectors
          </span>
        </div>

        {/* Hero Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-scribble-dark font-display leading-[1.1] mb-6">
          Funky{' '}
          <ScribbleHighlight styleType="underline-swash" color={activeColor}>
            Scribbles
          </ScribbleHighlight>{' '}
          Assets
        </h1>

        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-black/70 mb-10 leading-relaxed font-sans">
          A vibrant collection of <span className="font-bold text-black">{assetCount}+ hand-drawn, vectorized</span> scribbles,
          circles, underlines, pointing arrows, and badges designed to spice up your landing pages and web apps.
        </p>

        {/* Interactive Color Switcher for Hero Preview */}
        <div className="inline-flex items-center gap-2 p-2 bg-white rounded-full border border-black/15 shadow-sm mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-black/50 px-2">Palette:</span>
          {[
            { label: 'Orange', color: '#EA552B' },
            { label: 'Yellow', color: '#F7D046' },
            { label: 'Green', color: '#4CA96D' },
            { label: 'Pink', color: '#EE8DB9' },
            { label: 'Blue', color: '#55BBDA' },
            { label: 'Mint', color: '#0BDC85' },
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

        {/* Call-to-actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={onScrollToCatalog}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-black hover:bg-scribble-orange text-white font-bold text-base shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
          >
            <span>Explore All {assetCount} Assets</span>
            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </button>

          <button
            onClick={onScrollToStudio}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white hover:bg-black/5 text-black font-bold text-base border-2 border-black/20 hover:border-black shadow-sm transition-all flex items-center justify-center gap-2"
          >
            <Sparkles className="w-5 h-5 text-scribble-orange" />
            <span>Interactive Headline Studio</span>
          </button>

          <button
            onClick={onOpenGuide}
            className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-scribble-yellow/30 hover:bg-scribble-yellow/50 text-black font-bold text-base border border-scribble-yellow/80 shadow-sm transition-all flex items-center justify-center gap-2"
          >
            <BookOpen className="w-5 h-5 text-scribble-orange" />
            <span>Vector Design Guide</span>
          </button>
        </div>

        {/* 4 Feature Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
          <div className="p-5 rounded-2xl bg-white border border-black/10 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-scribble-orange/15 text-scribble-orange flex items-center justify-center font-bold mb-3">
              <Scribble name="badge-starburst-16" size={24} color="#EA552B" />
            </div>
            <h3 className="font-bold text-base text-black mb-1">100% Vector</h3>
            <p className="text-xs text-black/60 leading-normal">
              Infinitely scalable SVG geometry without pixelation or quality loss.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-black/10 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-scribble-yellow/20 text-scribble-yellow flex items-center justify-center font-bold mb-3">
              <Scribble name="circle-double-loop" size={26} color="#F7D046" />
            </div>
            <h3 className="font-bold text-base text-black mb-1">Custom Colors</h3>
            <p className="text-xs text-black/60 leading-normal">
              Supports CSS <code className="text-[11px] font-mono bg-black/5 px-1 py-0.5 rounded">currentColor</code> or hex palettes seamlessly.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-black/10 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-scribble-green/15 text-scribble-green flex items-center justify-center font-bold mb-3">
              <Scribble name="underline-wave-single" size={28} color="#4CA96D" animate={true} />
            </div>
            <h3 className="font-bold text-base text-black mb-1">Animated Draw-On</h3>
            <p className="text-xs text-black/60 leading-normal">
              Built-in stroke-dasharray animation replicates hand-drawing live.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-black/10 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-scribble-pink/20 text-scribble-pink flex items-center justify-center font-bold mb-3">
              <Scribble name="star-4-point-sparkle" size={24} color="#EE8DB9" />
            </div>
            <h3 className="font-bold text-base text-black mb-1">React + Standalone</h3>
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
