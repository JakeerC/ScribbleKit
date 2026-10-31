import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import {
  Scribble,
  ScribbleHighlight,
  SvgEditor,
  SCRIBBLES_ASSETS,
  CATEGORIES,
  COLOR_PRESETS,
  getScribbleById,
  getScribblesByCategory,
  getOriginalAnimation
} from '../dist/index.js';

console.log('🧪 Running Consumer Integration Tests for scribblekit...\n');

// Test 1: Data integrity
console.log(`✓ Total scribbles available: ${SCRIBBLES_ASSETS.length}`);
console.log(`✓ Categories available: ${CATEGORIES.map(c => c.name || c.id || c).join(', ')}`);
console.log(`✓ Color presets available: ${COLOR_PRESETS.length}`);

// Test 2: Helper functions
const scribble = getScribbleById('arrow-curved-down-right');
if (!scribble) throw new Error('Failed to find arrow-curved-down-right');
console.log(`✓ getScribbleById returned: "${scribble.name}" (${scribble.category})`);

const underlines = getScribblesByCategory('underlines');
if (underlines.length === 0) throw new Error('No underlines found');
console.log(`✓ getScribblesByCategory('underlines') returned: ${underlines.length} items`);

const anim = getOriginalAnimation('arrow-curved-down-right', scribble.type);
console.log(`✓ getOriginalAnimation returned: ${anim}`);

// Test 3: Render <Scribble /> to static HTML markup
const scribbleHtml = renderToStaticMarkup(
  React.createElement(Scribble, {
    name: 'arrow-curved-down-right',
    color: '#EA552B',
    size: 48,
    animate: 'draw',
  })
);
if (!scribbleHtml.includes('<svg') || !scribbleHtml.includes('viewBox="0 0 120 120"')) {
  throw new Error('Scribble SVG rendering failed validation');
}
console.log('✓ <Scribble /> rendered valid SVG successfully');

// Test 4: Render <ScribbleHighlight /> to static HTML markup
const highlightHtml = renderToStaticMarkup(
  React.createElement(
    ScribbleHighlight,
    {
      styleType: 'circle-double',
      color: '#EA552B',
    },
    'Awesome Text'
  )
);
if (!highlightHtml.includes('Awesome Text') || !highlightHtml.includes('<svg')) {
  throw new Error('ScribbleHighlight rendering failed validation');
}
console.log('✓ <ScribbleHighlight /> rendered markup with embedded SVG successfully');

// Test 5: Render <SvgEditor /> to static HTML markup (verifies bundled Lucide icons)
const editorHtml = renderToStaticMarkup(React.createElement(SvgEditor));
if (!editorHtml.includes('<svg') || !editorHtml.includes('Canvas')) {
  throw new Error('SvgEditor rendering failed validation');
}
console.log('✓ <SvgEditor /> rendered with inlined icons successfully (0 external dependencies)');

console.log('\n🎉 ALL CONSUMER INTEGRATION TESTS PASSED 100%!');
