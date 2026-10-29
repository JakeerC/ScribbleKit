import React, { useState } from 'react';
import { Sparkles, Copy, Check } from 'lucide-react';
import { ScribbleHighlight, HighlightStyle } from './ScribbleHighlight';
import { Scribble } from './Scribble';

export const HeadlineStudio: React.FC = () => {
  const [headlinePrefix, setHeadlinePrefix] = useState('Build products people');
  const [highlightWord, setHighlightWord] = useState('actually love');
  const [headlineSuffix, setHeadlineSuffix] = useState('without the fluff.');
  const [styleType, setStyleType] = useState<HighlightStyle>('underline-wave');
  const [color, setColor] = useState('#EA552B');
  const [studioTheme, setStudioTheme] = useState<'paper' | 'dark' | 'mint'>('paper');
  const [copied, setCopied] = useState(false);
  const [animate, setAnimate] = useState(true);

  const presets = [
    {
      label: 'Funky Scribbles',
      prefix: 'Spice up your design with',
      highlight: 'funky scribbles',
      suffix: 'that pop.',
      style: 'funky-yellow-oval' as HighlightStyle,
      color: '#F7D046',
    },
    {
      label: 'SaaS Launch Hero',
      prefix: 'Scale your revenue to',
      highlight: '$10M ARR',
      suffix: 'with autonomous AI agents.',
      style: 'circle-double' as HighlightStyle,
      color: '#EA552B',
    },
    {
      label: 'Hand-Crafted Appeal',
      prefix: 'Modern UI kits with a genuine',
      highlight: 'human touch',
      suffix: 'built into every pixel.',
      style: 'underline-swash' as HighlightStyle,
      color: '#F7D046',
    },
    {
      label: 'Attention Grabber',
      prefix: 'Guaranteed 24-hour turnaround or',
      highlight: '100% free',
      suffix: '— no questions asked.',
      style: 'circle-capsule' as HighlightStyle,
      color: '#0BDC85',
    },
    {
      label: 'Editorial Quote',
      prefix: 'ScribbleKit changed how we ship our',
      highlight: 'product UI',
      suffix: 'forever.',
      style: 'underline-swoosh' as HighlightStyle,
      color: '#EE8DB9',
    },
  ];

  const handleCopyCode = () => {
    const code = `<h1 className="text-5xl font-extrabold text-black font-display">
  ${headlinePrefix}{' '}
  <ScribbleHighlight styleType="${styleType}" color="${color}">
    ${highlightWord}
  </ScribbleHighlight>{' '}
  ${headlineSuffix}
</h1>`;

    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="headline-studio" className="py-20 border-b border-black/10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-scribble-orange/15 text-scribble-orange text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Headline & CTA Studio
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-scribble-dark font-display tracking-tight">
              Test Scribbles On Live Headlines
            </h2>
            <p className="text-base text-black/60 mt-2 max-w-xl">
              Type your own text, pick a scribble style, choose your color, and see real-time hand-drawn highlights.
            </p>
          </div>

          {/* Quick Preset Buttons */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-2">
            {presets.map((preset) => (
              <button
                key={preset.label}
                onClick={() => {
                  setHeadlinePrefix(preset.prefix);
                  setHighlightWord(preset.highlight);
                  setHeadlineSuffix(preset.suffix);
                  setStyleType(preset.style);
                  setColor(preset.color);
                }}
                className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-black/5 hover:bg-black hover:text-white transition-all text-black/80"
              >
                {preset.label}
              </button>
            ))}
          </div>
        </div>

        {/* Studio Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column (5 cols) */}
          <div className="lg:col-span-5 p-6 rounded-3xl bg-scribble-paper border border-black/15 shadow-sm space-y-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-black/70 mb-2">
                Headline Text & Highlight Target
              </label>
              <div className="space-y-2">
                <div>
                  <span className="text-[11px] font-medium text-black/50">Before text:</span>
                  <input
                    type="text"
                    value={headlinePrefix}
                    onChange={(e) => setHeadlinePrefix(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-white border border-black/20 focus:border-black focus:outline-none text-sm font-medium"
                    placeholder="Prefix..."
                  />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-scribble-orange">Highlighted Word(s):</span>
                  <input
                    type="text"
                    value={highlightWord}
                    onChange={(e) => setHighlightWord(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-white border-2 border-scribble-orange focus:outline-none text-sm font-bold text-black shadow-inner"
                    placeholder="Highlight word..."
                  />
                </div>
                <div>
                  <span className="text-[11px] font-medium text-black/50">After text:</span>
                  <input
                    type="text"
                    value={headlineSuffix}
                    onChange={(e) => setHeadlineSuffix(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-white border border-black/20 focus:border-black focus:outline-none text-sm font-medium"
                    placeholder="Suffix..."
                  />
                </div>
              </div>
            </div>

            {/* Scribble Style Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-black/70 mb-2">
                Scribble Accent Style
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'underline-wave', label: 'Wavy Underline' },
                  { id: 'underline-swoosh', label: 'Brush Swoosh' },
                  { id: 'underline-swash', label: 'Signature Swash' },
                  { id: 'circle-double', label: 'Double Loop Circle' },
                  { id: 'funky-yellow-oval', label: 'Funky Spring Oval' },
                  { id: 'funky-comic-bolt', label: 'Comic 3D Bolt' },
                  { id: 'circle-capsule', label: 'Capsule Pill' },
                  { id: 'box-rough', label: 'Rough Box' },
                  { id: 'arrow-curved', label: 'Pointing Arrow' },
                  { id: 'star-sparkle', label: 'Star Sparkle' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setStyleType(item.id as HighlightStyle)}
                    className={`px-3 py-2 text-xs font-semibold rounded-xl border text-left transition-all ${
                      styleType === item.id
                        ? 'bg-black text-white border-black shadow'
                        : 'bg-white text-black/80 border-black/15 hover:border-black/40'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Chooser */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-black/70 mb-2">
                Accent Color
              </label>
              <div className="flex items-center gap-2 flex-wrap">
                {[
                  { name: 'Orange', color: '#EA552B' },
                  { name: 'Yellow', color: '#F7D046' },
                  { name: 'Green', color: '#4CA96D' },
                  { name: 'Pink', color: '#EE8DB9' },
                  { name: 'Blue', color: '#55BBDA' },
                  { name: 'Mint', color: '#0BDC85' },
                  { name: 'Black', color: '#141416' },
                ].map((c) => (
                  <button
                    key={c.color}
                    onClick={() => setColor(c.color)}
                    title={c.name}
                    className={`w-8 h-8 rounded-full border-2 transition-transform ${
                      color === c.color ? 'scale-110 border-black shadow-md' : 'border-transparent hover:scale-105'
                    }`}
                    style={{ backgroundColor: c.color }}
                  />
                ))}
                <input
                  type="color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className="w-8 h-8 rounded-full cursor-pointer border border-black/20"
                />
              </div>
            </div>

            {/* Preview Environment & Toggles */}
            <div className="flex items-center justify-between pt-2 border-t border-black/10">
              <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-black/15">
                <button
                  onClick={() => setStudioTheme('paper')}
                  className={`px-2.5 py-1 text-xs font-bold rounded-lg ${
                    studioTheme === 'paper' ? 'bg-scribble-cream text-black' : 'text-black/60'
                  }`}
                >
                  Paper
                </button>
                <button
                  onClick={() => setStudioTheme('dark')}
                  className={`px-2.5 py-1 text-xs font-bold rounded-lg ${
                    studioTheme === 'dark' ? 'bg-black text-white' : 'text-black/60'
                  }`}
                >
                  Dark
                </button>
                <button
                  onClick={() => setStudioTheme('mint')}
                  className={`px-2.5 py-1 text-xs font-bold rounded-lg ${
                    studioTheme === 'mint' ? 'bg-scribble-mint text-black' : 'text-black/60'
                  }`}
                >
                  Mint
                </button>
              </div>

              <button
                onClick={() => setAnimate(!animate)}
                className={`px-3 py-1.5 text-xs font-bold rounded-xl border transition-all ${
                  animate ? 'bg-black/10 border-black/20 text-black' : 'bg-transparent text-black/50'
                }`}
              >
                Animate: {animate ? 'ON' : 'OFF'}
              </button>
            </div>
          </div>

          {/* Live Preview Display (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div
              className={`p-10 sm:p-14 rounded-3xl border border-black/15 shadow-sm min-h-[320px] flex flex-col justify-center transition-colors relative overflow-hidden ${
                studioTheme === 'paper'
                  ? 'bg-[#FDFBF7] text-scribble-dark bg-grid-paper'
                  : studioTheme === 'dark'
                  ? 'bg-[#141416] text-white bg-dark-grid'
                  : 'bg-[#EDFAF4] text-[#0A3D28]'
              }`}
            >
              {/* Badge sticker in corner */}
              <div className="absolute top-6 right-6 opacity-80 pointer-events-none">
                <Scribble name="badge-starburst-16" size={38} color={color} />
              </div>

              <div className="text-3xl sm:text-5xl font-extrabold font-display leading-[1.25] tracking-tight">
                {headlinePrefix}{' '}
                <ScribbleHighlight styleType={styleType} color={color} animate={animate}>
                  {highlightWord}
                </ScribbleHighlight>{' '}
                {headlineSuffix}
              </div>

              {/* Sample Subtext & Button to test full layout */}
              <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4 pt-6 border-t border-black/10">
                <button
                  className="px-6 py-3 rounded-xl font-bold text-sm shadow-md transition-all hover:scale-105 flex items-center justify-center gap-2"
                  style={{
                    backgroundColor: color,
                    color: color === '#F7D046' || color === '#0BDC85' ? '#000000' : '#ffffff',
                  }}
                >
                  <span>Start Free Trial</span>
                  <Scribble name="arrow-sharp-straight" size={18} color="currentColor" />
                </button>
                <div className="text-xs opacity-75 font-medium flex items-center gap-1.5">
                  <Scribble name="accent-checkmark" size={14} color={color} />
                  No credit card required • Cancel anytime
                </div>
              </div>
            </div>

            {/* React Code Snippet Box */}
            <div className="p-5 rounded-2xl bg-black text-white font-mono text-xs relative group border border-black/30 shadow">
              <div className="flex items-center justify-between mb-2 text-white/50 text-[11px] uppercase tracking-wider font-sans font-bold">
                <span>React Component Code</span>
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 hover:bg-white text-white hover:text-black font-semibold text-xs transition-all"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied!' : 'Copy Code'}</span>
                </button>
              </div>

              <pre className="overflow-x-auto text-emerald-400 leading-relaxed">
{`<h1 className="text-5xl font-extrabold text-black font-display">
  ${headlinePrefix}{' '}
  <ScribbleHighlight styleType="${styleType}" color="${color}">
    ${highlightWord}
  </ScribbleHighlight>{' '}
  ${headlineSuffix}
</h1>`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeadlineStudio;
