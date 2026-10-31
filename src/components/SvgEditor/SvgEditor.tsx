// src/components/SvgEditor/SvgEditor.tsx
// Master SVG Editor Studio: Orchestrating Canvas, Toolbar, Inspector, Code View, and Modals

import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  X,
  Maximize2,
  Minimize2,
  Download,
  Code,
  Layout,
  FileUp,
  ArrowLeft,
  PanelLeftClose,
  PanelLeftOpen,
} from 'lucide-react';
import {
  SvgElementData,
  CanvasDimensions,
  EditorTool,
  CanvasBackground,
  EditorViewMode,
  HistorySnapshot,
  Point,
} from './types';
import { Canvas } from './Canvas';
import { Toolbar } from './Toolbar';
import { PropertyInspector } from './PropertyInspector';
import { CodeEditor } from './CodeEditor';
import { LeftAssetsDrawer } from './LeftAssetsDrawer';
import { AssetStampDrawer } from './AssetStampDrawer';
import { ExportModal } from './ExportModal';
import { parseSvgStringToElements, generateId, serializeElementsToSvg } from './svg-utils';
import { ScribbleAsset, getScribbleById, SCRIBBLES_ASSETS } from '../../lib/scribbles-data';

interface SvgEditorProps {
  isOpen?: boolean;
  onClose?: () => void;
  initialAsset?: ScribbleAsset | null;
  initialSvgCode?: string;
  mode?: 'page' | 'modal';
  onNavigateHome?: () => void;
}

