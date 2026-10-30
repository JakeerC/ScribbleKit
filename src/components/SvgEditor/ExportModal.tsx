// src/components/SvgEditor/ExportModal.tsx
// Comprehensive Export Suite: SVG, React JSX, High-Res PNG (1x/2x/3x), and Data URI

import React, { useState } from 'react';
import {
  X,
  Download,
  Copy,
  Check,
  Code2,
  Image as ImageIcon,
  Sparkles,
  FileCode,
} from 'lucide-react';
import { SvgElementData, CanvasDimensions } from './types';
import {
  serializeElementsToSvg,
  serializeElementsToJsx,
  renderSvgToPngBlob,
} from './svg-utils';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  elements: SvgElementData[];
  dimensions: CanvasDimensions;
  title: string;
}

export const ExportModal: React.FC<ExportModalProps> = ({
  isOpen,
  onClose,
  elements,
  dimensions,
  title,
}) => {
  const [activeTab, setActiveTab] = useState<'svg' | 'jsx' | 'png' | 'datauri'>('svg');
  const [copied, setCopied] = useState(false);
  const [pngScale, setPngScale] = useState<1 | 2 | 3>(2);
  const [pngBg, setPngBg] = useState<'transparent' | 'paper' | 'white' | 'dark'>('transparent');
  const [isExportingPng, setIsExportingPng] = useState(false);
  const [includeBgInSvg, setIncludeBgInSvg] = useState(false);

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

  if (!isOpen) return null;

  const fileName = (title || 'scribble-graphic')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

  const svgCode = serializeElementsToSvg(elements, dimensions, {
    background: includeBgInSvg ? '#FDFBF7' : 'transparent',
  });

  const jsxCode = serializeElementsToJsx(
    elements,
    dimensions,
    title
      ? title.replace(/[^a-zA-Z0-9]/g, '') + 'Scribble'
      : 'CustomScribble'
  );

  const dataUri = `data:image/svg+xml;utf8,${encodeURIComponent(svgCode)}`;

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadSvg = () => {
    const blob = new Blob([svgCode], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${fileName}.svg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleDownloadPng = async () => {
    try {
      setIsExportingPng(true);
      const blob = await renderSvgToPngBlob(svgCode, pngScale, pngBg);
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${fileName}@${pngScale}x.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('PNG Export failed:', err);
      alert('Failed to generate PNG. Please ensure the SVG has valid syntax.');
    } finally {
      setIsExportingPng(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in select-none"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl border border-black/20 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-black/10 flex items-center justify-between bg-scribble-paper">
          <div>
            <h3 className="text-xl font-extrabold text-scribble-dark font-display flex items-center gap-2">
              <Download className="w-5 h-5 text-scribble-orange" />
              <span>Export Vector Asset</span>
            </h3>
            <p className="text-xs text-black/60 mt-0.5">
              Production-ready SVG, React component code, or Retina PNG.
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close export dialog"
            className="p-2 rounded-full hover:bg-black/10 text-black/70 hover:text-black transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-black/10 bg-[#FAF7F2] px-6 gap-2 pt-2">
          {[
            { id: 'svg', label: 'SVG File', icon: FileCode },
            { id: 'jsx', label: 'React JSX', icon: Code2 },
            { id: 'png', label: 'Retina PNG', icon: ImageIcon },
            { id: 'datauri', label: 'Data URI', icon: Sparkles },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold border-b-2 transition-all ${
                activeTab === tab.id
                  ? 'border-scribble-orange text-scribble-orange bg-white rounded-t-xl'
                  : 'border-transparent text-black/60 hover:text-black'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Body */}
        <div className="p-6 overflow-y-auto space-y-4">
          {activeTab === 'svg' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-xs font-semibold cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeBgInSvg}
                    onChange={(e) => setIncludeBgInSvg(e.target.checked)}
                    className="rounded border-black/20 text-scribble-orange focus:ring-0 cursor-pointer"
                  />
                  <span>Include parchment paper background rect</span>
                </label>

                <span className="text-xs font-mono text-black/50">
                  {dimensions.width} × {dimensions.height} px
                </span>
              </div>

              {/* Code preview box */}
              <div className="relative bg-[#18181B] rounded-2xl p-4 overflow-hidden">
                <pre className="text-emerald-300 font-mono text-xs leading-relaxed max-h-48 overflow-y-auto select-all">
                  {svgCode}
                </pre>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={handleDownloadSvg}
                  className="flex-1 py-3 bg-black hover:bg-scribble-orange text-white rounded-2xl text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2 hover:-translate-y-0.5"
                >
                  <Download className="w-4 h-4" />
                  <span>Download SVG ({fileName}.svg)</span>
                </button>

                <button
                  onClick={() => handleCopy(svgCode)}
                  className="px-5 py-3 bg-white hover:bg-black/5 text-scribble-dark border border-black/15 rounded-2xl text-xs font-bold transition-all flex items-center gap-2"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Copied' : 'Copy SVG'}</span>
                </button>
              </div>
            </div>
          )}

          {activeTab === 'jsx' && (
            <div className="space-y-4">
              <p className="text-xs text-black/60">
                Self-contained React component with TypeScript props and Tailwind className support.
              </p>

              <div className="relative bg-[#18181B] rounded-2xl p-4 overflow-hidden">
                <pre className="text-cyan-300 font-mono text-xs leading-relaxed max-h-56 overflow-y-auto select-all">
                  {jsxCode}
                </pre>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={() => handleCopy(jsxCode)}
                  className="flex-1 py-3 bg-black hover:bg-scribble-orange text-white rounded-2xl text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Copied to Clipboard!' : 'Copy React Component Code'}</span>
                </button>
              </div>
            </div>
          )}

          {activeTab === 'png' && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {/* Scale selection */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-black/70">
                    Resolution Scale
                  </label>
                  <div className="flex bg-[#FAF7F2] p-1 rounded-xl border border-black/10">
                    {[
                      { scale: 1, label: '1x (Standard)' },
                      { scale: 2, label: '2x (Retina)' },
                      { scale: 3, label: '3x (Ultra HD)' },
                    ].map((s) => (
                      <button
                        key={s.scale}
                        onClick={() => setPngScale(s.scale as any)}
                        className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                          pngScale === s.scale ? 'bg-black text-white shadow' : 'text-black/60'
                        }`}
                      >
                        {s.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Background option */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-black/70">
                    Background Color
                  </label>
                  <div className="flex bg-[#FAF7F2] p-1 rounded-xl border border-black/10">
                    {[
                      { id: 'transparent', label: 'Transparent' },
                      { id: 'paper', label: 'Paper' },
                      { id: 'white', label: 'White' },
                      { id: 'dark', label: 'Dark' },
                    ].map((bg) => (
                      <button
                        key={bg.id}
                        onClick={() => setPngBg(bg.id as any)}
                        className={`flex-1 py-1.5 rounded-lg text-xs font-bold capitalize transition-colors ${
                          pngBg === bg.id ? 'bg-black text-white shadow' : 'text-black/60'
                        }`}
                      >
                        {bg.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-3 bg-[#FAF7F2] rounded-2xl border border-black/10 text-xs text-black/60 flex items-center justify-between">
                <span>Output Image Dimensions:</span>
                <span className="font-mono font-bold text-black">
                  {dimensions.width * pngScale} × {dimensions.height * pngScale} px
                </span>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleDownloadPng}
                  disabled={isExportingPng}
                  className="w-full py-3 bg-black hover:bg-scribble-orange text-white rounded-2xl text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Download className="w-4 h-4" />
                  <span>
                    {isExportingPng ? 'Rendering Image...' : `Download ${pngScale}x PNG (${fileName}@${pngScale}x.png)`}
                  </span>
                </button>
              </div>
            </div>
          )}

          {activeTab === 'datauri' && (
            <div className="space-y-4">
              <p className="text-xs text-black/60">
                Ready-to-use Data URI string for direct CSS <code className="bg-black/5 px-1 rounded">background-image: url(...)</code> or HTML <code className="bg-black/5 px-1 rounded">&lt;img src=...&gt;</code> embeds.
              </p>

              <div className="relative bg-[#18181B] rounded-2xl p-4 overflow-hidden">
                <pre className="text-amber-300 font-mono text-xs leading-relaxed max-h-48 overflow-y-auto break-all select-all">
                  {dataUri}
                </pre>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => handleCopy(dataUri)}
                  className="w-full py-3 bg-black hover:bg-scribble-orange text-white rounded-2xl text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Copied Data URI!' : 'Copy Data URI to Clipboard'}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
