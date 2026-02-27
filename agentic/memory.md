# A EMPRESA - AI PIPELINE TEMPLATES
## Project Memory File
### Last Updated: 2026-02-15

---

## 🎨 PROJECT OVERVIEW

**Company:** A Empresa - AI Consulting for Small Business
**Purpose:** Showcase AI workflow pipeline (Onboarding → Business → Workflow → Results)
**Location:** `/templates/` folder

---

## 📁 FILE STRUCTURE

```
templates/
├── index.html              ← Gallery hub (10 templates)
├── template1.html          ← Cyberpunk Grid
├── template2.html          ← Liquid Gradient
├── template3.html          ← Code Matrix
├── template4.html          ← Brutalist Shapes
├── template5.html          ← Particle Field
├── template6.html          ← Professional Grid
├── template7.html          ← Split Layout
├── template8.html          ← AI Concepts Flow (floating nodes)
├── template9.html          ← AI Matrix Scroll (Matrix-style)
├── template10.html         ← Workflow Flow (React Flow style)
└── shared/
    ├── ai-pipeline.css     ← Common styles
    └── particles.js        ← Particle animation for template5
```

---

## 🎭 TEMPLATE BREAKDOWN

### Template 1: Cyberpunk Grid
- **Vibe:** Blade Runner, retro-futuristic
- **Features:** 
  - Animated perspective grid (cyan)
  - 3D grid moves upward
  - Glowing outlined numbers
