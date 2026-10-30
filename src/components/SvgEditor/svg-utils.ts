// src/components/SvgEditor/svg-utils.ts
// Utility functions for SVG parsing, curve smoothing, shape generation, and serialization

import { SvgElementData, CanvasDimensions, Point } from './types';

export function generateId(prefix = 'el'): string {
  return `${prefix}-${Math.random().toString(36).substring(2, 9)}`;
}

/**
 * Calculates the bounding box of an SVG path `d` string.
 */
export function getPathBoundingBox(d: string): { x: number; y: number; width: number; height: number } {
  const numbers = d.match(/[-+]?[0-9]*\.?[0-9]+(?:[eE][-+]?[0-9]+)?/g);
  if (!numbers || numbers.length < 2) {
    return { x: 0, y: 0, width: 100, height: 100 };
  }
  let minX = Infinity;
  let maxX = -Infinity;
  let minY = Infinity;
  let maxY = -Infinity;

  for (let i = 0; i < numbers.length; i += 2) {
    const x = parseFloat(numbers[i]);
    const y = parseFloat(numbers[i + 1]);
    if (!isNaN(x)) {
      minX = Math.min(minX, x);
      maxX = Math.max(maxX, x);
    }
    if (!isNaN(y)) {
      minY = Math.min(minY, y);
      maxY = Math.max(maxY, y);
    }
  }

  if (minX === Infinity || minY === Infinity) {
    return { x: 0, y: 0, width: 100, height: 100 };
  }

  const width = Math.max(16, Math.round(maxX - minX));
  const height = Math.max(16, Math.round(maxY - minY));
  return {
    x: Math.round(minX),
    y: Math.round(minY),
    width,
    height,
  };
}

/**
 * Computes the unified SVG transform string for an element.
 */
export function getElementTransform(el: SvgElementData): string {
  const cx = el.x + el.width / 2;
  const cy = el.y + el.height / 2;

  if (el.type === 'path') {
    const origX = el.origX ?? el.x;
    const origY = el.origY ?? el.y;
    const origW = el.origWidth ?? el.width;
    const origH = el.origHeight ?? el.height;
    const scaleX = origW > 0 ? el.width / origW : 1;
    const scaleY = origH > 0 ? el.height / origH : 1;

    let t = '';
    if (el.rotation !== 0) {
      t += `rotate(${el.rotation.toFixed(1)} ${cx.toFixed(1)} ${cy.toFixed(1)}) `;
    }
    t += `translate(${el.x.toFixed(1)}, ${el.y.toFixed(1)}) scale(${scaleX.toFixed(4)}, ${scaleY.toFixed(4)}) translate(${(-origX).toFixed(1)}, ${(-origY).toFixed(1)})`;
    return t.trim();
  }

  if (el.rotation !== 0) {
    return `rotate(${el.rotation.toFixed(1)} ${cx.toFixed(1)} ${cy.toFixed(1)})`;
  }

  return '';
}

/**
 * Converts a sequence of drawn points into a smooth SVG path using Catmull-Rom to Cubic Bezier spline interpolation.
 */
export function pointsToSmoothPath(points: Point[]): string {
  if (points.length === 0) return '';
  if (points.length === 1) {
    return `M ${points[0].x} ${points[0].y} L ${points[0].x + 0.1} ${points[0].y + 0.1}`;
  }
  if (points.length === 2) {
    return `M ${points[0].x} ${points[0].y} L ${points[1].x} ${points[1].y}`;
  }

  let d = `M ${points[0].x.toFixed(1)} ${points[0].y.toFixed(1)}`;

  for (let i = 0; i < points.length - 1; i++) {
    const p0 = i > 0 ? points[i - 1] : points[i];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = i < points.length - 2 ? points[i + 2] : p2;

    const cp1x = p1.x + (p2.x - p0.x) / 6;
    const cp1y = p1.y + (p2.y - p0.y) / 6;
    const cp2x = p2.x - (p3.x - p1.x) / 6;
    const cp2y = p2.y - (p3.y - p1.y) / 6;

    d += ` C ${cp1x.toFixed(1)} ${cp1y.toFixed(1)}, ${cp2x.toFixed(1)} ${cp2y.toFixed(1)}, ${p2.x.toFixed(1)} ${p2.y.toFixed(1)}`;
  }

  return d;
}

