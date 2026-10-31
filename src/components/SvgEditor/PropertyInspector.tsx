// src/components/SvgEditor/PropertyInspector.tsx
// Style, Transform, Special Effects & Layers Inspector for ScribbleKit SVG Editor

import React, { useState } from 'react';
import {
  SvgElementData,
  CanvasDimensions,
  CanvasBackground,
  ElementAnimationType,
} from './types';
import { COLOR_PRESETS } from '../../lib/scribbles-data';
import {
  Layers,
  Sliders,
  Sparkles,
  Eye,
  EyeOff,
  Lock,
  Unlock,
  Trash2,
  Copy,
  FlipHorizontal,
  FlipVertical,
  AlignHorizontalJustifyCenter,
  AlignVerticalJustifyCenter,
  ArrowUp,
  ArrowDown,
  Wand2,
  AlignLeft,
  AlignCenter,
  AlignRight,
} from 'lucide-react';
import { getCombinedBoundingBox } from './svg-utils';

const ANIMATION_OPTIONS: Array<{ id: ElementAnimationType; label: string; icon: string }> = [
  { id: 'none', label: 'Off', icon: '⏹' },
  { id: 'original', label: 'Original', icon: '✨' },
  { id: 'draw', label: 'Draw', icon: '✏️' },
  { id: 'rotate', label: 'Rotate', icon: '🔄' },
  { id: 'sparkle', label: 'Sparkle', icon: '❇️' },
  { id: 'float', label: 'Float', icon: '🌊' },
  { id: 'wobble', label: 'Wobble', icon: '〰️' },
  { id: 'bounce', label: 'Bounce', icon: '🏀' },
  { id: 'pulse', label: 'Glow', icon: '💫' },
];

interface PropertyInspectorProps {
  selectedElement: SvgElementData | null;
  selectedIds?: string[];
  elements: SvgElementData[];
  dimensions: CanvasDimensions;
  canvasBackground: CanvasBackground;
  onUpdateElement: (id: string, updates: Partial<SvgElementData>) => void;
  onUpdateMultipleElements?: (updatesList: { id: string; updates: Partial<SvgElementData> }[], pushHistory?: boolean) => void;
  onDeleteElement: (id?: string) => void;
  onDuplicateElement: (id?: string) => void;
  onSelectElement: (id: string | null, isMultiToggle?: boolean) => void;
  onReorderElements: (newElements: SvgElementData[]) => void;
  onUpdateDimensions: (dimensions: CanvasDimensions) => void;
  onUpdateBackground: (bg: CanvasBackground) => void;
}

