import React from 'react';
import { getScribbleById, SCRIBBLES_ASSETS } from '../lib/scribbles-data';

export type ScribbleAnimation =
  | boolean
  | 'none'
  | 'original'
  | 'draw'
  | 'rotate'
  | 'sparkle'
  | 'float'
  | 'wobble'
  | 'pulse'
  | 'bounce'
  | 'spin'
  | 'pop';

export function getOriginalAnimation(
  name: string,
  type?: 'stroke' | 'fill' | 'mixed' | 'raw'
): ScribbleAnimation {
  const n = name.toLowerCase();
  const asset = getScribbleById(name) || SCRIBBLES_ASSETS.find((a) => a.name.toLowerCase() === n);
  if (
    asset?.category === 'planets-astro' ||
    n.startsWith('planet') ||
    n.startsWith('astro') ||
    n.includes('planet') ||
    n.includes('astro') ||
    n.includes('cosmonaut') ||
    n.includes('astronaut') ||
    n.includes('saturn') ||
    n.includes('jupiter') ||
    n.includes('exoplanet')
  ) {
    return 'float';
  }
  if (n.includes('star') || n.includes('sparkle') || n.includes('diamond') || n.includes('cache') || n.includes('crystal') || n.includes('gem') || n.includes('spark') || n.includes('disco') || n.includes('camera') || n.includes('potion') || n.includes('confetti') || n.includes('spray') || n.includes('grain') || n.includes('stipple') || n.includes('asterisk')) return 'sparkle';
  if (n.includes('orbit') || n.includes('globe') || n.includes('sun') || n.includes('spiral') || n.includes('circle-double') || n.includes('cdn') || n.includes('yin-yang') || n.includes('yinyang') || n.includes('vinyl') || n.includes('spin') || n.includes('clock') || n.includes('stopwatch') || n.includes('ring')) return 'rotate';
  if (n.includes('spring') || n.includes('coil') || n.includes('blob') || n.includes('wire') || n.includes('ribbon') || n.includes('cloud') || n.includes('stream') || n.includes('steam') || n.includes('cylinder') || n.includes('ufo') || n.includes('ghost') || n.includes('lamp') || n.includes('cocktail') || n.includes('cup') || n.includes('puddle') || n.includes('wavy') || n.includes('strands')) return 'float';
  if (n.includes('badge') || n.includes('medal') || n.includes('rosette') || n.includes('shield') || n.includes('stamp') || n.includes('wave') || n.includes('boom') || n.includes('shades') || n.includes('breaker') || n.includes('cassette') || n.includes('boombox') || n.includes('tv') || n.includes('melting') || n.includes('flame') || n.includes('chaos') || n.includes('ice-cream') || n.includes('hot-dog') || n.includes('zigzag') || n.includes('bullseye')) return 'wobble';
  if (n.includes('bolt') || n.includes('peace') || n.includes('heart') || n.includes('hand') || n.includes('rocket') || n.includes('flower') || n.includes('skate') || n.includes('gameboy') || n.includes('controller') || n.includes('trophy') || n.includes('crown') || n.includes('sneaker') || n.includes('cherries') || n.includes('horseshoe') || n.includes('joystick') || n.includes('cat') || n.includes('cupid') || n.includes('pen') || n.includes('marker') || n.includes('chevron') || n.includes('caterpillar')) return 'bounce';
  if (n.includes('gateway') || n.includes('server') || n.includes('database') || n.includes('leader') || n.includes('eye') || n.includes('lock') || n.includes('dns') || n.includes('saga')) return 'pulse';
  if (type === 'stroke' || n.includes('arrow') || n.includes('underline') || n.includes('circle') || n.includes('box') || n.includes('algo') || n.includes('sys') || n.includes('hatch') || n.includes('whorl') || n.includes('knot') || n.includes('frond')) return 'draw';
  if (type === 'fill' || n.includes('watermelon') || n.includes('cookie') || n.includes('floppy') || n.includes('pebble')) return 'pop';
  return 'float';
}