/**
 * Generates an organic hand-drawn loop / circle path with slight natural overlap.
 */
export function createOrganicCircle(cx: number, cy: number, rx: number, ry: number): string {
  const steps = 8;
  const points: Point[] = [];
  const angleStep = (Math.PI * 2) / steps;
  for (let i = 0; i <= steps + 1; i++) {
    const angle = i * angleStep;
    const noiseR = 1 + (Math.sin(i * 3.5) * 0.05);
    const x = cx + Math.cos(angle) * rx * noiseR;
    const y = cy + Math.sin(angle) * ry * noiseR;
    points.push({ x, y });
  }
  return pointsToSmoothPath(points);
}

/**
 * Generates an organic hand-drawn rectangle with softened, slightly loose corners.
 */
export function createOrganicRect(x: number, y: number, w: number, h: number): string {
  const jitter = (val: number, amp = 1.5) => val + (Math.sin(val) * amp);
  const p1 = { x: jitter(x), y: jitter(y) };
  const p2 = { x: jitter(x + w), y: jitter(y + 1) };
  const p3 = { x: jitter(x + w - 1), y: jitter(y + h) };
  const p4 = { x: jitter(x + 1), y: jitter(y + h - 1) };

  return `M ${p1.x} ${p1.y} C ${x + w * 0.3} ${y - 1.5}, ${x + w * 0.7} ${y + 1.5}, ${p2.x} ${p2.y} ` +
         `C ${x + w + 1.5} ${y + h * 0.3}, ${x + w - 1.5} ${y + h * 0.7}, ${p3.x} ${p3.y} ` +
         `C ${x + w * 0.7} ${y + h + 1.5}, ${x + w * 0.3} ${y + h - 1.5}, ${p4.x} ${p4.y} ` +
         `C ${x - 1.5} ${y + h * 0.7}, ${x + 1.5} ${y + h * 0.3}, ${p1.x} ${p1.y} Z`;
}

/**
 * Generates an organic hand-drawn directional arrow.
 */
export function createOrganicArrow(x1: number, y1: number, x2: number, y2: number): string {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const angle = Math.atan2(dy, dx);
  const headLen = Math.min(24, Math.sqrt(dx * dx + dy * dy) * 0.35);

  const midX = (x1 + x2) / 2 + Math.cos(angle + Math.PI / 2) * 12;
  const midY = (y1 + y2) / 2 + Math.sin(angle + Math.PI / 2) * 12;

  const arrowLeftX = x2 - headLen * Math.cos(angle - Math.PI / 6);
  const arrowLeftY = y2 - headLen * Math.sin(angle - Math.PI / 6);
  const arrowRightX = x2 - headLen * Math.cos(angle + Math.PI / 6);
  const arrowRightY = y2 - headLen * Math.sin(angle + Math.PI / 6);

  return `M ${x1} ${y1} Q ${midX} ${midY} ${x2} ${y2} M ${arrowLeftX} ${arrowLeftY} Q ${x2 - 2} ${y2 - 2} ${x2} ${y2} M ${arrowRightX} ${arrowRightY} Q ${x2 - 2} ${y2 + 2} ${x2} ${y2}`;
}

/**
 * Generates a playful hand-drawn wavy underline.
 */
export function createOrganicUnderline(x: number, y: number, width: number): string {
  const waves = 4;
  const waveWidth = width / waves;
  let d = `M ${x} ${y}`;

  for (let i = 0; i < waves; i++) {
    const startX = x + i * waveWidth;
    const midX = startX + waveWidth / 2;
    const endX = startX + waveWidth;
    const amp = i % 2 === 0 ? -6 : 6;
    d += ` Q ${midX} ${y + amp} ${endX} ${y}`;
  }

  return d;
}

