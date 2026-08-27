export interface Project {
  slug: string;
  title: string;
  hook: string;
  tags: string[];
  year: string;
  role: string;
  timeline: string;
  tools: string[];
  overview: string;
  audience: string;
  problem: string;
  explorationItems: { title: string; description: string; tradeoff: string }[];
  edgeCases: string[];
  solution: string;
  solutionDetail: string;
  reflection: string[];
  imageUrl: string;
  solutionImageUrl: string;
  color: string;
  link?: string;
  itchLink?: string;
  status?: "complete" | "in-development";
  category?: "game" | "software";
}

export const projects: Project[] = [
  /* ── In development ──────────────────────────────────────── */
  {
    slug: "slimed-rebirth",
    title: "Slimed: Rebirth",
    hook: "A top-down escape room where you team up with your archnemesis to break out of a mad scientist's lab.",
    tags: ["Team · 5", "Godot", "2D art", "In development"],
    year: "2025",
    role: "Programmer · Level & lighting design · Lead 2D artist",
    timeline: "2025 – present",
    tools: ["Godot", "Aseprite", "Blender", "GitHub"],
    overview:
      "Slimed: Rebirth is a top-down escape room game where players must cooperate with their archnemesis to escape a mad scientist's lab. The game features handcrafted puzzle rooms, two playable characters with unique abilities, and a tone that mixes humor with genuine challenge.",
    audience:
      "Players who enjoy co-op puzzle games with character-driven writing and expressive 2D art. Built with a 5-person team.",
    problem:
      "Designing puzzles for two characters with asymmetric abilities meant every room had to be solvable using both characters' unique mechanics — without either feeling like dead weight. Scoping the puzzle complexity for a team working part-time across a semester was the core design challenge.",
    explorationItems: [
      {
        title: "Symmetric abilities — both characters play identically",
        description: "Both characters have the same move set; cooperation is needed only for simultaneous-press puzzles.",
        tradeoff: "Easy to design around but loses the narrative hook — if they're the same, why are they archnemeses?",
      },
      {
        title: "Fully asymmetric — abilities never overlap",
        description: "Each character solves completely different puzzle elements with no crossover.",
        tradeoff: "Maximally interesting but doubles the design work; any room needing both characters requires solving two independent sub-problems simultaneously.",
      },
      {
        title: "Asymmetric with shared verbs (chosen)",
        description: "Characters share basic movement and interaction verbs but have one unique ability each. Puzzles use the unique abilities for unlocking and shared verbs for positioning.",
        tradeoff: "Manageable design space that still creates meaningful differentiation. New team members can learn the system quickly.",
      },
    ],
    edgeCases: [
      "Godot's tilemap collision system had edge cases at tile corners that caused characters to catch on geometry — fixed by rounding collision shapes.",
      "Lighting in Godot 2D behaved differently at different zoom levels, requiring manual compensation for the minimap viewport.",
      "Aseprite exports at 1× resolution by default; assets imported at the wrong scale broke the tilemap grid until we standardized an export pipeline.",
    ],
    solution:
      "Currently shipping Room 1 and Room 3 with complete puzzle layouts, lighting, and character art. The UI system and core puzzle mechanics are fully implemented.",
    solutionDetail:
      "Lighting is handled through Godot's CanvasModulate + PointLight2D system, with per-room ambiance scripted in GDScript. All 2D character and environment sprites are original Aseprite pixel art.",
    reflection: [
      "Working as both programmer and primary artist on the same project taught me to time-box art tasks aggressively — polish creep on sprites is real.",
      "Design documents for each room saved enormous time during implementation. Rooms without docs took 3× as long to build.",
      "I'd add a playtesting session earlier in development — several puzzles that felt obvious to us confused external players immediately.",
    ],
    imageUrl: "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?w=1200&h=700&fit=crop&auto=format",
    solutionImageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&h=600&fit=crop&auto=format",
    color: "#0D1A15",
    status: "in-development",
    category: "game",
  },

  /* ── Complete games ───────────────────────────────────────── */
  {
    slug: "slimed-awakening",
    title: "Slimed: Awakening",
    hook: "A souls-like 2D dungeon crawler with procedurally generated maps, dodge/parry mechanics, and two bosses.",
    tags: ["Team · 5", "Lead artist", "Godot", "2024"],
    year: "2024",
    role: "Lead artist — all 2D pixel art, animation, environment art",
    timeline: "2024",
    tools: ["Godot", "Aseprite"],
    overview:
      "Slimed: Awakening is a 2D dungeon crawler with souls-like difficulty and procedurally generated maps. As lead artist, I created all pixel art: player and enemy sprites, animations, environment tilesets, ending cards, and promotional artwork.",
    audience:
      "Players who enjoy punishing but fair action games with expressive pixel art. Published on itch.io.",
    problem:
      "Creating cohesive pixel art for a procedurally generated dungeon meant designing a tileset modular enough to combine in arbitrary ways without looking repetitive — while still feeling hand-crafted.",
    explorationItems: [
      {
        title: "Hand-authored rooms with unique art per room",
        description: "Each room is individually designed and painted, maximizing visual variety.",
        tradeoff: "Not feasible for a procedural system — the generator needs reusable components, not unique rooms.",
      },
      {
        title: "Fully generic tileset with no thematic variation",
        description: "One universal tileset that works in every generated configuration.",
        tradeoff: "Fast to produce but makes every room feel identical, undermining the dungeon-exploration fantasy.",
      },
      {
        title: "Modular tileset with biome variation (chosen)",
        description: "A base tileset with three biome variants (color palette + accent tiles). The generator picks a biome per floor section.",
        tradeoff: "3× the tileset work up front but produces meaningful visual variety without requiring unique per-room art.",
      },
    ],
    edgeCases: [
      "Procedural generation occasionally produced unreachable rooms — required adding a flood-fill validation pass after generation.",
      "Boss attack animations needed to telegraph hitboxes accurately; early versions had frames where the visible swing and the damage area were misaligned.",
      "Aseprite's palette-swap export feature saved hours on biome variants but required careful layer organization to avoid bleed.",
    ],
    solution:
      "Slimed: Awakening shipped with a full pixel art suite: player and enemy sprites across multiple enemy types, two fully animated bosses, three biome tilesets, and illustrated ending cards.",
    solutionDetail:
      "All animations were authored in Aseprite and exported as sprite sheets, then imported into Godot's AnimationPlayer. Boss attack choreography was designed iteratively with the programmer to ensure hitbox timing matched animation frames.",
    reflection: [
      "Leading the art for a procedural game taught me to think systematically about reusable components — a lesson that changed how I approach all visual work now.",
      "The boss designs were the most time-intensive assets. I'd negotiate scope on those earlier in future projects.",
      "I underestimated how much promotional art matters for itch.io discoverability. The cover image drove most of our downloads.",
    ],
    imageUrl: "https://images.unsplash.com/photo-1614728894747-a83421789f10?w=1200&h=700&fit=crop&auto=format",
    solutionImageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&h=600&fit=crop&auto=format",
    color: "#0A0D1A",
    itchLink: "https://underduke.itch.io/slimed-awakening-beta",
    status: "complete",
    category: "game",
  },

  {
    slug: "slimed-origins",
    title: "Slimed: Origins",
    hook: "An interactive narrative where you investigate a murder as Tina, a triceratops — with three branching endings.",
    tags: ["Team · 4", "Lead artist", "Twine", "2023"],
    year: "2023",
    role: "Lead artist · Narrative design contributor",
    timeline: "2023",
    tools: ["Twine", "Aseprite"],
    overview:
      "Slimed: Origins is an interactive narrative game built in Twine. Players step into the hooves of Tina, a triceratops detective, to investigate a murder. Choices branch toward three distinct endings: confront the killer directly, rally others for war, or broker peace.",
    audience:
      "Players who enjoy narrative games with meaningful choices and expressive hand-drawn art. Entry in the Slimed series.",
    problem:
      "Illustrating a branching narrative meant producing character and environment art that worked across multiple story states without creating a separate illustration for every scene — a scope problem given a small team and short timeline.",
    explorationItems: [
      {
        title: "Unique illustration per scene",
        description: "A custom piece of art for every narrative node.",
        tradeoff: "Maximum visual quality but completely infeasible for a Twine game with dozens of branches.",
      },
      {
        title: "Text-only with no visual art",
        description: "Pure Twine narrative, leaning into the medium's text-game tradition.",
        tradeoff: "Fast to produce but loses the expressive character art that defines the Slimed series' identity.",
      },
      {
        title: "Layered character portraits with interchangeable expressions (chosen)",
        description: "Base character sprites with separately drawn expression/pose layers that composite in Twine via CSS.",
        tradeoff: "Requires upfront planning of which expression states are needed, but one base drawing covers many scenes.",
      },
    ],
    edgeCases: [
      "Twine's Harlowe story format has limited CSS scoping, causing portrait styles to leak between passages — fixed by namespacing all art-related classes.",
      "Branching logic for the three endings required tracking multiple flags simultaneously; Twine's variable system needed careful naming conventions to stay readable.",
      "Pixel art portraits at small display sizes lost detail — had to increase the base resolution and use nearest-neighbor scaling in CSS.",
    ],
    solution:
      "Slimed: Origins shipped with full character art for Tina and supporting cast, environment illustrations for each major location, and three playable endings with distinct narrative tones.",
    solutionDetail:
      "All character art was drawn in Aseprite as layered pixel art. Expression variants were exported as separate files and swapped via Twine's `(set:)` macros combined with CSS `background-image` changes.",
    reflection: [
      "Narrative design in a small team is a negotiation — balancing what the writer wants, what the artist can produce, and what the engine supports.",
      "I'd invest more time in the branching logic up front. Late-stage changes to story structure required reworking which art assets appeared where.",
      "The layered portrait system was a genuine breakthrough for me — I've used the same compositing approach in illustration work since.",
    ],
    imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=700&fit=crop&auto=format",
    solutionImageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&h=600&fit=crop&auto=format",
    color: "#1A100A",
    status: "complete",
    category: "game",
  },

  {
    slug: "crazy-old-mans-trip",
    title: "Crazy Old Man's Trip",
    hook: "A first-person shooter where you defeat cartoonish demons while your sanity slowly unravels.",
    tags: ["Team", "Art & design", "Unity", "2023"],
    year: "2023",
    role: "Texture & level designer · 2D asset artist",
    timeline: "2023",
    tools: ["Unity", "Photoshop", "Blender", "C#"],
    overview:
      "Crazy Old Man's Trip is a first-person shooter with a surreal twist: players battle cartoonish demons while a sanity mechanic distorts the world as enemies close in. I led texture and level design and contributed 2D assets, shaping the game's distinctive hand-painted visual identity.",
    audience:
      "Players who enjoy stylized horror and action games with a darkly comedic tone. Available on itch.io.",
    problem:
      "The visual challenge was making the game feel simultaneously playful and unsettling. The cartoonish demon aesthetic needed to land as funny but still threatening — getting that tone right in textures and level layout required serious iteration.",
    explorationItems: [
      {
        title: "Photorealistic textures with stylized characters",
        description: "High-resolution realistic environments contrasting with cartoon character art.",
        tradeoff: "The contrast felt dissonant — made the world feel unfinished rather than intentionally surreal.",
      },
      {
        title: "Fully hand-painted flat art style",
        description: "All textures painted in a flat 2D illustration style applied to 3D geometry.",
        tradeoff: "Distinctive but slow to produce and difficult to tile on repeated surfaces.",
      },
      {
        title: "Painterly textures with deliberate imperfection (chosen)",
        description: "Textures painted with visible brushwork and intentional color variation to disguise tiling.",
        tradeoff: "Faster than full illustration and more cohesive than realism. The imperfection reads as style.",
      },
    ],
    edgeCases: [
      "Unity's baked lightmapper showed seams at texture boundaries — fixed by painting texture edges with extra bleed.",
      "The sanity distortion shader conflicted with the skybox on some hardware — required adding a depth mask pass.",
      "Hand-painted assets at different scales looked inconsistent — standardized all texture resolutions.",
    ],
    solution:
      "Shipped with a cohesive hand-painted visual style, three levels with distinct layouts and moods, and a sanity distortion effect that compounds as enemies deal damage.",
    solutionDetail:
      "All textures painted in Photoshop using a consistent palette with warm shadows and cool highlights. Level layouts designed with sight-lines that force close engagement with enemies.",
    reflection: [
      "Designing levels before finalizing enemy behavior was a mistake — I reworked two layouts after understanding how the AI moved.",
      "The hand-painted style was right but took 3× longer than estimated. Better art scoping needed.",
      "Cross-discipline conversations earlier would have saved iteration time between artists and programmers.",
    ],
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&h=700&fit=crop&auto=format",
    solutionImageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&h=600&fit=crop&auto=format",
    color: "#1A0A0A",
    link: "https://github.com/monicajnc19/crazy-old-mans-trip",
    itchLink: "https://itch.io/monicajin/crazy-old-mans-trip",
    status: "complete",
    category: "game",
  },

  {
    slug: "catacombs",
    title: "Catacombs",
    hook: "A top-down RPG murder mystery set in a hotel — built as lead programmer and game manager.",
    tags: ["Team", "Lead programmer", "Unity", "2024"],
    year: "2024",
    role: "Lead programmer & game manager",
    timeline: "2024",
    tools: ["Unity", "C#", "UI Toolkit", "Git"],
    overview:
      "Catacombs is a top-down RPG murder mystery where players investigate a series of deaths in a shadowy hotel. As lead programmer and game manager, I owned the UI system, inventory and item logic, save/load mechanics, and all asset integration across the team.",
    audience:
      "Players who enjoy narrative puzzle games and mystery storytelling. Released on itch.io.",
    problem:
      "Managing a team game project meant solving two problems simultaneously: the technical complexity of interconnected game systems, and the coordination problem of integrating art, writing, and code from multiple contributors without breaking each other's work.",
    explorationItems: [
      {
        title: "Monolithic game manager script",
        description: "A single GameManager class owns all state and every system talks to it directly.",
        tradeoff: "Simple to understand but becomes a maintenance nightmare as systems grow.",
      },
      {
        title: "Fully event-driven architecture",
        description: "Systems communicate only through a global event bus with no direct references.",
        tradeoff: "Clean and decoupled, but hard to debug for teammates unfamiliar with the pattern.",
      },
      {
        title: "Modular managers with shared state object (chosen)",
        description: "Separate manager scripts for UI, inventory, save, and dialogue — all reading from a shared GameState scriptable object.",
        tradeoff: "Balances separation of concerns with debuggability. Each system is self-contained but state is inspectable in one place.",
      },
    ],
    edgeCases: [
      "Save data broke when item IDs changed mid-development — implemented stable string-based IDs.",
      "Two team members editing the same Unity scene caused constant merge conflicts — moved shared elements to prefabs.",
      "Inventory UI needed to support both keyboard and controller — required two input paths feeding the same logic.",
    ],
    solution:
      "Catacombs shipped on itch.io with a complete mystery narrative, working inventory and save system, and smooth UI across all game states.",
    solutionDetail:
      "The save system serializes GameState to JSON using Unity's JsonUtility. UI is built with Unity's UI Toolkit for cleaner layout control than legacy uGUI.",
    reflection: [
      "Leading a team project taught me that clear ownership and documentation matter as much as the code itself.",
      "I'd invest in automated testing earlier — a few save-system edge cases only appeared after release.",
      "Better onboarding in the tutorial would have significantly improved player reception.",
    ],
    imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&h=700&fit=crop&auto=format",
    solutionImageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&h=600&fit=crop&auto=format",
    color: "#1A1020",
    link: "https://github.com/monicajnc19/catacombs",
    itchLink: "https://itch.io/monicajin/catacombs",
    status: "complete",
    category: "game",
  },

  {
    slug: "battle-zone-3d",
    title: "Battle Zone 3D",
    hook: "A WebGL reimagining of the arcade classic — built from scratch with a custom graphics pipeline.",
    tags: ["Solo dev", "WebGL", "3D graphics", "2024"],
    year: "2024",
    role: "Sole programmer & 3D modeler",
    timeline: "Fall 2024",
    tools: ["WebGL", "JavaScript", "GLSL", "3D Modeling"],
    overview:
      "Battle Zone 3D is a browser-based 3D reimagining of the 1980 Atari arcade classic. I built the entire MVP graphics pipeline and shading system from scratch in WebGL, modeled all 3D assets, and added a mini-map — features the original never had.",
    audience:
      "Built as a graphics programming deep-dive, playable by anyone in the browser with no install required.",
    problem:
      "The core challenge was building a functional 3D rendering pipeline from first principles — no Three.js, no game engine. Perspective projection, vertex and fragment shaders, and a scene graph, all from scratch.",
    explorationItems: [
      {
        title: "Use an existing WebGL library (Three.js)",
        description: "Three.js handles the entire rendering pipeline — focus only on gameplay.",
        tradeoff: "Defeats the purpose. This was a graphics programming exercise requiring pipeline-level understanding.",
      },
      {
        title: "Canvas 2D with pseudo-3D raycasting",
        description: "Raycasting (à la Wolfenstein) fakes 3D with 2D math.",
        tradeoff: "Can't produce true 3D geometry. Ruled out because fidelity to the 3D aesthetic mattered.",
      },
      {
        title: "Raw WebGL with custom pipeline (chosen)",
        description: "Hand-written GLSL shaders, manual MVP matrix stack, minimal scene graph.",
        tradeoff: "High learning curve and slow to build, but produces real 3D geometry and full control over every visual decision.",
      },
    ],
    edgeCases: [
      "Depth buffer precision caused z-fighting on coplanar surfaces — fixed by adjusting near/far clip planes.",
      "Mini-map required a second camera rendered into a corner framebuffer — WebGL scissor testing took significant debugging.",
      "Different browsers handled GLSL precision specifiers inconsistently, causing visual artifacts.",
    ],
    solution:
      "The game runs fully in the browser with custom GLSL shaders, 3D-modeled tanks and environment, per-fragment lighting, and a functional mini-map. No external graphics libraries.",
    solutionDetail:
      "The graphics pipeline handles perspective projection, a basic lighting model, and texture mapping entirely in hand-written GLSL. Mini-map uses WebGL's scissor and viewport APIs.",
    reflection: [
      "Writing a graphics pipeline from scratch was the single most educational project I've done.",
      "The mini-map took 3× longer than expected — I'd time-box secondary features more strictly.",
      "The codebase grew organically. An entity-component system from the start would have helped enormously.",
    ],
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&h=700&fit=crop&auto=format",
    solutionImageUrl: "https://images.unsplash.com/photo-1614728894747-a83421789f10?w=1200&h=600&fit=crop&auto=format",
    color: "#0D1A0F",
    link: "https://github.com/monicajnc19/battle-zone-3d",
    status: "complete",
    category: "game",
  },

  /* ── Placeholder entries — fill in your details ─────────── */
  {
    slug: "tapioca-tails",
    title: "Tapioca Tails",
    hook: "[ Add your one-line description here ]",
    tags: ["[ Tag ]", "[ Tag ]", "[ Year ]"],
    year: "[ Year ]",
    role: "[ Your role ]",
    timeline: "[ Timeline ]",
    tools: ["[ Tool ]", "[ Tool ]"],
    overview: "[ Add your project overview here — what it is and who it's for. ]",
    audience: "[ Describe your target audience. ]",
    problem: "[ Describe the core design or technical challenge. ]",
    explorationItems: [
      { title: "[ Approach A ]", description: "[ Describe the approach. ]", tradeoff: "[ Tradeoff. ]" },
      { title: "[ Approach B (Chosen) ]", description: "[ Describe the approach. ]", tradeoff: "[ Tradeoff. ]" },
    ],
    edgeCases: ["[ Edge case or unexpected challenge. ]"],
    solution: "[ Describe what shipped. ]",
    solutionDetail: "[ Technical or design detail about the solution. ]",
    reflection: ["[ What you learned or would do differently. ]"],
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=700&fit=crop&auto=format",
    solutionImageUrl: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=1200&h=600&fit=crop&auto=format",
    color: "#1A1510",
    status: "complete",
    category: "game",
  },

  {
    slug: "encore",
    title: "Encore!",
    hook: "[ Add your one-line description here ]",
    tags: ["[ Tag ]", "[ Tag ]", "[ Year ]"],
    year: "[ Year ]",
    role: "[ Your role ]",
    timeline: "[ Timeline ]",
    tools: ["[ Tool ]", "[ Tool ]"],
    overview: "[ Add your project overview here. ]",
    audience: "[ Describe your target audience. ]",
    problem: "[ Describe the core challenge. ]",
    explorationItems: [
      { title: "[ Approach A ]", description: "[ Describe the approach. ]", tradeoff: "[ Tradeoff. ]" },
      { title: "[ Approach B (Chosen) ]", description: "[ Describe the approach. ]", tradeoff: "[ Tradeoff. ]" },
    ],
    edgeCases: ["[ Edge case or unexpected challenge. ]"],
    solution: "[ Describe what shipped. ]",
    solutionDetail: "[ Technical or design detail. ]",
    reflection: ["[ What you learned. ]"],
    imageUrl: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=1200&h=700&fit=crop&auto=format",
    solutionImageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop&auto=format",
    color: "#101A1A",
    status: "complete",
    category: "game",
  },

  /* ── Software projects ───────────────────────────────────── */
  {
    slug: "ai-glaze-visualization",
    title: "AI Glaze Visualizer",
    hook: "Machine learning applied to predicting and visualizing ceramic glaze outcomes before the kiln.",
    tags: ["Solo / team", "ML", "Python", "[ Year ]"],
    year: "[ Year ]",
    role: "[ Your role ]",
    timeline: "[ Timeline ]",
    tools: ["Python", "[ ML framework ]", "[ Add tools ]"],
    overview: "[ Add your project overview — what it is and who it's for. ]",
    audience: "[ Describe your target audience — ceramicists, researchers, students? ]",
    problem: "[ Describe the core ML or design challenge. ]",
    explorationItems: [
      { title: "[ Approach A ]", description: "[ Describe the approach. ]", tradeoff: "[ Tradeoff. ]" },
      { title: "[ Approach B (Chosen) ]", description: "[ Describe the approach. ]", tradeoff: "[ Tradeoff. ]" },
    ],
    edgeCases: ["[ Technical challenge encountered. ]"],
    solution: "[ Describe what shipped. ]",
    solutionDetail: "[ Technical detail. ]",
    reflection: ["[ What you learned. ]"],
    imageUrl: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=1200&h=700&fit=crop&auto=format",
    solutionImageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop&auto=format",
    color: "#0A1520",
    status: "complete",
    category: "software",
  },

  {
    slug: "adversarial-attacks",
    title: "Adversarial Attacks on AV Detectors",
    hook: "Exploring vulnerabilities in autonomous vehicle collision detection systems using adversarial ML.",
    tags: ["Research", "ML", "Python", "[ Year ]"],
    year: "[ Year ]",
    role: "[ Your role ]",
    timeline: "[ Timeline ]",
    tools: ["Python", "[ ML framework ]", "[ Add tools ]"],
    overview: "[ Add your project overview. ]",
    audience: "[ Researchers, safety engineers, ML practitioners. ]",
    problem: "[ Describe the research question and challenge. ]",
    explorationItems: [
      { title: "[ Attack method A ]", description: "[ Describe. ]", tradeoff: "[ Tradeoff. ]" },
      { title: "[ Attack method B (Chosen) ]", description: "[ Describe. ]", tradeoff: "[ Tradeoff. ]" },
    ],
    edgeCases: ["[ Research challenge. ]"],
    solution: "[ Describe findings or what was built. ]",
    solutionDetail: "[ Technical detail. ]",
    reflection: ["[ What you learned. ]"],
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=700&fit=crop&auto=format",
    solutionImageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=600&fit=crop&auto=format",
    color: "#0A0A1A",
    status: "complete",
    category: "software",
  },
];
