// src/components/SvgEditor/Canvas.tsx
// High-Performance Interactive SVG Canvas with Smooth Direct Manipulation, Window Event Capture & Real-time Scaling

import React, { useRef, useState, useEffect, useCallback } from 'react';
import {
  SvgElementData,
  CanvasDimensions,
  EditorTool,
  CanvasBackground,
  Point,
} from './types';
import {
  pointsToSmoothPath,
  createOrganicCircle,
  createOrganicRect,
  createOrganicArrow,
  createOrganicStar,
  createOrganicUnderline,
  createOrganicBubble,
  generateId,
  getPathBoundingBox,
  getElementTransform,
} from './svg-utils';

interface CanvasProps {
  elements: SvgElementData[];
  selectedId: string | null;
  dimensions: CanvasDimensions;
  activeTool: EditorTool;
  background: CanvasBackground;
  zoom: number;
  pan: Point;
  showGrid: boolean;
  penColor: string;
  penStrokeWidth: number;
  onSelectElement: (id: string | null) => void;
  onUpdateElement: (id: string, updates: Partial<SvgElementData>, pushHistory?: boolean) => void;
  onAddElement: (element: SvgElementData) => void;
  onCommitHistory: () => void;
  onPanChange: (pan: Point) => void;
  onZoomChange: (zoom: number) => void;
  onToolChange?: (tool: EditorTool) => void;
}

