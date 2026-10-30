// src/components/SvgEditor/AssetStampDrawer.tsx
// Asset stamp browser to easily drop any ScribbleKit asset onto the canvas

import React, { useState, useMemo } from 'react';
import { X, Search, Plus, Sparkles, FolderDown } from 'lucide-react';
import {
  SCRIBBLES_ASSETS,
  CATEGORIES,
  ScribbleAsset,
} from '../../lib/scribbles-data';
import { Scribble } from '../Scribble';

interface AssetStampDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onStampAsset: (asset: ScribbleAsset, mode: 'layer' | 'replace') => void;
}

export const AssetStampDrawer: React.FC<AssetStampDrawerProps> = ({
  isOpen,
  onClose,
  onStampAsset,
}) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  React.useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        onClose();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

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

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in select-none"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-white rounded-3xl border border-black/20 shadow-2xl overflow-hidden flex flex-col max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-black/10 flex items-center justify-between bg-scribble-paper">
          <div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-scribble-orange" />
              <h3 className="text-xl font-extrabold text-scribble-dark font-display">
                Stamp ScribbleKit Asset
              </h3>
            </div>
            <p className="text-xs text-black/60 mt-0.5">
              Select any hand-drawn doodle to add as a layer or replace canvas.
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close asset drawer"
            className="p-2 rounded-full hover:bg-black/10 text-black/70 hover:text-black transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search & Category Filter */}
        <div className="px-6 py-3 border-b border-black/10 bg-[#FAF7F2] flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Search bar */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-black/40" />
            <input
              type="text"
              placeholder="Search 116+ scribbles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 bg-white rounded-xl border border-black/15 text-xs focus:outline-none focus:border-black font-medium"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
            {CATEGORIES.slice(0, 6).map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1 rounded-xl text-xs font-bold shrink-0 transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-black text-white'
                    : 'bg-white hover:bg-black/5 text-black/70 border border-black/10'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Assets Grid */}
        <div className="flex-1 overflow-y-auto p-6 bg-scribble-paper/30">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {filteredAssets.map((asset) => (
              <div
                key={asset.id}
                className="group relative bg-white rounded-2xl border border-black/10 p-3 hover:border-black/30 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                {/* Scribble Preview */}
                <div className="h-28 flex items-center justify-center p-2 bg-[#FDFBF7] rounded-xl border border-black/5 group-hover:scale-105 transition-transform">
                  <Scribble
                    name={asset.id}
                    color={asset.defaultColor || '#EA552B'}
                    size={72}
                  />
                </div>

                <div className="mt-2.5">
                  <div className="text-xs font-bold text-scribble-dark truncate">{asset.name}</div>
                  <div className="text-[10px] text-black/40 capitalize">{asset.category}</div>
                </div>

                {/* Stamp Action Overlay on Hover */}
                <div className="mt-2 flex items-center gap-1.5">
                  <button
                    onClick={() => {
                      onStampAsset(asset, 'layer');
                      onClose();
                    }}
                    className="flex-1 py-1.5 bg-black hover:bg-scribble-orange text-white rounded-xl text-[11px] font-bold transition-colors flex items-center justify-center gap-1 shadow"
                    title="Add as Layer"
                  >
                    <Plus className="w-3 h-3" />
                    <span>Layer</span>
                  </button>

                  <button
                    onClick={() => {
                      onStampAsset(asset, 'replace');
                      onClose();
                    }}
                    className="p-1.5 bg-white hover:bg-black/5 text-black/70 hover:text-black border border-black/10 rounded-xl text-[11px] font-bold transition-colors"
                    title="Replace Entire Canvas with this Scribble"
                  >
                    <FolderDown className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredAssets.length === 0 && (
            <div className="text-center py-12 text-black/50 text-sm">
              No scribbles found matching "{searchQuery}".
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
