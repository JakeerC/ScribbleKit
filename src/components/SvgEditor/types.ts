// src/components/SvgEditor/types.ts
// Type definitions for ScribbleKit SVG Editor

export type EditorTool =
  | 'select'
  | 'pen'
  | 'shape-rect'
  | 'shape-circle'
  | 'shape-arrow'
  | 'shape-star'
  | 'shape-underline'
  | 'shape-bubble'
  | 'text'
  | 'pan';

export type CanvasBackground = 'paper' | 'grid' | 'dots' | 'dark' | 'transparent';

export type EditorViewMode = 'canvas' | 'split' | 'code';

export interface Point {
  x: number;
  y: number;
}

export interface ComicShadowConfig {
  enabled: boolean;
  offsetX: number;
  offsetY: number;
  color: string;
}

export interface WiggleEffectConfig {
  enabled: boolean;
  scale: number; // 1 to 10
  frequency: number; // 0.01 to 0.1
}

export interface GlowEffectConfig {
  enabled: boolean;
  blur: number;
  color: string;
}

export interface SvgElementData {
  id: string;
  name: string;
  type: 'path' | 'rect' | 'circle' | 'text' | 'group' | 'raw';
  visible: boolean;
  locked: boolean;

  // Visual Styling
  stroke: string;
  strokeWidth: number;
  strokeOpacity: number;
  strokeDasharray?: string; // 'none' | '4 4' | '8 6' | '2 4'
  strokeLinecap: 'round' | 'butt' | 'square';
  strokeLinejoin: 'round' | 'bevel' | 'miter';
  fill: string; // hex or 'none'
  fillOpacity: number;
  opacity: number;

  // Geometry / Bounding Box
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number; // in degrees
  origX?: number; // baseline origin for paths
  origY?: number;
  origWidth?: number;
  origHeight?: number;

  // Specific Element Data
  d?: string; // for path
  text?: string; // for text
  fontSize?: number; // for text
  fontFamily?: string;
  fontWeight?: string;
  rawContent?: string; // for arbitrary SVG element / imported SVG

  // ScribbleKit Special Effects
  comicShadow?: ComicShadowConfig;
  wiggle?: WiggleEffectConfig;
  glow?: GlowEffectConfig;
}

export interface CanvasDimensions {
  width: number;
  height: number;
  viewBox: string;
}

export interface EditorState {
  elements: SvgElementData[];
  selectedId: string | null;
  selectedIds: string[];
  dimensions: CanvasDimensions;
  title: string;
  zoom: number; // 0.25 to 4
  pan: Point;
  activeTool: EditorTool;
  background: CanvasBackground;
  viewMode: EditorViewMode;
  showGrid: boolean;
  snapToGrid: boolean;
  gridSize: number;
  isDrawing: boolean;
  isPanning: boolean;
  penStrokeWidth: number;
  penColor: string;
}

export interface HistorySnapshot {
  elements: SvgElementData[];
  dimensions: CanvasDimensions;
}