export const SvgEditor: React.FC<SvgEditorProps> = ({
  isOpen = true,
  onClose,
  initialAsset,
  initialSvgCode,
  mode = 'modal',
  onNavigateHome,
}) => {
  // Master Editor State
  const [title, setTitle] = useState('New Scribble');
  const [dimensions, setDimensions] = useState<CanvasDimensions>({
    width: 600,
    height: 400,
    viewBox: '0 0 600 400',
  });
  const [elements, setElements] = useState<SvgElementData[]>([]);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const selectedId = selectedIds.length > 0 ? selectedIds[selectedIds.length - 1] : null;
  const [activeTool, setActiveTool] = useState<EditorTool>('select');
  const [background, setBackground] = useState<CanvasBackground>('paper');
  const [viewMode, setViewMode] = useState<EditorViewMode>('canvas');
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState<Point>({ x: 0, y: 0 });
  const [penColor, setPenColor] = useState('#EA552B');
  const [penStrokeWidth, setPenStrokeWidth] = useState(4.5);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Togglable Left Assets Drawer state
  const [isAssetsDrawerOpen, setIsAssetsDrawerOpen] = useState(true);

  // Selection handlers
  const handleSelectElement = useCallback((id: string | null, isMultiToggle = false) => {
    if (!id) {
      setSelectedIds([]);
      return;
    }
    if (isMultiToggle) {
      setSelectedIds((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setSelectedIds([id]);
    }
  }, []);

  const handleSelectMultiple = useCallback((ids: string[], isAdditive = false) => {
    if (isAdditive) {
      setSelectedIds((prev) => Array.from(new Set([...prev, ...ids])));
    } else {
      setSelectedIds(ids);
    }
  }, []);

  // Modals state
  const [isAssetStampOpen, setIsAssetStampOpen] = useState(false);
  const [isExportOpen, setIsExportOpen] = useState(false);

  // Undo / Redo History Stack with refs for instant, race-free state tracking
  const [history, setHistory] = useState<HistorySnapshot[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const historyRef = useRef<HistorySnapshot[]>([]);
  const historyIndexRef = useRef<number>(-1);
  historyRef.current = history;
  historyIndexRef.current = historyIndex;

  // Commit state snapshot to history (only on interaction completion)
  const commitHistory = useCallback(
    (currentElements: SvgElementData[], currentDims: CanvasDimensions = dimensions) => {
      const idx = historyIndexRef.current;
      const snapshot: HistorySnapshot = {
        elements: JSON.parse(JSON.stringify(currentElements)),
        dimensions: { ...currentDims },
      };
      const sliced = historyRef.current.slice(0, idx + 1);
      const nextHistory = [...sliced, snapshot];
      const nextIdx = nextHistory.length - 1;
      historyRef.current = nextHistory;
      historyIndexRef.current = nextIdx;
      setHistory(nextHistory);
      setHistoryIndex(nextIdx);
    },
    [dimensions]
  );

  // Load initial asset or SVG when opened or changed
  useEffect(() => {
    if (!isOpen) return;

    if (initialAsset) {
      setTitle(initialAsset.name || 'Edited Scribble');
      let svgToParse = '';
      if (initialAsset.rawSvg) {
        svgToParse = `<svg viewBox="${initialAsset.viewBox}">${initialAsset.rawSvg}</svg>`;
      } else if (initialAsset.path) {
        svgToParse = `<svg viewBox="${initialAsset.viewBox}"><path ${initialAsset.path} /></svg>`;
      }

      const { elements: parsed, dimensions: dims } = parseSvgStringToElements(
        svgToParse,
        initialAsset.defaultColor || '#EA552B'
      );
      setElements(parsed);
      setDimensions(dims);
      setSelectedIds(parsed[0]?.id ? [parsed[0].id] : []);
      const initialSnap: HistorySnapshot = { elements: parsed, dimensions: dims };
      setHistory([initialSnap]);
      setHistoryIndex(0);
      historyRef.current = [initialSnap];
      historyIndexRef.current = 0;
    } else if (initialSvgCode) {
      setTitle('Imported Vector');
      const { elements: parsed, dimensions: dims } = parseSvgStringToElements(initialSvgCode);
      setElements(parsed);
      setDimensions(dims);
      setSelectedIds(parsed[0]?.id ? [parsed[0].id] : []);
      const initialSnap: HistorySnapshot = { elements: parsed, dimensions: dims };
      setHistory([initialSnap]);
      setHistoryIndex(0);
      historyRef.current = [initialSnap];
      historyIndexRef.current = 0;
    } else if (elements.length === 0) {
      // Default initial starter canvas with a welcoming funky scribble
      const defaultAsset = getScribbleById('funky-coral-polka-blob') || getScribbleById('circle-double-loop');
      if (defaultAsset) {
        setTitle(defaultAsset.name);
        const svgStr = defaultAsset.rawSvg
          ? `<svg viewBox="${defaultAsset.viewBox}">${defaultAsset.rawSvg}</svg>`
          : `<svg viewBox="${defaultAsset.viewBox}"><path ${defaultAsset.path} /></svg>`;
        const { elements: parsed, dimensions: dims } = parseSvgStringToElements(svgStr);
        setElements(parsed);
        setDimensions(dims);
        setSelectedIds(parsed[0]?.id ? [parsed[0].id] : []);
        const initialSnap: HistorySnapshot = { elements: parsed, dimensions: dims };
        setHistory([initialSnap]);
        setHistoryIndex(0);
        historyRef.current = [initialSnap];
        historyIndexRef.current = 0;
      }
    }
  }, [isOpen, initialAsset, initialSvgCode]);

  // Undo / Redo handlers
  const handleUndo = useCallback(() => {
    const idx = historyIndexRef.current;
    if (idx > 0) {
      const nextIdx = idx - 1;
      const target = historyRef.current[nextIdx];
      if (target) {
        setElements(JSON.parse(JSON.stringify(target.elements)));
        setDimensions({ ...target.dimensions });
        historyIndexRef.current = nextIdx;
        setHistoryIndex(nextIdx);
      }
    }
  }, []);

  const handleRedo = useCallback(() => {
    const idx = historyIndexRef.current;
    if (idx < historyRef.current.length - 1) {
      const nextIdx = idx + 1;
      const target = historyRef.current[nextIdx];
      if (target) {
        setElements(JSON.parse(JSON.stringify(target.elements)));
        setDimensions({ ...target.dimensions });
        historyIndexRef.current = nextIdx;
        setHistoryIndex(nextIdx);
      }
    }
  }, []);

  // Add Element
  const handleAddElement = (newEl: SvgElementData) => {
    const updated = [...elements, newEl];
    setElements(updated);
    setSelectedIds([newEl.id]);
    commitHistory(updated);
  };

  // Update Element (supports batch styling updates for multi-selection)
  const handleUpdateElement = (
    id: string,
    updates: Partial<SvgElementData>,
    pushHistory = true
  ) => {
    setElements((prev) => {
      const isBatchStyling =
        'stroke' in updates ||
        'strokeWidth' in updates ||
        'strokeOpacity' in updates ||
        'strokeLinecap' in updates ||
        'strokeDasharray' in updates ||
        'fill' in updates ||
        'fillOpacity' in updates ||
        'opacity' in updates;

      const targetIds =
        isBatchStyling && selectedIds.length > 1 && selectedIds.includes(id)
          ? selectedIds
          : [id];

      const updated = prev.map((el) =>
        targetIds.includes(el.id) ? { ...el, ...updates } : el
      );
      if (pushHistory) {
        commitHistory(updated);
      }
      return updated;
    });
  };

  // Update Multiple Elements in a single atomic batch
  const handleUpdateMultipleElements = useCallback(
    (updatesList: { id: string; updates: Partial<SvgElementData> }[], pushHistory = false) => {
      setElements((prev) => {
        const updateMap = new Map(updatesList.map((u) => [u.id, u.updates]));
        const updated = prev.map((el) => {
          const u = updateMap.get(el.id);
          return u ? { ...el, ...u } : el;
        });
        if (pushHistory) {
          commitHistory(updated);
        }
        return updated;
      });
    },
    [commitHistory]
  );

  // Delete Element (supports single or multi-delete)
  const handleDeleteElement = (id?: string) => {
    const idsToDelete = id ? [id] : selectedIds;
    if (idsToDelete.length === 0) return;
    const updated = elements.filter((el) => !idsToDelete.includes(el.id));
    setElements(updated);
    commitHistory(updated);
    setSelectedIds([]);
  };

  // Duplicate Element (supports single or multi-duplicate)
  const handleDuplicateElement = (id?: string) => {
    const idsToDuplicate = id ? [id] : selectedIds;
    if (idsToDuplicate.length === 0) return;
    const targets = elements.filter((el) => idsToDuplicate.includes(el.id));
    if (targets.length === 0) return;

    const duplicatedList: SvgElementData[] = targets.map((target) => ({
      ...JSON.parse(JSON.stringify(target)),
      id: generateId(`${target.type}-copy`),
      name: `${target.name} (Copy)`,
      x: target.x + 20,
      y: target.y + 20,
    }));

    const updated = [...elements, ...duplicatedList];
    setElements(updated);
    setSelectedIds(duplicatedList.map((d) => d.id));
    commitHistory(updated);
  };

  // In-memory Clipboard for copy/paste
  const clipboardRef = useRef<SvgElementData[]>([]);
  const [canPaste, setCanPaste] = useState(false);

  // Copy selected elements (supports multi-element copy & clipboard serialization)
  const handleCopySelected = useCallback(() => {
    const targets = elements.filter((el) => selectedIds.includes(el.id));
    if (targets.length === 0) return;
    clipboardRef.current = JSON.parse(JSON.stringify(targets));
    setCanPaste(true);

    try {
      const svgText = serializeElementsToSvg(targets, dimensions);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(svgText).catch(() => {});
      }
    } catch {
      // silent fallback
    }
  }, [elements, selectedIds, dimensions]);

  // Paste elements from clipboard
  const handlePasteClipboard = useCallback(() => {
    if (clipboardRef.current.length === 0) return;
    const pastedElements: SvgElementData[] = clipboardRef.current.map((item) => ({
      ...JSON.parse(JSON.stringify(item)),
      id: generateId(`${item.type}-paste`),
      name: `${item.name} (Copy)`,
      x: item.x + 24,
      y: item.y + 24,
    }));

    const updated = [...elements, ...pastedElements];
    setElements(updated);
    const newIds = pastedElements.map((p) => p.id);
    setSelectedIds(newIds);
    commitHistory(updated);

    // Increment offset for consecutive pastes
    clipboardRef.current = pastedElements;
  }, [elements, commitHistory]);

  // Reorder Elements
  const handleReorderElements = (newElements: SvgElementData[]) => {
    setElements(newElements);
    commitHistory(newElements);
  };

  // Clear Canvas
  const handleClearCanvas = () => {
    if (confirm('Are you sure you want to clear the canvas?')) {
      setElements([]);
      setSelectedIds([]);
      commitHistory([]);
    }
  };

  // Stamp Asset
  const handleStampAsset = (asset: ScribbleAsset, mode: 'layer' | 'replace') => {
    let svgMarkup = '';
    if (asset.rawSvg) {
      svgMarkup = `<svg viewBox="${asset.viewBox}">${asset.rawSvg}</svg>`;
    } else if (asset.path) {
      svgMarkup = `<svg viewBox="${asset.viewBox}"><path ${asset.path} /></svg>`;
    }

    const { elements: parsed, dimensions: assetDims } = parseSvgStringToElements(
      svgMarkup,
      asset.defaultColor || penColor
    );

    if (mode === 'replace') {
      setTitle(asset.name);
      setElements(parsed);
      setDimensions(assetDims);
      setSelectedIds(parsed[0]?.id ? [parsed[0].id] : []);
      commitHistory(parsed, assetDims);
    } else {
      setElements((prev) => {
        const updated = [...prev, ...parsed];
        commitHistory(updated);
        return updated;
      });
      setSelectedIds(parsed.map((p) => p.id));
    }
  };

  // Upload SVG File
  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      if (content) {
        const { elements: parsed, dimensions: dims } = parseSvgStringToElements(content);
        if (parsed.length > 0) {
          setTitle(file.name.replace(/\.svg$/i, ''));
          setElements(parsed);
          setDimensions(dims);
          setSelectedIds(parsed[0]?.id ? [parsed[0].id] : []);
          commitHistory(parsed, dims);
        } else {
          alert('Could not find valid SVG graphic paths in this file.');
        }
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  // Keyboard Shortcuts Listener
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Do not intercept if user is typing in input or textarea
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') return;

      const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
      const cmdOrCtrl = isMac ? e.metaKey : e.ctrlKey;

      if (cmdOrCtrl && e.key.toLowerCase() === 'z') {
        e.preventDefault();
        if (e.shiftKey) {
          handleRedo();
        } else {
          handleUndo();
        }
      } else if (cmdOrCtrl && e.key.toLowerCase() === 'y') {
        e.preventDefault();
        handleRedo();
      } else if (cmdOrCtrl && e.key.toLowerCase() === 'a') {
        e.preventDefault();
        setSelectedIds(elements.map((el) => el.id));
      } else if (cmdOrCtrl && e.key.toLowerCase() === 'c') {
        if (selectedIds.length > 0) {
          e.preventDefault();
          handleCopySelected();
        }
      } else if (cmdOrCtrl && e.key.toLowerCase() === 'v') {
        if (canPaste || clipboardRef.current.length > 0) {
          e.preventDefault();
          handlePasteClipboard();
        }
      } else if (e.key === 'Delete' || e.key === 'Backspace') {
        if (selectedIds.length > 0) {
          e.preventDefault();
          handleDeleteElement();
        }
      } else if (cmdOrCtrl && e.key.toLowerCase() === 'd') {
        if (selectedIds.length > 0) {
          e.preventDefault();
          handleDuplicateElement();
        }
      } else if (cmdOrCtrl && e.key.toLowerCase() === 'b') {
        e.preventDefault();
        setIsAssetsDrawerOpen((prev) => !prev);
      } else if (e.key === 'Escape') {
        setSelectedIds([]);
        setActiveTool('select');
      } else if (e.key.toLowerCase() === 'v') {
        setActiveTool('select');
      } else if (e.key.toLowerCase() === 'p') {
        setActiveTool('pen');
      } else if (e.key.toLowerCase() === 't') {
        setActiveTool('text');
      } else if (e.key.toLowerCase() === 'h') {
        setActiveTool('pan');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [
    isOpen,
    elements,
    selectedIds,
    canPaste,
    handleCopySelected,
    handlePasteClipboard,
    handleDuplicateElement,
    handleDeleteElement,
    handleUndo,
    handleRedo,
  ]);

  if (!isOpen) return null;

  const selectedElement = elements.find((el) => el.id === selectedId) || null;

  const editorContent = (
    <div
      className={`relative w-full bg-white flex flex-col overflow-hidden transition-all ${
        mode === 'page'
          ? 'w-full h-full rounded-none'
          : isFullscreen
          ? 'h-full rounded-none'
          : 'h-[95vh] max-w-[96vw] rounded-3xl border border-black/20 shadow-2xl'
      }`}
    >
      {/* ========================================================= */}
      {/* Top Header Bar */}
      {/* ========================================================= */}
      <header className="px-4 sm:px-5 py-2.5 border-b border-black/10 flex items-center justify-between bg-scribble-paper shrink-0 gap-3 flex-wrap">
        {/* Left Section: Back button (if page) + Title & Status */}
        <div className="flex items-center gap-2.5">
          {mode === 'page' && (
            <button
              onClick={onNavigateHome || onClose}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-black/15 bg-white hover:bg-black/5 text-xs font-bold text-scribble-dark transition-all shadow-sm hover:-translate-x-0.5"
              title="Return to ScribbleKit Library"
            >
              <ArrowLeft className="w-4 h-4 text-scribble-orange" />
              <span className="hidden sm:inline">Back to Library</span>
            </button>
          )}

          {/* Toggle Left Assets Drawer Button */}
          <button
            onClick={() => setIsAssetsDrawerOpen(!isAssetsDrawerOpen)}
            className={`px-2.5 py-1.5 rounded-xl border text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm ${
              isAssetsDrawerOpen
                ? 'bg-black text-white border-black'
                : 'bg-white hover:bg-black/5 text-black/70 border-black/15'
            }`}
            title="Toggle Left Assets Drawer (Ctrl+B)"
          >
            {isAssetsDrawerOpen ? (
              <PanelLeftClose className="w-3.5 h-3.5" />
            ) : (
              <PanelLeftOpen className="w-3.5 h-3.5 text-scribble-orange" />
            )}
            <span className="hidden md:inline">Assets</span>
            <span
              className={`text-[10px] font-extrabold px-1.5 py-0.2 rounded-full ${
                isAssetsDrawerOpen ? 'bg-white/20 text-white' : 'bg-black/10 text-scribble-dark'
              }`}
            >
              {SCRIBBLES_ASSETS.length}
            </span>
          </button>

          <span className="h-5 w-px bg-black/10 hidden sm:inline" />

          {/* Title and Dimension Indicator */}
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-scribble-orange animate-pulse" />
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="text-sm sm:text-base font-extrabold text-scribble-dark font-display bg-transparent border-b border-transparent hover:border-black/30 focus:border-black focus:outline-none px-1 max-w-[150px] sm:max-w-[220px] truncate"
              title="Click to rename"
            />
          </div>
          <span className="text-[10px] sm:text-[11px] font-mono text-black/50 hidden md:inline">
            ({dimensions.width}×{dimensions.height})
          </span>
        </div>

        {/* Center View Mode Switcher */}
        <div className="hidden md:flex items-center gap-1 bg-black/5 p-1 rounded-2xl border border-black/10">
          <button
            onClick={() => setViewMode('canvas')}
            className={`px-3 py-1 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              viewMode === 'canvas' ? 'bg-white text-black shadow-sm' : 'text-black/60 hover:text-black'
            }`}
          >
            <Layout className="w-3.5 h-3.5" />
            <span>Canvas</span>
          </button>
          <button
            onClick={() => setViewMode('split')}
            className={`px-3 py-1 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              viewMode === 'split' ? 'bg-white text-black shadow-sm' : 'text-black/60 hover:text-black'
            }`}
          >
            <Code className="w-3.5 h-3.5 text-scribble-orange" />
            <span>Split View</span>
          </button>
          <button
            onClick={() => setViewMode('code')}
            className={`px-3 py-1 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              viewMode === 'code' ? 'bg-white text-black shadow-sm' : 'text-black/60 hover:text-black'
            }`}
          >
            <Code className="w-3.5 h-3.5" />
            <span>SVG Code</span>
          </button>
        </div>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-2">
          {/* Hidden File Input for Upload */}
          <input
            ref={fileInputRef}
            type="file"
            accept=".svg,image/svg+xml"
            className="hidden"
            onChange={handleFileUpload}
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            className="p-2 rounded-xl border border-black/15 hover:bg-black/5 text-black/70 hover:text-black text-xs font-bold transition-colors flex items-center gap-1.5"
            title="Upload External SVG File"
          >
            <FileUp className="w-4 h-4" />
            <span className="hidden lg:inline">Import</span>
          </button>

          {/* Export Menu Button */}
          <button
            onClick={() => setIsExportOpen(true)}
            className="px-3.5 py-1.5 rounded-xl bg-black hover:bg-scribble-orange text-white text-xs font-bold transition-all shadow flex items-center gap-1.5 hover:-translate-y-0.5"
          >
            <Download className="w-4 h-4" />
            <span>Export</span>
          </button>

          <span className="h-5 w-px bg-black/10 mx-1" />

          {/* Fullscreen Toggle */}
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-2 rounded-xl hover:bg-black/10 text-black/60 hover:text-black transition-colors"
            title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>

          {/* Close Button */}
          {mode === 'modal' ? (
            <button
              onClick={onClose}
              aria-label="Close SVG Studio"
              className="p-2 rounded-full hover:bg-black/10 text-black/70 hover:text-black transition-colors"
              title="Close SVG Studio (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          ) : (
            <button
              onClick={onNavigateHome || onClose}
              aria-label="Exit SVG Studio"
              className="p-2 rounded-full hover:bg-black/10 text-black/70 hover:text-black transition-colors sm:hidden"
              title="Back to Library"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </header>

      {/* ========================================================= */}
      {/* Top Interactive Toolbar */}
      {/* ========================================================= */}
      <Toolbar
        activeTool={activeTool}
        onSelectTool={setActiveTool}
        penColor={penColor}
        onPenColorChange={setPenColor}
        penStrokeWidth={penStrokeWidth}
        onPenStrokeWidthChange={setPenStrokeWidth}
        canUndo={historyIndex > 0}
        canRedo={historyIndex < history.length - 1}
        onUndo={handleUndo}
        onRedo={handleRedo}
        onClearCanvas={handleClearCanvas}
        onOpenAssetStamp={() => setIsAssetsDrawerOpen(true)}
        isAssetsDrawerOpen={isAssetsDrawerOpen}
        onToggleAssetsDrawer={() => setIsAssetsDrawerOpen(!isAssetsDrawerOpen)}
        selectedCount={selectedIds.length}
        canPaste={canPaste || clipboardRef.current.length > 0}
        onCopy={handleCopySelected}
        onPaste={handlePasteClipboard}
        onDuplicate={() => handleDuplicateElement()}
        onDelete={() => handleDeleteElement()}
      />

      {/* ========================================================= */}
      {/* Main Work Area: Left Drawer + Center Canvas + Right Inspector */}
      {/* ========================================================= */}
      <div className="flex-1 flex overflow-hidden relative">
        {/* Togglable Left Assets Drawer */}
        <LeftAssetsDrawer
          isOpen={isAssetsDrawerOpen}
          onToggle={() => setIsAssetsDrawerOpen(!isAssetsDrawerOpen)}
          onStampAsset={handleStampAsset}
          activePenColor={penColor}
        />

        {/* Center Canvas & Code Area */}
        <div className="flex-1 flex overflow-hidden">
          {/* Visual Canvas */}
          {(viewMode === 'canvas' || viewMode === 'split') && (
            <div
              className={`h-full flex flex-col ${
                viewMode === 'split' ? 'w-1/2 border-r border-black/10' : 'w-full'
              }`}
            >
              <Canvas
                elements={elements}
                selectedId={selectedId}
                selectedIds={selectedIds}
                dimensions={dimensions}
                activeTool={activeTool}
                background={background}
                zoom={zoom}
                pan={pan}
                showGrid={true}
                penColor={penColor}
                penStrokeWidth={penStrokeWidth}
                onSelectElement={handleSelectElement}
                onSelectMultiple={handleSelectMultiple}
                onUpdateElement={handleUpdateElement}
                onUpdateMultipleElements={handleUpdateMultipleElements}
                onAddElement={handleAddElement}
                onCommitHistory={() => commitHistory(elements, dimensions)}
                onPanChange={setPan}
                onZoomChange={setZoom}
                onToolChange={setActiveTool}
              />
            </div>
          )}

          {/* SVG Code View */}
          {(viewMode === 'code' || viewMode === 'split') && (
            <div className={`h-full flex flex-col ${viewMode === 'split' ? 'w-1/2' : 'w-full'}`}>
              <CodeEditor
                elements={elements}
                dimensions={dimensions}
                onApplyCode={(newEls, newDims) => {
                  setElements(newEls);
                  setDimensions(newDims);
                  commitHistory(newEls, newDims);
                }}
              />
            </div>
          )}
        </div>

        {/* Right Properties & Layers Inspector */}
        <PropertyInspector
          selectedElement={selectedElement}
          selectedIds={selectedIds}
          elements={elements}
          dimensions={dimensions}
          canvasBackground={background}
          onUpdateElement={handleUpdateElement}
          onUpdateMultipleElements={handleUpdateMultipleElements}
          onDeleteElement={handleDeleteElement}
          onDuplicateElement={handleDuplicateElement}
          onSelectElement={handleSelectElement}
          onReorderElements={handleReorderElements}
          onUpdateDimensions={(newDims) => {
            setDimensions(newDims);
            commitHistory(elements, newDims);
          }}
          onUpdateBackground={setBackground}
        />
      </div>

      {/* ========================================================= */}
      {/* Asset Stamp Modal (Fallback / Drawer Stamp) */}
      {/* ========================================================= */}
      <AssetStampDrawer
        isOpen={isAssetStampOpen}
        onClose={() => setIsAssetStampOpen(false)}
        onStampAsset={handleStampAsset}
      />

      {/* ========================================================= */}
      {/* Export Suite Modal */}
      {/* ========================================================= */}
      <ExportModal
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
        elements={elements}
        dimensions={dimensions}
        title={title}
      />
    </div>
  );

  if (mode === 'page') {
    return (
      <div className="w-screen h-screen flex flex-col bg-white overflow-hidden select-none">
        {editorContent}
      </div>
    );
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md transition-all select-none ${
        isFullscreen ? 'p-0' : 'p-2 sm:p-4'
      }`}
    >
      {editorContent}
    </div>
  );
};

export default SvgEditor;
