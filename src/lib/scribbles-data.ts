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
    "count": 248
  },
  {
    "id": "algorithms-data-structures",
    "name": "Algorithms & Data Structures",
    "icon": "Binary",
    "count": 30
  },
  {
    "id": "system-design",
    "name": "System Design",
    "icon": "Server",
    "count": 30
  },
  {
    "id": "funky-complex",
    "name": "Funky & Colorful",
    "icon": "Palette",
    "count": 72
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
    "id": "funky-cactus-spotted",
    "name": "Cactus Spotted Hand",
    "category": "funky-complex",
    "tags": [
      "cactus",
      "hand",
      "green",
      "dots",
      "spotted",
      "funky",
      "organic",
      "botanical"
    ],
    "viewBox": "0 0 160 220",
    "type": "mixed",
    "defaultColor": "#4CA96D",
    "description": "Funky hand-drawn 3-pronged cactus shape in kelly green dotted with organic ink freckles.",
    "rawSvg": "<path d=\"M68 215 C54 215 46 202 46 182 C46 156 48 126 48 112 C48 108 42 108 38 108 C26 108 17 99 15 86 C13 72 14 55 16 42 C18 30 28 22 40 23 C52 24 59 34 59 47 C59 63 58 80 59 86 C60 90 65 90 69 90 C70 78 71 48 72 26 C73 12 82 2 97 2 C112 2 121 12 121 26 C121 58 120 88 122 96 C126 96 130 92 131 86 C133 74 135 60 137 48 C139 36 149 28 159 30 C169 32 175 42 174 54 C172 74 168 101 156 118 C146 132 132 138 118 138 C114 138 112 142 112 148 C112 166 112 182 108 196 C104 210 88 215 68 215 Z\" fill=\"currentColor\" stroke=\"#141416\" stroke-width=\"2.5\" stroke-linejoin=\"round\" />\n  <ellipse cx=\"88\" cy=\"38\" rx=\"3.5\" ry=\"6\" transform=\"rotate(-10 88 38)\" fill=\"#141416\" />\n  <ellipse cx=\"94\" cy=\"70\" rx=\"3\" ry=\"5.5\" transform=\"rotate(12 94 70)\" fill=\"#141416\" />\n  <ellipse cx=\"82\" cy=\"104\" rx=\"3.5\" ry=\"6\" transform=\"rotate(-5 82 104)\" fill=\"#141416\" />\n  <ellipse cx=\"95\" cy=\"138\" rx=\"3.5\" ry=\"6.5\" transform=\"rotate(8 95 138)\" fill=\"#141416\" />\n  <ellipse cx=\"78\" cy=\"172\" rx=\"3\" ry=\"5.5\" transform=\"rotate(-15 78 172)\" fill=\"#141416\" />\n  <ellipse cx=\"90\" cy=\"195\" rx=\"3\" ry=\"5\" transform=\"rotate(5 90 195)\" fill=\"#141416\" />\n  <ellipse cx=\"36\" cy=\"46\" rx=\"3\" ry=\"5\" transform=\"rotate(15 36 46)\" fill=\"#141416\" />\n  <ellipse cx=\"38\" cy=\"74\" rx=\"3.2\" ry=\"5.8\" transform=\"rotate(-8 38 74)\" fill=\"#141416\" />\n  <ellipse cx=\"50\" cy=\"98\" rx=\"2.8\" ry=\"5\" transform=\"rotate(20 50 98)\" fill=\"#141416\" />\n  <ellipse cx=\"152\" cy=\"56\" rx=\"3\" ry=\"5.5\" transform=\"rotate(-12 152 56)\" fill=\"#141416\" />\n  <ellipse cx=\"146\" cy=\"85\" rx=\"3.2\" ry=\"5.8\" transform=\"rotate(10 146 85)\" fill=\"#141416\" />\n  <ellipse cx=\"132\" cy=\"115\" rx=\"3\" ry=\"5\" transform=\"rotate(-20 132 115)\" fill=\"#141416\" />"
  },
  {
    "id": "funky-blue-wire-scribble",
    "name": "Blue Wireframe Scribble Blob",
    "category": "funky-complex",
    "tags": [
      "blob",
      "scribble",
      "wire",
      "blue",
      "organic",
      "pebble",
      "loopy"
    ],
    "viewBox": "0 0 240 220",
    "type": "mixed",
    "defaultColor": "#55BBDA",
    "description": "Large asymmetric sky blue organic stone blob with chaotic, energetic loopy black scribble wire running over it.",
    "rawSvg": "<path d=\"M42 188 C10 162 4 112 18 68 C32 24 82 8 132 12 C182 16 226 50 234 100 C242 150 218 192 172 210 C128 226 76 214 42 188 Z\" fill=\"currentColor\" />\n  <path d=\"M38 160 C55 90 85 45 140 50 C195 55 210 110 165 145 C120 180 65 190 75 125 C85 60 170 30 210 85 C240 125 180 205 120 200 C60 195 40 130 90 90 C140 50 205 70 215 130 C225 190 145 215 105 180 C65 145 95 95 135 85 C175 75 195 115 175 155 C155 195 110 190 85 170 C48 140 70 70 120 62 C168 54 212 95 190 160 C175 200 130 212 95 195\" fill=\"none\" stroke=\"#141416\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />"
  },
  {
    "id": "funky-yellow-spring-oval",
    "name": "Sunny Spring Oval",
    "category": "funky-complex",
    "tags": [
      "oval",
      "spring",
      "coil",
      "yellow",
      "telephone",
      "pill",
      "banner"
    ],
    "viewBox": "0 0 260 130",
    "type": "mixed",
    "defaultColor": "#F7D046",
    "description": "Sunny yellow pill oval with hand-drawn continuous black spring coils looping across.",
    "rawSvg": "<ellipse cx=\"130\" cy=\"65\" rx=\"118\" ry=\"46\" transform=\"rotate(-2 130 65)\" fill=\"currentColor\" />\n  <path d=\"M18 78 C35 60 54 50 68 36 C78 24 64 14 52 28 C38 44 42 76 60 88 C78 98 100 85 114 68 C128 50 118 32 104 40 C90 50 92 84 110 94 C128 104 152 86 166 66 C180 46 170 28 156 36 C140 46 142 82 160 92 C178 102 202 82 216 62 C230 42 218 26 206 34 C192 44 196 80 214 90 C228 98 244 86 252 70\" fill=\"none\" stroke=\"#141416\" stroke-width=\"4.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />"
  },
  {
    "id": "funky-pink-speckled-pebble",
    "name": "Bubblegum Seed Pebble",
    "category": "funky-complex",
    "tags": [
      "pink",
      "pebble",
      "watermelon",
      "seeds",
      "speckled",
      "polka",
      "organic"
    ],
    "viewBox": "0 0 220 200",
    "type": "mixed",
    "defaultColor": "#EE8DB9",
    "description": "Organic bubblegum pink pebble decorated with scattered dark berry-pink watermelon seed droplets.",
    "rawSvg": "<path d=\"M35 145 C15 90 42 28 105 16 C168 6 208 52 214 112 C220 172 168 202 108 196 C48 190 52 196 35 145 Z\" fill=\"currentColor\" />\n  <path d=\"M72 82 C72 76 77 68 80 62 C83 68 88 76 88 82 C88 87 84 91 80 91 C76 91 72 87 72 82 Z\" fill=\"#D14881\" transform=\"rotate(-15 80 82)\" />\n  <path d=\"M120 54 C120 48 125 40 128 34 C131 40 136 48 136 54 C136 59 132 63 128 63 C124 63 120 59 120 54 Z\" fill=\"#D14881\" transform=\"rotate(10 128 54)\" />\n  <path d=\"M165 78 C165 72 170 64 173 58 C176 64 181 72 181 78 C181 83 177 87 173 87 C169 87 165 83 165 78 Z\" fill=\"#D14881\" transform=\"rotate(-8 173 78)\" />\n  <path d=\"M52 130 C52 124 57 116 60 110 C63 116 68 124 68 130 C68 135 64 139 60 139 C56 139 52 135 52 130 Z\" fill=\"#D14881\" transform=\"rotate(22 60 130)\" />\n  <path d=\"M102 118 C102 112 107 104 110 98 C113 104 118 112 118 118 C118 123 114 127 110 127 C106 127 102 123 102 118 Z\" fill=\"#D14881\" transform=\"rotate(-5 110 118)\" />\n  <path d=\"M148 124 C148 118 153 110 156 104 C159 110 164 118 164 124 C164 129 160 133 156 133 C152 133 148 129 148 124 Z\" fill=\"#D14881\" transform=\"rotate(18 156 124)\" />\n  <path d=\"M86 162 C86 156 91 148 94 142 C97 148 102 156 102 162 C102 167 98 171 94 171 C90 171 86 167 86 162 Z\" fill=\"#D14881\" transform=\"rotate(-12 94 162)\" />\n  <path d=\"M136 168 C136 162 141 154 144 148 C147 154 152 162 152 168 C152 173 148 177 144 177 C140 177 136 173 136 168 Z\" fill=\"#D14881\" transform=\"rotate(6 144 168)\" />\n  <path d=\"M178 138 C178 132 183 124 186 118 C189 124 194 132 194 138 C194 143 190 147 186 147 C182 147 178 143 178 138 Z\" fill=\"#D14881\" transform=\"rotate(-16 186 138)\" />"
  },
  {
    "id": "funky-bolt-comic-3d",
    "name": "Retro Comic 3D Lightning",
    "category": "funky-complex",
    "tags": [
      "lightning",
      "bolt",
      "comic",
      "3d",
      "retro",
      "shadow",
      "orange",
      "pop"
    ],
    "viewBox": "0 0 150 210",
    "type": "mixed",
    "defaultColor": "#EA552B",
    "description": "Retro warm coral lightning bolt with bold black 3D block extrusion shadow.",
    "rawSvg": "<path d=\"M68 18 L122 18 L86 88 L128 88 L42 206 L48 116 L10 116 Z\" fill=\"#141416\" />\n  <path d=\"M58 8 L112 8 L76 78 L118 78 L32 196 L38 106 L0 106 Z\" fill=\"currentColor\" stroke=\"#141416\" stroke-width=\"3.5\" stroke-linejoin=\"round\" />"
  },
  {
    "id": "funky-curly-spring-coil",
    "name": "Curly Telephone Spring",
    "category": "funky-complex",
    "tags": [
      "spring",
      "coil",
      "telephone",
      "curly",
      "spiral",
      "wire",
      "black"
    ],
    "viewBox": "0 0 180 260",
    "type": "mixed",
    "defaultColor": "#141416",
    "description": "Continuous, cascading vertical hand-drawn telephone spring coil with expanding overlapping rings.",
    "rawSvg": "<path d=\"M42 22 C72 8 138 6 156 28 C172 48 148 76 112 82 C74 88 56 64 68 46 C80 28 148 26 166 52 C182 76 152 110 110 118 C64 126 48 98 64 76 C80 54 154 52 172 82 C188 110 154 150 104 158 C52 166 36 134 56 108 C76 82 158 80 176 114 C192 148 150 192 94 200 C38 208 20 172 46 142 C72 112 162 112 178 152 C192 190 144 234 82 242 C44 248 24 230 32 210 C42 186 86 194 98 226 C104 244 92 256 82 258\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"4.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />"
  },
  {
    "id": "funky-black-pebble-stripes",
    "name": "Carved Striped Pebble",
    "category": "funky-complex",
    "tags": [
      "pebble",
      "stripes",
      "hatch",
      "black",
      "retro",
      "abstract",
      "contour"
    ],
    "viewBox": "0 0 180 200",
    "type": "mixed",
    "defaultColor": "#141416",
    "description": "Bold ink black pebble carved with clean curved negative space contour stripes.",
    "rawSvg": "<path d=\"M22 170 C-4 130 0 70 30 35 C60 0 120 -6 155 20 C190 46 195 105 178 150 C160 195 110 215 65 205 C42 200 32 186 22 170 Z\" fill=\"currentColor\" />\n  <path d=\"M15 85 C55 60 120 50 178 72\" fill=\"none\" stroke=\"#FAF6F0\" stroke-width=\"6.5\" stroke-linecap=\"round\" />\n  <path d=\"M12 122 C56 96 126 88 184 112\" fill=\"none\" stroke=\"#FAF6F0\" stroke-width=\"6.5\" stroke-linecap=\"round\" />\n  <path d=\"M24 158 C68 134 128 128 174 150\" fill=\"none\" stroke=\"#FAF6F0\" stroke-width=\"6.5\" stroke-linecap=\"round\" />\n  <path d=\"M46 186 C82 170 124 166 155 180\" fill=\"none\" stroke=\"#FAF6F0\" stroke-width=\"6.5\" stroke-linecap=\"round\" />"
  },
  {
    "id": "funky-coral-polka-blob",
    "name": "Coral Polka-Dot Cloud",
    "category": "funky-complex",
    "tags": [
      "coral",
      "polka",
      "dots",
      "cloud",
      "blob",
      "organic",
      "retro"
    ],
    "viewBox": "0 0 190 120",
    "type": "mixed",
    "defaultColor": "#EA552B",
    "description": "Curving organic coral blob decorated with bold ink-black polka dots.",
    "rawSvg": "<path d=\"M20 70 C8 55 12 30 32 20 C52 10 75 22 95 16 C115 10 138 2 158 12 C178 22 188 45 182 68 C176 90 155 108 132 105 C110 102 92 88 72 92 C52 96 32 110 18 95 C6 84 8 78 20 70 Z\" fill=\"currentColor\" stroke=\"#141416\" stroke-width=\"3\" stroke-linejoin=\"round\" />\n  <circle cx=\"42\" cy=\"38\" r=\"6\" fill=\"#141416\" />\n  <circle cx=\"85\" cy=\"32\" r=\"5\" fill=\"#141416\" />\n  <circle cx=\"132\" cy=\"30\" r=\"6.5\" fill=\"#141416\" />\n  <circle cx=\"162\" cy=\"50\" r=\"5.5\" fill=\"#141416\" />\n  <circle cx=\"140\" cy=\"78\" r=\"6\" fill=\"#141416\" />\n  <circle cx=\"98\" cy=\"68\" r=\"5.5\" fill=\"#141416\" />\n  <circle cx=\"56\" cy=\"74\" r=\"6\" fill=\"#141416\" />\n  <circle cx=\"30\" cy=\"60\" r=\"4.5\" fill=\"#141416\" />"
  },
  {
    "id": "funky-badge-starburst-new",
    "name": "Retro 'New' Starburst Sticker",
    "category": "funky-complex",
    "tags": [
      "badge",
      "starburst",
      "new",
      "sticker",
      "seal",
      "stamp",
      "retro"
    ],
    "viewBox": "0 0 140 140",
    "type": "mixed",
    "defaultColor": "#D9532F",
    "description": "24-point retro starburst badge seal stamped with handwritten 'New' text.",
    "rawSvg": "<g transform=\"rotate(-6 70 70)\">\n  <path d=\"M70 4 L76 18 L91 10 L93 25 L108 20 L107 36 L122 35 L116 49 L130 52 L121 66 L133 73 L121 82 L130 92 L116 97 L122 110 L107 111 L108 126 L93 123 L91 137 L76 130 L70 144 L64 130 L49 137 L47 123 L32 126 L33 111 L18 110 L24 97 L10 92 L19 82 L7 73 L19 66 L10 52 L24 49 L18 35 L33 36 L32 20 L47 25 L49 10 L64 18 Z\" fill=\"currentColor\" stroke=\"#141416\" stroke-width=\"2.5\" stroke-linejoin=\"round\" />\n  <text x=\"70\" y=\"78\" font-family=\"system-ui, -apple-system, sans-serif\" font-weight=\"900\" font-size=\"28\" fill=\"#141416\" text-anchor=\"middle\" letter-spacing=\"-1\">New</text>\n</g>"
  },
  {
    "id": "funky-triple-speed-slash",
    "name": "Triple Speed Slashes",
    "category": "funky-complex",
    "tags": [
      "slash",
      "speed",
      "emphasis",
      "lines",
      "strokes",
      "triple",
      "accent"
    ],
    "viewBox": "0 0 120 100",
    "type": "mixed",
    "defaultColor": "#141416",
    "description": "Three slanted, energetic hand-drawn brush lines with tapered tips for emphasis and dynamic speed.",
    "rawSvg": "<path d=\"M22 16 C38 34 52 56 68 84\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"5.5\" stroke-linecap=\"round\" />\n  <path d=\"M12 36 C28 54 42 76 56 100\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"5\" stroke-linecap=\"round\" />\n  <path d=\"M36 4 C48 20 60 40 76 64\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"5\" stroke-linecap=\"round\" />"
  },
  {
    "id": "funky-star-diamond-sparkle",
    "name": "Tapered Diamond Sparkle",
    "category": "funky-complex",
    "tags": [
      "star",
      "sparkle",
      "diamond",
      "glimmer",
      "magic",
      "funky"
    ],
    "viewBox": "0 0 110 110",
    "type": "mixed",
    "defaultColor": "#141416",
    "description": "Crisp hand-drawn 4-point diamond sparkle star with tapered curved flares in rich ink black.",
    "rawSvg": "<path d=\"M55 5 C56 32 68 44 95 45 C68 46 56 58 55 85 C54 58 42 46 15 45 C42 44 54 32 55 5 Z\" fill=\"currentColor\" />\n  <circle cx=\"85\" cy=\"20\" r=\"3.5\" fill=\"currentColor\" />\n  <circle cx=\"25\" cy=\"72\" r=\"2.5\" fill=\"currentColor\" />"
  },
  {
    "id": "funky-striped-globe-ball",
    "name": "Pop Horizon Striped Ball",
    "category": "funky-complex",
    "tags": [
      "globe",
      "ball",
      "stripes",
      "basketball",
      "contour",
      "orange",
      "retro"
    ],
    "viewBox": "0 0 160 160",
    "type": "mixed",
    "defaultColor": "#EA552B",
    "description": "Warm retro orange sphere decorated with curved black contour stripes like a pop-art globe.",
    "rawSvg": "<circle cx=\"80\" cy=\"80\" r=\"72\" fill=\"currentColor\" stroke=\"#141416\" stroke-width=\"4\" />\n  <path d=\"M12 60 C42 46 118 46 148 60\" fill=\"none\" stroke=\"#141416\" stroke-width=\"4.5\" stroke-linecap=\"round\" />\n  <path d=\"M8 82 C46 72 114 72 152 82\" fill=\"none\" stroke=\"#141416\" stroke-width=\"5\" stroke-linecap=\"round\" />\n  <path d=\"M14 104 C44 116 116 116 146 104\" fill=\"none\" stroke=\"#141416\" stroke-width=\"4.5\" stroke-linecap=\"round\" />\n  <path d=\"M36 128 C60 138 100 138 124 128\" fill=\"none\" stroke=\"#141416\" stroke-width=\"4.5\" stroke-linecap=\"round\" />\n  <path d=\"M80 8 C68 42 68 118 80 152\" fill=\"none\" stroke=\"#141416\" stroke-width=\"4\" stroke-linecap=\"round\" />"
  },
  {
    "id": "funky-retro-groovy-flower",
    "name": "Groovy Retro 5-Petal Daisy",
    "category": "funky-complex",
    "tags": [
      "flower",
      "daisy",
      "groovy",
      "retro",
      "70s",
      "pop",
      "petal"
    ],
    "viewBox": "0 0 180 180",
    "type": "mixed",
    "defaultColor": "#F7D046",
    "description": "70s retro flower with sunny yellow bubbly petals, ink black borders, and a warm coral center.",
    "rawSvg": "<g stroke=\"#141416\" stroke-width=\"3.5\" stroke-linejoin=\"round\">\n  <circle cx=\"90\" cy=\"40\" r=\"28\" fill=\"currentColor\" />\n  <circle cx=\"138\" cy=\"74\" r=\"28\" fill=\"currentColor\" />\n  <circle cx=\"120\" cy=\"132\" r=\"28\" fill=\"currentColor\" />\n  <circle cx=\"60\" cy=\"132\" r=\"28\" fill=\"currentColor\" />\n  <circle cx=\"42\" cy=\"74\" r=\"28\" fill=\"currentColor\" />\n  <circle cx=\"90\" cy=\"90\" r=\"24\" fill=\"#EA552B\" />\n</g>\n<circle cx=\"83\" cy=\"83\" r=\"5\" fill=\"#FAF6F0\" />"
  },
  {
    "id": "funky-rainbow-ribbon-wave",
    "name": "Retro Wavy Rainbow Arch",
    "category": "funky-complex",
    "tags": [
      "rainbow",
      "wave",
      "ribbon",
      "arch",
      "retro",
      "stripes",
      "colorful"
    ],
    "viewBox": "0 0 250 140",
    "type": "mixed",
    "defaultColor": "#EA552B",
    "description": "Three cascading parallel undulating wave ribbons in coral, sunny yellow, and sky blue.",
    "rawSvg": "<path d=\"M10 115 C45 65 95 30 150 45 C195 56 220 100 240 115 L240 95 C220 78 190 38 145 28 C90 14 40 50 10 95 Z\" fill=\"#EA552B\" stroke=\"#141416\" stroke-width=\"3\" stroke-linejoin=\"round\" />\n  <path d=\"M10 95 C40 50 90 14 145 28 C190 38 220 78 240 95 L240 75 C220 58 185 20 140 10 C85 -2 35 32 10 75 Z\" fill=\"#F7D046\" stroke=\"#141416\" stroke-width=\"3\" stroke-linejoin=\"round\" />\n  <path d=\"M10 75 C35 32 85 -2 140 10 C185 20 220 58 240 75 L240 55 C215 38 180 2 135 -6 C80 -16 30 16 10 55 Z\" fill=\"#55BBDA\" stroke=\"#141416\" stroke-width=\"3\" stroke-linejoin=\"round\" />"
  },
  {
    "id": "funky-confetti-party-burst",
    "name": "Confetti Blast Doodles",
    "category": "funky-complex",
    "tags": [
      "confetti",
      "party",
      "burst",
      "sprinkles",
      "squiggles",
      "celebration"
    ],
    "viewBox": "0 0 220 200",
    "type": "mixed",
    "defaultColor": "#F7D046",
    "description": "Multi-colored explosion of playful hand-drawn squiggles, triangles, dots, and starburst accents.",
    "rawSvg": "<path d=\"M25 45 C40 35 55 50 70 40\" fill=\"none\" stroke=\"#EA552B\" stroke-width=\"4.5\" stroke-linecap=\"round\" />\n  <path d=\"M150 25 C165 40 180 25 195 35\" fill=\"none\" stroke=\"#4CA96D\" stroke-width=\"4\" stroke-linecap=\"round\" />\n  <path d=\"M85 170 C105 155 125 175 145 160\" fill=\"none\" stroke=\"#55BBDA\" stroke-width=\"4.5\" stroke-linecap=\"round\" />\n  <polygon points=\"110,30 122,50 98,50\" fill=\"#F7D046\" stroke=\"#141416\" stroke-width=\"2\" />\n  <polygon points=\"35,140 52,148 40,165\" fill=\"#EE8DB9\" stroke=\"#141416\" stroke-width=\"2\" />\n  <polygon points=\"180,130 195,145 175,155\" fill=\"#EA552B\" stroke=\"#141416\" stroke-width=\"2\" />\n  <circle cx=\"95\" cy=\"85\" r=\"7\" fill=\"#4CA96D\" />\n  <circle cx=\"165\" cy=\"95\" r=\"6\" fill=\"#F7D046\" />\n  <circle cx=\"45\" cy=\"95\" r=\"5\" fill=\"#55BBDA\" />\n  <circle cx=\"135\" cy=\"135\" r=\"6\" fill=\"#EE8DB9\" />\n  <path d=\"M125 75 L125 95 M115 85 L135 85\" stroke=\"#141416\" stroke-width=\"3\" stroke-linecap=\"round\" />\n  <path d=\"M65 125 L65 141 M57 133 L73 133\" stroke=\"#141416\" stroke-width=\"3\" stroke-linecap=\"round\" />\n  <path d=\"M175 55 L175 71 M167 63 L183 63\" stroke=\"#141416\" stroke-width=\"3\" stroke-linecap=\"round\" />"
  },
  {
    "id": "funky-duo-geometric-spark",
    "name": "Memphis Geometric Duo",
    "category": "funky-complex",
    "tags": [
      "memphis",
      "geometric",
      "duo",
      "half-circle",
      "squiggle",
      "80s"
    ],
    "viewBox": "0 0 200 180",
    "type": "mixed",
    "defaultColor": "#EA552B",
    "description": "Coral semicircle with ink polka dots paired with an undulating kelly green ribbon and star spark.",
    "rawSvg": "<path d=\"M18 105 C18 52 60 12 115 12 C170 12 170 105 170 105 Z\" fill=\"currentColor\" stroke=\"#141416\" stroke-width=\"3.5\" stroke-linejoin=\"round\" />\n  <circle cx=\"65\" cy=\"50\" r=\"5\" fill=\"#141416\" />\n  <circle cx=\"115\" cy=\"42\" r=\"5.5\" fill=\"#141416\" />\n  <circle cx=\"85\" cy=\"80\" r=\"5\" fill=\"#141416\" />\n  <circle cx=\"140\" cy=\"75\" r=\"5\" fill=\"#141416\" />\n  <path d=\"M10 145 C40 120 70 165 100 135 C130 105 160 150 190 125\" fill=\"none\" stroke=\"#4CA96D\" stroke-width=\"8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M155 18 C156 32 165 38 180 39 C165 40 156 46 155 60 C154 46 145 40 130 39 C145 38 154 32 155 18 Z\" fill=\"#F7D046\" stroke=\"#141416\" stroke-width=\"2\" />"
  },
  {
    "id": "funky-checkerboard-pebble",
    "name": "Warped Checkerboard Pebble",
    "category": "funky-complex",
    "tags": [
      "checkerboard",
      "pebble",
      "warped",
      "checkers",
      "pattern",
      "funky"
    ],
    "viewBox": "0 0 180 180",
    "type": "mixed",
    "defaultColor": "#141416",
    "description": "Hand-drawn organic stone silhouette filled with distorted retro checkerboard tiles.",
    "rawSvg": "<clipPath id=\"pebble-clip\">\n  <path d=\"M30 150 C5 110 8 50 40 22 C72 -6 130 0 158 35 C186 70 180 130 152 160 C124 190 55 190 30 150 Z\" />\n</clipPath>\n<g clip-path=\"url(#pebble-clip)\">\n  <rect width=\"180\" height=\"180\" fill=\"#F7D046\" />\n  <path d=\"M0 0 L45 0 L45 45 L0 45 Z M90 0 L135 0 L135 45 L90 45 Z M45 45 L90 45 L90 90 L45 90 Z M135 45 L180 45 L180 90 L135 90 Z M0 90 L45 90 L45 135 L0 135 Z M90 90 L135 90 L135 135 L90 135 Z M45 135 L90 135 L90 180 L45 180 Z M135 135 L180 135 L180 180 L135 180 Z\" fill=\"currentColor\" />\n</g>\n<path d=\"M30 150 C5 110 8 50 40 22 C72 -6 130 0 158 35 C186 70 180 130 152 160 C124 190 55 190 30 150 Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"4.5\" stroke-linejoin=\"round\" />"
  },
  {
    "id": "funky-target-concentric-doodle",
    "name": "Hand-Drawn Target Bullseye",
    "category": "funky-complex",
    "tags": [
      "target",
      "bullseye",
      "concentric",
      "rings",
      "focus",
      "doodle"
    ],
    "viewBox": "0 0 180 180",
    "type": "mixed",
    "defaultColor": "#EE8DB9",
    "description": "Multi-ring organic target doodle with concentric pink, blue, and yellow halos around an ink black bullseye.",
    "rawSvg": "<circle cx=\"90\" cy=\"90\" r=\"82\" fill=\"currentColor\" stroke=\"#141416\" stroke-width=\"3\" />\n  <circle cx=\"90\" cy=\"90\" r=\"58\" fill=\"#55BBDA\" stroke=\"#141416\" stroke-width=\"3\" />\n  <circle cx=\"90\" cy=\"90\" r=\"36\" fill=\"#F7D046\" stroke=\"#141416\" stroke-width=\"3\" />\n  <circle cx=\"90\" cy=\"90\" r=\"16\" fill=\"#141416\" />"
  },
  {
    "id": "funky-double-wave-dots",
    "name": "Funky Undulating Ribbon & Dots",
    "category": "funky-complex",
    "tags": [
      "underline",
      "wave",
      "ribbon",
      "dots",
      "mint",
      "accent"
    ],
    "viewBox": "0 0 260 70",
    "type": "mixed",
    "defaultColor": "#0BDC85",
    "description": "Mint green wavy accent ribbon paired with an energetic black doodle squiggle and trailing coral dots.",
    "rawSvg": "<path d=\"M8 35 C42 12 88 52 128 30 C168 8 212 48 248 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" />\n  <path d=\"M12 36 C45 15 90 54 130 32 C170 10 215 50 246 26\" fill=\"none\" stroke=\"#141416\" stroke-width=\"3.5\" stroke-linecap=\"round\" />\n  <circle cx=\"68\" cy=\"54\" r=\"5\" fill=\"#EA552B\" />\n  <circle cx=\"188\" cy=\"52\" r=\"5\" fill=\"#EA552B\" />\n  <circle cx=\"252\" cy=\"46\" r=\"4\" fill=\"#EA552B\" />"
  },
  {
    "id": "funky-comic-bubble-doodle",
    "name": "Retro Comic Speech Bubble",
    "category": "funky-complex",
    "tags": [
      "comic",
      "speech",
      "bubble",
      "pop",
      "retro",
      "shadow",
      "dialogue"
    ],
    "viewBox": "0 0 220 180",
    "type": "mixed",
    "defaultColor": "#FAF6F0",
    "description": "Cream comic dialogue bubble with thick black 3D shadow extrusion and sky-blue doodle hatchings.",
    "rawSvg": "<path d=\"M38 18 L198 18 C208 18 216 26 216 36 L216 126 C216 136 208 144 198 144 L88 144 L48 178 L54 144 L38 144 C28 144 20 136 20 126 L20 36 C20 26 28 18 38 18 Z\" fill=\"#141416\" transform=\"translate(6 6)\" />\n  <path d=\"M38 18 L198 18 C208 18 216 26 216 36 L216 126 C216 136 208 144 198 144 L88 144 L48 178 L54 144 L38 144 C28 144 20 136 20 126 L20 36 C20 26 28 18 38 18 Z\" fill=\"currentColor\" stroke=\"#141416\" stroke-width=\"3.5\" stroke-linejoin=\"round\" />\n  <path d=\"M50 48 L175 48 M50 68 L150 68 M50 88 L120 88\" stroke=\"#55BBDA\" stroke-width=\"4\" stroke-linecap=\"round\" />\n  <path d=\"M172 88 C173 98 180 102 190 103 C180 104 173 108 172 118 C171 108 164 104 154 103 C164 102 171 98 172 88 Z\" fill=\"#EA552B\" />"
  },
  {
    "id": "funky-smiley-wink-pebble",
    "name": "Winking Smiley Pebble",
    "category": "funky-complex",
    "tags": [
      "smiley",
      "face",
      "wink",
      "happy",
      "pebble",
      "funky",
      "yellow"
    ],
    "viewBox": "0 0 180 180",
    "type": "mixed",
    "defaultColor": "#F7D046",
    "description": "Sunny yellow pebble with hand-drawn winking star eye, cheerful open smile, and rosy cheeks.",
    "rawSvg": "<path d=\"M32 145 C8 105 12 45 48 20 C84 -5 142 4 165 42 C188 80 178 135 146 162 C114 189 56 185 32 145 Z\" fill=\"currentColor\" stroke=\"#141416\" stroke-width=\"3.5\" stroke-linejoin=\"round\" />\n  <ellipse cx=\"62\" cy=\"74\" rx=\"6\" ry=\"8\" fill=\"#141416\" />\n  <path d=\"M120 62 C121 70 126 74 135 75 C126 76 121 80 120 88 C119 80 114 76 105 75 C114 74 119 70 120 62 Z\" fill=\"#141416\" />\n  <path d=\"M58 112 C72 136 112 136 126 112\" fill=\"none\" stroke=\"#141416\" stroke-width=\"4.5\" stroke-linecap=\"round\" />\n  <circle cx=\"46\" cy=\"98\" r=\"9\" fill=\"#EE8DB9\" opacity=\"0.8\" />\n  <circle cx=\"138\" cy=\"98\" r=\"9\" fill=\"#EE8DB9\" opacity=\"0.8\" />"
  },
  {
    "id": "funky-arrow-comic-3d",
    "name": "3D Comic Chunky Arrow",
    "category": "funky-complex",
    "tags": [
      "arrow",
      "comic",
      "3d",
      "chunky",
      "shadow",
      "pointer",
      "green"
    ],
    "viewBox": "0 0 190 160",
    "type": "mixed",
    "defaultColor": "#4CA96D",
    "description": "Chunky hand-drawn pointer arrow in kelly green with thick solid black 3D block extrusion.",
    "rawSvg": "<path d=\"M26 92 L76 92 L76 138 L168 76 L76 14 L76 60 L26 60 Z\" fill=\"#141416\" transform=\"translate(8 8)\" />\n  <path d=\"M26 92 L76 92 L76 138 L168 76 L76 14 L76 60 L26 60 Z\" fill=\"currentColor\" stroke=\"#141416\" stroke-width=\"3.5\" stroke-linejoin=\"round\" />\n  <circle cx=\"50\" cy=\"76\" r=\"4.5\" fill=\"#FAF6F0\" />"
  },
  {
    "id": "funky-memphis-squiggle-cluster",
    "name": "Memphis Squiggle Cluster",
    "category": "funky-complex",
    "tags": [
      "memphis",
      "cluster",
      "squiggle",
      "pop",
      "shapes",
      "accent"
    ],
    "viewBox": "0 0 200 170",
    "type": "mixed",
    "defaultColor": "#EE8DB9",
    "description": "Playful pop-art composition of a pink squiggle, yellow dot, mint triangle, and black cross hatchings.",
    "rawSvg": "<path d=\"M20 50 C45 20 65 75 95 45 C125 15 145 70 175 40\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"9\" stroke-linecap=\"round\" />\n  <circle cx=\"155\" cy=\"115\" r=\"22\" fill=\"#F7D046\" stroke=\"#141416\" stroke-width=\"3\" />\n  <polygon points=\"40,105 75,105 58,150\" fill=\"#0BDC85\" stroke=\"#141416\" stroke-width=\"3\" />\n  <path d=\"M105 105 L125 125 M125 105 L105 125\" stroke=\"#141416\" stroke-width=\"4\" stroke-linecap=\"round\" />\n  <path d=\"M115 140 L135 160 M135 140 L115 160\" stroke=\"#141416\" stroke-width=\"4\" stroke-linecap=\"round\" />"
  },
  {
    "id": "funky-lava-blob-stack",
    "name": "Interlocking Lava Blobs",
    "category": "funky-complex",
    "tags": [
      "lava",
      "blobs",
      "stack",
      "interlocking",
      "duo",
      "organic",
      "fluid"
    ],
    "viewBox": "0 0 220 190",
    "type": "mixed",
    "defaultColor": "#55BBDA",
    "description": "Two interlocking fluid organic blobs in sky blue and sunny yellow connected by a hand-drawn black seam.",
    "rawSvg": "<path d=\"M22 135 C2 95 18 35 68 18 C118 1 155 35 142 85 C132 125 72 165 42 165 C28 165 24 150 22 135 Z\" fill=\"currentColor\" stroke=\"#141416\" stroke-width=\"3\" stroke-linejoin=\"round\" />\n  <path d=\"M115 165 C85 165 95 120 115 95 C135 70 185 65 205 98 C225 130 205 178 162 185 C138 188 128 178 115 165 Z\" fill=\"#F7D046\" stroke=\"#141416\" stroke-width=\"3\" stroke-linejoin=\"round\" />\n  <path d=\"M92 68 C108 85 118 118 114 148\" fill=\"none\" stroke=\"#141416\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-dasharray=\"2 8\" />\n  <circle cx=\"55\" cy=\"72\" r=\"5\" fill=\"#FAF6F0\" />\n  <circle cx=\"168\" cy=\"130\" r=\"5\" fill=\"#FAF6F0\" />"
  },
  {
    "id": "funky-retro-cassette-tape",
    "name": "Retro 80s Cassette Tape",
    "category": "funky-complex",
    "tags": [
      "cassette",
      "tape",
      "retro",
      "80s",
      "music",
      "audio",
      "vintage",
      "funky"
    ],
    "viewBox": "0 0 220 145",
    "type": "mixed",
    "defaultColor": "#EA552B",
    "description": "Detailed 80s boombox cassette tape with rounded body, center reel window, dual gear spools, magnetic tape path, and 3D shadow.",
    "rawSvg": "<path d=\"M12 18 L208 18 C214 18 218 22 218 28 L218 132 C218 138 214 142 208 142 L12 142 C6 142 2 138 2 132 L2 28 C2 22 6 18 12 18 Z\" fill=\"#141416\" />\n  <rect x=\"0\" y=\"8\" width=\"206\" height=\"124\" rx=\"10\" fill=\"currentColor\" stroke=\"#141416\" stroke-width=\"3.5\" />\n  <rect x=\"22\" y=\"24\" width=\"162\" height=\"72\" rx=\"6\" fill=\"#FAF6F0\" stroke=\"#141416\" stroke-width=\"2.5\" />\n  <path d=\"M50 42 L156 42 C162 42 166 46 166 52 L166 76 C166 82 162 86 156 86 L50 86 C44 86 40 82 40 76 L40 52 C40 46 44 42 50 42 Z\" fill=\"#141416\" />\n  <rect x=\"76\" y=\"50\" width=\"54\" height=\"28\" rx=\"3\" fill=\"#FAF6F0\" />\n  <circle cx=\"62\" cy=\"64\" r=\"14\" fill=\"#FAF6F0\" stroke=\"#141416\" stroke-width=\"2\" />\n  <circle cx=\"62\" cy=\"64\" r=\"5\" fill=\"#141416\" />\n  <circle cx=\"144\" cy=\"64\" r=\"14\" fill=\"#FAF6F0\" stroke=\"#141416\" stroke-width=\"2\" />\n  <circle cx=\"144\" cy=\"64\" r=\"5\" fill=\"#141416\" />\n  <polygon points=\"46,132 160,132 174,106 32,106\" fill=\"#FAF6F0\" stroke=\"#141416\" stroke-width=\"2.5\" />\n  <circle cx=\"58\" cy=\"119\" r=\"4.5\" fill=\"#141416\" />\n  <circle cx=\"148\" cy=\"119\" r=\"4.5\" fill=\"#141416\" />\n  <circle cx=\"103\" cy=\"119\" r=\"3.5\" fill=\"#141416\" />\n  <circle cx=\"12\" cy=\"20\" r=\"3\" fill=\"#141416\" />\n  <circle cx=\"194\" cy=\"20\" r=\"3\" fill=\"#141416\" />\n  <circle cx=\"12\" cy=\"120\" r=\"3\" fill=\"#141416\" />\n  <circle cx=\"194\" cy=\"120\" r=\"3\" fill=\"#141416\" />"
  },
  {
    "id": "funky-hologram-starburst-stamp",
    "name": "Holographic Starburst Seal",
    "category": "funky-complex",
    "tags": [
      "seal",
      "starburst",
      "stamp",
      "badge",
      "verified",
      "guarantee",
      "retro"
    ],
    "viewBox": "0 0 160 160",
    "type": "mixed",
    "defaultColor": "#F7D046",
    "description": "Layered 16-point starburst seal with inner concentric serrated ring, 3D offset extrusion shadow, and stamped star emblem.",
    "rawSvg": "<g transform=\"translate(6, 6)\">\n  <path d=\"M80 0 L97 22 L124 14 L132 41 L158 48 L152 75 L172 93 L152 112 L158 138 L132 145 L124 172 L97 164 L80 186 L63 164 L36 172 L28 145 L2 138 L8 112 L-12 93 L8 75 L2 48 L28 41 L36 14 L63 22 Z\" transform=\"scale(0.85) translate(8, 0)\" fill=\"#141416\" />\n</g>\n<path d=\"M75 5 L90 26 L116 18 L124 43 L149 50 L143 75 L162 92 L143 110 L149 135 L124 142 L116 167 L90 159 L75 180 L60 159 L34 167 L26 142 L1 135 L7 110 L-12 92 L7 75 L1 50 L26 43 L34 18 L60 26 Z\" transform=\"scale(0.85) translate(8, 0)\" fill=\"currentColor\" stroke=\"#141416\" stroke-width=\"3\" stroke-linejoin=\"round\" />\n<circle cx=\"76\" cy=\"80\" r=\"42\" fill=\"#FAF6F0\" stroke=\"#141416\" stroke-width=\"2.5\" stroke-dasharray=\"4 3\" />\n<circle cx=\"76\" cy=\"80\" r=\"32\" fill=\"#EA552B\" />\n<path d=\"M76 56 L82 72 L98 72 L85 82 L90 98 L76 88 L62 98 L67 82 L54 72 L70 72 Z\" fill=\"#FAF6F0\" stroke=\"#141416\" stroke-width=\"2\" />"
  },
  {
    "id": "funky-sun-retro-shades",
    "name": "Sunny Cool Shades Sun",
    "category": "funky-complex",
    "tags": [
      "sun",
      "shades",
      "sunglasses",
      "summer",
      "cool",
      "groovy",
      "happy",
      "face"
    ],
    "viewBox": "0 0 200 200",
    "type": "mixed",
    "defaultColor": "#F7D046",
    "description": "Groovy 12-ray organic sun wearing retro black wayfarer sunglasses with glossy white glare streaks and a cheerful smile.",
    "rawSvg": "<g fill=\"currentColor\" stroke=\"#141416\" stroke-width=\"3\" stroke-linejoin=\"round\">\n  <path d=\"M100 14 C104 28 108 34 100 48 C92 34 96 28 100 14 Z\" />\n  <path d=\"M142 25 C140 39 140 46 128 56 C124 42 128 37 142 25 Z\" />\n  <path d=\"M174 56 C164 66 160 72 146 74 C148 60 155 56 174 56 Z\" />\n  <path d=\"M186 98 C172 102 166 106 152 98 C166 90 172 94 186 98 Z\" />\n  <path d=\"M175 142 C161 140 154 140 144 128 C158 124 163 128 175 142 Z\" />\n  <path d=\"M144 174 C134 164 128 160 126 146 C140 148 144 155 144 174 Z\" />\n  <path d=\"M102 186 C98 172 94 166 102 152 C110 166 106 172 102 186 Z\" />\n  <path d=\"M60 175 C62 161 62 154 74 144 C78 158 74 163 60 175 Z\" />\n  <path d=\"M28 144 C38 134 42 128 56 126 C54 140 47 144 28 144 Z\" />\n  <path d=\"M16 102 C30 98 36 94 50 102 C36 110 30 106 16 102 Z\" />\n  <path d=\"M27 60 C41 62 48 62 58 74 C44 78 39 74 27 60 Z\" />\n  <path d=\"M58 28 C68 38 74 42 76 56 C62 54 58 47 58 28 Z\" />\n  <circle cx=\"100\" cy=\"100\" r=\"54\" />\n</g>\n<g fill=\"#141416\">\n  <path d=\"M54 78 L96 78 C98 88 94 104 76 105 C60 106 52 94 54 78 Z\" />\n  <path d=\"M104 78 L146 78 C148 94 140 106 124 105 C106 104 102 88 104 78 Z\" />\n  <rect x=\"92\" y=\"80\" width=\"16\" height=\"6\" rx=\"2\" />\n</g>\n<path d=\"M60 84 L72 84 M110 84 L122 84\" stroke=\"#FFFFFF\" stroke-width=\"2.5\" stroke-linecap=\"round\" />\n<path d=\"M84 122 C92 134 108 134 116 122\" fill=\"none\" stroke=\"#141416\" stroke-width=\"3.5\" stroke-linecap=\"round\" />\n<circle cx=\"68\" cy=\"120\" r=\"4\" fill=\"#EE8DB9\" />\n<circle cx=\"132\" cy=\"120\" r=\"4\" fill=\"#EE8DB9\" />"
  },
  {
    "id": "funky-peace-hand-sign",
    "name": "Groovy Peace Hand",
    "category": "funky-complex",
    "tags": [
      "peace",
      "hand",
      "victory",
      "two",
      "fingers",
      "groovy",
      "pop",
      "comic"
    ],
    "viewBox": "0 0 160 220",
    "type": "mixed",
    "defaultColor": "#4CA96D",
    "description": "Hand-drawn 2-finger victory/peace hand with comic 3D drop shadow, ink knuckle contours, and retro pop star sparkles.",
    "rawSvg": "<path d=\"M54 22 L82 22 C88 22 92 28 90 38 L84 82 L106 46 C112 36 122 36 128 42 C134 48 132 58 124 72 L112 110 C122 108 130 114 132 124 C134 140 128 178 122 196 C118 206 106 214 90 214 L56 214 C38 214 26 202 24 186 L20 134 C18 114 28 102 44 98 L50 82 Z\" transform=\"translate(6, 6)\" fill=\"#141416\" />\n<path d=\"M50 18 L78 18 C84 18 88 24 86 34 L80 78 L102 42 C108 32 118 32 124 38 C130 44 128 54 120 68 L108 106 C118 104 126 110 128 120 C130 136 124 174 118 192 C114 202 102 210 86 210 L52 210 C34 210 22 198 20 182 L16 130 C14 110 24 98 40 94 L46 78 Z\" fill=\"currentColor\" stroke=\"#141416\" stroke-width=\"3\" stroke-linejoin=\"round\" />\n<path d=\"M78 86 C64 88 56 104 58 118 C60 132 72 142 88 140 C98 138 104 128 102 116\" fill=\"none\" stroke=\"#141416\" stroke-width=\"3\" stroke-linecap=\"round\" />\n<path d=\"M60 48 L68 48 M106 72 L114 72\" stroke=\"#141416\" stroke-width=\"2.5\" stroke-linecap=\"round\" />\n<path d=\"M6 56 C14 56 18 52 18 44 C18 52 22 56 30 56 C22 56 18 60 18 68 C18 60 14 56 6 56 Z\" fill=\"#F7D046\" />\n<path d=\"M136 160 C140 160 144 156 144 150 C144 156 148 160 154 160 C148 160 144 164 144 170 C144 164 140 160 136 160 Z\" fill=\"#EE8DB9\" />"
  },
  {
    "id": "funky-checker-cylinder-3d",
    "name": "Memphis 3D Checker Cylinder",
    "category": "funky-complex",
    "tags": [
      "cylinder",
      "checkerboard",
      "memphis",
      "3d",
      "isometric",
      "pattern",
      "column"
    ],
    "viewBox": "0 0 160 200",
    "type": "mixed",
    "defaultColor": "#55BBDA",
    "description": "Extruded 3D isometric cylinder pillar with curved perspective checkerboard grid pattern and pop drop shadow.",
    "rawSvg": "<path d=\"M26 62 L26 156 C26 180 62 196 106 196 C150 196 186 180 186 156 L186 62 Z\" transform=\"scale(0.8) translate(14, 10)\" fill=\"#141416\" />\n<path d=\"M20 54 L20 148 C20 172 56 188 100 188 C144 188 180 172 180 148 L180 54 Z\" transform=\"scale(0.8) translate(10, 6)\" fill=\"#FAF6F0\" stroke=\"#141416\" stroke-width=\"3\" />\n<g transform=\"scale(0.8) translate(10, 6)\" fill=\"#141416\">\n  <path d=\"M20 54 L60 54 C56 78 30 82 20 84 Z\" />\n  <path d=\"M100 54 L140 54 C136 78 110 82 100 84 Z\" />\n  <path d=\"M60 84 L100 84 C96 112 70 116 60 118 Z\" />\n  <path d=\"M140 84 L180 84 C176 110 150 116 140 118 Z\" />\n  <path d=\"M20 118 L60 118 C56 148 30 152 20 154 Z\" />\n  <path d=\"M100 118 L140 118 C136 148 110 152 100 154 Z\" />\n</g>\n<ellipse cx=\"90\" cy=\"46\" rx=\"64\" ry=\"26\" fill=\"currentColor\" stroke=\"#141416\" stroke-width=\"3\" />\n<ellipse cx=\"90\" cy=\"46\" rx=\"38\" ry=\"14\" fill=\"#FAF6F0\" stroke=\"#141416\" stroke-width=\"2\" stroke-dasharray=\"3 3\" />"
  },
  {
    "id": "funky-yin-yang-doodle",
    "name": "Funky Swirl Yin-Yang",
    "category": "funky-complex",
    "tags": [
      "yinyang",
      "balance",
      "zen",
      "swirl",
      "wave",
      "retro",
      "peace",
      "harmony"
    ],
    "viewBox": "0 0 180 180",
    "type": "mixed",
    "defaultColor": "#EE8DB9",
    "description": "Organic hand-drawn wavy retro yin-yang doodle with contrasting teardrop eyes and radiant accent energy lines.",
    "rawSvg": "<circle cx=\"94\" cy=\"94\" r=\"72\" fill=\"#141416\" />\n<circle cx=\"90\" cy=\"90\" r=\"72\" fill=\"#FAF6F0\" stroke=\"#141416\" stroke-width=\"3.5\" />\n<path d=\"M90 18 C50 18 18 50 18 90 C18 130 50 162 90 162 C70 144 70 108 90 90 C110 72 110 36 90 18 Z\" fill=\"currentColor\" />\n<circle cx=\"90\" cy=\"54\" r=\"10\" fill=\"#FAF6F0\" />\n<circle cx=\"90\" cy=\"126\" r=\"10\" fill=\"#141416\" />\n<path d=\"M90 90 C70 108 70 144 90 162 C130 162 162 130 162 90 C162 50 130 18 90 18 C110 36 110 72 90 90 Z\" fill=\"none\" stroke=\"#141416\" stroke-width=\"3.5\" />\n<circle cx=\"90\" cy=\"54\" r=\"4\" fill=\"#141416\" />\n<circle cx=\"90\" cy=\"126\" r=\"4\" fill=\"#FAF6F0\" />"
  },
  {
    "id": "funky-atomic-orbit-star",
    "name": "Mid-Century Atomic Orbit",
    "category": "funky-complex",
    "tags": [
      "atomic",
      "orbit",
      "midcentury",
      "50s",
      "space",
      "science",
      "retro",
      "atom"
    ],
    "viewBox": "0 0 200 200",
    "type": "mixed",
    "defaultColor": "#EA552B",
    "description": "Classic 1950s space-age atomic doodle with 3 overlapping tilted elliptical orbits, orbiting planetary nuclei, and a central diamond star.",
    "rawSvg": "<g fill=\"none\" stroke=\"#141416\" stroke-width=\"3\" stroke-linecap=\"round\">\n  <ellipse cx=\"100\" cy=\"100\" rx=\"88\" ry=\"32\" transform=\"rotate(0 100 100)\" />\n  <ellipse cx=\"100\" cy=\"100\" rx=\"88\" ry=\"32\" transform=\"rotate(60 100 100)\" />\n  <ellipse cx=\"100\" cy=\"100\" rx=\"88\" ry=\"32\" transform=\"rotate(120 100 100)\" />\n</g>\n<circle cx=\"188\" cy=\"100\" r=\"8\" fill=\"#55BBDA\" stroke=\"#141416\" stroke-width=\"2.5\" />\n<circle cx=\"56\" cy=\"138\" r=\"9\" fill=\"#EE8DB9\" stroke=\"#141416\" stroke-width=\"2.5\" />\n<circle cx=\"56\" cy=\"62\" r=\"7.5\" fill=\"#4CA96D\" stroke=\"#141416\" stroke-width=\"2.5\" />\n<path d=\"M100 68 C102 88 112 98 132 100 C112 102 102 112 100 132 C98 112 88 102 68 100 C88 98 98 88 100 68 Z\" fill=\"currentColor\" stroke=\"#141416\" stroke-width=\"2\" />\n<circle cx=\"100\" cy=\"100\" r=\"5\" fill=\"#F7D046\" />"
  },
  {
    "id": "funky-comic-speech-boom",
    "name": "Comic 3D Explosion Bubble",
    "category": "funky-complex",
    "tags": [
      "comic",
      "boom",
      "explosion",
      "bubble",
      "speech",
      "blast",
      "popart",
      "action"
    ],
    "viewBox": "0 0 210 170",
    "type": "mixed",
    "defaultColor": "#F7D046",
    "description": "Explosive multi-point comic blast speech balloon with extruded 3D black shadow base and energy action lines.",
    "rawSvg": "<path d=\"M105 18 L126 40 L160 26 L164 56 L196 58 L182 86 L206 106 L176 118 L184 150 L152 142 L138 170 L114 148 L90 170 L80 142 L48 152 L54 120 L24 108 L48 86 L32 58 L64 56 L68 26 L102 40 Z\" transform=\"translate(6, 6)\" fill=\"#141416\" />\n<path d=\"M100 12 L121 34 L155 20 L159 50 L191 52 L177 80 L201 100 L171 112 L179 144 L147 136 L133 164 L109 142 L85 164 L75 136 L43 146 L49 114 L19 102 L43 80 L27 52 L59 50 L63 20 L97 34 Z\" fill=\"currentColor\" stroke=\"#141416\" stroke-width=\"3.5\" stroke-linejoin=\"round\" />\n<path d=\"M100 36 L114 52 L138 42 L140 64 L164 66 L154 86 L172 102 L150 110 L156 132 L132 126 L122 146 L104 130 L88 146 L80 126 L56 132 L60 110 L38 102 L56 86 L44 66 L68 64 L72 42 L96 52 Z\" fill=\"#FAF6F0\" stroke=\"#141416\" stroke-width=\"2\" />\n<circle cx=\"106\" cy=\"92\" r=\"16\" fill=\"#EA552B\" />\n<path d=\"M106 82 L109 90 L117 90 L110 95 L113 102 L106 97 L99 102 L102 95 L95 90 L103 90 Z\" fill=\"#FAF6F0\" />"
  },
  {
    "id": "funky-coffee-cup-steam",
    "name": "Aesthetic Mug & Spiral Steam",
    "category": "funky-complex",
    "tags": [
      "coffee",
      "cup",
      "mug",
      "tea",
      "steam",
      "morning",
      "cafe",
      "cozy"
    ],
    "viewBox": "0 0 170 210",
    "type": "mixed",
    "defaultColor": "#EA552B",
    "description": "Charming ceramic coffee mug with hand-drawn looped ear handle, coffee fluid rim, and floating multi-layer spiral loop steam swirls.",
    "rawSvg": "<path d=\"M48 24 C56 10 70 8 68 32 C66 52 48 46 52 68 C54 78 62 84 64 96\" fill=\"none\" stroke=\"#141416\" stroke-width=\"3\" stroke-linecap=\"round\" />\n<path d=\"M84 14 C94 4 106 6 102 28 C98 46 82 44 86 64 C88 74 96 80 98 96\" fill=\"none\" stroke=\"#141416\" stroke-width=\"3.5\" stroke-linecap=\"round\" />\n<path d=\"M120 28 C128 16 138 18 136 36 C134 52 120 50 124 70 C126 80 132 86 134 96\" fill=\"none\" stroke=\"#141416\" stroke-width=\"3\" stroke-linecap=\"round\" />\n<path d=\"M116 122 C134 122 148 132 148 150 C148 168 134 178 116 178\" fill=\"none\" stroke=\"#141416\" stroke-width=\"12\" stroke-linecap=\"round\" />\n<path d=\"M116 122 C130 122 140 130 140 150 C140 170 130 178 116 178\" fill=\"none\" stroke=\"#FAF6F0\" stroke-width=\"6\" stroke-linecap=\"round\" />\n<path d=\"M26 106 L126 106 C126 156 116 196 76 196 C36 196 26 156 26 106 Z\" fill=\"currentColor\" stroke=\"#141416\" stroke-width=\"3.5\" stroke-linejoin=\"round\" />\n<ellipse cx=\"76\" cy=\"106\" rx=\"50\" ry=\"14\" fill=\"#FAF6F0\" stroke=\"#141416\" stroke-width=\"3\" />\n<ellipse cx=\"76\" cy=\"108\" rx=\"42\" ry=\"10\" fill=\"#141416\" />\n<ellipse cx=\"76\" cy=\"108\" rx=\"38\" ry=\"8\" fill=\"#F7D046\" />\n<circle cx=\"54\" cy=\"154\" r=\"5\" fill=\"#FAF6F0\" />"
  },
  {
    "id": "funky-ribbon-banner-swag",
    "name": "Folded 3D Ribbon Banner",
    "category": "funky-complex",
    "tags": [
      "ribbon",
      "banner",
      "scroll",
      "badge",
      "heraldic",
      "vintage",
      "label",
      "heading"
    ],
    "viewBox": "0 0 260 110",
    "type": "mixed",
    "defaultColor": "#0BDC85",
    "description": "Vintage hand-drawn 3D banner scroll with curved front stage, folded under-creases, and bifurcated fishtail ribbon ends.",
    "rawSvg": "<polygon points=\"44,52 44,78 12,90 26,68 12,48\" fill=\"#141416\" />\n<polygon points=\"40,48 40,74 8,86 22,64 8,44\" fill=\"#F7D046\" stroke=\"#141416\" stroke-width=\"2.5\" stroke-linejoin=\"round\" />\n<polygon points=\"216,52 216,78 248,90 234,68 248,48\" fill=\"#141416\" />\n<polygon points=\"220,48 220,74 252,86 238,64 252,44\" fill=\"#F7D046\" stroke=\"#141416\" stroke-width=\"2.5\" stroke-linejoin=\"round\" />\n<polygon points=\"40,74 60,74 40,88\" fill=\"#141416\" />\n<polygon points=\"220,74 200,74 220,88\" fill=\"#141416\" />\n<path d=\"M40 38 C90 26 170 26 220 38 L220 74 C170 62 90 62 40 74 Z\" fill=\"currentColor\" stroke=\"#141416\" stroke-width=\"3\" stroke-linejoin=\"round\" />\n<path d=\"M54 54 C94 44 166 44 206 54\" fill=\"none\" stroke=\"#FAF6F0\" stroke-width=\"2\" stroke-dasharray=\"4 4\" stroke-linecap=\"round\" />"
  },
  {
    "id": "funky-eye-cosmic-vision",
    "name": "Third Eye Cosmic Iris",
    "category": "funky-complex",
    "tags": [
      "eye",
      "cosmic",
      "vision",
      "mystic",
      "lashes",
      "iris",
      "pupil",
      "look"
    ],
    "viewBox": "0 0 210 150",
    "type": "mixed",
    "defaultColor": "#55BBDA",
    "description": "Mystical pop-art cosmic eye with curved eyelid arches, radiating flutter lashes, concentric iris rings, and a gleaming starburst pupil.",
    "rawSvg": "<g stroke=\"#141416\" stroke-width=\"3\" stroke-linecap=\"round\">\n  <path d=\"M105 14 L105 2 M75 22 L67 10 M135 22 L143 10 M45 38 L33 30 M165 38 L177 30 M25 64 L11 60 M185 64 L199 60\" />\n</g>\n<path d=\"M14 75 C45 32 165 32 196 75 C165 118 45 118 14 75 Z\" fill=\"#FAF6F0\" stroke=\"#141416\" stroke-width=\"3.5\" stroke-linejoin=\"round\" />\n<circle cx=\"105\" cy=\"75\" r=\"34\" fill=\"currentColor\" stroke=\"#141416\" stroke-width=\"3\" />\n<circle cx=\"105\" cy=\"75\" r=\"22\" fill=\"#F7D046\" stroke=\"#141416\" stroke-width=\"2\" />\n<circle cx=\"105\" cy=\"75\" r=\"12\" fill=\"#141416\" />\n<circle cx=\"109\" cy=\"71\" r=\"3.5\" fill=\"#FFFFFF\" />\n<path d=\"M105 124 C100 134 94 142 105 148 C116 142 110 134 105 124 Z\" fill=\"#EE8DB9\" stroke=\"#141416\" stroke-width=\"2\" />"
  },
  {
    "id": "funky-rocket-ship-blast",
    "name": "Retro Space Rocket Doodle",
    "category": "funky-complex",
    "tags": [
      "rocket",
      "spaceship",
      "launch",
      "space",
      "blast",
      "start",
      "retro",
      "growth"
    ],
    "viewBox": "0 0 170 230",
    "type": "mixed",
    "defaultColor": "#FAF6F0",
    "description": "1950s streamlined retro rocket spaceship with circular portal window, curved tail fins, and billowing 3-stage cloud flame exhaust.",
    "rawSvg": "<path d=\"M65 170 C50 185 45 205 60 218 C75 230 95 230 110 218 C125 205 120 185 105 170 Z\" fill=\"#F7D046\" stroke=\"#141416\" stroke-width=\"2.5\" />\n<path d=\"M72 170 C62 180 62 194 72 204 C82 212 94 212 102 204 C112 194 112 180 102 170 Z\" fill=\"#EA552B\" />\n<path d=\"M46 128 L24 162 C20 168 28 174 38 170 L54 158 Z\" fill=\"#EA552B\" stroke=\"#141416\" stroke-width=\"3\" stroke-linejoin=\"round\" />\n<path d=\"M124 128 L146 162 C150 168 142 174 132 170 L116 158 Z\" fill=\"#EA552B\" stroke=\"#141416\" stroke-width=\"3\" stroke-linejoin=\"round\" />\n<path d=\"M85 18 C52 48 48 110 52 164 L118 164 C122 110 118 48 85 18 Z\" fill=\"currentColor\" stroke=\"#141416\" stroke-width=\"3.5\" stroke-linejoin=\"round\" />\n<path d=\"M85 18 C74 34 68 56 68 64 L102 64 C102 56 96 34 85 18 Z\" fill=\"#EA552B\" stroke=\"#141416\" stroke-width=\"2\" />\n<circle cx=\"85\" cy=\"106\" r=\"16\" fill=\"#55BBDA\" stroke=\"#141416\" stroke-width=\"3\" />\n<circle cx=\"85\" cy=\"106\" r=\"10\" fill=\"#FAF6F0\" />\n<path d=\"M88 100 A6 6 0 0 0 82 106\" fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"2\" stroke-linecap=\"round\" />"
  },
  {
    "id": "funky-magic-wand-spark",
    "name": "Drawn Magic Wand & Spark Dust",
    "category": "funky-complex",
    "tags": [
      "wand",
      "magic",
      "sparkle",
      "stars",
      "wizard",
      "glimmer",
      "miracle",
      "feature"
    ],
    "viewBox": "0 0 180 180",
    "type": "mixed",
    "defaultColor": "#F7D046",
    "description": "Diagonal hand-drawn magician wand with dual-tone shaft, rounded tip, and an explosive cascade of trailing diamond stars and stardust.",
    "rawSvg": "<polygon points=\"18,172 28,162 136,54 126,44 18,152\" fill=\"#141416\" />\n<polygon points=\"126,44 136,54 156,34 146,24\" fill=\"currentColor\" stroke=\"#141416\" stroke-width=\"2.5\" />\n<path d=\"M152 8 C153 20 158 25 170 26 C158 27 153 32 152 44 C151 32 146 27 134 26 C146 25 151 20 152 8 Z\" fill=\"#EA552B\" stroke=\"#141416\" stroke-width=\"1.5\" />\n<path d=\"M120 4 C121 12 124 15 132 16 C124 17 121 20 120 28 C119 20 116 17 108 16 C116 15 119 12 120 4 Z\" fill=\"#EE8DB9\" />\n<path d=\"M166 52 C167 58 170 61 176 62 C170 63 167 66 166 72 C165 66 162 63 156 62 C162 61 165 58 166 52 Z\" fill=\"#0BDC85\" />\n<circle cx=\"106\" cy=\"40\" r=\"3\" fill=\"#141416\" />\n<circle cx=\"140\" cy=\"68\" r=\"2.5\" fill=\"#141416\" />\n<circle cx=\"168\" cy=\"40\" r=\"3\" fill=\"#141416\" />\n<circle cx=\"132\" cy=\"10\" r=\"2\" fill=\"#F7D046\" />"
  },
  {
    "id": "funky-geo-prism-crystal",
    "name": "Pop Art Faceted Gem Crystal",
    "category": "funky-complex",
    "tags": [
      "gem",
      "crystal",
      "diamond",
      "prism",
      "facet",
      "geometry",
      "premium",
      "luxury"
    ],
    "viewBox": "0 0 180 190",
    "type": "mixed",
    "defaultColor": "#55BBDA",
    "description": "3D faceted isometric gemstone with 7 contrasting geometric facet planes, black ink outlines, and starburst sparkle glints.",
    "rawSvg": "<polygon points=\"90,12 148,56 162,118 90,178 18,118 32,56\" fill=\"#141416\" transform=\"translate(6, 6)\" />\n<polygon points=\"90,8 148,52 162,114 90,174 18,114 32,52\" fill=\"#FAF6F0\" stroke=\"#141416\" stroke-width=\"3\" stroke-linejoin=\"round\" />\n<polygon points=\"90,8 148,52 90,86 32,52\" fill=\"currentColor\" stroke=\"#141416\" stroke-width=\"2.5\" stroke-linejoin=\"round\" />\n<polygon points=\"32,52 90,86 90,174 18,114\" fill=\"#0BDC85\" stroke=\"#141416\" stroke-width=\"2.5\" stroke-linejoin=\"round\" opacity=\"0.85\" />\n<polygon points=\"148,52 90,86 90,174 162,114\" fill=\"#EE8DB9\" stroke=\"#141416\" stroke-width=\"2.5\" stroke-linejoin=\"round\" opacity=\"0.85\" />\n<polygon points=\"62,70 90,86 90,140 44,106\" fill=\"#FAF6F0\" opacity=\"0.6\" />\n<path d=\"M152 24 C153 32 156 35 164 36 C156 37 153 40 152 48 C151 40 148 37 140 36 C148 35 151 32 152 24 Z\" fill=\"#F7D046\" />"
  },
  {
    "id": "funky-smile-flower-pop",
    "name": "Murakami-Inspired Smile Bloom",
    "category": "funky-complex",
    "tags": [
      "flower",
      "smile",
      "happy",
      "daisy",
      "pop",
      "murakami",
      "face",
      "cheerful"
    ],
    "viewBox": "0 0 190 190",
    "type": "mixed",
    "defaultColor": "#EE8DB9",
    "description": "12 vibrant rounded daisy petals radiating around a happy cartoon smiling face center with wink eye and ink outlines.",
    "rawSvg": "<g stroke=\"#141416\" stroke-width=\"3\" stroke-linejoin=\"round\">\n  <circle cx=\"95\" cy=\"24\" r=\"18\" fill=\"#EA552B\" />\n  <circle cx=\"130\" cy=\"34\" r=\"18\" fill=\"#F7D046\" />\n  <circle cx=\"156\" cy=\"60\" r=\"18\" fill=\"#4CA96D\" />\n  <circle cx=\"166\" cy=\"95\" r=\"18\" fill=\"#55BBDA\" />\n  <circle cx=\"156\" cy=\"130\" r=\"18\" fill=\"#0BDC85\" />\n  <circle cx=\"130\" cy=\"156\" r=\"18\" fill=\"#EE8DB9\" />\n  <circle cx=\"95\" cy=\"166\" r=\"18\" fill=\"currentColor\" />\n  <circle cx=\"60\" cy=\"156\" r=\"18\" fill=\"#EA552B\" />\n  <circle cx=\"34\" cy=\"130\" r=\"18\" fill=\"#F7D046\" />\n  <circle cx=\"24\" cy=\"95\" r=\"18\" fill=\"#4CA96D\" />\n  <circle cx=\"34\" cy=\"60\" r=\"18\" fill=\"#55BBDA\" />\n  <circle cx=\"60\" cy=\"34\" r=\"18\" fill=\"#0BDC85\" />\n  <circle cx=\"95\" cy=\"95\" r=\"46\" fill=\"#F7D046\" />\n</g>\n<ellipse cx=\"78\" cy=\"86\" rx=\"4\" ry=\"7\" fill=\"#141416\" />\n<path d=\"M106 86 C112 80 118 86 120 90\" fill=\"none\" stroke=\"#141416\" stroke-width=\"3.5\" stroke-linecap=\"round\" />\n<path d=\"M80 106 C86 122 104 122 112 106\" fill=\"#EA552B\" stroke=\"#141416\" stroke-width=\"3\" stroke-linejoin=\"round\" />\n<circle cx=\"68\" cy=\"100\" r=\"4\" fill=\"#EE8DB9\" />\n<circle cx=\"122\" cy=\"100\" r=\"4\" fill=\"#EE8DB9\" />"
  },
  {
    "id": "funky-retro-skate-board",
    "name": "Retro Street Skateboard",
    "category": "funky-complex",
    "tags": [
      "skateboard",
      "skate",
      "retro",
      "street",
      "90s",
      "wheels",
      "urban",
      "cool"
    ],
    "viewBox": "0 0 220 120",
    "type": "mixed",
    "defaultColor": "#55BBDA",
    "description": "Chunky 90s street skateboard with dual kicktails, grip tape stripe, two pairs of fat wheels, and 3D shadow.",
    "rawSvg": "<path d=\"M16 66 C28 54 192 54 204 66 C210 72 206 82 196 82 C184 82 36 82 24 82 C14 82 10 72 16 66 Z\" transform=\"translate(6, 6)\" fill=\"#141416\" />\n  <path d=\"M16 64 C28 50 192 50 204 64 C210 70 206 80 196 80 C184 80 36 80 24 80 C14 80 10 70 16 64 Z\" fill=\"currentColor\" stroke=\"#141416\" stroke-width=\"3\" stroke-linejoin=\"round\" />\n  <path d=\"M38 66 C70 58 150 58 182 66\" fill=\"none\" stroke=\"#FAF6F0\" stroke-width=\"3\" stroke-dasharray=\"6 4\" stroke-linecap=\"round\" />\n  <rect x=\"42\" y=\"80\" width=\"14\" height=\"24\" rx=\"6\" fill=\"#F7D046\" stroke=\"#141416\" stroke-width=\"3\" />\n  <rect x=\"66\" y=\"80\" width=\"14\" height=\"24\" rx=\"6\" fill=\"#F7D046\" stroke=\"#141416\" stroke-width=\"3\" />\n  <rect x=\"140\" y=\"80\" width=\"14\" height=\"24\" rx=\"6\" fill=\"#F7D046\" stroke=\"#141416\" stroke-width=\"3\" />\n  <rect x=\"164\" y=\"80\" width=\"14\" height=\"24\" rx=\"6\" fill=\"#F7D046\" stroke=\"#141416\" stroke-width=\"3\" />\n  <circle cx=\"49\" cy=\"92\" r=\"3\" fill=\"#141416\" />\n  <circle cx=\"73\" cy=\"92\" r=\"3\" fill=\"#141416\" />\n  <circle cx=\"147\" cy=\"92\" r=\"3\" fill=\"#141416\" />\n  <circle cx=\"171\" cy=\"92\" r=\"3\" fill=\"#141416\" />\n  <path d=\"M28 36 L18 42 M202 36 L212 42\" stroke=\"#141416\" stroke-width=\"3\" stroke-linecap=\"round\" />"
  },
  {
    "id": "funky-vinyl-record-spin",
    "name": "Groovy Vinyl LP Record",
    "category": "funky-complex",
    "tags": [
      "vinyl",
      "record",
      "music",
      "lp",
      "album",
      "audio",
      "dj",
      "spin"
    ],
    "viewBox": "0 0 190 190",
    "type": "mixed",
    "defaultColor": "#EA552B",
    "description": "Spinning classic vinyl LP record with concentric sound grooves, vibrant center label sticker, spindle hole, and musical sparkle accents.",
    "rawSvg": "<circle cx=\"98\" cy=\"98\" r=\"82\" fill=\"#141416\" opacity=\"0.3\" />\n  <circle cx=\"94\" cy=\"94\" r=\"82\" fill=\"#141416\" stroke=\"#141416\" stroke-width=\"3\" />\n  <circle cx=\"94\" cy=\"94\" r=\"70\" fill=\"none\" stroke=\"#2A2A2E\" stroke-width=\"2\" />\n  <circle cx=\"94\" cy=\"94\" r=\"58\" fill=\"none\" stroke=\"#2A2A2E\" stroke-width=\"2\" />\n  <circle cx=\"94\" cy=\"94\" r=\"46\" fill=\"none\" stroke=\"#2A2A2E\" stroke-width=\"2\" />\n  <circle cx=\"94\" cy=\"94\" r=\"32\" fill=\"currentColor\" stroke=\"#141416\" stroke-width=\"3\" />\n  <circle cx=\"94\" cy=\"94\" r=\"18\" fill=\"#FAF6F0\" stroke=\"#141416\" stroke-width=\"2\" />\n  <circle cx=\"94\" cy=\"94\" r=\"6\" fill=\"#141416\" />\n  <path d=\"M60 40 C70 30 118 30 128 40\" fill=\"none\" stroke=\"#FAF6F0\" stroke-width=\"3\" stroke-linecap=\"round\" opacity=\"0.4\" />\n  <path d=\"M60 148 C70 158 118 158 128 148\" fill=\"none\" stroke=\"#FAF6F0\" stroke-width=\"3\" stroke-linecap=\"round\" opacity=\"0.4\" />\n  <path d=\"M158 24 C162 34 166 38 176 40 C166 42 162 46 158 56 C154 46 150 42 140 40 C150 38 154 34 158 24 Z\" fill=\"#F7D046\" />"
  },
  {
    "id": "funky-roller-skate-quad",
    "name": "Vintage Disco Roller Skate",
    "category": "funky-complex",
    "tags": [
      "roller-skate",
      "disco",
      "70s",
      "80s",
      "skate",
      "quads",
      "retro",
      "pop"
    ],
    "viewBox": "0 0 190 200",
    "type": "mixed",
    "defaultColor": "#EE8DB9",
    "description": "High-top 70s quad roller skate boot with front toe stopper, criss-cross laces, and dual pop-colored rolling wheels.",
    "rawSvg": "<path d=\"M54 22 L98 22 C108 22 114 30 114 42 L110 82 L148 94 C158 98 164 108 162 120 L158 142 C158 148 152 152 146 152 L42 152 C32 152 26 144 26 134 L32 42 C32 30 42 22 54 22 Z\" transform=\"translate(6, 6)\" fill=\"#141416\" />\n  <path d=\"M54 18 L98 18 C108 18 114 26 114 38 L110 78 L148 90 C158 94 164 104 162 116 L158 138 C158 144 152 148 146 148 L42 148 C32 148 26 140 26 130 L32 38 C32 26 42 18 54 18 Z\" fill=\"currentColor\" stroke=\"#141416\" stroke-width=\"3\" stroke-linejoin=\"round\" />\n  <path d=\"M54 36 L104 36 M56 54 L102 54 M60 72 L100 72 M68 90 L110 90 M80 106 L124 106\" stroke=\"#FAF6F0\" stroke-width=\"3.5\" stroke-linecap=\"round\" />\n  <circle cx=\"48\" cy=\"172\" r=\"18\" fill=\"#F7D046\" stroke=\"#141416\" stroke-width=\"3\" />\n  <circle cx=\"48\" cy=\"172\" r=\"6\" fill=\"#141416\" />\n  <circle cx=\"132\" cy=\"172\" r=\"18\" fill=\"#F7D046\" stroke=\"#141416\" stroke-width=\"3\" />\n  <circle cx=\"132\" cy=\"172\" r=\"6\" fill=\"#141416\" />\n  <path d=\"M158 136 L174 144 C178 146 178 152 174 154 L160 160 Z\" fill=\"#EA552B\" stroke=\"#141416\" stroke-width=\"2.5\" />"
  },
  {
    "id": "funky-alien-ufo-beam",
    "name": "Funky UFO Tractor Beam",
    "category": "funky-complex",
    "tags": [
      "ufo",
      "alien",
      "space",
      "sci-fi",
      "beam",
      "saucer",
      "retro",
      "cosmic"
    ],
    "viewBox": "0 0 200 210",
    "type": "mixed",
    "defaultColor": "#0BDC85",
    "description": "Retro sci-fi flying saucer with clear bubble dome, cockpit alien eyes, and a cone tractor beam beaming up a smiling star.",
    "rawSvg": "<polygon points=\"80,102 120,102 168,198 32,198\" fill=\"#F7D046\" opacity=\"0.35\" />\n  <path d=\"M80 102 L32 198 M120 102 L168 198\" stroke=\"#F7D046\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-dasharray=\"6 4\" />\n  <ellipse cx=\"100\" cy=\"80\" rx=\"78\" ry=\"24\" fill=\"#141416\" transform=\"translate(4, 6)\" />\n  <ellipse cx=\"100\" cy=\"76\" rx=\"78\" ry=\"24\" fill=\"currentColor\" stroke=\"#141416\" stroke-width=\"3.5\" />\n  <ellipse cx=\"100\" cy=\"62\" rx=\"42\" ry=\"26\" fill=\"#55BBDA\" stroke=\"#141416\" stroke-width=\"3\" />\n  <circle cx=\"90\" cy=\"58\" r=\"4\" fill=\"#141416\" />\n  <circle cx=\"110\" cy=\"58\" r=\"4\" fill=\"#141416\" />\n  <circle cx=\"44\" cy=\"78\" r=\"5\" fill=\"#FAF6F0\" stroke=\"#141416\" stroke-width=\"2\" />\n  <circle cx=\"72\" cy=\"84\" r=\"5\" fill=\"#FAF6F0\" stroke=\"#141416\" stroke-width=\"2\" />\n  <circle cx=\"100\" cy=\"86\" r=\"5\" fill=\"#FAF6F0\" stroke=\"#141416\" stroke-width=\"2\" />\n  <circle cx=\"128\" cy=\"84\" r=\"5\" fill=\"#FAF6F0\" stroke=\"#141416\" stroke-width=\"2\" />\n  <circle cx=\"156\" cy=\"78\" r=\"5\" fill=\"#FAF6F0\" stroke=\"#141416\" stroke-width=\"2\" />\n  <path d=\"M100 156 L103 166 L113 166 L105 172 L108 182 L100 176 L92 182 L95 172 L87 166 L97 166 Z\" fill=\"#FAF6F0\" stroke=\"#141416\" stroke-width=\"2\" />"
  },
  {
    "id": "funky-boombox-stereo",
    "name": "Chunky 80s Boombox",
    "category": "funky-complex",
    "tags": [
      "boombox",
      "stereo",
      "80s",
      "music",
      "ghettoblaster",
      "audio",
      "radio",
      "tapes"
    ],
    "viewBox": "0 0 220 160",
    "type": "mixed",
    "defaultColor": "#EA552B",
    "description": "Iconic 1980s street boombox with arched carry handle, twin circular speaker woofers, tape cassette deck, and tuner knobs.",
    "rawSvg": "<path d=\"M60 18 H160 V34 H60 Z\" fill=\"#FAF6F0\" stroke=\"#141416\" stroke-width=\"3\" />\n  <rect x=\"24\" y=\"38\" width=\"176\" height=\"110\" rx=\"12\" fill=\"#141416\" transform=\"translate(6, 6)\" />\n  <rect x=\"20\" y=\"34\" width=\"176\" height=\"110\" rx=\"12\" fill=\"currentColor\" stroke=\"#141416\" stroke-width=\"3.5\" />\n  <circle cx=\"62\" cy=\"94\" r=\"28\" fill=\"#141416\" stroke=\"#FAF6F0\" stroke-width=\"3\" />\n  <circle cx=\"62\" cy=\"94\" r=\"14\" fill=\"#F7D046\" stroke=\"#141416\" stroke-width=\"2\" />\n  <circle cx=\"154\" cy=\"94\" r=\"28\" fill=\"#141416\" stroke=\"#FAF6F0\" stroke-width=\"3\" />\n  <circle cx=\"154\" cy=\"94\" r=\"14\" fill=\"#F7D046\" stroke=\"#141416\" stroke-width=\"2\" />\n  <rect x=\"96\" y=\"74\" width=\"24\" height=\"40\" rx=\"4\" fill=\"#FAF6F0\" stroke=\"#141416\" stroke-width=\"2.5\" />\n  <circle cx=\"102\" cy=\"90\" r=\"3\" fill=\"#141416\" />\n  <circle cx=\"114\" cy=\"90\" r=\"3\" fill=\"#141416\" />\n  <rect x=\"36\" y=\"46\" width=\"144\" height=\"14\" rx=\"3\" fill=\"#FAF6F0\" stroke=\"#141416\" stroke-width=\"2\" />\n  <circle cx=\"48\" cy=\"53\" r=\"3\" fill=\"#EA552B\" />\n  <circle cx=\"60\" cy=\"53\" r=\"3\" fill=\"#4CA96D\" />\n  <circle cx=\"72\" cy=\"53\" r=\"3\" fill=\"#55BBDA\" />"
  },
  {
    "id": "funky-gameboy-handheld",
    "name": "90s Handheld Game Console",
    "category": "funky-complex",
    "tags": [
      "gameboy",
      "gaming",
      "console",
      "90s",
      "retro",
      "pixel",
      "arcade",
      "play"
    ],
    "viewBox": "0 0 160 210",
    "type": "mixed",
    "defaultColor": "#55BBDA",
    "description": "Nostalgic 90s handheld 8-bit gaming device with square LCD screen, cross D-pad, slanted action buttons, and speaker vents.",
    "rawSvg": "<path d=\"M26 18 H134 C140 18 144 22 144 28 V168 C144 186 130 198 114 198 H36 C24 198 16 188 16 174 V28 C16 22 20 18 26 18 Z\" transform=\"translate(6, 6)\" fill=\"#141416\" />\n  <path d=\"M26 14 H134 C140 14 144 18 144 24 V164 C144 182 130 194 114 194 H36 C24 194 16 184 16 170 V24 C16 18 20 14 26 14 Z\" fill=\"currentColor\" stroke=\"#141416\" stroke-width=\"3.5\" stroke-linejoin=\"round\" />\n  <rect x=\"32\" y=\"30\" width=\"96\" height=\"74\" rx=\"8\" fill=\"#141416\" />\n  <rect x=\"42\" y=\"40\" width=\"76\" height=\"54\" rx=\"4\" fill=\"#0BDC85\" stroke=\"#141416\" stroke-width=\"2\" />\n  <circle cx=\"36\" cy=\"46\" r=\"2.5\" fill=\"#EA552B\" />\n  <path d=\"M42 136 H52 V126 H62 V136 H72 V146 H62 V156 H52 V146 H42 Z\" fill=\"#141416\" />\n  <circle cx=\"118\" cy=\"136\" r=\"9\" fill=\"#EA552B\" stroke=\"#141416\" stroke-width=\"2\" />\n  <circle cx=\"102\" cy=\"150\" r=\"9\" fill=\"#EA552B\" stroke=\"#141416\" stroke-width=\"2\" />\n  <rect x=\"52\" y=\"172\" width=\"16\" height=\"5\" rx=\"2.5\" transform=\"rotate(-25 52 172)\" fill=\"#141416\" />\n  <rect x=\"76\" y=\"172\" width=\"16\" height=\"5\" rx=\"2.5\" transform=\"rotate(-25 76 172)\" fill=\"#141416\" />"
  },
  {
    "id": "funky-lava-lamp-flow",
    "name": "Psychedelic Retro Lava Lamp",
    "category": "funky-complex",
    "tags": [
      "lava-lamp",
      "psychedelic",
      "60s",
      "70s",
      "lamp",
      "fluid",
      "blobs",
      "trippy"
    ],
    "viewBox": "0 0 140 210",
    "type": "mixed",
    "defaultColor": "#EE8DB9",
    "description": "Curved 60s psychedelic lava lamp with floating fluid magma blobs, conical metal base, and warm top cap.",
    "rawSvg": "<polygon points=\"56,12 84,12 78,34 62,34\" fill=\"#FAF6F0\" stroke=\"#141416\" stroke-width=\"3\" stroke-linejoin=\"round\" />\n  <path d=\"M62 34 C44 74 38 126 44 156 H96 C102 126 96 74 78 34 Z\" fill=\"currentColor\" stroke=\"#141416\" stroke-width=\"3.5\" stroke-linejoin=\"round\" />\n  <polygon points=\"44,156 96,156 112 198 28 198\" fill=\"#FAF6F0\" stroke=\"#141416\" stroke-width=\"3\" stroke-linejoin=\"round\" />\n  <path d=\"M54 136 C50 114 62 108 72 118 C82 128 78 142 66 142 C58 142 56 140 54 136 Z\" fill=\"#F7D046\" stroke=\"#141416\" stroke-width=\"2\" />\n  <ellipse cx=\"78\" cy=\"86\" rx=\"14\" ry=\"18\" fill=\"#F7D046\" stroke=\"#141416\" stroke-width=\"2\" />\n  <circle cx=\"60\" cy=\"56\" r=\"8\" fill=\"#F7D046\" stroke=\"#141416\" stroke-width=\"2\" />\n  <circle cx=\"76\" cy=\"184\" r=\"5\" fill=\"#EA552B\" />"
  },
  {
    "id": "funky-disco-mirror-ball",
    "name": "Glittering Disco Mirror Ball",
    "category": "funky-complex",
    "tags": [
      "disco",
      "mirror-ball",
      "glitter",
      "party",
      "club",
      "dance",
      "night",
      "sparkle"
    ],
    "viewBox": "0 0 180 200",
    "type": "mixed",
    "defaultColor": "#55BBDA",
    "description": "Hanging reflective disco mirror ball with curved grid facet tiles, ceiling chain, and sparkling light star flares.",
    "rawSvg": "<path d=\"M90 6 V36\" stroke=\"#141416\" stroke-width=\"3.5\" stroke-linecap=\"round\" />\n  <circle cx=\"94\" cy=\"118\" r=\"68\" fill=\"#141416\" />\n  <circle cx=\"90\" cy=\"114\" r=\"68\" fill=\"currentColor\" stroke=\"#141416\" stroke-width=\"3.5\" />\n  <g stroke=\"#141416\" stroke-width=\"2\" fill=\"none\">\n    <path d=\"M22 114 H158\" />\n    <path d=\"M26 94 C50 98 130 98 154 94\" />\n    <path d=\"M26 134 C50 130 130 130 154 134\" />\n    <path d=\"M38 76 C60 82 120 82 142 76\" />\n    <path d=\"M38 152 C60 146 120 146 142 152\" />\n    <path d=\"M90 46 V182\" />\n    <path d=\"M70 48 C64 80 64 148 70 180\" />\n    <path d=\"M110 48 C116 80 116 148 110 180\" />\n    <path d=\"M50 56 C42 86 42 142 50 172\" />\n    <path d=\"M130 56 C138 86 138 142 130 172\" />\n  </g>\n  <path d=\"M148 48 C150 60 154 64 166 66 C154 68 150 72 148 84 C146 72 142 68 130 66 C142 64 146 60 148 48 Z\" fill=\"#F7D046\" stroke=\"#141416\" stroke-width=\"2\" />\n  <path d=\"M32 140 C33 148 36 151 44 152 C36 153 33 156 32 164 C31 156 28 153 20 152 C28 151 31 148 32 140 Z\" fill=\"#FAF6F0\" />"
  },
  {
    "id": "funky-melting-smiley-face",
    "name": "Dripping Psychedelic Smiley",
    "category": "funky-complex",
    "tags": [
      "melting",
      "smiley",
      "drip",
      "psychedelic",
      "acid",
      "yellow",
      "liquid",
      "trippy"
    ],
    "viewBox": "0 0 180 200",
    "type": "mixed",
    "defaultColor": "#F7D046",
    "description": "Melting psychedelic cartoon smiley face with liquid droplet drips flowing down from the jawline.",
    "rawSvg": "<path d=\"M90 20 C130 20 162 50 162 90 C162 120 148 134 144 154 C140 174 130 178 126 156 C122 138 116 138 112 166 C108 190 98 194 94 166 C90 140 84 140 80 174 C76 198 66 196 64 164 C62 138 56 138 52 152 C48 166 38 162 38 142 C38 126 18 116 18 90 C18 50 50 20 90 20 Z\" transform=\"translate(6, 6)\" fill=\"#141416\" />\n  <path d=\"M90 14 C130 14 162 44 162 84 C162 114 148 128 144 148 C140 168 130 172 126 150 C122 132 116 132 112 160 C108 184 98 188 94 160 C90 134 84 134 80 168 C76 192 66 190 64 158 C62 132 56 132 52 146 C48 160 38 156 38 136 C38 120 18 110 18 84 C18 44 50 14 90 14 Z\" fill=\"currentColor\" stroke=\"#141416\" stroke-width=\"3.5\" stroke-linejoin=\"round\" />\n  <ellipse cx=\"64\" cy=\"74\" rx=\"8\" ry=\"16\" fill=\"#141416\" />\n  <ellipse cx=\"116\" cy=\"74\" rx=\"8\" ry=\"16\" fill=\"#141416\" />\n  <path d=\"M54 104 C74 126 106 126 126 104\" fill=\"none\" stroke=\"#141416\" stroke-width=\"4.5\" stroke-linecap=\"round\" />\n  <circle cx=\"80\" cy=\"188\" r=\"4\" fill=\"currentColor\" stroke=\"#141416\" stroke-width=\"2\" />\n  <circle cx=\"106\" cy=\"182\" r=\"3\" fill=\"currentColor\" stroke=\"#141416\" stroke-width=\"2\" />"
  },
  {
    "id": "funky-flame-fire-pop",
    "name": "Hot-Rod Comic Flame",
    "category": "funky-complex",
    "tags": [
      "flame",
      "fire",
      "hotrod",
      "comic",
      "energy",
      "burn",
      "warmth",
      "pop"
    ],
    "viewBox": "0 0 160 210",
    "type": "mixed",
    "defaultColor": "#EA552B",
    "description": "Multi-tier vintage hot-rod campfire flame with warm persimmon outer tongue, inner golden fire core, and comic ink contours.",
    "rawSvg": "<path d=\"M80 18 C98 56 128 78 128 114 C128 148 108 186 80 196 C52 186 32 148 32 114 C32 88 50 68 56 46 C60 64 68 76 74 76 C76 76 78 54 80 18 Z\" transform=\"translate(6, 6)\" fill=\"#141416\" />\n  <path d=\"M80 12 C98 50 128 72 128 108 C128 142 108 180 80 190 C52 180 32 142 32 108 C32 82 50 62 56 40 C60 58 68 70 74 70 C76 70 78 48 80 12 Z\" fill=\"currentColor\" stroke=\"#141416\" stroke-width=\"3.5\" stroke-linejoin=\"round\" />\n  <path d=\"M80 72 C90 94 108 108 108 130 C108 152 96 172 80 178 C64 172 52 152 52 130 C52 114 62 102 66 88 C68 98 72 106 76 106 C78 106 79 92 80 72 Z\" fill=\"#F7D046\" stroke=\"#141416\" stroke-width=\"2.5\" stroke-linejoin=\"round\" />\n  <circle cx=\"80\" cy=\"148\" r=\"8\" fill=\"#FAF6F0\" />"
  },
  {
    "id": "funky-sliced-watermelon",
    "name": "Pop-Art Watermelon Slice",
    "category": "funky-complex",
    "tags": [
      "watermelon",
      "fruit",
      "summer",
      "slice",
      "seeds",
      "refresh",
      "food",
      "pop"
    ],
    "viewBox": "0 0 200 170",
    "type": "mixed",
    "defaultColor": "#EE8DB9",
    "description": "Juicy cartoon watermelon wedge with curved green rind, sweet pink center, glossy black teardrop seeds, and a 3D drop shadow.",
    "rawSvg": "<path d=\"M24 44 C84 148 148 148 178 44 C120 72 60 72 24 44 Z\" transform=\"translate(6, 6)\" fill=\"#141416\" />\n  <path d=\"M20 40 C80 144 144 144 174 40 C116 68 56 68 20 40 Z\" fill=\"#4CA96D\" stroke=\"#141416\" stroke-width=\"3.5\" stroke-linejoin=\"round\" />\n  <path d=\"M30 46 C80 134 136 134 164 46 C114 66 60 66 30 46 Z\" fill=\"currentColor\" stroke=\"#FAF6F0\" stroke-width=\"3\" />\n  <path d=\"M72 80 C72 74 76 68 78 64 C80 68 84 74 84 80 C84 84 80 87 78 87 C76 87 72 84 72 80 Z\" fill=\"#141416\" />\n  <path d=\"M102 86 C102 80 106 74 108 70 C110 74 114 80 114 86 C114 90 110 93 108 93 C106 93 102 90 102 86 Z\" fill=\"#141416\" />\n  <path d=\"M124 74 C124 68 128 62 130 58 C132 62 136 68 136 74 C136 78 132 81 130 81 C128 81 124 78 124 74 Z\" fill=\"#141416\" />\n  <path d=\"M90 106 C90 100 94 94 96 90 C98 94 102 100 102 106 C102 110 98 113 96 113 C94 113 90 110 90 106 Z\" fill=\"#141416\" />"
  },
  {
    "id": "funky-chunky-sneaker-kick",
    "name": "90s Streetwear High-Top Sneaker",
    "category": "funky-complex",
    "tags": [
      "sneaker",
      "shoe",
      "streetwear",
      "kicks",
      "90s",
      "fashion",
      "high-top",
      "cool"
    ],
    "viewBox": "0 0 220 160",
    "type": "mixed",
    "defaultColor": "#55BBDA",
    "description": "Retro 90s streetwear high-top basketball sneaker with chunky platform tread sole, eyelet laces, and dynamic speed motion streaks.",
    "rawSvg": "<path d=\"M34 26 L76 26 C84 26 90 32 92 44 L96 74 L158 84 C178 88 196 102 196 122 L196 134 L26 134 L26 44 C26 34 30 26 34 26 Z\" transform=\"translate(6, 6)\" fill=\"#141416\" />\n  <path d=\"M34 22 L76 22 C84 22 90 28 92 40 L96 70 L158 80 C178 84 196 98 196 118 L196 130 L26 130 L26 40 C26 30 30 22 34 22 Z\" fill=\"currentColor\" stroke=\"#141416\" stroke-width=\"3.5\" stroke-linejoin=\"round\" />\n  <rect x=\"22\" y=\"128\" width=\"178\" height=\"20\" rx=\"4\" fill=\"#FAF6F0\" stroke=\"#141416\" stroke-width=\"3\" />\n  <path d=\"M50 134 H180\" stroke=\"#141416\" stroke-width=\"2.5\" stroke-dasharray=\"8 6\" />\n  <path d=\"M48 40 L84 40 M54 58 L88 58 M60 76 L94 76 M68 94 L114 94\" stroke=\"#FAF6F0\" stroke-width=\"3.5\" stroke-linecap=\"round\" />\n  <circle cx=\"160\" cy=\"108\" r=\"10\" fill=\"#EA552B\" stroke=\"#141416\" stroke-width=\"2\" />\n  <path d=\"M160 102 L163 108 L169 108 L164 112 L166 118 L160 114 L154 118 L156 112 L151 108 L157 108 Z\" fill=\"#FAF6F0\" />"
  },
  {
    "id": "funky-neon-mocktail-glass",
    "name": "Retro Tiki Mocktail Coupe",
    "category": "funky-complex",
    "tags": [
      "mocktail",
      "drink",
      "tiki",
      "party",
      "summer",
      "martini",
      "bar",
      "vacation"
    ],
    "viewBox": "0 0 170 210",
    "type": "mixed",
    "defaultColor": "#F7D046",
    "description": "Vibrant party mocktail glass with wide V-bowl, curvy neon straw, skewered olive garnish, and festive star sparkles.",
    "rawSvg": "<path d=\"M36 28 L85 106 V176 H56 V192 H114 V176 H85 V106 L134 28 Z\" transform=\"translate(6, 6)\" fill=\"#141416\" />\n  <path d=\"M36 24 L85 102 V172 H56 V188 H114 V172 H85 V102 L134 24 Z\" fill=\"none\" stroke=\"#141416\" stroke-width=\"3.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n  <polygon points=\"46,38 85,100 124,38\" fill=\"currentColor\" stroke=\"#141416\" stroke-width=\"2\" />\n  <path d=\"M102 14 L80 62 L94 92\" fill=\"none\" stroke=\"#EA552B\" stroke-width=\"4.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <circle cx=\"118\" cy=\"22\" r=\"10\" fill=\"#4CA96D\" stroke=\"#141416\" stroke-width=\"2.5\" />\n  <circle cx=\"118\" cy=\"22\" r=\"4\" fill=\"#EA552B\" />\n  <path d=\"M142 56 C144 64 148 67 154 68 C148 69 144 72 142 80 C140 72 136 69 130 68 C136 67 140 64 142 56 Z\" fill=\"#EE8DB9\" />"
  },
  {
    "id": "funky-cloud-lightning-storm",
    "name": "Pop-Art Stormy Cloud",
    "category": "funky-complex",
    "tags": [
      "cloud",
      "lightning",
      "storm",
      "rain",
      "weather",
      "comic",
      "energy",
      "thunder"
    ],
    "viewBox": "0 0 190 190",
    "type": "mixed",
    "defaultColor": "#55BBDA",
    "description": "Chubby comic cloud pouring stylized teardrop raindrops and struck through by an energetic zigzag lightning bolt.",
    "rawSvg": "<path d=\"M48 94 C34 94 22 82 22 68 C22 56 30 46 42 44 C46 28 62 16 82 16 C104 16 122 30 126 48 C138 46 154 54 158 68 C166 72 172 82 170 92 C168 104 156 112 144 112 H48 Z\" transform=\"translate(6, 6)\" fill=\"#141416\" />\n  <path d=\"M48 90 C34 90 22 78 22 64 C22 52 30 42 42 40 C46 24 62 12 82 12 C104 12 122 26 126 44 C138 42 154 50 158 64 C166 68 172 78 170 88 C168 100 156 108 144 108 H48 Z\" fill=\"currentColor\" stroke=\"#141416\" stroke-width=\"3.5\" stroke-linejoin=\"round\" />\n  <polygon points=\"104,78 78,124 98,124 84,172 124,114 104,114 118,78\" fill=\"#F7D046\" stroke=\"#141416\" stroke-width=\"2.5\" stroke-linejoin=\"round\" />\n  <path d=\"M44 136 C44 144 48 148 52 148 C56 148 60 144 60 136 C60 128 52 120 52 120 C52 120 44 128 44 136 Z\" fill=\"#FAF6F0\" stroke=\"#141416\" stroke-width=\"2\" />\n  <path d=\"M136 136 C136 144 140 148 144 148 C148 148 152 144 152 136 C152 128 144 120 144 120 C144 120 136 128 136 136 Z\" fill=\"#FAF6F0\" stroke=\"#141416\" stroke-width=\"2\" />"
  },
  {
    "id": "funky-ghost-pac-doodle",
    "name": "Arcade 8-Bit Ghost Doodle",
    "category": "funky-complex",
    "tags": [
      "ghost",
      "arcade",
      "pacman",
      "80s",
      "retro",
      "pixel",
      "cute",
      "spooky"
    ],
    "viewBox": "0 0 170 190",
    "type": "mixed",
    "defaultColor": "#EE8DB9",
    "description": "Playful 80s arcade cartoon ghost with arching bell body, rippling bottom skirt tentacles, and big peering cartoon eyes.",
    "rawSvg": "<path d=\"M34 84 C34 44 60 18 90 18 C120 18 146 44 146 84 V160 L128 146 L110 160 L90 146 L70 160 L52 146 L34 160 Z\" transform=\"translate(6, 6)\" fill=\"#141416\" />\n  <path d=\"M34 80 C34 40 60 14 90 14 C120 14 146 40 146 80 V156 L128 142 L110 156 L90 142 L70 156 L52 142 L34 156 Z\" fill=\"currentColor\" stroke=\"#141416\" stroke-width=\"3.5\" stroke-linejoin=\"round\" />\n  <ellipse cx=\"68\" cy=\"74\" rx=\"12\" ry=\"16\" fill=\"#FAF6F0\" stroke=\"#141416\" stroke-width=\"2.5\" />\n  <ellipse cx=\"112\" cy=\"74\" rx=\"12\" ry=\"16\" fill=\"#FAF6F0\" stroke=\"#141416\" stroke-width=\"2.5\" />\n  <circle cx=\"64\" cy=\"74\" r=\"6\" fill=\"#141416\" />\n  <circle cx=\"108\" cy=\"74\" r=\"6\" fill=\"#141416\" />\n  <circle cx=\"90\" cy=\"178\" r=\"5\" fill=\"#F7D046\" />"
  },
  {
    "id": "funky-retro-tv-antenna",
    "name": "Vintage CRT Bubble TV",
    "category": "funky-complex",
    "tags": [
      "tv",
      "television",
      "crt",
      "retro",
      "antenna",
      "vintage",
      "broadcast",
      "screen"
    ],
    "viewBox": "0 0 190 190",
    "type": "mixed",
    "defaultColor": "#F7D046",
    "description": "Mid-century bubble CRT TV set with V-shaped rabbit ear antennas, rounded screen frame, and twin analog tuning knobs.",
    "rawSvg": "<path d=\"M64 18 L94 58 M124 18 L94 58\" stroke=\"#141416\" stroke-width=\"3.5\" stroke-linecap=\"round\" />\n  <circle cx=\"64\" cy=\"18\" r=\"4\" fill=\"#EA552B\" />\n  <circle cx=\"124\" cy=\"18\" r=\"4\" fill=\"#EA552B\" />\n  <rect x=\"24\" y=\"60\" width=\"144\" height=\"110\" rx=\"18\" fill=\"#141416\" transform=\"translate(6, 6)\" />\n  <rect x=\"20\" y=\"56\" width=\"144\" height=\"110\" rx=\"18\" fill=\"currentColor\" stroke=\"#141416\" stroke-width=\"3.5\" />\n  <rect x=\"34\" y=\"70\" width=\"92\" height=\"82\" rx=\"12\" fill=\"#55BBDA\" stroke=\"#141416\" stroke-width=\"3\" />\n  <path d=\"M48 84 C68 80 92 84 104 88\" stroke=\"#FAF6F0\" stroke-width=\"3\" stroke-linecap=\"round\" opacity=\"0.6\" />\n  <circle cx=\"144\" cy=\"88\" r=\"8\" fill=\"#FAF6F0\" stroke=\"#141416\" stroke-width=\"2.5\" />\n  <circle cx=\"144\" cy=\"116\" r=\"8\" fill=\"#FAF6F0\" stroke=\"#141416\" stroke-width=\"2.5\" />\n  <line x1=\"138\" y1=\"140\" x2=\"150\" y2=\"140\" stroke=\"#141416\" stroke-width=\"2\" stroke-linecap=\"round\" />\n  <line x1=\"138\" y1=\"146\" x2=\"150\" y2=\"146\" stroke=\"#141416\" stroke-width=\"2\" stroke-linecap=\"round\" />"
  },
  {
    "id": "funky-lucky-horseshoe-stars",
    "name": "Pop Horseshoe",
    "category": "funky-complex",
    "tags": [
      "horseshoe",
      "lucky",
      "fortune",
      "stars",
      "clover",
      "western",
      "gold",
      "charm"
    ],
    "viewBox": "0 0 180 180",
    "type": "mixed",
    "defaultColor": "#F7D046",
    "description": "Good-luck western horseshoe adorned with punched nail insets, stamped 4-point star sparkles, and a 3D comic shadow.",
    "rawSvg": "<path d=\"M38 24 V74 C38 106 62 134 94 134 C126 134 150 106 150 74 V24 H120 V72 C120 88 108 104 94 104 C80 104 68 88 68 72 V24 Z\" transform=\"translate(6, 6)\" fill=\"#141416\" />\n  <path d=\"M38 20 V70 C38 102 62 130 94 130 C126 130 150 102 150 70 V20 H120 V68 C120 84 108 100 94 100 C80 100 68 84 68 68 V20 Z\" fill=\"currentColor\" stroke=\"#141416\" stroke-width=\"3.5\" stroke-linejoin=\"round\" />\n  <circle cx=\"53\" cy=\"40\" r=\"3.5\" fill=\"#141416\" />\n  <circle cx=\"53\" cy=\"62\" r=\"3.5\" fill=\"#141416\" />\n  <circle cx=\"58\" cy=\"84\" r=\"3.5\" fill=\"#141416\" />\n  <circle cx=\"135\" cy=\"40\" r=\"3.5\" fill=\"#141416\" />\n  <circle cx=\"135\" cy=\"62\" r=\"3.5\" fill=\"#141416\" />\n  <circle cx=\"130\" cy=\"84\" r=\"3.5\" fill=\"#141416\" />\n  <path d=\"M94 138 C95 146 98 149 106 150 C98 151 95 154 94 162 C93 154 90 151 82 150 C90 149 93 146 94 138 Z\" fill=\"#EA552B\" stroke=\"#141416\" stroke-width=\"1.5\" />"
  },
  {
    "id": "funky-cherries-double-drop",
    "name": "Glossy Twin Pop Cherries",
    "category": "funky-complex",
    "tags": [
      "cherries",
      "fruit",
      "berries",
      "sweet",
      "popart",
      "gloss",
      "cute",
      "vintage"
    ],
    "viewBox": "0 0 180 190",
    "type": "mixed",
    "defaultColor": "#EA552B",
    "description": "Double pop-art red cherries joined by an arched twig stem with an organic green leaf and reflective white highlight crescents.",
    "rawSvg": "<path d=\"M96 18 C90 48 58 84 56 116 M96 18 C104 52 128 84 134 116\" fill=\"none\" stroke=\"#141416\" stroke-width=\"3.5\" stroke-linecap=\"round\" />\n  <path d=\"M96 18 C120 14 138 26 142 38 C124 44 104 36 96 18 Z\" fill=\"#4CA96D\" stroke=\"#141416\" stroke-width=\"2.5\" stroke-linejoin=\"round\" />\n  <circle cx=\"58\" cy=\"138\" r=\"34\" fill=\"#141416\" />\n  <circle cx=\"54\" cy=\"134\" r=\"34\" fill=\"currentColor\" stroke=\"#141416\" stroke-width=\"3.5\" />\n  <path d=\"M42 118 A 18 18 0 0 1 68 118\" fill=\"none\" stroke=\"#FAF6F0\" stroke-width=\"4\" stroke-linecap=\"round\" />\n  <circle cx=\"130\" cy=\"138\" r=\"34\" fill=\"#141416\" />\n  <circle cx=\"126\" cy=\"134\" r=\"34\" fill=\"currentColor\" stroke=\"#141416\" stroke-width=\"3.5\" />\n  <path d=\"M114 118 A 18 18 0 0 1 140 118\" fill=\"none\" stroke=\"#FAF6F0\" stroke-width=\"4\" stroke-linecap=\"round\" />"
  },
  {
    "id": "funky-planet-saturn-rings",
    "name": "Cosmic Saturn & Halo Ring",
    "category": "funky-complex",
    "tags": [
      "saturn",
      "planet",
      "rings",
      "space",
      "galaxy",
      "orbit",
      "cosmic",
      "retro"
    ],
    "viewBox": "0 0 210 170",
    "type": "mixed",
    "defaultColor": "#55BBDA",
    "description": "Retro cartoon celestial planet encircled by a sweeping inclined elliptical halo ring with surface crater doodles.",
    "rawSvg": "<circle cx=\"109\" cy=\"89\" r=\"48\" fill=\"#141416\" />\n  <circle cx=\"105\" cy=\"85\" r=\"48\" fill=\"currentColor\" stroke=\"#141416\" stroke-width=\"3.5\" />\n  <path d=\"M68 64 C84 68 126 68 142 64 M62 92 C82 98 128 98 148 92 M74 114 C90 118 120 118 136 114\" stroke=\"#FAF6F0\" stroke-width=\"3\" stroke-linecap=\"round\" />\n  <path d=\"M18 105 C38 60 172 60 192 105 C172 150 38 150 18 105 Z\" fill=\"none\" stroke=\"#F7D046\" stroke-width=\"8\" stroke-linecap=\"round\" />\n  <path d=\"M18 105 C38 60 172 60 192 105 C172 150 38 150 18 105 Z\" fill=\"none\" stroke=\"#141416\" stroke-width=\"2\" stroke-linecap=\"round\" />\n  <circle cx=\"28\" cy=\"38\" r=\"3.5\" fill=\"#EE8DB9\" />\n  <circle cx=\"178\" cy=\"138\" r=\"4\" fill=\"#0BDC85\" />"
  },
  {
    "id": "funky-retro-polaroid-camera",
    "name": "Vintage Instant Film Camera",
    "category": "funky-complex",
    "tags": [
      "camera",
      "polaroid",
      "photo",
      "film",
      "vintage",
      "lens",
      "snapshot",
      "retro"
    ],
    "viewBox": "0 0 190 190",
    "type": "mixed",
    "defaultColor": "#FAF6F0",
    "description": "Iconic vintage instant camera with large multi-ring glass lens, rainbow accent stripe, red shutter button, and photo film slot.",
    "rawSvg": "<rect x=\"28\" y=\"38\" width=\"134\" height=\"126\" rx=\"16\" fill=\"#141416\" transform=\"translate(6, 6)\" />\n  <rect x=\"24\" y=\"34\" width=\"134\" height=\"126\" rx=\"16\" fill=\"currentColor\" stroke=\"#141416\" stroke-width=\"3.5\" />\n  <path d=\"M24 84 H158\" stroke=\"#EA552B\" stroke-width=\"4\" />\n  <path d=\"M24 88 H158\" stroke=\"#F7D046\" stroke-width=\"4\" />\n  <path d=\"M24 92 H158\" stroke=\"#55BBDA\" stroke-width=\"4\" />\n  <circle cx=\"91\" cy=\"106\" r=\"34\" fill=\"#141416\" stroke=\"#FAF6F0\" stroke-width=\"3\" />\n  <circle cx=\"91\" cy=\"106\" r=\"20\" fill=\"#55BBDA\" stroke=\"#FAF6F0\" stroke-width=\"2\" />\n  <circle cx=\"91\" cy=\"106\" r=\"8\" fill=\"#141416\" />\n  <circle cx=\"94\" cy=\"103\" r=\"3\" fill=\"#FFFFFF\" />\n  <rect x=\"38\" y=\"48\" width=\"18\" height=\"14\" rx=\"3\" fill=\"#141416\" />\n  <circle cx=\"134\" cy=\"54\" r=\"8\" fill=\"#EA552B\" stroke=\"#141416\" stroke-width=\"2\" />\n  <rect x=\"48\" y=\"146\" width=\"86\" height=\"6\" rx=\"3\" fill=\"#141416\" />"
  },
  {
    "id": "funky-retro-joystick-arcade",
    "name": "Classic Arcade Joystick",
    "category": "funky-complex",
    "tags": [
      "arcade",
      "joystick",
      "gaming",
      "retro",
      "80s",
      "atari",
      "buttons",
      "controller"
    ],
    "viewBox": "0 0 180 200",
    "type": "mixed",
    "defaultColor": "#EA552B",
    "description": "Vintage 80s arcade cabinet joystick with ball-top lever, dual action buttons, and chunky woodgrain base.",
    "rawSvg": "<polygon points=\"34,106 146,106 164,178 16,178\" fill=\"#141416\" transform=\"translate(6, 6)\" />\n  <polygon points=\"34,102 146,102 164,174 16,174\" fill=\"#FAF6F0\" stroke=\"#141416\" stroke-width=\"3.5\" stroke-linejoin=\"round\" />\n  <ellipse cx=\"90\" cy=\"102\" rx=\"28\" ry=\"10\" fill=\"#141416\" />\n  <path d=\"M90 102 L90 42\" stroke=\"#141416\" stroke-width=\"8\" stroke-linecap=\"round\" />\n  <circle cx=\"94\" cy=\"38\" r=\"24\" fill=\"#141416\" />\n  <circle cx=\"90\" cy=\"34\" r=\"24\" fill=\"currentColor\" stroke=\"#141416\" stroke-width=\"3.5\" />\n  <circle cx=\"82\" cy=\"26\" r=\"6\" fill=\"#FAF6F0\" />\n  <circle cx=\"56\" cy=\"142\" r=\"14\" fill=\"#F7D046\" stroke=\"#141416\" stroke-width=\"3\" />\n  <circle cx=\"124\" cy=\"142\" r=\"14\" fill=\"#0BDC85\" stroke=\"#141416\" stroke-width=\"3\" />"
  },
  {
    "id": "funky-melting-ice-cream",
    "name": "Triple-Scoop Melting Ice Cream",
    "category": "funky-complex",
    "tags": [
      "ice-cream",
      "cone",
      "dessert",
      "sweet",
      "melting",
      "summer",
      "scoop",
      "cherry"
    ],
    "viewBox": "0 0 160 220",
    "type": "mixed",
    "defaultColor": "#EE8DB9",
    "description": "Playful triple-scoop ice cream cone with crosshatch waffle cone, dripping vanilla fudge, and a glossy red cherry.",
    "rawSvg": "<polygon points=\"80,214 36,112 124,112\" fill=\"#F7D046\" stroke=\"#141416\" stroke-width=\"3.5\" stroke-linejoin=\"round\" />\n  <path d=\"M50 128 L104 186 M70 128 L94 154 M110 128 L56 186 M90 128 L66 154\" stroke=\"#141416\" stroke-width=\"2\" />\n  <path d=\"M32 112 C26 94 40 76 60 76 C64 60 84 56 96 66 C108 56 126 66 124 84 C136 94 132 112 120 112 C116 122 106 122 100 114 C94 124 86 124 80 114 C74 124 66 124 60 114 C54 122 40 122 32 112 Z\" fill=\"currentColor\" stroke=\"#141416\" stroke-width=\"3.5\" stroke-linejoin=\"round\" />\n  <circle cx=\"80\" cy=\"52\" r=\"16\" fill=\"#EA552B\" stroke=\"#141416\" stroke-width=\"3\" />\n  <circle cx=\"76\" cy=\"48\" r=\"4\" fill=\"#FAF6F0\" />\n  <path d=\"M86 40 C98 22 112 26 116 30\" fill=\"none\" stroke=\"#141416\" stroke-width=\"3\" stroke-linecap=\"round\" />"
  },
  {
    "id": "funky-hot-dog-mustard",
    "name": "Diner Comic Hot Dog",
    "category": "funky-complex",
    "tags": [
      "hot-dog",
      "fast-food",
      "diner",
      "mustard",
      "snack",
      "sausage",
      "bun",
      "comic"
    ],
    "viewBox": "0 0 210 140",
    "type": "mixed",
    "defaultColor": "#EA552B",
    "description": "Retro diner sausage hot dog in a soft bun with dynamic neon yellow mustard squiggles and 3D shadow.",
    "rawSvg": "<path d=\"M26 60 C12 74 18 104 46 108 L164 108 C192 104 198 74 184 60 C176 52 164 54 152 60 L58 60 C46 54 34 52 26 60 Z\" transform=\"translate(6, 6)\" fill=\"#141416\" />\n  <path d=\"M26 56 C12 70 18 100 46 104 L164 104 C192 100 198 70 184 56 C176 48 164 50 152 56 L58 56 C46 50 34 48 26 56 Z\" fill=\"#F7D046\" stroke=\"#141416\" stroke-width=\"3.5\" stroke-linejoin=\"round\" />\n  <path d=\"M14 62 C8 48 28 42 48 44 L162 44 C182 42 202 48 196 62 C190 76 170 80 150 78 L60 78 C40 80 20 76 14 62 Z\" fill=\"currentColor\" stroke=\"#141416\" stroke-width=\"3\" stroke-linejoin=\"round\" />\n  <path d=\"M34 60 C44 50 50 72 64 60 C78 48 84 72 98 60 C112 48 118 72 132 60 C146 48 152 72 166 60 C174 52 178 64 182 60\" fill=\"none\" stroke=\"#FAF6F0\" stroke-width=\"4.5\" stroke-linecap=\"round\" />"
  },
  {
    "id": "funky-cupid-heart-arrow",
    "name": "Cupid Pierced Heart",
    "category": "funky-complex",
    "tags": [
      "heart",
      "love",
      "cupid",
      "arrow",
      "valentine",
      "romance",
      "wings",
      "sweet"
    ],
    "viewBox": "0 0 200 170",
    "type": "mixed",
    "defaultColor": "#EA552B",
    "description": "Chunky cartoon pop-art heart pierced diagonally by an arrow with fletching feathers and gloss glints.",
    "rawSvg": "<path d=\"M100 52 C84 22 46 22 34 48 C20 78 48 112 100 146 C152 112 180 78 166 48 C154 22 116 22 100 52 Z\" transform=\"translate(6, 6)\" fill=\"#141416\" />\n  <path d=\"M100 48 C84 18 46 18 34 44 C20 74 48 108 100 142 C152 108 180 74 166 44 C154 18 116 18 100 48 Z\" fill=\"currentColor\" stroke=\"#141416\" stroke-width=\"3.5\" stroke-linejoin=\"round\" />\n  <path d=\"M44 46 A 16 16 0 0 1 70 38\" fill=\"none\" stroke=\"#FAF6F0\" stroke-width=\"4.5\" stroke-linecap=\"round\" />\n  <path d=\"M16 138 L68 96 M132 44 L184 2\" stroke=\"#141416\" stroke-width=\"4\" stroke-linecap=\"round\" />\n  <polygon points=\"184,2 170,4 182,16\" fill=\"#F7D046\" stroke=\"#141416\" stroke-width=\"2\" />\n  <polygon points=\"16,138 28,142 22,126\" fill=\"#F7D046\" stroke=\"#141416\" stroke-width=\"2\" />"
  },
  {
    "id": "funky-neon-lightning-cloud",
    "name": "Neon Thunder Cloud",
    "category": "funky-complex",
    "tags": [
      "cloud",
      "thunder",
      "neon",
      "lightning",
      "storm",
      "flash",
      "weather",
      "energy"
    ],
    "viewBox": "0 0 190 180",
    "type": "mixed",
    "defaultColor": "#55BBDA",
    "description": "Billowing comic cloud flashing a layered dual-tone neon yellow and persimmon lightning strike bolt.",
    "rawSvg": "<path d=\"M52 86 C36 86 24 74 24 58 C24 44 34 34 46 32 C50 16 68 4 90 4 C114 4 134 18 138 36 C152 34 168 44 172 60 C180 64 186 74 184 86 C182 98 170 106 156 106 H52 Z\" transform=\"translate(6, 6)\" fill=\"#141416\" />\n  <path d=\"M52 82 C36 82 24 70 24 54 C24 40 34 30 46 28 C50 12 68 0 90 0 C114 0 134 14 138 32 C152 30 168 40 172 56 C180 60 186 70 184 82 C182 94 170 102 156 102 H52 Z\" fill=\"currentColor\" stroke=\"#141416\" stroke-width=\"3.5\" stroke-linejoin=\"round\" />\n  <polygon points=\"98,64 68,116 94,116 78,172 128,104 102,104 118,64\" fill=\"#F7D046\" stroke=\"#141416\" stroke-width=\"3\" stroke-linejoin=\"round\" />\n  <polygon points=\"96,78 78,112 94,112 84,150 114,106 100,106 110,78\" fill=\"#EA552B\" />"
  },
  {
    "id": "funky-cool-cat-sunglasses",
    "name": "Cool Cat in Shades",
    "category": "funky-complex",
    "tags": [
      "cat",
      "sunglasses",
      "shades",
      "cool",
      "kitty",
      "feline",
      "pet",
      "groovy"
    ],
    "viewBox": "0 0 190 180",
    "type": "mixed",
    "defaultColor": "#F7D046",
    "description": "Groovy feline cartoon mascot wearing thick black retro wayfarer sunglasses with perky ears.",
    "rawSvg": "<polygon points=\"40,24 64,68 28,76\" fill=\"currentColor\" stroke=\"#141416\" stroke-width=\"3\" stroke-linejoin=\"round\" />\n  <polygon points=\"150,24 162,76 126,68\" fill=\"currentColor\" stroke=\"#141416\" stroke-width=\"3\" stroke-linejoin=\"round\" />\n  <path d=\"M95 44 C45 44 26 76 26 116 C26 156 55 168 95 168 C135 168 164 156 164 116 C164 76 145 44 95 44 Z\" fill=\"currentColor\" stroke=\"#141416\" stroke-width=\"3.5\" stroke-linejoin=\"round\" />\n  <g fill=\"#141416\">\n    <path d=\"M38 90 L88 90 C90 102 84 118 64 120 C44 122 36 108 38 90 Z\" />\n    <path d=\"M102 90 L152 90 C154 108 146 122 126 120 C106 118 100 102 102 90 Z\" />\n    <rect x=\"84\" y=\"94\" width=\"22\" height=\"6\" rx=\"2\" fill=\"#141416\" />\n  </g>\n  <path d=\"M46 96 L62 96 M110 96 L126 96\" stroke=\"#FFFFFF\" stroke-width=\"2.5\" stroke-linecap=\"round\" />\n  <polygon points=\"90,132 100,132 95,138\" fill=\"#EE8DB9\" />\n  <path d=\"M95 138 Q85 146 76 142 M95 138 Q105 146 114 142\" stroke=\"#141416\" stroke-width=\"2.5\" fill=\"none\" stroke-linecap=\"round\" />\n  <path d=\"M20 120 L4 116 M20 128 L2 130 M170 120 L186 116 M170 128 L188 130\" stroke=\"#141416\" stroke-width=\"2.5\" stroke-linecap=\"round\" />"
  },
  {
    "id": "funky-retro-film-strip",
    "name": "Cinema 35mm Film Strip",
    "category": "funky-complex",
    "tags": [
      "film",
      "cinema",
      "movie",
      "35mm",
      "hollywood",
      "video",
      "strip",
      "retro"
    ],
    "viewBox": "0 0 200 150",
    "type": "mixed",
    "defaultColor": "#141416",
    "description": "Curving vintage celluloid filmstrip ribbon with perforated border sprockets and movie frames.",
    "rawSvg": "<path d=\"M16 48 C60 18 140 18 184 48 L184 108 C140 78 60 78 16 108 Z\" fill=\"#141416\" stroke=\"#141416\" stroke-width=\"3\" stroke-linejoin=\"round\" />\n  <path d=\"M34 50 H64 V86 H34 Z M84 44 H116 V80 H84 Z M136 50 H166 V86 H136 Z\" fill=\"#FAF6F0\" />\n  <circle cx=\"26\" cy=\"42\" r=\"3\" fill=\"#FAF6F0\" />\n  <circle cx=\"50\" cy=\"38\" r=\"3\" fill=\"#FAF6F0\" />\n  <circle cx=\"76\" cy=\"34\" r=\"3\" fill=\"#FAF6F0\" />\n  <circle cx=\"102\" cy=\"34\" r=\"3\" fill=\"#FAF6F0\" />\n  <circle cx=\"128\" cy=\"36\" r=\"3\" fill=\"#FAF6F0\" />\n  <circle cx=\"154\" cy=\"40\" r=\"3\" fill=\"#FAF6F0\" />\n  <circle cx=\"176\" cy=\"44\" r=\"3\" fill=\"#FAF6F0\" />\n  <circle cx=\"26\" cy=\"98\" r=\"3\" fill=\"#FAF6F0\" />\n  <circle cx=\"50\" cy=\"94\" r=\"3\" fill=\"#FAF6F0\" />\n  <circle cx=\"76\" cy=\"90\" r=\"3\" fill=\"#FAF6F0\" />\n  <circle cx=\"102\" cy=\"90\" r=\"3\" fill=\"#FAF6F0\" />\n  <circle cx=\"128\" cy=\"92\" r=\"3\" fill=\"#FAF6F0\" />\n  <circle cx=\"154\" cy=\"96\" r=\"3\" fill=\"#FAF6F0\" />\n  <circle cx=\"176\" cy=\"100\" r=\"3\" fill=\"#FAF6F0\" />\n  <path d=\"M100 52 L103 60 L111 60 L105 64 L107 72 L100 68 L93 72 L95 64 L89 60 L97 60 Z\" fill=\"#F7D046\" />"
  },
  {
    "id": "funky-coffee-takeaway-cup",
    "name": "Takeaway Coffee Cup Doodle",
    "category": "funky-complex",
    "tags": [
      "coffee",
      "cup",
      "takeaway",
      "latte",
      "cafe",
      "espresso",
      "morning",
      "barista"
    ],
    "viewBox": "0 0 150 200",
    "type": "mixed",
    "defaultColor": "#FAF6F0",
    "description": "Cafe takeaway paper coffee cup with ribbed cardboard heat sleeve, drink lid, and heart doodle sticker.",
    "rawSvg": "<polygon points=\"34,44 116,44 104,184 46,184\" fill=\"#141416\" transform=\"translate(6, 6)\" />\n  <polygon points=\"34,40 116,40 104,180 46,180\" fill=\"currentColor\" stroke=\"#141416\" stroke-width=\"3.5\" stroke-linejoin=\"round\" />\n  <polygon points=\"38,82 112,82 108,136 42,136\" fill=\"#EA552B\" stroke=\"#141416\" stroke-width=\"2.5\" />\n  <circle cx=\"75\" cy=\"109\" r=\"16\" fill=\"#FAF6F0\" />\n  <path d=\"M75 106 C71 100 64 100 61 104 C57 109 63 116 75 122 C87 116 93 109 89 104 C86 100 79 100 75 106 Z\" fill=\"#EA552B\" />\n  <rect x=\"28\" y=\"24\" width=\"94\" height=\"18\" rx=\"6\" fill=\"#FAF6F0\" stroke=\"#141416\" stroke-width=\"3\" />\n  <rect x=\"62\" y=\"14\" width=\"26\" height=\"12\" rx=\"3\" fill=\"#FAF6F0\" stroke=\"#141416\" stroke-width=\"2.5\" />"
  },
  {
    "id": "funky-smiley-flower-pot",
    "name": "Potted Happy Daisy Bloom",
    "category": "funky-complex",
    "tags": [
      "flower",
      "plant",
      "pot",
      "daisy",
      "happy",
      "smile",
      "spring",
      "bloom"
    ],
    "viewBox": "0 0 160 210",
    "type": "mixed",
    "defaultColor": "#EE8DB9",
    "description": "Clay flower pot housing a perky daisy bloom with green leaves and a cheerful winking smiley center.",
    "rawSvg": "<polygon points=\"40,116 120,116 108,194 52,194\" fill=\"#EA552B\" stroke=\"#141416\" stroke-width=\"3.5\" stroke-linejoin=\"round\" />\n  <rect x=\"34\" y=\"104\" width=\"92\" height=\"16\" rx=\"4\" fill=\"#EA552B\" stroke=\"#141416\" stroke-width=\"3\" />\n  <path d=\"M80 104 V48\" stroke=\"#4CA96D\" stroke-width=\"5\" stroke-linecap=\"round\" />\n  <path d=\"M80 82 C64 74 54 84 54 84 C54 84 64 96 80 88\" fill=\"#4CA96D\" stroke=\"#141416\" stroke-width=\"2.5\" stroke-linejoin=\"round\" />\n  <path d=\"M80 72 C96 64 106 74 106 74 C106 74 96 86 80 78\" fill=\"#4CA96D\" stroke=\"#141416\" stroke-width=\"2.5\" stroke-linejoin=\"round\" />\n  <circle cx=\"80\" cy=\"48\" r=\"38\" fill=\"currentColor\" stroke=\"#141416\" stroke-width=\"3\" />\n  <circle cx=\"80\" cy=\"48\" r=\"20\" fill=\"#F7D046\" stroke=\"#141416\" stroke-width=\"2.5\" />\n  <circle cx=\"74\" cy=\"44\" r=\"2.5\" fill=\"#141416\" />\n  <circle cx=\"86\" cy=\"44\" r=\"2.5\" fill=\"#141416\" />\n  <path d=\"M74 52 Q80 58 86 52\" fill=\"none\" stroke=\"#141416\" stroke-width=\"2.5\" stroke-linecap=\"round\" />"
  },
  {
    "id": "funky-magic-potion-flask",
    "name": "Bubbling Magic Potion Flask",
    "category": "funky-complex",
    "tags": [
      "potion",
      "magic",
      "flask",
      "alchemy",
      "witch",
      "science",
      "chemistry",
      "brew"
    ],
    "viewBox": "0 0 160 200",
    "type": "mixed",
    "defaultColor": "#0BDC85",
    "description": "Spherical alchemy glass flask holding bubbling mystical elixir with floating sparkles and wooden cork.",
    "rawSvg": "<circle cx=\"84\" cy=\"128\" r=\"54\" fill=\"#141416\" />\n  <path d=\"M70 28 H90 V76 L118 116 C128 130 120 152 102 162 C84 172 62 168 50 152 C40 136 44 116 58 102 L70 76 Z\" fill=\"#FAF6F0\" stroke=\"#141416\" stroke-width=\"3.5\" stroke-linejoin=\"round\" />\n  <path d=\"M52 120 C64 112 96 112 108 120 C118 132 114 150 98 158 C82 166 64 162 54 148 C46 138 46 128 52 120 Z\" fill=\"currentColor\" stroke=\"#141416\" stroke-width=\"2\" />\n  <rect x=\"66\" y=\"14\" width=\"28\" height=\"16\" rx=\"4\" fill=\"#EA552B\" stroke=\"#141416\" stroke-width=\"2.5\" />\n  <circle cx=\"72\" cy=\"136\" r=\"4\" fill=\"#FAF6F0\" />\n  <circle cx=\"86\" cy=\"144\" r=\"3\" fill=\"#FAF6F0\" />\n  <circle cx=\"92\" cy=\"130\" r=\"5\" fill=\"#FAF6F0\" />\n  <path d=\"M124 50 C125 58 128 61 136 62 C128 63 125 66 124 74 C123 66 120 63 112 62 C120 61 123 58 124 50 Z\" fill=\"#F7D046\" />"
  },
  {
    "id": "funky-retro-computer-floppy",
    "name": "3.5-Inch Vintage Floppy Disk",
    "category": "funky-complex",
    "tags": [
      "floppy",
      "disk",
      "retro",
      "90s",
      "computer",
      "save",
      "tech",
      "vintage"
    ],
    "viewBox": "0 0 170 170",
    "type": "mixed",
    "defaultColor": "#55BBDA",
    "description": "Nostalgic 1990s 3.5-inch magnetic floppy disk with metal shutter slide, paper label, and write-protect tab.",
    "rawSvg": "<polygon points=\"26,18 136,18 154,36 154,152 26,152\" fill=\"#141416\" transform=\"translate(6, 6)\" />\n  <polygon points=\"26,14 136,14 154,32 154,148 26,148\" fill=\"currentColor\" stroke=\"#141416\" stroke-width=\"3.5\" stroke-linejoin=\"round\" />\n  <rect x=\"48\" y=\"14\" width=\"72\" height=\"48\" rx=\"4\" fill=\"#FAF6F0\" stroke=\"#141416\" stroke-width=\"2.5\" />\n  <rect x=\"62\" y=\"22\" width=\"16\" height=\"30\" rx=\"3\" fill=\"#141416\" />\n  <rect x=\"42\" y=\"80\" width=\"86\" height=\"60\" rx=\"6\" fill=\"#FAF6F0\" stroke=\"#141416\" stroke-width=\"2.5\" />\n  <path d=\"M52 94 H118 M52 108 H118 M52 122 H98\" stroke=\"#EA552B\" stroke-width=\"2.5\" stroke-linecap=\"round\" />\n  <rect x=\"34\" y=\"134\" width=\"8\" height=\"8\" fill=\"#141416\" />"
  },
  {
    "id": "funky-peace-sign-flower",
    "name": "Floral Peace Symbol",
    "category": "funky-complex",
    "tags": [
      "peace",
      "flower",
      "hippie",
      "60s",
      "love",
      "bloom",
      "retro",
      "harmony"
    ],
    "viewBox": "0 0 180 180",
    "type": "mixed",
    "defaultColor": "#F7D046",
    "description": "Psychedelic 60s peace symbol blossoming outward into rounded daisy flower petals with bold ink lines.",
    "rawSvg": "<circle cx=\"94\" cy=\"94\" r=\"70\" fill=\"#141416\" />\n  <circle cx=\"90\" cy=\"90\" r=\"70\" fill=\"currentColor\" stroke=\"#141416\" stroke-width=\"3.5\" />\n  <circle cx=\"90\" cy=\"90\" r=\"50\" fill=\"#EE8DB9\" stroke=\"#141416\" stroke-width=\"3\" />\n  <line x1=\"90\" y1=\"40\" x2=\"90\" y2=\"140\" stroke=\"#141416\" stroke-width=\"5\" stroke-linecap=\"round\" />\n  <line x1=\"90\" y1=\"90\" x2=\"56\" y2=\"124\" stroke=\"#141416\" stroke-width=\"5\" stroke-linecap=\"round\" />\n  <line x1=\"90\" y1=\"90\" x2=\"124\" y2=\"124\" stroke=\"#141416\" stroke-width=\"5\" stroke-linecap=\"round\" />\n  <circle cx=\"90\" cy=\"90\" r=\"12\" fill=\"#FAF6F0\" stroke=\"#141416\" stroke-width=\"2.5\" />"
  },
  {
    "id": "funky-retro-alarm-clock",
    "name": "Twin-Bell Vintage Alarm Clock",
    "category": "funky-complex",
    "tags": [
      "alarm-clock",
      "clock",
      "time",
      "wake-up",
      "morning",
      "vintage",
      "retro",
      "bell"
    ],
    "viewBox": "0 0 180 190",
    "type": "mixed",
    "defaultColor": "#EA552B",
    "description": "Classic mechanical twin-bell alarm clock with ringing vibration arcs, peg legs, and 10:10 hands.",
    "rawSvg": "<circle cx=\"48\" cy=\"38\" r=\"18\" fill=\"#F7D046\" stroke=\"#141416\" stroke-width=\"3\" />\n  <circle cx=\"132\" cy=\"38\" r=\"18\" fill=\"#F7D046\" stroke=\"#141416\" stroke-width=\"3\" />\n  <path d=\"M76 34 H104 V44 H76 Z\" fill=\"#141416\" />\n  <circle cx=\"94\" cy=\"112\" r=\"58\" fill=\"#141416\" />\n  <circle cx=\"90\" cy=\"108\" r=\"58\" fill=\"currentColor\" stroke=\"#141416\" stroke-width=\"3.5\" />\n  <circle cx=\"90\" cy=\"108\" r=\"44\" fill=\"#FAF6F0\" stroke=\"#141416\" stroke-width=\"3\" />\n  <line x1=\"90\" y1=\"108\" x2=\"90\" y2=\"78\" stroke=\"#141416\" stroke-width=\"3.5\" stroke-linecap=\"round\" />\n  <line x1=\"90\" y1=\"108\" x2=\"114\" y2=\"108\" stroke=\"#141416\" stroke-width=\"3.5\" stroke-linecap=\"round\" />\n  <circle cx=\"90\" cy=\"108\" r=\"5\" fill=\"#EA552B\" />\n  <line x1=\"56\" y1=\"162\" x2=\"42\" y2=\"182\" stroke=\"#141416\" stroke-width=\"4\" stroke-linecap=\"round\" />\n  <line x1=\"124\" y1=\"162\" x2=\"138\" y2=\"182\" stroke=\"#141416\" stroke-width=\"4\" stroke-linecap=\"round\" />\n  <path d=\"M20 54 C12 66 12 84 20 96 M160 54 C168 66 168 84 160 96\" stroke=\"#141416\" stroke-width=\"3\" stroke-linecap=\"round\" fill=\"none\" />"
  },
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
  },
  {
    "id": "algo-binary-tree",
    "name": "Binary Search Tree",
    "category": "algorithms-data-structures",
    "tags": [
      "tree",
      "binary-tree",
      "bst",
      "nodes",
      "hierarchy",
      "search"
    ],
    "viewBox": "0 0 180 150",
    "type": "stroke",
    "defaultColor": "#EA552B",
    "description": "Hand-drawn binary search tree with root node, branch edges, and child leaves.",
    "path": "d=\"M90 14 C98 14 105 20 105 28 C105 36 98 42 90 42 C82 42 75 36 75 28 C75 20 82 14 90 14 Z M50 64 C58 64 64 70 64 78 C64 86 58 92 50 92 C42 92 36 86 36 78 C36 70 42 64 50 64 Z M130 64 C138 64 144 70 144 78 C144 86 138 92 130 92 C122 92 116 86 116 78 C116 70 122 64 130 64 Z M26 114 C33 114 38 119 38 126 C38 133 33 138 26 138 C19 138 14 133 14 126 C14 119 19 114 26 114 Z M74 114 C81 114 86 119 86 126 C86 133 81 138 74 138 C67 138 62 133 62 126 C62 119 67 114 74 114 Z M106 114 C113 114 118 119 118 126 C118 133 113 138 106 138 C99 138 94 133 94 126 C94 119 99 114 106 114 Z M154 114 C161 114 166 119 166 126 C166 133 161 138 154 138 C147 138 142 133 142 126 C142 119 147 114 154 114 Z M79 38 C68 48 59 56 56 65 M101 38 C112 48 121 56 124 65 M42 90 C36 98 32 106 29 115 M58 90 C64 98 68 106 71 115 M122 90 C116 98 112 106 109 115 M138 90 C144 98 148 106 151 115\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "algo-linked-list",
    "name": "Singly Linked List",
    "category": "algorithms-data-structures",
    "tags": [
      "linked-list",
      "pointers",
      "nodes",
      "chain",
      "linear",
      "data-structures"
    ],
    "viewBox": "0 0 210 90",
    "type": "stroke",
    "defaultColor": "#55BBDA",
    "description": "Chained linked list nodes with data compartments, pointer arrows, and null terminator.",
    "path": "d=\"M12 28 C12 23 16 20 22 20 H58 C64 20 68 23 68 28 V62 C68 67 64 70 58 70 H22 C16 70 12 67 12 62 Z M46 20 V70 M29 45 H31 M57 45 H78 M72 39 L78 45 L72 51 M80 28 C80 23 84 20 90 20 H126 C132 20 136 23 136 28 V62 C136 67 132 70 126 70 H90 C84 70 80 67 80 62 Z M114 20 V70 M97 45 H99 M125 45 H146 M140 39 L146 45 L140 51 M148 28 C148 23 152 20 158 20 H194 C200 20 204 23 204 28 V62 C204 67 200 70 194 70 H158 C152 70 148 67 148 62 Z M182 20 V70 M165 45 H167 M191 36 L197 54 M188 54 H200\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "algo-doubly-linked-list",
    "name": "Doubly Linked List",
    "category": "algorithms-data-structures",
    "tags": [
      "doubly-linked-list",
      "bidirectional",
      "pointers",
      "nodes",
      "chains"
    ],
    "viewBox": "0 0 220 100",
    "type": "stroke",
    "defaultColor": "#4CA96D",
    "description": "Bidirectional linked list nodes with forward and backward hand-drawn pointer arrows.",
    "path": "d=\"M14 24 C14 20 18 18 24 18 H90 C96 18 100 20 100 24 V76 C100 80 96 82 90 82 H24 C18 82 14 80 14 76 Z M38 18 V82 M76 18 V82 M57 50 H59 M120 24 C120 20 124 18 130 18 H196 C202 18 206 20 206 24 V76 C206 80 202 82 196 82 H130 C124 82 120 80 120 76 Z M144 18 V82 M182 18 V82 M163 50 H165 M88 38 C98 36 109 36 118 38 M112 32 L119 38 L112 44 M132 62 C122 64 111 64 102 62 M108 56 L101 62 L108 68 M26 50 H32 M194 50 H200\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "algo-array-buffer",
    "name": "Indexed Array Buffer",
    "category": "algorithms-data-structures",
    "tags": [
      "array",
      "buffer",
      "indices",
      "memory",
      "linear",
      "pointers"
    ],
    "viewBox": "0 0 200 110",
    "type": "stroke",
    "defaultColor": "#F7D046",
    "description": "Contiguous array cells with index markers and a hand-drawn pointer cursor.",
    "path": "d=\"M16 40 C16 35 20 32 26 32 H174 C180 32 184 35 184 40 V74 C184 79 180 82 174 82 H26 C20 82 16 79 16 74 Z M50 32 V82 M84 32 V82 M118 32 V82 M152 32 V82 M33 57 H35 M67 57 H69 M101 57 H103 M135 57 H137 M168 57 H170 M33 96 C33 92 37 92 37 96 C37 100 33 100 33 96 Z M67 92 V100 M99 93 C101 93 104 94 104 96 C104 99 98 100 98 101 H105 M132 93 H138 L134 97 C138 97 138 101 133 101 M168 93 L166 97 H172 M170 93 V101 M101 8 L101 24 M95 18 L101 25 L107 18\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "algo-stack-lifo",
    "name": "LIFO Stack Container",
    "category": "algorithms-data-structures",
    "tags": [
      "stack",
      "lifo",
      "push",
      "pop",
      "container",
      "depth"
    ],
    "viewBox": "0 0 160 160",
    "type": "stroke",
    "defaultColor": "#EA552B",
    "description": "Vertical stack container with nested data plates and curved push/pop trajectory arrows.",
    "path": "d=\"M38 46 L40 134 C40 144 50 148 80 148 C110 148 120 144 120 134 L122 46 M50 128 C56 123 72 121 80 121 C88 121 104 123 110 128 C110 133 98 136 80 136 C62 136 50 133 50 128 Z M50 100 C56 95 72 93 80 93 C88 93 104 95 110 100 C110 105 98 108 80 108 C62 108 50 105 50 100 Z M50 72 C56 67 72 65 80 65 C88 65 104 67 110 72 C110 77 98 80 80 80 C62 80 50 77 50 72 Z M26 22 C44 14 68 20 74 38 M66 36 L75 39 L79 30 M86 38 C92 20 116 14 134 22 M126 16 L135 22 L131 31\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "algo-queue-fifo",
    "name": "FIFO Queue Pipeline",
    "category": "algorithms-data-structures",
    "tags": [
      "queue",
      "fifo",
      "enqueue",
      "dequeue",
      "pipeline",
      "buffer"
    ],
    "viewBox": "0 0 210 100",
    "type": "stroke",
    "defaultColor": "#0BDC85",
    "description": "Horizontal queue pipeline with items enqueuing at the rear and dequeuing from the front.",
    "path": "d=\"M44 26 C80 24 130 24 166 26 M44 74 C80 76 130 76 166 74 M58 35 C56 35 54 38 54 50 C54 62 56 65 58 65 H78 C80 65 82 62 82 50 C82 38 80 35 78 35 Z M92 35 C90 35 88 38 88 50 C88 62 90 65 92 65 H112 C114 65 116 62 116 50 C116 38 114 35 112 35 Z M126 35 C124 35 122 38 122 50 C122 62 124 65 126 65 H146 C148 65 150 62 150 50 C150 38 148 35 146 35 Z M12 50 H34 M26 43 L34 50 L26 57 M176 50 H198 M190 43 L198 50 L190 57\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "algo-hash-table",
    "name": "Hash Table & Buckets",
    "category": "algorithms-data-structures",
    "tags": [
      "hash-table",
      "hash-map",
      "buckets",
      "collision",
      "key-value",
      "dictionary"
    ],
    "viewBox": "0 0 190 150",
    "type": "stroke",
    "defaultColor": "#EE8DB9",
    "description": "Key hashing into an array of buckets with an attached collision resolution chain.",
    "path": "d=\"M14 42 C14 35 18 32 26 32 H54 C62 32 66 35 66 42 V62 C66 69 62 72 54 72 H26 C18 72 14 69 14 62 Z M28 52 H32 M37 46 V58 M43 48 C46 48 48 50 48 53 C48 58 43 58 43 58 M66 52 C72 52 78 52 82 52 M88 44 C84 47 84 57 88 60 M82 52 H92 M100 18 C100 15 103 14 108 14 H134 C139 14 142 15 142 18 V132 C142 135 139 136 134 136 H108 C103 136 100 135 100 132 Z M100 44 H142 M100 74 H142 M100 104 H142 M92 52 C95 52 97 52 100 52 M134 89 H156 M150 83 L157 89 L150 95 M158 78 C158 75 160 74 164 74 H182 C186 74 188 75 188 78 V100 C188 103 186 104 182 104 H164 C160 104 158 103 158 100 Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "algo-graph-network",
    "name": "Graph Network Topology",
    "category": "algorithms-data-structures",
    "tags": [
      "graph",
      "nodes",
      "edges",
      "network",
      "mesh",
      "topology"
    ],
    "viewBox": "0 0 170 160",
    "type": "stroke",
    "defaultColor": "#55BBDA",
    "description": "Multi-node undirected graph with organic interconnecting edge paths.",
    "path": "d=\"M85 16 C93 16 100 22 100 30 C100 38 93 44 85 44 C77 44 70 38 70 30 C70 22 77 16 85 16 Z M32 58 C40 58 46 64 46 72 C46 80 40 86 32 86 C24 86 18 80 18 72 C18 64 24 58 32 58 Z M138 58 C146 58 152 64 152 72 C152 80 146 86 138 86 C130 86 124 80 124 72 C124 64 130 58 138 58 Z M50 118 C58 118 64 124 64 132 C64 140 58 146 50 146 C42 146 36 140 36 132 C36 124 42 118 50 118 Z M120 118 C128 118 134 124 134 132 C134 140 128 146 120 146 C112 146 106 140 106 132 C106 124 112 118 120 118 Z M74 38 C62 48 52 58 43 65 M96 38 C108 48 118 58 127 65 M46 73 C68 73 102 73 124 73 M36 86 C40 96 44 107 47 118 M134 86 C130 96 126 107 123 118 M64 132 C80 132 94 132 106 132\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "algo-dag-topological",
    "name": "Directed Acyclic Graph (DAG)",
    "category": "algorithms-data-structures",
    "tags": [
      "dag",
      "directed-graph",
      "topological",
      "dependencies",
      "workflow",
      "sort"
    ],
    "viewBox": "0 0 190 130",
    "type": "stroke",
    "defaultColor": "#EA552B",
    "description": "Directed acyclic graph with flow arrows demonstrating task dependencies and topological sorting.",
    "path": "d=\"M26 52 C33 52 38 57 38 65 C38 73 33 78 26 78 C19 78 14 73 14 65 C14 57 19 52 26 52 Z M80 20 C87 20 92 25 92 32 C92 39 87 44 80 44 C73 44 68 39 68 32 C68 25 73 20 80 20 Z M80 86 C87 86 92 91 92 98 C92 105 87 110 80 110 C73 110 68 105 68 98 C68 91 73 86 80 86 Z M138 34 C145 34 150 39 150 46 C150 53 145 58 138 58 C131 58 126 53 126 46 C126 39 131 34 138 34 Z M166 74 C173 74 178 79 178 86 C178 93 173 98 166 98 C159 98 154 93 154 86 C154 79 159 74 166 74 Z M36 58 C47 49 57 41 68 35 M60 34 L69 34 L66 42 M36 72 C47 81 57 89 68 95 M66 88 L69 96 L60 96 M92 34 C104 37 114 40 126 43 M118 38 L126 43 L119 47 M92 98 C104 95 116 90 128 84 M90 42 C102 56 122 72 154 83 M145 77 L154 83 L146 86 M148 52 C153 58 157 65 161 74 M154 68 L161 74 L163 66\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "algo-heap-tree",
    "name": "Min/Max Priority Heap",
    "category": "algorithms-data-structures",
    "tags": [
      "heap",
      "priority-queue",
      "binary-heap",
      "min-heap",
      "max-heap",
      "pyramid"
    ],
    "viewBox": "0 0 180 150",
    "type": "stroke",
    "defaultColor": "#F7D046",
    "description": "Triangular hierarchical heap with root priority element highlighted at the summit.",
    "path": "d=\"M90 12 L164 136 C166 140 162 144 154 144 H26 C18 144 14 140 16 136 Z M90 32 C97 32 103 37 103 44 C103 51 97 56 90 56 C83 56 77 51 77 44 C77 37 83 32 90 32 Z M60 76 C66 76 71 81 71 87 C71 93 66 98 60 98 C54 98 49 93 49 87 C49 81 54 76 60 76 Z M120 76 C126 76 131 81 131 87 C131 93 126 98 120 98 C114 98 109 93 109 87 C109 81 114 76 120 76 Z M82 52 L68 76 M98 52 L112 76 M52 96 L42 120 M68 96 L74 120 M112 96 L106 120 M128 96 L138 120 M42 124 H44 M74 124 H76 M106 124 H108 M138 124 H140 M90 18 L90 24 M85 21 H95\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "algo-recursion-spiral",
    "name": "Recursive Call Stack",
    "category": "algorithms-data-structures",
    "tags": [
      "recursion",
      "call-stack",
      "spiral",
      "fractal",
      "depth",
      "base-case"
    ],
    "viewBox": "0 0 160 160",
    "type": "stroke",
    "defaultColor": "#4CA96D",
    "description": "Descending recursive spiral frames zooming into the base case and unwinding back.",
    "path": "d=\"M142 80 C142 114 114 142 80 142 C46 142 18 114 18 80 C18 46 46 18 80 18 C108 18 130 40 130 68 C130 94 108 116 82 116 C58 116 40 98 40 74 C40 52 58 36 78 36 C96 36 110 50 110 68 C110 82 98 94 84 94 C72 94 62 84 62 72 C62 62 70 54 80 54 C88 54 94 60 94 68 C94 74 88 80 82 80 C78 80 74 76 74 72 M144 72 L142 82 L132 80 M76 72 A 2 2 0 1 1 76 71.9\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "algo-binary-search",
    "name": "Binary Search Split",
    "category": "algorithms-data-structures",
    "tags": [
      "binary-search",
      "divide-and-conquer",
      "log-n",
      "array-split",
      "search"
    ],
    "viewBox": "0 0 200 110",
    "type": "stroke",
    "defaultColor": "#55BBDA",
    "description": "Sorted array partitioned down the middle with discarded half and target pointer.",
    "path": "d=\"M16 40 H184 V78 H16 Z M40 40 V78 M64 40 V78 M88 40 V78 M112 40 V78 M136 40 V78 M160 40 V78 M18 43 L38 75 M42 43 L62 75 M66 43 L86 75 M100 32 C108 32 114 36 114 59 C114 82 108 86 100 86 C92 86 86 82 86 59 C86 36 92 32 100 32 Z M100 10 L100 24 M94 18 L100 25 L106 18 M116 90 C130 96 160 96 180 90 M148 94 V102\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "algo-two-pointers",
    "name": "Two Pointers Convergence",
    "category": "algorithms-data-structures",
    "tags": [
      "two-pointers",
      "left-right",
      "indices",
      "sliding",
      "algorithm",
      "pointers"
    ],
    "viewBox": "0 0 200 110",
    "type": "stroke",
    "defaultColor": "#EA552B",
    "description": "Left and right pointer arrows stepping toward each other over an array segment.",
    "path": "d=\"M16 34 H184 V70 H16 Z M44 34 V70 M72 34 V70 M100 34 V70 M128 34 V70 M156 34 V70 M30 52 H32 M58 52 H60 M86 52 H88 M114 52 H116 M142 52 H144 M170 52 H172 M30 96 V80 M24 86 L30 79 L36 86 M18 102 H26 M170 96 V80 M164 86 L170 79 L176 86 M164 102 H172 M30 22 C64 10 136 10 170 22 M96 16 L100 20 L104 16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "algo-big-o-complexity",
    "name": "Big-O Complexity Curves",
    "category": "algorithms-data-structures",
    "tags": [
      "big-o",
      "complexity",
      "asymptotic",
      "o-n",
      "time-complexity",
      "chart"
    ],
    "viewBox": "0 0 160 160",
    "type": "stroke",
    "defaultColor": "#EE8DB9",
    "description": "Hand-sketched time complexity axes with O(1), O(log n), O(n), and O(n\u00b2) growth curves.",
    "path": "d=\"M22 140 L22 18 M16 26 L22 16 L28 26 M22 140 L144 140 M136 134 L146 140 L136 146 M22 120 C50 120 100 120 138 120 M22 138 C54 122 92 104 138 96 M22 138 C58 102 96 66 138 30 M22 138 C52 134 76 86 86 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "algo-matrix-grid",
    "name": "2D Matrix & Traversal",
    "category": "algorithms-data-structures",
    "tags": [
      "matrix",
      "2d-grid",
      "dynamic-programming",
      "traversal",
      "pathfinding",
      "grid"
    ],
    "viewBox": "0 0 160 160",
    "type": "stroke",
    "defaultColor": "#0BDC85",
    "description": "Hand-drawn 2D matrix grid with a meandering dynamic programming traversal path from start to goal.",
    "path": "d=\"M20 20 H140 V140 H20 Z M60 20 V140 M100 20 V140 M20 60 H140 M20 100 H140 M40 40 C44 40 46 36 46 40 C46 44 36 44 40 40 Z M38 40 C50 40 70 40 80 40 C80 50 80 70 80 80 C90 80 110 80 120 80 C120 90 120 110 120 120 M114 114 L120 122 L126 114 M120 120 L124 124 M116 124 L124 116\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "algo-trie-tree",
    "name": "Prefix Trie Tree",
    "category": "algorithms-data-structures",
    "tags": [
      "trie",
      "prefix-tree",
      "autocomplete",
      "strings",
      "search-tree",
      "dictionary"
    ],
    "viewBox": "0 0 180 150",
    "type": "stroke",
    "defaultColor": "#F7D046",
    "description": "Prefix trie branching from a central root node into characters spelling dictionary words.",
    "path": "d=\"M90 16 C96 16 102 21 102 28 C102 35 96 40 90 40 C84 40 78 35 78 28 C78 21 84 16 90 16 Z M52 64 C58 64 64 69 64 76 C64 83 58 88 52 88 C46 88 40 83 40 76 C40 69 46 64 52 64 Z M128 64 C134 64 140 69 140 76 C140 83 134 88 128 88 C122 88 116 83 116 76 C116 69 122 64 128 64 Z M32 114 C38 114 44 119 44 126 C44 133 38 138 32 138 C26 138 20 133 20 126 C20 119 26 114 32 114 Z M72 114 C78 114 84 119 84 126 C84 133 78 138 72 138 C66 138 60 133 60 126 C60 119 66 114 72 114 Z M108 114 C114 114 120 119 120 126 C120 133 114 138 108 138 C102 138 96 133 96 126 C96 119 102 114 108 114 Z M148 114 C154 114 160 119 160 126 C160 133 154 138 148 138 C142 138 136 133 136 126 C136 119 142 114 148 114 Z M80 36 L62 64 M100 36 L118 64 M44 86 L36 114 M60 86 L68 114 M120 86 L112 114 M136 86 L144 114\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "algo-sliding-window",
    "name": "Sliding Window Frame",
    "category": "algorithms-data-structures",
    "tags": [
      "sliding-window",
      "subarray",
      "range",
      "pointers",
      "window",
      "algorithm"
    ],
    "viewBox": "0 0 200 110",
    "type": "stroke",
    "defaultColor": "#55BBDA",
    "description": "Highlighted sliding bracket window framing contiguous elements with a directional shift arrow.",
    "path": "d=\"M16 38 H184 V74 H16 Z M44 38 V74 M72 38 V74 M100 38 V74 M128 38 V74 M156 38 V74 M42 30 H130 C134 30 136 32 136 36 V76 C136 80 134 82 130 82 H42 C38 82 36 80 36 76 V36 C36 32 38 30 42 30 Z M56 16 C84 8 118 8 144 18 M136 12 L146 18 L140 26 M86 96 C80 96 76 98 76 102 C76 106 86 106 86 102 M92 98 V104\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "algo-quicksort-partition",
    "name": "Quicksort Partition",
    "category": "algorithms-data-structures",
    "tags": [
      "quicksort",
      "partition",
      "pivot",
      "sorting",
      "divide-and-conquer"
    ],
    "viewBox": "0 0 200 120",
    "type": "stroke",
    "defaultColor": "#EA552B",
    "description": "Array elements divided around a circled pivot element with left/right partitioning brackets.",
    "path": "d=\"M100 36 C114 36 124 46 124 60 C124 74 114 84 100 84 C86 84 76 74 76 60 C76 46 86 36 100 36 Z M95 50 V70 M95 50 H103 C107 50 109 52 109 56 C109 60 107 62 103 62 H95 M64 38 C48 38 40 48 40 60 C40 72 48 82 64 82 M136 38 C152 38 160 48 160 60 C160 72 152 82 136 82 M60 98 H24 M30 92 L22 98 L30 104 M140 98 H176 M170 92 L178 98 L170 104\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "algo-red-black-tree",
    "name": "Red-Black Balanced Tree",
    "category": "algorithms-data-structures",
    "tags": [
      "red-black-tree",
      "bst",
      "balanced",
      "tree",
      "rotation",
      "search"
    ],
    "viewBox": "0 0 180 150",
    "type": "stroke",
    "defaultColor": "#EA552B",
    "description": "Self-balancing Red-Black binary search tree with distinct red accent nodes and rotation arc arrow.",
    "path": "d=\"M90 16 C98 16 104 22 104 30 C104 38 98 44 90 44 C82 44 76 38 76 30 C76 22 82 16 90 16 Z M50 64 C58 64 64 70 64 78 C64 86 58 92 50 92 C42 92 36 86 36 78 C36 70 42 64 50 64 Z M130 64 C138 64 144 70 144 78 C144 86 138 92 130 92 C122 92 116 86 116 78 C116 70 122 64 130 64 Z M28 114 C35 114 40 119 40 126 C40 133 35 138 28 138 C21 138 16 133 16 126 C16 119 21 114 28 114 Z M72 114 C79 114 84 119 84 126 C84 133 79 138 72 138 C65 138 60 133 60 126 C60 119 65 114 72 114 Z M110 114 C117 114 122 119 122 126 C122 133 117 138 110 138 C103 138 98 133 98 126 C98 119 103 114 110 114 Z M152 114 C159 114 164 119 164 126 C164 133 159 138 152 138 C145 138 140 133 140 126 C140 119 145 114 152 114 Z M80 38 L58 66 M100 38 L122 66 M42 90 L32 115 M58 90 L68 115 M122 90 L114 115 M138 90 L148 115 M50 78 H52 M152 126 H154 M28 126 H30 M98 48 C108 52 114 58 116 64 M110 66 L118 64 L118 56\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "algo-b-tree-node",
    "name": "B-Tree Multi-Key Node",
    "category": "algorithms-data-structures",
    "tags": [
      "b-tree",
      "database-index",
      "multiway",
      "keys",
      "pointers",
      "storage"
    ],
    "viewBox": "0 0 200 130",
    "type": "stroke",
    "defaultColor": "#55BBDA",
    "description": "Multi-key B-Tree root node branching downward into partitioned sub-range child leaves.",
    "path": "d=\"M32 20 H168 C174 20 178 24 178 30 V56 C178 62 174 66 168 66 H32 C26 66 22 62 22 56 V30 C22 24 26 20 32 20 Z M74 20 V66 M126 20 V66 M53 44 H55 M100 44 H102 M147 44 H149 M48 66 L30 96 M100 66 L100 96 M152 66 L170 96 M24 94 L30 98 L36 94 M94 94 L100 98 L106 94 M164 94 L170 98 L176 94 M14 98 H50 V122 H14 Z M84 98 H116 V122 H84 Z M150 98 H186 V122 H150 Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "algo-bloom-filter",
    "name": "Bloom Filter Hash Bitset",
    "category": "algorithms-data-structures",
    "tags": [
      "bloom-filter",
      "probabilistic",
      "hashing",
      "bits",
      "membership",
      "cache"
    ],
    "viewBox": "0 0 210 110",
    "type": "stroke",
    "defaultColor": "#0BDC85",
    "description": "Probabilistic Bloom filter bitset array with 3 hash function mapping arrows pinning bit positions.",
    "path": "d=\"M16 64 H194 V98 H16 Z M41 64 V98 M66 64 V98 M91 64 V98 M116 64 V98 M141 64 V98 M166 64 V98 M28 82 H30 M53 74 V90 M78 82 H80 M103 82 H105 M128 74 V90 M153 74 V90 M178 82 H180 M24 24 C24 18 28 14 36 14 H64 C72 14 76 18 76 24 V36 C76 42 72 46 64 46 H36 C28 46 24 42 24 36 Z M42 30 H58 M54 46 C54 54 54 56 54 62 M50 56 L54 62 L58 56 M64 46 C76 56 102 56 126 62 M120 58 L127 62 L125 54 M72 46 C92 56 122 56 150 62 M144 58 L151 62 L149 54\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "algo-lru-cache",
    "name": "LRU Cache Memory Buffer",
    "category": "algorithms-data-structures",
    "tags": [
      "lru",
      "cache",
      "eviction",
      "doubly-linked",
      "hashmap",
      "queue"
    ],
    "viewBox": "0 0 200 120",
    "type": "stroke",
    "defaultColor": "#F7D046",
    "description": "Least Recently Used (LRU) cache buffer showing most recent promotion and least recent eviction.",
    "path": "d=\"M20 40 H180 V80 H20 Z M60 40 V80 M100 40 V80 M140 40 V80 M40 60 H42 M80 60 H82 M120 60 H122 M160 60 H162 M40 24 V34 M34 28 L40 34 L46 28 M24 18 H56 M160 86 V96 M154 90 L160 96 L166 90 M144 104 H176 M72 32 C86 24 114 24 128 32 M120 28 L128 32 L124 38 M128 88 C114 96 86 96 72 88 M80 92 L72 88 L76 82\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "algo-union-find-dsu",
    "name": "Disjoint Set Union (DSU)",
    "category": "algorithms-data-structures",
    "tags": [
      "dsu",
      "union-find",
      "disjoint-set",
      "components",
      "graph",
      "forest"
    ],
    "viewBox": "0 0 190 140",
    "type": "stroke",
    "defaultColor": "#EE8DB9",
    "description": "Disjoint Set Union forest with representative roots merging subsets through path compression.",
    "path": "d=\"M48 24 C56 24 62 30 62 38 C62 46 56 52 48 52 C40 52 34 46 34 38 C34 30 40 24 48 24 Z M26 84 C33 84 38 89 38 96 C38 103 33 108 26 108 C19 108 14 103 14 96 C14 89 19 84 26 84 Z M70 84 C77 84 82 89 82 96 C82 103 77 108 70 108 C63 108 58 103 58 96 C58 89 63 84 70 84 Z M42 50 L30 84 M54 50 L66 84 M142 24 C150 24 156 30 156 38 C156 46 150 52 142 52 C134 52 128 46 128 38 C128 30 134 24 142 24 Z M142 84 C149 84 154 89 154 96 C154 103 149 108 142 108 C135 108 130 103 130 96 C130 89 135 84 142 84 Z M142 52 V84 M64 36 C86 20 108 20 126 34 M120 28 L127 34 L120 38\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "algo-segment-tree",
    "name": "Interval Segment Tree",
    "category": "algorithms-data-structures",
    "tags": [
      "segment-tree",
      "intervals",
      "range-query",
      "divide-conquer",
      "tree"
    ],
    "viewBox": "0 0 190 140",
    "type": "stroke",
    "defaultColor": "#4CA96D",
    "description": "Binary segment tree partitioning interval bounds with highlighted active range query nodes.",
    "path": "d=\"M95 16 H105 C116 16 122 20 122 28 C122 36 116 40 105 40 H95 C84 40 78 36 78 28 C78 20 84 16 95 16 Z M50 64 H60 C70 64 74 68 74 74 C74 80 70 84 60 84 H50 C40 84 36 80 36 74 C36 68 40 64 50 64 Z M130 64 H140 C150 64 154 68 154 74 C154 80 150 84 140 84 H130 C120 84 116 80 116 74 C116 68 120 64 130 64 Z M24 108 H32 V124 H24 Z M64 108 H72 V124 H64 Z M104 108 H112 V124 H104 Z M144 108 H152 V124 H144 Z M86 38 L62 64 M114 38 L138 64 M48 84 L32 108 M62 84 L68 108 M128 84 L112 108 M142 84 L148 108 M55 74 H57 M135 74 H137\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "algo-huffman-encoding",
    "name": "Huffman Coding Tree",
    "category": "algorithms-data-structures",
    "tags": [
      "huffman",
      "compression",
      "binary-code",
      "prefix-tree",
      "greedy",
      "entropy"
    ],
    "viewBox": "0 0 180 150",
    "type": "stroke",
    "defaultColor": "#EA552B",
    "description": "Optimal prefix Huffman coding tree with binary 0 and 1 branch weights leading to leaf symbols.",
    "path": "d=\"M90 18 C97 18 102 23 102 30 C102 37 97 42 90 42 C83 42 78 37 78 30 C78 23 83 18 90 18 Z M50 68 C57 68 62 73 62 80 C62 87 57 92 50 92 C43 92 38 87 38 80 C38 73 43 68 50 68 Z M130 68 C137 68 142 73 142 80 C142 87 137 92 130 92 C123 92 118 87 118 80 C118 73 123 68 130 68 Z M30 118 H46 V134 H30 Z M70 118 H86 V134 H70 Z M82 40 L58 68 M98 40 L122 68 M44 92 L38 118 M56 92 L78 118 M64 48 C68 48 70 50 70 53 M114 48 V56 M34 100 C38 100 40 102 40 105 M72 100 V108 M124 92 L128 118 M130 120 H142 V134 H130 Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "algo-shortest-path-dijkstra",
    "name": "Dijkstra Shortest Path",
    "category": "algorithms-data-structures",
    "tags": [
      "dijkstra",
      "shortest-path",
      "graph",
      "weights",
      "greedy",
      "relaxation"
    ],
    "viewBox": "0 0 190 150",
    "type": "stroke",
    "defaultColor": "#55BBDA",
    "description": "Weighted graph showing edge cost relaxation and the optimal shortest path route highlighted.",
    "path": "d=\"M28 75 C36 75 42 81 42 89 C42 97 36 103 28 103 C20 103 14 97 14 89 C14 81 20 75 28 75 Z M85 24 C93 24 99 30 99 38 C99 46 93 52 85 52 C77 52 71 46 71 38 C71 30 77 24 85 24 Z M85 106 C93 106 99 112 99 120 C99 128 93 134 85 134 C77 134 71 128 71 120 C71 112 77 106 85 106 Z M158 64 C166 64 172 70 172 78 C172 86 166 92 158 92 C150 92 144 86 144 78 C144 70 150 64 158 64 Z M38 78 L74 44 M38 98 L74 114 M98 42 L146 70 M98 114 L146 86 M85 52 V106 M50 56 H54 M52 110 H56 M122 52 H126 M122 104 H126 M40 88 C60 88 120 74 144 78\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "algo-min-spanning-tree",
    "name": "Minimum Spanning Tree (MST)",
    "category": "algorithms-data-structures",
    "tags": [
      "mst",
      "spanning-tree",
      "kruskal",
      "prim",
      "graph",
      "greedy"
    ],
    "viewBox": "0 0 180 150",
    "type": "stroke",
    "defaultColor": "#F7D046",
    "description": "Minimum weight acyclic tree spanning all network vertices with discarded cycle edges dashed.",
    "path": "d=\"M32 36 C39 36 44 41 44 48 C44 55 39 60 32 60 C25 60 20 55 20 48 C20 41 25 36 32 36 Z M90 18 C97 18 102 23 102 30 C102 37 97 42 90 42 C83 42 78 37 78 30 C78 23 83 18 90 18 Z M148 36 C155 36 160 41 160 48 C160 55 155 60 148 60 C141 60 136 55 136 48 C136 41 141 36 148 36 Z M48 114 C55 114 60 119 60 126 C60 133 55 138 48 138 C41 138 36 133 36 126 C36 119 41 114 48 114 Z M132 114 C139 114 144 119 144 126 C144 133 139 138 132 138 C125 138 120 133 120 126 C120 119 125 114 132 114 Z M42 44 L80 32 M98 32 L138 44 M34 58 L46 114 M146 58 L134 114 M44 54 C74 84 104 84 136 54 M60 126 H120\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "algo-consistent-hash-ring",
    "name": "Consistent Hashing Ring",
    "category": "algorithms-data-structures",
    "tags": [
      "consistent-hashing",
      "distributed",
      "hash-ring",
      "sharding",
      "nodes",
      "replication"
    ],
    "viewBox": "0 0 180 180",
    "type": "stroke",
    "defaultColor": "#EE8DB9",
    "description": "Circular hash ring partitioning continuous keyspace clockwise into distributed cluster nodes.",
    "path": "d=\"M90 24 C126 24 156 54 156 90 C156 126 126 156 90 156 C54 156 24 126 24 90 C24 54 54 24 90 24 Z M90 18 V30 M156 90 H168 M90 156 V168 M24 90 H12 M136 44 C142 44 146 48 146 54 C146 60 142 64 136 64 C130 64 126 60 126 54 C126 48 130 44 136 44 Z M136 116 C142 116 146 120 146 126 C146 132 142 136 136 136 C130 136 126 132 126 126 C126 120 130 116 136 116 Z M44 116 C50 116 54 120 54 126 C54 132 50 136 44 136 C38 136 34 132 34 126 C34 120 38 116 44 116 Z M44 44 C50 44 54 48 54 54 C54 60 50 64 44 64 C38 64 34 60 34 54 C34 48 38 44 44 44 Z M90 60 C106 60 120 74 120 90 M116 82 L120 90 L112 90\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "algo-fenwick-bit-tree",
    "name": "Fenwick Tree Prefix Array",
    "category": "algorithms-data-structures",
    "tags": [
      "fenwick-tree",
      "binary-indexed-tree",
      "bit",
      "prefix-sums",
      "cumulative",
      "array"
    ],
    "viewBox": "0 0 200 120",
    "type": "stroke",
    "defaultColor": "#0BDC85",
    "description": "Binary Indexed Tree (BIT) with hierarchical power-of-two prefix sum coverage brackets.",
    "path": "d=\"M16 70 H184 V102 H16 Z M37 70 V102 M58 70 V102 M79 70 V102 M100 70 V102 M121 70 V102 M142 70 V102 M163 70 V102 M26 86 H28 M47 86 H49 M68 86 H70 M89 86 H91 M110 86 H112 M131 86 H133 M152 86 H154 M173 86 H175 M22 56 C28 50 46 50 52 56 M64 56 C70 50 88 50 94 56 M106 56 C112 50 130 50 136 56 M148 56 C154 50 172 50 178 56 M22 40 C32 30 84 30 94 40 M106 40 C116 30 168 30 178 40 M22 22 C42 10 158 10 178 22\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "algo-backtracking-nqueens",
    "name": "Backtracking Search Tree",
    "category": "algorithms-data-structures",
    "tags": [
      "backtracking",
      "dfs",
      "pruning",
      "n-queens",
      "recursion",
      "decision-tree"
    ],
    "viewBox": "0 0 180 150",
    "type": "stroke",
    "defaultColor": "#EA552B",
    "description": "State-space decision tree exploring candidate solutions with pruned dead-ends and backtrack arrows.",
    "path": "d=\"M90 16 C97 16 102 21 102 28 C102 35 97 40 90 40 C83 40 78 35 78 28 C78 21 83 16 90 16 Z M48 64 C55 64 60 69 60 76 C60 83 55 88 48 88 C41 88 36 83 36 76 C36 69 41 64 48 64 Z M132 64 C139 64 144 69 144 76 C144 83 139 88 132 88 C125 88 120 83 120 76 C120 69 125 64 132 64 Z M26 114 C33 114 38 119 38 126 C38 133 33 138 26 138 C19 138 14 133 14 126 C14 119 19 114 26 114 Z M70 114 C77 114 82 119 82 126 C82 133 77 138 70 138 C63 138 58 133 58 126 C58 119 63 114 70 114 Z M80 36 L56 64 M100 36 L124 64 M40 86 L30 114 M56 86 L66 114 M126 86 L118 106 M138 86 L146 106 M112 118 L124 130 M124 118 L112 130 M120 102 C116 94 114 88 116 80 M110 86 L116 80 L122 84\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "sys-load-balancer",
    "name": "Load Balancer Router",
    "category": "system-design",
    "tags": [
      "load-balancer",
      "reverse-proxy",
      "nginx",
      "routing",
      "traffic-distribution"
    ],
    "viewBox": "0 0 180 150",
    "type": "stroke",
    "defaultColor": "#55BBDA",
    "description": "Reverse proxy load balancer splitting an incoming traffic stream across multiple backend servers.",
    "path": "d=\"M14 75 H52 M44 68 L52 75 L44 82 M56 46 C56 40 60 36 66 36 H98 C104 36 108 40 108 46 V104 C108 110 104 114 98 114 H66 C60 114 56 110 56 104 Z M72 58 L92 58 M72 75 L92 75 M72 92 L92 92 M108 56 C120 48 132 40 144 36 M136 32 L146 36 L140 44 M108 75 H144 M136 68 L144 75 L136 82 M108 94 C120 102 132 110 144 114 M140 106 L146 114 L136 118 M150 26 H170 V46 H150 Z M150 65 H170 V85 H150 Z M150 104 H170 V124 H150 Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "sys-database-cylinder",
    "name": "Database Storage Drum",
    "category": "system-design",
    "tags": [
      "database",
      "rdbms",
      "sql",
      "storage",
      "postgres",
      "data-persistence"
    ],
    "viewBox": "0 0 150 160",
    "type": "stroke",
    "defaultColor": "#4CA96D",
    "description": "Hand-drawn database storage cylinder with distinct disc platters and read/write arrows.",
    "path": "d=\"M26 36 C26 22 48 16 75 16 C102 16 124 22 124 36 C124 50 102 56 75 56 C48 56 26 50 26 36 Z M26 36 V124 C26 138 48 144 75 144 C102 144 124 138 124 124 V36 M26 66 C26 80 48 86 75 86 C102 86 124 80 124 66 M26 96 C26 110 48 116 75 116 C102 116 124 110 124 96 M134 46 C144 54 144 80 134 90 M142 86 L134 92 L132 82\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "sys-db-replication-cluster",
    "name": "Primary & Read Replicas",
    "category": "system-design",
    "tags": [
      "replication",
      "cluster",
      "primary-replica",
      "sharding",
      "high-availability",
      "database"
    ],
    "viewBox": "0 0 200 150",
    "type": "stroke",
    "defaultColor": "#EA552B",
    "description": "Primary leader database synchronizing data streams down to two follower read replicas.",
    "path": "d=\"M74 22 C74 14 86 10 100 10 C114 10 126 14 126 22 C126 30 114 34 100 34 C86 34 74 30 74 22 Z M74 22 V48 C74 56 86 60 100 60 C114 60 126 56 126 48 V22 M74 35 C74 43 86 47 100 47 C114 47 126 43 126 35 M84 62 C68 76 54 90 44 102 M42 94 L42 104 L52 104 M116 62 C132 76 146 90 156 102 M148 104 L158 104 L158 94 M22 112 C22 106 32 102 44 102 C56 102 66 106 66 112 C66 118 56 122 44 122 C32 122 22 118 22 112 Z M22 112 V132 C22 138 32 142 44 142 C56 142 66 138 66 132 V112 M134 112 C134 106 144 102 156 102 C168 102 178 106 178 112 C178 118 168 122 156 122 C144 122 134 118 134 112 Z M134 112 V132 C134 138 144 142 156 142 C168 142 178 138 178 132 V112\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "sys-microservice-node",
    "name": "Microservice Container Pod",
    "category": "system-design",
    "tags": [
      "microservice",
      "service",
      "container",
      "pod",
      "kubernetes",
      "api",
      "architecture"
    ],
    "viewBox": "0 0 150 150",
    "type": "stroke",
    "defaultColor": "#0BDC85",
    "description": "Organic hexagonal microservice container pod with internal core logic and communication ports.",
    "path": "d=\"M75 14 L128 44 L128 106 L75 136 L22 106 L22 44 Z M75 38 L106 56 L106 94 L75 112 L44 94 L44 56 Z M75 62 L87 69 V83 L75 90 L63 83 V69 Z M75 6 V14 M128 44 L136 39 M128 106 L136 111 M75 136 V144 M22 106 L14 111 M22 44 L14 39\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "sys-api-gateway",
    "name": "API Gateway Portal",
    "category": "system-design",
    "tags": [
      "api-gateway",
      "gateway",
      "entry-point",
      "routing",
      "auth",
      "proxy",
      "security"
    ],
    "viewBox": "0 0 180 150",
    "type": "stroke",
    "defaultColor": "#F7D046",
    "description": "Front-door API gateway arch filtering incoming client traffic into decoupled backend services.",
    "path": "d=\"M48 136 V58 C48 30 66 18 90 18 C114 18 132 30 132 58 V136 M64 136 V66 C64 44 76 34 90 34 C104 34 116 44 116 66 V136 M90 10 L90 54 M82 46 L90 54 L98 46 M72 90 C62 98 48 108 36 120 M44 122 L36 122 L36 114 M90 90 V124 M84 116 L90 124 L96 116 M108 90 C118 98 132 108 144 120 M136 122 L144 122 L144 114\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "sys-cache-redis",
    "name": "In-Memory Flash Cache",
    "category": "system-design",
    "tags": [
      "cache",
      "redis",
      "memcached",
      "in-memory",
      "fast",
      "low-latency",
      "ram"
    ],
    "viewBox": "0 0 160 150",
    "type": "stroke",
    "defaultColor": "#EE8DB9",
    "description": "High-speed RAM cache block accented with a signature lightning bolt doodle representing sub-millisecond lookups.",
    "path": "d=\"M80 18 L136 46 L80 74 L24 46 Z M24 46 V94 L80 122 V74 M136 46 V94 L80 122 M24 70 L80 98 L136 70 M86 36 L68 70 H84 L72 104 L102 64 H84 L96 36 Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "sys-message-queue",
    "name": "Kafka Message Pipe",
    "category": "system-design",
    "tags": [
      "message-queue",
      "kafka",
      "rabbitmq",
      "streaming",
      "buffer",
      "async",
      "pubsub"
    ],
    "viewBox": "0 0 210 100",
    "type": "stroke",
    "defaultColor": "#EA552B",
    "description": "Serialized message broker queue pipe transporting event payloads between decoupled producers and consumers.",
    "path": "d=\"M32 26 C24 26 20 36 20 50 C20 64 24 74 32 74 M32 26 H178 C186 26 190 36 190 50 C190 64 186 74 178 74 H32 M178 26 C170 26 166 36 166 50 C166 64 170 74 178 74 M50 36 H76 V64 H50 Z M50 36 L63 50 L76 36 M92 36 H118 V64 H92 Z M92 36 L105 50 L118 36 M134 36 H160 V64 H134 Z M134 36 L147 50 L160 36 M6 50 H16 M194 50 H204 M198 44 L204 50 L198 56\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "sys-cdn-edge",
    "name": "CDN Global Edge Network",
    "category": "system-design",
    "tags": [
      "cdn",
      "edge",
      "cloudflare",
      "global",
      "caching",
      "network",
      "latency"
    ],
    "viewBox": "0 0 170 160",
    "type": "stroke",
    "defaultColor": "#55BBDA",
    "description": "Hand-drawn globe with distributed edge cache point markers delivering assets with minimal latency.",
    "path": "d=\"M85 24 C118 24 144 50 144 83 C144 116 118 142 85 142 C52 142 26 116 26 83 C26 50 52 24 85 24 Z M26 83 C48 95 122 95 144 83 M28 60 C52 70 118 70 142 60 M28 106 C52 96 118 96 142 106 M85 24 C62 52 62 114 85 142 M85 24 C108 52 108 114 85 142 M85 10 V18 M85 148 V156 M12 83 H20 M150 83 H158 M82 14 H88 M154 80 V86\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "sys-cloud-vpc",
    "name": "Cloud Infrastructure VPC",
    "category": "system-design",
    "tags": [
      "cloud",
      "aws",
      "vpc",
      "infrastructure",
      "network",
      "private-cloud"
    ],
    "viewBox": "0 0 180 130",
    "type": "stroke",
    "defaultColor": "#55BBDA",
    "description": "Billowing organic cloud boundary encapsulating secure backend cloud infrastructure.",
    "path": "d=\"M44 104 C26 104 16 92 16 78 C16 64 26 54 40 54 C44 38 60 24 82 24 C104 24 120 38 124 54 C138 52 154 60 158 74 C168 78 174 88 172 98 C170 108 160 116 146 116 H44 Z M74 68 H106 V100 H74 Z M74 84 H106 M82 76 H84 M82 92 H84 M90 54 C90 48 94 44 100 44 C106 44 110 48 110 54\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "sys-event-pubsub",
    "name": "Event Bus & Pub-Sub",
    "category": "system-design",
    "tags": [
      "pub-sub",
      "event-bus",
      "broadcast",
      "fan-out",
      "sns",
      "events",
      "broker"
    ],
    "viewBox": "0 0 200 140",
    "type": "stroke",
    "defaultColor": "#F7D046",
    "description": "Central event topic bus broadcasting events out to multiple subscriber queues and handlers.",
    "path": "d=\"M14 70 H52 M44 64 L52 70 L44 76 M74 70 C74 56 86 44 100 44 C114 44 126 56 126 70 C126 84 114 96 100 96 C86 96 74 84 74 70 Z M92 70 C92 66 96 62 100 62 C104 62 108 66 108 70 C108 74 104 78 100 78 M126 58 C138 50 152 42 164 36 M156 32 L166 36 L160 44 M126 70 H164 M156 64 L164 70 L156 76 M126 82 C138 90 152 98 164 104 M160 96 L166 104 L156 108 M168 26 H188 V44 H168 Z M168 61 H188 V79 H168 Z M168 96 H188 V114 H168 Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "sys-rate-limiter",
    "name": "Rate Limiter Token Funnel",
    "category": "system-design",
    "tags": [
      "rate-limiter",
      "token-bucket",
      "throttling",
      "ddos-protection",
      "traffic-control",
      "gateway"
    ],
    "viewBox": "0 0 160 160",
    "type": "stroke",
    "defaultColor": "#EA552B",
    "description": "Traffic funnel and token bucket metering incoming request bursts to prevent server overloads.",
    "path": "d=\"M26 28 C62 20 98 20 134 28 M26 28 L64 86 V112 C64 116 68 120 72 120 H88 C92 120 96 116 96 112 V86 L134 28 M52 44 H54 M80 38 H82 M108 44 H110 M66 60 H68 M94 60 H96 M80 72 H82 M56 102 H104 M80 132 V136 M80 148 V152 M76 134 H84 M76 150 H84\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "sys-circuit-breaker",
    "name": "Fault Circuit Breaker",
    "category": "system-design",
    "tags": [
      "circuit-breaker",
      "resilience",
      "fault-tolerance",
      "switch",
      "failover",
      "stability"
    ],
    "viewBox": "0 0 180 120",
    "type": "stroke",
    "defaultColor": "#EE8DB9",
    "description": "Resilient circuit breaker switch toggling open to protect downstream systems from cascading outages.",
    "path": "d=\"M16 68 H54 M54 62 C58 62 61 65 61 68 C61 71 58 74 54 74 C50 74 47 71 47 68 C47 65 50 62 54 62 Z M126 62 C130 62 133 65 133 68 C133 71 130 74 126 74 C122 74 119 71 119 68 C119 65 122 62 126 62 Z M126 68 H164 M58 64 L114 26 M116 40 L122 48 L114 52 L120 60 M32 94 C70 106 110 106 148 94 M140 88 L150 94 L142 102\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "sys-server-rack",
    "name": "Bare Metal Server Rack",
    "category": "system-design",
    "tags": [
      "server",
      "rack",
      "hardware",
      "host",
      "datacenter",
      "compute",
      "blade"
    ],
    "viewBox": "0 0 150 170",
    "type": "stroke",
    "defaultColor": "#4CA96D",
    "description": "Multi-chassis server blade rack with ventilated faceplates, activity LEDs, and uplink cabling.",
    "path": "d=\"M30 18 H120 V152 H30 Z M40 28 H110 V58 H40 Z M48 43 H50 M56 43 H58 M64 43 H66 M82 38 H102 M82 48 H102 M40 68 H110 V98 H40 Z M48 83 H50 M56 83 H58 M64 83 H66 M82 78 H102 M82 88 H102 M40 108 H110 V138 H40 Z M48 123 H50 M56 123 H58 M64 123 H66 M82 118 H102 M82 128 H102 M75 152 C75 162 90 162 100 162 C110 162 124 162 128 156\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "sys-client-devices",
    "name": "Client Multi-Device Cluster",
    "category": "system-design",
    "tags": [
      "clients",
      "devices",
      "browser",
      "mobile",
      "frontend",
      "traffic",
      "screen"
    ],
    "viewBox": "0 0 190 140",
    "type": "stroke",
    "defaultColor": "#55BBDA",
    "description": "Hand-sketched desktop monitor and companion smartphone client emitting HTTP/REST requests.",
    "path": "d=\"M16 24 H112 V92 H16 Z M26 78 H102 M54 92 L46 118 H82 L74 92 M36 118 H92 M126 48 H172 V126 H126 Z M134 58 H164 V112 H134 Z M149 119 H151 M116 36 C124 32 134 32 142 36 M112 26 C126 18 142 18 156 26\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "sys-object-storage",
    "name": "S3 Blob Storage Bucket",
    "category": "system-design",
    "tags": [
      "s3",
      "blob-storage",
      "object-storage",
      "bucket",
      "media",
      "files",
      "cloud"
    ],
    "viewBox": "0 0 150 160",
    "type": "stroke",
    "defaultColor": "#F7D046",
    "description": "Hand-drawn storage bucket filled with binary file objects and asset upload/download arrows.",
    "path": "d=\"M26 36 C26 24 50 18 75 18 C100 18 124 24 124 36 C124 48 100 54 75 54 C50 54 26 48 26 36 Z M26 36 L40 138 C40 148 54 154 75 154 C96 154 110 148 110 138 L124 36 M24 36 C24 8 126 8 126 36 M56 64 H84 V92 H56 Z M56 64 L70 76 L84 64 M72 74 H100 V102 H72 Z M72 74 L86 86 L100 74 M75 106 V126 M69 120 L75 126 L81 120\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "sys-websocket-duplex",
    "name": "WebSocket Full-Duplex Stream",
    "category": "system-design",
    "tags": [
      "websocket",
      "realtime",
      "bi-directional",
      "streaming",
      "full-duplex",
      "socket"
    ],
    "viewBox": "0 0 190 110",
    "type": "stroke",
    "defaultColor": "#0BDC85",
    "description": "Persistent bidirectional streaming channel exchanging real-time packets between client and server.",
    "path": "d=\"M34 20 H156 C172 20 182 34 182 55 C182 76 172 90 156 90 H34 C18 90 8 76 8 55 C8 34 18 20 34 20 Z M36 42 C60 30 84 54 108 42 C132 30 148 42 160 42 M152 36 L162 42 L152 48 M154 68 C130 80 106 56 82 68 C58 80 42 68 30 68 M38 62 L28 68 L38 74\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "sys-leader-election",
    "name": "Distributed Leader Election",
    "category": "system-design",
    "tags": [
      "consensus",
      "leader-election",
      "raft",
      "paxos",
      "quorum",
      "distributed",
      "voting"
    ],
    "viewBox": "0 0 180 160",
    "type": "stroke",
    "defaultColor": "#EA552B",
    "description": "Ring of distributed voting nodes with the elected cluster leader crowned at the center.",
    "path": "d=\"M90 76 C102 76 112 86 112 98 C112 110 102 120 90 120 C78 120 68 110 68 98 C68 86 78 76 90 76 Z M76 68 L78 52 L85 62 L90 48 L95 62 L102 52 L104 68 Z M32 40 C38 40 44 46 44 52 C44 58 38 64 32 64 C26 64 20 58 20 52 C20 46 26 40 32 40 Z M148 40 C154 40 160 46 160 52 C160 58 154 64 148 64 C142 64 136 58 136 52 C136 46 142 40 148 40 Z M40 124 C46 124 52 130 52 136 C52 142 46 148 40 148 C34 148 28 142 28 136 C28 130 34 124 40 124 Z M140 124 C146 124 152 130 152 136 C152 142 146 148 140 148 C134 148 128 142 128 136 C128 130 134 124 140 124 Z M44 58 C56 68 66 78 72 84 M136 58 C124 68 114 78 108 84 M50 128 C62 120 70 114 76 108 M130 128 C118 120 110 114 104 108\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "sys-firewall-shield",
    "name": "Security WAF Firewall",
    "category": "system-design",
    "tags": [
      "firewall",
      "waf",
      "security",
      "protection",
      "shield",
      "defense",
      "ddos"
    ],
    "viewBox": "0 0 160 160",
    "type": "stroke",
    "defaultColor": "#4CA96D",
    "description": "Hand-drawn security shield with a brick barrier texture bouncing back malicious attacks.",
    "path": "d=\"M80 18 C114 18 136 30 136 62 C136 106 104 138 80 148 C56 138 24 106 24 62 C24 30 46 18 80 18 Z M40 50 H120 M32 76 H128 M38 102 H122 M52 124 H108 M66 50 V76 M94 50 V76 M52 76 V102 M80 76 V102 M108 76 V102 M66 102 V124 M94 102 V124 M12 40 L26 56 L16 66 L28 80 M18 80 L28 80 L28 70\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "sys-dns-lookup",
    "name": "DNS Resolver Hierarchy",
    "category": "system-design",
    "tags": [
      "dns",
      "domain",
      "resolver",
      "ip",
      "networking",
      "routing",
      "internet"
    ],
    "viewBox": "0 0 190 140",
    "type": "stroke",
    "defaultColor": "#55BBDA",
    "description": "Recursive DNS resolution dispatching domain queries through root, TLD, and authoritative nameservers.",
    "path": "d=\"M20 60 H48 V90 H20 Z M28 75 H40 M48 70 C70 50 90 40 108 34 M100 32 L108 34 L104 42 M48 80 H108 M100 74 L108 80 L100 86 M48 90 C70 106 90 114 108 120 M104 112 L108 120 L100 122 M112 18 H168 V46 H112 Z M112 66 H168 V94 H112 Z M112 108 H168 V136 H112 Z M124 32 H156 M124 80 H156 M124 122 H156\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "sys-write-ahead-log",
    "name": "Write-Ahead Log (WAL)",
    "category": "system-design",
    "tags": [
      "wal",
      "write-ahead-log",
      "acid",
      "durability",
      "database",
      "storage",
      "append-only"
    ],
    "viewBox": "0 0 200 110",
    "type": "stroke",
    "defaultColor": "#EA552B",
    "description": "Append-only Write-Ahead Log ribbon ensuring transaction crash recovery before disk page commit.",
    "path": "d=\"M16 38 H184 V74 H16 Z M44 38 V74 M72 38 V74 M100 38 V74 M128 38 V74 M156 38 V74 M28 56 H32 M56 56 H60 M84 56 H88 M112 56 H116 M140 56 H144 M168 56 H172 M168 18 V28 M162 22 L168 28 L174 22 M150 14 H186 M14 90 C50 96 150 96 186 90 M178 84 L186 90 L180 96\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "sys-consistent-hashing",
    "name": "Cluster Node Partition Ring",
    "category": "system-design",
    "tags": [
      "consistent-hashing",
      "virtual-nodes",
      "partition",
      "sharding",
      "rebalance"
    ],
    "viewBox": "0 0 170 170",
    "type": "stroke",
    "defaultColor": "#4CA96D",
    "description": "Distributed node hashing ring with virtual partition arcs rebalancing shards with zero downtime.",
    "path": "d=\"M85 24 C118 24 146 52 146 85 C146 118 118 146 85 146 C52 146 24 118 24 85 C24 52 52 24 85 24 Z M85 14 V24 M146 85 H156 M85 146 V156 M24 85 H14 M75 32 H95 V48 H75 Z M122 75 H138 V95 H122 Z M75 122 H95 V138 H75 Z M32 75 H48 V95 H32 Z M116 44 L128 56 M116 126 L128 114 M54 126 L42 114 M54 44 L42 56 M70 85 A 15 15 0 1 1 100 85\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "sys-change-data-capture",
    "name": "Change Data Capture (CDC)",
    "category": "system-design",
    "tags": [
      "cdc",
      "debezium",
      "streaming",
      "events",
      "replication",
      "sync"
    ],
    "viewBox": "0 0 200 130",
    "type": "stroke",
    "defaultColor": "#F7D046",
    "description": "CDC pipeline reading database commit transaction logs into a decoupled streaming event consumer.",
    "path": "d=\"M26 30 C26 22 40 18 56 18 C72 18 86 22 86 30 V82 C86 90 72 94 56 94 C40 94 26 90 26 82 Z M26 50 C26 58 40 62 56 62 C72 62 86 58 86 50 M86 56 C102 56 114 56 126 56 M120 50 L126 56 L120 62 M130 38 H176 V74 H130 Z M130 38 L153 56 L176 38 M153 74 V98 M147 92 L153 98 L159 92 M136 102 H170 V124 H136 Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "sys-distributed-lock",
    "name": "Distributed Lock Token",
    "category": "system-design",
    "tags": [
      "distributed-lock",
      "mutex",
      "zookeeper",
      "redis",
      "concurrency",
      "lease"
    ],
    "viewBox": "0 0 170 160",
    "type": "stroke",
    "defaultColor": "#EE8DB9",
    "description": "Mutual exclusion distributed lock token with lease expiration and access guard shield.",
    "path": "d=\"M85 18 C116 18 138 28 138 58 C138 98 108 132 85 142 C62 132 32 98 32 58 C32 28 54 18 85 18 Z M62 76 H108 V110 H62 Z M72 76 V62 C72 52 78 46 85 46 C92 46 98 52 98 62 V76 M85 88 V98 M85 98 A 4 4 0 1 1 85 97.9\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "sys-reverse-index-search",
    "name": "Search Inverted Index",
    "category": "system-design",
    "tags": [
      "inverted-index",
      "search",
      "elasticsearch",
      "lucene",
      "tokens",
      "documents"
    ],
    "viewBox": "0 0 190 140",
    "type": "stroke",
    "defaultColor": "#0BDC85",
    "description": "Search engine inverted index mapping query keyword tokens into document ID posting lists.",
    "path": "d=\"M20 20 H68 V46 H20 Z M20 56 H68 V82 H20 Z M20 92 H68 V118 H20 Z M30 33 H58 M30 69 H58 M30 105 H58 M68 33 H98 M92 27 L98 33 L92 39 M68 69 H98 M92 63 L98 69 L92 75 M68 105 H98 M92 99 L98 105 L92 111 M106 20 H126 V46 H106 Z M136 20 H156 V46 H136 Z M166 20 H186 V46 H166 Z M106 56 H126 V82 H106 Z M136 56 H156 V82 H136 Z M106 92 H126 V118 H106 Z M136 92 H156 V118 H136 Z M166 92 H186 V118 H166 Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "sys-data-lake-warehouse",
    "name": "Data Lakehouse Pipeline",
    "category": "system-design",
    "tags": [
      "data-lake",
      "warehouse",
      "lakehouse",
      "etl",
      "analytics",
      "big-data"
    ],
    "viewBox": "0 0 200 130",
    "type": "stroke",
    "defaultColor": "#55BBDA",
    "description": "Multi-hop medallion architecture flowing raw blob lake data into an analytical gold warehouse.",
    "path": "d=\"M16 64 C16 46 28 34 46 34 C58 34 68 40 72 50 C80 48 90 54 92 64 C98 68 100 76 98 84 C96 92 88 96 78 96 H36 C24 96 16 86 16 74 Z M96 66 H126 M120 60 L126 66 L120 72 M132 38 L160 22 L188 38 L160 54 Z M132 38 V82 L160 98 V54 M188 38 V82 L160 98 M132 60 L160 76 L188 60\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "sys-webhook-push",
    "name": "Event Webhook Dispatcher",
    "category": "system-design",
    "tags": [
      "webhook",
      "push",
      "http",
      "callback",
      "integration",
      "realtime",
      "event"
    ],
    "viewBox": "0 0 190 120",
    "type": "stroke",
    "defaultColor": "#EA552B",
    "description": "Real-time webhook notification delivering event payloads to client target endpoints with retry logic.",
    "path": "d=\"M20 36 H64 V84 H20 Z M32 50 H52 M32 62 H52 M32 70 H44 M64 60 C88 40 114 40 134 56 M126 56 L134 56 L134 48 M138 36 H176 V84 H138 Z M148 54 L157 62 L166 54 M138 78 C114 96 88 96 68 80 M76 80 L68 80 L68 88\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "sys-read-write-split",
    "name": "Read/Write Replica Split",
    "category": "system-design",
    "tags": [
      "read-write-split",
      "replication",
      "primary",
      "secondary",
      "database",
      "scaling"
    ],
    "viewBox": "0 0 200 140",
    "type": "stroke",
    "defaultColor": "#F7D046",
    "description": "Database read/write query splitting routing mutative writes to leader and reads to replicas.",
    "path": "d=\"M20 70 H52 M44 64 L52 70 L44 76 M56 46 H88 V94 H56 Z M64 60 H80 M64 72 H80 M88 56 C104 46 118 36 132 32 M124 30 L132 32 L128 38 M88 84 C104 94 118 104 132 108 M128 102 L132 108 L124 110 M136 18 C136 12 148 8 162 8 C176 8 188 12 188 18 V42 C188 48 176 52 162 52 C148 52 136 48 136 42 Z M136 28 C136 34 148 38 162 38 C176 38 188 34 188 28 M136 94 C136 88 148 84 162 84 C176 84 188 88 188 94 V118 C188 124 176 128 162 128 C148 128 136 124 136 118 Z M136 104 C136 110 148 114 162 114 C176 114 188 110 188 104 M162 54 V82 M156 76 L162 82 L168 76\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "sys-chaos-monkey",
    "name": "Chaos Engineering Fault Injection",
    "category": "system-design",
    "tags": [
      "chaos-engineering",
      "fault-injection",
      "resilience",
      "testing",
      "stability"
    ],
    "viewBox": "0 0 170 160",
    "type": "stroke",
    "defaultColor": "#EE8DB9",
    "description": "Chaos engineering tool intentionally taking down services to validate self-healing architecture.",
    "path": "d=\"M36 46 H80 V90 H36 Z M48 60 H68 M48 72 H68 M94 46 H138 V90 H94 Z M106 60 H126 M106 72 H126 M65 98 H109 V142 H65 Z M77 112 H97 M77 124 H97 M116 24 L86 70 H106 L80 114 L126 62 H102 L128 24 Z M100 48 L132 88 M132 48 L100 88\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "sys-saga-orchestrator",
    "name": "Distributed Saga Orchestrator",
    "category": "system-design",
    "tags": [
      "saga",
      "orchestrator",
      "distributed-transactions",
      "compensating",
      "microservices"
    ],
    "viewBox": "0 0 200 140",
    "type": "stroke",
    "defaultColor": "#0BDC85",
    "description": "Saga pattern orchestrator coordinating multi-service transactions with compensating rollback flows.",
    "path": "d=\"M85 70 C85 58 92 48 100 48 C108 48 115 58 115 70 C115 82 108 92 100 92 C92 92 85 82 85 70 Z M100 58 V70 L108 76 M85 60 C66 48 48 40 36 34 M44 32 L36 34 L38 42 M115 60 C134 48 152 40 164 34 M162 42 L164 34 L156 32 M100 92 V112 M94 106 L100 112 L106 106 M16 20 H48 V44 H16 Z M152 20 H184 V44 H152 Z M84 114 H116 V138 H84 Z M36 46 C48 76 68 84 84 82\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  },
  {
    "id": "sys-geo-anycast-routing",
    "name": "Anycast Geo-Routing",
    "category": "system-design",
    "tags": [
      "anycast",
      "geo-routing",
      "dns",
      "latency",
      "edge",
      "global",
      "bgp"
    ],
    "viewBox": "0 0 190 150",
    "type": "stroke",
    "defaultColor": "#4CA96D",
    "description": "BGP Anycast routing directing client traffic to the nearest regional edge datacenter POP.",
    "path": "d=\"M24 75 C24 68 30 62 38 62 C46 62 52 68 52 75 C52 82 46 88 38 88 C30 88 24 82 24 75 Z M38 48 V56 M38 94 V102 M16 75 H24 M52 75 H60 M52 70 C82 50 112 40 134 32 M126 32 L134 32 L132 40 M52 80 C82 100 112 110 134 118 M132 110 L134 118 L126 118 M138 20 H174 V48 H138 Z M138 102 H174 V130 H138 Z M148 34 H164 M148 116 H164 M138 75 C124 75 108 75 92 75 M120 38 C120 75 120 80 134 100\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\""
  }
];

export function getScribblesByCategory(category: string): ScribbleAsset[] {
  if (!category || category === 'all') return SCRIBBLES_ASSETS;
  return SCRIBBLES_ASSETS.filter((item) => item.category === category);
}

export function getScribbleById(id: string): ScribbleAsset | undefined {
  return SCRIBBLES_ASSETS.find((item) => item.id === id);
}
