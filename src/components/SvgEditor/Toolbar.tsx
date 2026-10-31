// src/components/SvgEditor/Toolbar.tsx
// Tool Selector, Drawing Properties & History Toolbar

import React, { useState } from 'react';
import {
  MousePointer,
  Pencil,
  Square,
  Circle,
  ArrowUpRight,
  Sparkles,
  Minus,
  MessageSquare,
  Type,
  Hand,
  Undo2,
  Redo2,
  Trash2,
  ChevronDown,
  Copy,
  ClipboardPaste,
  Files,
} from 'lucide-react';
import { EditorTool } from './types';
import { COLOR_PRESETS, SCRIBBLES_ASSETS } from '../../lib/scribbles-data';

interface ToolbarProps {
  activeTool: EditorTool;
  onSelectTool: (tool: EditorTool) => void;
  penColor: string;
  onPenColorChange: (color: string) => void;
  penStrokeWidth: number;
  onPenStrokeWidthChange: (w: number) => void;
  canUndo: boolean;
  canRedo: boolean;
  onUndo: () => void;
  onRedo: () => void;
  onClearCanvas: () => void;
  onOpenAssetStamp: () => void;
  isAssetsDrawerOpen?: boolean;
  onToggleAssetsDrawer?: () => void;
  selectedCount?: number;
  canPaste?: boolean;
  onCopy?: () => void;
  onPaste?: () => void;
  onDuplicate?: () => void;
  onDelete?: () => void;
}

