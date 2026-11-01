import React from 'react';
import { Scribble, ScribbleAnimation } from './Scribble';

export type HighlightStyle =
  | 'underline-wave'
  | 'underline-swoosh'
  | 'underline-rough'
  | 'underline-swash'
  | 'circle-double'
  | 'circle-rough'
  | 'circle-capsule'
  | 'box-rough'
  | 'arrow-curved'
  | 'star-sparkle'
  | 'funky-yellow-oval'
  | 'funky-comic-bolt'
  | 'funky-hologram-seal'
  | 'funky-peace-sign'
  | 'funky-comic-boom'
  | 'funky-atomic-orbit'
  | 'funky-ribbon-banner'
  | 'funky-sun-shades';

export interface ScribbleHighlightProps {
  children: React.ReactNode;
  styleType?: HighlightStyle;
  color?: string;
  className?: string;
  scribbleClassName?: string;
  animate?: ScribbleAnimation;
  style?: React.CSSProperties;
}

interface HighlightConfig {
  scribbleName: string;
  scribbleClass: string;
  scribbleStyle: React.CSSProperties;
  wrapperClass?: string;
  wrapperStyle?: React.CSSProperties;
  defaultAnim?: ScribbleAnimation;
  scribbleInnerClass?: string;
  behind?: boolean;
}

