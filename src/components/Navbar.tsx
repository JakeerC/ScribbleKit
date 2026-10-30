import React from "react";
import {
  Sparkles,
  BookOpen,
  Download,
  Pencil,
  SquareLibrary,
} from "lucide-react";

interface NavbarProps {
  onOpenGuide: () => void;
  onScrollToStudio: () => void;
  onScrollToCatalog: () => void;
  onDownloadAll: () => void;
  onOpenEditor: () => void;
  assetCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenGuide,
  onScrollToStudio,
  onScrollToCatalog,
  onDownloadAll,
  onOpenEditor,
  assetCount,
}) => {
  return (
    <header className="relative z-40 bg-transparent w-full pt-4 pb-2 sm:pt-6 sm:pb-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between w-full">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <a href="#" className="flex items-center gap-3 group">
            <img
              src="/logo.svg"
              alt="ScribbleKit Logo"
              className="h-9 w-auto object-contain"
            />
          </a>
        </div>

        {/* Center Nav */}
        <nav className="hidden md:flex items-center gap-1 bg-black/5 p-1 rounded-full border border-black/5">
          <button
            onClick={onScrollToCatalog}
            className="px-4 py-1.5 text-sm font-medium rounded-full hover:bg-white text-black/80 hover:text-black transition-all shadow-sm hover:shadow flex items-center gap-1.5"
          >
            <SquareLibrary className="w-3.5 h-3.5 text-scribble-orange" />
            Library
          </button>
          <button
            onClick={onOpenEditor}
            className="px-4 py-1.5 text-sm font-medium rounded-full hover:bg-white text-black/80 hover:text-black transition-all shadow-sm hover:shadow flex items-center gap-1.5"
          >
            <Pencil className="w-3.5 h-3.5 text-scribble-orange" />
            Scribble Studio
          </button>
          <button
            onClick={onScrollToStudio}
            className="px-4 py-1.5 text-sm font-medium rounded-full hover:bg-white text-black/80 hover:text-black transition-all shadow-sm hover:shadow flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-scribble-orange" />
            Headline Studio
          </button>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2.5">
          <button
            title="Design Guide"
            onClick={onOpenGuide}
            className="hidden sm:flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-3.5 py-2 rounded-xl border border-black/20 hover:border-black bg-white hover:bg-black/5 text-black transition-all"
          >
            <BookOpen className="w-4 h-4 text-scribble-orange" />
          </button>

          <button
            title="Download kit as JSON"
            onClick={onDownloadAll}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-xl bg-black hover:bg-scribble-orange text-white transition-all shadow hover:shadow-md hover:-translate-y-0.5"
          >
            <Download className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