export const PropertyInspector: React.FC<PropertyInspectorProps> = ({
  selectedElement,
  selectedIds,
  elements,
  dimensions,
  canvasBackground,
  onUpdateElement,
  onUpdateMultipleElements,
  onDeleteElement,
  onDuplicateElement,
  onSelectElement,
  onReorderElements,
  onUpdateDimensions,
  onUpdateBackground,
}) => {
  const [activeTab, setActiveTab] = useState<'style' | 'effects' | 'layers'>('style');

  // Move layer up / down
  const moveLayer = (id: string, direction: 'up' | 'down') => {
    const idx = elements.findIndex((el) => el.id === id);
    if (idx === -1) return;
    const targetIdx = direction === 'up' ? idx + 1 : idx - 1;
    if (targetIdx < 0 || targetIdx >= elements.length) return;

    const newEls = [...elements];
    const [moved] = newEls.splice(idx, 1);
    newEls.splice(targetIdx, 0, moved);
    onReorderElements(newEls);
  };

  // Center selected element
  const centerElement = (axis: 'both' | 'h' | 'v') => {
    if (!selectedElement) return;
    const updates: Partial<SvgElementData> = {};
    if (axis === 'both' || axis === 'h') {
      updates.x = Math.round((dimensions.width - selectedElement.width) / 2);
    }
    if (axis === 'both' || axis === 'v') {
      updates.y = Math.round((dimensions.height - selectedElement.height) / 2);
    }
    onUpdateElement(selectedElement.id, updates);
  };

  const selectedElements = elements.filter((el) => selectedIds?.includes(el.id));
  const isMultiSelect = selectedElements.length > 1;
  const combinedBox = isMultiSelect ? getCombinedBoundingBox(selectedElements) : null;

  // Handle Multi-Selection Dimension Resizing (Proportional or Direct)
  const handleGroupDimensionChange = (axis: 'width' | 'height', newSize: number) => {
    if (!combinedBox || newSize <= 0) return;
    const scaleX = axis === 'width' ? newSize / combinedBox.width : 1;
    const scaleY = axis === 'height' ? newSize / combinedBox.height : 1;

    const updates = selectedElements.map((el) => {
      const relX = el.x - combinedBox.x;
      const relY = el.y - combinedBox.y;
      const newX = Math.round(combinedBox.x + relX * scaleX);
      const newY = Math.round(combinedBox.y + relY * scaleY);
      const newW = Math.max(4, Math.round(el.width * scaleX));
      const newH = Math.max(4, Math.round(el.height * scaleY));
      const u: Partial<SvgElementData> = { x: newX, y: newY, width: newW, height: newH };
      if (el.fontSize) {
        u.fontSize = Math.max(8, Math.round(el.fontSize * (axis === 'height' ? scaleY : scaleX)));
      }
      return { id: el.id, updates: u };
    });

    if (onUpdateMultipleElements) {
      onUpdateMultipleElements(updates, true);
    }
  };

  // Quick scale multiplier (+25%, -25%, etc.)
  const handleGroupScaleProportional = (factor: number) => {
    if (!combinedBox) return;
    const updates = selectedElements.map((el) => {
      const relX = el.x - combinedBox.x;
      const relY = el.y - combinedBox.y;
      const newX = Math.round(combinedBox.x + relX * factor);
      const newY = Math.round(combinedBox.y + relY * factor);
      const newW = Math.max(4, Math.round(el.width * factor));
      const newH = Math.max(4, Math.round(el.height * factor));
      const u: Partial<SvgElementData> = { x: newX, y: newY, width: newW, height: newH };
      if (el.fontSize) {
        u.fontSize = Math.max(8, Math.round(el.fontSize * factor));
      }
      return { id: el.id, updates: u };
    });
    if (onUpdateMultipleElements) {
      onUpdateMultipleElements(updates, true);
    }
  };

  // Group Alignments
  const handleAlignGroup = (alignment: 'left' | 'center' | 'right' | 'top' | 'middle' | 'bottom') => {
    if (!combinedBox || !onUpdateMultipleElements) return;
    const updates = selectedElements.map((el) => {
      const u: Partial<SvgElementData> = {};
      if (alignment === 'left') {
        u.x = combinedBox.x;
      } else if (alignment === 'center') {
        u.x = Math.round(combinedBox.x + (combinedBox.width - el.width) / 2);
      } else if (alignment === 'right') {
        u.x = Math.round(combinedBox.x + combinedBox.width - el.width);
      } else if (alignment === 'top') {
        u.y = combinedBox.y;
      } else if (alignment === 'middle') {
        u.y = Math.round(combinedBox.y + (combinedBox.height - el.height) / 2);
      } else if (alignment === 'bottom') {
        u.y = Math.round(combinedBox.y + combinedBox.height - el.height);
      }
      return { id: el.id, updates: u };
    });
    onUpdateMultipleElements(updates, true);
  };

  // Center Group in Canvas
  const handleCenterGroup = (axis: 'both' | 'h' | 'v') => {
    if (!combinedBox || !onUpdateMultipleElements) return;
    const targetX = Math.round((dimensions.width - combinedBox.width) / 2);
    const targetY = Math.round((dimensions.height - combinedBox.height) / 2);
    const dx = axis === 'both' || axis === 'h' ? targetX - combinedBox.x : 0;
    const dy = axis === 'both' || axis === 'v' ? targetY - combinedBox.y : 0;

    const updates = selectedElements.map((el) => ({
      id: el.id,
      updates: {
        x: el.x + dx,
        y: el.y + dy,
      },
    }));
    onUpdateMultipleElements(updates, true);
  };

  return (
    <div className="w-80 border-l border-black/10 bg-white flex flex-col h-full select-none overflow-hidden shrink-0 shadow-lg">
      {/* Top Tabs */}
      <div className="flex border-b border-black/10 bg-[#FAF7F2] p-1.5 gap-1">
        <button
          onClick={() => setActiveTab('style')}
          className={`flex-1 py-1.5 text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 transition-all ${
            activeTab === 'style'
              ? 'bg-white text-black shadow-sm'
              : 'text-black/60 hover:text-black'
          }`}
        >
          <Sliders className="w-3.5 h-3.5" />
          <span>Style</span>
        </button>

        <button
          onClick={() => setActiveTab('effects')}
          className={`flex-1 py-1.5 text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 transition-all ${
            activeTab === 'effects'
              ? 'bg-white text-scribble-orange shadow-sm'
              : 'text-black/60 hover:text-black'
          }`}
        >
          <Wand2 className="w-3.5 h-3.5" />
          <span>Effects</span>
        </button>

        <button
          onClick={() => setActiveTab('layers')}
          className={`flex-1 py-1.5 text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 transition-all ${
            activeTab === 'layers'
              ? 'bg-white text-black shadow-sm'
              : 'text-black/60 hover:text-black'
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>Layers ({elements.length})</span>
        </button>
      </div>

      {/* Main Tab Content */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {activeTab === 'style' && (
          <>
            {isMultiSelect && combinedBox && (
              <div className="bg-[#FAF7F2] p-3.5 rounded-2xl border border-black/15 shadow-sm space-y-3 mb-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-scribble-orange animate-pulse" />
                    <span className="text-xs font-extrabold uppercase tracking-wider text-black">
                      {selectedElements.length} Elements Selected
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => onDuplicateElement()}
                      className="p-1.5 rounded-lg border border-black/10 bg-white hover:bg-black/5 text-black/70 hover:text-black"
                      title="Duplicate All Selected (Cmd+D)"
                    >
                      <Copy className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => onDeleteElement()}
                      className="p-1.5 rounded-lg border border-red-200 bg-white text-red-500 hover:bg-red-50"
                      title="Delete All Selected (Backspace/Del)"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Group Resizing: Width & Height */}
                <div className="space-y-1.5 bg-white p-2.5 rounded-xl border border-black/10">
                  <div className="flex items-center justify-between text-[11px] font-bold text-black/70">
                    <span>Group Dimensions</span>
                    <span className="font-mono text-[10px] text-black/40">
                      {combinedBox.width} × {combinedBox.height}px
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center gap-1.5 bg-[#FAF7F2] px-2 py-1 rounded-lg border border-black/10">
                      <span className="text-[10px] font-bold text-black/40">W</span>
                      <input
                        type="number"
                        min="10"
                        max="2000"
                        value={combinedBox.width}
                        onChange={(e) => handleGroupDimensionChange('width', Math.max(10, Number(e.target.value)))}
                        className="w-full bg-transparent text-xs font-mono font-bold focus:outline-none"
                      />
                    </div>
                    <div className="flex items-center gap-1.5 bg-[#FAF7F2] px-2 py-1 rounded-lg border border-black/10">
                      <span className="text-[10px] font-bold text-black/40">H</span>
                      <input
                        type="number"
                        min="10"
                        max="2000"
                        value={combinedBox.height}
                        onChange={(e) => handleGroupDimensionChange('height', Math.max(10, Number(e.target.value)))}
                        className="w-full bg-transparent text-xs font-mono font-bold focus:outline-none"
                      />
                    </div>
                  </div>
                  {/* Quick proportional scale buttons */}
                  <div className="flex items-center justify-between gap-1 pt-1">
                    <span className="text-[10px] font-semibold text-black/50">Scale:</span>
                    <div className="flex items-center gap-1">
                      {[-25, -10, 10, 25].map((pct) => (
                        <button
                          key={pct}
                          onClick={() => handleGroupScaleProportional(1 + pct / 100)}
                          className="px-1.5 py-0.5 rounded bg-[#FAF7F2] hover:bg-black/10 border border-black/10 text-[10px] font-mono font-bold text-black/70"
                          title={`Scale ${pct > 0 ? '+' : ''}${pct}%`}
                        >
                          {pct > 0 ? `+${pct}%` : `${pct}%`}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Batch Alignment Tools */}
                <div className="space-y-1.5 bg-white p-2.5 rounded-xl border border-black/10">
                  <div className="text-[11px] font-bold text-black/70">Align Group Elements</div>
                  <div className="grid grid-cols-6 gap-1">
                    <button
                      onClick={() => handleAlignGroup('left')}
                      className="p-1.5 rounded-lg bg-[#FAF7F2] hover:bg-black/10 flex items-center justify-center text-black/70 hover:text-black"
                      title="Align Left"
                    >
                      <AlignLeft className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => handleAlignGroup('center')}
                      className="p-1.5 rounded-lg bg-[#FAF7F2] hover:bg-black/10 flex items-center justify-center text-black/70 hover:text-black"
                      title="Align Center"
                    >
                      <AlignCenter className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => handleAlignGroup('right')}
                      className="p-1.5 rounded-lg bg-[#FAF7F2] hover:bg-black/10 flex items-center justify-center text-black/70 hover:text-black"
                      title="Align Right"
                    >
                      <AlignRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => handleAlignGroup('top')}
                      className="p-1.5 rounded-lg bg-[#FAF7F2] hover:bg-black/10 flex items-center justify-center text-black/70 hover:text-black"
                      title="Align Top"
                    >
                      <ArrowUp className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => handleAlignGroup('middle')}
                      className="p-1.5 rounded-lg bg-[#FAF7F2] hover:bg-black/10 flex items-center justify-center text-black/70 hover:text-black"
                      title="Align Middle"
                    >
                      <AlignVerticalJustifyCenter className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => handleAlignGroup('bottom')}
                      className="p-1.5 rounded-lg bg-[#FAF7F2] hover:bg-black/10 flex items-center justify-center text-black/70 hover:text-black"
                      title="Align Bottom"
                    >
                      <ArrowDown className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  {/* Center in Canvas */}
                  <div className="flex items-center gap-1 pt-1">
                    <button
                      onClick={() => handleCenterGroup('both')}
                      className="flex-1 py-1 rounded-lg bg-[#FAF7F2] hover:bg-black/10 text-[10px] font-bold text-black/70 text-center"
                    >
                      Center on Canvas
                    </button>
                    <button
                      onClick={() => handleCenterGroup('h')}
                      className="px-2 py-1 rounded-lg bg-[#FAF7F2] hover:bg-black/10 text-[10px] font-bold text-black/70"
                      title="Center Horizontally"
                    >
                      H
                    </button>
                    <button
                      onClick={() => handleCenterGroup('v')}
                      className="px-2 py-1 rounded-lg bg-[#FAF7F2] hover:bg-black/10 text-[10px] font-bold text-black/70"
                      title="Center Vertically"
                    >
                      V
                    </button>
                  </div>
                </div>

                <p className="text-[11px] text-black/60 leading-relaxed">
                  Batch styling active: stroke, color, and opacity changes apply to all {selectedElements.length} elements.
                </p>
              </div>
            )}

            {selectedElement ? (
              <div className="space-y-5">
                {/* Header with Title & Quick Actions */}
                <div className="flex items-center justify-between pb-3 border-b border-black/10">
                  <div className="truncate">
                    <input
                      type="text"
                      value={selectedElement.name}
                      onChange={(e) => onUpdateElement(selectedElement.id, { name: e.target.value })}
                      className="text-sm font-bold text-scribble-dark bg-transparent border-b border-dashed border-black/30 hover:border-black focus:outline-none focus:border-scribble-orange px-1 py-0.5 w-40"
                    />
                    <div className="text-[10px] text-black/50 font-mono mt-0.5">
                      Type: {selectedElement.type.toUpperCase()}
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => onDuplicateElement(selectedElement.id)}
                      className="p-1.5 rounded-lg border border-black/10 hover:bg-black/5 text-black/70 hover:text-black"
                      title="Duplicate Element"
                    >
                      <Copy className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => onDeleteElement(selectedElement.id)}
                      className="p-1.5 rounded-lg border border-red-200 text-red-500 hover:bg-red-50"
                      title="Delete Element"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Text Content (if Text element) */}
                {selectedElement.type === 'text' && (
                  <div className="space-y-2 bg-[#F8F6F0] p-3 rounded-2xl border border-black/10">
                    <label className="text-xs font-bold uppercase tracking-wider text-black/70">
                      Text Value
                    </label>
                    <input
                      type="text"
                      value={selectedElement.text || ''}
                      onChange={(e) => onUpdateElement(selectedElement.id, { text: e.target.value })}
                      className="w-full text-sm font-bold px-3 py-2 rounded-xl border border-black/20 focus:outline-none focus:border-black"
                    />
                    <div className="flex items-center gap-2 pt-2">
                      <span className="text-[11px] font-semibold text-black/60">Font Size:</span>
                      <input
                        type="range"
                        min="12"
                        max="96"
                        value={selectedElement.fontSize || 32}
                        onChange={(e) =>
                          onUpdateElement(selectedElement.id, { fontSize: Number(e.target.value) })
                        }
                        className="flex-1 accent-scribble-orange cursor-pointer"
                      />
                      <span className="text-xs font-mono font-bold w-10 text-right">
                        {selectedElement.fontSize || 32}px
                      </span>
                    </div>
                  </div>
                )}

                {/* Stroke Styling */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold uppercase tracking-wider text-black/70">
                      Stroke
                    </label>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          onUpdateElement(selectedElement.id, {
                            stroke: selectedElement.stroke === 'none' ? '#EA552B' : 'none',
                          })
                        }
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${
                          selectedElement.stroke === 'none'
                            ? 'bg-red-50 text-red-600 border-red-200'
                            : 'bg-black text-white border-black'
                        }`}
                      >
                        {selectedElement.stroke === 'none' ? 'None' : 'Active'}
                      </button>
                    </div>
                  </div>

                  {selectedElement.stroke !== 'none' && (
                    <div className="space-y-3 bg-[#FAF7F2] p-3 rounded-2xl border border-black/10">
                      {/* Color Swatches */}
                      <div className="flex items-center gap-1.5 flex-wrap">
                        {COLOR_PRESETS.map((c) => (
                          <button
                            key={c.name}
                            onClick={() => onUpdateElement(selectedElement.id, { stroke: c.value })}
                            className={`w-6 h-6 rounded-full border-2 transition-transform ${
                              selectedElement.stroke === c.value
                                ? 'scale-115 border-black shadow'
                                : 'border-transparent hover:scale-105'
                            }`}
                            style={{ backgroundColor: c.value }}
                            title={c.label}
                          />
                        ))}
                        <input
                          type="color"
                          value={selectedElement.stroke.startsWith('#') ? selectedElement.stroke : '#EA552B'}
                          onChange={(e) => onUpdateElement(selectedElement.id, { stroke: e.target.value })}
                          className="w-6 h-6 rounded-full cursor-pointer border border-black/20"
                        />
                      </div>

                      {/* Stroke Width */}
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs font-semibold text-black/70">
                          <span>Width</span>
                          <span className="font-mono font-bold">{selectedElement.strokeWidth}px</span>
                        </div>
                        <input
                          type="range"
                          min="0.5"
                          max="32"
                          step="0.5"
                          value={selectedElement.strokeWidth}
                          onChange={(e) =>
                            onUpdateElement(selectedElement.id, {
                              strokeWidth: Number(e.target.value),
                            })
                          }
                          className="w-full accent-scribble-orange cursor-pointer"
                        />
                      </div>

                      {/* Stroke Cap & Join */}
                      <div className="grid grid-cols-2 gap-2 pt-1 text-xs font-semibold">
                        <div>
                          <span className="text-[10px] text-black/50 block mb-1">Line Cap</span>
                          <div className="flex bg-white rounded-lg border border-black/10 p-0.5">
                            {(['round', 'butt', 'square'] as const).map((cap) => (
                              <button
                                key={cap}
                                onClick={() => onUpdateElement(selectedElement.id, { strokeLinecap: cap })}
                                className={`flex-1 py-1 rounded text-[10px] font-bold capitalize ${
                                  selectedElement.strokeLinecap === cap
                                    ? 'bg-black text-white'
                                    : 'text-black/60 hover:text-black'
                                }`}
                              >
                                {cap}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div>
                          <span className="text-[10px] text-black/50 block mb-1">Style</span>
                          <div className="flex bg-white rounded-lg border border-black/10 p-0.5">
                            {[
                              { label: 'Solid', val: 'none' },
                              { label: 'Dash', val: '8 6' },
                              { label: 'Dots', val: '2 4' },
                            ].map((st) => (
                              <button
                                key={st.label}
                                onClick={() =>
                                  onUpdateElement(selectedElement.id, {
                                    strokeDasharray: st.val,
                                  })
                                }
                                className={`flex-1 py-1 rounded text-[10px] font-bold ${
                                  (selectedElement.strokeDasharray || 'none') === st.val
                                    ? 'bg-black text-white'
                                    : 'text-black/60 hover:text-black'
                                }`}
                              >
                                {st.label}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Fill Styling */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold uppercase tracking-wider text-black/70">
                      Fill Color
                    </label>
                    <button
                      onClick={() =>
                        onUpdateElement(selectedElement.id, {
                          fill: selectedElement.fill === 'none' ? '#F7D046' : 'none',
                        })
                      }
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${
                        selectedElement.fill === 'none'
                          ? 'bg-black/5 text-black/50 border-black/10'
                          : 'bg-black text-white border-black'
                      }`}
                    >
                      {selectedElement.fill === 'none' ? 'None (Transparent)' : 'Active'}
                    </button>
                  </div>

                  {selectedElement.fill !== 'none' && (
                    <div className="space-y-3 bg-[#FAF7F2] p-3 rounded-2xl border border-black/10">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        {COLOR_PRESETS.map((c) => (
                          <button
                            key={c.name}
                            onClick={() => onUpdateElement(selectedElement.id, { fill: c.value })}
                            className={`w-6 h-6 rounded-full border-2 transition-transform ${
                              selectedElement.fill === c.value
                                ? 'scale-115 border-black shadow'
                                : 'border-transparent hover:scale-105'
                            }`}
                            style={{ backgroundColor: c.value }}
                            title={c.label}
                          />
                        ))}
                        <input
                          type="color"
                          value={selectedElement.fill.startsWith('#') ? selectedElement.fill : '#F7D046'}
                          onChange={(e) => onUpdateElement(selectedElement.id, { fill: e.target.value })}
                          className="w-6 h-6 rounded-full cursor-pointer border border-black/20"
                        />
                      </div>

                      {/* Fill Opacity */}
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs font-semibold text-black/70">
                          <span>Fill Opacity</span>
                          <span className="font-mono font-bold">
                            {Math.round(selectedElement.fillOpacity * 100)}%
                          </span>
                        </div>
                        <input
                          type="range"
                          min="0.1"
                          max="1"
                          step="0.05"
                          value={selectedElement.fillOpacity}
                          onChange={(e) =>
                            onUpdateElement(selectedElement.id, {
                              fillOpacity: Number(e.target.value),
                            })
                          }
                          className="w-full accent-scribble-yellow cursor-pointer"
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Transform & Geometry */}
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-wider text-black/70">
                    Transform & Position
                  </label>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-[#FAF7F2] p-2 rounded-xl border border-black/10">
                      <span className="text-[10px] text-black/50 block">X</span>
                      <input
                        type="number"
                        value={selectedElement.x}
                        onChange={(e) =>
                          onUpdateElement(selectedElement.id, { x: Number(e.target.value) })
                        }
                        className="w-full font-mono font-bold bg-transparent focus:outline-none"
                      />
                    </div>
                    <div className="bg-[#FAF7F2] p-2 rounded-xl border border-black/10">
                      <span className="text-[10px] text-black/50 block">Y</span>
                      <input
                        type="number"
                        value={selectedElement.y}
                        onChange={(e) =>
                          onUpdateElement(selectedElement.id, { y: Number(e.target.value) })
                        }
                        className="w-full font-mono font-bold bg-transparent focus:outline-none"
                      />
                    </div>
                    <div className="bg-[#FAF7F2] p-2 rounded-xl border border-black/10">
                      <span className="text-[10px] text-black/50 block">Width</span>
                      <input
                        type="number"
                        value={selectedElement.width}
                        onChange={(e) =>
                          onUpdateElement(selectedElement.id, {
                            width: Math.max(10, Number(e.target.value)),
                          })
                        }
                        className="w-full font-mono font-bold bg-transparent focus:outline-none"
                      />
                    </div>
                    <div className="bg-[#FAF7F2] p-2 rounded-xl border border-black/10">
                      <span className="text-[10px] text-black/50 block">Height</span>
                      <input
                        type="number"
                        value={selectedElement.height}
                        onChange={(e) =>
                          onUpdateElement(selectedElement.id, {
                            height: Math.max(10, Number(e.target.value)),
                          })
                        }
                        className="w-full font-mono font-bold bg-transparent focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Rotation Slider */}
                  <div className="space-y-1 bg-[#FAF7F2] p-3 rounded-2xl border border-black/10">
                    <div className="flex justify-between text-xs font-semibold text-black/70">
                      <span>Rotation</span>
                      <span className="font-mono font-bold">{selectedElement.rotation}°</span>
                    </div>
                    <input
                      type="range"
                      min="-180"
                      max="180"
                      value={selectedElement.rotation}
                      onChange={(e) =>
                        onUpdateElement(selectedElement.id, { rotation: Number(e.target.value) })
                      }
                      className="w-full accent-scribble-dark cursor-pointer"
                    />
                  </div>

                  {/* Alignment & Center Buttons */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => centerElement('h')}
                      className="flex-1 py-1.5 px-2 bg-white hover:bg-black/5 rounded-xl border border-black/10 text-xs font-bold flex items-center justify-center gap-1.5"
                      title="Center Horizontally"
                    >
                      <AlignHorizontalJustifyCenter className="w-3.5 h-3.5" />
                      <span>Center X</span>
                    </button>
                    <button
                      onClick={() => centerElement('v')}
                      className="flex-1 py-1.5 px-2 bg-white hover:bg-black/5 rounded-xl border border-black/10 text-xs font-bold flex items-center justify-center gap-1.5"
                      title="Center Vertically"
                    >
                      <AlignVerticalJustifyCenter className="w-3.5 h-3.5" />
                      <span>Center Y</span>
                    </button>
                  </div>

                  {/* Flip & Lock Buttons */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        onUpdateElement(selectedElement.id, {
                          rotation: (selectedElement.rotation + 180) % 360,
                        })
                      }
                      className="flex-1 py-1.5 px-2 bg-white hover:bg-black/5 rounded-xl border border-black/10 text-xs font-bold flex items-center justify-center gap-1.5"
                      title="Flip 180°"
                    >
                      <FlipHorizontal className="w-3.5 h-3.5" />
                      <span>Flip</span>
                    </button>
                    <button
                      onClick={() =>
                        onUpdateElement(selectedElement.id, {
                          rotation: -selectedElement.rotation,
                        })
                      }
                      className="flex-1 py-1.5 px-2 bg-white hover:bg-black/5 rounded-xl border border-black/10 text-xs font-bold flex items-center justify-center gap-1.5"
                      title="Invert Rotation"
                    >
                      <FlipVertical className="w-3.5 h-3.5" />
                      <span>Invert</span>
                    </button>
                    <button
                      onClick={() =>
                        onUpdateElement(selectedElement.id, {
                          locked: !selectedElement.locked,
                        })
                      }
                      className={`py-1.5 px-2.5 rounded-xl border text-xs font-bold flex items-center justify-center gap-1 ${
                        selectedElement.locked
                          ? 'bg-amber-100 border-amber-300 text-amber-900'
                          : 'bg-white hover:bg-black/5 border-black/10 text-black/70'
                      }`}
                      title={selectedElement.locked ? 'Unlock Layer' : 'Lock Layer'}
                    >
                      {selectedElement.locked ? <Lock className="w-3.5 h-3.5" /> : <Unlock className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              /* Canvas Settings (when no element is selected) */
              <div className="space-y-5">
                <div className="pb-3 border-b border-black/10">
                  <h4 className="text-sm font-extrabold text-scribble-dark font-display">
                    Canvas Setup
                  </h4>
                  <p className="text-xs text-black/50 mt-0.5">
                    Click any element to inspect its properties, or customize the canvas below.
                  </p>
                </div>

                {/* Canvas Background Chooser */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-black/70">
                    Canvas Texture
                  </label>
                  <div className="grid grid-cols-2 gap-2 text-xs font-bold">
                    {[
                      { id: 'paper', label: 'Paper' },
                      { id: 'grid', label: 'Grid Paper' },
                      { id: 'dots', label: 'Dot Paper' },
                      { id: 'dark', label: 'Dark Board' },
                      { id: 'transparent', label: 'Transparent' },
                    ].map((bg) => (
                      <button
                        key={bg.id}
                        onClick={() => onUpdateBackground(bg.id as any)}
                        className={`p-2 rounded-xl border text-left transition-all ${
                          canvasBackground === bg.id
                            ? 'bg-black text-white border-black shadow'
                            : 'bg-[#FAF7F2] text-black/70 border-black/10 hover:border-black/30'
                        }`}
                      >
                        {bg.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Canvas Dimensions */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-black/70">
                    Dimensions (viewBox)
                  </label>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-[#FAF7F2] p-2.5 rounded-xl border border-black/10">
                      <span className="text-[10px] text-black/50 block">Width</span>
                      <input
                        type="number"
                        value={dimensions.width}
                        onChange={(e) => {
                          const w = Number(e.target.value);
                          onUpdateDimensions({
                            ...dimensions,
                            width: w,
                            viewBox: `0 0 ${w} ${dimensions.height}`,
                          });
                        }}
                        className="w-full font-mono font-bold bg-transparent focus:outline-none"
                      />
                    </div>
                    <div className="bg-[#FAF7F2] p-2.5 rounded-xl border border-black/10">
                      <span className="text-[10px] text-black/50 block">Height</span>
                      <input
                        type="number"
                        value={dimensions.height}
                        onChange={(e) => {
                          const h = Number(e.target.value);
                          onUpdateDimensions({
                            ...dimensions,
                            height: h,
                            viewBox: `0 0 ${dimensions.width} ${h}`,
                          });
                        }}
                        className="w-full font-mono font-bold bg-transparent focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Preset dimension buttons */}
                  <div className="flex gap-1.5 flex-wrap pt-1">
                    {[
                      { label: 'Square', w: 600, h: 600 },
                      { label: 'Landscape', w: 800, h: 500 },
                      { label: 'Banner', w: 800, h: 260 },
                      { label: 'Icon', w: 256, h: 256 },
                    ].map((pre) => (
                      <button
                        key={pre.label}
                        onClick={() =>
                          onUpdateDimensions({
                            width: pre.w,
                            height: pre.h,
                            viewBox: `0 0 ${pre.w} ${pre.h}`,
                          })
                        }
                        className="px-2 py-1 rounded-lg bg-black/5 hover:bg-black/10 text-[11px] font-bold text-black/70"
                      >
                        {pre.label} ({pre.w}x{pre.h})
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </>
        )}

        {/* Special Effects Tab */}
        {activeTab === 'effects' && (
          <div className="space-y-5">
            <div className="pb-3 border-b border-black/10">
              <h4 className="text-sm font-extrabold text-scribble-dark font-display flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-scribble-orange" />
                <span>Animation & Funky FX</span>
              </h4>
              <p className="text-xs text-black/50 mt-0.5">
                Apply ScribbleKit signature animations, comic drop shadows, organic wiggle, and glows.
              </p>
            </div>

            {selectedElement ? (
              <div className="space-y-4">
                {/* Scribble Animation Card */}
                <div className="bg-[#FAF7F2] p-3.5 rounded-2xl border border-black/10 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-scribble-dark flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-scribble-orange" />
                        <span>Scribble Animation</span>
                      </div>
                      <div className="text-[10px] text-black/50">
                        {isMultiSelect ? `Apply to ${selectedElements.length} selected layers` : 'Signature motion & kinetic presets'}
                      </div>
                    </div>
                    {selectedElement.animation && selectedElement.animation !== 'none' && (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-scribble-yellow/40 text-black border border-scribble-yellow/60">
                        {selectedElement.animation}
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-3 gap-1.5 pt-1">
                    {ANIMATION_OPTIONS.map((anim) => {
                      const isActive = (selectedElement.animation || 'none') === anim.id;
                      return (
                        <button
                          key={anim.id}
                          onClick={() => {
                            if (isMultiSelect && onUpdateMultipleElements) {
                              const updates = selectedElements.map((el) => ({
                                id: el.id,
                                updates: { animation: anim.id },
                              }));
                              onUpdateMultipleElements(updates, true);
                            } else {
                              onUpdateElement(selectedElement.id, {
                                animation: anim.id,
                              });
                            }
                          }}
                          className={`px-2 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 border ${
                            isActive
                              ? anim.id === 'original'
                                ? 'bg-gradient-to-r from-scribble-orange to-scribble-yellow text-white border-transparent shadow'
                                : 'bg-black text-white border-black shadow'
                              : 'bg-white hover:bg-black/5 text-black/70 border-black/10'
                          }`}
                        >
                          <span className="text-[11px]">{anim.icon}</span>
                          <span className="text-[11px] truncate">{anim.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Comic 3D Isometric Drop Shadow */}
                <div className="bg-[#FAF7F2] p-3.5 rounded-2xl border border-black/10 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-scribble-dark">Comic 3D Shadow</div>
                      <div className="text-[10px] text-black/50">Offset extrusion sticker shadow</div>
                    </div>
                    <button
                      onClick={() =>
                        onUpdateElement(selectedElement.id, {
                          comicShadow: {
                            enabled: !selectedElement.comicShadow?.enabled,
                            offsetX: selectedElement.comicShadow?.offsetX || 6,
                            offsetY: selectedElement.comicShadow?.offsetY || 6,
                            color: selectedElement.comicShadow?.color || '#141416',
                          },
                        })
                      }
                      className={`text-xs font-bold px-2.5 py-1 rounded-lg border transition-all ${
                        selectedElement.comicShadow?.enabled
                          ? 'bg-scribble-orange text-white border-scribble-orange'
                          : 'bg-white text-black/50 border-black/15'
                      }`}
                    >
                      {selectedElement.comicShadow?.enabled ? 'ON' : 'OFF'}
                    </button>
                  </div>

                  {selectedElement.comicShadow?.enabled && (
                    <div className="space-y-3 pt-2 border-t border-black/10">
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs font-semibold text-black/70">
                          <span>Offset (X & Y)</span>
                          <span className="font-mono font-bold">
                            {selectedElement.comicShadow.offsetX}px
                          </span>
                        </div>
                        <input
                          type="range"
                          min="2"
                          max="20"
                          value={selectedElement.comicShadow.offsetX}
                          onChange={(e) => {
                            const val = Number(e.target.value);
                            onUpdateElement(selectedElement.id, {
                              comicShadow: {
                                ...selectedElement.comicShadow!,
                                offsetX: val,
                                offsetY: val,
                              },
                            });
                          }}
                          className="w-full accent-scribble-orange cursor-pointer"
                        />
                      </div>

                      {/* Shadow Color */}
                      <div className="flex items-center justify-between pt-1">
                        <span className="text-xs font-semibold text-black/70">Shadow Color:</span>
                        <div className="flex items-center gap-1.5">
                          {['#141416', '#EA552B', '#4CA96D', '#55BBDA'].map((col) => (
                            <button
                              key={col}
                              onClick={() =>
                                onUpdateElement(selectedElement.id, {
                                  comicShadow: {
                                    ...selectedElement.comicShadow!,
                                    color: col,
                                  },
                                })
                              }
                              className={`w-5 h-5 rounded-full border-2 ${
                                selectedElement.comicShadow?.color === col
                                  ? 'border-black scale-110'
                                  : 'border-transparent'
                              }`}
                              style={{ backgroundColor: col }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Hand-Drawn Wiggle Filter */}
                <div className="bg-[#FAF7F2] p-3.5 rounded-2xl border border-black/10 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-scribble-dark">Organic Wiggle</div>
                      <div className="text-[10px] text-black/50">Simulates hand tremor / sketch noise</div>
                    </div>
                    <button
                      onClick={() =>
                        onUpdateElement(selectedElement.id, {
                          wiggle: {
                            enabled: !selectedElement.wiggle?.enabled,
                            scale: 4,
                            frequency: 0.04,
                          },
                        })
                      }
                      className={`text-xs font-bold px-2.5 py-1 rounded-lg border transition-all ${
                        selectedElement.wiggle?.enabled
                          ? 'bg-scribble-green text-white border-scribble-green'
                          : 'bg-white text-black/50 border-black/15'
                      }`}
                    >
                      {selectedElement.wiggle?.enabled ? 'ON' : 'OFF'}
                    </button>
                  </div>
                </div>

                {/* Neon Glow */}
                <div className="bg-[#FAF7F2] p-3.5 rounded-2xl border border-black/10 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-scribble-dark">Vibrant Glow</div>
                      <div className="text-[10px] text-black/50">Diffusion blur around stroke</div>
                    </div>
                    <button
                      onClick={() =>
                        onUpdateElement(selectedElement.id, {
                          glow: {
                            enabled: !selectedElement.glow?.enabled,
                            blur: 6,
                            color: selectedElement.stroke,
                          },
                        })
                      }
                      className={`text-xs font-bold px-2.5 py-1 rounded-lg border transition-all ${
                        selectedElement.glow?.enabled
                          ? 'bg-scribble-blue text-white border-scribble-blue'
                          : 'bg-white text-black/50 border-black/15'
                      }`}
                    >
                      {selectedElement.glow?.enabled ? 'ON' : 'OFF'}
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {/* Apply Animation to All Elements */}
                <div className="bg-[#FAF7F2] p-3.5 rounded-2xl border border-black/10 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-scribble-dark flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-scribble-orange" />
                        <span>All Layers Animation</span>
                      </div>
                      <div className="text-[10px] text-black/50">
                        Batch animate all {elements.length} elements on canvas
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-1.5 pt-1">
                    {ANIMATION_OPTIONS.map((anim) => (
                      <button
                        key={anim.id}
                        onClick={() => {
                          if (onUpdateMultipleElements && elements.length > 0) {
                            const updates = elements.map((el) => ({
                              id: el.id,
                              updates: { animation: anim.id },
                            }));
                            onUpdateMultipleElements(updates, true);
                          }
                        }}
                        className="px-2 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 border bg-white hover:bg-black/5 text-black/70 border-black/10 hover:border-black/30"
                      >
                        <span className="text-[11px]">{anim.icon}</span>
                        <span className="text-[11px] truncate">{anim.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="text-center py-6 text-black/40 text-xs">
                  Select an individual layer to customize its specific effects and animation.
                </div>
              </div>
            )}
          </div>
        )}

        {/* Layers Tab */}
        {activeTab === 'layers' && (
          <div className="space-y-4">
            <div className="pb-2 border-b border-black/10 flex items-center justify-between">
              <div>
                <h4 className="text-sm font-extrabold text-scribble-dark font-display">
                  Vector Layers
                </h4>
                <p className="text-[11px] text-black/50">Z-index stack (top to bottom)</p>
              </div>
              <span className="text-xs font-bold bg-black/5 px-2 py-0.5 rounded-full">
                {elements.length}
              </span>
            </div>

            {/* List of Layers */}
            <div className="space-y-1.5">
              {[...elements].reverse().map((el) => {
                const isSelected = selectedIds ? selectedIds.includes(el.id) : el.id === selectedElement?.id;
                return (
                  <div
                    key={el.id}
                    onClick={(e) => onSelectElement(el.id, e.ctrlKey || e.metaKey)}
                    className={`flex items-center justify-between p-2.5 rounded-xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-black text-white border-black shadow'
                        : 'bg-[#FAF7F2] hover:bg-black/5 text-scribble-dark border-black/10'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 truncate">
                      {/* Swatch color representation */}
                      <span
                        className="w-3.5 h-3.5 rounded-full shrink-0 border border-black/20"
                        style={{
                          backgroundColor:
                            el.fill !== 'none'
                              ? el.fill
                              : el.stroke !== 'none'
                              ? el.stroke
                              : '#EA552B',
                        }}
                      />
                      <span className="text-xs font-bold truncate">{el.name}</span>
                    </div>

                    <div className="flex items-center gap-1 shrink-0">
                      {/* Move Up */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          moveLayer(el.id, 'up');
                        }}
                        className="p-1 hover:bg-white/20 rounded"
                        title="Bring Forward"
                      >
                        <ArrowUp className="w-3 h-3" />
                      </button>

                      {/* Move Down */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          moveLayer(el.id, 'down');
                        }}
                        className="p-1 hover:bg-white/20 rounded"
                        title="Send Backward"
                      >
                        <ArrowDown className="w-3 h-3" />
                      </button>

                      {/* Toggle Visibility */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onUpdateElement(el.id, { visible: !el.visible });
                        }}
                        className="p-1 hover:bg-white/20 rounded"
                      >
                        {el.visible ? (
                          <Eye className="w-3 h-3" />
                        ) : (
                          <EyeOff className="w-3 h-3 opacity-40" />
                        )}
                      </button>

                      {/* Delete */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onDeleteElement(el.id);
                        }}
                        className="p-1 hover:bg-red-500/20 text-red-400 hover:text-red-500 rounded"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
