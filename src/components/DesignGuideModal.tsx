import React, { useState } from 'react';
import { X, BookOpen, Layers, Palette, Code, CheckCircle, Sparkles } from 'lucide-react';
import { Scribble } from './Scribble';

interface DesignGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DesignGuideModal: React.FC<DesignGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState<'overview' | 'palette' | 'taxonomy' | 'guide'>('overview');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-4xl bg-white rounded-3xl border border-black/20 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-black/10 bg-scribble-paper flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-scribble-orange/20 text-scribble-orange flex items-center justify-center font-bold">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-scribble-dark font-display">
                ScribbleKit Vector Design System & Guide
              </h2>
              <p className="text-xs text-black/60 mt-0.5">
                Principles, color theory, component integration, and production guidelines
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-black/10 text-black/70 hover:text-black transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="px-6 border-b border-black/10 bg-white flex items-center gap-6 overflow-x-auto text-xs font-bold uppercase tracking-wider">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3.5 border-b-2 transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'overview'
                ? 'border-scribble-orange text-scribble-orange'
                : 'border-transparent text-black/60 hover:text-black'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            Philosophy & Overview
          </button>
          <button
            onClick={() => setActiveTab('palette')}
            className={`py-3.5 border-b-2 transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'palette'
                ? 'border-scribble-orange text-scribble-orange'
                : 'border-transparent text-black/60 hover:text-black'
            }`}
          >
            <Palette className="w-3.5 h-3.5" />
            Color System
          </button>
          <button
            onClick={() => setActiveTab('taxonomy')}
            className={`py-3.5 border-b-2 transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'taxonomy'
                ? 'border-scribble-orange text-scribble-orange'
                : 'border-transparent text-black/60 hover:text-black'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            Asset Taxonomy
          </button>
          <button
            onClick={() => setActiveTab('guide')}
            className={`py-3.5 border-b-2 transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'guide'
                ? 'border-scribble-orange text-scribble-orange'
                : 'border-transparent text-black/60 hover:text-black'
            }`}
          >
            <Code className="w-3.5 h-3.5" />
            Implementation Guide
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-black/80 font-sans leading-relaxed">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="p-5 rounded-2xl bg-scribble-cream/40 border border-black/10">
                <h3 className="text-base font-bold text-black mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-scribble-orange" />
                  Why Hand-Drawn Vectors in Modern UI?
                </h3>
                <p>
                  As digital interfaces standardize on identical layout frameworks and sanitized UI libraries, digital experiences risk feeling mechanical and sterile. <strong>ScribbleKit</strong> provides an intentionally hand-crafted layer of vector graphics—wavy underlines, casual circling loops, dynamic arrows, and organic badges—to inject vitality, guidance, and warmth into modern web apps.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-white border border-black/10 shadow-sm">
                  <h4 className="font-bold text-black mb-2">Attention Direction & Conversion</h4>
                  <p className="text-xs text-black/70 leading-normal">
                    Eye-tracking studies consistently show that asymmetrical, hand-crafted lines disrupt reading fatigue. A circling loop around a metric or a curved arrow pointing to a CTA creates a visual focal point that draws immediate attention.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-black/10 shadow-sm">
                  <h4 className="font-bold text-black mb-2">100% Vector Quality</h4>
                  <p className="text-xs text-black/70 leading-normal">
                    Every asset is mathematically defined using pure SVG paths. Whether rendered on an Apple Retina display at 24px or scaled to 1200px on an ultra-wide desktop display, the vectors remain razor-sharp with zero resolution degradation.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-black text-white">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-scribble-yellow">
                    ScribbleKit Architecture
                  </span>
                  <span className="text-xs font-mono text-white/50">Universal React & SVG Ready</span>
                </div>
                <p className="text-xs text-white/80 leading-relaxed">
                  Engineered with adaptive <code className="text-scribble-orange font-mono">currentColor</code> support, dynamic stroke-dasharray drawing animation keyframes, and zero-layout-shift absolute wrappers.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'palette' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-bold text-black mb-3">The ScribbleKit Retro-Pop Palette</h3>
                <p className="text-xs text-black/70 mb-4">
                  A high-energy, warm palette tailored specifically to create contrast on digital interfaces:
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { name: 'Persimmon Orange', hex: '#EA552B', desc: 'Hero CTA & primary badge accent' },
                    { name: 'Sunny Goldenrod', hex: '#F7D046', desc: 'Headline underlines & highlighter loops' },
                    { name: 'Kelly Sage Green', hex: '#4CA96D', desc: 'Success checks & growth arrows' },
                    { name: 'Bubblegum Rose', hex: '#EE8DB9', desc: 'Quirky sticker doodles & stars' },
                    { name: 'Sky Blue', hex: '#55BBDA', desc: 'Editorial accent clouds & brackets' },
                    { name: 'ScribbleKit Mint', hex: '#0BDC85', desc: 'Primary brand kit green' },
                    { name: 'Warm Parchment', hex: '#FBE8DE', desc: 'Warm paper contrast fills' },
                    { name: 'Ink Black', hex: '#141416', desc: 'Deep contrast calligraphic strokes' },
                  ].map((c) => (
                    <div key={c.hex} className="p-3 rounded-xl border border-black/10 bg-white">
                      <div className="w-full h-10 rounded-lg mb-2 shadow-inner" style={{ backgroundColor: c.hex }} />
                      <div className="text-xs font-bold text-black">{c.name}</div>
                      <div className="font-mono text-[11px] text-black/60">{c.hex}</div>
                      <div className="text-[10px] text-black/50 mt-1 leading-tight">{c.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'taxonomy' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-bold text-black mb-3">Asset Family Breakdown (116 Vectors)</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-black/10 bg-white">
                    <h4 className="font-bold text-sm text-black mb-1">1. Underlines & Swashes (16)</h4>
                    <p className="text-xs text-black/60 leading-normal">
                      Single waves, double swoops, rough marker lines, zigzag strokes, calligraphic swashes, and smiling brackets.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-black/10 bg-white">
                    <h4 className="font-bold text-sm text-black mb-1">2. Circles & Loops (15)</h4>
                    <p className="text-xs text-black/60 leading-normal">
                      Double-loop highlighters, rough single loops, elongated capsule pills, halos, lasso tails, and wobbly eggs.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-black/10 bg-white">
                    <h4 className="font-bold text-sm text-black mb-1">3. Arrows & Pointers (18)</h4>
                    <p className="text-xs text-black/60 leading-normal">
                      Curved CTA pointers, loop-the-loop arcs, sharp direct arrows, upward growth arrows, U-turns, and lightning stems.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-black/10 bg-white">
                    <h4 className="font-bold text-sm text-black mb-1">4. Stars, Sparkles & Bursts (15)</h4>
                    <p className="text-xs text-black/60 leading-normal">
                      Modern 4-point sparkles, 5-point organic stars, 8-ray sunbursts, retro asterisks, and sparkle clusters.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-black/10 bg-white">
                    <h4 className="font-bold text-sm text-black mb-1">5. Badges & Frames (12)</h4>
                    <p className="text-xs text-black/60 leading-normal">
                      32-point starburst stamps, 16-point stamps, scalloped flowers, polaroid frames, and corner brackets.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-black/10 bg-white">
                    <h4 className="font-bold text-sm text-black mb-1">6. Abstract & Doodles (16)</h4>
                    <p className="text-xs text-black/60 leading-normal">
                      Lightning bolts, spiral coils, dreamy clouds, warm hearts, funky smileys, cross-hatching, and splashes.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-black/10 bg-white">
                    <h4 className="font-bold text-sm text-black mb-1">7. Accents & Emphasis (14)</h4>
                    <p className="text-xs text-black/60 leading-normal">
                      Double exclamation marks, question marks, big quotes, corner rays, crowns, checkmarks, and hashtags.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-black/10 bg-white">
                    <h4 className="font-bold text-sm text-black mb-1">8. Signature Shapes (10)</h4>
                    <p className="text-xs text-black/60 leading-normal">
                      Signature starburst stamp badges, organic contour circles, fluid flourishes, and calligraphic curves.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'guide' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-bold text-black mb-2">Production Implementation Rules</h3>

                <div className="space-y-3">
                  <div className="p-4 rounded-xl border border-black/10 bg-white flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-xs text-black">Rule 1: One Focal Scribble per Viewport</h4>
                      <p className="text-xs text-black/60 mt-0.5">
                        Avoid overusing scribbles. Reserve them for the primary value proposition word in your Hero headline, a critical CTA button, or a key pricing metric.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl border border-black/10 bg-white flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-xs text-black">Rule 2: Zero Layout Shift</h4>
                      <p className="text-xs text-black/60 mt-0.5">
                        Wrap words in <code className="font-mono text-[10px] bg-black/5 px-1 py-0.5 rounded">&lt;span className="relative inline-block"&gt;</code> and position the SVG with <code className="font-mono text-[10px] bg-black/5 px-1 py-0.5 rounded">absolute pointer-events-none</code>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-black text-white font-mono text-xs">
                <span className="text-[11px] uppercase tracking-wider text-scribble-orange block mb-2 font-bold font-sans">
                  Component Usage Example
                </span>
                <pre className="text-emerald-400 overflow-x-auto leading-relaxed">
{`import { ScribbleHighlight } from './components/ScribbleHighlight';

export function HeroHeadline() {
  return (
    <h1 className="text-5xl font-extrabold text-slate-900 font-display">
      Build products people{' '}
      <ScribbleHighlight styleType="circle-double" color="#EA552B">
        actually love
      </ScribbleHighlight>
    </h1>
  );
}`}
                </pre>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-black/10 bg-scribble-paper flex items-center justify-between">
          <span className="text-xs text-black/50 font-medium">
            ScribbleKit Design System
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-black text-white font-bold text-xs uppercase tracking-wider hover:bg-scribble-orange transition-colors"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};

export default DesignGuideModal;
