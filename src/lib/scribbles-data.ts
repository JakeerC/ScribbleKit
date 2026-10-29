// src/lib/scribbles-data.ts
// ScribbleKit Asset Database

export interface ScribbleAsset {
  id: string;
  name: string;
  category: string;
  tags: string[];
  viewBox: string;
  type: 'stroke' | 'fill' | 'mixed';
  defaultColor: string;
  description: string;
  path?: string;
  rawSvg?: string;
}

export const COLOR_PRESETS = [
  {
    "name": "orange",
    "value": "#EA552B",
    "label": "Retro Orange",
    "bg": "bg-[#EA552B]"
  },
  {
    "name": "yellow",
    "value": "#F7D046",
    "label": "Sunny Yellow",
    "bg": "bg-[#F7D046]"
  },
  {
    "name": "green",
    "value": "#4CA96D",
    "label": "Kelly Green",
    "bg": "bg-[#4CA96D]"
  },
  {
    "name": "pink",
    "value": "#EE8DB9",
    "label": "Bubblegum Pink",
    "bg": "bg-[#EE8DB9]"
  },
  {
    "name": "blue",
    "value": "#55BBDA",
    "label": "Sky Blue",
    "bg": "bg-[#55BBDA]"
  },
  {
    "name": "mint",
    "value": "#0BDC85",
    "label": "ScribbleKit Mint",
    "bg": "bg-[#0BDC85]"
  },
  {
    "name": "dark",
    "value": "#141416",
    "label": "Ink Black",
    "bg": "bg-[#141416]"
  },
  {
    "name": "white",
    "value": "#FFFFFF",
    "label": "Crisp White",
    "bg": "bg-[#FFFFFF]"
  }
];

export const CATEGORIES = [
  {
    "id": "all",
    "name": "All Scribbles",
    "icon": "Sparkles",
    "count": 116
  },
  {
    "id": "underlines",
    "name": "Underlines & Swashes",
    "icon": "Minus",
    "count": 16
  },
  {
    "id": "circles",
    "name": "Circles & Loops",
    "icon": "Circle",
    "count": 15
  },
  {
    "id": "arrows",
    "name": "Arrows & Pointers",
    "icon": "ArrowUpRight",
    "count": 18
  },
  {
    "id": "stars-sparkles",
    "name": "Stars & Bursts",
    "icon": "Star",
    "count": 15
  },
  {
    "id": "badges-frames",
    "name": "Badges & Frames",
    "icon": "BadgePercent",
    "count": 12
  },
  {
    "id": "abstract-doodles",
    "name": "Abstract & Doodles",
    "icon": "Zap",
    "count": 16
  },
  {
    "id": "accents-emphasis",
    "name": "Accents & Emphasis",
    "icon": "Check",
    "count": 14
  },
  {
    "id": "signature-shapes",
    "name": "Signature Shapes",
    "icon": "Crown",
    "count": 10
  }
];