/**
 * Generates an organic sparkle burst / star.
 */
export function createOrganicStar(cx: number, cy: number, r: number): string {
  const innerR = r * 0.35;
  const points: Point[] = [];
  const numPoints = 8;
  const step = Math.PI / numPoints;

  for (let i = 0; i < numPoints * 2; i++) {
    const isOuter = i % 2 === 0;
    const radius = isOuter ? r : innerR;
    const a = i * step - Math.PI / 2;
    points.push({
      x: cx + Math.cos(a) * radius,
      y: cy + Math.sin(a) * radius,
    });
  }

  let d = `M ${points[0].x.toFixed(1)} ${points[0].y.toFixed(1)}`;
  for (let i = 1; i < points.length; i++) {
    d += ` L ${points[i].x.toFixed(1)} ${points[i].y.toFixed(1)}`;
  }
  d += ' Z';
  return d;
}

/**
 * Generates an organic comic speech bubble.
 */
export function createOrganicBubble(x: number, y: number, w: number, h: number): string {
  const tailX = x + w * 0.3;
  const tailY = y + h;
  const tailTipX = x + w * 0.2;
  const tailTipY = y + h + 24;

  return `M ${x + 20} ${y} ` +
         `C ${x + w * 0.5} ${y - 3}, ${x + w - 20} ${y}, ${x + w} ${y + 20} ` +
         `C ${x + w + 3} ${y + h * 0.5}, ${x + w} ${y + h - 20}, ${x + w - 20} ${y + h} ` +
         `L ${tailX + 24} ${tailY} ` +
         `L ${tailTipX} ${tailTipY} ` +
         `L ${tailX} ${tailY} ` +
         `C ${x + w * 0.2} ${y + h + 2}, ${x + 20} ${y + h}, ${x} ${y + h - 20} ` +
         `C ${x - 3} ${y + h * 0.5}, ${x} ${y + 20}, ${x + 20} ${y} Z`;
}

/**
 * Parses SVG string into structured elements and canvas dimensions.
 */
