import { useState, useEffect } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';
import { Hero } from './components/Hero';
import { HeroFeatures } from './components/HeroFeatures';
import { HeadlineStudio } from './components/HeadlineStudio';
import { AssetCatalog } from './components/AssetCatalog';
import { AssetDetailModal } from './components/AssetDetailModal';
import { DesignGuideModal } from './components/DesignGuideModal';
import { SvgEditor } from './components/SvgEditor';
import { Navbar, NavPage } from './components/Navbar';
import { SCRIBBLES_ASSETS, ScribbleAsset, getScribbleById } from './lib/scribbles-data';

export function App() {
  const [currentColor, setCurrentColor] = useState('original');
  const [selectedAsset, setSelectedAsset] = useState<ScribbleAsset | null>(null);
  const [isGuideOpen, setIsGuideOpen] = useState(false);

  // Helper to determine route from current window URL
  const getRouteFromLocation = (): NavPage => {
    const path = window.location.pathname;
    const hash = window.location.hash;
    const search = new URLSearchParams(window.location.search);

    if (
      path === '/headline-studio' ||
      path.startsWith('/headline-studio/') ||
      hash === '#headline-studio' ||
      search.get('page') === 'headline-studio'
    ) {
      return 'headline-studio';
    }

    if (
      path === '/svg-studio' ||
      path.startsWith('/svg-studio/') ||
      path === '/editor' ||
      path.startsWith('/editor/') ||
      hash === '#svg-studio' ||
      hash === '#editor' ||
      search.get('page') === 'svg-studio' ||
      search.get('page') === 'editor'
    ) {
      return 'svg-studio';
    }

    return 'library';
  };

  // Current page state
  const [currentPage, setCurrentPage] = useState<NavPage>(() => getRouteFromLocation());
  const [editorAsset, setEditorAsset] = useState<ScribbleAsset | null>(() => {
    const search = new URLSearchParams(window.location.search);
    const assetId = search.get('asset');
    return assetId ? getScribbleById(assetId) || null : null;
  });

  // Handle browser back / forward navigation
  useEffect(() => {
    const handlePopState = () => {
      const route = getRouteFromLocation();
      setCurrentPage(route);

      const search = new URLSearchParams(window.location.search);
      const assetId = search.get('asset');
      if (assetId) {
        setEditorAsset(getScribbleById(assetId) || null);
      } else if (route !== 'svg-studio') {
        setEditorAsset(null);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Navigation handlers
  const navigateToLibrary = (shouldScrollToCatalog = false) => {
    if (currentPage !== 'library') {
      setCurrentPage('library');
      setEditorAsset(null);
      if (window.location.pathname !== '/') {
        window.history.pushState(null, '', '/');
      }
    }
    if (shouldScrollToCatalog) {
      setTimeout(() => {
        const el = document.getElementById('asset-catalog');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navigateToSvgStudio = (asset?: ScribbleAsset) => {
    setEditorAsset(asset || null);
    setCurrentPage('svg-studio');
    const newUrl = asset ? `/svg-studio?asset=${encodeURIComponent(asset.id)}` : '/svg-studio';
    if (
      window.location.pathname !== '/svg-studio' ||
      window.location.search !== (asset ? `?asset=${asset.id}` : '')
    ) {
      window.history.pushState(null, '', newUrl);
    }
  };

  const navigateToHeadlineStudio = () => {
    if (currentPage !== 'headline-studio') {
      setCurrentPage('headline-studio');
      setEditorAsset(null);
      if (window.location.pathname !== '/headline-studio') {
        window.history.pushState(null, '', '/headline-studio');
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDownloadAll = () => {
    // Generate a single consolidated JSON bundle containing all vector assets
    const bundle = {
      name: 'ScribbleKit Vector Kit',
      version: '1.0.0',
      totalAssets: SCRIBBLES_ASSETS.length,
      license: 'MIT',
      author: 'ScribbleKit',
      assets: SCRIBBLES_ASSETS.map((item) => ({
        id: item.id,
        name: item.name,
        category: item.category,
        viewBox: item.viewBox,
        tags: item.tags,
        svg: item.rawSvg || item.path,
      })),
    };

    const blob = new Blob([JSON.stringify(bundle, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `scribblekit-all-${SCRIBBLES_ASSETS.length}-assets.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Shared Footer
  const renderFooter = () => (
    <footer className="border-t border-black/10 bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="ScribbleKit Logo" className="h-8 w-auto object-contain" />
          <span className="text-xs font-mono text-black/60">
            ScribbleKit Studio • 100% Hand-Drawn SVG Kit
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs font-semibold text-black/70">
          <button
            onClick={() => navigateToSvgStudio()}
            className="hover:text-black font-bold text-scribble-orange underline underline-offset-2"
          >
            svg-studio
          </button>
          <span>•</span>
          <button
            onClick={() => setIsGuideOpen(true)}
            className="hover:text-black underline underline-offset-2"
          >
            Design Guide
          </button>
          <span>•</span>
          <button
            onClick={navigateToHeadlineStudio}
            className="hover:text-black underline underline-offset-2"
          >
            Headline Studio
          </button>
          <span>•</span>
          <button
            onClick={handleDownloadAll}
            className="hover:text-black underline underline-offset-2"
          >
            Export JSON ({SCRIBBLES_ASSETS.length})
          </button>
        </div>

        <div className="text-xs text-black/50 font-medium">
          MIT License • Designed for High-Impact Web Projects
        </div>
      </div>
    </footer>
  );

  // Dedicated SVG Studio View
  if (currentPage === 'svg-studio') {
    return (
      <div className="w-screen h-screen overflow-hidden bg-white selection:bg-scribble-yellow selection:text-black">
        <SpeedInsights />
        <Analytics />
        <SvgEditor
          isOpen={true}
          mode="page"
          onClose={() => navigateToLibrary(false)}
          onNavigateHome={() => navigateToLibrary(false)}
          initialAsset={editorAsset}
        />
        <DesignGuideModal
          isOpen={isGuideOpen}
          onClose={() => setIsGuideOpen(false)}
        />
      </div>
    );
  }

  // Dedicated Headline Studio Page View
  if (currentPage === 'headline-studio') {
    return (
      <div className="min-h-screen flex flex-col bg-scribble-paper selection:bg-scribble-yellow selection:text-black">
        <SpeedInsights />
        <Analytics />
        <Navbar
          currentPage="headline-studio"
          onNavigateToLibrary={() => navigateToLibrary(false)}
          onNavigateToSvgStudio={() => navigateToSvgStudio()}
          onNavigateToHeadlineStudio={navigateToHeadlineStudio}
          onOpenGuide={() => setIsGuideOpen(true)}
          onDownloadAll={handleDownloadAll}
          assetCount={SCRIBBLES_ASSETS.length}
        />

        <main className="flex-1">
          <HeadlineStudio />
        </main>

        <DesignGuideModal
          isOpen={isGuideOpen}
          onClose={() => setIsGuideOpen(false)}
        />

        {renderFooter()}
      </div>
    );
  }

  // Home / Library View
  return (
    <div className="min-h-screen flex flex-col bg-scribble-paper selection:bg-scribble-yellow selection:text-black">
      <SpeedInsights />
      <Analytics />
      <main className="flex-1">
        {/* Full-Screen Hero & Navbar Screen */}
        <Hero
          onScrollToCatalog={() => navigateToLibrary(true)}
          onNavigateToLibrary={() => navigateToLibrary(false)}
          onNavigateToSvgStudio={() => navigateToSvgStudio()}
          onNavigateToHeadlineStudio={navigateToHeadlineStudio}
          onOpenGuide={() => setIsGuideOpen(true)}
          onDownloadAll={handleDownloadAll}
          assetCount={SCRIBBLES_ASSETS.length}
        />

        {/* Feature Cards below Hero Section */}
        <HeroFeatures />

        {/* Master Asset Catalog Grid */}
        <AssetCatalog
          assets={SCRIBBLES_ASSETS}
          onSelectAsset={(item) => setSelectedAsset(item)}
          onEditAsset={(item) => navigateToSvgStudio(item)}
          currentColor={currentColor}
          onColorChange={(c) => setCurrentColor(c)}
        />
      </main>

      {/* Asset Detail Inspection Modal */}
      <AssetDetailModal
        asset={selectedAsset}
        onClose={() => setSelectedAsset(null)}
        currentColor={currentColor}
        onOpenInEditor={(item) => navigateToSvgStudio(item)}
      />

      {/* Vector Design Guide & System Modal */}
      <DesignGuideModal
        isOpen={isGuideOpen}
        onClose={() => setIsGuideOpen(false)}
      />

      {/* Footer */}
      {renderFooter()}
    </div>
  );
}

export default App;
