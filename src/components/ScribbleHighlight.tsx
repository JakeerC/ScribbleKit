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
}

export const ScribbleHighlight: React.FC<ScribbleHighlightProps> = ({
  children,
  styleType = 'underline-wave',
  color = '#EA552B',
  className = '',
  scribbleClassName = '',
  animate = true,
}) => {
  switch (styleType) {
    case 'underline-wave':
      return (
        <span className={`relative inline-block ${className}`}>
          <span className="relative z-10">{children}</span>
          <span className={`absolute left-0 -bottom-2 w-full pointer-events-none ${scribbleClassName}`}>
            <Scribble name="underline-wave-single" color={color} animate={animate} />
          </span>
        </span>
      );

    case 'underline-swoosh':
      return (
        <span className={`relative inline-block ${className}`}>
          <span className="relative z-10">{children}</span>
          <span className={`absolute -left-1 -bottom-2.5 w-[105%] pointer-events-none ${scribbleClassName}`}>
            <Scribble name="underline-calligraphic-swoosh" color={color} animate={animate} />
          </span>
        </span>
      );

    case 'underline-rough':
      return (
        <span className={`relative inline-block ${className}`}>
          <span className="relative z-10">{children}</span>
          <span className={`absolute left-0 -bottom-1.5 w-full pointer-events-none ${scribbleClassName}`}>
            <Scribble name="underline-straight-rough" color={color} animate={animate} />
          </span>
        </span>
      );

    case 'underline-swash':
      return (
        <span className={`relative inline-block ${className}`}>
          <span className="relative z-10">{children}</span>
          <span className={`absolute left-0 -bottom-3 w-[108%] pointer-events-none ${scribbleClassName}`}>
            <Scribble name="underline-swash-accent" color={color} animate={animate} />
          </span>
        </span>
      );

    case 'circle-double':
      return (
        <span className={`relative inline-block px-2.5 py-0.5 ${className}`}>
          <span className="relative z-10">{children}</span>
          <span className={`absolute -inset-x-3.5 -inset-y-2 pointer-events-none flex items-center justify-center ${scribbleClassName}`}>
            <Scribble name="circle-double-loop" color={color} animate={animate} className="w-full h-full" />
          </span>
        </span>
      );

    case 'circle-rough':
      return (
        <span className={`relative inline-block px-2.5 py-0.5 ${className}`}>
          <span className="relative z-10">{children}</span>
          <span className={`absolute -inset-x-3 -inset-y-1.5 pointer-events-none flex items-center justify-center ${scribbleClassName}`}>
            <Scribble name="circle-rough-single" color={color} animate={animate} className="w-full h-full" />
          </span>
        </span>
      );

    case 'circle-capsule':
      return (
        <span className={`relative inline-block px-3 py-1 ${className}`}>
          <span className="relative z-10">{children}</span>
          <span className={`absolute -inset-x-4 -inset-y-2 pointer-events-none flex items-center justify-center ${scribbleClassName}`}>
            <Scribble name="circle-oval-capsule" color={color} animate={animate} className="w-full h-full" />
          </span>
        </span>
      );

    case 'box-rough':
      return (
        <span className={`relative inline-block px-3 py-1 ${className}`}>
          <span className="relative z-10">{children}</span>
          <span className={`absolute -inset-x-2 -inset-y-1.5 pointer-events-none flex items-center justify-center ${scribbleClassName}`}>
            <Scribble name="circle-rough-box" color={color} animate={animate} className="w-full h-full" />
          </span>
        </span>
      );

    case 'arrow-curved':
      return (
        <span className={`relative inline-block ${className}`}>
          <span className="relative z-10">{children}</span>
          <span className={`absolute -right-12 -top-6 w-10 h-10 pointer-events-none ${scribbleClassName}`}>
            <Scribble name="arrow-curved-down-left" color={color} animate={animate} />
          </span>
        </span>
      );

    case 'star-sparkle':
      return (
        <span className={`relative inline-block ${className}`}>
          <span className="relative z-10">{children}</span>
          <span className={`absolute -right-5 -top-4 w-6 h-6 pointer-events-none ${scribbleClassName}`}>
            <Scribble name="star-4-point-sparkle" color={color} animate={animate} />
          </span>
        </span>
      );

    case 'funky-yellow-oval':
      return (
        <span className={`relative inline-block px-4 py-1 ${className}`}>
          <span className={`absolute -inset-x-4 -inset-y-2 pointer-events-none flex items-center justify-center opacity-85 ${scribbleClassName}`}>
            <Scribble name="funky-yellow-spring-oval" color={color} animate={animate === true ? 'wobble' : animate} className="w-full h-full" />
          </span>
          <span className="relative z-10">{children}</span>
        </span>
      );

    case 'funky-comic-bolt':
      return (
        <span className={`relative inline-block ${className}`}>
          <span className="relative z-10">{children}</span>
          <span className={`absolute -right-7 -top-7 w-8 h-10 pointer-events-none ${scribbleClassName}`}>
            <Scribble name="funky-bolt-comic-3d" color={color} animate={animate === true ? 'bounce' : animate} />
          </span>
        </span>
      );

    case 'funky-hologram-seal':
      return (
        <span className={`relative inline-block px-3 py-1 ${className}`}>
          <span className="relative z-10">{children}</span>
          <span className={`absolute -right-8 -top-8 w-12 h-12 pointer-events-none ${scribbleClassName}`}>
            <Scribble name="funky-hologram-starburst-stamp" color={color} animate={animate === true ? 'wobble' : animate} />
          </span>
        </span>
      );

    case 'funky-peace-sign':
      return (
        <span className={`relative inline-block ${className}`}>
          <span className="relative z-10">{children}</span>
          <span className={`absolute -right-9 -top-9 w-10 h-12 pointer-events-none ${scribbleClassName}`}>
            <Scribble name="funky-peace-hand-sign" color={color} animate={animate === true ? 'bounce' : animate} />
          </span>
        </span>
      );

    case 'funky-comic-boom':
      return (
        <span className={`relative inline-block px-3 py-1 ${className}`}>
          <span className={`absolute -inset-x-3.5 -inset-y-3 pointer-events-none flex items-center justify-center opacity-80 ${scribbleClassName}`}>
            <Scribble name="funky-comic-speech-boom" color={color} animate={animate === true ? 'wobble' : animate} className="w-full h-full" />
          </span>
          <span className="relative z-10">{children}</span>
        </span>
      );

    case 'funky-atomic-orbit':
      return (
        <span className={`relative inline-block px-2.5 py-0.5 ${className}`}>
          <span className="relative z-10">{children}</span>
          <span className={`absolute -right-8 -top-8 w-14 h-14 pointer-events-none opacity-90 ${scribbleClassName}`}>
            <Scribble name="funky-atomic-orbit-star" color={color} animate={animate === true ? 'spin' : animate} />
          </span>
        </span>
      );

    case 'funky-ribbon-banner':
      return (
        <span className={`relative inline-block px-5 py-2 ${className}`}>
          <span className={`absolute -inset-x-5 -inset-y-2 pointer-events-none flex items-center justify-center opacity-90 ${scribbleClassName}`}>
            <Scribble name="funky-ribbon-banner-swag" color={color} animate={animate === true ? 'float' : animate} className="w-full h-full" />
          </span>
          <span className="relative z-10">{children}</span>
        </span>
      );

    case 'funky-sun-shades':
      return (
        <span className={`relative inline-block ${className}`}>
          <span className="relative z-10">{children}</span>
          <span className={`absolute -right-10 -top-10 w-12 h-12 pointer-events-none ${scribbleClassName}`}>
            <Scribble name="funky-sun-retro-shades" color={color} animate={animate === true ? 'wobble' : animate} />
          </span>
        </span>
      );

    default:
      return <span className={className}>{children}</span>;
  }
};

export default ScribbleHighlight;
