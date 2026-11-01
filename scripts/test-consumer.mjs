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

const algoItems = getScribblesByCategory('algorithms-data-structures');
if (algoItems.length !== 30) throw new Error(`Expected 30 algorithms items, got ${algoItems.length}`);
console.log(`✓ getScribblesByCategory('algorithms-data-structures') returned: ${algoItems.length} items`);

const sysItems = getScribblesByCategory('system-design');
if (sysItems.length !== 30) throw new Error(`Expected 30 system design items, got ${sysItems.length}`);
console.log(`✓ getScribblesByCategory('system-design') returned: ${sysItems.length} items`);

const funkyItems = getScribblesByCategory('funky-complex');
if (funkyItems.length !== 80) throw new Error(`Expected 80 funky items, got ${funkyItems.length}`);
console.log(`✓ getScribblesByCategory('funky-complex') returned: ${funkyItems.length} items`);

const doodleItems = getScribblesByCategory('abstract-doodles');
if (doodleItems.length !== 28) throw new Error(`Expected 28 abstract doodles items, got ${doodleItems.length}`);
console.log(`✓ getScribblesByCategory('abstract-doodles') returned: ${doodleItems.length} items`);

const accentItems = getScribblesByCategory('accents-emphasis');
if (accentItems.length !== 24) throw new Error(`Expected 24 accents items, got ${accentItems.length}`);
console.log(`✓ getScribblesByCategory('accents-emphasis') returned: ${accentItems.length} items`);

const planetItems = getScribblesByCategory('planets-astro');
if (planetItems.length !== 16) throw new Error(`Expected 16 planets-astro items, got ${planetItems.length}`);
console.log(`✓ getScribblesByCategory('planets-astro') returned: ${planetItems.length} items`);

if (SCRIBBLES_ASSETS.length !== 294) throw new Error(`Expected 294 total assets, got ${SCRIBBLES_ASSETS.length}`);
console.log(`✓ Total assets verified: ${SCRIBBLES_ASSETS.length}`);

const horseshoe = getScribbleById('funky-lucky-horseshoe-stars');
if (horseshoe?.name !== 'Pop Horseshoe') throw new Error(`Expected Pop Horseshoe, got ${horseshoe?.name}`);
console.log(`✓ getScribbleById('funky-lucky-horseshoe-stars') returned: "${horseshoe.name}"`);

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

// Test 3b: Render new category SVGs to static HTML markup
const algoHtml = renderToStaticMarkup(
  React.createElement(Scribble, {
    name: 'algo-binary-tree',
    color: '#EA552B',
    size: 48,
    animate: 'draw',
  })
);
if (!algoHtml.includes('<svg') || !algoHtml.includes('viewBox="0 0 180 150"')) {
  throw new Error('algo-binary-tree SVG rendering failed validation');
}
console.log('✓ <Scribble name="algo-binary-tree" /> rendered valid SVG successfully');

const sysHtml = renderToStaticMarkup(
  React.createElement(Scribble, {
    name: 'sys-load-balancer',
    color: '#55BBDA',
    size: 48,
    animate: 'draw',
  })
);
if (!sysHtml.includes('<svg') || !sysHtml.includes('viewBox="0 0 180 150"')) {
  throw new Error('sys-load-balancer SVG rendering failed validation');
}
console.log('✓ <Scribble name="sys-load-balancer" /> rendered valid SVG successfully');

const funkyHtml = renderToStaticMarkup(
  React.createElement(Scribble, {
    name: 'funky-retro-cassette-tape',
    color: '#EA552B',
    size: 48,
  })
);
if (!funkyHtml.includes('<svg') || !funkyHtml.includes('viewBox="0 0 220 145"')) {
  throw new Error('funky-retro-cassette-tape SVG rendering failed validation');
}
console.log('✓ <Scribble name="funky-retro-cassette-tape" /> rendered valid SVG successfully');

const vinylHtml = renderToStaticMarkup(
  React.createElement(Scribble, {
    name: 'funky-vinyl-record-spin',
    color: '#EA552B',
    size: 48,
  })
);
if (!vinylHtml.includes('<svg') || !vinylHtml.includes('viewBox="0 0 190 190"')) {
  throw new Error('funky-vinyl-record-spin SVG rendering failed validation');
}
console.log('✓ <Scribble name="funky-vinyl-record-spin" /> rendered valid SVG successfully');

const whorlHtml = renderToStaticMarkup(
  React.createElement(Scribble, {
    name: 'doodle-fingerprint-whorl',
    color: '#141416',
    size: 48,
  })
);
if (!whorlHtml.includes('<svg') || !whorlHtml.includes('viewBox="0 0 140 140"')) {
  throw new Error('doodle-fingerprint-whorl SVG rendering failed validation');
}
console.log('✓ <Scribble name="doodle-fingerprint-whorl" /> rendered valid SVG successfully');

const scandiHtml = renderToStaticMarkup(
  React.createElement(Scribble, {
    name: 'accent-scandi-sun-dot',
    color: '#F7D046',
    size: 48,
  })
);
if (!scandiHtml.includes('<svg') || !scandiHtml.includes('viewBox="0 0 100 100"')) {
  throw new Error('accent-scandi-sun-dot SVG rendering failed validation');
}
console.log('✓ <Scribble name="accent-scandi-sun-dot" /> rendered valid SVG successfully');

const zigzagHtml = renderToStaticMarkup(
  React.createElement(Scribble, {
    name: 'funky-chisel-marker-zigzag',
    color: '#EA552B',
    size: 48,
  })
);
if (!zigzagHtml.includes('<svg') || !zigzagHtml.includes('viewBox="0 0 150 180"')) {
  throw new Error('funky-chisel-marker-zigzag SVG rendering failed validation');
}
console.log('✓ <Scribble name="funky-chisel-marker-zigzag" /> rendered valid SVG successfully');

const planetSaturnHtml = renderToStaticMarkup(
  React.createElement(Scribble, {
    name: 'planet-kawaii-saturn',
    color: '#F7D046',
    size: 64,
  })
);
if (!planetSaturnHtml.includes('<svg') || !planetSaturnHtml.includes('viewBox="0 0 200 200"')) {
  throw new Error('planet-kawaii-saturn SVG rendering failed validation');
}
console.log('✓ <Scribble name="planet-kawaii-saturn" /> rendered valid SVG successfully');

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