export function parseSvgStringToElements(
  svgStr: string,
  defaultColor = '#EA552B'
): { elements: SvgElementData[]; dimensions: CanvasDimensions } {
  let dimensions: CanvasDimensions = {
    width: 600,
    height: 400,
    viewBox: '0 0 600 400',
  };

  const elements: SvgElementData[] = [];

  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(svgStr.trim(), 'image/svg+xml');
    const svgEl = doc.querySelector('svg');

    if (svgEl) {
      const viewBoxAttr = svgEl.getAttribute('viewBox');
      const widthAttr = svgEl.getAttribute('width');
      const heightAttr = svgEl.getAttribute('height');

      if (viewBoxAttr) {
        const parts = viewBoxAttr.trim().split(/[\s,]+/).map(Number);
        if (parts.length === 4 && !isNaN(parts[2]) && !isNaN(parts[3])) {
          dimensions = {
            width: parts[2] || 600,
            height: parts[3] || 400,
            viewBox: viewBoxAttr,
          };
        }
      } else if (widthAttr && heightAttr) {
        const w = parseFloat(widthAttr) || 600;
        const h = parseFloat(heightAttr) || 400;
        dimensions = {
          width: w,
          height: h,
          viewBox: `0 0 ${w} ${h}`,
        };
      }

      const graphicEls = Array.from(
        svgEl.querySelectorAll('path, rect, circle, ellipse, text, line, polyline, polygon')
      );

      graphicEls.forEach((el, index) => {
        const tagName = el.tagName.toLowerCase();
        const strokeAttr = el.getAttribute('stroke');
        const fillAttr = el.getAttribute('fill');
        const strokeWidthAttr = el.getAttribute('stroke-width');
        const strokeDasharray = el.getAttribute('stroke-dasharray') || 'none';
        const strokeLinecap = (el.getAttribute('stroke-linecap') as any) || 'round';
        const strokeLinejoin = (el.getAttribute('stroke-linejoin') as any) || 'round';
        const opacityAttr = el.getAttribute('opacity');
        let initialX = 0;
        let initialY = 0;
        let initialRotation = 0;
        const transformAttr = el.getAttribute('transform');
        if (transformAttr) {
          const translateMatch = transformAttr.match(/translate\(([^,\s]+)[,\s]+([^)]+)\)/);
          if (translateMatch) {
            initialX = parseFloat(translateMatch[1]) || 0;
            initialY = parseFloat(translateMatch[2]) || 0;
          }
          const rotateMatch = transformAttr.match(/rotate\(([^)\s]+)/);
          if (rotateMatch) {
            initialRotation = parseFloat(rotateMatch[1]) || 0;
          }
        }

        let stroke = strokeAttr === 'currentColor' ? defaultColor : strokeAttr || 'none';
        let fill = fillAttr === 'currentColor' ? defaultColor : fillAttr || 'none';

        if (stroke === 'none' && fill === 'none') {
          stroke = defaultColor;
        }

        const strokeWidth = strokeWidthAttr ? parseFloat(strokeWidthAttr) : (stroke !== 'none' ? 4.5 : 0);
        const opacity = opacityAttr ? parseFloat(opacityAttr) : 1;

        if (tagName === 'path') {
          const d = el.getAttribute('d') || '';
          if (d) {
            const bbox = getPathBoundingBox(d);
            const posX = initialX !== 0 ? bbox.x + initialX : bbox.x;
            const posY = initialY !== 0 ? bbox.y + initialY : bbox.y;

            elements.push({
              id: generateId(`path-${index + 1}`),
              name: `Path ${index + 1}`,
              type: 'path',
              visible: true,
              locked: false,
              stroke,
              strokeWidth,
              strokeOpacity: 1,
              strokeDasharray,
              strokeLinecap,
              strokeLinejoin,
              fill,
              fillOpacity: 1,
              opacity,
              x: posX,
              y: posY,
              width: bbox.width,
              height: bbox.height,
              rotation: initialRotation,
              origX: bbox.x,
              origY: bbox.y,
              origWidth: bbox.width,
              origHeight: bbox.height,
              d,
            });
          }
        } else if (tagName === 'text') {
          const text = el.textContent || '';
          const x = parseFloat(el.getAttribute('x') || '50');
          const y = parseFloat(el.getAttribute('y') || '50');
          const fontSize = parseFloat(el.getAttribute('font-size') || '28');
          const fontFamily = el.getAttribute('font-family') || 'Space Grotesk';
          const fontWeight = el.getAttribute('font-weight') || 'bold';

          elements.push({
            id: generateId(`text-${index + 1}`),
            name: `Text: "${text.substring(0, 10)}"`,
            type: 'text',
            visible: true,
            locked: false,
            stroke,
            strokeWidth: stroke !== 'none' ? strokeWidth : 0,
            strokeOpacity: 1,
            strokeDasharray,
            strokeLinecap,
            strokeLinejoin,
            fill: fill === 'none' ? defaultColor : fill,
            fillOpacity: 1,
            opacity,
            x,
            y: y - fontSize,
            width: text.length * fontSize * 0.6,
            height: fontSize * 1.2,
            rotation: 0,
            text,
            fontSize,
            fontFamily,
            fontWeight,
          });
        } else if (tagName === 'rect') {
          const x = parseFloat(el.getAttribute('x') || '0');
          const y = parseFloat(el.getAttribute('y') || '0');
          const w = parseFloat(el.getAttribute('width') || '100');
          const h = parseFloat(el.getAttribute('height') || '100');

          elements.push({
            id: generateId(`rect-${index + 1}`),
            name: `Rectangle ${index + 1}`,
            type: 'rect',
            visible: true,
            locked: false,
            stroke,
            strokeWidth,
            strokeOpacity: 1,
            strokeDasharray,
            strokeLinecap,
            strokeLinejoin,
            fill,
            fillOpacity: 1,
            opacity,
            x,
            y,
            width: w,
            height: h,
            rotation: 0,
          });
        } else if (tagName === 'circle') {
          const cx = parseFloat(el.getAttribute('cx') || '50');
          const cy = parseFloat(el.getAttribute('cy') || '50');
          const r = parseFloat(el.getAttribute('r') || '40');

          elements.push({
            id: generateId(`circle-${index + 1}`),
            name: `Circle ${index + 1}`,
            type: 'circle',
            visible: true,
            locked: false,
            stroke,
            strokeWidth,
            strokeOpacity: 1,
            strokeDasharray,
            strokeLinecap,
            strokeLinejoin,
            fill,
            fillOpacity: 1,
            opacity,
            x: cx - r,
            y: cy - r,
            width: r * 2,
            height: r * 2,
            rotation: 0,
          });
        }
      });
    }
  } catch (err) {
    console.error('Error parsing SVG string:', err);
  }

  // Fallback single path if no graphic elements were parsed
  if (elements.length === 0) {
    const dMatch = svgStr.match(/d="([^"]+)"/);
    if (dMatch) {
      const bbox = getPathBoundingBox(dMatch[1]);
      elements.push({
        id: generateId('imported-path'),
        name: 'Imported Scribble',
        type: 'path',
        visible: true,
        locked: false,
        stroke: defaultColor,
        strokeWidth: 4.5,
        strokeOpacity: 1,
        strokeDasharray: 'none',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        fill: 'none',
        fillOpacity: 1,
        opacity: 1,
        x: bbox.x,
        y: bbox.y,
        width: bbox.width,
        height: bbox.height,
        rotation: 0,
        origX: bbox.x,
        origY: bbox.y,
        origWidth: bbox.width,
        origHeight: bbox.height,
        d: dMatch[1],
      });
    }
  }

  return { elements, dimensions };
}

