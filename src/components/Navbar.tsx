import React from 'react';
import { Sparkles, BookOpen, Download } from 'lucide-react';

interface NavbarProps {
  onOpenGuide: () => void;
  onScrollToStudio: () => void;
  onScrollToCatalog: () => void;
  onDownloadAll: () => void;
  assetCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenGuide,
  onScrollToStudio,
  onScrollToCatalog,
  onDownloadAll,
  assetCount,
}) => {
  return (
    <header className="relative z-40 bg-transparent pt-6 pb-4 sm:pt-8 sm:pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <a href="#" className="flex items-center gap-3 group">
            <img src="/logo.svg" alt="ScribbleKit Logo" className="h-9 w-auto object-contain" />
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-scribble-yellow/30 text-scribble-dark border border-scribble-yellow/60">
                ScribbleKit
              </span>
              <span className="hidden sm:inline-block text-xs font-mono font-medium text-black/50">
                v1.0.0 ({assetCount} assets)
              </span>
            </div>
          </a>
        </div>

        {/* Center Nav */}
        <nav className="hidden md:flex items-center gap-1 bg-black/5 p-1 rounded-full border border-black/5">
          <button
            onClick={onScrollToCatalog}
            className="px-4 py-1.5 text-sm font-medium rounded-full hover:bg-white text-black/80 hover:text-black transition-all shadow-sm hover:shadow"
          >
            Library
          </button>
          <button
            onClick={onScrollToStudio}
            className="px-4 py-1.5 text-sm font-medium rounded-full hover:bg-white text-black/80 hover:text-black transition-all shadow-sm hover:shadow flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-scribble-orange" />
            Headline Studio
          </button>
          <button
            onClick={onOpenGuide}
            className="px-4 py-1.5 text-sm font-medium rounded-full hover:bg-white text-black/80 hover:text-black transition-all shadow-sm hover:shadow flex items-center gap-1.5"
          >
            <BookOpen className="w-3.5 h-3.5 text-scribble-blue" />
            Design Guide
          </button>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={onOpenGuide}
            className="hidden sm:flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-3.5 py-2 rounded-xl border border-black/20 hover:border-black bg-white hover:bg-black/5 text-black transition-all"
          >
            <BookOpen className="w-4 h-4 text-scribble-orange" />
            Design Guide
          </button>

          <button
            onClick={onDownloadAll}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-xl bg-black hover:bg-scribble-orange text-white transition-all shadow hover:shadow-md hover:-translate-y-0.5"
          >
            <Download className="w-4 h-4" />
            <span>Download All ({assetCount})</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
