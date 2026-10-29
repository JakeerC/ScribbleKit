// Public library exports for @scribblekit/core

export { Scribble, type ScribbleProps } from './components/Scribble';
export {
  ScribbleHighlight,
  type ScribbleHighlightProps,
  type HighlightStyle,
} from './components/ScribbleHighlight';

export {
  SCRIBBLES_ASSETS,
  CATEGORIES,
  COLOR_PRESETS,
  getScribbleById,
  getScribblesByCategory,
  type ScribbleAsset,
} from './lib/scribbles-data';