/**
 * Serializes elements into a clean, standalone, standard SVG string.
 */
export function serializeElementsToSvg(
  elements: SvgElementData[],
  dimensions: CanvasDimensions,
  options?: {
    includeFilters?: boolean;
    background?: string;
  }
): string {
  const { width, height, viewBox } = dimensions;
  const includeFilters = options?.includeFilters !== false;

  const hasWiggle = elements.some((el) => el.wiggle?.enabled);
  const hasGlow = elements.some((el) => el.glow?.enabled);

  let defsMarkup = '';
  if (includeFilters && (hasWiggle || hasGlow)) {
    defsMarkup += '  <defs>\n';
    if (hasWiggle) {
      defsMarkup += `    <filter id="scribble-wiggle" x="-10%" y="-10%" width="120%" height="120%">
      <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="4" />
    </filter>\n`;
    }
    if (hasGlow) {
      defsMarkup += `    <filter id="scribble-glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="6" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>\n`;
    }
    defsMarkup += '  </defs>\n';
  }

  let bodyMarkup = '';

  if (options?.background && options.background !== 'transparent') {
    bodyMarkup += `  <rect width="${width}" height="${height}" fill="${options.background}" />\n`;
  }

  elements.forEach((el) => {
    if (!el.visible) return;

    let filterAttr = '';
    if (el.wiggle?.enabled) {
      filterAttr = ' filter="url(#scribble-wiggle)"';
    } else if (el.glow?.enabled) {
      filterAttr = ' filter="url(#scribble-glow)"';
    }

    const transformStr = getElementTransform(el);
    const transformAttr = transformStr ? ` transform="${transformStr}"` : '';

    // Comic 3D Shadow (offset under-layer)
    if (el.comicShadow?.enabled) {
      const sOx = el.comicShadow.offsetX || 6;
      const sOy = el.comicShadow.offsetY || 6;
      const sColor = el.comicShadow.color || '#141416';

      if (el.type === 'path' && el.d) {
        bodyMarkup += `  <!-- Comic Shadow for ${el.name} -->\n`;
        const shadowTransform = transformStr
          ? ` transform="translate(${sOx}, ${sOy}) ${transformStr}"`
          : ` transform="translate(${sOx}, ${sOy})"`;
        bodyMarkup += `  <path d="${el.d}" fill="${el.fill !== 'none' ? sColor : 'none'}" stroke="${el.stroke !== 'none' ? sColor : 'none'}" stroke-width="${el.strokeWidth}" stroke-linecap="${el.strokeLinecap}" stroke-linejoin="${el.strokeLinejoin}"${shadowTransform} opacity="0.9" />\n`;
      } else if (el.type === 'rect') {
        const shadowTransform = el.rotation !== 0
          ? ` transform="rotate(${el.rotation.toFixed(1)} ${(el.x + sOx + el.width / 2).toFixed(1)} ${(el.y + sOy + el.height / 2).toFixed(1)})"`
          : '';
        bodyMarkup += `  <rect x="${el.x + sOx}" y="${el.y + sOy}" width="${el.width}" height="${el.height}" rx="12" fill="${sColor}" stroke="${sColor}" stroke-width="${el.strokeWidth}"${shadowTransform} opacity="0.9" />\n`;
      } else if (el.type === 'circle') {
        const cx = el.x + el.width / 2 + sOx;
        const cy = el.y + el.height / 2 + sOy;
        const r = el.width / 2;
        bodyMarkup += `  <circle cx="${cx}" cy="${cy}" r="${r}" fill="${sColor}" stroke="${sColor}" stroke-width="${el.strokeWidth}" opacity="0.9" />\n`;
      } else if (el.type === 'text') {
        const shadowTransform = el.rotation !== 0
          ? ` transform="rotate(${el.rotation.toFixed(1)} ${(el.x + sOx + el.width / 2).toFixed(1)} ${(el.y + sOy + el.height / 2).toFixed(1)})"`
          : '';
        bodyMarkup += `  <text x="${el.x + sOx}" y="${el.y + (el.fontSize || 32) + sOy}" font-family="${el.fontFamily || 'Space Grotesk'}" font-size="${el.fontSize || 28}" font-weight="${el.fontWeight || 'bold'}" fill="${sColor}" stroke="${sColor}" stroke-width="${el.strokeWidth || 1}"${shadowTransform} opacity="0.9">${el.text || ''}</text>\n`;
      }
    }

    // Main Element
    const strokeProps = `stroke="${el.stroke}" stroke-width="${el.strokeWidth}" stroke-linecap="${el.strokeLinecap}" stroke-linejoin="${el.strokeLinejoin}"${el.strokeDasharray && el.strokeDasharray !== 'none' ? ` stroke-dasharray="${el.strokeDasharray}"` : ''}${el.strokeOpacity < 1 ? ` stroke-opacity="${el.strokeOpacity}"` : ''}`;
    const fillProps = `fill="${el.fill}"${el.fillOpacity < 1 ? ` fill-opacity="${el.fillOpacity}"` : ''}`;
    const opacityProp = el.opacity < 1 ? ` opacity="${el.opacity}"` : '';

    if (el.type === 'path' && el.d) {
      bodyMarkup += `  <path id="${el.id}" d="${el.d}" ${fillProps} ${strokeProps}${opacityProp}${filterAttr}${transformAttr} />\n`;
    } else if (el.type === 'rect') {
      bodyMarkup += `  <rect id="${el.id}" x="${el.x}" y="${el.y}" width="${el.width}" height="${el.height}" rx="12" ${fillProps} ${strokeProps}${opacityProp}${filterAttr}${transformAttr} />\n`;
    } else if (el.type === 'circle') {
      const cx = el.x + el.width / 2;
      const cy = el.y + el.height / 2;
      const r = el.width / 2;
      bodyMarkup += `  <circle id="${el.id}" cx="${cx}" cy="${cy}" r="${r}" ${fillProps} ${strokeProps}${opacityProp}${filterAttr}${transformAttr} />\n`;
    } else if (el.type === 'text') {
      bodyMarkup += `  <text id="${el.id}" x="${el.x}" y="${el.y + (el.fontSize || 32)}" font-family="${el.fontFamily || 'Space Grotesk'}" font-size="${el.fontSize || 28}" font-weight="${el.fontWeight || 'bold'}" ${fillProps} ${strokeProps}${opacityProp}${filterAttr}${transformAttr}>${el.text || ''}</text>\n`;
    }
  });

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" width="${width}" height="${height}" fill="none">
${defsMarkup}${bodyMarkup}</svg>`.trim();
}

/**
 * Serializes elements into a React JSX component code snippet.
 */
export function serializeElementsToJsx(
  elements: SvgElementData[],
  dimensions: CanvasDimensions,
  componentName = 'CustomScribble'
): string {
  const svgMarkup = serializeElementsToSvg(elements, dimensions);
  const jsxBody = svgMarkup
    .replace(/stroke-width/g, 'strokeWidth')
    .replace(/stroke-linecap/g, 'strokeLinecap')
    .replace(/stroke-linejoin/g, 'strokeLinejoin')
    .replace(/stroke-dasharray/g, 'strokeDasharray')
    .replace(/stroke-opacity/g, 'strokeOpacity')
    .replace(/fill-opacity/g, 'fillOpacity')
    .replace(/font-family/g, 'fontFamily')
    .replace(/font-size/g, 'fontSize')
    .replace(/font-weight/g, 'fontWeight')
    .replace(/xmlns="http:\/\/www.w3.org\/2000\/svg"/g, 'xmlns="http://www.w3.org/2000/svg" {...props}');

  return `import React from 'react';

export interface ${componentName}Props extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export const ${componentName}: React.FC<${componentName}Props> = ({ className = '', ...props }) => {
  return (
    ${jsxBody.split('\n').join('\n    ')}
  );
};

export default ${componentName};`;
}

/**
 * Renders an SVG string to a high-resolution PNG blob using off-screen Canvas.
 */
export function renderSvgToPngBlob(
  svgString: string,
  scale = 2,
  background: 'transparent' | 'paper' | 'white' | 'dark' = 'transparent'
): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(svgString, 'image/svg+xml');
    const svgEl = doc.querySelector('svg');

    if (!svgEl) {
      reject(new Error('Invalid SVG content'));
      return;
    }

    let width = 600;
    let height = 400;

    const viewBoxAttr = svgEl.getAttribute('viewBox');
    if (viewBoxAttr) {
      const parts = viewBoxAttr.split(/[\s,]+/).map(Number);
      if (parts.length === 4) {
        width = parts[2] || 600;
        height = parts[3] || 400;
      }
    } else {
      width = parseFloat(svgEl.getAttribute('width') || '600');
      height = parseFloat(svgEl.getAttribute('height') || '400');
    }

    const canvas = document.createElement('canvas');
    canvas.width = width * scale;
    canvas.height = height * scale;
    const ctx = canvas.getContext('2d');

    if (!ctx) {
      reject(new Error('Canvas 2D context not available'));
      return;
    }

    if (background === 'white') {
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    } else if (background === 'paper') {
      ctx.fillStyle = '#FDFBF7';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    } else if (background === 'dark') {
      ctx.fillStyle = '#141416';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    ctx.scale(scale, scale);

    const img = new Image();
    const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);

    img.onload = () => {
      ctx.drawImage(img, 0, 0, width, height);
      URL.revokeObjectURL(url);
      canvas.toBlob((blob) => {
        if (blob) {
          resolve(blob);
        } else {
          reject(new Error('Failed to create PNG blob'));
        }
      }, 'image/png');
    };

    img.onerror = (e) => {
      URL.revokeObjectURL(url);
      reject(new Error('Failed to load SVG into image: ' + e));
    };

    img.src = url;
  });
}