- **Colors:** Black background, cyan (#00ffff) accents

### Template 2: Liquid Gradient
- **Vibe:** Modern, fluid, Instagram-aesthetic
- **Features:**
  - 4-step gradient progression
  - Purple → Blue → Pink → Orange
  - Smooth color transitions
- **Colors:** Mesh gradients

### Template 3: Code Matrix
- **Vibe:** Developer-first, terminal, authentic
- **Features:**
  - Scrolling code background
  - Python/JS snippets
  - Matrix-style green text
- **Colors:** Dark (#0d1117), green (#7ee787)

### Template 4: Brutalist Shapes
- **Vibe:** Anti-design, bold, raw
- **Features:**
  - Geometric shapes (triangles, rectangles)
  - Sharp angles
  - Different color per step
- **Colors:** Yellow/Red/Green/Blue

### Template 5: Particle Field
- **Vibe:** Neural networks, data visualization
- **Features:**
  - Canvas-based particles
  - Particles connect with lines
  - Mouse interaction
- **Colors:** Black background, white particles

### Template 6: Professional Grid
- **Vibe:** Corporate, clean, enterprise
- **Features:**
  - Navy blue gradients
  - Number on left, text on right
  - Fixed contact button
- **Colors:** Navy (#0a0e17), cyan (#4a9eff)

### Template 7: Split Layout
- **Vibe:** Modern, balanced
- **Features:**
  - 35% number / 65% text split
  - Big square number frames
  - Professional typography
- **Colors:** Dark blue gradients

### Template 8: AI Concepts Flow
- **Vibe:** Technical, floating concepts
- **Features:**
  - Floating AI concept nodes
  - Different concepts per step:
    - Step 1: [RAG] [VECTORS] [EMBEDDINGS] [CHUNKING] [PROMPTS] [CONTEXT]
    - Step 2: [A2A] [LLM.TXT] [MCP] [APIs] [KNOWLEDGE] [CONTEXT]
    - Step 3: [AGENTS] [SKILLS] [INSTRUCTIONS] [TOOLS] [MEMORY] [ORCHESTRATION]
    - Step 4: [TIME] [REVENUE] [ROI] [AUTOMATION] [SCALE] [PROFIT]
  - Independent floating animations
- **Colors:** Cyan, Red, Green, Yellow per step

### Template 9: AI Matrix Scroll
- **Vibe:** Matrix-style, scrolling concepts
- **Features:**
  - Scrolling AI concepts background (like Template 3)
  - Unselectable text
  - Faded (6% opacity)
  - Continuous upward scroll
  - Same split layout as Template 7
- **Colors:** Dark blue, cyan text

### Template 10: Workflow Flow
- **Vibe:** React Flow style connected workflow diagram as left-side background
- **Features:**
  - Fixed canvas background on LEFT 40% of screen (non-interactive)
  - Single connected hierarchical chart (not separate groups):
    - **HIERARCHY:**
      - `->` = NEW LEVEL (vertical/parent-child)
      - `-` = SAME LEVEL (horizontal/sibling)
    - **DATA Layer** (Blue): onboarding → embeddings → tokens — rag → chat
    - **LOGIC Layer** (Cyan): tokens → workflow → prompt — commands → agents → skills — instructions
    - **INTEGRATION Layer** (Green): skills → llm.txt → openclaw — browserless & openclaw → foundry & browserless → langchain — entire.io → agentmail.to → etc
  - Color-coded by approach: Data (blue), Logic (cyan), Integration (green)
  - Single glowing light particle travels entire chart, changing colors by approach
  - Animated edges with flowing dash animation
  - Background grid pattern
  - Main content layout unchanged (centered with number frame left, text right)
  - 4 full-screen sections (100vh each) with scroll
  - Smaller node boxes (80x24px) with clean monospace labels
- **Colors:** Dark blue (#0a0e17), cyan (#4a9eff), blue (#00d9ff), green (#7ee787)
- **Layout:** Fixed workflow diagram on left (decorative), main content centered (unchanged)

---

## 🔧 COMMON FEATURES (All Templates)

### Layout:
- 4 full-screen sections (100vh each)
- Vertical scroll (free scroll, no snapping)
- Mobile responsive

### Navigation:
- Fixed "CONTACT US" button (top-right)
- "BACK" link (top-left, desktop only)
- Email link: `mailto:contact@aempresa.com`

### Typography:
- **JetBrains Mono:** Numbers, buttons, code
- **Space Grotesk:** Titles, descriptions

### Step Structure (All Templates):
1. **01 AI ONBOARDING**
2. **02 AI TO BUSINESS**
3. **03 AI TO WORKFLOW**
4. **04 AI TO RESULT**

---

## 💡 KEY DESIGN DECISIONS

### Number Display:
- Square frame (80px-200px depending on viewport)
- 3-4px border
- Semi-transparent background
- Large monospace font

### Text Layout:
- Number: 35% width (left side)
- Content: 65% width (right side)
- Max 3 lines for description
- Stack vertically on mobile

### Colors:
- Dark backgrounds (#0a0e17, #1a2332)
- Cyan accents (#4a9eff, #00d9ff)
- White text for titles
- Gray text for descriptions (#8b92a8)

---

## 🚀 WORKFLOW RULES (IMPORTANT!)

### When User Says:
- **"New iteration"** or **new prompt**
- → Create **NEW template** (template10.html, template11.html, etc.)
- → Keep all existing templates intact
- → Update gallery index with preview

### When User Says:
- **"Fix"** or **"Update"** existing
- → Edit the specific template
- → Ask which one if unclear

### Gallery Index:
- Must be updated with every new template
- Add preview styling for each
- Keep alphabetical/numerical order

---

## 📝 LAST DISCUSSION SUMMARY

**User Request:**
- Template 10 with React Flow style workflow diagram background
- Background panel showing connected nodes like a workflow
- "Camera" follows a bright light traveling along paths
- Animated light particle moving through the diagram

**Action Taken:**
- ✅ Created template10.html (Workflow Flow)
- ✅ 8 connected nodes with animated edges
- ✅ Glowing light particle travels along curved paths
- ✅ Smooth camera panning follows the particle
- ✅ Step indicators update as light reaches key nodes
- ✅ Updated gallery with template10 preview

**Current Status:**
- 10 templates complete
- Gallery fully updated
- All templates functional

---

## 🎯 NEXT STEPS (If Resuming)

1. **Open:** `templates/index.html` to see gallery
2. **Test:** Each template by clicking "View Demo"
3. **Next Template:** Would be template11.html
4. **Reference:** Use template7.html as base for split layouts, template10.html for workflow diagrams

---

## 🔗 FILE LOCATIONS

```
E:\projects\github\AEmpresa\website\templates\
├── index.html
├── template1.html through template10.html
└── shared/
    ├── ai-pipeline.css
    └── particles.js
```

---

## ⚡ QUICK START

To view templates:
1. Open `templates/index.html` in browser
2. Click any "View Demo" button
3. Scroll to see all 4 steps
4. Click "CONTACT US" or "BACK"

---

**Status:** ✅ Ready for template11
**Last Template:** template10 (Workflow Flow)
**Total Templates:** 10
**Gallery:** Complete with all 10 previews