const HIGHLIGHT_CONFIGS: Record<HighlightStyle, HighlightConfig> = {
  'underline-wave': {
    scribbleName: 'underline-wave-single',
    scribbleClass: 'absolute left-0 -bottom-2 w-full pointer-events-none',
    scribbleStyle: { position: 'absolute', left: 0, bottom: '-0.5rem', width: '100%', pointerEvents: 'none' },
  },
  'underline-swoosh': {
    scribbleName: 'underline-calligraphic-swoosh',
    scribbleClass: 'absolute -left-1 -bottom-2.5 w-[105%] pointer-events-none',
    scribbleStyle: { position: 'absolute', left: '-0.25rem', bottom: '-0.625rem', width: '105%', pointerEvents: 'none' },
  },
  'underline-rough': {
    scribbleName: 'underline-straight-rough',
    scribbleClass: 'absolute left-0 -bottom-1.5 w-full pointer-events-none',
    scribbleStyle: { position: 'absolute', left: 0, bottom: '-0.375rem', width: '100%', pointerEvents: 'none' },
  },
  'underline-swash': {
    scribbleName: 'underline-swash-accent',
    scribbleClass: 'absolute left-0 -bottom-3 w-[108%] pointer-events-none',
    scribbleStyle: { position: 'absolute', left: 0, bottom: '-0.75rem', width: '108%', pointerEvents: 'none' },
  },
  'circle-double': {
    scribbleName: 'circle-double-loop',
    wrapperClass: 'px-2.5 py-0.5',
    wrapperStyle: { padding: '0.125rem 0.625rem' },
    scribbleClass: 'absolute -inset-x-3.5 -inset-y-2 pointer-events-none flex items-center justify-center',
    scribbleStyle: { position: 'absolute', top: '-0.5rem', bottom: '-0.5rem', left: '-0.875rem', right: '-0.875rem', pointerEvents: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' },
    scribbleInnerClass: 'w-full h-full',
  },
  'circle-rough': {
    scribbleName: 'circle-rough-single',
    wrapperClass: 'px-2.5 py-0.5',
    wrapperStyle: { padding: '0.125rem 0.625rem' },
    scribbleClass: 'absolute -inset-x-3 -inset-y-1.5 pointer-events-none flex items-center justify-center',
    scribbleStyle: { position: 'absolute', top: '-0.375rem', bottom: '-0.375rem', left: '-0.75rem', right: '-0.75rem', pointerEvents: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' },
    scribbleInnerClass: 'w-full h-full',
  },
  'circle-capsule': {
    scribbleName: 'circle-oval-capsule',
    wrapperClass: 'px-3 py-1',
    wrapperStyle: { padding: '0.25rem 0.75rem' },
    scribbleClass: 'absolute -inset-x-4 -inset-y-2 pointer-events-none flex items-center justify-center',
    scribbleStyle: { position: 'absolute', top: '-0.5rem', bottom: '-0.5rem', left: '-1rem', right: '-1rem', pointerEvents: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' },
    scribbleInnerClass: 'w-full h-full',
  },
  'box-rough': {
    scribbleName: 'circle-rough-box',
    wrapperClass: 'px-3 py-1',
    wrapperStyle: { padding: '0.25rem 0.75rem' },
    scribbleClass: 'absolute -inset-x-2 -inset-y-1.5 pointer-events-none flex items-center justify-center',
    scribbleStyle: { position: 'absolute', top: '-0.375rem', bottom: '-0.375rem', left: '-0.5rem', right: '-0.5rem', pointerEvents: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' },
    scribbleInnerClass: 'w-full h-full',
  },
  'arrow-curved': {
    scribbleName: 'arrow-curved-down-left',
    scribbleClass: 'absolute -right-12 -top-6 w-10 h-10 pointer-events-none',
    scribbleStyle: { position: 'absolute', right: '-3rem', top: '-1.5rem', width: '2.5rem', height: '2.5rem', pointerEvents: 'none' },
  },
  'star-sparkle': {
    scribbleName: 'star-4-point-sparkle',
    scribbleClass: 'absolute -right-5 -top-4 w-6 h-6 pointer-events-none',
    scribbleStyle: { position: 'absolute', right: '-1.25rem', top: '-1rem', width: '1.5rem', height: '1.5rem', pointerEvents: 'none' },
  },
  'funky-yellow-oval': {
    scribbleName: 'funky-yellow-spring-oval',
    wrapperClass: 'px-4 py-1',
    wrapperStyle: { padding: '0.25rem 1rem' },
    scribbleClass: 'absolute -inset-x-4 -inset-y-2 pointer-events-none flex items-center justify-center opacity-85',
    scribbleStyle: { position: 'absolute', top: '-0.5rem', bottom: '-0.5rem', left: '-1rem', right: '-1rem', pointerEvents: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.85 },
    defaultAnim: 'wobble',
    scribbleInnerClass: 'w-full h-full',
    behind: true,
  },
  'funky-comic-bolt': {
    scribbleName: 'funky-bolt-comic-3d',
    scribbleClass: 'absolute -right-7 -top-7 w-8 h-10 pointer-events-none',
    scribbleStyle: { position: 'absolute', right: '-1.75rem', top: '-1.75rem', width: '2rem', height: '2.5rem', pointerEvents: 'none' },
    defaultAnim: 'bounce',
  },
  'funky-hologram-seal': {
    scribbleName: 'funky-hologram-starburst-stamp',
    wrapperClass: 'px-3 py-1',
    wrapperStyle: { padding: '0.25rem 0.75rem' },
    scribbleClass: 'absolute -right-8 -top-8 w-12 h-12 pointer-events-none',
    scribbleStyle: { position: 'absolute', right: '-2rem', top: '-2rem', width: '3rem', height: '3rem', pointerEvents: 'none' },
    defaultAnim: 'wobble',
  },
  'funky-peace-sign': {
    scribbleName: 'funky-peace-hand-sign',
    scribbleClass: 'absolute -right-9 -top-9 w-10 h-12 pointer-events-none',
    scribbleStyle: { position: 'absolute', right: '-2.25rem', top: '-2.25rem', width: '2.5rem', height: '3rem', pointerEvents: 'none' },
    defaultAnim: 'bounce',
  },
  'funky-comic-boom': {
    scribbleName: 'funky-comic-speech-boom',
    wrapperClass: 'px-3 py-1',
    wrapperStyle: { padding: '0.25rem 0.75rem' },
    scribbleClass: 'absolute -inset-x-3.5 -inset-y-3 pointer-events-none flex items-center justify-center opacity-80',
    scribbleStyle: { position: 'absolute', top: '-0.75rem', bottom: '-0.75rem', left: '-0.875rem', right: '-0.875rem', pointerEvents: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.8 },
    defaultAnim: 'wobble',
    scribbleInnerClass: 'w-full h-full',
    behind: true,
  },
  'funky-atomic-orbit': {
    scribbleName: 'funky-atomic-orbit-star',
    wrapperClass: 'px-2.5 py-0.5',
    wrapperStyle: { padding: '0.125rem 0.625rem' },
    scribbleClass: 'absolute -right-8 -top-8 w-14 h-14 pointer-events-none opacity-90',
    scribbleStyle: { position: 'absolute', right: '-2rem', top: '-2rem', width: '3.5rem', height: '3.5rem', pointerEvents: 'none', opacity: 0.9 },
    defaultAnim: 'spin',
  },
  'funky-ribbon-banner': {
    scribbleName: 'funky-ribbon-banner-swag',
    wrapperClass: 'px-5 py-2',
    wrapperStyle: { padding: '0.5rem 1.25rem' },
    scribbleClass: 'absolute -inset-x-5 -inset-y-2 pointer-events-none flex items-center justify-center opacity-90',
    scribbleStyle: { position: 'absolute', top: '-0.5rem', bottom: '-0.5rem', left: '-1.25rem', right: '-1.25rem', pointerEvents: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.9 },
    defaultAnim: 'float',
    scribbleInnerClass: 'w-full h-full',
    behind: true,
  },
  'funky-sun-shades': {
    scribbleName: 'funky-sun-retro-shades',
    scribbleClass: 'absolute -right-10 -top-10 w-12 h-12 pointer-events-none',
    scribbleStyle: { position: 'absolute', right: '-2.5rem', top: '-2.5rem', width: '3rem', height: '3rem', pointerEvents: 'none' },
    defaultAnim: 'wobble',
  },
};

export const ScribbleHighlight: React.FC<ScribbleHighlightProps> = ({
  children,
  styleType = 'underline-wave',
  color = '#EA552B',
  className = '',
  scribbleClassName = '',
  animate = true,
  style,
}) => {
  const baseWrapperStyle: React.CSSProperties = {
    position: 'relative',
    display: 'inline-block',
    ...style,
  };

  const config = HIGHLIGHT_CONFIGS[styleType];
  if (!config) {
    return <span className={className} style={baseWrapperStyle}>{children}</span>;
  }

  const effectiveAnim = config.defaultAnim && animate === true ? config.defaultAnim : animate;
  const wrapperClass = config.wrapperClass ? `${config.wrapperClass} ` : '';
  const mergedWrapperStyle = config.wrapperStyle ? { ...baseWrapperStyle, ...config.wrapperStyle } : baseWrapperStyle;

  const scribbleElement = (
    <span
      className={`${config.scribbleClass} ${scribbleClassName}`}
      style={config.scribbleStyle}
    >
      <Scribble
        name={config.scribbleName}
        color={color}
        animate={effectiveAnim}
        className={config.scribbleInnerClass}
      />
    </span>
  );

  const textElement = (
    <span className="relative z-10" style={{ position: 'relative', zIndex: 1 }}>
      {children}
    </span>
  );

  return (
    <span className={`relative inline-block ${wrapperClass}${className}`} style={mergedWrapperStyle}>
      {config.behind ? (
        <>
          {scribbleElement}
          {textElement}
        </>
      ) : (
        <>
          {textElement}
          {scribbleElement}
        </>
      )}
    </span>
  );
};

export default ScribbleHighlight;
