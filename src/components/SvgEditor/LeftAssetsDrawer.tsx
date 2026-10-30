// src/components/SvgEditor/LeftAssetsDrawer.tsx
// Togglable Left Assets Drawer: Fast search, categorization, and 1-click stamping for ScribbleKit assets

import React, { useState, useMemo, useCallback } from 'react';
import {
  Search,
  X,
  Plus,
  RotateCcw,
  Sparkles,
  PanelLeftClose,
  PanelLeftOpen,
  Layers,
  Check,
} from 'lucide-react';
import {
  SCRIBBLES_ASSETS,
  CATEGORIES,
  ScribbleAsset,
} from '../../lib/scribbles-data';
import { Scribble } from '../Scribble';

interface LeftAssetsDrawerProps {
  isOpen: boolean;
  onToggle: () => void;
  onStampAsset: (asset: ScribbleAsset, mode: 'layer' | 'replace') => void;
  activePenColor?: string;
}

export const LeftAssetsDrawer: React.FC<LeftAssetsDrawerProps> = ({
  isOpen,
  onToggle,
  onStampAsset,
  activePenColor = '#EA552B',
}) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [lastStampedId, setLastStampedId] = useState<string | null>(null);

  // Filter assets based on category and search query
  const filteredAssets = useMemo(() => {
    return SCRIBBLES_ASSETS.filter((item) => {
      const matchesCat = selectedCategory === 'all' || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.tags.some((t) => t.toLowerCase().includes(q));
      return matchesCat && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  // Handle stamp with brief tactile feedback
  const handleStamp = useCallback(
    (asset: ScribbleAsset, mode: 'layer' | 'replace', e?: React.MouseEvent) => {
      if (e) e.stopPropagation();
      onStampAsset(asset, mode);
      setLastStampedId(asset.id);
      setTimeout(() => setLastStampedId(null), 1200);
    },
    [onStampAsset]
  );

  // If collapsed: show slim expandable rail
  if (!isOpen) {
    return (
      <aside
        aria-label="Assets drawer collapsed rail"
        className="w-12 border-r border-black/10 bg-[#FAF7F2] flex flex-col items-center py-3 shrink-0 select-none z-20 transition-all hover:bg-[#F5F2EB]"
      >
        <button
          onClick={onToggle}
          title="Expand Assets Drawer (Ctrl+B)"
          className="p-2 rounded-xl bg-white hover:bg-black/5 text-scribble-dark shadow-sm border border-black/10 hover:scale-105 active:scale-95 transition-all flex items-center justify-center group"
        >
          <PanelLeftOpen className="w-4 h-4 text-scribble-orange group-hover:scale-110 transition-transform" />
        </button>

        {/* Vertical badge */}
        <button
          onClick={onToggle}
          className="mt-6 flex flex-col items-center gap-2 text-black/50 hover:text-black transition-colors"
          title="Click to open Assets Drawer"
        >
          <Layers className="w-3.5 h-3.5 text-scribble-orange/70" />
          <span
            className="text-[10px] font-extrabold uppercase tracking-widest text-black/60 rotate-180"
            style={{ writingMode: 'vertical-rl' }}
          >
            Assets ({SCRIBBLES_ASSETS.length})
          </span>
        </button>
      </aside>
    );
  }

  // Expanded Left Assets Drawer
  return (
    <aside
      aria-label="Assets Library Drawer"
      className="w-80 sm:w-84 border-r border-black/10 bg-white flex flex-col h-full shrink-0 select-none z-20 shadow-sm transition-all animate-fade-in"
    >
      {/* Drawer Header */}
      <div className="px-4 py-3 border-b border-black/10 bg-scribble-paper flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-xl bg-scribble-yellow/30 border border-scribble-yellow/60 flex items-center justify-center text-scribble-dark">
            <Sparkles className="w-3.5 h-3.5 text-scribble-orange" />
          </div>
          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-scribble-dark font-display flex items-center gap-1.5">
              <span>Assets Library</span>
              <span className="text-[10px] font-extrabold px-1.5 py-0.2 rounded-full bg-black text-white">
                {SCRIBBLES_ASSETS.length}
              </span>
            </h3>
            <p className="text-[10px] text-black/50">Click any doodle to stamp</p>
          </div>
        </div>

        <button
          onClick={onToggle}
          title="Collapse Assets Drawer (Ctrl+B)"
          className="p-1.5 rounded-lg hover:bg-black/10 text-black/60 hover:text-black transition-colors"
          aria-label="Collapse assets drawer"
        >
          <PanelLeftClose className="w-4 h-4" />
        </button>
      </div>

      {/* Search Input */}
      <div className="p-3 border-b border-black/10 bg-[#FAF7F2] shrink-0">
        <div className="relative">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-black/40" />
          <input
            type="text"
            placeholder="Search 140+ scribbles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-8 pr-7 py-1.5 bg-white rounded-xl border border-black/15 text-xs focus:outline-none focus:border-black font-medium transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-0.5 rounded-full hover:bg-black/10 text-black/40 hover:text-black"
              title="Clear search"
            >
              <X className="w-3 h-3" />
            </button>
          )}
        </div>

        {/* Category Scroll Filter */}
        <div className="flex items-center gap-1 overflow-x-auto mt-2 pb-1 no-scrollbar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-2.5 py-1 rounded-xl text-[10px] font-bold shrink-0 transition-all ${
                selectedCategory === cat.id
                  ? 'bg-black text-white shadow-sm'
                  : 'bg-white hover:bg-black/5 text-black/70 border border-black/10'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Assets Grid */}
      <div className="flex-1 overflow-y-auto p-3 bg-[#FAF8F5]/60">
        {filteredAssets.length === 0 ? (
          <div className="h-48 flex flex-col items-center justify-center text-center p-4">
            <Sparkles className="w-8 h-8 text-black/20 mb-2" />
            <p className="text-xs font-bold text-black/60">No scribbles matched</p>
            <p className="text-[11px] text-black/40 mt-0.5">Try searching for arrows, hearts, or stars</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-3 text-xs font-bold text-scribble-orange underline"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-2.5">
            {filteredAssets.map((asset) => {
              const isJustStamped = lastStampedId === asset.id;
              const displayColor = asset.defaultColor || activePenColor;

              return (
                <div
                  key={asset.id}
                  onClick={(e) => handleStamp(asset, 'layer', e)}
                  className={`group relative bg-white rounded-2xl border transition-all flex flex-col p-2 cursor-pointer text-left select-none ${
                    isJustStamped
                      ? 'border-green-500 shadow-md ring-2 ring-green-400/20 bg-green-50/20'
                      : 'border-black/10 hover:border-black/30 hover:shadow-md hover:-translate-y-0.5'
                  }`}
                  title={`Click to stamp ${asset.name} as a layer`}
                >
                  {/* Scribble Preview Box */}
                  <div className="h-20 w-full flex items-center justify-center p-1.5 bg-[#FDFBF7] rounded-xl border border-black/5 group-hover:bg-white group-hover:scale-105 transition-all overflow-hidden relative">
                    <Scribble
                      name={asset.id}
                      color={displayColor}
                      size={52}
                    />

                    {/* Just Added Feedback Badge */}
                    {isJustStamped && (
                      <span className="absolute inset-0 bg-green-500/90 text-white text-[10px] font-bold flex items-center justify-center gap-1 rounded-xl animate-fade-in">
                        <Check className="w-3.5 h-3.5" />
                        <span>Added!</span>
                      </span>
                    )}
                  </div>

                  {/* Scribble Name & Category */}
                  <div className="mt-2 flex-1">
                    <div className="text-[11px] font-bold text-scribble-dark truncate group-hover:text-scribble-orange transition-colors">
                      {asset.name}
                    </div>
                    <div className="text-[9px] text-black/45 capitalize truncate">
                      {asset.category}
                    </div>
                  </div>

                  {/* Stamp Actions Bar */}
                  <div className="mt-2 pt-1.5 border-t border-black/5 flex items-center gap-1 opacity-80 group-hover:opacity-100 transition-opacity">
                    <button
                      type="button"
                      onClick={(e) => handleStamp(asset, 'layer', e)}
                      className="flex-1 py-1 rounded-lg bg-black hover:bg-scribble-orange text-white text-[10px] font-bold flex items-center justify-center gap-0.5 transition-colors shadow-sm"
                      title="Add as new layer"
                    >
                      <Plus className="w-2.5 h-2.5" />
                      <span>Layer</span>
                    </button>
                    <button
                      type="button"
                      onClick={(e) => handleStamp(asset, 'replace', e)}
                      className="px-2 py-1 rounded-lg bg-black/5 hover:bg-black/10 text-black/70 hover:text-black text-[10px] font-bold flex items-center justify-center transition-colors"
                      title="Replace entire canvas with this asset"
                    >
                      <RotateCcw className="w-2.5 h-2.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Footer Info */}
      <div className="px-3 py-2 border-t border-black/10 bg-[#FAF7F2] text-[10px] text-black/50 flex items-center justify-between shrink-0 font-medium">
        <span>Showing {filteredAssets.length} assets</span>
        <span className="font-mono text-[9px] bg-black/5 px-1.5 py-0.5 rounded">Ctrl+B toggle</span>
      </div>
    </aside>
  );
};
