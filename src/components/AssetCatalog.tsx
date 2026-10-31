import React, { useState, useMemo } from 'react';
import {
  Search,
  Copy,
  Check,
  Download,
  Pencil,
} from 'lucide-react';
import { ScribbleAsset, CATEGORIES, COLOR_PRESETS } from '../lib/scribbles-data';
import { Scribble } from './Scribble';

interface AssetCatalogProps {
  assets: ScribbleAsset[];
  onSelectAsset: (asset: ScribbleAsset) => void;
  onEditAsset?: (asset: ScribbleAsset) => void;
  currentColor: string;
  onColorChange: (color: string) => void;
}

export type CatalogAnimationMode = 'none' | 'draw' | 'float' | 'wobble' | 'pulse';

export const AssetCatalog: React.FC<AssetCatalogProps> = ({
  assets,
  onSelectAsset,
  onEditAsset,
  currentColor,
  onColorChange,
}) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [scale, setScale] = useState(56);
  const [animationMode, setAnimationMode] = useState<CatalogAnimationMode>('none');
  const [cardTheme, setCardTheme] = useState<'paper' | 'white' | 'dark' | 'grid'>('paper');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Filter assets based on category and search query
  const filteredAssets = useMemo(() => {
    return assets.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.tags.some((t) => t.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [assets, selectedCategory, searchQuery]);

  const handleCopySvg = (item: ScribbleAsset, e: React.MouseEvent) => {
    e.stopPropagation();
    const activeColor = currentColor === 'original' ? (item.defaultColor || '#EA552B') : currentColor;
    let svgContent = '';
    if (item.rawSvg) {
      svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${item.viewBox}" fill="none">\n  ${item.rawSvg.replace(/currentColor/g, activeColor)}\n</svg>`;
    } else if (item.path) {
      if (item.type === 'stroke') {
        const dMatch = item.path.match(/d="([^"]+)"/);
        const d = dMatch ? dMatch[1] : '';
        svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${item.viewBox}" fill="none">\n  <path d="${d}" fill="none" stroke="${activeColor}" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" />\n</svg>`;
      } else {
        const dMatch = item.path.match(/d="([^"]+)"/);
        const d = dMatch ? dMatch[1] : '';
        svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${item.viewBox}" fill="none">\n  <path d="${d}" fill="${activeColor}" />\n</svg>`;
      }
    }

    navigator.clipboard.writeText(svgContent);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 1800);
  };

  const handleDownloadSvg = (item: ScribbleAsset, e: React.MouseEvent) => {
    e.stopPropagation();
    const activeColor = currentColor === 'original' ? (item.defaultColor || '#EA552B') : currentColor;
    let svgContent = '';
    if (item.rawSvg) {
      svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${item.viewBox}" fill="none">\n  ${item.rawSvg.replace(/currentColor/g, activeColor)}\n</svg>`;
    } else if (item.path) {
      if (item.type === 'stroke') {
        const dMatch = item.path.match(/d="([^"]+)"/);
        const d = dMatch ? dMatch[1] : '';
        svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${item.viewBox}" fill="none">\n  <path d="${d}" fill="none" stroke="${activeColor}" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" />\n</svg>`;
      } else {
        const dMatch = item.path.match(/d="([^"]+)"/);
        const d = dMatch ? dMatch[1] : '';
        svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${item.viewBox}" fill="none">\n  <path d="${d}" fill="${activeColor}" />\n</svg>`;
      }
    }

    const blob = new Blob([svgContent], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${item.id}.svg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="asset-catalog" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Category Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2.5 rounded-2xl text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all flex items-center gap-2 ${
              selectedCategory === cat.id
                ? 'bg-black text-white shadow-md -translate-y-0.5'
                : 'bg-white text-black/70 hover:text-black hover:bg-black/5 border border-black/10'
            }`}
          >
            <span>{cat.name}</span>
            <span
              className={`px-1.5 py-0.5 rounded-full text-[10px] font-mono ${
                selectedCategory === cat.id ? 'bg-white/20 text-white' : 'bg-black/5 text-black/60'
              }`}
            >
              {cat.count}
            </span>
          </button>
        ))}
      </div>

      {/* Interactive Controls Bar */}
      <div className="p-4 sm:p-5 rounded-3xl bg-white border border-black/15 shadow-sm mb-8 space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* Search Field */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-black/40" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, tag, or shape (e.g., arrow, wave, star, badge)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-scribble-paper/80 border border-black/15 focus:border-black focus:outline-none text-sm font-medium"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-black/40 hover:text-black font-bold"
              >
                Clear
              </button>
            )}
          </div>

          {/* Color Switcher Bar */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-bold uppercase tracking-wider text-black/60 mr-1">Global Color:</span>
            <button
              onClick={() => onColorChange('original')}
              title="Original Authentic Multi-Colors"
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                currentColor === 'original'
                  ? 'bg-black text-white shadow-sm'
                  : 'bg-black/5 hover:bg-black/10 text-black/70'
              }`}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-scribble-orange via-scribble-yellow to-scribble-blue" />
              <span>Original</span>
            </button>
            {COLOR_PRESETS.map((p) => (
              <button
                key={p.value}
                onClick={() => onColorChange(p.value)}
                title={p.label}
                className={`w-7 h-7 rounded-full border-2 transition-transform ${
                  currentColor === p.value ? 'scale-110 border-black shadow' : 'border-transparent hover:scale-105'
                }`}
                style={{ backgroundColor: p.value }}
              />
            ))}
            <input
              type="color"
              value={currentColor === 'original' ? '#EA552B' : currentColor}
              onChange={(e) => onColorChange(e.target.value)}
              className="w-7 h-7 rounded-full cursor-pointer border border-black/20"
              title="Custom Color"
            />
          </div>
        </div>

        {/* Second Row Controls: Scale, Animation, Background */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-black/10 text-xs font-bold text-black/70">
          {/* Card Theme Picker */}
          <div className="flex items-center gap-2">
            <span className="uppercase tracking-wider">Canvas:</span>
            <div className="flex items-center gap-1 bg-black/5 p-1 rounded-xl">
              <button
                onClick={() => setCardTheme('paper')}
                className={`px-2.5 py-1 rounded-lg ${
                  cardTheme === 'paper' ? 'bg-white shadow-sm text-black font-bold' : 'text-black/60'
                }`}
              >
                Paper
              </button>
              <button
                onClick={() => setCardTheme('white')}
                className={`px-2.5 py-1 rounded-lg ${
                  cardTheme === 'white' ? 'bg-white shadow-sm text-black font-bold' : 'text-black/60'
                }`}
              >
                White
              </button>
              <button
                onClick={() => setCardTheme('grid')}
                className={`px-2.5 py-1 rounded-lg ${
                  cardTheme === 'grid' ? 'bg-white shadow-sm text-black font-bold' : 'text-black/60'
                }`}
              >
                Grid
              </button>
              <button
                onClick={() => setCardTheme('dark')}
                className={`px-2.5 py-1 rounded-lg ${
                  cardTheme === 'dark' ? 'bg-black text-white font-bold' : 'text-black/60'
                }`}
              >
                Dark
              </button>
            </div>
          </div>

          {/* Size Scale Slider */}
          <div className="flex items-center gap-3">
            <span className="uppercase tracking-wider">Size:</span>
            <input
              type="range"
              min="36"
              max="96"
              value={scale}
              onChange={(e) => setScale(Number(e.target.value))}
              className="w-28 accent-black cursor-pointer"
            />
            <span className="font-mono text-[11px] text-black/50">{scale}px</span>
          </div>

          {/* Animation Selector */}
          <div className="flex items-center gap-2">
            <span className="uppercase tracking-wider text-black/50 text-[11px] font-bold">Animation:</span>
            <div className="flex items-center gap-1 bg-black/5 p-1 rounded-xl border border-black/10">
              {[
                { id: 'none', label: 'Static' },
                { id: 'draw', label: 'Draw' },
                { id: 'float', label: 'Float' },
                { id: 'wobble', label: 'Wobble' },
                { id: 'pulse', label: 'Glow' },
              ].map((mode) => (
                <button
                  key={mode.id}
                  onClick={() => setAnimationMode(mode.id as CatalogAnimationMode)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                    animationMode === mode.id
                      ? 'bg-white text-black shadow-sm'
                      : 'text-black/60 hover:text-black'
                  }`}
                >
                  {mode.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Results Count Banner */}
      <div className="flex items-center justify-between mb-6">
        <span className="text-xs font-bold uppercase tracking-wider text-black/50">
          Showing {filteredAssets.length} of {assets.length} Scribbles
        </span>
        {searchQuery && (
          <span className="text-xs text-black/60">
            Keyword: <span className="font-bold text-black">"{searchQuery}"</span>
          </span>
        )}
      </div>

      {/* Asset Cards Grid */}
      {filteredAssets.length === 0 ? (
        <div className="py-16 text-center rounded-3xl bg-white border border-black/10 p-8">
          <Scribble name="accent-question-mark" size={48} color="#EA552B" className="mx-auto mb-3" />
          <h3 className="text-lg font-bold text-black">No scribbles matched your filter</h3>
          <p className="text-sm text-black/50 mt-1">Try another keyword or category.</p>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
            }}
            className="mt-4 px-4 py-2 rounded-xl bg-black text-white text-xs font-bold uppercase tracking-wider"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filteredAssets.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectAsset(item)}
              className={`group relative rounded-2xl border border-black/10 p-4 flex flex-col justify-between cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1 hover:border-black/30 ${
                cardTheme === 'paper'
                  ? 'bg-[#FDFBF7]'
                  : cardTheme === 'white'
                  ? 'bg-white'
                  : cardTheme === 'grid'
                  ? 'bg-white bg-grid-paper'
                  : 'bg-[#141416] text-white border-white/10'
              }`}
            >
              {/* Asset Stage Canvas */}
              <div className="h-28 flex items-center justify-center p-2 overflow-hidden">
                <Scribble
                  name={item.id}
                  color={currentColor === 'original' ? undefined : currentColor}
                  size={scale}
                  animate={animationMode === 'none' ? false : animationMode}
                  key={`${item.id}-${currentColor}-${animationMode}`}
                  className="transition-all duration-300 group-hover:scale-110 group-hover:rotate-1"
                />
              </div>

              {/* Title & Info */}
              <div className="pt-2 border-t border-black/5 flex items-center justify-between">
                <div className="truncate pr-1">
                  <h4 className="text-xs font-bold truncate text-black group-hover:text-scribble-orange transition-colors">
                    {item.name}
                  </h4>
                  <span className="text-[10px] text-black/40 font-mono block truncate">
                    {item.category}
                  </span>
                </div>

                {/* Quick Action Buttons */}
                <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  {onEditAsset && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onEditAsset(item);
                      }}
                      title="Edit in SVG Editor"
                      className="p-1 rounded-lg bg-scribble-orange text-white hover:bg-black transition-colors shadow-sm"
                    >
                      <Pencil className="w-3 h-3" />
                    </button>
                  )}
                  <button
                    onClick={(e) => handleCopySvg(item, e)}
                    title="Copy Standalone SVG"
                    className="p-1 rounded-lg bg-black text-white hover:bg-scribble-orange transition-colors shadow-sm"
                  >
                    {copiedId === item.id ? <Check className="w-3 h-3 text-green-400" /> : <Copy className="w-3 h-3" />}
                  </button>
                  <button
                    onClick={(e) => handleDownloadSvg(item, e)}
                    title="Download SVG file"
                    className="p-1 rounded-lg bg-black/10 hover:bg-black hover:text-white transition-colors"
                  >
                    <Download className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default AssetCatalog;