export const Canvas: React.FC<CanvasProps> = ({
  elements,
  selectedId,
  dimensions,
  activeTool,
  background,
  zoom,
  pan,
  showGrid,
  penColor,
  penStrokeWidth,
  onSelectElement,
  onUpdateElement,
  onAddElement,
  onCommitHistory,
  onPanChange,
  onZoomChange,
  onToolChange,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  // Drawing state
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentPoints, setCurrentPoints] = useState<Point[]>([]);
  const pointsRef = useRef<Point[]>([]);
  const [shapeStart, setShapeStart] = useState<Point | null>(null);
  const [shapeCurrent, setShapeCurrent] = useState<Point | null>(null);

  // Interaction / Dragging state
  const [dragMode, setDragMode] = useState<
    'none' | 'move' | 'rotate' | 'nw' | 'n' | 'ne' | 'e' | 'se' | 's' | 'sw' | 'w' | 'pan'
  >('none');
  const interactionRef = useRef<{
    mode: 'none' | 'move' | 'rotate' | 'nw' | 'n' | 'ne' | 'e' | 'se' | 's' | 'sw' | 'w' | 'pan';
    startMouse: Point;
    clientStart: Point;
    panStart: Point;
    elementStart: {
      id: string;
      x: number;
      y: number;
      width: number;
      height: number;
      rotation: number;
    } | null;
  }>({
    mode: 'none',
    startMouse: { x: 0, y: 0 },
    clientStart: { x: 0, y: 0 },
    panStart: { x: 0, y: 0 },
    elementStart: null,
  });

  // Spacebar pan toggle
  const [isSpacePressed, setIsSpacePressed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') return;
      if (e.code === 'Space' && !e.repeat) {
        setIsSpacePressed(true);
      }
    };
    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        setIsSpacePressed(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  const selectedElement = elements.find((el) => el.id === selectedId);

  // Convert screen coordinates to canvas SVG viewBox coordinates
  const getSvgCoordinates = useCallback(
    (clientX: number, clientY: number): Point => {
      if (!svgRef.current) return { x: 0, y: 0 };
      const rect = svgRef.current.getBoundingClientRect();
      const scaleX = dimensions.width / rect.width;
      const scaleY = dimensions.height / rect.height;
      return {
        x: (clientX - rect.left) * scaleX,
        y: (clientY - rect.top) * scaleY,
      };
    },
    [dimensions.width, dimensions.height]
  );

  // Window-level pointer movement for 100% reliable tracking
  useEffect(() => {
    const handleWindowPointerMove = (e: PointerEvent) => {
      const inter = interactionRef.current;
      if (inter.mode === 'none') return;

      if (inter.mode === 'pan') {
        const dx = e.clientX - inter.clientStart.x;
        const dy = e.clientY - inter.clientStart.y;
        onPanChange({
          x: inter.panStart.x + dx,
          y: inter.panStart.y + dy,
        });
        return;
      }

      const pt = getSvgCoordinates(e.clientX, e.clientY);
      const elStart = inter.elementStart;
      if (!elStart) return;

      const dx = pt.x - inter.startMouse.x;
      const dy = pt.y - inter.startMouse.y;

      if (inter.mode === 'move') {
        onUpdateElement(elStart.id, {
          x: Math.round(elStart.x + dx),
          y: Math.round(elStart.y + dy),
        }, false);
      } else if (inter.mode === 'rotate') {
        const cx = elStart.x + elStart.width / 2;
        const cy = elStart.y + elStart.height / 2;
        const angleRad = Math.atan2(pt.y - cy, pt.x - cx);
        let angleDeg = Math.round((angleRad * 180) / Math.PI + 90);
        if (e.shiftKey) {
          angleDeg = Math.round(angleDeg / 15) * 15;
        }
        onUpdateElement(elStart.id, { rotation: angleDeg }, false);
      } else if (inter.mode === 'se') {
        let newW = Math.max(16, Math.round(elStart.width + dx));
        let newH = Math.max(16, Math.round(elStart.height + dy));
        if (e.shiftKey && elStart.height > 0) {
          const ratio = elStart.width / elStart.height;
          newH = Math.round(newW / ratio);
        }
        onUpdateElement(elStart.id, { width: newW, height: newH }, false);
      } else if (inter.mode === 'e') {
        const newW = Math.max(16, Math.round(elStart.width + dx));
        onUpdateElement(elStart.id, { width: newW }, false);
      } else if (inter.mode === 's') {
        const newH = Math.max(16, Math.round(elStart.height + dy));
        onUpdateElement(elStart.id, { height: newH }, false);
      } else if (inter.mode === 'ne') {
        let newW = Math.max(16, Math.round(elStart.width + dx));
        let newH = Math.max(16, Math.round(elStart.height - dy));
        if (e.shiftKey && elStart.height > 0) {
          const ratio = elStart.width / elStart.height;
          newH = Math.round(newW / ratio);
        }
        const newY = Math.round(elStart.y + (elStart.height - newH));
        onUpdateElement(elStart.id, { y: newY, width: newW, height: newH }, false);
      } else if (inter.mode === 'sw') {
        let newW = Math.max(16, Math.round(elStart.width - dx));
        let newH = Math.max(16, Math.round(elStart.height + dy));
        if (e.shiftKey && elStart.height > 0) {
          const ratio = elStart.width / elStart.height;
          newH = Math.round(newW / ratio);
        }
        const newX = Math.round(elStart.x + (elStart.width - newW));
        onUpdateElement(elStart.id, { x: newX, width: newW, height: newH }, false);
      } else if (inter.mode === 'nw') {
        let newW = Math.max(16, Math.round(elStart.width - dx));
        let newH = Math.max(16, Math.round(elStart.height - dy));
        if (e.shiftKey && elStart.height > 0) {
          const ratio = elStart.width / elStart.height;
          newH = Math.round(newW / ratio);
        }
        const newX = Math.round(elStart.x + (elStart.width - newW));
        const newY = Math.round(elStart.y + (elStart.height - newH));
        onUpdateElement(elStart.id, { x: newX, y: newY, width: newW, height: newH }, false);
      } else if (inter.mode === 'w') {
        const newW = Math.max(16, Math.round(elStart.width - dx));
        const newX = Math.round(elStart.x + (elStart.width - newW));
        onUpdateElement(elStart.id, { x: newX, width: newW }, false);
      } else if (inter.mode === 'n') {
        const newH = Math.max(16, Math.round(elStart.height - dy));
        const newY = Math.round(elStart.y + (elStart.height - newH));
        onUpdateElement(elStart.id, { y: newY, height: newH }, false);
      }
    };

    const handleWindowPointerUp = () => {
      if (interactionRef.current.mode !== 'none') {
        const wasTransforming = interactionRef.current.mode !== 'pan';
        interactionRef.current = {
          mode: 'none',
          startMouse: { x: 0, y: 0 },
          clientStart: { x: 0, y: 0 },
          panStart: { x: 0, y: 0 },
          elementStart: null,
        };
        setDragMode('none');
        if (wasTransforming) {
          onCommitHistory();
        }
      }
    };

    window.addEventListener('pointermove', handleWindowPointerMove, { passive: true });
    window.addEventListener('pointerup', handleWindowPointerUp);
    return () => {
      window.removeEventListener('pointermove', handleWindowPointerMove);
      window.removeEventListener('pointerup', handleWindowPointerUp);
    };
  }, [getSvgCoordinates, onCommitHistory, onPanChange, onUpdateElement]);

  // Handle pointer down on SVG
  const handlePointerDown = (e: React.PointerEvent<SVGSVGElement>) => {
    if (e.button !== 0 && e.button !== 1) return;

    if (e.button === 1 || activeTool === 'pan' || isSpacePressed) {
      interactionRef.current = {
        mode: 'pan',
        startMouse: { x: 0, y: 0 },
        clientStart: { x: e.clientX, y: e.clientY },
        panStart: { ...pan },
        elementStart: null,
      };
      setDragMode('pan');
      return;
    }

    const pt = getSvgCoordinates(e.clientX, e.clientY);

    if (activeTool === 'pen') {
      setIsDrawing(true);
      pointsRef.current = [pt];
      setCurrentPoints([pt]);
      return;
    }

    if (activeTool.startsWith('shape-')) {
      setIsDrawing(true);
      setShapeStart(pt);
      setShapeCurrent(pt);
      return;
    }

    if (activeTool === 'text') {
      const newText: SvgElementData = {
        id: generateId('text'),
        name: 'Handwritten Text',
        type: 'text',
        visible: true,
        locked: false,
        stroke: 'none',
        strokeWidth: 0,
        strokeOpacity: 1,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        fill: penColor,
        fillOpacity: 1,
        opacity: 1,
        x: pt.x,
        y: pt.y - 32,
        width: 160,
        height: 40,
        rotation: 0,
        text: 'Handwritten Text',
        fontSize: 32,
        fontFamily: 'Space Grotesk',
        fontWeight: 'bold',
      };
      onAddElement(newText);
      onSelectElement(newText.id);
      if (onToolChange) onToolChange('select');
      return;
    }

    if (activeTool === 'select' && (e.target as SVGElement).id === 'canvas-background-hitbox') {
      onSelectElement(null);
    }
  };

  // Handle pointer move for active drawing
  const handlePointerMove = (e: React.PointerEvent<SVGSVGElement>) => {
    if (!isDrawing) return;
    const pt = getSvgCoordinates(e.clientX, e.clientY);

    if (activeTool === 'pen') {
      const pts = pointsRef.current;
      const last = pts[pts.length - 1];
      if (!last || Math.hypot(pt.x - last.x, pt.y - last.y) > 2.5) {
        pts.push(pt);
        setCurrentPoints([...pts]);
      }
      return;
    }

    if (activeTool.startsWith('shape-')) {
      setShapeCurrent(pt);
    }
  };

  // Handle pointer up for committed drawing
  const handlePointerUp = () => {
    if (!isDrawing) return;
    setIsDrawing(false);

    if (activeTool === 'pen') {
      const pts = pointsRef.current;
      if (pts.length > 1) {
        const smoothD = pointsToSmoothPath(pts);
        const bbox = getPathBoundingBox(smoothD);

        const newPathEl: SvgElementData = {
          id: generateId('scribble'),
          name: 'Freehand Scribble',
          type: 'path',
          visible: true,
          locked: false,
          stroke: penColor,
          strokeWidth: penStrokeWidth,
          strokeOpacity: 1,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeDasharray: 'none',
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
          d: smoothD,
        };
        onAddElement(newPathEl);
        onSelectElement(newPathEl.id);
      }
      pointsRef.current = [];
      setCurrentPoints([]);
    } else if (shapeStart && shapeCurrent) {
      commitDrawnShape(shapeStart, shapeCurrent);
      setShapeStart(null);
      setShapeCurrent(null);
    }
  };

  // Commit drawn shape
  const commitDrawnShape = (start: Point, end: Point) => {
    const minX = Math.min(start.x, end.x);
    const minY = Math.min(start.y, end.y);
    const width = Math.max(16, Math.abs(end.x - start.x));
    const height = Math.max(16, Math.abs(end.y - start.y));

    let shapeD = '';
    let shapeName = 'Shape';

    if (activeTool === 'shape-rect') {
      shapeD = createOrganicRect(minX, minY, width, height);
      shapeName = 'Organic Card';
    } else if (activeTool === 'shape-circle') {
      shapeD = createOrganicCircle(minX + width / 2, minY + height / 2, width / 2, height / 2);
      shapeName = 'Organic Loop';
    } else if (activeTool === 'shape-arrow') {
      shapeD = createOrganicArrow(start.x, start.y, end.x, end.y);
      shapeName = 'Scribble Arrow';
    } else if (activeTool === 'shape-star') {
      shapeD = createOrganicStar(minX + width / 2, minY + height / 2, Math.max(width, height) / 2);
      shapeName = 'Sparkle Burst';
    } else if (activeTool === 'shape-underline') {
      shapeD = createOrganicUnderline(minX, start.y, width);
      shapeName = 'Wavy Underline';
    } else if (activeTool === 'shape-bubble') {
      shapeD = createOrganicBubble(minX, minY, width, height);
      shapeName = 'Comic Speech Bubble';
    }

    if (shapeD) {
      const bbox = getPathBoundingBox(shapeD);
      const newEl: SvgElementData = {
        id: generateId('shape'),
        name: shapeName,
        type: 'path',
        visible: true,
        locked: false,
        stroke: penColor,
        strokeWidth: penStrokeWidth,
        strokeOpacity: 1,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeDasharray: 'none',
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
        d: shapeD,
      };
      onAddElement(newEl);
      onSelectElement(newEl.id);
      if (onToolChange) onToolChange('select');
    }
  };

  // Mouse wheel zoom
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (e.ctrlKey || e.metaKey) {
      e.preventDefault();
      const zoomDelta = e.deltaY > 0 ? -0.1 : 0.1;
      const nextZoom = Math.min(3.5, Math.max(0.25, zoom + zoomDelta));
      onZoomChange(Number(nextZoom.toFixed(2)));
    } else {
      onPanChange({
        x: pan.x - e.deltaX * 0.9,
        y: pan.y - e.deltaY * 0.9,
      });
    }
  };

  // Start element move
  const startElementMove = (e: React.PointerEvent, el: SvgElementData) => {
    if (activeTool !== 'select' || el.locked || isSpacePressed) return;
    e.stopPropagation();
    onSelectElement(el.id);
    const pt = getSvgCoordinates(e.clientX, e.clientY);

    interactionRef.current = {
      mode: 'move',
      startMouse: pt,
      clientStart: { x: e.clientX, y: e.clientY },
      panStart: { ...pan },
      elementStart: {
        id: el.id,
        x: el.x,
        y: el.y,
        width: el.width,
        height: el.height,
        rotation: el.rotation,
      },
    };
    setDragMode('move');
  };

  // Start handle transform
  const startHandleTransform = (
    e: React.PointerEvent,
    mode: 'nw' | 'n' | 'ne' | 'e' | 'se' | 's' | 'sw' | 'w' | 'rotate'
  ) => {
    e.stopPropagation();
    if (!selectedElement) return;
    const pt = getSvgCoordinates(e.clientX, e.clientY);

    interactionRef.current = {
      mode,
      startMouse: pt,
      clientStart: { x: e.clientX, y: e.clientY },
      panStart: { ...pan },
      elementStart: {
        id: selectedElement.id,
        x: selectedElement.x,
        y: selectedElement.y,
        width: selectedElement.width,
        height: selectedElement.height,
        rotation: selectedElement.rotation,
      },
    };
    setDragMode(mode);
  };

  // Background styling
  const getCanvasBackgroundClass = () => {
    if (!showGrid && background === 'grid') return 'bg-white';
    switch (background) {
      case 'grid':
        return 'bg-white bg-grid-paper';
      case 'dots':
        return 'bg-[#FDFBF7] bg-dot-paper';
      case 'dark':
        return 'bg-[#141416] bg-dark-grid text-white';
      case 'transparent':
        return 'bg-[repeating-conic-gradient(#e5e7eb_0%_25%,_white_0%_50%)] bg-[length:20px_20px]';
      case 'paper':
      default:
        return 'bg-[#FDFBF7] border-black/10';
    }
  };

  // Compute stable cursor during dragging, hover, and tool usage
  const getCanvasCursor = () => {
    if (dragMode === 'pan' || isSpacePressed) return 'grabbing';
    if (dragMode === 'move') return 'move';
    if (dragMode === 'se' || dragMode === 'nw') return 'nwse-resize';
    if (dragMode === 'ne' || dragMode === 'sw') return 'nesw-resize';
    if (dragMode === 'e' || dragMode === 'w') return 'ew-resize';
    if (dragMode === 's' || dragMode === 'n') return 'ns-resize';
    if (dragMode === 'rotate') return 'crosshair';

    if (activeTool === 'pan') return isSpacePressed ? 'grabbing' : 'grab';
    if (activeTool === 'select') return 'default';
    if (activeTool === 'pen') return 'crosshair';
    if (activeTool.startsWith('shape-')) return 'crosshair';
    if (activeTool === 'text') return 'text';
    return 'default';
  };

  // Helper to render sizing handles with generous 20px hit area and 100% position stability (no hover transform jitter)
  const renderResizeHandle = (
    cx: number,
    cy: number,
    cursor: string,
    mode: 'nw' | 'n' | 'ne' | 'e' | 'se' | 's' | 'sw' | 'w'
  ) => (
    <g
      key={mode}
      style={{ cursor }}
      onPointerDown={(e) => startHandleTransform(e, mode)}
      className="group pointer-events-auto"
    >
      {/* 20px transparent hitbox: ensures mouse never slips off handle boundary */}
      <rect
        x={cx - 10}
        y={cy - 10}
        width={20}
        height={20}
        fill="transparent"
        style={{ cursor }}
      />
      {/* 10px stable visible handle: never shifts or scales on hover */}
      <rect
        x={cx - 5}
        y={cy - 5}
        width={10}
        height={10}
        rx={2}
        fill="#ffffff"
        stroke="#EA552B"
        strokeWidth={2}
        style={{ cursor }}
        className="pointer-events-none group-hover:fill-orange-100"
      />
    </g>
  );

  return (
    <div
      ref={containerRef}
      onWheel={handleWheel}
      className="relative flex-1 w-full h-full overflow-hidden flex items-center justify-center select-none bg-[#EFECE6]/50"
      style={{ cursor: getCanvasCursor() }}
    >
      {/* Outer transform container for Pan and Zoom with direct 1:1 hardware acceleration */}
      <div
        className="origin-center will-change-transform shadow-2xl rounded-2xl"
        style={{
          transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
        }}
      >
        <svg
          ref={svgRef}
          viewBox={dimensions.viewBox}
          width={dimensions.width}
          height={dimensions.height}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          className={`rounded-2xl border border-black/15 shadow-xl overflow-visible ${getCanvasBackgroundClass()}`}
        >
          {/* Dynamic SVG Defs for Filters */}
          <defs>
            <filter id="canvas-wiggle" x="-10%" y="-10%" width="120%" height="120%">
              <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="4" />
            </filter>
            <filter id="canvas-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Background Hitbox for deselection */}
          <rect
            id="canvas-background-hitbox"
            x={0}
            y={0}
            width={dimensions.width}
            height={dimensions.height}
            fill="transparent"
            className="pointer-events-auto"
          />

          {/* Render Elements in Layer Order */}
          {elements.map((el) => {
            if (!el.visible) return null;

            const isSelected = el.id === selectedId;
            const filterAttr = el.wiggle?.enabled
              ? 'url(#canvas-wiggle)'
              : el.glow?.enabled
              ? 'url(#canvas-glow)'
              : undefined;

            const transformString = getElementTransform(el);

            return (
              <g
                key={el.id}
                id={el.id}
                opacity={el.opacity}
                className={`${
                  activeTool === 'select' && dragMode === 'none'
                    ? 'cursor-pointer pointer-events-auto'
                    : 'pointer-events-none'
                }`}
                onPointerDown={(e) => startElementMove(e, el)}
              >
                {/* Comic 3D Shadow layer if enabled */}
                {el.comicShadow?.enabled && (
                  <g opacity={0.85}>
                    {el.type === 'path' && el.d && (
                      <path
                        d={el.d}
                        fill={el.fill !== 'none' ? el.comicShadow.color || '#141416' : 'none'}
                        stroke={el.stroke !== 'none' ? el.comicShadow.color || '#141416' : 'none'}
                        strokeWidth={el.strokeWidth}
                        strokeLinecap={el.strokeLinecap}
                        strokeLinejoin={el.strokeLinejoin}
                        transform={
                          transformString
                            ? `translate(${el.comicShadow.offsetX || 6}, ${el.comicShadow.offsetY || 6}) ${transformString}`
                            : `translate(${el.comicShadow.offsetX || 6}, ${el.comicShadow.offsetY || 6})`
                        }
                      />
                    )}
                    {el.type === 'rect' && (
                      <rect
                        x={el.x + (el.comicShadow.offsetX || 6)}
                        y={el.y + (el.comicShadow.offsetY || 6)}
                        width={el.width}
                        height={el.height}
                        rx={12}
                        fill={el.comicShadow.color || '#141416'}
                        stroke={el.comicShadow.color || '#141416'}
                        strokeWidth={el.strokeWidth}
                        transform={
                          el.rotation !== 0
                            ? `rotate(${el.rotation} ${el.x + (el.comicShadow.offsetX || 6) + el.width / 2} ${el.y + (el.comicShadow.offsetY || 6) + el.height / 2})`
                            : undefined
                        }
                      />
                    )}
                    {el.type === 'circle' && (
                      <circle
                        cx={el.x + el.width / 2 + (el.comicShadow.offsetX || 6)}
                        cy={el.y + el.height / 2 + (el.comicShadow.offsetY || 6)}
                        r={el.width / 2}
                        fill={el.comicShadow.color || '#141416'}
                        stroke={el.comicShadow.color || '#141416'}
                        strokeWidth={el.strokeWidth}
                      />
                    )}
                    {el.type === 'text' && (
                      <text
                        x={el.x + (el.comicShadow.offsetX || 6)}
                        y={el.y + (el.fontSize || 32) + (el.comicShadow.offsetY || 6)}
                        fontFamily={el.fontFamily || 'Space Grotesk'}
                        fontSize={el.fontSize || 32}
                        fontWeight={el.fontWeight || 'bold'}
                        fill={el.comicShadow.color || '#141416'}
                        stroke={el.comicShadow.color || '#141416'}
                        strokeWidth={el.strokeWidth || 1}
                        transform={
                          el.rotation !== 0
                            ? `rotate(${el.rotation} ${el.x + el.width / 2} ${el.y + el.height / 2})`
                            : undefined
                        }
                      >
                        {el.text}
                      </text>
                    )}
                  </g>
                )}

                {/* Main Graphic Layer */}
                {el.type === 'path' && el.d && (
                  <path
                    d={el.d}
                    fill={el.fill}
                    fillOpacity={el.fillOpacity}
                    stroke={el.stroke}
                    strokeWidth={el.strokeWidth}
                    strokeOpacity={el.strokeOpacity}
                    strokeLinecap={el.strokeLinecap}
                    strokeLinejoin={el.strokeLinejoin}
                    strokeDasharray={el.strokeDasharray !== 'none' ? el.strokeDasharray : undefined}
                    transform={transformString || undefined}
                    filter={filterAttr}
                  />
                )}

                {el.type === 'rect' && (
                  <rect
                    x={el.x}
                    y={el.y}
                    width={el.width}
                    height={el.height}
                    rx={12}
                    fill={el.fill}
                    fillOpacity={el.fillOpacity}
                    stroke={el.stroke}
                    strokeWidth={el.strokeWidth}
                    strokeOpacity={el.strokeOpacity}
                    strokeLinecap={el.strokeLinecap}
                    strokeLinejoin={el.strokeLinejoin}
                    strokeDasharray={el.strokeDasharray !== 'none' ? el.strokeDasharray : undefined}
                    transform={
                      el.rotation !== 0
                        ? `rotate(${el.rotation} ${el.x + el.width / 2} ${el.y + el.height / 2})`
                        : undefined
                    }
                    filter={filterAttr}
                  />
                )}

                {el.type === 'circle' && (
                  <circle
                    cx={el.x + el.width / 2}
                    cy={el.y + el.height / 2}
                    r={el.width / 2}
                    fill={el.fill}
                    fillOpacity={el.fillOpacity}
                    stroke={el.stroke}
                    strokeWidth={el.strokeWidth}
                    strokeOpacity={el.strokeOpacity}
                    strokeLinecap={el.strokeLinecap}
                    strokeLinejoin={el.strokeLinejoin}
                    strokeDasharray={el.strokeDasharray !== 'none' ? el.strokeDasharray : undefined}
                    filter={filterAttr}
                  />
                )}

                {el.type === 'text' && (
                  <text
                    x={el.x}
                    y={el.y + (el.fontSize || 32)}
                    fontFamily={el.fontFamily || 'Space Grotesk'}
                    fontSize={el.fontSize || 32}
                    fontWeight={el.fontWeight || 'bold'}
                    fill={el.fill}
                    fillOpacity={el.fillOpacity}
                    stroke={el.stroke !== 'none' ? el.stroke : undefined}
                    strokeWidth={el.strokeWidth || undefined}
                    strokeOpacity={el.strokeOpacity}
                    transform={
                      el.rotation !== 0
                        ? `rotate(${el.rotation} ${el.x + el.width / 2} ${el.y + el.height / 2})`
                        : undefined
                    }
                    filter={filterAttr}
                  >
                    {el.text}
                  </text>
                )}

                {/* Subtle outline for selected element if not using bounding box */}
                {isSelected && activeTool !== 'select' && (
                  <rect
                    x={el.x - 4}
                    y={el.y - 4}
                    width={el.width + 8}
                    height={el.height + 8}
                    fill="none"
                    stroke="#EA552B"
                    strokeWidth={1.5}
                    strokeDasharray="4 4"
                    className="pointer-events-none"
                  />
                )}
              </g>
            );
          })}

          {/* Interactive Bounding Box & 8 Handles for Selected Element */}
          {selectedElement && activeTool === 'select' && (
            <g
              transform={
                selectedElement.rotation !== 0
                  ? `rotate(${selectedElement.rotation} ${selectedElement.x + selectedElement.width / 2} ${selectedElement.y + selectedElement.height / 2})`
                  : undefined
              }
              className="pointer-events-auto"
            >
              {/* Outer Bounding Box Border */}
              <rect
                x={selectedElement.x}
                y={selectedElement.y}
                width={selectedElement.width}
                height={selectedElement.height}
                fill="none"
                stroke="#EA552B"
                strokeWidth={1.5}
                className="pointer-events-none"
              />

              {/* Rotation Handle with Generous Hitbox & Stable Position */}
              <g
                style={{ cursor: 'crosshair' }}
                onPointerDown={(e) => startHandleTransform(e, 'rotate')}
                className="group pointer-events-auto"
              >
                <line
                  x1={selectedElement.x + selectedElement.width / 2}
                  y1={selectedElement.y}
                  x2={selectedElement.x + selectedElement.width / 2}
                  y2={selectedElement.y - 24}
                  stroke="#EA552B"
                  strokeWidth={1.5}
                  className="pointer-events-none"
                />
                {/* 24px transparent hit area so crosshair cursor never jitters/flickers */}
                <circle
                  cx={selectedElement.x + selectedElement.width / 2}
                  cy={selectedElement.y - 24}
                  r={12}
                  fill="transparent"
                  style={{ cursor: 'crosshair' }}
                />
                <circle
                  cx={selectedElement.x + selectedElement.width / 2}
                  cy={selectedElement.y - 24}
                  r={6}
                  fill="#EA552B"
                  stroke="#ffffff"
                  strokeWidth={2}
                  className="pointer-events-none group-hover:fill-black"
                />
              </g>

              {/* 8-Directional Stable Sizing Handles */}
              {renderResizeHandle(
                selectedElement.x + selectedElement.width,
                selectedElement.y + selectedElement.height,
                'nwse-resize',
                'se'
              )}
              {renderResizeHandle(
                selectedElement.x + selectedElement.width,
                selectedElement.y + selectedElement.height / 2,
                'ew-resize',
                'e'
              )}
              {renderResizeHandle(
                selectedElement.x + selectedElement.width / 2,
                selectedElement.y + selectedElement.height,
                'ns-resize',
                's'
              )}
              {renderResizeHandle(
                selectedElement.x,
                selectedElement.y,
                'nwse-resize',
                'nw'
              )}
              {renderResizeHandle(
                selectedElement.x + selectedElement.width,
                selectedElement.y,
                'nesw-resize',
                'ne'
              )}
              {renderResizeHandle(
                selectedElement.x,
                selectedElement.y + selectedElement.height,
                'nesw-resize',
                'sw'
              )}
              {renderResizeHandle(
                selectedElement.x + selectedElement.width / 2,
                selectedElement.y,
                'ns-resize',
                'n'
              )}
              {renderResizeHandle(
                selectedElement.x,
                selectedElement.y + selectedElement.height / 2,
                'ew-resize',
                'w'
              )}
            </g>
          )}

          {/* Active Freehand Pen Trail Preview */}
          {isDrawing && activeTool === 'pen' && currentPoints.length > 1 && (
            <path
              d={pointsToSmoothPath(currentPoints)}
              fill="none"
              stroke={penColor}
              strokeWidth={penStrokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="pointer-events-none opacity-90"
            />
          )}

          {/* Active Shape Drawing Preview */}
          {isDrawing && shapeStart && shapeCurrent && (
            <g className="pointer-events-none opacity-70">
              {activeTool === 'shape-rect' && (
                <path
                  d={createOrganicRect(
                    Math.min(shapeStart.x, shapeCurrent.x),
                    Math.min(shapeStart.y, shapeCurrent.y),
                    Math.abs(shapeCurrent.x - shapeStart.x),
                    Math.abs(shapeCurrent.y - shapeStart.y)
                  )}
                  fill="none"
                  stroke={penColor}
                  strokeWidth={penStrokeWidth}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              )}
              {activeTool === 'shape-circle' && (
                <path
                  d={createOrganicCircle(
                    (shapeStart.x + shapeCurrent.x) / 2,
                    (shapeStart.y + shapeCurrent.y) / 2,
                    Math.abs(shapeCurrent.x - shapeStart.x) / 2,
                    Math.abs(shapeCurrent.y - shapeStart.y) / 2
                  )}
                  fill="none"
                  stroke={penColor}
                  strokeWidth={penStrokeWidth}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              )}
              {activeTool === 'shape-arrow' && (
                <path
                  d={createOrganicArrow(shapeStart.x, shapeStart.y, shapeCurrent.x, shapeCurrent.y)}
                  fill="none"
                  stroke={penColor}
                  strokeWidth={penStrokeWidth}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              )}
              {activeTool === 'shape-star' && (
                <path
                  d={createOrganicStar(
                    (shapeStart.x + shapeCurrent.x) / 2,
                    (shapeStart.y + shapeCurrent.y) / 2,
                    Math.max(
                      Math.abs(shapeCurrent.x - shapeStart.x),
                      Math.abs(shapeCurrent.y - shapeStart.y)
                    ) / 2
                  )}
                  fill="none"
                  stroke={penColor}
                  strokeWidth={penStrokeWidth}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              )}
              {activeTool === 'shape-underline' && (
                <path
                  d={createOrganicUnderline(
                    Math.min(shapeStart.x, shapeCurrent.x),
                    shapeStart.y,
                    Math.abs(shapeCurrent.x - shapeStart.x)
                  )}
                  fill="none"
                  stroke={penColor}
                  strokeWidth={penStrokeWidth}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              )}
              {activeTool === 'shape-bubble' && (
                <path
                  d={createOrganicBubble(
                    Math.min(shapeStart.x, shapeCurrent.x),
                    Math.min(shapeStart.y, shapeCurrent.y),
                    Math.abs(shapeCurrent.x - shapeStart.x),
                    Math.abs(shapeCurrent.y - shapeStart.y)
                  )}
                  fill="none"
                  stroke={penColor}
                  strokeWidth={penStrokeWidth}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              )}
            </g>
          )}
        </svg>
      </div>

      {/* Floating Canvas Navigation Overlay: Zoom & Reset */}
      <div className="absolute bottom-4 left-4 z-20 flex items-center gap-1.5 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-2xl border border-black/10 shadow-lg text-xs font-semibold text-scribble-dark">
        <button
          onClick={() => onZoomChange(Math.max(0.25, Number((zoom - 0.15).toFixed(2))))}
          className="p-1 rounded-lg hover:bg-black/5 active:scale-95"
          title="Zoom Out (Ctrl -)"
        >
          -
        </button>
        <span className="w-12 text-center font-mono font-bold">{Math.round(zoom * 100)}%</span>
        <button
          onClick={() => onZoomChange(Math.min(3.5, Number((zoom + 0.15).toFixed(2))))}
          className="p-1 rounded-lg hover:bg-black/5 active:scale-95"
          title="Zoom In (Ctrl +)"
        >
          +
        </button>
        <span className="h-4 w-px bg-black/10 mx-1" />
        <button
          onClick={() => {
            onZoomChange(1);
            onPanChange({ x: 0, y: 0 });
          }}
          className="px-2 py-0.5 rounded-lg hover:bg-black/5 text-[11px] font-bold text-black/60 hover:text-black"
          title="Reset to 100% & Center"
        >
          Reset
        </button>
      </div>
    </div>
  );
};