export const Toolbar: React.FC<ToolbarProps> = ({
  activeTool,
  onSelectTool,
  penColor,
  onPenColorChange,
  penStrokeWidth,
  onPenStrokeWidthChange,
  canUndo,
  canRedo,
  onUndo,
  onRedo,
  onClearCanvas,
  onOpenAssetStamp,
  isAssetsDrawerOpen,
  onToggleAssetsDrawer,
  selectedCount = 0,
  canPaste = false,
  onCopy,
  onPaste,
  onDuplicate,
  onDelete,
}) => {
  const [shapesOpen, setShapesOpen] = useState(false);

  const shapeTools: { id: EditorTool; label: string; icon: any }[] = [
    { id: 'shape-rect', label: 'Organic Card', icon: Square },
    { id: 'shape-circle', label: 'Organic Loop', icon: Circle },
    { id: 'shape-arrow', label: 'Scribble Arrow', icon: ArrowUpRight },
    { id: 'shape-star', label: 'Sparkle Burst', icon: Sparkles },
    { id: 'shape-underline', label: 'Wavy Underline', icon: Minus },
    { id: 'shape-bubble', label: 'Comic Bubble', icon: MessageSquare },
  ];

  const currentShape = shapeTools.find((s) => s.id === activeTool);

  return (
    <div className="flex items-center justify-between px-4 py-2.5 bg-white border-b border-black/10 select-none shadow-sm gap-3 flex-wrap">
      {/* Left: Tools Palette */}
      <div className="flex items-center gap-1 bg-[#F5F2EB] p-1 rounded-2xl border border-black/10">
        {/* Select Tool */}
        <button
          onClick={() => onSelectTool('select')}
          className={`p-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
            activeTool === 'select'
              ? 'bg-black text-white shadow-sm'
              : 'text-black/70 hover:bg-white hover:text-black'
          }`}
          title="Select & Transform (V)"
        >
          <MousePointer className="w-4 h-4" />
          <span className="hidden sm:inline">Select</span>
        </button>

        {/* Freehand Pen Tool */}
        <button
          onClick={() => onSelectTool('pen')}
          className={`p-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
            activeTool === 'pen'
              ? 'bg-scribble-orange text-white shadow-sm'
              : 'text-black/70 hover:bg-white hover:text-black'
          }`}
          title="Freehand Scribble Pen (P)"
        >
          <Pencil className="w-4 h-4" />
          <span className="hidden sm:inline">Draw</span>
        </button>

        {/* Shapes Menu */}
        <div className="relative">
          <button
            onClick={() => setShapesOpen(!shapesOpen)}
            className={`p-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1 ${
              activeTool.startsWith('shape-')
                ? 'bg-black text-white shadow-sm'
                : 'text-black/70 hover:bg-white hover:text-black'
            }`}
            title="Hand-Drawn Shapes"
          >
            {currentShape ? (
              <currentShape.icon className="w-4 h-4 text-scribble-yellow" />
            ) : (
              <Square className="w-4 h-4" />
            )}
            <span className="hidden md:inline">{currentShape ? currentShape.label : 'Shapes'}</span>
            <ChevronDown className="w-3 h-3 opacity-60 ml-0.5" />
          </button>

          {/* Shapes Dropdown */}
          {shapesOpen && (
            <>
              <div
                className="fixed inset-0 z-30"
                onClick={() => setShapesOpen(false)}
              />
              <div className="absolute top-full left-0 mt-2 z-40 bg-white rounded-2xl border border-black/15 shadow-xl p-2 w-48 flex flex-col gap-1">
                {shapeTools.map((st) => (
                  <button
                    key={st.id}
                    onClick={() => {
                      onSelectTool(st.id);
                      setShapesOpen(false);
                    }}
                    className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-bold transition-colors ${
                      activeTool === st.id
                        ? 'bg-black text-white'
                        : 'text-scribble-dark hover:bg-black/5'
                    }`}
                  >
                    <st.icon className="w-4 h-4 text-scribble-orange" />
                    <span>{st.label}</span>
                  </button>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Text Tool */}
        <button
          onClick={() => onSelectTool('text')}
          className={`p-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
            activeTool === 'text'
              ? 'bg-black text-white shadow-sm'
              : 'text-black/70 hover:bg-white hover:text-black'
          }`}
          title="Add Text (T)"
        >
          <Type className="w-4 h-4" />
          <span className="hidden sm:inline">Text</span>
        </button>

        {/* Pan Hand Tool */}
        <button
          onClick={() => onSelectTool('pan')}
          className={`p-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
            activeTool === 'pan'
              ? 'bg-black text-white shadow-sm'
              : 'text-black/70 hover:bg-white hover:text-black'
          }`}
          title="Pan Canvas (H / Spacebar drag)"
        >
          <Hand className="w-4 h-4" />
        </button>

        {/* Toggle Left Assets Drawer */}
        <button
          onClick={onToggleAssetsDrawer || onOpenAssetStamp}
          className={`p-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
            isAssetsDrawerOpen
              ? 'bg-scribble-orange text-white shadow-sm ring-2 ring-scribble-orange/30'
              : 'bg-scribble-yellow hover:bg-scribble-yellow/80 text-scribble-dark shadow-sm hover:scale-[1.02]'
          }`}
          title="Toggle Left Assets Library Drawer (Ctrl+B)"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Assets</span>
          <span className={`text-[10px] font-extrabold px-1.5 py-0.2 rounded-full ${isAssetsDrawerOpen ? 'bg-white/20 text-white' : 'bg-black/10 text-scribble-dark'}`}>
            {SCRIBBLES_ASSETS.length}
          </span>
        </button>
      </div>

      {/* Center: Quick Color Swatches & Stroke Width */}
      <div className="flex items-center gap-3 bg-[#F5F2EB] px-3 py-1.5 rounded-2xl border border-black/10">
        <div className="flex items-center gap-1.5">
          {COLOR_PRESETS.slice(0, 6).map((c) => (
            <button
              key={c.name}
              onClick={() => onPenColorChange(c.value)}
              className={`w-6 h-6 rounded-full border-2 transition-transform ${
                penColor === c.value ? 'scale-115 border-black shadow-md' : 'border-transparent hover:scale-105'
              }`}
              style={{ backgroundColor: c.value }}
              title={c.label}
            />
          ))}
          <input
            type="color"
            value={penColor}
            onChange={(e) => onPenColorChange(e.target.value)}
            className="w-6 h-6 rounded-full cursor-pointer border border-black/20"
            title="Custom Color"
          />
        </div>

        <span className="h-4 w-px bg-black/15" />

        {/* Stroke Width Selector */}
        <div className="flex items-center gap-1 text-[11px] font-bold">
          <span className="text-black/50 hidden lg:inline mr-1">Stroke:</span>
          {[2, 4.5, 8, 14].map((w) => (
            <button
              key={w}
              onClick={() => onPenStrokeWidthChange(w)}
              className={`px-2 py-0.5 rounded-lg transition-colors ${
                penStrokeWidth === w
                  ? 'bg-black text-white'
                  : 'text-black/60 hover:bg-black/5'
              }`}
            >
              {w}px
            </button>
          ))}
        </div>
      </div>

      {/* Right: History & Actions */}
      <div className="flex items-center gap-1">
        {/* Multi-Selection & Quick Actions Bar */}
        {selectedCount > 0 && (
          <div className="flex items-center gap-1 bg-[#FAF7F2] px-1.5 py-1 rounded-xl border border-black/15 mr-1">
            <span className="text-[10px] font-extrabold text-scribble-orange uppercase px-1">
              {selectedCount} {selectedCount === 1 ? 'item' : 'items'}
            </span>
            {onCopy && (
              <button
                onClick={onCopy}
                className="p-1.5 rounded-lg bg-white hover:bg-orange-50 text-black/80 hover:text-scribble-orange border border-black/10 shadow-xs transition-transform active:scale-95"
                title="Copy Selected (Cmd+C)"
              >
                <Copy className="w-3.5 h-3.5" />
              </button>
            )}
            {onDuplicate && (
              <button
                onClick={onDuplicate}
                className="p-1.5 rounded-lg bg-white hover:bg-orange-50 text-black/80 hover:text-scribble-orange border border-black/10 shadow-xs transition-transform active:scale-95"
                title="Duplicate Selected (Cmd+D)"
              >
                <Files className="w-3.5 h-3.5" />
              </button>
            )}
            {onDelete && (
              <button
                onClick={onDelete}
                className="p-1.5 rounded-lg bg-white hover:bg-red-50 text-red-600 border border-red-200 shadow-xs transition-transform active:scale-95"
                title="Delete Selected (Backspace / Delete)"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        )}

        {canPaste && onPaste && (
          <button
            onClick={onPaste}
            className="px-2 py-1.5 rounded-xl border border-scribble-orange/40 bg-scribble-orange/10 hover:bg-scribble-orange/20 text-scribble-orange text-xs font-bold transition-all shadow-xs flex items-center gap-1 mr-1"
            title="Paste Clipboard (Cmd+V)"
          >
            <ClipboardPaste className="w-3.5 h-3.5" />
            <span className="text-[11px] hidden sm:inline">Paste</span>
          </button>
        )}

        <button
          onClick={onUndo}
          disabled={!canUndo}
          className={`p-2 rounded-xl border border-black/10 text-xs font-bold transition-all ${
            canUndo
              ? 'bg-white hover:bg-black/5 text-scribble-dark shadow-sm'
              : 'opacity-40 cursor-not-allowed bg-transparent text-black/40'
          }`}
          title="Undo (Ctrl+Z)"
        >
          <Undo2 className="w-4 h-4" />
        </button>

        <button
          onClick={onRedo}
          disabled={!canRedo}
          className={`p-2 rounded-xl border border-black/10 text-xs font-bold transition-all ${
            canRedo
              ? 'bg-white hover:bg-black/5 text-scribble-dark shadow-sm'
              : 'opacity-40 cursor-not-allowed bg-transparent text-black/40'
          }`}
          title="Redo (Ctrl+Shift+Z)"
        >
          <Redo2 className="w-4 h-4" />
        </button>

        <button
          onClick={onClearCanvas}
          className="p-2 rounded-xl border border-red-200 text-red-600 hover:bg-red-50 text-xs font-bold transition-colors ml-1"
          title="Clear Canvas"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
