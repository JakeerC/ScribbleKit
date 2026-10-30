import React from "react";
import {
  Sparkles,
  BookOpen,
  Download,
  Pencil,
  SquareLibrary,
} from "lucide-react";

export type NavPage = "library" | "svg-studio" | "headline-studio";

export interface NavbarProps {
  currentPage?: NavPage;
  onNavigateToLibrary?: () => void;
  onNavigateToSvgStudio?: () => void;
  onNavigateToHeadlineStudio?: () => void;
  onOpenGuide?: () => void;
  onScrollToStudio?: () => void;
  onScrollToCatalog?: () => void;
  onDownloadAll?: () => void;
  onOpenEditor?: () => void;
  assetCount?: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage = "library",
  onNavigateToLibrary,
  onNavigateToSvgStudio,
  onNavigateToHeadlineStudio,
  onOpenGuide,
  onScrollToStudio,
  onScrollToCatalog,
  onDownloadAll,
  onOpenEditor,
}) => {
  const handleLibraryClick = () => {
    if (onNavigateToLibrary) {
      onNavigateToLibrary();
    } else if (onScrollToCatalog) {
      onScrollToCatalog();
    }
  };

  const handleSvgStudioClick = () => {
    if (onNavigateToSvgStudio) {
      onNavigateToSvgStudio();
    } else if (onOpenEditor) {
      onOpenEditor();
    }
  };

  const handleHeadlineStudioClick = () => {
    if (onNavigateToHeadlineStudio) {
      onNavigateToHeadlineStudio();
    } else if (onScrollToStudio) {
      onScrollToStudio();
    }
  };

  const getNavItemClass = (isActive: boolean) =>
    `px-3.5 sm:px-4 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-all flex items-center gap-1.5 ${
      isActive
        ? "bg-white text-black font-semibold shadow-sm border border-black/5"
        : "text-black/70 hover:text-black hover:bg-white/60"
    }`;

  const navButtons = (
    <>
      <button
        onClick={handleLibraryClick}
        className={getNavItemClass(currentPage === "library")}
        title="Scribble Asset Library"
      >
        <SquareLibrary className="w-3.5 h-3.5 text-scribble-orange" />
        <span>Library</span>
      </button>
      <button
        onClick={handleSvgStudioClick}
        className={getNavItemClass(currentPage === "svg-studio")}
        title="Interactive SVG Studio"
      >
        <Pencil className="w-3.5 h-3.5 text-scribble-orange" />
        <span>svg-studio</span>
      </button>
      <button
        onClick={handleHeadlineStudioClick}
        className={getNavItemClass(currentPage === "headline-studio")}
        title="Headline & CTA Studio"
      >
        <Sparkles className="w-3.5 h-3.5 text-scribble-orange" />
        <span>Headline Studio</span>
      </button>
    </>
  );

  return (
    <header className="relative z-40 bg-transparent w-full pt-4 pb-2 sm:pt-6 sm:pb-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between w-full">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleLibraryClick();
            }}
            className="flex items-center gap-3 group"
          >
            <img
              src="/logo.svg"
              alt="ScribbleKit Logo"
              className="h-8 sm:h-9 w-auto object-contain"
            />
          </a>
        </div>

        {/* Center Nav (Desktop / Tablet) */}
        <nav className="hidden sm:flex items-center gap-1 bg-black/5 p-1 rounded-full border border-black/5">
          {navButtons}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2.5">
          {onOpenGuide && (
            <button
              title="Design Guide"
              onClick={onOpenGuide}
              className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-3.5 py-2 rounded-xl border border-black/20 hover:border-black bg-white hover:bg-black/5 text-black transition-all"
            >
              <BookOpen className="w-4 h-4 text-scribble-orange" />
            </button>
          )}

          {onDownloadAll && (
            <button
              title="Download kit as JSON"
              onClick={onDownloadAll}
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-3.5 py-2 rounded-xl bg-black hover:bg-scribble-orange text-white transition-all shadow hover:shadow-md hover:-translate-y-0.5"
            >
              <Download className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Mobile Nav (< sm) */}
      <div className="flex sm:hidden justify-center w-full px-4 pt-2.5 pb-1">
        <nav className="flex items-center gap-0.5 bg-black/5 p-1 rounded-full border border-black/5">
          {navButtons}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
