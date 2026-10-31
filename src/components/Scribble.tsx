import React from 'react';
import { getScribbleById } from '../lib/scribbles-data';

export type ScribbleAnimation =
  | boolean
  | 'draw'
  | 'float'
  | 'wobble'
  | 'sparkle'
  | 'pulse'
  | 'bounce'
  | 'spin'
  | 'pop';

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

  const getAnimationClass = (anim: ScribbleAnimation, fallback: string) => {
    if (!anim) return '';
    if (anim === true) return fallback;
    switch (anim) {
      case 'draw':
        return 'animate-scribble-draw';
      case 'float':
        return 'animate-float-slow';
      case 'wobble':
        return 'animate-wobble-slow';
      case 'sparkle':
        return 'animate-sparkle';
      case 'pulse':
        return 'animate-pulse-glow';
      case 'bounce':
        return 'animate-bounce-subtle';
      case 'spin':
        return 'animate-spin-slow';
      case 'pop':
        return 'animate-scribble-pop';
      default:
        return fallback;
    }
  };

  if (asset.rawSvg) {
    return (
      <svg
        viewBox={asset.viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          color: effectiveColor,
          width: effectiveWidth,
          height: effectiveHeight,
          ...style,
        }}
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
          style={{
            color: effectiveColor,
            width: effectiveWidth,
            height: effectiveHeight,
            ...style,
          }}
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
              animate === true || animate === 'draw'
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
          style={{
            color: effectiveColor,
            width: effectiveWidth,
            height: effectiveHeight,
            ...style,
          }}
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
