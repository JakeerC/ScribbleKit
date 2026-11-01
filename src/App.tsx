import { useState, useEffect } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';
import {
  SquareLibrary,
  Sparkles,
  Pencil,
  ArrowRight,
  Terminal,
  Copy,
  Check,
} from 'lucide-react';
import { Hero } from './components/Hero';
import { HeroFeatures } from './components/HeroFeatures';
import { HeadlineStudio } from './components/HeadlineStudio';
import { AssetCatalog } from './components/AssetCatalog';
import { AssetDetailModal } from './components/AssetDetailModal';
import { DesignGuideModal } from './components/DesignGuideModal';
import { SvgEditor } from './components/SvgEditor';
import { Navbar, NavPage } from './components/Navbar';
import { Scribble } from './components/Scribble';
import {
  SCRIBBLES_ASSETS,
  ScribbleAsset,
  getScribbleById,
  CATEGORIES,
} from './lib/scribbles-data';

export function App() {
  const [currentColor, setCurrentColor] = useState('original');
  const [selectedAsset, setSelectedAsset] = useState<ScribbleAsset | null>(null);
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [copiedInstall, setCopiedInstall] = useState(false);

  // Helper to determine route from current window URL
  const getRouteFromLocation = (): NavPage => {
    if (typeof window === 'undefined') return 'home';

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

    if (
      path === '/library' ||
      path.startsWith('/library/') ||
      hash === '#library' ||
      search.get('page') === 'library'
    ) {
      return 'library';
    }

    return 'home';
  };

  // Current page state
  const [currentPage, setCurrentPage] = useState<NavPage>(() => getRouteFromLocation());
  const [editorAsset, setEditorAsset] = useState<ScribbleAsset | null>(() => {
    if (typeof window === 'undefined') return null;
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
  const navigateToHome = () => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setEditorAsset(null);
      if (window.location.pathname !== '/') {
        window.history.pushState(null, '', '/');
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToLibrary = (category?: string) => {
    const newUrl = category ? `/library?category=${encodeURIComponent(category)}` : '/library';
    setCurrentPage('library');
    setEditorAsset(null);
    if (window.location.pathname !== '/library' || (category && window.location.search !== `?category=${category}`)) {
      window.history.pushState(null, '', newUrl);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

  // Curated Featured Highlights for Home Landing Page
  const featuredIds = [
    'funky-badge-starburst-new',
    'funky-cactus-spotted',
    'funky-star-diamond-sparkle',
    'funky-pink-speckled-pebble',
    'funky-bolt-comic-3d',
    'underline-wave-double',
  ];
  const featuredScribbles = featuredIds
    .map((id) => getScribbleById(id))
    .filter((item): item is ScribbleAsset => Boolean(item));

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

        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-black/70">
          <button
            onClick={navigateToHome}
            className={`hover:text-black underline underline-offset-2 ${
              currentPage === 'home' ? 'text-black font-bold' : ''
            }`}
          >
            Home
          </button>
          <span>•</span>
          <button
            onClick={() => navigateToLibrary()}
            className={`hover:text-black underline underline-offset-2 ${
              currentPage === 'library' ? 'text-scribble-orange font-bold' : ''
            }`}
          >
            Library ({SCRIBBLES_ASSETS.length})
          </button>
          <span>•</span>
          <button
            onClick={() => navigateToSvgStudio()}
            className={`hover:text-black underline underline-offset-2 ${
              currentPage === 'svg-studio' ? 'text-scribble-orange font-bold' : ''
            }`}
          >
            SVG Studio
          </button>
          <span>•</span>
          <button
            onClick={navigateToHeadlineStudio}
            className={`hover:text-black underline underline-offset-2 ${
              currentPage === 'headline-studio' ? 'text-scribble-orange font-bold' : ''
            }`}
          >
            Headline Studio
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

  // 1. Dedicated SVG Studio View
  if (currentPage === 'svg-studio') {
    return (
      <div className="w-screen h-screen overflow-hidden bg-white selection:bg-scribble-yellow selection:text-black">
        <SpeedInsights />
        <Analytics />
        <SvgEditor
          isOpen={true}
          mode="page"
          onClose={() => navigateToLibrary()}
          onNavigateHome={navigateToHome}
          initialAsset={editorAsset}
        />
        <DesignGuideModal
          isOpen={isGuideOpen}
          onClose={() => setIsGuideOpen(false)}
        />
      </div>
    );
  }

  // 2. Dedicated Headline Studio Page View
  if (currentPage === 'headline-studio') {
    return (
      <div className="min-h-screen flex flex-col bg-scribble-paper selection:bg-scribble-yellow selection:text-black">
        <SpeedInsights />
        <Analytics />
        <Navbar
          currentPage="headline-studio"
          onNavigateHome={navigateToHome}
          onNavigateToLibrary={() => navigateToLibrary()}
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

  // 3. Dedicated Library Page View (/library)
  if (currentPage === 'library') {
    return (
      <div className="min-h-screen flex flex-col bg-scribble-paper selection:bg-scribble-yellow selection:text-black">
        <SpeedInsights />
        <Analytics />
        <Navbar
          currentPage="library"
          onNavigateHome={navigateToHome}
          onNavigateToLibrary={() => navigateToLibrary()}
          onNavigateToSvgStudio={() => navigateToSvgStudio()}
          onNavigateToHeadlineStudio={navigateToHeadlineStudio}
          onOpenGuide={() => setIsGuideOpen(true)}
          onDownloadAll={handleDownloadAll}
          assetCount={SCRIBBLES_ASSETS.length}
        />

        <main className="flex-1">
          {/* Library Hero Banner */}
          <section className="pt-8 pb-2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#FAF4EC] via-white to-[#FDEFE6] border border-black/10 shadow-sm relative overflow-hidden">
              <div className="absolute -top-10 -right-10 opacity-20 pointer-events-none select-none">
                <Scribble name="funky-atomic-orbit-star" size={240} />
              </div>

              <div className="relative z-10 max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-scribble-orange/10 text-scribble-orange text-xs font-bold uppercase tracking-wider mb-3.5 border border-scribble-orange/20 shadow-2xs">
                  <SquareLibrary className="w-3.5 h-3.5" />
                  <span>Vector Asset Library</span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-scribble-dark font-display tracking-tight mb-3">
                  155+ Hand-Drawn SVG Scribbles
                </h1>

                <p className="text-sm sm:text-base text-black/70 leading-relaxed font-medium mb-6">
                  Browse by category, search by tag, test animation presets, adjust custom palette colors, and copy clean SVG code or export straight to the SVG Studio.
                </p>

                {/* Quick Info Badges */}
                <div className="flex flex-wrap items-center gap-2.5 text-xs font-semibold">
                  <span className="px-3 py-1.5 rounded-xl bg-white border border-black/10 shadow-2xs text-black/80 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-scribble-mint" />
                    {SCRIBBLES_ASSETS.length} Total Assets
                  </span>
                  <span className="px-3 py-1.5 rounded-xl bg-white border border-black/10 shadow-2xs text-black/80">
                    {CATEGORIES.length - 1} Categories
                  </span>
                  <span className="px-3 py-1.5 rounded-xl bg-white border border-black/10 shadow-2xs text-black/80">
                    100% Free & MIT Licensed
                  </span>
                  <button
                    onClick={() => navigateToSvgStudio()}
                    className="px-3.5 py-1.5 rounded-xl bg-black text-white hover:bg-scribble-orange transition-colors flex items-center gap-1.5 sm:ml-auto shadow-sm"
                  >
                    <Pencil className="w-3.5 h-3.5 text-scribble-yellow" />
                    <span>Create in SVG Studio</span>
                  </button>
                </div>
              </div>
            </div>
          </section>

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

  // 4. Dedicated Home Landing Page View (/)
  return (
    <div className="min-h-screen flex flex-col bg-scribble-paper selection:bg-scribble-yellow selection:text-black">
      <SpeedInsights />
      <Analytics />
      <main className="flex-1">
        {/* Full-Screen Hero Screen */}
        <Hero
          onNavigateHome={navigateToHome}
          onNavigateToLibrary={() => navigateToLibrary()}
          onNavigateToSvgStudio={() => navigateToSvgStudio()}
          onNavigateToHeadlineStudio={navigateToHeadlineStudio}
          onOpenGuide={() => setIsGuideOpen(true)}
          onDownloadAll={handleDownloadAll}
          assetCount={SCRIBBLES_ASSETS.length}
        />

        {/* Feature Cards below Hero Section */}
        <HeroFeatures />

        {/* Curated Featured Scribbles Showcase */}
        <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-black/10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-scribble-orange/10 text-scribble-orange text-xs font-bold uppercase tracking-wider mb-2.5 border border-scribble-orange/20">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Featured Vectors</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-scribble-dark font-display tracking-tight">
                Top Scribbles & Hand-Drawn Assets
              </h2>
              <p className="text-sm sm:text-base text-black/65 font-medium mt-1">
                Hand-picked animated vectors ready to drop into your web headlines, cards, and CTA buttons.
              </p>
            </div>

            <button
              onClick={() => navigateToLibrary()}
              className="px-5 py-2.5 rounded-2xl bg-black text-white hover:bg-scribble-orange font-bold text-xs sm:text-sm flex items-center gap-2 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all self-start md:self-auto shrink-0"
            >
              <span>Explore All {SCRIBBLES_ASSETS.length} in Library</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Grid of Featured Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
            {featuredScribbles.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedAsset(item)}
                className="group relative p-4 rounded-2xl bg-white border border-black/10 hover:border-black/30 hover:shadow-md transition-all cursor-pointer flex flex-col items-center justify-between text-center min-h-[170px]"
              >
                <div className="flex-1 flex items-center justify-center w-full py-2">
                  <Scribble name={item.id} size={56} animate={true} />
                </div>
                <div className="w-full pt-2 border-t border-black/5">
                  <h4 className="text-xs font-bold text-black truncate group-hover:text-scribble-orange transition-colors">
                    {item.name}
                  </h4>
                  <span className="text-[10px] text-black/40 font-mono block truncate">
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Category Quick-Launch Strip */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/10 shadow-sm">
            <h3 className="text-xs font-bold uppercase tracking-wider text-black/50 mb-4 font-mono">
              Explore by Category:
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {CATEGORIES.filter((c) => c.id !== 'all').map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => navigateToLibrary(cat.id)}
                  className="px-3.5 py-2 rounded-xl text-xs font-bold bg-[#FAF6F0] hover:bg-black hover:text-white border border-black/10 transition-all flex items-center gap-2 group"
                >
                  <span>{cat.name}</span>
                  <span className="px-1.5 py-0.5 rounded-full text-[10px] font-mono bg-black/5 group-hover:bg-white/20 text-black/60 group-hover:text-white">
                    {cat.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Developer Quick-Start Section */}
        <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#141416] text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 translate-x-12 -translate-y-12 opacity-15 pointer-events-none select-none">
              <Scribble name="funky-badge-starburst-new" size={320} color="#EA552B" />
            </div>

            <div className="max-w-2xl relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-scribble-yellow text-xs font-mono mb-4 border border-white/15">
                <Terminal className="w-3.5 h-3.5" />
                <span>Quick Install</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black font-display tracking-tight mb-4">
                Ship in 60 Seconds
              </h2>

              <p className="text-white/70 text-sm sm:text-base mb-6 leading-relaxed font-sans">
                Install the React component package or copy raw SVGs directly into Figma, Illustrator, or HTML.
              </p>

              {/* Install Code Pill */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-black/60 border border-white/15 font-mono text-xs sm:text-sm mb-6">
                <span className="text-scribble-mint">$ npm install scribblekit</span>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText('npm install scribblekit');
                    setCopiedInstall(true);
                    setTimeout(() => setCopiedInstall(false), 2000);
                  }}
                  className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-sans font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  {copiedInstall ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedInstall ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => navigateToLibrary()}
                  className="px-6 py-3 rounded-2xl bg-scribble-orange hover:bg-white hover:text-black text-white font-bold text-sm flex items-center gap-2 transition-all shadow-md cursor-pointer"
                >
                  <SquareLibrary className="w-4 h-4" />
                  <span>Open Full Library ({SCRIBBLES_ASSETS.length})</span>
                </button>
                <button
                  onClick={navigateToHeadlineStudio}
                  className="px-6 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm flex items-center gap-2 transition-all border border-white/15 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-scribble-yellow" />
                  <span>Try Headline Studio</span>
                </button>
              </div>
            </div>
          </div>
        </section>
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
