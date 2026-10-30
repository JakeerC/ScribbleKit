// src/components/SvgEditor/CodeEditor.tsx
// Direct SVG Source Code View & Bi-Directional Live Editor

import React, { useState, useEffect } from 'react';
import { Copy, Check, Wand2, RefreshCw, AlertCircle } from 'lucide-react';
import { SvgElementData, CanvasDimensions } from './types';
import { serializeElementsToSvg, parseSvgStringToElements } from './svg-utils';

interface CodeEditorProps {
  elements: SvgElementData[];
  dimensions: CanvasDimensions;
  onApplyCode: (elements: SvgElementData[], dimensions: CanvasDimensions) => void;
}

export const CodeEditor: React.FC<CodeEditorProps> = ({
  elements,
  dimensions,
  onApplyCode,
}) => {
  const [code, setCode] = useState('');
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isDirty, setIsDirty] = useState(false);

  // Sync code whenever elements or dimensions change externally (debounced for performance)
  useEffect(() => {
    if (isDirty) return;
    const timer = setTimeout(() => {
      const generated = serializeElementsToSvg(elements, dimensions);
      setCode(generated);
      setError(null);
    }, 60);
    return () => clearTimeout(timer);
  }, [elements, dimensions, isDirty]);

  // Handle user typing
  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
    setIsDirty(true);

    // Validate XML
    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(newCode, 'image/svg+xml');
      const parserError = doc.querySelector('parsererror');
      if (parserError) {
        setError('XML syntax error in SVG markup');
      } else {
        setError(null);
      }
    } catch (e: any) {
      setError(e.message || 'Invalid SVG');
    }
  };

  // Apply code to canvas
  const handleApply = () => {
    try {
      const { elements: parsedElements, dimensions: parsedDimensions } =
        parseSvgStringToElements(code);
      if (parsedElements.length > 0) {
        onApplyCode(parsedElements, parsedDimensions);
        setIsDirty(false);
        setError(null);
      } else {
        setError('No valid graphic elements (<path>, <rect>, <circle>, etc.) detected in SVG');
      }
    } catch (e: any) {
      setError(e.message || 'Failed to parse SVG');
    }
  };

  // Prettify / Format XML
  const handleFormat = () => {
    try {
      const { elements: parsedElements, dimensions: parsedDimensions } =
        parseSvgStringToElements(code);
      const formatted = serializeElementsToSvg(parsedElements, parsedDimensions);
      setCode(formatted);
      setIsDirty(false);
      setError(null);
      onApplyCode(parsedElements, parsedDimensions);
    } catch (e) {
      // ignore
    }
  };

  // Copy code
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex-1 flex flex-col h-full bg-[#18181B] text-white select-text overflow-hidden">
      {/* Code Editor Header */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#121214] border-b border-white/10 select-none">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
          <span className="text-xs font-mono font-bold text-white/90">SVG Source Inspector</span>
          {isDirty && (
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
              Unapplied Edits
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          {isDirty && (
            <button
              onClick={handleApply}
              className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-scribble-orange hover:bg-scribble-orange/90 text-white text-xs font-bold transition-all shadow"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Apply to Canvas</span>
            </button>
          )}

          <button
            onClick={handleFormat}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-white/10 hover:bg-white/20 text-white/80 hover:text-white text-xs font-semibold transition-colors"
            title="Prettify & Format XML"
          >
            <Wand2 className="w-3.5 h-3.5 text-scribble-yellow" />
            <span className="hidden sm:inline">Format</span>
          </button>

          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/10 hover:bg-white/20 text-white/90 hover:text-white text-xs font-semibold transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>
        </div>
      </div>

      {/* Error notification banner if any */}
      {error && (
        <div className="bg-red-500/10 border-b border-red-500/30 px-4 py-2 flex items-center gap-2 text-red-400 text-xs font-mono">
          <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
          <span>{error}</span>
        </div>
      )}

      {/* Editor Body */}
      <div className="flex-1 relative p-4 overflow-hidden flex">
        <textarea
          value={code}
          onChange={(e) => handleCodeChange(e.target.value)}
          spellCheck={false}
          className="w-full h-full bg-transparent text-emerald-300 font-mono text-xs leading-relaxed resize-none focus:outline-none selection:bg-scribble-orange selection:text-white overflow-auto"
          placeholder="Paste or write raw SVG code here..."
        />
      </div>

      {/* Footer Info */}
      <div className="px-4 py-2 bg-[#121214] border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-white/50">
        <span>viewBox: {dimensions.viewBox}</span>
        <span>Elements: {elements.length}</span>
      </div>
    </div>
  );
};