export const getAnimationClass = (
  anim: ScribbleAnimation,
  fallback: string,
  name?: string,
  type?: 'stroke' | 'fill' | 'mixed' | 'raw'
): string => {
  if (!anim) return '';
  if (anim === true || anim === 'original') {
    const orig = getOriginalAnimation(name || '', type);
    return getAnimationClass(orig, fallback);
  }
  switch (anim) {
    case 'draw':
      return 'animate-scribble-draw';
    case 'rotate':
    case 'spin':
      return 'animate-rotate';
    case 'sparkle':
      return 'animate-sparkle';
    case 'float':
      return 'animate-float-slow';
    case 'wobble':
      return 'animate-wobble-slow';
    case 'pulse':
      return 'animate-pulse-glow';
    case 'bounce':
      return 'animate-bounce-subtle';
    case 'pop':
      return 'animate-scribble-pop';
    default:
      return fallback;
  }
};

const parsePathData = (path: string) => {
  const dMatch = /d="([^"]+)"/.exec(path);
  const swMatch = /stroke-width="([^"]+)"/.exec(path);
  return {
    d: dMatch ? dMatch[1] : '',
    strokeWidth: swMatch ? Number.parseFloat(swMatch[1]) : 4,
  };
};

const isDrawAnimated = (anim: ScribbleAnimation, name: string, type?: 'stroke' | 'fill' | 'mixed' | 'raw') => {
  return anim === true || anim === 'draw' || (anim === 'original' && getOriginalAnimation(name, type) === 'draw');
};

export interface ScribbleProps extends React.SVGProps<SVGSVGElement> {
  name: string;
  color?: string;
  size?: number | string;
  strokeWidth?: number;
  animate?: ScribbleAnimation;
  className?: string;
}

export const Scribble: React.FC<ScribbleProps> = ({
  name,
  color,
  size,
  width,
  height,
  strokeWidth,
  animate = false,
  className = '',
  style,
  ...props
}) => {
  const asset = getScribbleById(name);

  if (!asset) {
    return (
      <span className="inline-block text-xs font-mono text-red-500 bg-red-50 px-2 py-1 rounded">
        Scribble "{name}" not found
      </span>
    );
  }

  const effectiveColor = color || asset.defaultColor || 'currentColor';
  const effectiveWidth = size || width || '100%';
  const effectiveHeight = size || height || 'auto';
  const assetType = asset.type || (asset.rawSvg ? 'raw' : 'stroke');

  const baseSvgStyle: React.CSSProperties = {
    color: effectiveColor,
    width: effectiveWidth,
    height: effectiveHeight,
    display: 'inline-block',
    flexShrink: 0,
    ...style,
  };

  if (asset.rawSvg) {
    return (
      <svg
        viewBox={asset.viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={baseSvgStyle}
        className={`inline-block shrink-0 ${getAnimationClass(animate, 'animate-scribble-draw', name, assetType)} ${className}`}
        dangerouslySetInnerHTML={{ __html: asset.rawSvg }}
        {...props}
      />
    );
  }

  if (asset.path) {
    const { d, strokeWidth: defaultSw } = parsePathData(asset.path);

    if (asset.type === 'stroke') {
      const finalSw = strokeWidth !== undefined ? strokeWidth : defaultSw;
      const strokeAnimStyle = isDrawAnimated(animate, name, asset.type)
        ? {
            strokeDasharray: 1000,
            strokeDashoffset: 1000,
            animation: 'scribbleDraw 1.2s cubic-bezier(0.65, 0, 0.35, 1) forwards',
          }
        : undefined;

      return (
        <svg
          viewBox={asset.viewBox}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={baseSvgStyle}
          className={`inline-block shrink-0 ${getAnimationClass(animate, 'animate-scribble-draw', name, assetType)} ${className}`}
          {...props}
        >
          <path
            d={d}
            fill="none"
            stroke={effectiveColor}
            strokeWidth={finalSw}
            strokeLinecap="round"
            strokeLinejoin="round"
            style={strokeAnimStyle}
          />
        </svg>
      );
    }

    return (
      <svg
        viewBox={asset.viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={baseSvgStyle}
        className={`inline-block shrink-0 ${getAnimationClass(animate, 'animate-scribble-pop', name, assetType)} ${className}`}
        {...props}
      >
        <path d={d} fill={effectiveColor} />
      </svg>
    );
  }

  return null;
};

export default Scribble;
