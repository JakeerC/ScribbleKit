import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { getScribblesByCategory, getScribbleById, SCRIBBLES_ASSETS } from '../src/lib/scribbles-data.ts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const scribbleTsx = fs.readFileSync(path.resolve(__dirname, '../src/components/Scribble.tsx'), 'utf-8');

// Extract getOriginalAnimation implementation from Scribble.tsx source code
const fnMatch = scribbleTsx.match(/export function getOriginalAnimation\([\s\S]*?\n\}/);
if (!fnMatch) {
  throw new Error('Could not find getOriginalAnimation in src/components/Scribble.tsx');
}

// Strip type annotations to create valid JS function
const jsFunctionCode = fnMatch[0]
  .replace('export function getOriginalAnimation(', 'function getOriginalAnimation(')
  .replace(/name:\s*string/g, 'name')
  .replace(/type\?:\s*['"a-z |]+/g, 'type')
  .replace(/:\s*ScribbleAnimation/g, '');

const evalContext = new Function(
  'getScribbleById',
  'SCRIBBLES_ASSETS',
  `${jsFunctionCode}; return getOriginalAnimation;`
);

const getOriginalAnimation = evalContext(getScribbleById, SCRIBBLES_ASSETS);

console.log('🧪 Verifying Planet & Astro default animations from src/components/Scribble.tsx...\n');

// 1. Check all 16 items in planets-astro category
const planets = getScribblesByCategory('planets-astro');
if (planets.length !== 16) {
  throw new Error(`Expected 16 planets-astro items, found ${planets.length}`);
}
console.log(`✓ Found all ${planets.length} planets-astro assets`);

for (const p of planets) {
  const animById = getOriginalAnimation(p.id, p.type);
  const animByName = getOriginalAnimation(p.name, p.type);
  
  if (animById !== 'float') {
    throw new Error(`Asset ID "${p.id}" did not return 'float', got '${animById}'`);
  }
  if (animByName !== 'float') {
    throw new Error(`Asset Name "${p.name}" did not return 'float', got '${animByName}'`);
  }
  console.log(`  ✓ ${p.id.padEnd(30)} ("${p.name}") => ${animById}`);
}

// 2. Check various planet and astro naming keywords and partial matches
const testCases = [
  { input: 'planet', expected: 'float' },
  { input: 'planet-mars', expected: 'float' },
  { input: 'saturn-rings', expected: 'float' }, // saturn was previously rotate, now planet/saturn check
  { input: 'astro-helmet', expected: 'float' },
  { input: 'astronaut-floating', expected: 'float' },
  { input: 'cosmonaut-spacewalk', expected: 'float' },
  { input: 'astro-shuttle', expected: 'float' },
  { input: 'cute-planet', expected: 'float' },
  { input: 'PLANET-EARTH', expected: 'float' }
];

console.log('\n✓ Checking keyword and casing variations:');
for (const tc of testCases) {
  const res = getOriginalAnimation(tc.input);
  if (res !== tc.expected) {
    throw new Error(`Input "${tc.input}" returned '${res}', expected '${tc.expected}'`);
  }
  console.log(`  ✓ "${tc.input}" => '${res}'`);
}

console.log('\n🎉 All planet and astro animation checks PASSED with default "float"!');