export const SCRIBBLES_ASSETS: ScribbleAsset[] = [
  {
    "id": "underline-wave-single",
    "name": "Playful Wave",
    "category": "underlines",
    "tags": [
      "wave",
      "single",
      "playful",
      "emphasis"
    ],
    "viewBox": "0 0 240 28",
    "type": "stroke",
    "defaultColor": "#EA552B",
    "description": "Loose, organic single wave underline for casual headlines.",
    "path": "d=\"M4 14C35 4 65 24 95 14C125 4 155 24 185 14C205 7 225 18 236 12\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"4.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "underline-wave-double",
    "name": "Double Wave Swoop",
    "category": "underlines",
    "tags": [
      "wave",
      "double",
      "dynamic",
      "title"
    ],
    "viewBox": "0 0 250 36",
    "type": "stroke",
    "defaultColor": "#F7D046",
    "description": "Double hand-drawn undulating waves for high-impact emphasis.",
    "path": "d=\"M6 12C38 4 72 20 106 12C140 4 174 20 208 12C222 9 236 15 244 11 M14 26C46 18 80 34 114 26C148 18 182 34 216 26C226 23 238 27 246 23\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "underline-straight-rough",
    "name": "Rough Marker Line",
    "category": "underlines",
    "tags": [
      "marker",
      "rough",
      "straight",
      "casual"
    ],
    "viewBox": "0 0 220 20",
    "type": "stroke",
    "defaultColor": "#4CA96D",
    "description": "Natural hand-drawn straight marker underline with organic jitter.",
    "path": "d=\"M5 11C40 9.5 80 12.5 120 10C155 8 185 11.5 215 9.5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "underline-jagged-zigzag",
    "name": "Electric Zigzag",
    "category": "underlines",
    "tags": [
      "zigzag",
      "jagged",
      "energetic",
      "funky"
    ],
    "viewBox": "0 0 230 26",
    "type": "stroke",
    "defaultColor": "#EA552B",
    "description": "Energetic zig-zag underline to highlight urgent or punchy words.",
    "path": "d=\"M5 14L22 6L40 20L58 6L76 20L94 6L112 20L130 6L148 20L166 6L184 20L202 6L218 19L225 12\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "underline-calligraphic-swoosh",
    "name": "Calligraphic Swoosh",
    "category": "underlines",
    "tags": [
      "swoosh",
      "tapered",
      "brush",
      "elegant"
    ],
    "viewBox": "0 0 260 30",
    "type": "fill",
    "defaultColor": "#55BBDA",
    "description": "Broad calligraphic brush underline with tapered ends.",
    "path": "d=\"M4 18C45 16 95 19 145 17C185 15 225 11 256 6C240 16 195 24 145 25C95 26 45 24 4 18Z\" fill=\"currentColor\""
  },
  {
    "id": "underline-swash-accent",
    "name": "Signature Swash & Drop",
    "category": "underlines",
    "tags": [
      "signature",
      "swash",
      "accent",
      "dot",
      "flourish"
    ],
    "viewBox": "0 0 200 40",
    "type": "fill",
    "defaultColor": "#EE8DB9",
    "description": "Calligraphic underline swash accented with a trailing ink drop.",
    "path": "d=\"M8 22C42 18 90 22 138 20C158 19 178 17 194 13C174 21 144 27 114 28C74 29 34 27 8 22ZM188 28C188 32.4 184.4 36 180 36C175.6 36 172 32.4 172 28C172 23.6 175.6 20 180 20C184.4 20 188 23.6 188 28Z\" fill=\"currentColor\""
  },
  {
    "id": "underline-loop-flourish",
    "name": "Flourish Loop",
    "category": "underlines",
    "tags": [
      "loop",
      "flourish",
      "curly",
      "artistic"
    ],
    "viewBox": "0 0 230 38",
    "type": "stroke",
    "defaultColor": "#0BDC85",
    "description": "Underline ending in a graceful hand-drawn loop-the-loop.",
    "path": "d=\"M6 24C65 21 130 25 185 20C205 18 220 12 216 4C211 -3 194 6 201 26C205 34 219 32 225 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "underline-double-marker",
    "name": "Double Sketch Marks",
    "category": "underlines",
    "tags": [
      "double",
      "sketch",
      "marker",
      "loose"
    ],
    "viewBox": "0 0 210 24",
    "type": "stroke",
    "defaultColor": "#F7D046",
    "description": "Two rapid sketch passes under text.",
    "path": "d=\"M6 8C55 6 110 9 165 7C180 6 195 8 204 7 M12 17C65 15 120 18 175 16C185 15 198 16 206 15\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "underline-curly-whimsy",
    "name": "Whimsical Curlicue",
    "category": "underlines",
    "tags": [
      "curly",
      "whimsy",
      "spring",
      "cute"
    ],
    "viewBox": "0 0 220 32",
    "type": "stroke",
    "defaultColor": "#EE8DB9",
    "description": "Playful looping swirls connected into an underline ribbon.",
    "path": "d=\"M6 18C16 10 26 8 32 15C38 23 28 28 22 23C15 17 24 6 38 12C52 18 64 24 78 18C92 12 104 22 118 18C132 14 144 22 158 17C172 12 185 22 200 16C208 13 215 18 218 14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "underline-hatching-marks",
    "name": "Angled Hatching Line",
    "category": "underlines",
    "tags": [
      "hatch",
      "architect",
      "sketch",
      "technical"
    ],
    "viewBox": "0 0 220 28",
    "type": "stroke",
    "defaultColor": "#4CA96D",
    "description": "Baseline underline with angled hand-drawn tick hatch marks.",
    "path": "d=\"M4 14H216 M18 8L10 20 M42 8L34 20 M66 8L58 20 M90 8L82 20 M114 8L106 20 M138 8L130 20 M162 8L154 20 M186 8L178 20 M210 8L202 20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "underline-scribble-dense",
    "name": "Dense Scratch Underline",
    "category": "underlines",
    "tags": [
      "scratch",
      "dense",
      "scribble",
      "marker"
    ],
    "viewBox": "0 0 230 24",
    "type": "stroke",
    "defaultColor": "#EA552B",
    "description": "Back-and-forth dense pen scribble line.",
    "path": "d=\"M4 14C12 11 20 17 28 12C36 7 44 18 52 13C60 8 68 18 76 13C84 8 92 18 100 13C108 8 116 18 124 13C132 8 140 18 148 13C156 8 164 18 172 13C180 8 188 18 196 13C204 8 214 17 226 11\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"4.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "underline-thick-highlighter",
    "name": "Highlighter Stroke",
    "category": "underlines",
    "tags": [
      "highlighter",
      "thick",
      "marker",
      "chunky"
    ],
    "viewBox": "0 0 240 22",
    "type": "fill",
    "defaultColor": "#F7D046",
    "description": "Chunky chisel-tip highlighter underline with rough flat ends.",
    "path": "d=\"M4 5C45 4 100 6 150 4C190 3 220 5 236 7L234 17C195 19 140 17 90 19C45 20 15 18 4 16Z\" fill=\"currentColor\""
  },
  {
    "id": "underline-spring-coil",
    "name": "Spring Coil Line",
    "category": "underlines",
    "tags": [
      "spring",
      "coil",
      "loop",
      "funky"
    ],
    "viewBox": "0 0 230 28",
    "type": "stroke",
    "defaultColor": "#55BBDA",
    "description": "Continuous spiral spring loops across the bottom.",
    "path": "d=\"M6 16C12 7 20 7 22 14C24 21 16 23 14 17C12 11 20 6 28 14C36 22 46 7 54 15C62 23 72 7 80 15C88 23 98 7 106 15C114 23 124 7 132 15C140 23 150 7 158 15C166 23 176 7 184 15C192 23 202 7 210 15C216 21 224 13 226 12\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "underline-brush-expressive",
    "name": "Expressive Brush Stroke",
    "category": "underlines",
    "tags": [
      "brush",
      "ink",
      "bold",
      "expressive"
    ],
    "viewBox": "0 0 250 26",
    "type": "fill",
    "defaultColor": "#EA552B",
    "description": "Dynamic sumi-e style ink brush sweep.",
    "path": "d=\"M6 14C35 8 85 10 135 12C185 14 220 10 244 5C240 13 205 21 160 21C110 21 55 19 6 14Z\" fill=\"currentColor\""
  },
  {
    "id": "underline-smile-bracket",
    "name": "Smiling Arc",
    "category": "underlines",
    "tags": [
      "smile",
      "arc",
      "bracket",
      "warm"
    ],
    "viewBox": "0 0 210 32",
    "type": "stroke",
    "defaultColor": "#0BDC85",
    "description": "Upward curved smiling arc underline that cradles key words.",
    "path": "d=\"M6 8C55 24 155 24 204 8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"4.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "underline-twin-loops",
    "name": "Twin Infinity Loops",
    "category": "underlines",
    "tags": [
      "loops",
      "infinity",
      "flourish",
      "ends"
    ],
    "viewBox": "0 0 240 36",
    "type": "stroke",
    "defaultColor": "#EE8DB9",
    "description": "Underline adorned with graceful loops on both starting and ending tips.",
    "path": "d=\"M18 10C8 10 4 18 10 23C16 28 26 20 22 14C19 9 10 14 22 22C65 20 120 23 175 19C195 18 214 21 222 13C228 7 222 -1 216 4C210 9 220 25 234 18\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "circle-double-loop",
    "name": "Double Loop Highlight",
    "category": "circles",
    "tags": [
      "highlight",
      "loop",
      "double",
      "oval",
      "circle"
    ],
    "viewBox": "0 0 240 120",
    "type": "stroke",
    "defaultColor": "#EA552B",
    "description": "The quintessential hand-drawn double loop circle for highlighting key phrases.",
    "path": "d=\"M38 58C36 28 78 12 128 12C178 12 218 28 218 60C218 92 170 108 116 108C58 108 20 86 22 52C24 22 74 18 126 18C182 18 226 36 224 64C222 94 174 104 120 102\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"4.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "circle-rough-single",
    "name": "Rough Single Circle",
    "category": "circles",
    "tags": [
      "single",
      "rough",
      "sketch",
      "focus"
    ],
    "viewBox": "0 0 140 140",
    "type": "stroke",
    "defaultColor": "#F7D046",
    "description": "Single-stroke rapid sketch circle with organic overlap.",
    "path": "d=\"M74 14C38 12 14 42 16 78C18 114 46 128 80 126C116 124 132 98 128 64C124 28 92 14 66 18\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"4.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "circle-oval-capsule",
    "name": "Capsule Loop",
    "category": "circles",
    "tags": [
      "capsule",
      "pill",
      "horizontal",
      "headline"
    ],
    "viewBox": "0 0 260 90",
    "type": "stroke",
    "defaultColor": "#4CA96D",
    "description": "Elongated pill/capsule scribble specifically sized for wrapping long headlines.",
    "path": "d=\"M48 24C95 20 165 20 212 24C242 27 248 60 216 66C168 70 92 70 44 66C12 62 16 26 52 24C98 22 162 22 210 25C238 27 242 58 214 64\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "circle-messy-scribble",
    "name": "Messy Scribble Loop",
    "category": "circles",
    "tags": [
      "messy",
      "scribble",
      "doodle",
      "raw"
    ],
    "viewBox": "0 0 150 150",
    "type": "stroke",
    "defaultColor": "#EE8DB9",
    "description": "Casual 3-pass loose scribble loop with raw hand energy.",
    "path": "d=\"M75 18C40 18 20 45 22 78C24 112 50 132 82 130C118 128 136 102 132 70C128 35 95 18 68 22C38 26 22 58 26 90C30 120 62 134 94 128C126 122 134 90 124 58C114 26 80 20 54 28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "circle-halo-slant",
    "name": "Tilted Halo Oval",
    "category": "circles",
    "tags": [
      "halo",
      "tilted",
      "slant",
      "accent"
    ],
    "viewBox": "0 0 180 120",
    "type": "stroke",
    "defaultColor": "#55BBDA",
    "description": "Tilted dynamic ellipse loop hovering like a playful halo.",
    "path": "d=\"M32 72C20 48 46 22 88 16C134 10 168 28 162 52C156 78 116 98 72 102C32 106 14 84 28 62C42 40 84 20 126 18C158 17 166 35 152 58\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "circle-lasso-tail",
    "name": "Lasso Tail Circle",
    "category": "circles",
    "tags": [
      "lasso",
      "tail",
      "western",
      "pointer"
    ],
    "viewBox": "0 0 170 150",
    "type": "stroke",
    "defaultColor": "#0BDC85",
    "description": "Hand circle with an energetic lasso tail whipping out.",
    "path": "d=\"M14 136C38 122 55 96 64 66C72 38 95 20 122 24C148 28 156 55 146 84C136 112 108 128 78 124C48 120 40 92 50 64C60 36 88 22 118 26C142 30 152 54 142 80\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "circle-heart-pinch",
    "name": "Heart-Pinched Loop",
    "category": "circles",
    "tags": [
      "heart",
      "pinch",
      "sweet",
      "organic"
    ],
    "viewBox": "0 0 150 140",
    "type": "stroke",
    "defaultColor": "#EA552B",
    "description": "Circle that pinches gently at the top into an organic heart shape.",
    "path": "d=\"M75 32C62 18 42 16 28 28C12 42 14 74 34 98C54 122 75 132 75 132C75 132 96 122 116 98C136 74 138 42 122 28C108 16 88 18 75 32Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "circle-cloud-bubble",
    "name": "Cloud Scribble Enclosure",
    "category": "circles",
    "tags": [
      "cloud",
      "bubble",
      "fluffy",
      "frame"
    ],
    "viewBox": "0 0 180 130",
    "type": "stroke",
    "defaultColor": "#F7D046",
    "description": "Bubbly scalloped hand circle mimicking a puffy cloud.",
    "path": "d=\"M38 72C24 66 22 46 36 36C50 26 66 32 74 24C82 14 102 12 114 20C126 28 132 26 142 32C154 38 162 52 154 66C162 76 158 96 144 102C130 108 122 98 110 106C98 114 80 112 70 104C60 98 48 108 36 98C24 88 28 78 38 72Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "circle-target-rings",
    "name": "Target Double Rings",
    "category": "circles",
    "tags": [
      "target",
      "bullseye",
      "focus",
      "double"
    ],
    "viewBox": "0 0 140 140",
    "type": "stroke",
    "defaultColor": "#4CA96D",
    "description": "Concentric hand-drawn double ring target.",
    "path": "d=\"M70 14C38 14 14 38 14 70C14 102 38 126 70 126C102 126 126 102 126 70C126 38 102 14 70 14ZM70 38C52 38 38 52 38 70C38 88 52 102 70 102C88 102 102 88 102 70C102 52 88 38 70 38Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "circle-wobbly-egg",
    "name": "Wobbly Egg Shape",
    "category": "circles",
    "tags": [
      "wobbly",
      "egg",
      "quirky",
      "asymmetric"
    ],
    "viewBox": "0 0 140 150",
    "type": "stroke",
    "defaultColor": "#EE8DB9",
    "description": "Delightfully imperfect wobbly oval with off-center mass.",
    "path": "d=\"M72 16C102 14 126 48 122 92C118 128 92 138 64 136C34 134 16 114 18 78C20 38 48 18 72 16Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"4.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "circle-open-crescent",
    "name": "Open Crescent Loop",
    "category": "circles",
    "tags": [
      "crescent",
      "open",
      "bracket",
      "clean"
    ],
    "viewBox": "0 0 130 130",
    "type": "stroke",
    "defaultColor": "#55BBDA",
    "description": "Almost-closed circular stroke leaving a stylized gap at upper right.",
    "path": "d=\"M98 32C84 18 65 14 46 22C20 34 12 68 20 94C30 118 64 126 90 114C114 102 122 74 116 52\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"4.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "circle-spiral-vortex",
    "name": "Inward Spiral Vortex",
    "category": "circles",
    "tags": [
      "spiral",
      "vortex",
      "coil",
      "hypnotic"
    ],
    "viewBox": "0 0 140 140",
    "type": "stroke",
    "defaultColor": "#0BDC85",
    "description": "Continuous spiral looping inward toward the center.",
    "path": "d=\"M70 12C36 12 14 36 14 70C14 104 38 128 72 128C104 128 128 102 128 70C128 42 106 24 78 24C48 24 32 46 32 72C32 94 50 110 72 110C92 110 108 92 108 72C108 56 94 44 78 44C64 44 52 56 52 70C52 80 60 88 70 88\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "circle-scalloped-ring",
    "name": "Scalloped Flower Ring",
    "category": "circles",
    "tags": [
      "scallop",
      "flower",
      "ring",
      "seal"
    ],
    "viewBox": "0 0 150 150",
    "type": "stroke",
    "defaultColor": "#F7D046",
    "description": "Whimsical circular badge with rounded petal waves.",
    "path": "d=\"M75 15C85 15 90 24 100 26C110 28 118 22 126 30C134 38 128 46 130 56C132 66 141 71 141 81C141 91 132 96 130 106C128 116 134 124 126 132C118 140 110 134 100 136C90 138 85 147 75 147C65 147 60 138 50 136C40 134 32 140 24 132C16 124 22 116 20 106C18 96 9 91 9 81C9 71 18 66 20 56C22 46 16 38 24 30C32 22 40 28 50 26C60 24 65 15 75 15Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "circle-rough-box",
    "name": "Rounded Scribble Box",
    "category": "circles",
    "tags": [
      "box",
      "rectangle",
      "frame",
      "enclosure"
    ],
    "viewBox": "0 0 200 120",
    "type": "stroke",
    "defaultColor": "#EA552B",
    "description": "Loose rounded rectangle scribble for framing badges or stats.",
    "path": "d=\"M28 20C75 16 135 16 176 20C194 22 196 38 194 65C192 92 192 102 172 104C130 108 65 106 24 102C8 100 6 86 8 60C10 32 10 22 28 20Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "circle-sketch-cluster",
    "name": "Layered Sketch Halo",
    "category": "circles",
    "tags": [
      "sketch",
      "cluster",
      "layered",
      "artistic"
    ],
    "viewBox": "0 0 160 160",
    "type": "stroke",
    "defaultColor": "#EE8DB9",
    "description": "Multi-stroke architectural sketch circle with layered loose graphite lines.",
    "path": "d=\"M80 18C44 18 18 44 18 80C18 116 44 142 80 142C116 142 142 116 142 80C142 44 116 18 80 18Z M82 24C48 24 24 48 24 82C24 114 48 138 82 138C114 138 138 114 138 82C138 48 114 24 82 24Z M76 22C42 26 22 52 26 86C30 118 56 138 88 134C118 130 138 106 134 74C130 44 106 20 76 22Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "arrow-curved-down-right",
    "name": "Hero CTA Pointer",
    "category": "arrows",
    "tags": [
      "cta",
      "pointer",
      "curved",
      "down-right",
      "hero"
    ],
    "viewBox": "0 0 120 120",
    "type": "stroke",
    "defaultColor": "#EA552B",
    "description": "The classic landing page CTA arrow pointing downwards and to the right.",
    "path": "d=\"M18 22C48 16 88 32 94 82 M70 82L96 86L102 60\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "arrow-curved-down-left",
    "name": "Left Swoop Pointer",
    "category": "arrows",
    "tags": [
      "pointer",
      "curved",
      "down-left",
      "hook"
    ],
    "viewBox": "0 0 120 120",
    "type": "stroke",
    "defaultColor": "#F7D046",
    "description": "Curving down and left to guide focus toward cards or buttons.",
    "path": "d=\"M102 22C72 16 32 32 26 82 M50 82L24 86L18 60\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "arrow-loop-the-loop",
    "name": "Loop-The-Loop Arrow",
    "category": "arrows",
    "tags": [
      "loop",
      "rollercoaster",
      "playful",
      "whimsical"
    ],
    "viewBox": "0 0 140 140",
    "type": "stroke",
    "defaultColor": "#4CA96D",
    "description": "Playful arrow performing a full 360-degree loop before landing.",
    "path": "d=\"M20 110C40 100 68 85 82 62C92 46 92 24 76 18C58 12 48 34 64 54C80 74 104 90 124 94 M108 84L128 96L122 72\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"4.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "arrow-sharp-straight",
    "name": "Direct Hand Arrow",
    "category": "arrows",
    "tags": [
      "direct",
      "straight",
      "sharp",
      "fast"
    ],
    "viewBox": "0 0 140 50",
    "type": "stroke",
    "defaultColor": "#55BBDA",
    "description": "Confident hand-drawn direct arrow pointing forward.",
    "path": "d=\"M8 25C45 23 85 27 126 24 M108 12L132 25L108 38\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "arrow-arching-up",
    "name": "Upward Arching Arrow",
    "category": "arrows",
    "tags": [
      "upward",
      "growth",
      "arching",
      "success"
    ],
    "viewBox": "0 0 120 120",
    "type": "stroke",
    "defaultColor": "#0BDC85",
    "description": "High-growth upward soaring arrow.",
    "path": "d=\"M18 98C28 65 52 35 94 24 M72 18L98 22L92 46\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "arrow-u-turn-swoop",
    "name": "Dramatic U-Turn",
    "category": "arrows",
    "tags": [
      "u-turn",
      "curve",
      "return",
      "circle"
    ],
    "viewBox": "0 0 120 130",
    "type": "stroke",
    "defaultColor": "#EE8DB9",
    "description": "Smooth 180-degree hairpin U-turn arrow.",
    "path": "d=\"M32 110V52C32 28 50 14 74 14C98 14 108 32 108 56V98 M92 84L108 102L124 84\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"4.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "arrow-zigzag-stem",
    "name": "Zigzag Lightning Arrow",
    "category": "arrows",
    "tags": [
      "zigzag",
      "lightning",
      "electric",
      "punchy"
    ],
    "viewBox": "0 0 110 130",
    "type": "stroke",
    "defaultColor": "#EA552B",
    "description": "Lightning-stem arrow conveying speed and excitement.",
    "path": "d=\"M50 10L24 45L74 58L42 105 M26 94L42 112L58 98\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "arrow-double-headed",
    "name": "Double-Headed Connector",
    "category": "arrows",
    "tags": [
      "double",
      "two-way",
      "connector",
      "flow"
    ],
    "viewBox": "0 0 180 50",
    "type": "stroke",
    "defaultColor": "#F7D046",
    "description": "Two-way communication or comparison arrow.",
    "path": "d=\"M24 25H156 M36 14L16 25L36 36 M144 14L164 25L144 36\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "arrow-swoop-down",
    "name": "High Arch Swoop Down",
    "category": "arrows",
    "tags": [
      "arch",
      "swoop",
      "down",
      "gravity"
    ],
    "viewBox": "0 0 130 140",
    "type": "stroke",
    "defaultColor": "#4CA96D",
    "description": "Towering rainbow-like arch that plunges straight into a target.",
    "path": "d=\"M16 118C20 62 48 16 92 16C112 16 122 35 120 75L120 116 M104 102L120 124L136 102\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"4.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "arrow-wavy-stem",
    "name": "Serpentine Wavy Arrow",
    "category": "arrows",
    "tags": [
      "wavy",
      "serpentine",
      "snake",
      "organic"
    ],
    "viewBox": "0 0 160 60",
    "type": "stroke",
    "defaultColor": "#55BBDA",
    "description": "Smooth S-wave stem arrow gliding horizontally.",
    "path": "d=\"M10 30C35 10 65 50 95 30C115 18 135 32 148 30 M132 18L152 30L134 44\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "arrow-bouncy-triple",
    "name": "Triple Bounce Arrow",
    "category": "arrows",
    "tags": [
      "bounce",
      "triple",
      "hop",
      "rhythm"
    ],
    "viewBox": "0 0 170 60",
    "type": "stroke",
    "defaultColor": "#0BDC85",
    "description": "Three energetic hops ending in a forward arrow.",
    "path": "d=\"M10 44C25 20 40 20 52 44C64 20 78 20 90 44C102 20 118 20 132 44 M144 26C150 34 156 42 160 44 M160 44L140 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"4.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "arrow-dart-pointer",
    "name": "Chunky Dart Arrow",
    "category": "arrows",
    "tags": [
      "dart",
      "solid",
      "chunky",
      "iconic"
    ],
    "viewBox": "0 0 100 100",
    "type": "fill",
    "defaultColor": "#EA552B",
    "description": "Solid filled chunky triangle dart arrow with tapered tail.",
    "path": "d=\"M12 28C32 28 54 40 70 54L64 36L92 68L56 74L68 62C52 48 32 38 12 36Z\" fill=\"currentColor\""
  },
  {
    "id": "arrow-scribble-stem",
    "name": "Scribble Shaft Arrow",
    "category": "arrows",
    "tags": [
      "scribble",
      "scratch",
      "raw",
      "textured"
    ],
    "viewBox": "0 0 150 70",
    "type": "stroke",
    "defaultColor": "#EE8DB9",
    "description": "Vibrating back-and-forth scribble shaft with sharp arrowhead.",
    "path": "d=\"M10 35L22 25L32 45L44 24L56 46L68 25L80 44L92 26L104 45L116 28L135 35 M120 20L142 35L120 50\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "arrow-corner-elbow",
    "name": "Rounded 90\u00b0 Elbow",
    "category": "arrows",
    "tags": [
      "elbow",
      "corner",
      "90deg",
      "turn"
    ],
    "viewBox": "0 0 110 110",
    "type": "stroke",
    "defaultColor": "#F7D046",
    "description": "Clean 90-degree curved corner elbow arrow.",
    "path": "d=\"M20 15V62C20 84 36 94 62 94H98 M84 80L104 94L84 108\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "arrow-corkscrew-spiral",
    "name": "3D Corkscrew Arrow",
    "category": "arrows",
    "tags": [
      "corkscrew",
      "3d",
      "spiral",
      "dimension"
    ],
    "viewBox": "0 0 130 130",
    "type": "stroke",
    "defaultColor": "#4CA96D",
    "description": "Coiling spring-like 3D corkscrew arrow.",
    "path": "d=\"M20 20C45 8 70 12 70 32C70 54 28 48 34 76C40 98 82 82 92 108 M74 102L96 112L98 88\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"4.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "arrow-subtle-editorial",
    "name": "Editorial Gentle Arc",
    "category": "arrows",
    "tags": [
      "editorial",
      "gentle",
      "minimal",
      "sleek"
    ],
    "viewBox": "0 0 160 70",
    "type": "stroke",
    "defaultColor": "#55BBDA",
    "description": "Minimal, sophisticated shallow arc arrow for editorial layouts.",
    "path": "d=\"M10 50C55 20 105 20 148 40 M132 30L154 42L140 56\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "arrow-chunky-marker",
    "name": "Thick Marker Arrow",
    "category": "arrows",
    "tags": [
      "marker",
      "chunky",
      "bold",
      "fat"
    ],
    "viewBox": "0 0 140 60",
    "type": "stroke",
    "defaultColor": "#0BDC85",
    "description": "Heavy 8px bold marker arrow.",
    "path": "d=\"M12 30H118 M98 14L124 30L98 46\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"8\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "arrow-twin-parallel",
    "name": "Twin Parallel Fast Arrows",
    "category": "arrows",
    "tags": [
      "twin",
      "parallel",
      "speed",
      "double"
    ],
    "viewBox": "0 0 150 70",
    "type": "stroke",
    "defaultColor": "#EA552B",
    "description": "Double parallel hand-drawn stroke arrows indicating swift progress.",
    "path": "d=\"M14 24H126 M108 14L132 24L108 34 M24 46H136 M118 36L142 46L118 56\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "star-4-point-sparkle",
    "name": "Modern 4-Point Sparkle",
    "category": "stars-sparkles",
    "tags": [
      "sparkle",
      "4-point",
      "glimmer",
      "magic",
      "clean"
    ],
    "viewBox": "0 0 100 100",
    "type": "fill",
    "defaultColor": "#F7D046",
    "description": "The quintessential modern AI/magic 4-point curved sparkle.",
    "path": "d=\"M50 4C50 30 70 50 96 50C70 50 50 70 50 96C50 70 30 50 4 50C30 50 50 30 50 4Z\" fill=\"currentColor\""
  },
  {
    "id": "star-4-point-chunky",
    "name": "Hand-Drawn Chunky Star",
    "category": "stars-sparkles",
    "tags": [
      "chunky",
      "hand-drawn",
      "diamond",
      "doodle"
    ],
    "viewBox": "0 0 100 100",
    "type": "fill",
    "defaultColor": "#EA552B",
    "description": "Slightly asymmetric hand-drawn chunky 4-point star.",
    "path": "d=\"M50 8C52 28 68 46 92 48C70 52 53 68 50 92C46 70 28 53 8 50C28 46 47 28 50 8Z\" fill=\"currentColor\""
  },
  {
    "id": "star-5-point-organic",
    "name": "Organic 5-Point Star",
    "category": "stars-sparkles",
    "tags": [
      "5-point",
      "organic",
      "cute",
      "favorite"
    ],
    "viewBox": "0 0 110 110",
    "type": "fill",
    "defaultColor": "#EE8DB9",
    "description": "Charming, slightly uneven hand-drawn 5-point star.",
    "path": "d=\"M55 6L68 38L102 42L76 68L84 102L55 84L26 102L34 68L8 42L42 38Z\" fill=\"currentColor\""
  },
  {
    "id": "star-burst-8-ray",
    "name": "Sunburst 8-Ray Explosion",
    "category": "stars-sparkles",
    "tags": [
      "sunburst",
      "explosion",
      "pop",
      "energy"
    ],
    "viewBox": "0 0 120 120",
    "type": "stroke",
    "defaultColor": "#0BDC85",
    "description": "Radiating 8-ray hand-drawn sunburst spark.",
    "path": "d=\"M60 10V34 M60 86V110 M10 60H34 M86 60H110 M25 25L42 42 M78 78L95 95 M95 25L78 42 M42 78L25 95\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"5\" stroke-linecap=\"round\""
  },
  {
    "id": "star-cluster-trio",
    "name": "Sparkle Trio Cluster",
    "category": "stars-sparkles",
    "tags": [
      "cluster",
      "trio",
      "constellation",
      "glow"
    ],
    "viewBox": "0 0 130 110",
    "type": "fill",
    "defaultColor": "#4CA96D",
    "description": "Three playful sparkles clustered together for celebratory accents.",
    "path": "d=\"M52 8C52 24 64 36 80 36C64 36 52 48 52 64C52 48 40 36 24 36C40 36 52 24 52 8ZM98 52C98 62 105 70 116 70C105 70 98 78 98 88C98 78 90 70 80 70C90 70 98 62 98 52ZM24 74C24 80 28 85 34 85C28 85 24 90 24 96C24 90 20 85 14 85C20 85 24 80 24 74Z\" fill=\"currentColor\""
  },
  {
    "id": "star-twinkle-cross",
    "name": "Hand-Drawn Twinkle Cross",
    "category": "stars-sparkles",
    "tags": [
      "cross",
      "plus",
      "twinkle",
      "accent"
    ],
    "viewBox": "0 0 80 80",
    "type": "stroke",
    "defaultColor": "#55BBDA",
    "description": "Bold plus/cross twinkle with organic tapered tips.",
    "path": "d=\"M40 8V72 M8 40H72\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"6.5\" stroke-linecap=\"round\""
  },
  {
    "id": "star-doodle-spark",
    "name": "Funky Asymmetric Spark",
    "category": "stars-sparkles",
    "tags": [
      "asymmetric",
      "funky",
      "scribble",
      "accent"
    ],
    "viewBox": "0 0 90 100",
    "type": "fill",
    "defaultColor": "#EA552B",
    "description": "Funky asymmetrical hand-drawn doodle spark.",
    "path": "d=\"M45 4C48 24 62 40 86 45C62 50 48 68 45 96C42 68 28 50 4 45C28 40 42 24 45 4Z\" fill=\"currentColor\""
  },
  {
    "id": "star-continuous-stroke",
    "name": "Single-Stroke 5-Point Star",
    "category": "stars-sparkles",
    "tags": [
      "continuous",
      "outline",
      "classic",
      "sketch"
    ],
    "viewBox": "0 0 110 110",
    "type": "stroke",
    "defaultColor": "#F7D046",
    "description": "The classic childhood star drawn in one continuous unbroken loop.",
    "path": "d=\"M55 10L68 96L8 42H102L42 96Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"4.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "star-retro-6-ray",
    "name": "Retro 6-Ray Asterisk",
    "category": "stars-sparkles",
    "tags": [
      "asterisk",
      "retro",
      "6-ray",
      "atomic"
    ],
    "viewBox": "0 0 100 100",
    "type": "stroke",
    "defaultColor": "#EE8DB9",
    "description": "Mid-century atomic pop 6-ray starburst.",
    "path": "d=\"M50 10V90 M15 30L85 70 M15 70L85 30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"5\" stroke-linecap=\"round\""
  },
  {
    "id": "star-radiant-dot",
    "name": "Radiant Center Dot",
    "category": "stars-sparkles",
    "tags": [
      "radiant",
      "dot",
      "burst",
      "glow"
    ],
    "viewBox": "0 0 110 110",
    "type": "stroke",
    "defaultColor": "#0BDC85",
    "description": "Central solid dot bursting with 6 energetic radiate rays.",
    "path": "d=\"M55 12V32 M55 78V98 M18 34L35 44 M75 66L92 76 M18 76L35 66 M75 44L92 34 M55 58C56.6 58 58 56.6 58 55C58 53.4 56.6 52 55 52C53.4 52 52 53.4 52 55C52 56.6 53.4 58 55 58Z\" fill=\"currentColor\" stroke=\"currentColor\" stroke-width=\"4.5\" stroke-linecap=\"round\""
  },
  {
    "id": "star-spark-mini",
    "name": "Mini Accent Twinkle",
    "category": "stars-sparkles",
    "tags": [
      "mini",
      "accent",
      "twinkle",
      "subtle"
    ],
    "viewBox": "0 0 60 60",
    "type": "fill",
    "defaultColor": "#EA552B",
    "description": "Compact diamond sparkle ideal for placing next to tags or avatars.",
    "path": "d=\"M30 4C30 18 38 30 56 30C38 30 30 42 30 56C30 42 22 30 4 30C22 30 30 18 30 4Z\" fill=\"currentColor\""
  },
  {
    "id": "star-supernova-blast",
    "name": "Supernova Multi-Blast",
    "category": "stars-sparkles",
    "tags": [
      "supernova",
      "blast",
      "radiant",
      "loud"
    ],
    "viewBox": "0 0 130 130",
    "type": "stroke",
    "defaultColor": "#F7D046",
    "description": "Multi-ray explosive blast radiating outward in 12 directions.",
    "path": "d=\"M65 8V32 M65 98V122 M8 65H32 M98 65H122 M25 25L42 42 M88 88L105 105 M105 25L88 42 M42 88L25 105 M45 16L52 38 M78 92L85 114 M16 85L38 78 M92 52L114 45\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\" stroke-linecap=\"round\""
  },
  {
    "id": "star-tall-diamond",
    "name": "Tall Elongated Spark",
    "category": "stars-sparkles",
    "tags": [
      "diamond",
      "tall",
      "elongated",
      "sleek"
    ],
    "viewBox": "0 0 80 120",
    "type": "fill",
    "defaultColor": "#55BBDA",
    "description": "Tall vertical diamond sparkle with elongated top and bottom rays.",
    "path": "d=\"M40 6C40 38 52 60 76 60C52 60 40 82 40 114C40 82 28 60 4 60C28 60 40 38 40 6Z\" fill=\"currentColor\""
  },
  {
    "id": "star-double-twinkle",
    "name": "Paired Twin Sparkles",
    "category": "stars-sparkles",
    "tags": [
      "paired",
      "twin",
      "sparkles",
      "sweet"
    ],
    "viewBox": "0 0 110 90",
    "type": "fill",
    "defaultColor": "#EE8DB9",
    "description": "Two offset sparkles dancing together.",
    "path": "d=\"M42 6C42 22 52 34 68 34C52 34 42 46 42 62C42 46 32 34 16 34C32 34 42 22 42 6ZM84 44C84 54 90 62 100 62C90 62 84 70 84 80C84 70 78 62 68 62C78 62 84 54 84 44Z\" fill=\"currentColor\""
  },
  {
    "id": "star-scribble-core",
    "name": "Scribbled Core Star",
    "category": "stars-sparkles",
    "tags": [
      "core",
      "scribble",
      "doodle",
      "raw"
    ],
    "viewBox": "0 0 120 120",
    "type": "stroke",
    "defaultColor": "#4CA96D",
    "description": "Messy scribbled center bursting with outward needle spikes.",
    "path": "d=\"M60 10L64 45L95 25L75 52L110 60L75 68L95 95L64 75L60 110L56 75L25 95L45 68L10 60L45 52L25 25L56 45Z M54 52C58 48 64 56 60 62C56 68 50 56 62 58\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "badge-starburst-32",
    "name": "Signature 32-Point Starburst",
    "category": "badges-frames",
    "tags": [
      "starburst",
      "badge",
      "signature",
      "hero",
      "stamp"
    ],
    "viewBox": "0 0 140 140",
    "type": "fill",
    "defaultColor": "#EA552B",
    "description": "Chunky 32-point organic starburst badge.",
    "path": "d=\"M70 2L76 10L86 6L90 15L100 13L102 23L112 24L112 34L121 37L118 47L127 52L122 61L129 68L122 76L127 85L118 90L121 100L112 103L112 113L102 114L100 124L90 122L86 131L76 127L70 135L64 127L54 131L50 122L40 124L38 114L28 113L28 103L19 100L22 90L13 85L18 76L11 68L18 61L13 52L22 47L19 37L28 34L28 24L38 23L40 13L50 15L54 6L64 10Z\" fill=\"currentColor\""
  },
  {
    "id": "badge-starburst-16",
    "name": "16-Point Chunky Stamp",
    "category": "badges-frames",
    "tags": [
      "stamp",
      "16-point",
      "seal",
      "offer"
    ],
    "viewBox": "0 0 130 130",
    "type": "stroke",
    "defaultColor": "#F7D046",
    "description": "Chunky 16-point hand-drawn stamp badge.",
    "path": "d=\"M65 6L76 22L96 16L98 36L118 40L108 58L122 72L106 82L112 102L92 102L86 122L70 112L56 122L50 102L30 102L36 82L20 72L34 58L24 40L44 36L46 16L66 22Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"4.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "badge-scalloped-flower",
    "name": "12-Petal Flower Stamp",
    "category": "badges-frames",
    "tags": [
      "flower",
      "scallop",
      "stamp",
      "friendly"
    ],
    "viewBox": "0 0 130 130",
    "type": "fill",
    "defaultColor": "#EE8DB9",
    "description": "Organic 12-lobed flower badge for discount stickers or tags.",
    "path": "d=\"M65 6C74 6 78 18 86 20C94 22 104 16 110 24C116 32 110 42 114 50C118 58 128 62 128 71C128 80 118 84 114 92C110 100 116 110 110 118C104 126 94 120 86 122C78 124 74 136 65 136C56 136 52 124 44 122C36 120 26 126 20 118C14 110 20 100 16 92C12 84 2 80 2 71C2 62 12 58 16 50C20 42 14 32 20 24C26 16 36 22 44 20C52 18 56 6 65 6Z\" fill=\"currentColor\""
  },
  {
    "id": "badge-wavy-ribbon",
    "name": "Wavy Ribbon Badge",
    "category": "badges-frames",
    "tags": [
      "ribbon",
      "wavy",
      "badge",
      "award"
    ],
    "viewBox": "0 0 140 140",
    "type": "stroke",
    "defaultColor": "#0BDC85",
    "description": "Continuous rippling ruffled edge circular ribbon.",
    "path": "d=\"M70 12C85 8 98 16 108 26C118 36 126 49 122 64C118 79 126 92 116 104C106 116 93 124 78 120C63 116 50 124 38 114C26 104 18 91 22 76C26 61 18 48 28 36C38 24 51 16 70 12Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"4.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "frame-polaroid-scribble",
    "name": "Polaroid Scribble Frame",
    "category": "badges-frames",
    "tags": [
      "polaroid",
      "frame",
      "photo",
      "border"
    ],
    "viewBox": "0 0 150 180",
    "type": "stroke",
    "defaultColor": "#55BBDA",
    "description": "Instant photo frame with heavy scribble border and bottom caption block.",
    "path": "d=\"M16 14H134V166H16Z M28 26H122V124H28Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "frame-rough-rectangle",
    "name": "Double-Line Rough Frame",
    "category": "badges-frames",
    "tags": [
      "double",
      "frame",
      "card",
      "container"
    ],
    "viewBox": "0 0 200 140",
    "type": "stroke",
    "defaultColor": "#4CA96D",
    "description": "Two loose hand-sketched concentric rectangles.",
    "path": "d=\"M12 12C70 8 135 14 188 12C192 50 186 95 188 128C130 132 68 126 12 128C8 90 14 50 12 12Z M20 20C75 18 130 22 180 20C184 52 178 88 180 120C125 124 70 118 20 120C16 88 22 52 20 20Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "frame-corners-brackets",
    "name": "4-Corner Photo Brackets",
    "category": "badges-frames",
    "tags": [
      "corners",
      "brackets",
      "crop",
      "focus"
    ],
    "viewBox": "0 0 160 160",
    "type": "stroke",
    "defaultColor": "#EA552B",
    "description": "Four independent hand-drawn corner brackets to frame any content.",
    "path": "d=\"M12 40V14C14 12 25 12 40 12 M120 12H146C148 14 148 25 148 40 M148 120V146C146 148 135 148 120 148 M40 148H14C12 146 12 135 12 120\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "frame-zigzag-border",
    "name": "Zigzag Postage Border",
    "category": "badges-frames",
    "tags": [
      "postage",
      "stamp",
      "zigzag",
      "coupon"
    ],
    "viewBox": "0 0 180 130",
    "type": "stroke",
    "defaultColor": "#F7D046",
    "description": "Postage stamp perforated zigzag perimeter.",
    "path": "d=\"M10 10H170V120H10Z M10 25L4 32L10 40L4 48L10 56L4 64L10 72L4 80L10 88L4 96L10 104 M170 25L176 32L170 40L176 48L170 56L176 64L170 72L176 80L170 88L176 96L170 104 M25 10L32 4L40 10L48 4L56 10L64 4L72 10L80 4L88 10L96 4L104 10L112 4L120 10L128 4L136 10L144 4L152 10 M25 120L32 126L40 120L48 126L56 120L64 126L72 120L80 126L88 120L96 126L104 120L112 126L120 120L128 126L136 120L144 126L152 120\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "frame-scribble-box",
    "name": "Heavy Scribbled Box",
    "category": "badges-frames",
    "tags": [
      "scribble",
      "heavy",
      "marker",
      "card"
    ],
    "viewBox": "0 0 180 120",
    "type": "stroke",
    "defaultColor": "#EE8DB9",
    "description": "Dense back-and-forth scribbled border box.",
    "path": "d=\"M15 15C60 10 120 18 165 14C170 45 160 80 168 105C125 110 65 104 12 106C16 75 8 40 15 15Z M18 20L162 18L164 102L16 100Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "badge-ticket-stub",
    "name": "Notched Ticket Stub",
    "category": "badges-frames",
    "tags": [
      "ticket",
      "coupon",
      "notch",
      "voucher"
    ],
    "viewBox": "0 0 180 100",
    "type": "stroke",
    "defaultColor": "#0BDC85",
    "description": "Voucher card with semicircular ticket punch notches on either side.",
    "path": "d=\"M14 12H166V35C155 35 148 42 148 50C148 58 155 65 166 65V88H14V65C25 65 32 58 32 50C32 42 25 35 14 35Z M115 14V86\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "badge-award-ribbon",
    "name": "Award Ribbon Rosette",
    "category": "badges-frames",
    "tags": [
      "award",
      "ribbon",
      "rosette",
      "winner"
    ],
    "viewBox": "0 0 120 150",
    "type": "stroke",
    "defaultColor": "#55BBDA",
    "description": "Circular winner medallion with two hanging notched banner ribbons.",
    "path": "d=\"M60 14C36 14 18 32 18 56C18 80 36 98 60 98C84 98 102 80 102 56C102 32 84 14 60 14ZM42 94L32 138L52 126L70 138L62 96\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"4.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "badge-seal-stamp",
    "name": "Imperfect Seal Stamp",
    "category": "badges-frames",
    "tags": [
      "seal",
      "stamp",
      "rubber",
      "verified"
    ],
    "viewBox": "0 0 130 130",
    "type": "stroke",
    "defaultColor": "#EA552B",
    "description": "Double-ring official rubber stamp graphic with organic distressing.",
    "path": "d=\"M65 10C35 10 10 35 10 65C10 95 35 120 65 120C95 120 120 95 120 65C120 35 95 10 65 10ZM65 24C42 24 24 42 24 65C24 88 42 106 65 106C88 106 106 88 106 65C106 42 88 24 65 24Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "doodle-lightning-bolt",
    "name": "Funky Lightning Bolt",
    "category": "abstract-doodles",
    "tags": [
      "lightning",
      "bolt",
      "energy",
      "power",
      "funky"
    ],
    "viewBox": "0 0 90 140",
    "type": "fill",
    "defaultColor": "#F7D046",
    "description": "Thick, bold comic-book lightning bolt with organic jagged edges.",
    "path": "d=\"M48 6L14 68H44L28 134L76 56H46L66 6Z\" fill=\"currentColor\""
  },
  {
    "id": "doodle-spiral-coil",
    "name": "Coiled Telephone Wire",
    "category": "abstract-doodles",
    "tags": [
      "spiral",
      "coil",
      "telephone",
      "spring"
    ],
    "viewBox": "0 0 140 100",
    "type": "stroke",
    "defaultColor": "#EA552B",
    "description": "Horizontally looping telephone cord spring.",
    "path": "d=\"M10 50C25 20 40 20 45 50C50 80 35 80 40 50C45 20 60 20 65 50C70 80 55 80 60 50C65 20 80 20 85 50C90 80 75 80 80 50C85 20 100 20 105 50C110 80 95 80 100 50C105 20 120 20 130 50\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"4.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "doodle-cloud-puff",
    "name": "Dreamy Cloud Doodle",
    "category": "abstract-doodles",
    "tags": [
      "cloud",
      "puff",
      "dreamy",
      "weather"
    ],
    "viewBox": "0 0 150 100",
    "type": "stroke",
    "defaultColor": "#55BBDA",
    "description": "Soft hand-drawn puffy cloud with scalloped curves.",
    "path": "d=\"M32 78C18 78 10 66 14 54C18 42 32 38 40 40C44 26 62 18 76 24C86 16 104 18 112 30C124 28 136 38 136 50C142 62 136 78 120 78Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"4.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "doodle-heart-organic",
    "name": "Hand-Drawn Warm Heart",
    "category": "abstract-doodles",
    "tags": [
      "heart",
      "love",
      "warm",
      "organic"
    ],
    "viewBox": "0 0 110 100",
    "type": "fill",
    "defaultColor": "#EE8DB9",
    "description": "Sweet, slightly asymmetrical hand-drawn heart doodle.",
    "path": "d=\"M55 24C44 8 22 8 12 22C-2 40 8 68 55 96C102 68 112 40 98 22C88 8 66 8 55 24Z\" fill=\"currentColor\""
  },
  {
    "id": "doodle-smiley-funky",
    "name": "Funky Doodle Smiley",
    "category": "abstract-doodles",
    "tags": [
      "smiley",
      "happy",
      "face",
      "fun"
    ],
    "viewBox": "0 0 110 110",
    "type": "stroke",
    "defaultColor": "#F7D046",
    "description": "Two bold dot eyes and a loose curved smile.",
    "path": "d=\"M55 10C30 10 10 30 10 55C10 80 30 100 55 100C80 100 100 80 100 55C100 30 80 10 55 10ZM36 44A4 4 0 1 1 36 36A4 4 0 1 1 36 44ZM74 44A4 4 0 1 1 74 36A4 4 0 1 1 74 44ZM32 68C44 84 66 84 78 68\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "doodle-scribble-scratch",
    "name": "Cross-Hatch Scratch Texture",
    "category": "abstract-doodles",
    "tags": [
      "scratch",
      "crosshatch",
      "texture",
      "grungy"
    ],
    "viewBox": "0 0 110 110",
    "type": "stroke",
    "defaultColor": "#EA552B",
    "description": "Raw, energetic pen cross-hatch texture block.",
    "path": "d=\"M14 24L96 86 M14 54L96 116 M14 -6L96 56 M86 14L24 96 M116 14L54 96 M56 14L-6 96\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\" stroke-linecap=\"round\""
  },
  {
    "id": "doodle-wave-cluster",
    "name": "Rippling Energy Waves",
    "category": "abstract-doodles",
    "tags": [
      "waves",
      "ripples",
      "water",
      "flow"
    ],
    "viewBox": "0 0 140 80",
    "type": "stroke",
    "defaultColor": "#55BBDA",
    "description": "Trio of dynamic rippling fluid waves.",
    "path": "d=\"M10 20C30 10 50 30 70 20C90 10 110 30 130 20 M10 40C30 30 50 50 70 40C90 30 110 50 130 40 M10 60C30 50 50 70 70 60C90 50 110 70 130 60\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"4.5\" stroke-linecap=\"round\""
  },
  {
    "id": "doodle-infinity-loop",
    "name": "Hand-Drawn Infinity",
    "category": "abstract-doodles",
    "tags": [
      "infinity",
      "forever",
      "loop",
      "smooth"
    ],
    "viewBox": "0 0 140 70",
    "type": "stroke",
    "defaultColor": "#0BDC85",
    "description": "Casual horizontal figure-8 infinity loop.",
    "path": "d=\"M40 35C15 15 10 55 40 35C70 15 70 55 100 35C130 15 125 55 100 35C70 15 70 55 40 35Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "doodle-sun-face",
    "name": "Playful Sun Rays",
    "category": "abstract-doodles",
    "tags": [
      "sun",
      "rays",
      "warmth",
      "bright"
    ],
    "viewBox": "0 0 120 120",
    "type": "stroke",
    "defaultColor": "#F7D046",
    "description": "Happy hand-drawn sun with wavy radiating tendrils.",
    "path": "d=\"M60 35A25 25 0 1 1 60 85A25 25 0 1 1 60 35ZM60 10C64 18 56 22 60 30M60 90C64 98 56 102 60 110M10 60C18 64 22 56 30 60M90 60C98 64 102 56 110 60M25 25C32 30 30 36 38 38M82 82C90 86 88 92 95 95M95 25C88 30 90 36 82 38M38 82C30 86 32 92 25 95\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "doodle-splash-splatter",
    "name": "Comic Splash Droplets",
    "category": "abstract-doodles",
    "tags": [
      "splash",
      "splatter",
      "water",
      "comic"
    ],
    "viewBox": "0 0 130 110",
    "type": "fill",
    "defaultColor": "#4CA96D",
    "description": "Cartoon comic fluid splash and droplet spray.",
    "path": "d=\"M65 30C58 45 42 55 24 50C40 65 48 85 45 100C58 88 72 88 85 100C82 85 90 65 106 50C88 55 72 45 65 30ZM24 24A6 6 0 1 1 24 12A6 6 0 1 1 24 24ZM106 24A6 6 0 1 1 106 12A6 6 0 1 1 106 24ZM65 12A4 4 0 1 1 65 4A4 4 0 1 1 65 12Z\" fill=\"currentColor\""
  },
  {
    "id": "doodle-zig-zag-vertical",
    "name": "Vertical Zigzag Spine",
    "category": "abstract-doodles",
    "tags": [
      "spine",
      "vertical",
      "divider",
      "zigzag"
    ],
    "viewBox": "0 0 50 160",
    "type": "stroke",
    "defaultColor": "#EA552B",
    "description": "Vertical zig-zag line for separating columns or margins.",
    "path": "d=\"M25 10L10 25L40 45L10 65L40 85L10 105L40 125L10 145\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"4.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "doodle-cube-isometric",
    "name": "Hand-Drawn 3D Wire Cube",
    "category": "abstract-doodles",
    "tags": [
      "cube",
      "isometric",
      "3d",
      "tech"
    ],
    "viewBox": "0 0 110 120",
    "type": "stroke",
    "defaultColor": "#55BBDA",
    "description": "Loose hand-drawn isometric wireframe cube.",
    "path": "d=\"M55 12L96 35V80L55 104L14 80V35Z M55 12V58L96 80 M55 58L14 80\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "doodle-eyes-pair",
    "name": "Curious Doodle Eyes",
    "category": "abstract-doodles",
    "tags": [
      "eyes",
      "curious",
      "look",
      "character"
    ],
    "viewBox": "0 0 130 70",
    "type": "fill",
    "defaultColor": "#141416",
    "description": "Two playful cartoon eyes glancing sideways.",
    "path": "d=\"M35 12C18 12 6 24 6 42C6 58 18 68 35 68C52 68 64 58 64 42C64 24 52 12 35 12ZM32 50A10 10 0 1 1 32 30A10 10 0 1 1 32 50ZM95 12C78 12 66 24 66 42C66 58 78 68 95 68C112 68 124 58 124 42C124 24 112 12 95 12ZM92 50A10 10 0 1 1 92 30A10 10 0 1 1 92 50Z\" fill=\"currentColor\""
  },
  {
    "id": "doodle-speech-bubble",
    "name": "Comic Speech Bubble",
    "category": "abstract-doodles",
    "tags": [
      "speech",
      "bubble",
      "talk",
      "dialogue"
    ],
    "viewBox": "0 0 140 120",
    "type": "stroke",
    "defaultColor": "#0BDC85",
    "description": "Loose rounded dialogue speech bubble with pointer tail.",
    "path": "d=\"M20 20H120C128 20 132 26 132 34V76C132 84 128 90 120 90H55L25 110V90H20C12 90 8 84 8 76V34C8 26 12 20 20 20Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"4.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "doodle-thought-bubble",
    "name": "Dream Thought Bubble",
    "category": "abstract-doodles",
    "tags": [
      "thought",
      "dream",
      "cloud",
      "think"
    ],
    "viewBox": "0 0 150 130",
    "type": "stroke",
    "defaultColor": "#EE8DB9",
    "description": "Puffy thought cloud bubble with trailing thought dots.",
    "path": "d=\"M36 82C22 82 14 70 18 58C22 46 36 42 44 44C48 30 66 22 80 28C90 20 108 22 116 34C128 32 140 42 140 54C146 66 140 82 124 82Z M36 98A6 6 0 1 1 36 86A6 6 0 1 1 36 98ZM24 114A4 4 0 1 1 24 106A4 4 0 1 1 24 114Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "doodle-swirl-vortex",
    "name": "Swirl Flourish Vortex",
    "category": "abstract-doodles",
    "tags": [
      "swirl",
      "vortex",
      "flourish",
      "doodle"
    ],
    "viewBox": "0 0 120 120",
    "type": "stroke",
    "defaultColor": "#F7D046",
    "description": "Decorative calligraphic swirl doodle.",
    "path": "d=\"M10 60C10 32 32 10 60 10C88 10 110 32 110 60C110 88 88 110 60 110C36 110 18 92 18 68C18 48 34 32 54 32C70 32 84 46 84 62C84 76 72 88 58 88C46 88 38 78 38 66C38 56 46 48 56 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"4.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "accent-double-exclamation",
    "name": "Double Exclamation!!",
    "category": "accents-emphasis",
    "tags": [
      "exclamation",
      "emphasis",
      "loud",
      "funky"
    ],
    "viewBox": "0 0 70 110",
    "type": "fill",
    "defaultColor": "#EA552B",
    "description": "Two energetic hand-drawn exclamation points for hype.",
    "path": "d=\"M14 10L24 64H12L14 10ZM18 78A8 8 0 1 1 18 94A8 8 0 1 1 18 78ZM46 16L56 70H44L46 16ZM50 84A8 8 0 1 1 50 100A8 8 0 1 1 50 84Z\" fill=\"currentColor\""
  },
  {
    "id": "accent-question-mark",
    "name": "Whimsical Question Mark",
    "category": "accents-emphasis",
    "tags": [
      "question",
      "curious",
      "help",
      "quiz"
    ],
    "viewBox": "0 0 70 110",
    "type": "stroke",
    "defaultColor": "#55BBDA",
    "description": "Funky curly question mark with detached bottom dot.",
    "path": "d=\"M16 35C16 18 28 8 42 10C56 12 62 26 56 38C48 50 36 56 36 72 M36 88V94\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"7\" stroke-linecap=\"round\""
  },
  {
    "id": "accent-quotation-marks",
    "name": "Big Playful Quotes",
    "category": "accents-emphasis",
    "tags": [
      "quotes",
      "testimonial",
      "editorial",
      "words"
    ],
    "viewBox": "0 0 90 70",
    "type": "fill",
    "defaultColor": "#EE8DB9",
    "description": "Large comic quotation marks for testimonial blocks.",
    "path": "d=\"M10 38C10 20 22 8 36 8V22C28 22 24 28 24 38H38V66H10V38ZM52 38C52 20 64 8 78 8V22C70 22 66 28 66 38H80V66H52V38Z\" fill=\"currentColor\""
  },
  {
    "id": "accent-emphasis-rays-3",
    "name": "Corner 3-Ray Burst",
    "category": "accents-emphasis",
    "tags": [
      "rays",
      "corner",
      "burst",
      "emphasis"
    ],
    "viewBox": "0 0 70 70",
    "type": "stroke",
    "defaultColor": "#F7D046",
    "description": "Three angled rays to place on top corners of buttons or cards.",
    "path": "d=\"M10 60L25 45 M35 60L42 35 M60 50L58 20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"5.5\" stroke-linecap=\"round\""
  },
  {
    "id": "accent-emphasis-rays-5",
    "name": "5-Ray Fan Burst",
    "category": "accents-emphasis",
    "tags": [
      "rays",
      "fan",
      "spotlight",
      "energy"
    ],
    "viewBox": "0 0 100 70",
    "type": "stroke",
    "defaultColor": "#0BDC85",
    "description": "Five rays fanning outward in an energetic crown arc.",
    "path": "d=\"M12 55L30 44 M26 62L44 34 M50 65L50 24 M74 62L56 34 M88 55L70 44\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"5\" stroke-linecap=\"round\""
  },
  {
    "id": "accent-crown",
    "name": "3-Point King Crown",
    "category": "accents-emphasis",
    "tags": [
      "crown",
      "king",
      "premium",
      "pro"
    ],
    "viewBox": "0 0 110 70",
    "type": "fill",
    "defaultColor": "#F7D046",
    "description": "Hand-drawn royal crown with 3 circular point jewels.",
    "path": "d=\"M10 54L22 20L55 38L88 20L100 54H10Z M22 14A4 4 0 1 1 22 6A4 4 0 1 1 22 14ZM55 32A4 4 0 1 1 55 24A4 4 0 1 1 55 32ZM88 14A4 4 0 1 1 88 6A4 4 0 1 1 88 14Z\" fill=\"currentColor\""
  },
  {
    "id": "accent-checkmark",
    "name": "Confident Swoop Checkmark",
    "category": "accents-emphasis",
    "tags": [
      "check",
      "success",
      "done",
      "affirmation"
    ],
    "viewBox": "0 0 90 80",
    "type": "stroke",
    "defaultColor": "#4CA96D",
    "description": "Vibrant, confident hand-drawn checkmark with long tapered finish.",
    "path": "d=\"M12 44C24 54 32 64 38 70C52 48 68 28 84 14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"7\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "accent-cross-x",
    "name": "Playful Imperfect X",
    "category": "accents-emphasis",
    "tags": [
      "cross",
      "x",
      "delete",
      "cancel"
    ],
    "viewBox": "0 0 80 80",
    "type": "stroke",
    "defaultColor": "#EA552B",
    "description": "Hand-sketched X strike mark.",
    "path": "d=\"M14 14L66 66 M66 14L14 66\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"7\" stroke-linecap=\"round\""
  },
  {
    "id": "accent-hashtag",
    "name": "Chunky Hand Hashtag",
    "category": "accents-emphasis",
    "tags": [
      "hashtag",
      "tag",
      "social",
      "topic"
    ],
    "viewBox": "0 0 90 90",
    "type": "stroke",
    "defaultColor": "#55BBDA",
    "description": "Tilted hand-drawn hashtag/pound symbol.",
    "path": "d=\"M32 10L22 80 M68 10L58 80 M12 32H78 M10 60H76\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"6\" stroke-linecap=\"round\""
  },
  {
    "id": "accent-bracket-left",
    "name": "Curly Brace { Left",
    "category": "accents-emphasis",
    "tags": [
      "brace",
      "curly",
      "bracket",
      "code"
    ],
    "viewBox": "0 0 50 120",
    "type": "stroke",
    "defaultColor": "#EE8DB9",
    "description": "Hand-drawn opening curly bracket for grouping items.",
    "path": "d=\"M38 10C24 10 24 28 24 45C24 55 12 60 12 60C12 60 24 65 24 75C24 92 24 110 38 110\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "accent-bracket-right",
    "name": "Curly Brace } Right",
    "category": "accents-emphasis",
    "tags": [
      "brace",
      "curly",
      "bracket",
      "code"
    ],
    "viewBox": "0 0 50 120",
    "type": "stroke",
    "defaultColor": "#EE8DB9",
    "description": "Hand-drawn closing curly bracket for grouping items.",
    "path": "d=\"M12 10C26 10 26 28 26 45C26 55 38 60 38 60C38 60 26 65 26 75C26 92 26 110 12 110\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "accent-dot-cluster",
    "name": "Trio Emphasis Dots",
    "category": "accents-emphasis",
    "tags": [
      "dots",
      "ellipsis",
      "more",
      "trio"
    ],
    "viewBox": "0 0 90 40",
    "type": "fill",
    "defaultColor": "#0BDC85",
    "description": "Three slightly irregular organic marker dots.",
    "path": "d=\"M18 20A8 8 0 1 1 18 4A8 8 0 1 1 18 20ZM46 22A9 9 0 1 1 46 4A9 9 0 1 1 46 22ZM74 20A8 8 0 1 1 74 4A8 8 0 1 1 74 20Z\" fill=\"currentColor\""
  },
  {
    "id": "accent-crossout-line",
    "name": "Hand Cross-out Strikethrough",
    "category": "accents-emphasis",
    "tags": [
      "crossout",
      "strikethrough",
      "correction",
      "price"
    ],
    "viewBox": "0 0 180 30",
    "type": "stroke",
    "defaultColor": "#EA552B",
    "description": "Diagonal wavy line to cross out old prices or strike through words.",
    "path": "d=\"M6 18C45 10 95 24 140 14C155 10 168 18 174 12\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"5.5\" stroke-linecap=\"round\""
  },
  {
    "id": "accent-fire-flame",
    "name": "Hot Doodle Flame",
    "category": "accents-emphasis",
    "tags": [
      "fire",
      "flame",
      "hot",
      "trending"
    ],
    "viewBox": "0 0 90 120",
    "type": "fill",
    "defaultColor": "#EA552B",
    "description": "3-tongue comic fire flame for trending items or hot features.",
    "path": "d=\"M45 6C52 24 64 36 78 48C88 56 90 70 86 82C80 102 62 114 45 114C28 114 10 102 4 82C0 66 10 48 24 40C28 54 36 62 46 66C40 50 40 28 45 6Z\" fill=\"currentColor\""
  },
  {
    "id": "signature-hero-badge",
    "name": "Signature Starburst Badge",
    "category": "signature-shapes",
    "tags": [
      "signature",
      "hero",
      "badge",
      "starburst",
      "stamp"
    ],
    "viewBox": "0 0 442 445",
    "type": "mixed",
    "defaultColor": "#EA552B",
    "description": "Signature 32-point organic starburst badge.",
    "rawSvg": "<path d=\"M42.5 164.6C42.2 164 42 163.5 41.7 163C36.4 154.5 30.7 146.3 23.6 139.1C22.5 138 21.4 136.7 20.5 135.4C17.9 131.6 19 127.5 23.3 125.8C25.4 125 27.6 124.5 29.8 124.4C39.4 123.8 49 124.2 58.5 125.6C59.4 125.7 60.2 125.8 61.4 125.9C61.1 125 60.9 124.4 60.7 123.7C58.3 117.7 55.2 112 52 106.3C49.3 101.6 46.9 96.9 44.4 92.2C43.8 91.1 43.3 89.9 43 88.6C41.9 84.4 44.4 81 48.8 80.9C50.1 80.9 51.5 81.1 52.8 81.3C61.2 82.5 69.3 85.2 77.4 87.6C82.3 89 87.2 90.4 92.4 91.8C92.4 90.9 92.5 90.4 92.4 89.9C90.3 78 88.4 66.1 85.5 54.4C85.3 53.5 85.1 52.5 85 51.6C84.8 47.3 88.2 44.2 92.4 45.1C94.1 45.5 95.9 46.3 97.4 47.3C100.3 49.3 103 51.6 105.7 53.9C109.5 57.2 113.3 60.5 117 63.9C120.7 67.2 125.2 69.1 129.6 72C129.6 71 129.6 70.4 129.6 69.8C129.3 62.6 128.9 55.4 128.8 48.2C128.7 39.8 128.7 31.4 128.8 23C128.8 21.8 128.9 20.6 129.2 19.4C130 16 133.1 14.8 136.1 16.6C137.1 17.2 138 18 138.9 18.8C149.5 27.5 159 37.3 168.8 46.9L171 48.6C171.5 46.7 172 44.8 172.4 42.8C174.7 31.4 177 20.1 179.3 8.7C181.7 1 185.8 0.2 188.6 3.6C193.1 10.6 206.2 31.8 211.2 38.6L214.3 38.2C216.8 31 221.9 16.5 226.7 5.5C231.5 -1.2 235.9 -1.1 238.4 2.7C245.4 22.2 250.8 38.6 253.6 46.8C257.5 45.4 268.5 26 276.7 13.1C280.3 9 284.5 5.3 291.1 12.1C292.8 24.7 294.8 50.1 297.3 63.2C305.2 57 321.6 42.6 333.4 33C342.5 28.4 346.9 30.8 347.4 36.3C345.2 54.5 341.6 71.2 340.2 80.4C350.9 75.5 365.6 68.6 376.9 64C385.2 62.7 387.8 69.8 386.9 74.2C379 95.9 375.3 105.5 371.6 115.1C382.4 112.8 406.7 109.5 413.9 107.9C419.4 107.9 421.2 113 416.2 123.2C406.6 136 397 149.8 394.4 153.8C409.9 157.6 423.5 158.5 431.9 158.2C439.1 158.4 441.2 161.9 437.9 168.5C424 184.2 414.7 192.6 408.5 197.4C424.5 207.3 436.7 211.9 438.5 222.1C427.4 229.1 419.2 234.4 409.1 237.6C423.8 250.7 430.9 256.8 436.6 261.1C439.4 263.1 437.1 268.7 434.7 270.3C414.8 278.6 404.1 280.8 395.4 282.5C405.2 297.1 413.5 308.3 416.5 312.2C418.2 315.1 414.3 319.9 409.7 321.1C394.2 321.8 384.2 322.1 377.3 321.4C381.3 334.5 384.6 345 387.9 355.4C389.3 360 382.6 363.7 375.9 363.3C357.7 359 351.8 356.9 346.5 354.9C347.4 375.2 347.7 382.3 349.2 393.3C349.1 396.5 343.6 398 340.1 397.1C322.1 389.6 313.2 383.8 311.1 385.1C308.8 406.4 307.7 417.1 307.1 421.1C306.2 424.9 299.4 425.1 295.8 423.2C282.2 411.1 271.7 399.7 265.8 394.8C261.9 415 259.9 425.2 257.7 434.3C256.5 436.4 251.9 436.2 248.4 433.4C239.2 417.7 235.6 410.7 230.6 404.8C213.6 427.2 207 439.7 204.9 442.6C202.8 444.8 197.4 442.8 194.8 439.1C187.7 423.4 184.8 410.2 181.8 400.3C171.8 412.9 160.3 426.1 153.8 432.9C151.7 434.3 148.8 431 146 422.4C144.2 397.7 143.5 387.1 142.5 387.3C127.4 396 113.9 404.8 107 409.7C103.8 411.5 99.9 406.4 100.1 392.2C101.1 383.1 103.9 368.1 103.9 366.4C85.2 371.4 75.4 375 67.5 377.7C61 378.4 58.8 371.1 63.8 353.3C68.6 340.6 74.4 328.4 74.2 327C56.8 331.5 47.8 333.4 37.2 338.5C31 338.8 30.3 334.1 31.8 330.6C42.5 310.4 48.5 300.6 50 298C32 296.9 20.7 294.1 10.6 292.1C4.6 290.9 4.6 285.7 6.7 282.5C20.8 269.3 27.9 262.7 34.5 255.6C17.5 245.1 9.3 241.2 3.1 237.6C-1.3 233 0.9 228 4.9 225.1C23.4 216.4 33 211.8 42.5 207.3C33.4 199.9 23.9 193.6 14.4 187.3C7.1 182.4 3.9 176.4 8.2 172.4C25 168.9 32.2 167.3 39.3 165.7C40.9 165.1 41.6 164.8 42.5 164.6Z\" fill=\"currentColor\"/>"
  },
  {
    "id": "signature-contour-circle",
    "name": "Organic Contour Circle",
    "category": "signature-shapes",
    "tags": [
      "contour",
      "circular",
      "layered",
      "scribble",
      "organic"
    ],
    "viewBox": "0 0 204 210",
    "type": "fill",
    "defaultColor": "#F7D046",
    "description": "Multi-layered circular contour scribble.",
    "path": "d=\"M0 103.8C0.7 75 11.3 49 33.6 28C42.3 20 52.3 13.6 62.8 8.1C72.9 2.9 83.8 0.5 95.1 0.1C112.8 -0.6 129.7 2.4 145.5 10.5C175.2 25.7 193.7 50 201 82.4C209.1 118 197.7 155.8 171.4 181.2C154.9 197.1 135.2 206.4 112.4 209C73.9 213.4 36.4 194.7 15.7 161.1C5.3 144 0.2 125.3 0 103.8Z\" fill=\"currentColor\""
  },
  {
    "id": "signature-tri-color-flourish",
    "name": "Organic Fluid Flourish",
    "category": "signature-shapes",
    "tags": [
      "fluid",
      "organic",
      "flourish",
      "complex"
    ],
    "viewBox": "0 0 216 267",
    "type": "fill",
    "defaultColor": "#EE8DB9",
    "description": "Complex organic fluid flourish scribble.",
    "path": "d=\"M22.9 246.8C22.6 240.7 22.4 234.5 22.3 228.3C21.9 220.7 21.7 213.1 21.3 205.4C20.8 197.4 20 189.5 19.6 181.4C18.7 163.7 19.5 146.1 23.8 128.8C28.6 109.3 36.7 91.2 48.9 75.1C65.8 52.7 88.4 39.3 116.3 35.4C130.9 33.4 145.4 34.2 159.8 37.5C165.5 38.7 170.9 41.1 175.7 44.4C191.6 55.3 195.1 60.7 202 76.3C206.9 87.2 209.6 98.7 212.1 110.3C214.5 121.8 215.4 133.3 215.5 145C215.6 158.3 215.6 171.6 215.2 184.9C214.8 202.4 213.1 219.7 210.1 236.8C209.3 241.3 208.3 245.9 207.3 250.4C207 251.4 206.7 252.5 206.3 253.4C205.1 256.1 203 257.7 200.1 257.9C197 258.3 194 258.7 190.9 258.6C185.1 258.5 179.4 258.3 173.7 257.8C170.5 257.6 167.3 257.1 164.1 256.6C160.2 256 158.3 254 158.1 250.1C157.9 247.4 157.9 244.7 158.1 242C158.6 234.1 159 226.1 159.8 218.2C160.3 213.6 161.4 209 162.3 204.5C163.4 198.9 164.1 193.3 164.1 187.6C164.2 178.5 164 169.4 163.9 160.3C163.9 156.2 163.2 152.1 162.4 148C161.4 142.8 160.6 137.5 159.6 132.2C158.4 126.3 157.1 120.4 155.9 114.6C155 110.2 154.3 105.8 153.2 101.4C151.3 93.5 146.8 87.3 140.1 82.6C136 79.7 131.6 78.5 126.7 78.7C121.4 78.8 116.4 79.9 111.6 82.3C107.6 84.2 103.7 85.9 99.8 87.7C95.5 89.6 91.6 92.3 88.1 95.4C80.9 101.7 74.6 108.7 69 116.4C63.5 123.9 60.5 132.3 58.6 141.3C56 153.3 55.2 165.4 55.5 177.7C55.9 192.5 57 207.1 58.4 221.8C59.2 229.7 59.7 237.6 60.3 245.4C60.6 249.5 59.6 253.1 56.4 256C53 259 48.8 264.3 40.2 265.2C38.2 265.4 36.2 265.4 34.1 265.6C31 265.9 28.9 264.4 27.3 261.7C24.5 257.1 23.3 252.1 22.9 246.8Z\" fill=\"currentColor\""
  },
  {
    "id": "signature-calligraphic-flow",
    "name": "Calligraphic Flow Curve",
    "category": "signature-shapes",
    "tags": [
      "calligraphy",
      "flow",
      "ink",
      "curve"
    ],
    "viewBox": "0 0 180 200",
    "type": "fill",
    "defaultColor": "#4CA96D",
    "description": "Flowing calligraphic organic curve.",
    "path": "d=\"M38 18C44 14 55 14 62 20C75 32 82 52 86 70C92 95 98 120 106 145C110 158 118 170 128 180C118 186 106 186 96 178C82 165 74 148 68 130C62 108 55 86 48 64C44 50 38 34 38 18Z\" fill=\"currentColor\""
  },
  {
    "id": "signature-swirl-accent",
    "name": "Hand-Drawn Swirl Accent",
    "category": "signature-shapes",
    "tags": [
      "flourish",
      "accent",
      "doodle",
      "swirl"
    ],
    "viewBox": "0 0 150 150",
    "type": "fill",
    "defaultColor": "#55BBDA",
    "description": "Accent swirl doodle flourish.",
    "path": "d=\"M75 18C82 18 88 24 90 32C94 48 88 64 80 78C72 92 60 104 46 114C40 118 32 118 28 112C24 104 26 96 32 90C44 78 56 64 64 48C68 38 70 26 75 18Z\" fill=\"currentColor\""
  },
  {
    "id": "signature-headline-swoosh",
    "name": "Editorial Headline Swoosh",
    "category": "signature-shapes",
    "tags": [
      "headline",
      "underline",
      "swoosh",
      "editorial"
    ],
    "viewBox": "0 0 100 40",
    "type": "fill",
    "defaultColor": "#EA552B",
    "description": "Headline emphasis underline swoosh with accent dot.",
    "path": "d=\"M4 24C32 20 65 24 94 18C82 26 62 32 42 32C24 32 12 28 4 24Z M88 12A6 6 0 1 1 88 0A6 6 0 1 1 88 12Z\" fill=\"currentColor\""
  },
  {
    "id": "signature-downward-arrow",
    "name": "Organic Downward Arrow",
    "category": "signature-shapes",
    "tags": [
      "arrow",
      "pointer",
      "down",
      "organic"
    ],
    "viewBox": "0 0 85 114",
    "type": "fill",
    "defaultColor": "#EA552B",
    "description": "Downward pointing hand-drawn arrow.",
    "path": "d=\"M16 12C32 30 48 55 52 82L38 78L62 108L76 74L62 76C58 50 42 26 24 8Z\" fill=\"currentColor\""
  },
  {
    "id": "signature-doodle-sparkle",
    "name": "Organic Doodle Sparkle",
    "category": "signature-shapes",
    "tags": [
      "star",
      "sparkle",
      "doodle",
      "organic"
    ],
    "viewBox": "0 0 55 65",
    "type": "fill",
    "defaultColor": "#F7D046",
    "description": "Organic 4-point doodle sparkle.",
    "path": "d=\"M28 2C30 18 38 28 52 32C38 36 30 46 28 62C26 46 18 36 4 32C18 28 26 18 28 2Z\" fill=\"currentColor\""
  },
  {
    "id": "signature-capsule-loop",
    "name": "Word Capsule Highlight",
    "category": "signature-shapes",
    "tags": [
      "capsule",
      "loop",
      "highlight",
      "enclosure"
    ],
    "viewBox": "0 0 242 83",
    "type": "fill",
    "defaultColor": "#F7D046",
    "description": "Oval highlight capsule for enclosing important words.",
    "path": "d=\"M38 18C85 12 155 12 204 18C232 22 238 52 208 60C162 68 85 68 38 62C10 56 12 24 42 20C88 16 152 16 198 22\" fill=\"currentColor\""
  },
  {
    "id": "signature-hatching-texture",
    "name": "Organic Hatching Texture",
    "category": "signature-shapes",
    "tags": [
      "texture",
      "scratch",
      "hatching",
      "ink"
    ],
    "viewBox": "0 0 135 167",
    "type": "fill",
    "defaultColor": "#141416",
    "description": "Hand-drawn pen hatching texture for shading and backgrounds.",
    "path": "d=\"M24 16C42 16 68 32 82 50C98 72 108 98 116 124C120 138 112 152 98 152C82 152 74 138 70 124C62 98 52 72 38 50C30 38 18 28 24 16Z\" fill=\"currentColor\""
  }
];

export function getScribblesByCategory(category: string): ScribbleAsset[] {
  if (!category || category === 'all') return SCRIBBLES_ASSETS;
  return SCRIBBLES_ASSETS.filter((item) => item.category === category);
}

export function getScribbleById(id: string): ScribbleAsset | undefined {
  return SCRIBBLES_ASSETS.find((item) => item.id === id);
}
