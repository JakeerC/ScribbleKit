import React from 'react';
import { getScribbleById } from '../lib/scribbles-data';

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
  type?: 'stroke' | 'fill' | 'mixed' | 'raw' | string
): ScribbleAnimation {
  const n = name.toLowerCase();
  if (n.includes('star') || n.includes('sparkle') || n.includes('diamond')) return 'sparkle';
  if (n.includes('orbit') || n.includes('globe') || n.includes('sun') || n.includes('spiral') || n.includes('circle-double')) return 'rotate';
  if (n.includes('spring') || n.includes('coil') || n.includes('blob') || n.includes('wire') || n.includes('ribbon')) return 'float';
  if (n.includes('badge') || n.includes('stamp') || n.includes('wave') || n.includes('boom') || n.includes('shades')) return 'wobble';
  if (n.includes('bolt') || n.includes('peace') || n.includes('heart') || n.includes('hand')) return 'bounce';
  if (type === 'stroke' || n.includes('arrow') || n.includes('underline') || n.includes('circle') || n.includes('box')) return 'draw';
  if (type === 'fill') return 'pop';
  return 'float';
}

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

  const getAnimationClass = (anim: ScribbleAnimation, fallback: string): string => {
    if (!anim) return '';
    if (anim === true || anim === 'original') {
      const orig = getOriginalAnimation(name, asset.type || (asset.rawSvg ? 'raw' : 'stroke'));
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
        className={`inline-block shrink-0 ${getAnimationClass(animate, 'animate-scribble-draw')} ${className}`}
        dangerouslySetInnerHTML={{ __html: asset.rawSvg }}
        {...props}
      />
    );
  }

  if (asset.path) {
    // Check if it's a fill or stroke path
    if (asset.type === 'stroke') {
      const dMatch = asset.path.match(/d="([^"]+)"/);
      const d = dMatch ? dMatch[1] : '';
      const swMatch = asset.path.match(/stroke-width="([^"]+)"/);
      const defaultSw = swMatch ? parseFloat(swMatch[1]) : 4;
      const finalSw = strokeWidth !== undefined ? strokeWidth : defaultSw;

      return (
        <svg
          viewBox={asset.viewBox}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={baseSvgStyle}
          className={`inline-block shrink-0 ${getAnimationClass(animate, 'animate-scribble-draw')} ${className}`}
          {...props}
        >
          <path
            d={d}
            fill="none"
            stroke={effectiveColor}
            strokeWidth={finalSw}
            strokeLinecap="round"
            strokeLinejoin="round"
            style={
              animate === true ||
              animate === 'draw' ||
              (animate === 'original' && getOriginalAnimation(name, asset.type) === 'draw')
                ? {
                    strokeDasharray: 1000,
                    strokeDashoffset: 1000,
                    animation: 'scribbleDraw 1.2s cubic-bezier(0.65, 0, 0.35, 1) forwards',
                  }
                : undefined
            }
          />
        </svg>
      );
    } else {
      // Fill path
      const dMatch = asset.path.match(/d="([^"]+)"/);
      const d = dMatch ? dMatch[1] : '';

      return (
        <svg
          viewBox={asset.viewBox}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={baseSvgStyle}
          className={`inline-block shrink-0 ${getAnimationClass(animate, 'animate-scribble-pop')} ${className}`}
          {...props}
        >
          <path d={d} fill={effectiveColor} />
        </svg>
      );
    }
  }

  return null;
};

export default Scribble;
