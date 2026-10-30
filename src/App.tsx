import { useState, useEffect } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Hero } from './components/Hero';
import { HeroFeatures } from './components/HeroFeatures';
import { HeadlineStudio } from './components/HeadlineStudio';
import { AssetCatalog } from './components/AssetCatalog';
import { AssetDetailModal } from './components/AssetDetailModal';
import { DesignGuideModal } from './components/DesignGuideModal';
import { SvgEditor } from './components/SvgEditor';
import { SCRIBBLES_ASSETS, ScribbleAsset, getScribbleById } from './lib/scribbles-data';

export function App() {
  const [currentColor, setCurrentColor] = useState('original');
  const [selectedAsset, setSelectedAsset] = useState<ScribbleAsset | null>(null);
  const [isGuideOpen, setIsGuideOpen] = useState(false);

  // Helper to determine if current URL is the dedicated editor page
  const checkIsEditorPath = () => {
    const path = window.location.pathname;
    const hash = window.location.hash;
    const search = new URLSearchParams(window.location.search);
    return (
      path === '/editor' ||
      path.startsWith('/editor/') ||
      hash === '#editor' ||
      search.get('page') === 'editor'
    );
  };

  // Dedicated Editor Page Route state
  const [isEditorPage, setIsEditorPage] = useState<boolean>(() => checkIsEditorPath());
  const [editorAsset, setEditorAsset] = useState<ScribbleAsset | null>(() => {
    const search = new URLSearchParams(window.location.search);
    const assetId = search.get('asset');
    return assetId ? getScribbleById(assetId) || null : null;
  });

  // Handle browser back / forward navigation
  useEffect(() => {
    const handlePopState = () => {
      const onEditor = checkIsEditorPath();
      setIsEditorPage(onEditor);
      const search = new URLSearchParams(window.location.search);
      const assetId = search.get('asset');
      if (assetId) {
        setEditorAsset(getScribbleById(assetId) || null);
      } else if (!onEditor) {
        setEditorAsset(null);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Navigation handlers
  const navigateToEditor = (asset?: ScribbleAsset) => {
    setEditorAsset(asset || null);
    setIsEditorPage(true);
    const newUrl = asset ? `/editor?asset=${encodeURIComponent(asset.id)}` : '/editor';
    if (window.location.pathname !== '/editor' || window.location.search !== (asset ? `?asset=${asset.id}` : '')) {
      window.history.pushState(null, '', newUrl);
    }
  };

  const navigateToHome = () => {
    setIsEditorPage(false);
    setEditorAsset(null);
    if (window.location.pathname !== '/') {
      window.history.pushState(null, '', '/');
    }
  };

  const scrollToCatalog = () => {
    const el = document.getElementById('asset-catalog');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToStudio = () => {
    const el = document.getElementById('headline-studio');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadAll = () => {
    // Generate a single consolidated JSON bundle containing all 140 SVGs
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

  // Dedicated Editor Page View
  if (isEditorPage) {
    return (
      <div className="w-screen h-screen overflow-hidden bg-white">
        <SpeedInsights />
        <SvgEditor
          isOpen={true}
          mode="page"
          onClose={navigateToHome}
          onNavigateHome={navigateToHome}
          initialAsset={editorAsset}
        />
      </div>
    );
  }

  // Home / Library View
  return (
    <div className="min-h-screen flex flex-col bg-scribble-paper selection:bg-scribble-yellow selection:text-black">
      <SpeedInsights />
      <main className="flex-1">
        {/* Full-Screen Hero & Navbar Screen */}
        <Hero
          onScrollToCatalog={scrollToCatalog}
          onScrollToStudio={scrollToStudio}
          onOpenGuide={() => setIsGuideOpen(true)}
          onOpenEditor={() => navigateToEditor()}
          onDownloadAll={handleDownloadAll}
          assetCount={SCRIBBLES_ASSETS.length}
        />

        {/* Feature Cards below Hero Section */}
        <HeroFeatures />

        {/* Headline & CTA Studio */}
        <HeadlineStudio />

        {/* Master Asset Catalog Grid */}
        <AssetCatalog
          assets={SCRIBBLES_ASSETS}
          onSelectAsset={(item) => setSelectedAsset(item)}
          onEditAsset={(item) => navigateToEditor(item)}
          currentColor={currentColor}
          onColorChange={(c) => setCurrentColor(c)}
        />
      </main>

      {/* Asset Detail Inspection Modal */}
      <AssetDetailModal
        asset={selectedAsset}
        onClose={() => setSelectedAsset(null)}
        currentColor={currentColor}
        onOpenInEditor={(item) => navigateToEditor(item)}
      />

      {/* Vector Design Guide & System Modal */}
      <DesignGuideModal
        isOpen={isGuideOpen}
        onClose={() => setIsGuideOpen(false)}
      />

      {/* Footer */}
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
              onClick={() => navigateToEditor()}
              className="hover:text-black font-bold text-scribble-orange underline underline-offset-2"
            >
              SVG Editor
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
              onClick={scrollToStudio}
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
    </div>
  );
}

export default App;
