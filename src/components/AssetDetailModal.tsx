import React, { useState } from 'react';
import { X, Copy, Check, Download, Pencil } from 'lucide-react';
import { ScribbleAsset } from '../lib/scribbles-data';
import { Scribble } from './Scribble';

interface AssetDetailModalProps {
  asset: ScribbleAsset | null;
  onClose: () => void;
  currentColor: string;
  onOpenInEditor?: (asset: ScribbleAsset) => void;
}

export const AssetDetailModal: React.FC<AssetDetailModalProps> = ({
  asset,
  onClose,
  currentColor,
  onOpenInEditor,
}) => {
  if (!asset) return null;

  const [color, setColor] = useState(
    currentColor === 'original' ? (asset.defaultColor || '#EA552B') : (currentColor || asset.defaultColor || '#EA552B')
  );
  const [copiedSvg, setCopiedSvg] = useState(false);
  const [copiedJsx, setCopiedJsx] = useState(false);
  const [activeTab, setActiveTab] = useState<'svg' | 'jsx' | 'datauri'>('svg');
  const [animate, setAnimate] = useState(true);
  const [modalBg, setModalBg] = useState<'paper' | 'dark' | 'grid'>('grid');

  // Compute clean SVG string
  let svgCode = '';
  if (asset.rawSvg) {
    svgCode = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${asset.viewBox}" fill="none">
  ${asset.rawSvg.replace(/currentColor/g, color)}
</svg>`;
  } else if (asset.path) {
    if (asset.type === 'stroke') {
      const dMatch = asset.path.match(/d="([^"]+)"/);
      const d = dMatch ? dMatch[1] : '';
      svgCode = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${asset.viewBox}" fill="none">
  <path d="${d}" fill="none" stroke="${color}" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" />
</svg>`;
    } else {
      const dMatch = asset.path.match(/d="([^"]+)"/);
      const d = dMatch ? dMatch[1] : '';
      svgCode = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${asset.viewBox}" fill="none">
  <path d="${d}" fill="${color}" />
</svg>`;
    }
  }

  const jsxCode = `<Scribble\n  name="${asset.id}"\n  color="${color}"\n  size={48}\n  animate={${animate}}\n/>`;

  const dataUri = `data:image/svg+xml;utf8,${encodeURIComponent(svgCode)}`;

  const handleCopySvg = () => {
    navigator.clipboard.writeText(svgCode);
    setCopiedSvg(true);
    setTimeout(() => setCopiedSvg(false), 2000);
  };

  const handleCopyJsx = () => {
    navigator.clipboard.writeText(jsxCode);
    setCopiedJsx(true);
    setTimeout(() => setCopiedJsx(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([svgCode], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${asset.id}.svg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-4xl bg-white rounded-3xl border border-black/20 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-black/10 flex items-center justify-between bg-scribble-paper">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-extrabold text-scribble-dark font-display">{asset.name}</h3>
              <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-black/5 text-black/70">
                {asset.category}
              </span>
            </div>
            <p className="text-xs text-black/60 mt-0.5">{asset.description}</p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-black/10 text-black/70 hover:text-black transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="grid grid-cols-1 md:grid-cols-12 overflow-y-auto">
          {/* Left: Preview Stage (7 cols) */}
          <div className="md:col-span-7 p-6 flex flex-col border-b md:border-b-0 md:border-r border-black/10 bg-scribble-paper/30">
            {/* Stage Options */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-black/10 text-xs">
                <button
                  onClick={() => setModalBg('grid')}
                  className={`px-2.5 py-1 rounded-lg font-bold ${
                    modalBg === 'grid' ? 'bg-black text-white' : 'text-black/60'
                  }`}
                >
                  Grid
                </button>
                <button
                  onClick={() => setModalBg('paper')}
                  className={`px-2.5 py-1 rounded-lg font-bold ${
                    modalBg === 'paper' ? 'bg-scribble-cream text-black' : 'text-black/60'
                  }`}
                >
                  Paper
                </button>
                <button
                  onClick={() => setModalBg('dark')}
                  className={`px-2.5 py-1 rounded-lg font-bold ${
                    modalBg === 'dark' ? 'bg-[#141416] text-white' : 'text-black/60'
                  }`}
                >
                  Dark
                </button>
              </div>

              <button
                onClick={() => setAnimate(!animate)}
                className={`px-3 py-1 text-xs font-bold rounded-xl border transition-all ${
                  animate ? 'bg-scribble-orange/20 text-scribble-orange border-scribble-orange/40' : 'bg-white text-black/50 border-black/10'
                }`}
              >
                Animation: {animate ? 'ON' : 'OFF'}
              </button>
            </div>

            {/* Canvas */}
            <div
              className={`flex-1 min-h-[260px] rounded-2xl border border-black/10 flex items-center justify-center p-8 transition-colors ${
                modalBg === 'grid'
                  ? 'bg-white bg-grid-paper'
                  : modalBg === 'paper'
                  ? 'bg-[#FDFBF7] bg-dot-paper'
                  : 'bg-[#141416] bg-dark-grid text-white'
              }`}
            >
              <div className="max-w-[280px] max-h-[200px] flex items-center justify-center">
                <Scribble
                  name={asset.id}
                  color={color}
                  size={160}
                  animate={animate}
                  key={`${asset.id}-${color}-${animate}`}
                />
              </div>
            </div>

            {/* Live Color Chooser for Asset */}
            <div className="mt-4 pt-4 border-t border-black/10 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-black/70">Pick Color:</span>
              <div className="flex items-center gap-1.5 flex-wrap">
                {[
                  { name: 'Orange', color: '#EA552B' },
                  { name: 'Yellow', color: '#F7D046' },
                  { name: 'Green', color: '#4CA96D' },
                  { name: 'Pink', color: '#EE8DB9' },
                  { name: 'Blue', color: '#55BBDA' },
                  { name: 'Mint', color: '#0BDC85' },
                  { name: 'Dark', color: '#141416' },
                ].map((c) => (
                  <button
                    key={c.color}
                    onClick={() => setColor(c.color)}
                    className={`w-6 h-6 rounded-full border-2 transition-transform ${
                      color === c.color ? 'scale-110 border-black shadow' : 'border-transparent hover:scale-105'
                    }`}
                    style={{ backgroundColor: c.color }}
                  />
                ))}
                <input
                  type="color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className="w-6 h-6 rounded-full cursor-pointer border border-black/20"
                />
              </div>
            </div>
          </div>

          {/* Right: Code Inspector & Placement (5 cols) */}
          <div className="md:col-span-5 p-6 flex flex-col justify-between space-y-5 bg-white">
            {/* Metadata Tags */}
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-black/50 block mb-1.5">
                Tags & Specs
              </span>
              <div className="flex flex-wrap gap-1.5">
                <span className="text-[11px] font-mono bg-black/5 px-2 py-0.5 rounded text-black/70">
                  viewBox: {asset.viewBox}
                </span>
                <span className="text-[11px] font-mono bg-black/5 px-2 py-0.5 rounded text-black/70">
                  type: {asset.type}
                </span>
                {asset.tags.map((tag) => (
                  <span key={tag} className="text-[11px] bg-scribble-yellow/30 text-black px-2 py-0.5 rounded-full font-medium">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Code Tabs */}
            <div className="flex-1">
              <div className="flex items-center justify-between border-b border-black/10 pb-2 mb-2">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveTab('svg')}
                    className={`text-xs font-bold uppercase tracking-wider pb-1 ${
                      activeTab === 'svg'
                        ? 'border-b-2 border-black text-black'
                        : 'text-black/50 hover:text-black'
                    }`}
                  >
                    SVG
                  </button>
                  <button
                    onClick={() => setActiveTab('jsx')}
                    className={`text-xs font-bold uppercase tracking-wider pb-1 ${
                      activeTab === 'jsx'
                        ? 'border-b-2 border-black text-black'
                        : 'text-black/50 hover:text-black'
                    }`}
                  >
                    React (JSX)
                  </button>
                  <button
                    onClick={() => setActiveTab('datauri')}
                    className={`text-xs font-bold uppercase tracking-wider pb-1 ${
                      activeTab === 'datauri'
                        ? 'border-b-2 border-black text-black'
                        : 'text-black/50 hover:text-black'
                    }`}
                  >
                    Data URI
                  </button>
                </div>

                <button
                  onClick={activeTab === 'svg' ? handleCopySvg : handleCopyJsx}
                  className="flex items-center gap-1 text-xs font-bold text-black hover:text-scribble-orange transition-colors"
                >
                  {(activeTab === 'svg' ? copiedSvg : copiedJsx) ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-green-600" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Code Box */}
              <div className="p-3 rounded-xl bg-black text-white font-mono text-[11px] max-h-[160px] overflow-y-auto overflow-x-auto leading-relaxed shadow-inner">
                {activeTab === 'svg' && <pre className="text-amber-300">{svgCode}</pre>}
                {activeTab === 'jsx' && <pre className="text-emerald-300">{jsxCode}</pre>}
                {activeTab === 'datauri' && <pre className="text-sky-300 break-all">{dataUri}</pre>}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 border-t border-black/10 space-y-2">
              {onOpenInEditor && (
                <button
                  onClick={() => {
                    onOpenInEditor({ ...asset, defaultColor: color });
                    onClose();
                  }}
                  className="w-full py-2.5 px-4 rounded-xl bg-scribble-yellow hover:bg-scribble-yellow/80 border border-scribble-yellow/80 text-scribble-dark font-extrabold text-xs transition-all flex items-center justify-center gap-2 shadow-sm hover:scale-[1.01]"
                >
                  <Pencil className="w-4 h-4 text-scribble-orange" />
                  <span>Open & Customize in SVG Editor</span>
                </button>
              )}

              <button
                onClick={handleDownload}
                className="w-full py-3 px-4 rounded-xl bg-black hover:bg-scribble-orange text-white font-bold text-sm shadow hover:shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Download SVG File</span>
              </button>

              <button
                onClick={handleCopySvg}
                className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-black/5 border border-black/20 text-black font-semibold text-xs transition-all flex items-center justify-center gap-2"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Standalone SVG</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetDetailModal;
