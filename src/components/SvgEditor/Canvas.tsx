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
  isBoxIntersecting,
  getCombinedBoundingBox,
} from './svg-utils';

interface CanvasProps {
  elements: SvgElementData[];
  selectedId: string | null;
  selectedIds?: string[];
  dimensions: CanvasDimensions;
  activeTool: EditorTool;
  background: CanvasBackground;
  zoom: number;
  pan: Point;
  showGrid: boolean;
  penColor: string;
  penStrokeWidth: number;
  onSelectElement: (id: string | null, isMultiToggle?: boolean) => void;
  onSelectMultiple?: (ids: string[], isAdditive?: boolean) => void;
  onUpdateElement: (id: string, updates: Partial<SvgElementData>, pushHistory?: boolean) => void;
  onUpdateMultipleElements?: (updatesList: { id: string; updates: Partial<SvgElementData> }[], pushHistory?: boolean) => void;
  onAddElement: (element: SvgElementData) => void;
  onCommitHistory: () => void;
  onPanChange: (pan: Point) => void;
  onZoomChange: (zoom: number) => void;
  onToolChange?: (tool: EditorTool) => void;
}

export const Canvas: React.FC<CanvasProps> = ({
  elements,
  selectedId,
  selectedIds,
  dimensions,
  activeTool,
  background,
  zoom,
  pan,
  showGrid,
  penColor,
  penStrokeWidth,
  onSelectElement,
  onSelectMultiple,
  onUpdateElement,
  onUpdateMultipleElements,
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

  // Interaction / Dragging / Marquee state
  const [dragMode, setDragMode] = useState<
    'none' | 'move' | 'rotate' | 'nw' | 'n' | 'ne' | 'e' | 'se' | 's' | 'sw' | 'w' | 'pan' | 'marquee'
  >('none');

  const [marqueeBox, setMarqueeBox] = useState<{
    x: number;
    y: number;
    width: number;
    height: number;
  } | null>(null);
  const marqueeBoxRef = useRef(marqueeBox);
  marqueeBoxRef.current = marqueeBox;

  const interactionRef = useRef<{
    mode: 'none' | 'move' | 'rotate' | 'nw' | 'n' | 'ne' | 'e' | 'se' | 's' | 'sw' | 'w' | 'pan' | 'marquee';
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
    elementsStart?: { id: string; x: number; y: number }[];
    groupStart?: {
      box: { x: number; y: number; width: number; height: number };
      elements: {
        id: string;
        x: number;
        y: number;
        width: number;
        height: number;
        fontSize?: number;
      }[];
    } | null;
    isAdditiveMarquee?: boolean;
    hasMoved?: boolean;
    marqueeBox?: { x: number; y: number; width: number; height: number };
  }>({
    mode: 'none',
    startMouse: { x: 0, y: 0 },
    clientStart: { x: 0, y: 0 },
    panStart: { x: 0, y: 0 },
    elementStart: null,
    groupStart: null,
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

  const activeSelectedIds = selectedIds !== undefined
    ? selectedIds
    : selectedId
    ? [selectedId]
    : [];

  const selectedElements = elements.filter((el) => activeSelectedIds.includes(el.id));
  const isMultiSelect = selectedElements.length > 1;
  const combinedBox = isMultiSelect ? getCombinedBoundingBox(selectedElements) : null;
  const singleSelectedElement = selectedElements.length === 1 ? selectedElements[0] : null;
  const selectedElement = singleSelectedElement;

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

      // Handle Marquee Selection Drag (Right-click or background drag)
      if (inter.mode === 'marquee') {
        const x = Math.min(inter.startMouse.x, pt.x);
        const y = Math.min(inter.startMouse.y, pt.y);
        const width = Math.abs(pt.x - inter.startMouse.x);
        const height = Math.abs(pt.y - inter.startMouse.y);
        inter.hasMoved = true;
        inter.marqueeBox = { x, y, width, height };
        setMarqueeBox({ x, y, width, height });
        return;
      }

      const dx = pt.x - inter.startMouse.x;
      const dy = pt.y - inter.startMouse.y;

      // Handle Multi-Selection Group Resizing (Proportional Scaling & Repositioning)
      if (inter.groupStart) {
        inter.hasMoved = true;
        const orig = inter.groupStart.box;
        let newX = orig.x;
        let newY = orig.y;
        let newW = orig.width;
        let newH = orig.height;

        if (inter.mode === 'se') {
          newW = Math.max(20, orig.width + dx);
          newH = Math.max(20, orig.height + dy);
          if (e.shiftKey && orig.height > 0) {
            newH = Math.round(orig.height * (newW / orig.width));
          }
        } else if (inter.mode === 'e') {
          newW = Math.max(20, orig.width + dx);
          if (e.shiftKey && orig.height > 0) {
            newH = Math.round(orig.height * (newW / orig.width));
          }
        } else if (inter.mode === 's') {
          newH = Math.max(20, orig.height + dy);
          if (e.shiftKey && orig.width > 0) {
            newW = Math.round(orig.width * (newH / orig.height));
          }
        } else if (inter.mode === 'ne') {
          newW = Math.max(20, orig.width + dx);
          newH = Math.max(20, orig.height - dy);
          if (e.shiftKey && orig.height > 0) {
            newH = Math.round(orig.height * (newW / orig.width));
          }
          newY = orig.y + (orig.height - newH);
        } else if (inter.mode === 'sw') {
          newW = Math.max(20, orig.width - dx);
          newH = Math.max(20, orig.height + dy);
          if (e.shiftKey && orig.height > 0) {
            newH = Math.round(orig.height * (newW / orig.width));
          }
          newX = orig.x + (orig.width - newW);
        } else if (inter.mode === 'nw') {
          newW = Math.max(20, orig.width - dx);
          newH = Math.max(20, orig.height - dy);
          if (e.shiftKey && orig.height > 0) {
            newH = Math.round(orig.height * (newW / orig.width));
          }
          newX = orig.x + (orig.width - newW);
          newY = orig.y + (orig.height - newH);
        } else if (inter.mode === 'w') {
          newW = Math.max(20, orig.width - dx);
          if (e.shiftKey && orig.height > 0) {
            newH = Math.round(orig.height * (newW / orig.width));
          }
          newX = orig.x + (orig.width - newW);
        } else if (inter.mode === 'n') {
          newH = Math.max(20, orig.height - dy);
          if (e.shiftKey && orig.width > 0) {
            newW = Math.round(orig.width * (newH / orig.height));
          }
          newY = orig.y + (orig.height - newH);
        }

        const scaleX = orig.width > 0 ? newW / orig.width : 1;
        const scaleY = orig.height > 0 ? newH / orig.height : 1;

        const updatesList = inter.groupStart.elements.map((el) => {
          const relX = el.x - orig.x;
          const relY = el.y - orig.y;
          const scaledX = Math.round(newX + relX * scaleX);
          const scaledY = Math.round(newY + relY * scaleY);
          const scaledW = Math.max(4, Math.round(el.width * scaleX));
          const scaledH = Math.max(4, Math.round(el.height * scaleY));

          const u: Partial<SvgElementData> = {
            x: scaledX,
            y: scaledY,
            width: scaledW,
            height: scaledH,
          };
          if (el.fontSize) {
            u.fontSize = Math.max(8, Math.round(el.fontSize * scaleY));
          }
          return { id: el.id, updates: u };
        });

        if (onUpdateMultipleElements) {
          onUpdateMultipleElements(updatesList, false);
        } else {
          for (const item of updatesList) {
            onUpdateElement(item.id, item.updates, false);
          }
        }
        return;
      }

      const elStart = inter.elementStart;
      if (!elStart) return;

      if (inter.mode === 'move') {
        inter.hasMoved = true;
        if (inter.elementsStart && inter.elementsStart.length > 1) {
          // Multi-element synchronized atomic movement
          if (onUpdateMultipleElements) {
            onUpdateMultipleElements(
              inter.elementsStart.map((item) => ({
                id: item.id,
                updates: {
                  x: Math.round(item.x + dx),
                  y: Math.round(item.y + dy),
                },
              })),
              false
            );
          } else {
            for (const item of inter.elementsStart) {
              onUpdateElement(
                item.id,
                {
                  x: Math.round(item.x + dx),
                  y: Math.round(item.y + dy),
                },
                false
              );
            }
          }
        } else {
          onUpdateElement(
            elStart.id,
            {
              x: Math.round(elStart.x + dx),
              y: Math.round(elStart.y + dy),
            },
            false
          );
        }
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
      const inter = interactionRef.current;
      if (inter.mode === 'none') return;

      if (inter.mode === 'marquee') {
        const box = inter.marqueeBox || marqueeBoxRef.current;
        if (box && (box.width > 3 || box.height > 3)) {
          const hits = elements
            .filter((el) => el.visible && isBoxIntersecting(el, box))
            .map((el) => el.id);

          if (onSelectMultiple) {
            onSelectMultiple(hits, inter.isAdditiveMarquee);
          } else if (hits.length > 0) {
            onSelectElement(hits[0]);
          } else {
            onSelectElement(null);
          }
        } else if (!inter.isAdditiveMarquee && !inter.hasMoved) {
          onSelectElement(null);
        }
        setMarqueeBox(null);
        setDragMode('none');
        interactionRef.current = {
          mode: 'none',
          startMouse: { x: 0, y: 0 },
          clientStart: { x: 0, y: 0 },
          panStart: { x: 0, y: 0 },
          elementStart: null,
          groupStart: null,
        };
        return;
      }

      if (inter.groupStart) {
        const hadMoved = inter.hasMoved;
        interactionRef.current = {
          mode: 'none',
          startMouse: { x: 0, y: 0 },
          clientStart: { x: 0, y: 0 },
          panStart: { x: 0, y: 0 },
          elementStart: null,
          groupStart: null,
        };
        setDragMode('none');
        if (hadMoved) {
          onCommitHistory();
        }
        return;
      }

      if (inter.mode === 'move') {
        const hadMoved = inter.hasMoved;
        const elStart = inter.elementStart;
        interactionRef.current = {
          mode: 'none',
          startMouse: { x: 0, y: 0 },
          clientStart: { x: 0, y: 0 },
          panStart: { x: 0, y: 0 },
          elementStart: null,
          groupStart: null,
        };
        setDragMode('none');
        if (hadMoved) {
          onCommitHistory();
        } else if (elStart && activeSelectedIds.length > 1) {
          // If clicked inside a multi-selection without dragging, narrow down to that element
          onSelectElement(elStart.id, false);
        }
        return;
      }

      const wasTransforming = inter.mode !== 'pan';
      interactionRef.current = {
        mode: 'none',
        startMouse: { x: 0, y: 0 },
        clientStart: { x: 0, y: 0 },
        panStart: { x: 0, y: 0 },
        elementStart: null,
        groupStart: null,
      };
      setDragMode('none');
      if (wasTransforming) {
        onCommitHistory();
      }
    };

    window.addEventListener('pointermove', handleWindowPointerMove, { passive: true });
    window.addEventListener('pointerup', handleWindowPointerUp);
    return () => {
      window.removeEventListener('pointermove', handleWindowPointerMove);
      window.removeEventListener('pointerup', handleWindowPointerUp);
    };
  }, [
    activeSelectedIds.length,
    elements,
    getSvgCoordinates,
    onCommitHistory,
    onPanChange,
    onSelectElement,
    onSelectMultiple,
    onUpdateElement,
    onUpdateMultipleElements,
  ]);

  // Handle pointer down on SVG
  const handlePointerDown = (e: React.PointerEvent<SVGSVGElement>) => {
    // Right-click drag starts Marquee Selection anywhere on canvas
    if (e.button === 2) {
      e.preventDefault();
      const pt = getSvgCoordinates(e.clientX, e.clientY);
      const isAdditive = e.ctrlKey || e.metaKey;
      interactionRef.current = {
        mode: 'marquee',
        startMouse: pt,
        clientStart: { x: e.clientX, y: e.clientY },
        panStart: { ...pan },
        elementStart: null,
        isAdditiveMarquee: isAdditive,
        hasMoved: false,
      };
      setMarqueeBox({ x: pt.x, y: pt.y, width: 0, height: 0 });
      setDragMode('marquee');
      return;
    }

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
      const isAdditive = e.ctrlKey || e.metaKey;
      if (!isAdditive) {
        onSelectElement(null);
      }
      // Start Marquee drag on canvas background
      interactionRef.current = {
        mode: 'marquee',
        startMouse: pt,
        clientStart: { x: e.clientX, y: e.clientY },
        panStart: { ...pan },
        elementStart: null,
        isAdditiveMarquee: isAdditive,
        hasMoved: false,
      };
      setMarqueeBox({ x: pt.x, y: pt.y, width: 0, height: 0 });
      setDragMode('marquee');
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
    // If right-clicked on an element, initiate marquee selection drag instead of element drag
    if (e.button === 2) {
      e.preventDefault();
      e.stopPropagation();
      const pt = getSvgCoordinates(e.clientX, e.clientY);
      const isAdditive = e.ctrlKey || e.metaKey;
      interactionRef.current = {
        mode: 'marquee',
        startMouse: pt,
        clientStart: { x: e.clientX, y: e.clientY },
        panStart: { ...pan },
        elementStart: null,
        isAdditiveMarquee: isAdditive,
        hasMoved: false,
      };
      setMarqueeBox({ x: pt.x, y: pt.y, width: 0, height: 0 });
      setDragMode('marquee');
      return;
    }

    if (e.button !== 0 || activeTool !== 'select' || el.locked || isSpacePressed) return;
    e.stopPropagation();

    const isCtrlOrCmd = e.ctrlKey || e.metaKey;
    if (isCtrlOrCmd) {
      // Ctrl/Cmd + Click: toggle element in multi-selection!
      onSelectElement(el.id, true);
      return;
    }

    const pt = getSvgCoordinates(e.clientX, e.clientY);

    // If the clicked element is already in activeSelectedIds, move all selected elements together
    if (activeSelectedIds.includes(el.id)) {
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
        elementsStart: selectedElements.map((item) => ({
          id: item.id,
          x: item.x,
          y: item.y,
        })),
        hasMoved: false,
      };
      setDragMode('move');
    } else {
      // Select solely and start move
      onSelectElement(el.id, false);
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
        elementsStart: [{ id: el.id, x: el.x, y: el.y }],
        hasMoved: false,
      };
      setDragMode('move');
    }
  };

  // Start handle transform
  const startHandleTransform = (
    e: React.PointerEvent,
    mode: 'nw' | 'n' | 'ne' | 'e' | 'se' | 's' | 'sw' | 'w' | 'rotate'
  ) => {
    e.stopPropagation();
    e.preventDefault();
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
      groupStart: null,
    };
    setDragMode(mode);
  };

  // Start group handle transform (for multi-selection resizing)
  const startGroupHandleTransform = (
    e: React.PointerEvent,
    mode: 'nw' | 'n' | 'ne' | 'e' | 'se' | 's' | 'sw' | 'w'
  ) => {
    e.stopPropagation();
    e.preventDefault();
    if (!combinedBox || selectedElements.length < 2) return;
    const pt = getSvgCoordinates(e.clientX, e.clientY);

    interactionRef.current = {
      mode,
      startMouse: pt,
      clientStart: { x: e.clientX, y: e.clientY },
      panStart: { ...pan },
      elementStart: null,
      groupStart: {
        box: { ...combinedBox },
        elements: selectedElements.map((el) => ({
          id: el.id,
          x: el.x,
          y: el.y,
          width: el.width,
          height: el.height,
          fontSize: el.fontSize,
        })),
      },
      hasMoved: false,
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
    if (dragMode === 'marquee') return 'crosshair';
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
    mode: 'nw' | 'n' | 'ne' | 'e' | 'se' | 's' | 'sw' | 'w',
    isGroup = false
  ) => (
    <g
      key={isGroup ? `group-${mode}` : mode}
      data-handle={isGroup ? `group-${mode}` : mode}
      style={{ cursor }}
      onPointerDown={(e) =>
        isGroup ? startGroupHandleTransform(e, mode) : startHandleTransform(e, mode)
      }
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
      onContextMenu={(e) => e.preventDefault()}
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
          onContextMenu={(e) => e.preventDefault()}
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

            const isSelected = activeSelectedIds.includes(el.id);
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

          {/* Active Selection Highlights & Handles */}
          {activeTool === 'select' && (
            <>
              {/* Case A: Single Element Selected (8 Handles & Rotation Stem) */}
              {!isMultiSelect && singleSelectedElement && (
                <g
                  transform={
                    singleSelectedElement.rotation !== 0
                      ? `rotate(${singleSelectedElement.rotation} ${
                          singleSelectedElement.x + singleSelectedElement.width / 2
                        } ${singleSelectedElement.y + singleSelectedElement.height / 2})`
                      : undefined
                  }
                  className="pointer-events-auto"
                >
                  {/* Outer Bounding Box Border */}
                  <rect
                    x={singleSelectedElement.x}
                    y={singleSelectedElement.y}
                    width={singleSelectedElement.width}
                    height={singleSelectedElement.height}
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
                      x1={singleSelectedElement.x + singleSelectedElement.width / 2}
                      y1={singleSelectedElement.y}
                      x2={singleSelectedElement.x + singleSelectedElement.width / 2}
                      y2={singleSelectedElement.y - 24}
                      stroke="#EA552B"
                      strokeWidth={1.5}
                      className="pointer-events-none"
                    />
                    {/* 24px transparent hit area so crosshair cursor never jitters/flickers */}
                    <circle
                      cx={singleSelectedElement.x + singleSelectedElement.width / 2}
                      cy={singleSelectedElement.y - 24}
                      r={12}
                      fill="transparent"
                      style={{ cursor: 'crosshair' }}
                    />
                    <circle
                      cx={singleSelectedElement.x + singleSelectedElement.width / 2}
                      cy={singleSelectedElement.y - 24}
                      r={6}
                      fill="#EA552B"
                      stroke="#ffffff"
                      strokeWidth={2}
                      className="pointer-events-none group-hover:fill-black"
                    />
                  </g>

                  {/* 8-Directional Stable Sizing Handles */}
                  {renderResizeHandle(
                    singleSelectedElement.x + singleSelectedElement.width,
                    singleSelectedElement.y + singleSelectedElement.height,
                    'nwse-resize',
                    'se'
                  )}
                  {renderResizeHandle(
                    singleSelectedElement.x + singleSelectedElement.width,
                    singleSelectedElement.y + singleSelectedElement.height / 2,
                    'ew-resize',
                    'e'
                  )}
                  {renderResizeHandle(
                    singleSelectedElement.x + singleSelectedElement.width / 2,
                    singleSelectedElement.y + singleSelectedElement.height,
                    'ns-resize',
                    's'
                  )}
                  {renderResizeHandle(
                    singleSelectedElement.x,
                    singleSelectedElement.y,
                    'nwse-resize',
                    'nw'
                  )}
                  {renderResizeHandle(
                    singleSelectedElement.x + singleSelectedElement.width,
                    singleSelectedElement.y,
                    'nesw-resize',
                    'ne'
                  )}
                  {renderResizeHandle(
                    singleSelectedElement.x,
                    singleSelectedElement.y + singleSelectedElement.height,
                    'nesw-resize',
                    'sw'
                  )}
                  {renderResizeHandle(
                    singleSelectedElement.x + singleSelectedElement.width / 2,
                    singleSelectedElement.y,
                    'ns-resize',
                    'n'
                  )}
                  {renderResizeHandle(
                    singleSelectedElement.x,
                    singleSelectedElement.y + singleSelectedElement.height / 2,
                    'ew-resize',
                    'w'
                  )}
                </g>
              )}

              {/* Case B: Multiple Elements Selected (Outlines + Group Combined Box) */}
              {isMultiSelect && (
                <g className="pointer-events-auto">
                  {/* Dashed outline for each element in multi-selection */}
                  {selectedElements.map((el) => (
                    <rect
                      key={`multi-outline-${el.id}`}
                      x={el.x}
                      y={el.y}
                      width={el.width}
                      height={el.height}
                      fill="none"
                      stroke="#EA552B"
                      strokeWidth={1.5}
                      strokeDasharray="4 4"
                      className="pointer-events-none opacity-80"
                    />
                  ))}

                  {/* Combined bounding box surrounding the multi-selected elements */}
                  {combinedBox && (
                    <g className="pointer-events-auto">
                      <rect
                        x={combinedBox.x}
                        y={combinedBox.y}
                        width={combinedBox.width}
                        height={combinedBox.height}
                        fill="none"
                        stroke="#EA552B"
                        strokeWidth={2}
                        className="pointer-events-none"
                      />
                      {/* Pill badge displaying multi-selected count */}
                      <g
                        transform={`translate(${combinedBox.x}, ${Math.max(0, combinedBox.y - 24)})`}
                        className="pointer-events-none"
                      >
                        <rect
                          width={116}
                          height={20}
                          rx={6}
                          fill="#141416"
                          className="shadow-md"
                        />
                        <text
                          x={8}
                          y={14}
                          fill="#ffffff"
                          fontSize={11}
                          fontWeight="bold"
                          fontFamily="Space Grotesk"
                        >
                          {selectedElements.length} items selected
                        </text>
                      </g>

                      {/* 8-Directional Group Resizing Handles */}
                      {renderResizeHandle(
                        combinedBox.x + combinedBox.width,
                        combinedBox.y + combinedBox.height,
                        'nwse-resize',
                        'se',
                        true
                      )}
                      {renderResizeHandle(
                        combinedBox.x + combinedBox.width,
                        combinedBox.y + combinedBox.height / 2,
                        'ew-resize',
                        'e',
                        true
                      )}
                      {renderResizeHandle(
                        combinedBox.x + combinedBox.width / 2,
                        combinedBox.y + combinedBox.height,
                        'ns-resize',
                        's',
                        true
                      )}
                      {renderResizeHandle(
                        combinedBox.x,
                        combinedBox.y,
                        'nwse-resize',
                        'nw',
                        true
                      )}
                      {renderResizeHandle(
                        combinedBox.x + combinedBox.width,
                        combinedBox.y,
                        'nesw-resize',
                        'ne',
                        true
                      )}
                      {renderResizeHandle(
                        combinedBox.x,
                        combinedBox.y + combinedBox.height,
                        'nesw-resize',
                        'sw',
                        true
                      )}
                      {renderResizeHandle(
                        combinedBox.x + combinedBox.width / 2,
                        combinedBox.y,
                        'ns-resize',
                        'n',
                        true
                      )}
                      {renderResizeHandle(
                        combinedBox.x,
                        combinedBox.y + combinedBox.height / 2,
                        'ew-resize',
                        'w',
                        true
                      )}
                    </g>
                  )}
                </g>
              )}
            </>
          )}

          {/* Active Marquee Selection Box (Drawn on Right-Click Drag or Background Drag) */}
          {marqueeBox && (marqueeBox.width > 2 || marqueeBox.height > 2) && (
            <g className="pointer-events-none">
              <rect
                x={marqueeBox.x}
                y={marqueeBox.y}
                width={marqueeBox.width}
                height={marqueeBox.height}
                fill="rgba(234, 85, 43, 0.12)"
                stroke="#EA552B"
                strokeWidth={1.5}
                strokeDasharray="4 4"
                rx={2}
              />
              {(() => {
                const hitCount = elements.filter(
                  (el) => el.visible && isBoxIntersecting(el, marqueeBox)
                ).length;
                return (
                  <g transform={`translate(${marqueeBox.x}, ${Math.max(0, marqueeBox.y - 20)})`}>
                    <rect
                      width={hitCount > 0 ? 84 : 74}
                      height={18}
                      rx={4}
                      fill="#141416"
                    />
                    <text
                      x={6}
                      y={12}
                      fill="#ffffff"
                      fontSize={10}
                      fontWeight="bold"
                      fontFamily="Space Grotesk"
                    >
                      {hitCount > 0 ? `${hitCount} selected` : 'Drag to select'}
                    </text>
                  </g>
                );
              })()}
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
