import React from 'react';
import { Scribble } from './Scribble';

export const HeroFeatures: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-white border-b border-black/10 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-3xl bg-[#FAF6F0] border border-black/10 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-scribble-orange/15 text-scribble-orange flex items-center justify-center font-bold mb-4">
              <Scribble name="badge-starburst-16" size={28} color="#EA552B" />
            </div>
            <h3 className="font-extrabold text-lg text-black mb-1.5 font-display">100% Vector Geometry</h3>
            <p className="text-sm text-black/60 leading-relaxed">
              Infinitely scalable SVG paths without pixelation, blur, or quality loss at any screen resolution.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-[#FAF6F0] border border-black/10 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-scribble-yellow/25 text-scribble-yellow flex items-center justify-center font-bold mb-4">
              <Scribble name="funky-yellow-spring-oval" size={32} />
            </div>
            <h3 className="font-extrabold text-lg text-black mb-1.5 font-display">Funky</h3>
            <p className="text-sm text-black/60 leading-relaxed">
              Multi-colored organic blobs, hand-drawn wire scribbles, comic 3D drop shadows, and spring coils.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-[#FAF6F0] border border-black/10 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-scribble-green/15 text-scribble-green flex items-center justify-center font-bold mb-4">
              <Scribble name="funky-cactus-spotted" size={30} />
            </div>
            <h3 className="font-extrabold text-lg text-black mb-1.5 font-display">Adaptive Palettes</h3>
            <p className="text-sm text-black/60 leading-relaxed">
              Seamlessly adapts to CSS <code className="text-xs font-mono bg-black/5 px-1 py-0.5 rounded">currentColor</code> or your design token variables.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-[#FAF6F0] border border-black/10 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-scribble-pink/20 text-scribble-pink flex items-center justify-center font-bold mb-4">
              <Scribble name="funky-pink-speckled-pebble" size={28} />
            </div>
            <h3 className="font-extrabold text-lg text-black mb-1.5 font-display">React + Raw SVG</h3>
            <p className="text-sm text-black/60 leading-relaxed">
              Drop-in React component library, raw SVG code export, or copy-paste directly into Figma.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroFeatures;
