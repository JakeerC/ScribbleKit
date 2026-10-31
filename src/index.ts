// Public library exports for @scribblekit/core

export {
  Scribble,
  type ScribbleProps,
  type ScribbleAnimation,
  getOriginalAnimation,
} from './components/Scribble';
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

export { SvgEditor } from './components/SvgEditor';
export * from './components/SvgEditor/types';
